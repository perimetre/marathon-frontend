module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.{js,ts,jsx,tsx}'],
  // Default theme: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7
  theme: {
    extend: {
      colors: {
        // Theme colors:
        'mui-primary': 'var(--mui-primary, #DA291C)',
        'mui-dark': 'var(--mui-dark, #2D2926)',
        'mui-gray-50': 'var(--mui-gray-50, #eeeeee)',
        'mui-gray-300': 'var(--mui-gray-300, #C4C4C4)',
        // --------------- Colors under this are not theme related, and only are here so tailwind can generate helpers for them
        // Add a reset color
        'mui-initial': 'initial',
        // Adds a "placeholder" color option so it can be replaced
        'mui-placeholder-color': 'var(--mui-placeholder-color, var(--mui-primary, #DA291C))',
        // #EF4444 = Tailwind's red-500
        'mui-error': 'var(--mui-error-color, #EF4444)',
        'mui-success': 'var(--mui-success-color, #43a439)'
      },
      fontFamily: {
        'mui-text': ['"Helvetica Neue"', '"Open Sans"']
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out 0s both',
        'fade-out': 'fade-out 0.5s ease-out 0s both',
        'fade-into': 'fade-into 0.5s ease-out 0s both',
        skeleton: 'skeleton-background 2s ease infinite, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        'fade-into': {
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        'fade-in': {
          '100%': {
            opacity: '1'
          }
        },
        'fade-out': {
          '100%': {
            opacity: '0'
          }
        },
        skeletonBackground: {
          '0%': {
            backgroundPosition: '100%'
          },
          '100%': {
            backgroundPosition: '0%'
          }
        }
      },
      gridTemplateColumns: {
        sidebarModule: '2fr 3fr'
      },
      /**
       * Returns the minWidth values
       *
       * @param theme the provided tailwind theme
       */
      minWidth: (theme) => ({
        auto: 'auto',
        ...theme('spacing'),
        // Adds defaults with related percentages of screen width.
        // The percentage values are the same default percentage values of tailwind's width values. But with vw(view width) instead of %
        // Ref: https://github.com/tailwindlabs/tailwindcss/blob/e2fcb92b1be0bf2429c90f223aa98aff741660d7/stubs/defaultConfig.stub.js#L675
        '1/2vw': '50vw',
        '1/3vw': '33.333333vw',
        '2/3vw': '66.666667vw',
        '1/4vw': '25vw',
        '2/4vw': '50vw',
        '3/4vw': '75vw',
        '1/5vw': '20vw',
        '2/5vw': '40vw',
        '3/5vw': '60vw',
        '4/5vw': '80vw',
        '1/6vw': '16.666667vw',
        '2/6vw': '33.333333vw',
        '3/6vw': '50vw',
        '4/6vw': '66.666667vw',
        '5/6vw': '83.333333vw',
        '1/12vw': '8.333333vw',
        '2/12vw': '16.666667vw',
        '3/12vw': '25vw',
        '4/12vw': '33.333333vw',
        '5/12vw': '41.666667vw',
        '6/12vw': '50vw',
        '7/12vw': '58.333333vw',
        '8/12vw': '66.666667vw',
        '9/12vw': '75vw',
        '10/12vw': '83.333333vw',
        '11/12vw': '91.666667vw',
        full: '100%',
        'screen-90': '90vw',
        screen: '100vw',
        min: 'min-content',
        max: 'max-content',
        initial: 'initial'
      }),
      /**
       * Returns the minHeight values
       *
       * @param theme the provided tailwind theme
       */
      minHeight: (theme) => ({
        auto: 'auto',
        ...theme('spacing')
      }),
      screens: {
        print: { raw: 'print' },
        'no-print': { raw: 'not print' }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    require('./src/lib/tailwind/plugins/varPlaceholderColor')
  ]
};
