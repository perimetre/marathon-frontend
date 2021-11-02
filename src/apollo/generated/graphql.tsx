import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Json: any;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  modules: Array<Module>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CategoryModulesArgs = {
  where?: Maybe<ModuleWhereInput>;
};

export type CategoryCreateNestedOneWithoutModuleCategoriesInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutModuleCategoriesInput>;
  create?: Maybe<CategoryCreateWithoutModuleCategoriesInput>;
};

export type CategoryCreateOrConnectWithoutModuleCategoriesInput = {
  create: CategoryCreateWithoutModuleCategoriesInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutModuleCategoriesInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CategoryOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
};

export type CategoryUpdateOneRequiredWithoutModuleCategoriesInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  connectOrCreate?: Maybe<CategoryCreateOrConnectWithoutModuleCategoriesInput>;
  create?: Maybe<CategoryCreateWithoutModuleCategoriesInput>;
  update?: Maybe<CategoryUpdateWithoutModuleCategoriesInput>;
  upsert?: Maybe<CategoryUpsertWithoutModuleCategoriesInput>;
};

export type CategoryUpdateWithoutModuleCategoriesInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithoutModuleCategoriesInput = {
  create: CategoryCreateWithoutModuleCategoriesInput;
  update: CategoryUpdateWithoutModuleCategoriesInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  id?: Maybe<IntFilter>;
  moduleCategories?: Maybe<ModuleCategoryListRelationFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type Collection = {
  __typename?: 'Collection';
  collectionFinishes: Array<CollectionFinishes>;
  description?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  modules: Array<Module>;
  name: Scalars['String'];
  projects: Array<Project>;
  slides: Array<Slide>;
  slug: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type CollectionCollectionFinishesArgs = {
  cursor?: Maybe<CollectionFinishesWhereUniqueInput>;
  orderBy?: Maybe<Array<CollectionFinishesOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CollectionFinishesWhereInput>;
};

export type CollectionModulesArgs = {
  cursor?: Maybe<ModuleWhereUniqueInput>;
  orderBy?: Maybe<Array<ModuleOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ModuleWhereInput>;
};

export type CollectionProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type CollectionSlidesArgs = {
  cursor?: Maybe<SlideWhereUniqueInput>;
  orderBy?: Maybe<Array<SlideOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SlideWhereInput>;
};

export type CollectionCreateNestedOneWithoutCollectionFinishesInput = {
  connect?: Maybe<CollectionWhereUniqueInput>;
  connectOrCreate?: Maybe<CollectionCreateOrConnectWithoutCollectionFinishesInput>;
  create?: Maybe<CollectionCreateWithoutCollectionFinishesInput>;
};

export type CollectionCreateNestedOneWithoutModulesInput = {
  connect?: Maybe<CollectionWhereUniqueInput>;
  connectOrCreate?: Maybe<CollectionCreateOrConnectWithoutModulesInput>;
  create?: Maybe<CollectionCreateWithoutModulesInput>;
};

export type CollectionCreateNestedOneWithoutProjectsInput = {
  connect?: Maybe<CollectionWhereUniqueInput>;
  connectOrCreate?: Maybe<CollectionCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<CollectionCreateWithoutProjectsInput>;
};

export type CollectionCreateNestedOneWithoutSlidesInput = {
  connect?: Maybe<CollectionWhereUniqueInput>;
  connectOrCreate?: Maybe<CollectionCreateOrConnectWithoutSlidesInput>;
  create?: Maybe<CollectionCreateWithoutSlidesInput>;
};

export type CollectionCreateOrConnectWithoutCollectionFinishesInput = {
  create: CollectionCreateWithoutCollectionFinishesInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionCreateOrConnectWithoutModulesInput = {
  create: CollectionCreateWithoutModulesInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionCreateOrConnectWithoutProjectsInput = {
  create: CollectionCreateWithoutProjectsInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionCreateOrConnectWithoutSlidesInput = {
  create: CollectionCreateWithoutSlidesInput;
  where: CollectionWhereUniqueInput;
};

export type CollectionCreateWithoutCollectionFinishesInput = {
  modules?: Maybe<ModuleCreateNestedManyWithoutCollectionInput>;
  projects?: Maybe<ProjectCreateNestedManyWithoutCollectionInput>;
  slides?: Maybe<SlideCreateNestedManyWithoutCollectionInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<CollectionTranslationsCreateNestedManyWithoutCollectionInput>;
};

export type CollectionCreateWithoutModulesInput = {
  collectionFinishes?: Maybe<CollectionFinishesCreateNestedManyWithoutCollectionInput>;
  projects?: Maybe<ProjectCreateNestedManyWithoutCollectionInput>;
  slides?: Maybe<SlideCreateNestedManyWithoutCollectionInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<CollectionTranslationsCreateNestedManyWithoutCollectionInput>;
};

export type CollectionCreateWithoutProjectsInput = {
  collectionFinishes?: Maybe<CollectionFinishesCreateNestedManyWithoutCollectionInput>;
  modules?: Maybe<ModuleCreateNestedManyWithoutCollectionInput>;
  slides?: Maybe<SlideCreateNestedManyWithoutCollectionInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<CollectionTranslationsCreateNestedManyWithoutCollectionInput>;
};

export type CollectionCreateWithoutSlidesInput = {
  collectionFinishes?: Maybe<CollectionFinishesCreateNestedManyWithoutCollectionInput>;
  modules?: Maybe<ModuleCreateNestedManyWithoutCollectionInput>;
  projects?: Maybe<ProjectCreateNestedManyWithoutCollectionInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<CollectionTranslationsCreateNestedManyWithoutCollectionInput>;
};

export type CollectionFinishes = {
  __typename?: 'CollectionFinishes';
  collection: Collection;
  collectionId: Scalars['Int'];
  finish: Finish;
  finishId: Scalars['Int'];
  id: Scalars['Int'];
};

export type CollectionFinishesCreateManyCollectionInput = {
  finishId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
};

export type CollectionFinishesCreateManyCollectionInputEnvelope = {
  data?: Maybe<Array<CollectionFinishesCreateManyCollectionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CollectionFinishesCreateManyFinishInput = {
  collectionId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
};

export type CollectionFinishesCreateManyFinishInputEnvelope = {
  data?: Maybe<Array<CollectionFinishesCreateManyFinishInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CollectionFinishesCreateNestedManyWithoutCollectionInput = {
  connect?: Maybe<Array<CollectionFinishesWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CollectionFinishesCreateOrConnectWithoutCollectionInput>>;
  create?: Maybe<Array<CollectionFinishesCreateWithoutCollectionInput>>;
  createMany?: Maybe<CollectionFinishesCreateManyCollectionInputEnvelope>;
};

export type CollectionFinishesCreateNestedManyWithoutFinishInput = {
  connect?: Maybe<Array<CollectionFinishesWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CollectionFinishesCreateOrConnectWithoutFinishInput>>;
  create?: Maybe<Array<CollectionFinishesCreateWithoutFinishInput>>;
  createMany?: Maybe<CollectionFinishesCreateManyFinishInputEnvelope>;
};

export type CollectionFinishesCreateOrConnectWithoutCollectionInput = {
  create: CollectionFinishesCreateWithoutCollectionInput;
  where: CollectionFinishesWhereUniqueInput;
};

export type CollectionFinishesCreateOrConnectWithoutFinishInput = {
  create: CollectionFinishesCreateWithoutFinishInput;
  where: CollectionFinishesWhereUniqueInput;
};

export type CollectionFinishesCreateWithoutCollectionInput = {
  finish: FinishCreateNestedOneWithoutCollectionFinishesInput;
};

export type CollectionFinishesCreateWithoutFinishInput = {
  collection: CollectionCreateNestedOneWithoutCollectionFinishesInput;
};

export type CollectionFinishesListRelationFilter = {
  every?: Maybe<CollectionFinishesWhereInput>;
  none?: Maybe<CollectionFinishesWhereInput>;
  some?: Maybe<CollectionFinishesWhereInput>;
};

export type CollectionFinishesOrderByInput = {
  collectionId?: Maybe<SortOrder>;
  finishId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type CollectionFinishesScalarWhereInput = {
  AND?: Maybe<Array<CollectionFinishesScalarWhereInput>>;
  NOT?: Maybe<Array<CollectionFinishesScalarWhereInput>>;
  OR?: Maybe<Array<CollectionFinishesScalarWhereInput>>;
  collectionId?: Maybe<IntFilter>;
  finishId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
};

export type CollectionFinishesUpdateManyMutationInput = {
  _?: Maybe<Scalars['Int']>;
};

export type CollectionFinishesUpdateManyWithWhereWithoutCollectionInput = {
  data: CollectionFinishesUpdateManyMutationInput;
  where: CollectionFinishesScalarWhereInput;
};

export type CollectionFinishesUpdateManyWithWhereWithoutFinishInput = {
  data: CollectionFinishesUpdateManyMutationInput;
  where: CollectionFinishesScalarWhereInput;
};

export type CollectionFinishesUpdateManyWithoutCollectionInput = {
  connect?: Maybe<Array<CollectionFinishesWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CollectionFinishesCreateOrConnectWithoutCollectionInput>>;
  create?: Maybe<Array<CollectionFinishesCreateWithoutCollectionInput>>;
  createMany?: Maybe<CollectionFinishesCreateManyCollectionInputEnvelope>;
  delete?: Maybe<Array<CollectionFinishesWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CollectionFinishesScalarWhereInput>>;
  disconnect?: Maybe<Array<CollectionFinishesWhereUniqueInput>>;
  set?: Maybe<Array<CollectionFinishesWhereUniqueInput>>;
  update?: Maybe<Array<CollectionFinishesUpdateWithWhereUniqueWithoutCollectionInput>>;
  updateMany?: Maybe<Array<CollectionFinishesUpdateManyWithWhereWithoutCollectionInput>>;
  upsert?: Maybe<Array<CollectionFinishesUpsertWithWhereUniqueWithoutCollectionInput>>;
};

export type CollectionFinishesUpdateManyWithoutFinishInput = {
  connect?: Maybe<Array<CollectionFinishesWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CollectionFinishesCreateOrConnectWithoutFinishInput>>;
  create?: Maybe<Array<CollectionFinishesCreateWithoutFinishInput>>;
  createMany?: Maybe<CollectionFinishesCreateManyFinishInputEnvelope>;
  delete?: Maybe<Array<CollectionFinishesWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CollectionFinishesScalarWhereInput>>;
  disconnect?: Maybe<Array<CollectionFinishesWhereUniqueInput>>;
  set?: Maybe<Array<CollectionFinishesWhereUniqueInput>>;
  update?: Maybe<Array<CollectionFinishesUpdateWithWhereUniqueWithoutFinishInput>>;
  updateMany?: Maybe<Array<CollectionFinishesUpdateManyWithWhereWithoutFinishInput>>;
  upsert?: Maybe<Array<CollectionFinishesUpsertWithWhereUniqueWithoutFinishInput>>;
};

export type CollectionFinishesUpdateWithWhereUniqueWithoutCollectionInput = {
  data: CollectionFinishesUpdateWithoutCollectionInput;
  where: CollectionFinishesWhereUniqueInput;
};

export type CollectionFinishesUpdateWithWhereUniqueWithoutFinishInput = {
  data: CollectionFinishesUpdateWithoutFinishInput;
  where: CollectionFinishesWhereUniqueInput;
};

export type CollectionFinishesUpdateWithoutCollectionInput = {
  finish?: Maybe<FinishUpdateOneRequiredWithoutCollectionFinishesInput>;
};

export type CollectionFinishesUpdateWithoutFinishInput = {
  collection?: Maybe<CollectionUpdateOneRequiredWithoutCollectionFinishesInput>;
};

export type CollectionFinishesUpsertWithWhereUniqueWithoutCollectionInput = {
  create: CollectionFinishesCreateWithoutCollectionInput;
  update: CollectionFinishesUpdateWithoutCollectionInput;
  where: CollectionFinishesWhereUniqueInput;
};

export type CollectionFinishesUpsertWithWhereUniqueWithoutFinishInput = {
  create: CollectionFinishesCreateWithoutFinishInput;
  update: CollectionFinishesUpdateWithoutFinishInput;
  where: CollectionFinishesWhereUniqueInput;
};

export type CollectionFinishesWhereInput = {
  AND?: Maybe<Array<CollectionFinishesWhereInput>>;
  NOT?: Maybe<Array<CollectionFinishesWhereInput>>;
  OR?: Maybe<Array<CollectionFinishesWhereInput>>;
  collection?: Maybe<CollectionWhereInput>;
  collectionId?: Maybe<IntFilter>;
  finish?: Maybe<FinishWhereInput>;
  finishId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
};

export type CollectionFinishesWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CollectionOrderByInput = {
  id?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  thumbnailUrl?: Maybe<SortOrder>;
};

export type CollectionTranslations = {
  __typename?: 'CollectionTranslations';
  collection: Collection;
  collectionId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  locale: Locale;
  name: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
};

export type CollectionTranslationsCreateManyCollectionInput = {
  description?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locale: Locale;
  name: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
};

export type CollectionTranslationsCreateManyCollectionInputEnvelope = {
  data?: Maybe<Array<CollectionTranslationsCreateManyCollectionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CollectionTranslationsCreateNestedManyWithoutCollectionInput = {
  connect?: Maybe<Array<CollectionTranslationsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CollectionTranslationsCreateOrConnectWithoutCollectionInput>>;
  create?: Maybe<Array<CollectionTranslationsCreateWithoutCollectionInput>>;
  createMany?: Maybe<CollectionTranslationsCreateManyCollectionInputEnvelope>;
};

export type CollectionTranslationsCreateOrConnectWithoutCollectionInput = {
  create: CollectionTranslationsCreateWithoutCollectionInput;
  where: CollectionTranslationsWhereUniqueInput;
};

export type CollectionTranslationsCreateWithoutCollectionInput = {
  description?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  locale: Locale;
  name: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
};

export type CollectionTranslationsListRelationFilter = {
  every?: Maybe<CollectionTranslationsWhereInput>;
  none?: Maybe<CollectionTranslationsWhereInput>;
  some?: Maybe<CollectionTranslationsWhereInput>;
};

export type CollectionTranslationsScalarWhereInput = {
  AND?: Maybe<Array<CollectionTranslationsScalarWhereInput>>;
  NOT?: Maybe<Array<CollectionTranslationsScalarWhereInput>>;
  OR?: Maybe<Array<CollectionTranslationsScalarWhereInput>>;
  collectionId?: Maybe<IntFilter>;
  description?: Maybe<StringNullableFilter>;
  footer?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  locale?: Maybe<EnumLocaleFilter>;
  name?: Maybe<StringFilter>;
  subtitle?: Maybe<StringNullableFilter>;
};

export type CollectionTranslationsUpdateManyMutationInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  footer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locale?: Maybe<EnumLocaleFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  subtitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CollectionTranslationsUpdateManyWithWhereWithoutCollectionInput = {
  data: CollectionTranslationsUpdateManyMutationInput;
  where: CollectionTranslationsScalarWhereInput;
};

export type CollectionTranslationsUpdateManyWithoutCollectionInput = {
  connect?: Maybe<Array<CollectionTranslationsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CollectionTranslationsCreateOrConnectWithoutCollectionInput>>;
  create?: Maybe<Array<CollectionTranslationsCreateWithoutCollectionInput>>;
  createMany?: Maybe<CollectionTranslationsCreateManyCollectionInputEnvelope>;
  delete?: Maybe<Array<CollectionTranslationsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CollectionTranslationsScalarWhereInput>>;
  disconnect?: Maybe<Array<CollectionTranslationsWhereUniqueInput>>;
  set?: Maybe<Array<CollectionTranslationsWhereUniqueInput>>;
  update?: Maybe<Array<CollectionTranslationsUpdateWithWhereUniqueWithoutCollectionInput>>;
  updateMany?: Maybe<Array<CollectionTranslationsUpdateManyWithWhereWithoutCollectionInput>>;
  upsert?: Maybe<Array<CollectionTranslationsUpsertWithWhereUniqueWithoutCollectionInput>>;
};

export type CollectionTranslationsUpdateWithWhereUniqueWithoutCollectionInput = {
  data: CollectionTranslationsUpdateWithoutCollectionInput;
  where: CollectionTranslationsWhereUniqueInput;
};

export type CollectionTranslationsUpdateWithoutCollectionInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  footer?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locale?: Maybe<EnumLocaleFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  subtitle?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CollectionTranslationsUpsertWithWhereUniqueWithoutCollectionInput = {
  create: CollectionTranslationsCreateWithoutCollectionInput;
  update: CollectionTranslationsUpdateWithoutCollectionInput;
  where: CollectionTranslationsWhereUniqueInput;
};

export type CollectionTranslationsWhereInput = {
  AND?: Maybe<Array<CollectionTranslationsWhereInput>>;
  NOT?: Maybe<Array<CollectionTranslationsWhereInput>>;
  OR?: Maybe<Array<CollectionTranslationsWhereInput>>;
  collection?: Maybe<CollectionWhereInput>;
  collectionId?: Maybe<IntFilter>;
  description?: Maybe<StringNullableFilter>;
  footer?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  locale?: Maybe<EnumLocaleFilter>;
  name?: Maybe<StringFilter>;
  subtitle?: Maybe<StringNullableFilter>;
};

export type CollectionTranslationsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type CollectionUpdateOneRequiredWithoutCollectionFinishesInput = {
  connect?: Maybe<CollectionWhereUniqueInput>;
  connectOrCreate?: Maybe<CollectionCreateOrConnectWithoutCollectionFinishesInput>;
  create?: Maybe<CollectionCreateWithoutCollectionFinishesInput>;
  update?: Maybe<CollectionUpdateWithoutCollectionFinishesInput>;
  upsert?: Maybe<CollectionUpsertWithoutCollectionFinishesInput>;
};

export type CollectionUpdateOneRequiredWithoutModulesInput = {
  connect?: Maybe<CollectionWhereUniqueInput>;
  connectOrCreate?: Maybe<CollectionCreateOrConnectWithoutModulesInput>;
  create?: Maybe<CollectionCreateWithoutModulesInput>;
  update?: Maybe<CollectionUpdateWithoutModulesInput>;
  upsert?: Maybe<CollectionUpsertWithoutModulesInput>;
};

export type CollectionUpdateOneRequiredWithoutProjectsInput = {
  connect?: Maybe<CollectionWhereUniqueInput>;
  connectOrCreate?: Maybe<CollectionCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<CollectionCreateWithoutProjectsInput>;
  update?: Maybe<CollectionUpdateWithoutProjectsInput>;
  upsert?: Maybe<CollectionUpsertWithoutProjectsInput>;
};

export type CollectionUpdateOneRequiredWithoutSlidesInput = {
  connect?: Maybe<CollectionWhereUniqueInput>;
  connectOrCreate?: Maybe<CollectionCreateOrConnectWithoutSlidesInput>;
  create?: Maybe<CollectionCreateWithoutSlidesInput>;
  update?: Maybe<CollectionUpdateWithoutSlidesInput>;
  upsert?: Maybe<CollectionUpsertWithoutSlidesInput>;
};

export type CollectionUpdateWithoutCollectionFinishesInput = {
  modules?: Maybe<ModuleUpdateManyWithoutCollectionInput>;
  projects?: Maybe<ProjectUpdateManyWithoutCollectionInput>;
  slides?: Maybe<SlideUpdateManyWithoutCollectionInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<CollectionTranslationsUpdateManyWithoutCollectionInput>;
};

export type CollectionUpdateWithoutModulesInput = {
  collectionFinishes?: Maybe<CollectionFinishesUpdateManyWithoutCollectionInput>;
  projects?: Maybe<ProjectUpdateManyWithoutCollectionInput>;
  slides?: Maybe<SlideUpdateManyWithoutCollectionInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<CollectionTranslationsUpdateManyWithoutCollectionInput>;
};

export type CollectionUpdateWithoutProjectsInput = {
  collectionFinishes?: Maybe<CollectionFinishesUpdateManyWithoutCollectionInput>;
  modules?: Maybe<ModuleUpdateManyWithoutCollectionInput>;
  slides?: Maybe<SlideUpdateManyWithoutCollectionInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<CollectionTranslationsUpdateManyWithoutCollectionInput>;
};

export type CollectionUpdateWithoutSlidesInput = {
  collectionFinishes?: Maybe<CollectionFinishesUpdateManyWithoutCollectionInput>;
  modules?: Maybe<ModuleUpdateManyWithoutCollectionInput>;
  projects?: Maybe<ProjectUpdateManyWithoutCollectionInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<CollectionTranslationsUpdateManyWithoutCollectionInput>;
};

export type CollectionUpsertWithoutCollectionFinishesInput = {
  create: CollectionCreateWithoutCollectionFinishesInput;
  update: CollectionUpdateWithoutCollectionFinishesInput;
};

export type CollectionUpsertWithoutModulesInput = {
  create: CollectionCreateWithoutModulesInput;
  update: CollectionUpdateWithoutModulesInput;
};

export type CollectionUpsertWithoutProjectsInput = {
  create: CollectionCreateWithoutProjectsInput;
  update: CollectionUpdateWithoutProjectsInput;
};

export type CollectionUpsertWithoutSlidesInput = {
  create: CollectionCreateWithoutSlidesInput;
  update: CollectionUpdateWithoutSlidesInput;
};

export type CollectionWhereInput = {
  AND?: Maybe<Array<CollectionWhereInput>>;
  NOT?: Maybe<Array<CollectionWhereInput>>;
  OR?: Maybe<Array<CollectionWhereInput>>;
  collectionFinishes?: Maybe<CollectionFinishesListRelationFilter>;
  id?: Maybe<IntFilter>;
  modules?: Maybe<ModuleListRelationFilter>;
  projects?: Maybe<ProjectListRelationFilter>;
  slides?: Maybe<SlideListRelationFilter>;
  slug?: Maybe<StringFilter>;
  thumbnailUrl?: Maybe<StringNullableFilter>;
  translations?: Maybe<CollectionTranslationsListRelationFilter>;
};

export type CollectionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type EnumLocaleFieldUpdateOperationsInput = {
  set?: Maybe<Locale>;
};

export type EnumLocaleFilter = {
  equals?: Maybe<Locale>;
  in?: Maybe<Array<Locale>>;
  not?: Maybe<NestedEnumLocaleFilter>;
  notIn?: Maybe<Array<Locale>>;
};

export type Finish = {
  __typename?: 'Finish';
  collectionFinishes: Array<CollectionFinishes>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  modules: Array<Module>;
  name: Scalars['String'];
  projects: Array<Project>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type FinishCollectionFinishesArgs = {
  cursor?: Maybe<CollectionFinishesWhereUniqueInput>;
  orderBy?: Maybe<Array<CollectionFinishesOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CollectionFinishesWhereInput>;
};

export type FinishModulesArgs = {
  cursor?: Maybe<ModuleWhereUniqueInput>;
  orderBy?: Maybe<Array<ModuleOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ModuleWhereInput>;
};

export type FinishProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type FinishCreateNestedOneWithoutCollectionFinishesInput = {
  connect?: Maybe<FinishWhereUniqueInput>;
  connectOrCreate?: Maybe<FinishCreateOrConnectWithoutCollectionFinishesInput>;
  create?: Maybe<FinishCreateWithoutCollectionFinishesInput>;
};

export type FinishCreateNestedOneWithoutModulesInput = {
  connect?: Maybe<FinishWhereUniqueInput>;
  connectOrCreate?: Maybe<FinishCreateOrConnectWithoutModulesInput>;
  create?: Maybe<FinishCreateWithoutModulesInput>;
};

export type FinishCreateNestedOneWithoutProjectsInput = {
  connect?: Maybe<FinishWhereUniqueInput>;
  connectOrCreate?: Maybe<FinishCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<FinishCreateWithoutProjectsInput>;
};

export type FinishCreateOrConnectWithoutCollectionFinishesInput = {
  create: FinishCreateWithoutCollectionFinishesInput;
  where: FinishWhereUniqueInput;
};

export type FinishCreateOrConnectWithoutModulesInput = {
  create: FinishCreateWithoutModulesInput;
  where: FinishWhereUniqueInput;
};

export type FinishCreateOrConnectWithoutProjectsInput = {
  create: FinishCreateWithoutProjectsInput;
  where: FinishWhereUniqueInput;
};

export type FinishCreateWithoutCollectionFinishesInput = {
  modules?: Maybe<ModuleCreateNestedManyWithoutFinishInput>;
  projects?: Maybe<ProjectCreateNestedManyWithoutFinishInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<FinishTranslationsCreateNestedManyWithoutFinishInput>;
};

export type FinishCreateWithoutModulesInput = {
  collectionFinishes?: Maybe<CollectionFinishesCreateNestedManyWithoutFinishInput>;
  projects?: Maybe<ProjectCreateNestedManyWithoutFinishInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<FinishTranslationsCreateNestedManyWithoutFinishInput>;
};

export type FinishCreateWithoutProjectsInput = {
  collectionFinishes?: Maybe<CollectionFinishesCreateNestedManyWithoutFinishInput>;
  modules?: Maybe<ModuleCreateNestedManyWithoutFinishInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<FinishTranslationsCreateNestedManyWithoutFinishInput>;
};

export type FinishOrderByInput = {
  id?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  thumbnailUrl?: Maybe<SortOrder>;
};

export type FinishTranslations = {
  __typename?: 'FinishTranslations';
  description?: Maybe<Scalars['String']>;
  finish: Finish;
  finishId: Scalars['Int'];
  id: Scalars['Int'];
  locale: Locale;
  name: Scalars['String'];
};

export type FinishTranslationsCreateManyFinishInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locale: Locale;
  name: Scalars['String'];
};

export type FinishTranslationsCreateManyFinishInputEnvelope = {
  data?: Maybe<Array<FinishTranslationsCreateManyFinishInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FinishTranslationsCreateNestedManyWithoutFinishInput = {
  connect?: Maybe<Array<FinishTranslationsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FinishTranslationsCreateOrConnectWithoutFinishInput>>;
  create?: Maybe<Array<FinishTranslationsCreateWithoutFinishInput>>;
  createMany?: Maybe<FinishTranslationsCreateManyFinishInputEnvelope>;
};

export type FinishTranslationsCreateOrConnectWithoutFinishInput = {
  create: FinishTranslationsCreateWithoutFinishInput;
  where: FinishTranslationsWhereUniqueInput;
};

export type FinishTranslationsCreateWithoutFinishInput = {
  description?: Maybe<Scalars['String']>;
  locale: Locale;
  name: Scalars['String'];
};

export type FinishTranslationsListRelationFilter = {
  every?: Maybe<FinishTranslationsWhereInput>;
  none?: Maybe<FinishTranslationsWhereInput>;
  some?: Maybe<FinishTranslationsWhereInput>;
};

export type FinishTranslationsScalarWhereInput = {
  AND?: Maybe<Array<FinishTranslationsScalarWhereInput>>;
  NOT?: Maybe<Array<FinishTranslationsScalarWhereInput>>;
  OR?: Maybe<Array<FinishTranslationsScalarWhereInput>>;
  description?: Maybe<StringNullableFilter>;
  finishId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  locale?: Maybe<EnumLocaleFilter>;
  name?: Maybe<StringFilter>;
};

export type FinishTranslationsUpdateManyMutationInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locale?: Maybe<EnumLocaleFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type FinishTranslationsUpdateManyWithWhereWithoutFinishInput = {
  data: FinishTranslationsUpdateManyMutationInput;
  where: FinishTranslationsScalarWhereInput;
};

export type FinishTranslationsUpdateManyWithoutFinishInput = {
  connect?: Maybe<Array<FinishTranslationsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FinishTranslationsCreateOrConnectWithoutFinishInput>>;
  create?: Maybe<Array<FinishTranslationsCreateWithoutFinishInput>>;
  createMany?: Maybe<FinishTranslationsCreateManyFinishInputEnvelope>;
  delete?: Maybe<Array<FinishTranslationsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FinishTranslationsScalarWhereInput>>;
  disconnect?: Maybe<Array<FinishTranslationsWhereUniqueInput>>;
  set?: Maybe<Array<FinishTranslationsWhereUniqueInput>>;
  update?: Maybe<Array<FinishTranslationsUpdateWithWhereUniqueWithoutFinishInput>>;
  updateMany?: Maybe<Array<FinishTranslationsUpdateManyWithWhereWithoutFinishInput>>;
  upsert?: Maybe<Array<FinishTranslationsUpsertWithWhereUniqueWithoutFinishInput>>;
};

export type FinishTranslationsUpdateWithWhereUniqueWithoutFinishInput = {
  data: FinishTranslationsUpdateWithoutFinishInput;
  where: FinishTranslationsWhereUniqueInput;
};

export type FinishTranslationsUpdateWithoutFinishInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locale?: Maybe<EnumLocaleFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type FinishTranslationsUpsertWithWhereUniqueWithoutFinishInput = {
  create: FinishTranslationsCreateWithoutFinishInput;
  update: FinishTranslationsUpdateWithoutFinishInput;
  where: FinishTranslationsWhereUniqueInput;
};

export type FinishTranslationsWhereInput = {
  AND?: Maybe<Array<FinishTranslationsWhereInput>>;
  NOT?: Maybe<Array<FinishTranslationsWhereInput>>;
  OR?: Maybe<Array<FinishTranslationsWhereInput>>;
  description?: Maybe<StringNullableFilter>;
  finish?: Maybe<FinishWhereInput>;
  finishId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  locale?: Maybe<EnumLocaleFilter>;
  name?: Maybe<StringFilter>;
};

export type FinishTranslationsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type FinishUpdateOneRequiredWithoutCollectionFinishesInput = {
  connect?: Maybe<FinishWhereUniqueInput>;
  connectOrCreate?: Maybe<FinishCreateOrConnectWithoutCollectionFinishesInput>;
  create?: Maybe<FinishCreateWithoutCollectionFinishesInput>;
  update?: Maybe<FinishUpdateWithoutCollectionFinishesInput>;
  upsert?: Maybe<FinishUpsertWithoutCollectionFinishesInput>;
};

export type FinishUpdateOneRequiredWithoutModulesInput = {
  connect?: Maybe<FinishWhereUniqueInput>;
  connectOrCreate?: Maybe<FinishCreateOrConnectWithoutModulesInput>;
  create?: Maybe<FinishCreateWithoutModulesInput>;
  update?: Maybe<FinishUpdateWithoutModulesInput>;
  upsert?: Maybe<FinishUpsertWithoutModulesInput>;
};

export type FinishUpdateOneRequiredWithoutProjectsInput = {
  connect?: Maybe<FinishWhereUniqueInput>;
  connectOrCreate?: Maybe<FinishCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<FinishCreateWithoutProjectsInput>;
  update?: Maybe<FinishUpdateWithoutProjectsInput>;
  upsert?: Maybe<FinishUpsertWithoutProjectsInput>;
};

export type FinishUpdateWithoutCollectionFinishesInput = {
  modules?: Maybe<ModuleUpdateManyWithoutFinishInput>;
  projects?: Maybe<ProjectUpdateManyWithoutFinishInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<FinishTranslationsUpdateManyWithoutFinishInput>;
};

export type FinishUpdateWithoutModulesInput = {
  collectionFinishes?: Maybe<CollectionFinishesUpdateManyWithoutFinishInput>;
  projects?: Maybe<ProjectUpdateManyWithoutFinishInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<FinishTranslationsUpdateManyWithoutFinishInput>;
};

export type FinishUpdateWithoutProjectsInput = {
  collectionFinishes?: Maybe<CollectionFinishesUpdateManyWithoutFinishInput>;
  modules?: Maybe<ModuleUpdateManyWithoutFinishInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<FinishTranslationsUpdateManyWithoutFinishInput>;
};

export type FinishUpsertWithoutCollectionFinishesInput = {
  create: FinishCreateWithoutCollectionFinishesInput;
  update: FinishUpdateWithoutCollectionFinishesInput;
};

export type FinishUpsertWithoutModulesInput = {
  create: FinishCreateWithoutModulesInput;
  update: FinishUpdateWithoutModulesInput;
};

export type FinishUpsertWithoutProjectsInput = {
  create: FinishCreateWithoutProjectsInput;
  update: FinishUpdateWithoutProjectsInput;
};

export type FinishWhereInput = {
  AND?: Maybe<Array<FinishWhereInput>>;
  NOT?: Maybe<Array<FinishWhereInput>>;
  OR?: Maybe<Array<FinishWhereInput>>;
  collectionFinishes?: Maybe<CollectionFinishesListRelationFilter>;
  id?: Maybe<IntFilter>;
  modules?: Maybe<ModuleListRelationFilter>;
  projects?: Maybe<ProjectListRelationFilter>;
  slug?: Maybe<StringFilter>;
  thumbnailUrl?: Maybe<StringNullableFilter>;
  translations?: Maybe<FinishTranslationsListRelationFilter>;
};

export type FinishWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type JsonNullableFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export enum Locale {
  En = 'en',
  Fr = 'fr'
}

export type Module = {
  __typename?: 'Module';
  bundleUrl?: Maybe<Scalars['String']>;
  categories: Array<Category>;
  collection: Collection;
  collectionId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  finish: Finish;
  finishId: Scalars['Int'];
  hasPegs: Scalars['Boolean'];
  id: Scalars['Int'];
  isImprintExtension: Scalars['Boolean'];
  isMat: Scalars['Boolean'];
  isSubmodule: Scalars['Boolean'];
  partNumber: Scalars['String'];
  projectModules: Array<ProjectModule>;
  rules?: Maybe<Scalars['Json']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type ModuleCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>;
};

export type ModuleProjectModulesArgs = {
  cursor?: Maybe<ProjectModuleWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectModuleOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectModuleWhereInput>;
};

export type ModuleCategory = {
  __typename?: 'ModuleCategory';
  category: Category;
  categoryId: Scalars['Int'];
  id: Scalars['Int'];
  module: Module;
  moduleId: Scalars['Int'];
};

export type ModuleCategoryCreateManyModuleInput = {
  categoryId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
};

export type ModuleCategoryCreateManyModuleInputEnvelope = {
  data?: Maybe<Array<ModuleCategoryCreateManyModuleInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleCategoryCreateNestedManyWithoutModuleInput = {
  connect?: Maybe<Array<ModuleCategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCategoryCreateOrConnectWithoutModuleInput>>;
  create?: Maybe<Array<ModuleCategoryCreateWithoutModuleInput>>;
  createMany?: Maybe<ModuleCategoryCreateManyModuleInputEnvelope>;
};

export type ModuleCategoryCreateOrConnectWithoutModuleInput = {
  create: ModuleCategoryCreateWithoutModuleInput;
  where: ModuleCategoryWhereUniqueInput;
};

export type ModuleCategoryCreateWithoutModuleInput = {
  category: CategoryCreateNestedOneWithoutModuleCategoriesInput;
};

export type ModuleCategoryListRelationFilter = {
  every?: Maybe<ModuleCategoryWhereInput>;
  none?: Maybe<ModuleCategoryWhereInput>;
  some?: Maybe<ModuleCategoryWhereInput>;
};

export type ModuleCategoryOrderByInput = {
  categoryId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  moduleId?: Maybe<SortOrder>;
};

export type ModuleCategoryScalarWhereInput = {
  AND?: Maybe<Array<ModuleCategoryScalarWhereInput>>;
  NOT?: Maybe<Array<ModuleCategoryScalarWhereInput>>;
  OR?: Maybe<Array<ModuleCategoryScalarWhereInput>>;
  categoryId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  moduleId?: Maybe<IntFilter>;
};

export type ModuleCategoryUpdateManyMutationInput = {
  _?: Maybe<Scalars['Int']>;
};

export type ModuleCategoryUpdateManyWithWhereWithoutModuleInput = {
  data: ModuleCategoryUpdateManyMutationInput;
  where: ModuleCategoryScalarWhereInput;
};

export type ModuleCategoryUpdateManyWithoutModuleInput = {
  connect?: Maybe<Array<ModuleCategoryWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCategoryCreateOrConnectWithoutModuleInput>>;
  create?: Maybe<Array<ModuleCategoryCreateWithoutModuleInput>>;
  createMany?: Maybe<ModuleCategoryCreateManyModuleInputEnvelope>;
  delete?: Maybe<Array<ModuleCategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModuleCategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<ModuleCategoryWhereUniqueInput>>;
  set?: Maybe<Array<ModuleCategoryWhereUniqueInput>>;
  update?: Maybe<Array<ModuleCategoryUpdateWithWhereUniqueWithoutModuleInput>>;
  updateMany?: Maybe<Array<ModuleCategoryUpdateManyWithWhereWithoutModuleInput>>;
  upsert?: Maybe<Array<ModuleCategoryUpsertWithWhereUniqueWithoutModuleInput>>;
};

export type ModuleCategoryUpdateWithWhereUniqueWithoutModuleInput = {
  data: ModuleCategoryUpdateWithoutModuleInput;
  where: ModuleCategoryWhereUniqueInput;
};

export type ModuleCategoryUpdateWithoutModuleInput = {
  category?: Maybe<CategoryUpdateOneRequiredWithoutModuleCategoriesInput>;
};

export type ModuleCategoryUpsertWithWhereUniqueWithoutModuleInput = {
  create: ModuleCategoryCreateWithoutModuleInput;
  update: ModuleCategoryUpdateWithoutModuleInput;
  where: ModuleCategoryWhereUniqueInput;
};

export type ModuleCategoryWhereInput = {
  AND?: Maybe<Array<ModuleCategoryWhereInput>>;
  NOT?: Maybe<Array<ModuleCategoryWhereInput>>;
  OR?: Maybe<Array<ModuleCategoryWhereInput>>;
  category?: Maybe<CategoryWhereInput>;
  categoryId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  module?: Maybe<ModuleWhereInput>;
  moduleId?: Maybe<IntFilter>;
};

export type ModuleCategoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ModuleCreateManyCollectionInput = {
  bundleUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  finishId: Scalars['Int'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  isImprintExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  partNumber: Scalars['String'];
  rules?: Maybe<Scalars['Json']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type ModuleCreateManyCollectionInputEnvelope = {
  data?: Maybe<Array<ModuleCreateManyCollectionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleCreateManyFinishInput = {
  bundleUrl?: Maybe<Scalars['String']>;
  collectionId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  isImprintExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  partNumber: Scalars['String'];
  rules?: Maybe<Scalars['Json']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type ModuleCreateManyFinishInputEnvelope = {
  data?: Maybe<Array<ModuleCreateManyFinishInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleCreateNestedManyWithoutCollectionInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutCollectionInput>>;
  create?: Maybe<Array<ModuleCreateWithoutCollectionInput>>;
  createMany?: Maybe<ModuleCreateManyCollectionInputEnvelope>;
};

export type ModuleCreateNestedManyWithoutFinishInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutFinishInput>>;
  create?: Maybe<Array<ModuleCreateWithoutFinishInput>>;
  createMany?: Maybe<ModuleCreateManyFinishInputEnvelope>;
};

export type ModuleCreateNestedOneWithoutProjectModulesInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutProjectModulesInput>;
  create?: Maybe<ModuleCreateWithoutProjectModulesInput>;
};

export type ModuleCreateOrConnectWithoutCollectionInput = {
  create: ModuleCreateWithoutCollectionInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutFinishInput = {
  create: ModuleCreateWithoutFinishInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutProjectModulesInput = {
  create: ModuleCreateWithoutProjectModulesInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateWithoutCollectionInput = {
  bundleUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isImprintExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type ModuleCreateWithoutFinishInput = {
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  description?: Maybe<Scalars['String']>;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isImprintExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type ModuleCreateWithoutProjectModulesInput = {
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  description?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isImprintExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  partNumber: Scalars['String'];
  rules?: Maybe<Scalars['Json']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type ModuleListRelationFilter = {
  every?: Maybe<ModuleWhereInput>;
  none?: Maybe<ModuleWhereInput>;
  some?: Maybe<ModuleWhereInput>;
};

export type ModuleOrderByInput = {
  bundleUrl?: Maybe<SortOrder>;
  collectionId?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  finishId?: Maybe<SortOrder>;
  hasPegs?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isImprintExtension?: Maybe<SortOrder>;
  isMat?: Maybe<SortOrder>;
  isSubmodule?: Maybe<SortOrder>;
  partNumber?: Maybe<SortOrder>;
  rules?: Maybe<SortOrder>;
  thumbnailUrl?: Maybe<SortOrder>;
};

export type ModuleScalarWhereInput = {
  AND?: Maybe<Array<ModuleScalarWhereInput>>;
  NOT?: Maybe<Array<ModuleScalarWhereInput>>;
  OR?: Maybe<Array<ModuleScalarWhereInput>>;
  bundleUrl?: Maybe<StringNullableFilter>;
  collectionId?: Maybe<IntFilter>;
  description?: Maybe<StringNullableFilter>;
  finishId?: Maybe<IntFilter>;
  hasPegs?: Maybe<BoolFilter>;
  id?: Maybe<IntFilter>;
  isImprintExtension?: Maybe<BoolFilter>;
  isMat?: Maybe<BoolFilter>;
  isSubmodule?: Maybe<BoolFilter>;
  partNumber?: Maybe<StringFilter>;
  rules?: Maybe<JsonNullableFilter>;
  thumbnailUrl?: Maybe<StringNullableFilter>;
};

export type ModuleUpdateManyMutationInput = {
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isImprintExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  rules?: Maybe<Scalars['Json']>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModuleUpdateManyWithWhereWithoutCollectionInput = {
  data: ModuleUpdateManyMutationInput;
  where: ModuleScalarWhereInput;
};

export type ModuleUpdateManyWithWhereWithoutFinishInput = {
  data: ModuleUpdateManyMutationInput;
  where: ModuleScalarWhereInput;
};

export type ModuleUpdateManyWithoutCollectionInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutCollectionInput>>;
  create?: Maybe<Array<ModuleCreateWithoutCollectionInput>>;
  createMany?: Maybe<ModuleCreateManyCollectionInputEnvelope>;
  delete?: Maybe<Array<ModuleWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModuleScalarWhereInput>>;
  disconnect?: Maybe<Array<ModuleWhereUniqueInput>>;
  set?: Maybe<Array<ModuleWhereUniqueInput>>;
  update?: Maybe<Array<ModuleUpdateWithWhereUniqueWithoutCollectionInput>>;
  updateMany?: Maybe<Array<ModuleUpdateManyWithWhereWithoutCollectionInput>>;
  upsert?: Maybe<Array<ModuleUpsertWithWhereUniqueWithoutCollectionInput>>;
};

export type ModuleUpdateManyWithoutFinishInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutFinishInput>>;
  create?: Maybe<Array<ModuleCreateWithoutFinishInput>>;
  createMany?: Maybe<ModuleCreateManyFinishInputEnvelope>;
  delete?: Maybe<Array<ModuleWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModuleScalarWhereInput>>;
  disconnect?: Maybe<Array<ModuleWhereUniqueInput>>;
  set?: Maybe<Array<ModuleWhereUniqueInput>>;
  update?: Maybe<Array<ModuleUpdateWithWhereUniqueWithoutFinishInput>>;
  updateMany?: Maybe<Array<ModuleUpdateManyWithWhereWithoutFinishInput>>;
  upsert?: Maybe<Array<ModuleUpsertWithWhereUniqueWithoutFinishInput>>;
};

export type ModuleUpdateOneRequiredWithoutProjectModulesInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutProjectModulesInput>;
  create?: Maybe<ModuleCreateWithoutProjectModulesInput>;
  update?: Maybe<ModuleUpdateWithoutProjectModulesInput>;
  upsert?: Maybe<ModuleUpsertWithoutProjectModulesInput>;
};

export type ModuleUpdateWithWhereUniqueWithoutCollectionInput = {
  data: ModuleUpdateWithoutCollectionInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpdateWithWhereUniqueWithoutFinishInput = {
  data: ModuleUpdateWithoutFinishInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpdateWithoutCollectionInput = {
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isImprintExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutFinishInput = {
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isImprintExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutProjectModulesInput = {
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isImprintExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  rules?: Maybe<Scalars['Json']>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type ModuleUpsertWithWhereUniqueWithoutCollectionInput = {
  create: ModuleCreateWithoutCollectionInput;
  update: ModuleUpdateWithoutCollectionInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpsertWithWhereUniqueWithoutFinishInput = {
  create: ModuleCreateWithoutFinishInput;
  update: ModuleUpdateWithoutFinishInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpsertWithoutProjectModulesInput = {
  create: ModuleCreateWithoutProjectModulesInput;
  update: ModuleUpdateWithoutProjectModulesInput;
};

export type ModuleWhereInput = {
  AND?: Maybe<Array<ModuleWhereInput>>;
  NOT?: Maybe<Array<ModuleWhereInput>>;
  OR?: Maybe<Array<ModuleWhereInput>>;
  bundleUrl?: Maybe<StringNullableFilter>;
  collection?: Maybe<CollectionWhereInput>;
  collectionId?: Maybe<IntFilter>;
  description?: Maybe<StringNullableFilter>;
  finish?: Maybe<FinishWhereInput>;
  finishId?: Maybe<IntFilter>;
  hasPegs?: Maybe<BoolFilter>;
  id?: Maybe<IntFilter>;
  isImprintExtension?: Maybe<BoolFilter>;
  isMat?: Maybe<BoolFilter>;
  isSubmodule?: Maybe<BoolFilter>;
  moduleCategories?: Maybe<ModuleCategoryListRelationFilter>;
  partNumber?: Maybe<StringFilter>;
  projectModules?: Maybe<ProjectModuleListRelationFilter>;
  rules?: Maybe<JsonNullableFilter>;
  thumbnailUrl?: Maybe<StringNullableFilter>;
};

export type ModuleWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  partNumber?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneProject: Project;
  updateOneProject?: Maybe<Project>;
};

export type MutationCreateOneProjectArgs = {
  data: ProjectCreateInput;
};

export type MutationUpdateOneProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedEnumLocaleFilter = {
  equals?: Maybe<Locale>;
  in?: Maybe<Array<Locale>>;
  not?: Maybe<NestedEnumLocaleFilter>;
  notIn?: Maybe<Array<Locale>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  collection: Collection;
  collectionId: Scalars['Int'];
  finish: Finish;
  finishId: Scalars['Int'];
  gable: Scalars['Float'];
  id: Scalars['Int'];
  modules: Array<Module>;
  projectModules: Array<ProjectModule>;
  slide: Slide;
  slideDepth: SlideDepth;
  slideDepthId: Scalars['Int'];
  slideId: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  type: Type;
  typeId: Scalars['Int'];
  width: Scalars['Float'];
};

export type ProjectProjectModulesArgs = {
  cursor?: Maybe<ProjectModuleWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ProjectCreateInput = {
  collection: CollectionCreateNestedOneWithoutProjectsInput;
  finish: FinishCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutProjectInput>;
  slide: SlideCreateNestedOneWithoutProjectsInput;
  slideDepth: SlideDepthCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: TypeCreateNestedOneWithoutProjectsInput;
  width: Scalars['Float'];
};

export type ProjectCreateManyCollectionInput = {
  finishId: Scalars['Int'];
  gable: Scalars['Float'];
  id?: Maybe<Scalars['Int']>;
  slideDepthId: Scalars['Int'];
  slideId: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  typeId: Scalars['Int'];
  width: Scalars['Float'];
};

export type ProjectCreateManyCollectionInputEnvelope = {
  data?: Maybe<Array<ProjectCreateManyCollectionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectCreateManyFinishInput = {
  collectionId: Scalars['Int'];
  gable: Scalars['Float'];
  id?: Maybe<Scalars['Int']>;
  slideDepthId: Scalars['Int'];
  slideId: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  typeId: Scalars['Int'];
  width: Scalars['Float'];
};

export type ProjectCreateManyFinishInputEnvelope = {
  data?: Maybe<Array<ProjectCreateManyFinishInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectCreateManySlideDepthInput = {
  collectionId: Scalars['Int'];
  finishId: Scalars['Int'];
  gable: Scalars['Float'];
  id?: Maybe<Scalars['Int']>;
  slideId: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  typeId: Scalars['Int'];
  width: Scalars['Float'];
};

export type ProjectCreateManySlideDepthInputEnvelope = {
  data?: Maybe<Array<ProjectCreateManySlideDepthInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectCreateManySlideInput = {
  collectionId: Scalars['Int'];
  finishId: Scalars['Int'];
  gable: Scalars['Float'];
  id?: Maybe<Scalars['Int']>;
  slideDepthId: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  typeId: Scalars['Int'];
  width: Scalars['Float'];
};

export type ProjectCreateManySlideInputEnvelope = {
  data?: Maybe<Array<ProjectCreateManySlideInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectCreateNestedManyWithoutCollectionInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutCollectionInput>>;
  create?: Maybe<Array<ProjectCreateWithoutCollectionInput>>;
  createMany?: Maybe<ProjectCreateManyCollectionInputEnvelope>;
};

export type ProjectCreateNestedManyWithoutFinishInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutFinishInput>>;
  create?: Maybe<Array<ProjectCreateWithoutFinishInput>>;
  createMany?: Maybe<ProjectCreateManyFinishInputEnvelope>;
};

export type ProjectCreateNestedManyWithoutSlideDepthInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutSlideDepthInput>>;
  create?: Maybe<Array<ProjectCreateWithoutSlideDepthInput>>;
  createMany?: Maybe<ProjectCreateManySlideDepthInputEnvelope>;
};

export type ProjectCreateNestedManyWithoutSlideInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutSlideInput>>;
  create?: Maybe<Array<ProjectCreateWithoutSlideInput>>;
  createMany?: Maybe<ProjectCreateManySlideInputEnvelope>;
};

export type ProjectCreateNestedOneWithoutProjectModulesInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutProjectModulesInput>;
  create?: Maybe<ProjectCreateWithoutProjectModulesInput>;
};

export type ProjectCreateOrConnectWithoutCollectionInput = {
  create: ProjectCreateWithoutCollectionInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutFinishInput = {
  create: ProjectCreateWithoutFinishInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutProjectModulesInput = {
  create: ProjectCreateWithoutProjectModulesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutSlideDepthInput = {
  create: ProjectCreateWithoutSlideDepthInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutSlideInput = {
  create: ProjectCreateWithoutSlideInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutCollectionInput = {
  finish: FinishCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutProjectInput>;
  slide: SlideCreateNestedOneWithoutProjectsInput;
  slideDepth: SlideDepthCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: TypeCreateNestedOneWithoutProjectsInput;
  width: Scalars['Float'];
};

export type ProjectCreateWithoutFinishInput = {
  collection: CollectionCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutProjectInput>;
  slide: SlideCreateNestedOneWithoutProjectsInput;
  slideDepth: SlideDepthCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: TypeCreateNestedOneWithoutProjectsInput;
  width: Scalars['Float'];
};

export type ProjectCreateWithoutProjectModulesInput = {
  collection: CollectionCreateNestedOneWithoutProjectsInput;
  finish: FinishCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  slide: SlideCreateNestedOneWithoutProjectsInput;
  slideDepth: SlideDepthCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: TypeCreateNestedOneWithoutProjectsInput;
  width: Scalars['Float'];
};

export type ProjectCreateWithoutSlideDepthInput = {
  collection: CollectionCreateNestedOneWithoutProjectsInput;
  finish: FinishCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutProjectInput>;
  slide: SlideCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: TypeCreateNestedOneWithoutProjectsInput;
  width: Scalars['Float'];
};

export type ProjectCreateWithoutSlideInput = {
  collection: CollectionCreateNestedOneWithoutProjectsInput;
  finish: FinishCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutProjectInput>;
  slideDepth: SlideDepthCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: TypeCreateNestedOneWithoutProjectsInput;
  width: Scalars['Float'];
};

export type ProjectListRelationFilter = {
  every?: Maybe<ProjectWhereInput>;
  none?: Maybe<ProjectWhereInput>;
  some?: Maybe<ProjectWhereInput>;
};

export type ProjectModule = {
  __typename?: 'ProjectModule';
  children: Array<ProjectModule>;
  id: Scalars['Int'];
  module: Module;
  moduleId: Scalars['Int'];
  parent?: Maybe<ProjectModule>;
  parentId?: Maybe<Scalars['Int']>;
  posX: Scalars['Float'];
  posZ: Scalars['Float'];
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['Int']>;
  rotZ: Scalars['Float'];
};

export type ProjectModuleChildrenArgs = {
  cursor?: Maybe<ProjectModuleWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ProjectModuleCreateManyModuleInput = {
  id?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  posX: Scalars['Float'];
  posZ: Scalars['Float'];
  projectId?: Maybe<Scalars['Int']>;
  rotZ: Scalars['Float'];
};

export type ProjectModuleCreateManyModuleInputEnvelope = {
  data?: Maybe<Array<ProjectModuleCreateManyModuleInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectModuleCreateManyParentInput = {
  id?: Maybe<Scalars['Int']>;
  moduleId: Scalars['Int'];
  posX: Scalars['Float'];
  posZ: Scalars['Float'];
  projectId?: Maybe<Scalars['Int']>;
  rotZ: Scalars['Float'];
};

export type ProjectModuleCreateManyParentInputEnvelope = {
  data?: Maybe<Array<ProjectModuleCreateManyParentInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectModuleCreateManyProjectInput = {
  id?: Maybe<Scalars['Int']>;
  moduleId: Scalars['Int'];
  parentId?: Maybe<Scalars['Int']>;
  posX: Scalars['Float'];
  posZ: Scalars['Float'];
  rotZ: Scalars['Float'];
};

export type ProjectModuleCreateManyProjectInputEnvelope = {
  data?: Maybe<Array<ProjectModuleCreateManyProjectInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectModuleCreateNestedManyWithoutModuleInput = {
  connect?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectModuleCreateOrConnectWithoutModuleInput>>;
  create?: Maybe<Array<ProjectModuleCreateWithoutModuleInput>>;
  createMany?: Maybe<ProjectModuleCreateManyModuleInputEnvelope>;
};

export type ProjectModuleCreateNestedManyWithoutParentInput = {
  connect?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectModuleCreateOrConnectWithoutParentInput>>;
  create?: Maybe<Array<ProjectModuleCreateWithoutParentInput>>;
  createMany?: Maybe<ProjectModuleCreateManyParentInputEnvelope>;
};

export type ProjectModuleCreateNestedManyWithoutProjectInput = {
  connect?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectModuleCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<ProjectModuleCreateWithoutProjectInput>>;
  createMany?: Maybe<ProjectModuleCreateManyProjectInputEnvelope>;
};

export type ProjectModuleCreateNestedOneWithoutChildrenInput = {
  connect?: Maybe<ProjectModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectModuleCreateOrConnectWithoutChildrenInput>;
  create?: Maybe<ProjectModuleCreateWithoutChildrenInput>;
};

export type ProjectModuleCreateOrConnectWithoutChildrenInput = {
  create: ProjectModuleCreateWithoutChildrenInput;
  where: ProjectModuleWhereUniqueInput;
};

export type ProjectModuleCreateOrConnectWithoutModuleInput = {
  create: ProjectModuleCreateWithoutModuleInput;
  where: ProjectModuleWhereUniqueInput;
};

export type ProjectModuleCreateOrConnectWithoutParentInput = {
  create: ProjectModuleCreateWithoutParentInput;
  where: ProjectModuleWhereUniqueInput;
};

export type ProjectModuleCreateOrConnectWithoutProjectInput = {
  create: ProjectModuleCreateWithoutProjectInput;
  where: ProjectModuleWhereUniqueInput;
};

export type ProjectModuleCreateWithoutChildrenInput = {
  module: ModuleCreateNestedOneWithoutProjectModulesInput;
  parent?: Maybe<ProjectModuleCreateNestedOneWithoutChildrenInput>;
  posX: Scalars['Float'];
  posZ: Scalars['Float'];
  project?: Maybe<ProjectCreateNestedOneWithoutProjectModulesInput>;
  rotZ: Scalars['Float'];
};

export type ProjectModuleCreateWithoutModuleInput = {
  children?: Maybe<ProjectModuleCreateNestedManyWithoutParentInput>;
  parent?: Maybe<ProjectModuleCreateNestedOneWithoutChildrenInput>;
  posX: Scalars['Float'];
  posZ: Scalars['Float'];
  project?: Maybe<ProjectCreateNestedOneWithoutProjectModulesInput>;
  rotZ: Scalars['Float'];
};

export type ProjectModuleCreateWithoutParentInput = {
  children?: Maybe<ProjectModuleCreateNestedManyWithoutParentInput>;
  module: ModuleCreateNestedOneWithoutProjectModulesInput;
  posX: Scalars['Float'];
  posZ: Scalars['Float'];
  project?: Maybe<ProjectCreateNestedOneWithoutProjectModulesInput>;
  rotZ: Scalars['Float'];
};

export type ProjectModuleCreateWithoutProjectInput = {
  children?: Maybe<ProjectModuleCreateNestedManyWithoutParentInput>;
  module: ModuleCreateNestedOneWithoutProjectModulesInput;
  parent?: Maybe<ProjectModuleCreateNestedOneWithoutChildrenInput>;
  posX: Scalars['Float'];
  posZ: Scalars['Float'];
  rotZ: Scalars['Float'];
};

export type ProjectModuleListRelationFilter = {
  every?: Maybe<ProjectModuleWhereInput>;
  none?: Maybe<ProjectModuleWhereInput>;
  some?: Maybe<ProjectModuleWhereInput>;
};

export type ProjectModuleOrderByInput = {
  id?: Maybe<SortOrder>;
  moduleId?: Maybe<SortOrder>;
  parentId?: Maybe<SortOrder>;
  posX?: Maybe<SortOrder>;
  posZ?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  rotZ?: Maybe<SortOrder>;
};

export type ProjectModuleScalarWhereInput = {
  AND?: Maybe<Array<ProjectModuleScalarWhereInput>>;
  NOT?: Maybe<Array<ProjectModuleScalarWhereInput>>;
  OR?: Maybe<Array<ProjectModuleScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  moduleId?: Maybe<IntFilter>;
  parentId?: Maybe<IntNullableFilter>;
  posX?: Maybe<FloatFilter>;
  posZ?: Maybe<FloatFilter>;
  projectId?: Maybe<IntNullableFilter>;
  rotZ?: Maybe<FloatFilter>;
};

export type ProjectModuleUpdateManyMutationInput = {
  posX?: Maybe<FloatFieldUpdateOperationsInput>;
  posZ?: Maybe<FloatFieldUpdateOperationsInput>;
  rotZ?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectModuleUpdateManyWithWhereWithoutModuleInput = {
  data: ProjectModuleUpdateManyMutationInput;
  where: ProjectModuleScalarWhereInput;
};

export type ProjectModuleUpdateManyWithWhereWithoutParentInput = {
  data: ProjectModuleUpdateManyMutationInput;
  where: ProjectModuleScalarWhereInput;
};

export type ProjectModuleUpdateManyWithWhereWithoutProjectInput = {
  data: ProjectModuleUpdateManyMutationInput;
  where: ProjectModuleScalarWhereInput;
};

export type ProjectModuleUpdateManyWithoutModuleInput = {
  connect?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectModuleCreateOrConnectWithoutModuleInput>>;
  create?: Maybe<Array<ProjectModuleCreateWithoutModuleInput>>;
  createMany?: Maybe<ProjectModuleCreateManyModuleInputEnvelope>;
  delete?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectModuleScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  set?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  update?: Maybe<Array<ProjectModuleUpdateWithWhereUniqueWithoutModuleInput>>;
  updateMany?: Maybe<Array<ProjectModuleUpdateManyWithWhereWithoutModuleInput>>;
  upsert?: Maybe<Array<ProjectModuleUpsertWithWhereUniqueWithoutModuleInput>>;
};

export type ProjectModuleUpdateManyWithoutParentInput = {
  connect?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectModuleCreateOrConnectWithoutParentInput>>;
  create?: Maybe<Array<ProjectModuleCreateWithoutParentInput>>;
  createMany?: Maybe<ProjectModuleCreateManyParentInputEnvelope>;
  delete?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectModuleScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  set?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  update?: Maybe<Array<ProjectModuleUpdateWithWhereUniqueWithoutParentInput>>;
  updateMany?: Maybe<Array<ProjectModuleUpdateManyWithWhereWithoutParentInput>>;
  upsert?: Maybe<Array<ProjectModuleUpsertWithWhereUniqueWithoutParentInput>>;
};

export type ProjectModuleUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectModuleCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<ProjectModuleCreateWithoutProjectInput>>;
  createMany?: Maybe<ProjectModuleCreateManyProjectInputEnvelope>;
  delete?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectModuleScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  set?: Maybe<Array<ProjectModuleWhereUniqueInput>>;
  update?: Maybe<Array<ProjectModuleUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<ProjectModuleUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: Maybe<Array<ProjectModuleUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type ProjectModuleUpdateOneWithoutChildrenInput = {
  connect?: Maybe<ProjectModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectModuleCreateOrConnectWithoutChildrenInput>;
  create?: Maybe<ProjectModuleCreateWithoutChildrenInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProjectModuleUpdateWithoutChildrenInput>;
  upsert?: Maybe<ProjectModuleUpsertWithoutChildrenInput>;
};

export type ProjectModuleUpdateWithWhereUniqueWithoutModuleInput = {
  data: ProjectModuleUpdateWithoutModuleInput;
  where: ProjectModuleWhereUniqueInput;
};

export type ProjectModuleUpdateWithWhereUniqueWithoutParentInput = {
  data: ProjectModuleUpdateWithoutParentInput;
  where: ProjectModuleWhereUniqueInput;
};

export type ProjectModuleUpdateWithWhereUniqueWithoutProjectInput = {
  data: ProjectModuleUpdateWithoutProjectInput;
  where: ProjectModuleWhereUniqueInput;
};

export type ProjectModuleUpdateWithoutChildrenInput = {
  module?: Maybe<ModuleUpdateOneRequiredWithoutProjectModulesInput>;
  parent?: Maybe<ProjectModuleUpdateOneWithoutChildrenInput>;
  posX?: Maybe<FloatFieldUpdateOperationsInput>;
  posZ?: Maybe<FloatFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneWithoutProjectModulesInput>;
  rotZ?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectModuleUpdateWithoutModuleInput = {
  children?: Maybe<ProjectModuleUpdateManyWithoutParentInput>;
  parent?: Maybe<ProjectModuleUpdateOneWithoutChildrenInput>;
  posX?: Maybe<FloatFieldUpdateOperationsInput>;
  posZ?: Maybe<FloatFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneWithoutProjectModulesInput>;
  rotZ?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectModuleUpdateWithoutParentInput = {
  children?: Maybe<ProjectModuleUpdateManyWithoutParentInput>;
  module?: Maybe<ModuleUpdateOneRequiredWithoutProjectModulesInput>;
  posX?: Maybe<FloatFieldUpdateOperationsInput>;
  posZ?: Maybe<FloatFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneWithoutProjectModulesInput>;
  rotZ?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectModuleUpdateWithoutProjectInput = {
  children?: Maybe<ProjectModuleUpdateManyWithoutParentInput>;
  module?: Maybe<ModuleUpdateOneRequiredWithoutProjectModulesInput>;
  parent?: Maybe<ProjectModuleUpdateOneWithoutChildrenInput>;
  posX?: Maybe<FloatFieldUpdateOperationsInput>;
  posZ?: Maybe<FloatFieldUpdateOperationsInput>;
  rotZ?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectModuleUpsertWithWhereUniqueWithoutModuleInput = {
  create: ProjectModuleCreateWithoutModuleInput;
  update: ProjectModuleUpdateWithoutModuleInput;
  where: ProjectModuleWhereUniqueInput;
};

export type ProjectModuleUpsertWithWhereUniqueWithoutParentInput = {
  create: ProjectModuleCreateWithoutParentInput;
  update: ProjectModuleUpdateWithoutParentInput;
  where: ProjectModuleWhereUniqueInput;
};

export type ProjectModuleUpsertWithWhereUniqueWithoutProjectInput = {
  create: ProjectModuleCreateWithoutProjectInput;
  update: ProjectModuleUpdateWithoutProjectInput;
  where: ProjectModuleWhereUniqueInput;
};

export type ProjectModuleUpsertWithoutChildrenInput = {
  create: ProjectModuleCreateWithoutChildrenInput;
  update: ProjectModuleUpdateWithoutChildrenInput;
};

export type ProjectModuleWhereInput = {
  AND?: Maybe<Array<ProjectModuleWhereInput>>;
  NOT?: Maybe<Array<ProjectModuleWhereInput>>;
  OR?: Maybe<Array<ProjectModuleWhereInput>>;
  children?: Maybe<ProjectModuleListRelationFilter>;
  id?: Maybe<IntFilter>;
  module?: Maybe<ModuleWhereInput>;
  moduleId?: Maybe<IntFilter>;
  parent?: Maybe<ProjectModuleWhereInput>;
  parentId?: Maybe<IntNullableFilter>;
  posX?: Maybe<FloatFilter>;
  posZ?: Maybe<FloatFilter>;
  project?: Maybe<ProjectWhereInput>;
  projectId?: Maybe<IntNullableFilter>;
  rotZ?: Maybe<FloatFilter>;
};

export type ProjectModuleWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ProjectOrderByInput = {
  collectionId?: Maybe<SortOrder>;
  finishId?: Maybe<SortOrder>;
  gable?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  slideDepthId?: Maybe<SortOrder>;
  slideId?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  typeId?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
};

export type ProjectScalarWhereInput = {
  AND?: Maybe<Array<ProjectScalarWhereInput>>;
  NOT?: Maybe<Array<ProjectScalarWhereInput>>;
  OR?: Maybe<Array<ProjectScalarWhereInput>>;
  collectionId?: Maybe<IntFilter>;
  finishId?: Maybe<IntFilter>;
  gable?: Maybe<FloatFilter>;
  id?: Maybe<IntFilter>;
  slideDepthId?: Maybe<IntFilter>;
  slideId?: Maybe<IntFilter>;
  slug?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  typeId?: Maybe<IntFilter>;
  width?: Maybe<FloatFilter>;
};

export type ProjectUpdateInput = {
  collection?: Maybe<CollectionUpdateOneRequiredWithoutProjectsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutProjectInput>;
  slide?: Maybe<SlideUpdateOneRequiredWithoutProjectsInput>;
  slideDepth?: Maybe<SlideDepthUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<TypeUpdateOneRequiredWithoutProjectsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyMutationInput = {
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyWithWhereWithoutCollectionInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithWhereWithoutFinishInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithWhereWithoutSlideDepthInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithWhereWithoutSlideInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutCollectionInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutCollectionInput>>;
  create?: Maybe<Array<ProjectCreateWithoutCollectionInput>>;
  createMany?: Maybe<ProjectCreateManyCollectionInputEnvelope>;
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  update?: Maybe<Array<ProjectUpdateWithWhereUniqueWithoutCollectionInput>>;
  updateMany?: Maybe<Array<ProjectUpdateManyWithWhereWithoutCollectionInput>>;
  upsert?: Maybe<Array<ProjectUpsertWithWhereUniqueWithoutCollectionInput>>;
};

export type ProjectUpdateManyWithoutFinishInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutFinishInput>>;
  create?: Maybe<Array<ProjectCreateWithoutFinishInput>>;
  createMany?: Maybe<ProjectCreateManyFinishInputEnvelope>;
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  update?: Maybe<Array<ProjectUpdateWithWhereUniqueWithoutFinishInput>>;
  updateMany?: Maybe<Array<ProjectUpdateManyWithWhereWithoutFinishInput>>;
  upsert?: Maybe<Array<ProjectUpsertWithWhereUniqueWithoutFinishInput>>;
};

export type ProjectUpdateManyWithoutSlideDepthInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutSlideDepthInput>>;
  create?: Maybe<Array<ProjectCreateWithoutSlideDepthInput>>;
  createMany?: Maybe<ProjectCreateManySlideDepthInputEnvelope>;
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  update?: Maybe<Array<ProjectUpdateWithWhereUniqueWithoutSlideDepthInput>>;
  updateMany?: Maybe<Array<ProjectUpdateManyWithWhereWithoutSlideDepthInput>>;
  upsert?: Maybe<Array<ProjectUpsertWithWhereUniqueWithoutSlideDepthInput>>;
};

export type ProjectUpdateManyWithoutSlideInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutSlideInput>>;
  create?: Maybe<Array<ProjectCreateWithoutSlideInput>>;
  createMany?: Maybe<ProjectCreateManySlideInputEnvelope>;
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  update?: Maybe<Array<ProjectUpdateWithWhereUniqueWithoutSlideInput>>;
  updateMany?: Maybe<Array<ProjectUpdateManyWithWhereWithoutSlideInput>>;
  upsert?: Maybe<Array<ProjectUpsertWithWhereUniqueWithoutSlideInput>>;
};

export type ProjectUpdateOneWithoutProjectModulesInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutProjectModulesInput>;
  create?: Maybe<ProjectCreateWithoutProjectModulesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProjectUpdateWithoutProjectModulesInput>;
  upsert?: Maybe<ProjectUpsertWithoutProjectModulesInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutCollectionInput = {
  data: ProjectUpdateWithoutCollectionInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithWhereUniqueWithoutFinishInput = {
  data: ProjectUpdateWithoutFinishInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithWhereUniqueWithoutSlideDepthInput = {
  data: ProjectUpdateWithoutSlideDepthInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithWhereUniqueWithoutSlideInput = {
  data: ProjectUpdateWithoutSlideInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutCollectionInput = {
  finish?: Maybe<FinishUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutProjectInput>;
  slide?: Maybe<SlideUpdateOneRequiredWithoutProjectsInput>;
  slideDepth?: Maybe<SlideDepthUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<TypeUpdateOneRequiredWithoutProjectsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutFinishInput = {
  collection?: Maybe<CollectionUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutProjectInput>;
  slide?: Maybe<SlideUpdateOneRequiredWithoutProjectsInput>;
  slideDepth?: Maybe<SlideDepthUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<TypeUpdateOneRequiredWithoutProjectsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutProjectModulesInput = {
  collection?: Maybe<CollectionUpdateOneRequiredWithoutProjectsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  slide?: Maybe<SlideUpdateOneRequiredWithoutProjectsInput>;
  slideDepth?: Maybe<SlideDepthUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<TypeUpdateOneRequiredWithoutProjectsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutSlideDepthInput = {
  collection?: Maybe<CollectionUpdateOneRequiredWithoutProjectsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutProjectInput>;
  slide?: Maybe<SlideUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<TypeUpdateOneRequiredWithoutProjectsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutSlideInput = {
  collection?: Maybe<CollectionUpdateOneRequiredWithoutProjectsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutProjectInput>;
  slideDepth?: Maybe<SlideDepthUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<TypeUpdateOneRequiredWithoutProjectsInput>;
  width?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithWhereUniqueWithoutCollectionInput = {
  create: ProjectCreateWithoutCollectionInput;
  update: ProjectUpdateWithoutCollectionInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithWhereUniqueWithoutFinishInput = {
  create: ProjectCreateWithoutFinishInput;
  update: ProjectUpdateWithoutFinishInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithWhereUniqueWithoutSlideDepthInput = {
  create: ProjectCreateWithoutSlideDepthInput;
  update: ProjectUpdateWithoutSlideDepthInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithWhereUniqueWithoutSlideInput = {
  create: ProjectCreateWithoutSlideInput;
  update: ProjectUpdateWithoutSlideInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutProjectModulesInput = {
  create: ProjectCreateWithoutProjectModulesInput;
  update: ProjectUpdateWithoutProjectModulesInput;
};

export type ProjectWhereInput = {
  AND?: Maybe<Array<ProjectWhereInput>>;
  NOT?: Maybe<Array<ProjectWhereInput>>;
  OR?: Maybe<Array<ProjectWhereInput>>;
  collection?: Maybe<CollectionWhereInput>;
  collectionId?: Maybe<IntFilter>;
  finish?: Maybe<FinishWhereInput>;
  finishId?: Maybe<IntFilter>;
  gable?: Maybe<FloatFilter>;
  id?: Maybe<IntFilter>;
  projectModules?: Maybe<ProjectModuleListRelationFilter>;
  slide?: Maybe<SlideWhereInput>;
  slideDepth?: Maybe<SlideDepthWhereInput>;
  slideDepthId?: Maybe<IntFilter>;
  slideId?: Maybe<IntFilter>;
  slug?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  type?: Maybe<TypeWhereInput>;
  typeId?: Maybe<IntFilter>;
  width?: Maybe<FloatFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collectionFinishes: Array<CollectionFinishes>;
  collections: Array<Collection>;
  finish?: Maybe<Finish>;
  finishes: Array<Finish>;
  module?: Maybe<Module>;
  moduleCategories: Array<ModuleCategory>;
  moduleCategory?: Maybe<ModuleCategory>;
  modules: Array<Module>;
  project?: Maybe<Project>;
  projectModule?: Maybe<ProjectModule>;
  projectModules: Array<ProjectModule>;
  projects: Array<Project>;
  slide?: Maybe<Slide>;
  slideDepth?: Maybe<SlideDepth>;
  slideDepths: Array<SlideDepth>;
  slideSupplier?: Maybe<SlideSupplier>;
  slideSuppliers: Array<SlideSupplier>;
  slides: Array<Slide>;
  type?: Maybe<Type>;
  types: Array<Type>;
};

export type QueryCategoriesArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  orderBy?: Maybe<Array<CategoryOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};

export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};

export type QueryCollectionArgs = {
  where: CollectionWhereUniqueInput;
};

export type QueryCollectionFinishesArgs = {
  cursor?: Maybe<CollectionFinishesWhereUniqueInput>;
  orderBy?: Maybe<Array<CollectionFinishesOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CollectionFinishesWhereInput>;
};

export type QueryCollectionsArgs = {
  cursor?: Maybe<CollectionWhereUniqueInput>;
  orderBy?: Maybe<Array<CollectionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CollectionWhereInput>;
};

export type QueryFinishArgs = {
  where: FinishWhereUniqueInput;
};

export type QueryFinishesArgs = {
  cursor?: Maybe<FinishWhereUniqueInput>;
  orderBy?: Maybe<Array<FinishOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FinishWhereInput>;
};

export type QueryModuleArgs = {
  where: ModuleWhereUniqueInput;
};

export type QueryModuleCategoriesArgs = {
  cursor?: Maybe<ModuleCategoryWhereUniqueInput>;
  orderBy?: Maybe<Array<ModuleCategoryOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ModuleCategoryWhereInput>;
};

export type QueryModuleCategoryArgs = {
  where: ModuleCategoryWhereUniqueInput;
};

export type QueryModulesArgs = {
  cursor?: Maybe<ModuleWhereUniqueInput>;
  orderBy?: Maybe<Array<ModuleOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ModuleWhereInput>;
};

export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type QueryProjectModuleArgs = {
  where: ProjectModuleWhereUniqueInput;
};

export type QueryProjectModulesArgs = {
  cursor?: Maybe<ProjectModuleWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectModuleOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectModuleWhereInput>;
};

export type QueryProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type QuerySlideArgs = {
  where: SlideWhereUniqueInput;
};

export type QuerySlideDepthArgs = {
  where: SlideDepthWhereUniqueInput;
};

export type QuerySlideDepthsArgs = {
  cursor?: Maybe<SlideDepthWhereUniqueInput>;
  orderBy?: Maybe<Array<SlideDepthOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SlideDepthWhereInput>;
};

export type QuerySlideSupplierArgs = {
  where: SlideSupplierWhereUniqueInput;
};

export type QuerySlideSuppliersArgs = {
  cursor?: Maybe<SlideSupplierWhereUniqueInput>;
  orderBy?: Maybe<Array<SlideSupplierOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SlideSupplierWhereInput>;
};

export type QuerySlidesArgs = {
  cursor?: Maybe<SlideWhereUniqueInput>;
  orderBy?: Maybe<Array<SlideOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SlideWhereInput>;
};

export type QueryTypeArgs = {
  where: TypeWhereUniqueInput;
};

export type QueryTypesArgs = {
  cursor?: Maybe<TypeWhereUniqueInput>;
  orderBy?: Maybe<Array<TypeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TypeWhereInput>;
};

export type Slide = {
  __typename?: 'Slide';
  collection: Collection;
  collectionId: Scalars['Int'];
  depths: Array<SlideDepth>;
  formula: Scalars['String'];
  id: Scalars['Int'];
  product: Scalars['String'];
  projects: Array<Project>;
  slug: Scalars['String'];
  supplier: SlideSupplier;
  supplierId: Scalars['Int'];
};

export type SlideDepthsArgs = {
  cursor?: Maybe<SlideDepthWhereUniqueInput>;
  orderBy?: Maybe<Array<SlideDepthOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SlideDepthWhereInput>;
};

export type SlideProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type SlideCreateManyCollectionInput = {
  formula: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  product: Scalars['String'];
  slug: Scalars['String'];
  supplierId: Scalars['Int'];
};

export type SlideCreateManyCollectionInputEnvelope = {
  data?: Maybe<Array<SlideCreateManyCollectionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SlideCreateNestedManyWithoutCollectionInput = {
  connect?: Maybe<Array<SlideWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SlideCreateOrConnectWithoutCollectionInput>>;
  create?: Maybe<Array<SlideCreateWithoutCollectionInput>>;
  createMany?: Maybe<SlideCreateManyCollectionInputEnvelope>;
};

export type SlideCreateNestedOneWithoutDepthsInput = {
  connect?: Maybe<SlideWhereUniqueInput>;
  connectOrCreate?: Maybe<SlideCreateOrConnectWithoutDepthsInput>;
  create?: Maybe<SlideCreateWithoutDepthsInput>;
};

export type SlideCreateNestedOneWithoutProjectsInput = {
  connect?: Maybe<SlideWhereUniqueInput>;
  connectOrCreate?: Maybe<SlideCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<SlideCreateWithoutProjectsInput>;
};

export type SlideCreateOrConnectWithoutCollectionInput = {
  create: SlideCreateWithoutCollectionInput;
  where: SlideWhereUniqueInput;
};

export type SlideCreateOrConnectWithoutDepthsInput = {
  create: SlideCreateWithoutDepthsInput;
  where: SlideWhereUniqueInput;
};

export type SlideCreateOrConnectWithoutProjectsInput = {
  create: SlideCreateWithoutProjectsInput;
  where: SlideWhereUniqueInput;
};

export type SlideCreateWithoutCollectionInput = {
  depths?: Maybe<SlideDepthCreateNestedManyWithoutSlideInput>;
  formula: Scalars['String'];
  product: Scalars['String'];
  projects?: Maybe<ProjectCreateNestedManyWithoutSlideInput>;
  slug: Scalars['String'];
  supplier: SlideSupplierCreateNestedOneWithoutSlidesInput;
};

export type SlideCreateWithoutDepthsInput = {
  collection: CollectionCreateNestedOneWithoutSlidesInput;
  formula: Scalars['String'];
  product: Scalars['String'];
  projects?: Maybe<ProjectCreateNestedManyWithoutSlideInput>;
  slug: Scalars['String'];
  supplier: SlideSupplierCreateNestedOneWithoutSlidesInput;
};

export type SlideCreateWithoutProjectsInput = {
  collection: CollectionCreateNestedOneWithoutSlidesInput;
  depths?: Maybe<SlideDepthCreateNestedManyWithoutSlideInput>;
  formula: Scalars['String'];
  product: Scalars['String'];
  slug: Scalars['String'];
  supplier: SlideSupplierCreateNestedOneWithoutSlidesInput;
};

export type SlideDepth = {
  __typename?: 'SlideDepth';
  depth: Scalars['Float'];
  display: Scalars['String'];
  id: Scalars['Int'];
  projects: Array<Project>;
  slide: Slide;
  slideId: Scalars['Int'];
};

export type SlideDepthProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type SlideDepthCreateManySlideInput = {
  depth: Scalars['Float'];
  display: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
};

export type SlideDepthCreateManySlideInputEnvelope = {
  data?: Maybe<Array<SlideDepthCreateManySlideInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SlideDepthCreateNestedManyWithoutSlideInput = {
  connect?: Maybe<Array<SlideDepthWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SlideDepthCreateOrConnectWithoutSlideInput>>;
  create?: Maybe<Array<SlideDepthCreateWithoutSlideInput>>;
  createMany?: Maybe<SlideDepthCreateManySlideInputEnvelope>;
};

export type SlideDepthCreateNestedOneWithoutProjectsInput = {
  connect?: Maybe<SlideDepthWhereUniqueInput>;
  connectOrCreate?: Maybe<SlideDepthCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<SlideDepthCreateWithoutProjectsInput>;
};

export type SlideDepthCreateOrConnectWithoutProjectsInput = {
  create: SlideDepthCreateWithoutProjectsInput;
  where: SlideDepthWhereUniqueInput;
};

export type SlideDepthCreateOrConnectWithoutSlideInput = {
  create: SlideDepthCreateWithoutSlideInput;
  where: SlideDepthWhereUniqueInput;
};

export type SlideDepthCreateWithoutProjectsInput = {
  depth: Scalars['Float'];
  display: Scalars['String'];
  slide: SlideCreateNestedOneWithoutDepthsInput;
};

export type SlideDepthCreateWithoutSlideInput = {
  depth: Scalars['Float'];
  display: Scalars['String'];
  projects?: Maybe<ProjectCreateNestedManyWithoutSlideDepthInput>;
};

export type SlideDepthListRelationFilter = {
  every?: Maybe<SlideDepthWhereInput>;
  none?: Maybe<SlideDepthWhereInput>;
  some?: Maybe<SlideDepthWhereInput>;
};

export type SlideDepthOrderByInput = {
  depth?: Maybe<SortOrder>;
  display?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  slideId?: Maybe<SortOrder>;
};

export type SlideDepthScalarWhereInput = {
  AND?: Maybe<Array<SlideDepthScalarWhereInput>>;
  NOT?: Maybe<Array<SlideDepthScalarWhereInput>>;
  OR?: Maybe<Array<SlideDepthScalarWhereInput>>;
  depth?: Maybe<FloatFilter>;
  display?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  slideId?: Maybe<IntFilter>;
};

export type SlideDepthUpdateManyMutationInput = {
  depth?: Maybe<FloatFieldUpdateOperationsInput>;
  display?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SlideDepthUpdateManyWithWhereWithoutSlideInput = {
  data: SlideDepthUpdateManyMutationInput;
  where: SlideDepthScalarWhereInput;
};

export type SlideDepthUpdateManyWithoutSlideInput = {
  connect?: Maybe<Array<SlideDepthWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SlideDepthCreateOrConnectWithoutSlideInput>>;
  create?: Maybe<Array<SlideDepthCreateWithoutSlideInput>>;
  createMany?: Maybe<SlideDepthCreateManySlideInputEnvelope>;
  delete?: Maybe<Array<SlideDepthWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SlideDepthScalarWhereInput>>;
  disconnect?: Maybe<Array<SlideDepthWhereUniqueInput>>;
  set?: Maybe<Array<SlideDepthWhereUniqueInput>>;
  update?: Maybe<Array<SlideDepthUpdateWithWhereUniqueWithoutSlideInput>>;
  updateMany?: Maybe<Array<SlideDepthUpdateManyWithWhereWithoutSlideInput>>;
  upsert?: Maybe<Array<SlideDepthUpsertWithWhereUniqueWithoutSlideInput>>;
};

export type SlideDepthUpdateOneRequiredWithoutProjectsInput = {
  connect?: Maybe<SlideDepthWhereUniqueInput>;
  connectOrCreate?: Maybe<SlideDepthCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<SlideDepthCreateWithoutProjectsInput>;
  update?: Maybe<SlideDepthUpdateWithoutProjectsInput>;
  upsert?: Maybe<SlideDepthUpsertWithoutProjectsInput>;
};

export type SlideDepthUpdateWithWhereUniqueWithoutSlideInput = {
  data: SlideDepthUpdateWithoutSlideInput;
  where: SlideDepthWhereUniqueInput;
};

export type SlideDepthUpdateWithoutProjectsInput = {
  depth?: Maybe<FloatFieldUpdateOperationsInput>;
  display?: Maybe<StringFieldUpdateOperationsInput>;
  slide?: Maybe<SlideUpdateOneRequiredWithoutDepthsInput>;
};

export type SlideDepthUpdateWithoutSlideInput = {
  depth?: Maybe<FloatFieldUpdateOperationsInput>;
  display?: Maybe<StringFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUpdateManyWithoutSlideDepthInput>;
};

export type SlideDepthUpsertWithWhereUniqueWithoutSlideInput = {
  create: SlideDepthCreateWithoutSlideInput;
  update: SlideDepthUpdateWithoutSlideInput;
  where: SlideDepthWhereUniqueInput;
};

export type SlideDepthUpsertWithoutProjectsInput = {
  create: SlideDepthCreateWithoutProjectsInput;
  update: SlideDepthUpdateWithoutProjectsInput;
};

export type SlideDepthWhereInput = {
  AND?: Maybe<Array<SlideDepthWhereInput>>;
  NOT?: Maybe<Array<SlideDepthWhereInput>>;
  OR?: Maybe<Array<SlideDepthWhereInput>>;
  depth?: Maybe<FloatFilter>;
  display?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  projects?: Maybe<ProjectListRelationFilter>;
  slide?: Maybe<SlideWhereInput>;
  slideId?: Maybe<IntFilter>;
};

export type SlideDepthWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type SlideListRelationFilter = {
  every?: Maybe<SlideWhereInput>;
  none?: Maybe<SlideWhereInput>;
  some?: Maybe<SlideWhereInput>;
};

export type SlideOrderByInput = {
  collectionId?: Maybe<SortOrder>;
  formula?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  product?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  supplierId?: Maybe<SortOrder>;
};

export type SlideScalarWhereInput = {
  AND?: Maybe<Array<SlideScalarWhereInput>>;
  NOT?: Maybe<Array<SlideScalarWhereInput>>;
  OR?: Maybe<Array<SlideScalarWhereInput>>;
  collectionId?: Maybe<IntFilter>;
  formula?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  product?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
  supplierId?: Maybe<IntFilter>;
};

export type SlideSupplier = {
  __typename?: 'SlideSupplier';
  id: Scalars['Int'];
  name: Scalars['String'];
  slides: Array<Slide>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type SlideSupplierSlidesArgs = {
  cursor?: Maybe<SlideWhereUniqueInput>;
  orderBy?: Maybe<Array<SlideOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SlideWhereInput>;
};

export type SlideSupplierCreateNestedOneWithoutSlidesInput = {
  connect?: Maybe<SlideSupplierWhereUniqueInput>;
  connectOrCreate?: Maybe<SlideSupplierCreateOrConnectWithoutSlidesInput>;
  create?: Maybe<SlideSupplierCreateWithoutSlidesInput>;
};

export type SlideSupplierCreateOrConnectWithoutSlidesInput = {
  create: SlideSupplierCreateWithoutSlidesInput;
  where: SlideSupplierWhereUniqueInput;
};

export type SlideSupplierCreateWithoutSlidesInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type SlideSupplierOrderByInput = {
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  thumbnailUrl?: Maybe<SortOrder>;
};

export type SlideSupplierUpdateOneRequiredWithoutSlidesInput = {
  connect?: Maybe<SlideSupplierWhereUniqueInput>;
  connectOrCreate?: Maybe<SlideSupplierCreateOrConnectWithoutSlidesInput>;
  create?: Maybe<SlideSupplierCreateWithoutSlidesInput>;
  update?: Maybe<SlideSupplierUpdateWithoutSlidesInput>;
  upsert?: Maybe<SlideSupplierUpsertWithoutSlidesInput>;
};

export type SlideSupplierUpdateWithoutSlidesInput = {
  name?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type SlideSupplierUpsertWithoutSlidesInput = {
  create: SlideSupplierCreateWithoutSlidesInput;
  update: SlideSupplierUpdateWithoutSlidesInput;
};

export type SlideSupplierWhereInput = {
  AND?: Maybe<Array<SlideSupplierWhereInput>>;
  NOT?: Maybe<Array<SlideSupplierWhereInput>>;
  OR?: Maybe<Array<SlideSupplierWhereInput>>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  slides?: Maybe<SlideListRelationFilter>;
  slug?: Maybe<StringFilter>;
  thumbnailUrl?: Maybe<StringNullableFilter>;
};

export type SlideSupplierWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type SlideUpdateManyMutationInput = {
  formula?: Maybe<StringFieldUpdateOperationsInput>;
  product?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SlideUpdateManyWithWhereWithoutCollectionInput = {
  data: SlideUpdateManyMutationInput;
  where: SlideScalarWhereInput;
};

export type SlideUpdateManyWithoutCollectionInput = {
  connect?: Maybe<Array<SlideWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SlideCreateOrConnectWithoutCollectionInput>>;
  create?: Maybe<Array<SlideCreateWithoutCollectionInput>>;
  createMany?: Maybe<SlideCreateManyCollectionInputEnvelope>;
  delete?: Maybe<Array<SlideWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SlideScalarWhereInput>>;
  disconnect?: Maybe<Array<SlideWhereUniqueInput>>;
  set?: Maybe<Array<SlideWhereUniqueInput>>;
  update?: Maybe<Array<SlideUpdateWithWhereUniqueWithoutCollectionInput>>;
  updateMany?: Maybe<Array<SlideUpdateManyWithWhereWithoutCollectionInput>>;
  upsert?: Maybe<Array<SlideUpsertWithWhereUniqueWithoutCollectionInput>>;
};

export type SlideUpdateOneRequiredWithoutDepthsInput = {
  connect?: Maybe<SlideWhereUniqueInput>;
  connectOrCreate?: Maybe<SlideCreateOrConnectWithoutDepthsInput>;
  create?: Maybe<SlideCreateWithoutDepthsInput>;
  update?: Maybe<SlideUpdateWithoutDepthsInput>;
  upsert?: Maybe<SlideUpsertWithoutDepthsInput>;
};

export type SlideUpdateOneRequiredWithoutProjectsInput = {
  connect?: Maybe<SlideWhereUniqueInput>;
  connectOrCreate?: Maybe<SlideCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<SlideCreateWithoutProjectsInput>;
  update?: Maybe<SlideUpdateWithoutProjectsInput>;
  upsert?: Maybe<SlideUpsertWithoutProjectsInput>;
};

export type SlideUpdateWithWhereUniqueWithoutCollectionInput = {
  data: SlideUpdateWithoutCollectionInput;
  where: SlideWhereUniqueInput;
};

export type SlideUpdateWithoutCollectionInput = {
  depths?: Maybe<SlideDepthUpdateManyWithoutSlideInput>;
  formula?: Maybe<StringFieldUpdateOperationsInput>;
  product?: Maybe<StringFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUpdateManyWithoutSlideInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  supplier?: Maybe<SlideSupplierUpdateOneRequiredWithoutSlidesInput>;
};

export type SlideUpdateWithoutDepthsInput = {
  collection?: Maybe<CollectionUpdateOneRequiredWithoutSlidesInput>;
  formula?: Maybe<StringFieldUpdateOperationsInput>;
  product?: Maybe<StringFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUpdateManyWithoutSlideInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  supplier?: Maybe<SlideSupplierUpdateOneRequiredWithoutSlidesInput>;
};

export type SlideUpdateWithoutProjectsInput = {
  collection?: Maybe<CollectionUpdateOneRequiredWithoutSlidesInput>;
  depths?: Maybe<SlideDepthUpdateManyWithoutSlideInput>;
  formula?: Maybe<StringFieldUpdateOperationsInput>;
  product?: Maybe<StringFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  supplier?: Maybe<SlideSupplierUpdateOneRequiredWithoutSlidesInput>;
};

export type SlideUpsertWithWhereUniqueWithoutCollectionInput = {
  create: SlideCreateWithoutCollectionInput;
  update: SlideUpdateWithoutCollectionInput;
  where: SlideWhereUniqueInput;
};

export type SlideUpsertWithoutDepthsInput = {
  create: SlideCreateWithoutDepthsInput;
  update: SlideUpdateWithoutDepthsInput;
};

export type SlideUpsertWithoutProjectsInput = {
  create: SlideCreateWithoutProjectsInput;
  update: SlideUpdateWithoutProjectsInput;
};

export type SlideWhereInput = {
  AND?: Maybe<Array<SlideWhereInput>>;
  NOT?: Maybe<Array<SlideWhereInput>>;
  OR?: Maybe<Array<SlideWhereInput>>;
  collection?: Maybe<CollectionWhereInput>;
  collectionId?: Maybe<IntFilter>;
  depths?: Maybe<SlideDepthListRelationFilter>;
  formula?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  product?: Maybe<StringFilter>;
  projects?: Maybe<ProjectListRelationFilter>;
  slug?: Maybe<StringFilter>;
  supplier?: Maybe<SlideSupplierWhereInput>;
  supplierId?: Maybe<IntFilter>;
};

export type SlideWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Type = {
  __typename?: 'Type';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  projects: Array<Project>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type TypeProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type TypeCreateNestedOneWithoutProjectsInput = {
  connect?: Maybe<TypeWhereUniqueInput>;
  connectOrCreate?: Maybe<TypeCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<TypeCreateWithoutProjectsInput>;
};

export type TypeCreateOrConnectWithoutProjectsInput = {
  create: TypeCreateWithoutProjectsInput;
  where: TypeWhereUniqueInput;
};

export type TypeCreateWithoutProjectsInput = {
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<TypeTranslationsCreateNestedManyWithoutTypeInput>;
};

export type TypeOrderByInput = {
  id?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  thumbnailUrl?: Maybe<SortOrder>;
};

export type TypeTranslations = {
  __typename?: 'TypeTranslations';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  locale: Locale;
  name: Scalars['String'];
  type: Type;
  typeId: Scalars['Int'];
};

export type TypeTranslationsCreateManyTypeInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locale: Locale;
  name: Scalars['String'];
};

export type TypeTranslationsCreateManyTypeInputEnvelope = {
  data?: Maybe<Array<TypeTranslationsCreateManyTypeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TypeTranslationsCreateNestedManyWithoutTypeInput = {
  connect?: Maybe<Array<TypeTranslationsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TypeTranslationsCreateOrConnectWithoutTypeInput>>;
  create?: Maybe<Array<TypeTranslationsCreateWithoutTypeInput>>;
  createMany?: Maybe<TypeTranslationsCreateManyTypeInputEnvelope>;
};

export type TypeTranslationsCreateOrConnectWithoutTypeInput = {
  create: TypeTranslationsCreateWithoutTypeInput;
  where: TypeTranslationsWhereUniqueInput;
};

export type TypeTranslationsCreateWithoutTypeInput = {
  description?: Maybe<Scalars['String']>;
  locale: Locale;
  name: Scalars['String'];
};

export type TypeTranslationsListRelationFilter = {
  every?: Maybe<TypeTranslationsWhereInput>;
  none?: Maybe<TypeTranslationsWhereInput>;
  some?: Maybe<TypeTranslationsWhereInput>;
};

export type TypeTranslationsScalarWhereInput = {
  AND?: Maybe<Array<TypeTranslationsScalarWhereInput>>;
  NOT?: Maybe<Array<TypeTranslationsScalarWhereInput>>;
  OR?: Maybe<Array<TypeTranslationsScalarWhereInput>>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  locale?: Maybe<EnumLocaleFilter>;
  name?: Maybe<StringFilter>;
  typeId?: Maybe<IntFilter>;
};

export type TypeTranslationsUpdateManyMutationInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locale?: Maybe<EnumLocaleFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TypeTranslationsUpdateManyWithWhereWithoutTypeInput = {
  data: TypeTranslationsUpdateManyMutationInput;
  where: TypeTranslationsScalarWhereInput;
};

export type TypeTranslationsUpdateManyWithoutTypeInput = {
  connect?: Maybe<Array<TypeTranslationsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TypeTranslationsCreateOrConnectWithoutTypeInput>>;
  create?: Maybe<Array<TypeTranslationsCreateWithoutTypeInput>>;
  createMany?: Maybe<TypeTranslationsCreateManyTypeInputEnvelope>;
  delete?: Maybe<Array<TypeTranslationsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TypeTranslationsScalarWhereInput>>;
  disconnect?: Maybe<Array<TypeTranslationsWhereUniqueInput>>;
  set?: Maybe<Array<TypeTranslationsWhereUniqueInput>>;
  update?: Maybe<Array<TypeTranslationsUpdateWithWhereUniqueWithoutTypeInput>>;
  updateMany?: Maybe<Array<TypeTranslationsUpdateManyWithWhereWithoutTypeInput>>;
  upsert?: Maybe<Array<TypeTranslationsUpsertWithWhereUniqueWithoutTypeInput>>;
};

export type TypeTranslationsUpdateWithWhereUniqueWithoutTypeInput = {
  data: TypeTranslationsUpdateWithoutTypeInput;
  where: TypeTranslationsWhereUniqueInput;
};

export type TypeTranslationsUpdateWithoutTypeInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  locale?: Maybe<EnumLocaleFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TypeTranslationsUpsertWithWhereUniqueWithoutTypeInput = {
  create: TypeTranslationsCreateWithoutTypeInput;
  update: TypeTranslationsUpdateWithoutTypeInput;
  where: TypeTranslationsWhereUniqueInput;
};

export type TypeTranslationsWhereInput = {
  AND?: Maybe<Array<TypeTranslationsWhereInput>>;
  NOT?: Maybe<Array<TypeTranslationsWhereInput>>;
  OR?: Maybe<Array<TypeTranslationsWhereInput>>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  locale?: Maybe<EnumLocaleFilter>;
  name?: Maybe<StringFilter>;
  type?: Maybe<TypeWhereInput>;
  typeId?: Maybe<IntFilter>;
};

export type TypeTranslationsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type TypeUpdateOneRequiredWithoutProjectsInput = {
  connect?: Maybe<TypeWhereUniqueInput>;
  connectOrCreate?: Maybe<TypeCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<TypeCreateWithoutProjectsInput>;
  update?: Maybe<TypeUpdateWithoutProjectsInput>;
  upsert?: Maybe<TypeUpsertWithoutProjectsInput>;
};

export type TypeUpdateWithoutProjectsInput = {
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<TypeTranslationsUpdateManyWithoutTypeInput>;
};

export type TypeUpsertWithoutProjectsInput = {
  create: TypeCreateWithoutProjectsInput;
  update: TypeUpdateWithoutProjectsInput;
};

export type TypeWhereInput = {
  AND?: Maybe<Array<TypeWhereInput>>;
  NOT?: Maybe<Array<TypeWhereInput>>;
  OR?: Maybe<Array<TypeWhereInput>>;
  id?: Maybe<IntFilter>;
  projects?: Maybe<ProjectListRelationFilter>;
  slug?: Maybe<StringFilter>;
  thumbnailUrl?: Maybe<StringNullableFilter>;
  translations?: Maybe<TypeTranslationsListRelationFilter>;
};

export type TypeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
};

export type GetCollectionsQueryVariables = Exact<{ [key: string]: never }>;

export type GetCollectionsQuery = {
  __typename?: 'Query';
  collections: Array<{
    __typename?: 'Collection';
    id: number;
    name: string;
    slug: string;
    subtitle?: string | null | undefined;
    description?: string | null | undefined;
    footer?: string | null | undefined;
    thumbnailUrl?: string | null | undefined;
  }>;
};

export type GetFinishQueryVariables = Exact<{ [key: string]: never }>;

export type GetFinishQuery = {
  __typename?: 'Query';
  finishes: Array<{
    __typename?: 'Finish';
    id: number;
    description?: string | null | undefined;
    name: string;
    slug: string;
    thumbnailUrl?: string | null | undefined;
  }>;
};

export type ModuleDataFragment = {
  __typename?: 'Module';
  id: number;
  bundleUrl?: string | null | undefined;
  hasPegs: boolean;
  isImprintExtension: boolean;
  isMat: boolean;
  isSubmodule: boolean;
  partNumber: string;
  rules?: any | null | undefined;
  thumbnailUrl?: string | null | undefined;
  categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
};

export type PlannerQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type PlannerQuery = {
  __typename?: 'Query';
  project?:
    | {
        __typename?: 'Project';
        id: number;
        title: string;
        modules: Array<{
          __typename?: 'Module';
          id: number;
          bundleUrl?: string | null | undefined;
          hasPegs: boolean;
          isImprintExtension: boolean;
          isMat: boolean;
          isSubmodule: boolean;
          partNumber: string;
          rules?: any | null | undefined;
          thumbnailUrl?: string | null | undefined;
          categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
        }>;
      }
    | null
    | undefined;
};

export type GetSlideSupplierByCollectionQueryVariables = Exact<{
  collectionId: Scalars['Int'];
}>;

export type GetSlideSupplierByCollectionQuery = {
  __typename?: 'Query';
  slideSuppliers: Array<{
    __typename?: 'SlideSupplier';
    id: number;
    slug: string;
    name: string;
    thumbnailUrl?: string | null | undefined;
    slides: Array<{
      __typename?: 'Slide';
      id: number;
      slug: string;
      product: string;
      depths: Array<{ __typename?: 'SlideDepth'; id: number; display: string; depth: number }>;
    }>;
  }>;
};

export type GetTypeQueryVariables = Exact<{ [key: string]: never }>;

export type GetTypeQuery = {
  __typename?: 'Query';
  types: Array<{
    __typename?: 'Type';
    id: number;
    description?: string | null | undefined;
    name: string;
    slug: string;
    thumbnailUrl?: string | null | undefined;
  }>;
};

export type ProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type ProjectsQuery = {
  __typename?: 'Query';
  projects: Array<{ __typename?: 'Project'; id: number; title: string; slug: string }>;
};

export type CreateProjectMutationVariables = Exact<{
  data: ProjectCreateInput;
}>;

export type CreateProjectMutation = {
  __typename?: 'Mutation';
  createOneProject: { __typename?: 'Project'; id: number; slug: string; title: string };
};

export type ProjectDataFragment = {
  __typename?: 'Project';
  id: number;
  title: string;
  slug: string;
  width: number;
  gable: number;
  type: { __typename?: 'Type'; id: number; slug: string };
  collection: { __typename?: 'Collection'; id: number; slug: string };
};

export const ModuleDataFragmentDoc = gql`
  fragment ModuleData on Module {
    id
    bundleUrl
    hasPegs
    isImprintExtension
    isMat
    isSubmodule
    partNumber
    rules
    thumbnailUrl
    categories {
      id
      slug
      name
    }
  }
`;
export const ProjectDataFragmentDoc = gql`
  fragment ProjectData on Project {
    id
    title
    slug
    width
    gable
    type {
      id
      slug
    }
    collection {
      id
      slug
    }
  }
`;
export const GetCollectionsDocument = gql`
  query GetCollections {
    collections {
      id
      name
      slug
      subtitle
      description
      footer
      thumbnailUrl
    }
  }
`;

/**
 * __useGetCollectionsQuery__
 *
 * To run a query within a React component, call `useGetCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCollectionsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCollectionsQuery, GetCollectionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCollectionsQuery, GetCollectionsQueryVariables>(GetCollectionsDocument, options);
}
export function useGetCollectionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCollectionsQuery, GetCollectionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCollectionsQuery, GetCollectionsQueryVariables>(GetCollectionsDocument, options);
}
export type GetCollectionsQueryHookResult = ReturnType<typeof useGetCollectionsQuery>;
export type GetCollectionsLazyQueryHookResult = ReturnType<typeof useGetCollectionsLazyQuery>;
export type GetCollectionsQueryResult = Apollo.QueryResult<GetCollectionsQuery, GetCollectionsQueryVariables>;
export const GetFinishDocument = gql`
  query GetFinish {
    finishes {
      id
      description
      name
      slug
      thumbnailUrl
    }
  }
`;

/**
 * __useGetFinishQuery__
 *
 * To run a query within a React component, call `useGetFinishQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFinishQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFinishQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFinishQuery(baseOptions?: Apollo.QueryHookOptions<GetFinishQuery, GetFinishQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFinishQuery, GetFinishQueryVariables>(GetFinishDocument, options);
}
export function useGetFinishLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFinishQuery, GetFinishQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFinishQuery, GetFinishQueryVariables>(GetFinishDocument, options);
}
export type GetFinishQueryHookResult = ReturnType<typeof useGetFinishQuery>;
export type GetFinishLazyQueryHookResult = ReturnType<typeof useGetFinishLazyQuery>;
export type GetFinishQueryResult = Apollo.QueryResult<GetFinishQuery, GetFinishQueryVariables>;
export const PlannerDocument = gql`
  query Planner($slug: String!) {
    project(where: { slug: $slug }) {
      id
      title
      modules {
        ...ModuleData
      }
    }
  }
  ${ModuleDataFragmentDoc}
`;

/**
 * __usePlannerQuery__
 *
 * To run a query within a React component, call `usePlannerQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlannerQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePlannerQuery(baseOptions: Apollo.QueryHookOptions<PlannerQuery, PlannerQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PlannerQuery, PlannerQueryVariables>(PlannerDocument, options);
}
export function usePlannerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlannerQuery, PlannerQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PlannerQuery, PlannerQueryVariables>(PlannerDocument, options);
}
export type PlannerQueryHookResult = ReturnType<typeof usePlannerQuery>;
export type PlannerLazyQueryHookResult = ReturnType<typeof usePlannerLazyQuery>;
export type PlannerQueryResult = Apollo.QueryResult<PlannerQuery, PlannerQueryVariables>;
export const GetSlideSupplierByCollectionDocument = gql`
  query GetSlideSupplierByCollection($collectionId: Int!) {
    slideSuppliers {
      id
      slug
      name
      thumbnailUrl
      slides(where: { collection: { id: { equals: $collectionId } } }) {
        id
        slug
        product
        depths {
          id
          display
          depth
        }
      }
    }
  }
`;

/**
 * __useGetSlideSupplierByCollectionQuery__
 *
 * To run a query within a React component, call `useGetSlideSupplierByCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSlideSupplierByCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSlideSupplierByCollectionQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useGetSlideSupplierByCollectionQuery(
  baseOptions: Apollo.QueryHookOptions<GetSlideSupplierByCollectionQuery, GetSlideSupplierByCollectionQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSlideSupplierByCollectionQuery, GetSlideSupplierByCollectionQueryVariables>(
    GetSlideSupplierByCollectionDocument,
    options
  );
}
export function useGetSlideSupplierByCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSlideSupplierByCollectionQuery,
    GetSlideSupplierByCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSlideSupplierByCollectionQuery, GetSlideSupplierByCollectionQueryVariables>(
    GetSlideSupplierByCollectionDocument,
    options
  );
}
export type GetSlideSupplierByCollectionQueryHookResult = ReturnType<typeof useGetSlideSupplierByCollectionQuery>;
export type GetSlideSupplierByCollectionLazyQueryHookResult = ReturnType<
  typeof useGetSlideSupplierByCollectionLazyQuery
>;
export type GetSlideSupplierByCollectionQueryResult = Apollo.QueryResult<
  GetSlideSupplierByCollectionQuery,
  GetSlideSupplierByCollectionQueryVariables
>;
export const GetTypeDocument = gql`
  query GetType {
    types {
      id
      description
      name
      slug
      thumbnailUrl
    }
  }
`;

/**
 * __useGetTypeQuery__
 *
 * To run a query within a React component, call `useGetTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTypeQuery(baseOptions?: Apollo.QueryHookOptions<GetTypeQuery, GetTypeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTypeQuery, GetTypeQueryVariables>(GetTypeDocument, options);
}
export function useGetTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTypeQuery, GetTypeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTypeQuery, GetTypeQueryVariables>(GetTypeDocument, options);
}
export type GetTypeQueryHookResult = ReturnType<typeof useGetTypeQuery>;
export type GetTypeLazyQueryHookResult = ReturnType<typeof useGetTypeLazyQuery>;
export type GetTypeQueryResult = Apollo.QueryResult<GetTypeQuery, GetTypeQueryVariables>;
export const ProjectsDocument = gql`
  query Projects {
    projects {
      id
      title
      slug
    }
  }
`;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
}
export function useProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(ProjectsDocument, options);
}
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<typeof useProjectsLazyQuery>;
export type ProjectsQueryResult = Apollo.QueryResult<ProjectsQuery, ProjectsQueryVariables>;
export const CreateProjectDocument = gql`
  mutation CreateProject($data: ProjectCreateInput!) {
    createOneProject(data: $data) {
      id
      slug
      title
    }
  }
`;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
}
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;
