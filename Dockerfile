####################################
# Base image
####################################
FROM node:14.17.0-alpine AS base

# Set github token
ARG GITHUB_PACKAGES_TOKEN
ENV NPM_AUTH_TOKEN=${GITHUB_PACKAGES_TOKEN}

WORKDIR /base

COPY .babelrc ./
COPY .npmrc ./
COPY next.config.js ./
COPY package*.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY tsconfig.json ./

COPY src ./src
COPY locales ./locales
COPY public ./public

# RUN echo "registry=https://npm.pkg.github.com/perimetre" > ./.npmrc
RUN echo "//npm.pkg.github.com/:_authToken=${NPM_AUTH_TOKEN}" >> ./.npmrc
RUN echo "always-auth = true" >> ./.npmrc

RUN npm install npm@6.14
RUN npm ci --production


####################################
# Build process
####################################
FROM base AS build

ENV NODE_ENV=production

# Reads the values from the build args and insert them into the environment variables
ARG NEXT_PUBLIC_DEFAULT_LOCALE
ENV NEXT_PUBLIC_DEFAULT_LOCALE=${NEXT_PUBLIC_DEFAULT_LOCALE}
ARG NEXT_PUBLIC_GRAPHQL_URI
ENV NEXT_PUBLIC_GRAPHQL_URI=${NEXT_PUBLIC_GRAPHQL_URI}

WORKDIR /build

COPY --from=base /base ./

RUN npm run build


####################################
# Production image
####################################
FROM node:14.17.0-alpine AS production
ENV NODE_ENV=production
WORKDIR /app

COPY --from=build /build/package*.json ./
COPY --from=build /build/.babelrc.json ./
COPY --from=build /build/.npmrc ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public

RUN npm install next

# Expose port
EXPOSE $PORT

# Run command
CMD npm run serve
