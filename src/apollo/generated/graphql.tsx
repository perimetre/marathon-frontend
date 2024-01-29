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
  DateTime: any;
  Json: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
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
  externalId?: Maybe<Scalars['String']>;
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
  externalId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type CategoryOrderByInput = {
  externalId?: Maybe<SortOrder>;
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
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
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
  externalId?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  moduleCategories?: Maybe<ModuleCategoryListRelationFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type Collection = {
  __typename?: 'Collection';
  collectionFinishes: Array<CollectionFinishes>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  hasPegs: Scalars['Boolean'];
  id: Scalars['Int'];
  isComingSoon: Scalars['Boolean'];
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
  externalId?: Maybe<Scalars['String']>;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isComingSoon?: Maybe<Scalars['Boolean']>;
  modules?: Maybe<ModuleCreateNestedManyWithoutCollectionInput>;
  projects?: Maybe<ProjectCreateNestedManyWithoutCollectionInput>;
  slides?: Maybe<SlideCreateNestedManyWithoutCollectionInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<CollectionTranslationsCreateNestedManyWithoutCollectionInput>;
};

export type CollectionCreateWithoutModulesInput = {
  collectionFinishes?: Maybe<CollectionFinishesCreateNestedManyWithoutCollectionInput>;
  externalId?: Maybe<Scalars['String']>;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isComingSoon?: Maybe<Scalars['Boolean']>;
  projects?: Maybe<ProjectCreateNestedManyWithoutCollectionInput>;
  slides?: Maybe<SlideCreateNestedManyWithoutCollectionInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<CollectionTranslationsCreateNestedManyWithoutCollectionInput>;
};

export type CollectionCreateWithoutProjectsInput = {
  collectionFinishes?: Maybe<CollectionFinishesCreateNestedManyWithoutCollectionInput>;
  externalId?: Maybe<Scalars['String']>;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isComingSoon?: Maybe<Scalars['Boolean']>;
  modules?: Maybe<ModuleCreateNestedManyWithoutCollectionInput>;
  slides?: Maybe<SlideCreateNestedManyWithoutCollectionInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<CollectionTranslationsCreateNestedManyWithoutCollectionInput>;
};

export type CollectionCreateWithoutSlidesInput = {
  collectionFinishes?: Maybe<CollectionFinishesCreateNestedManyWithoutCollectionInput>;
  externalId?: Maybe<Scalars['String']>;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isComingSoon?: Maybe<Scalars['Boolean']>;
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
  externalId?: Maybe<SortOrder>;
  hasPegs?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isComingSoon?: Maybe<SortOrder>;
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
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isComingSoon?: Maybe<BoolFieldUpdateOperationsInput>;
  modules?: Maybe<ModuleUpdateManyWithoutCollectionInput>;
  projects?: Maybe<ProjectUpdateManyWithoutCollectionInput>;
  slides?: Maybe<SlideUpdateManyWithoutCollectionInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<CollectionTranslationsUpdateManyWithoutCollectionInput>;
};

export type CollectionUpdateWithoutModulesInput = {
  collectionFinishes?: Maybe<CollectionFinishesUpdateManyWithoutCollectionInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isComingSoon?: Maybe<BoolFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUpdateManyWithoutCollectionInput>;
  slides?: Maybe<SlideUpdateManyWithoutCollectionInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<CollectionTranslationsUpdateManyWithoutCollectionInput>;
};

export type CollectionUpdateWithoutProjectsInput = {
  collectionFinishes?: Maybe<CollectionFinishesUpdateManyWithoutCollectionInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isComingSoon?: Maybe<BoolFieldUpdateOperationsInput>;
  modules?: Maybe<ModuleUpdateManyWithoutCollectionInput>;
  slides?: Maybe<SlideUpdateManyWithoutCollectionInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<CollectionTranslationsUpdateManyWithoutCollectionInput>;
};

export type CollectionUpdateWithoutSlidesInput = {
  collectionFinishes?: Maybe<CollectionFinishesUpdateManyWithoutCollectionInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isComingSoon?: Maybe<BoolFieldUpdateOperationsInput>;
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
  externalId?: Maybe<StringNullableFilter>;
  hasPegs?: Maybe<BoolFilter>;
  id?: Maybe<IntFilter>;
  isComingSoon?: Maybe<BoolFilter>;
  modules?: Maybe<ModuleListRelationFilter>;
  projects?: Maybe<ProjectListRelationFilter>;
  slides?: Maybe<SlideListRelationFilter>;
  slug?: Maybe<StringFilter>;
  thumbnailUrl?: Maybe<StringNullableFilter>;
  translations?: Maybe<CollectionTranslationsListRelationFilter>;
};

export type CollectionWhereUniqueInput = {
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
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
  externalId?: Maybe<Scalars['String']>;
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
  externalId?: Maybe<Scalars['String']>;
  modules?: Maybe<ModuleCreateNestedManyWithoutFinishInput>;
  projects?: Maybe<ProjectCreateNestedManyWithoutFinishInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<FinishTranslationsCreateNestedManyWithoutFinishInput>;
};

export type FinishCreateWithoutModulesInput = {
  collectionFinishes?: Maybe<CollectionFinishesCreateNestedManyWithoutFinishInput>;
  externalId?: Maybe<Scalars['String']>;
  projects?: Maybe<ProjectCreateNestedManyWithoutFinishInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<FinishTranslationsCreateNestedManyWithoutFinishInput>;
};

export type FinishCreateWithoutProjectsInput = {
  collectionFinishes?: Maybe<CollectionFinishesCreateNestedManyWithoutFinishInput>;
  externalId?: Maybe<Scalars['String']>;
  modules?: Maybe<ModuleCreateNestedManyWithoutFinishInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<FinishTranslationsCreateNestedManyWithoutFinishInput>;
};

export type FinishOrderByInput = {
  externalId?: Maybe<SortOrder>;
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
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  modules?: Maybe<ModuleUpdateManyWithoutFinishInput>;
  projects?: Maybe<ProjectUpdateManyWithoutFinishInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<FinishTranslationsUpdateManyWithoutFinishInput>;
};

export type FinishUpdateWithoutModulesInput = {
  collectionFinishes?: Maybe<CollectionFinishesUpdateManyWithoutFinishInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUpdateManyWithoutFinishInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<FinishTranslationsUpdateManyWithoutFinishInput>;
};

export type FinishUpdateWithoutProjectsInput = {
  collectionFinishes?: Maybe<CollectionFinishesUpdateManyWithoutFinishInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
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
  externalId?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  modules?: Maybe<ModuleListRelationFilter>;
  projects?: Maybe<ProjectListRelationFilter>;
  slug?: Maybe<StringFilter>;
  thumbnailUrl?: Maybe<StringNullableFilter>;
  translations?: Maybe<FinishTranslationsListRelationFilter>;
};

export type FinishWhereUniqueInput = {
  externalId?: Maybe<Scalars['String']>;
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

export type FloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
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

export type List = {
  __typename?: 'List';
  createdAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ListCreateManyProjectInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ListCreateManyProjectInputEnvelope = {
  data?: Maybe<Array<ListCreateManyProjectInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ListCreateNestedManyWithoutProjectInput = {
  connect?: Maybe<Array<ListWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ListCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<ListCreateWithoutProjectInput>>;
  createMany?: Maybe<ListCreateManyProjectInputEnvelope>;
};

export type ListCreateOrConnectWithoutProjectInput = {
  create: ListCreateWithoutProjectInput;
  where: ListWhereUniqueInput;
};

export type ListCreateWithoutProjectInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ListListRelationFilter = {
  every?: Maybe<ListWhereInput>;
  none?: Maybe<ListWhereInput>;
  some?: Maybe<ListWhereInput>;
};

export type ListScalarWhereInput = {
  AND?: Maybe<Array<ListScalarWhereInput>>;
  NOT?: Maybe<Array<ListScalarWhereInput>>;
  OR?: Maybe<Array<ListScalarWhereInput>>;
  createdAt?: Maybe<DateTimeNullableFilter>;
  externalId?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  projectId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
};

export type ListUpdateManyMutationInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ListUpdateManyWithWhereWithoutProjectInput = {
  data: ListUpdateManyMutationInput;
  where: ListScalarWhereInput;
};

export type ListUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<ListWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ListCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<ListCreateWithoutProjectInput>>;
  createMany?: Maybe<ListCreateManyProjectInputEnvelope>;
  delete?: Maybe<Array<ListWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ListScalarWhereInput>>;
  disconnect?: Maybe<Array<ListWhereUniqueInput>>;
  set?: Maybe<Array<ListWhereUniqueInput>>;
  update?: Maybe<Array<ListUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<ListUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: Maybe<Array<ListUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type ListUpdateWithWhereUniqueWithoutProjectInput = {
  data: ListUpdateWithoutProjectInput;
  where: ListWhereUniqueInput;
};

export type ListUpdateWithoutProjectInput = {
  createdAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ListUpsertWithWhereUniqueWithoutProjectInput = {
  create: ListCreateWithoutProjectInput;
  update: ListUpdateWithoutProjectInput;
  where: ListWhereUniqueInput;
};

export type ListWhereInput = {
  AND?: Maybe<Array<ListWhereInput>>;
  NOT?: Maybe<Array<ListWhereInput>>;
  OR?: Maybe<Array<ListWhereInput>>;
  createdAt?: Maybe<DateTimeNullableFilter>;
  externalId?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  project?: Maybe<ProjectWhereInput>;
  projectId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeNullableFilter>;
};

export type ListWhereUniqueInput = {
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export enum Locale {
  En = 'en',
  Fr = 'fr'
}

export type Module = {
  __typename?: 'Module';
  alwaysDisplay: Scalars['Boolean'];
  attachmentToAppend?: Maybe<Module>;
  attachmentToAppendId?: Maybe<Scalars['Int']>;
  attachmentToAppendParents: Array<Module>;
  bundleUrl?: Maybe<Scalars['String']>;
  categories: Array<Category>;
  collection: Collection;
  collectionId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  defaultLeftExtension?: Maybe<Module>;
  defaultLeftExtensionId?: Maybe<Scalars['Int']>;
  defaultLeftExtensionParents: Array<Module>;
  defaultRightExtension?: Maybe<Module>;
  defaultRightExtensionId?: Maybe<Scalars['Int']>;
  defaultRightExtensionParents: Array<Module>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: Finish;
  finishId: Scalars['Int'];
  hasPegs: Scalars['Boolean'];
  id: Scalars['Int'];
  isEdge: Scalars['Boolean'];
  isExtension: Scalars['Boolean'];
  isMat: Scalars['Boolean'];
  isSubmodule: Scalars['Boolean'];
  isVirtualProduct: Scalars['Boolean'];
  moduleAttachedTo: Array<ModuleAttachments>;
  moduleAttachments: Array<ModuleAttachments>;
  moduleType: Array<ModuleType>;
  modulesIOwn: Array<Module>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<Module>;
  ownerExternalId?: Maybe<Scalars['String']>;
  partNumber: Scalars['String'];
  projectModules: Array<ProjectModule>;
  rules?: Maybe<ModuleRules>;
  rulesJson?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth: Scalars['Boolean'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ModuleAttachmentToAppendParentsArgs = {
  cursor?: Maybe<ModuleWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ModuleCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>;
};

export type ModuleDefaultLeftExtensionParentsArgs = {
  cursor?: Maybe<ModuleWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ModuleDefaultRightExtensionParentsArgs = {
  cursor?: Maybe<ModuleWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ModuleModuleAttachedToArgs = {
  cursor?: Maybe<ModuleAttachmentsWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ModuleModuleAttachmentsArgs = {
  cursor?: Maybe<ModuleAttachmentsWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ModuleModuleTypeArgs = {
  cursor?: Maybe<ModuleTypeWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ModuleModulesIOwnArgs = {
  cursor?: Maybe<ModuleWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ModuleProjectModulesArgs = {
  cursor?: Maybe<ProjectModuleWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectModuleOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectModuleWhereInput>;
};

export type ModuleAttachments = {
  __typename?: 'ModuleAttachments';
  attachment: Module;
  attachmentId: Scalars['Int'];
  id: Scalars['Int'];
  module: Module;
  moduleId: Scalars['Int'];
};

export type ModuleAttachmentsCreateManyAttachmentInput = {
  id?: Maybe<Scalars['Int']>;
  moduleId: Scalars['Int'];
};

export type ModuleAttachmentsCreateManyAttachmentInputEnvelope = {
  data?: Maybe<Array<ModuleAttachmentsCreateManyAttachmentInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleAttachmentsCreateManyModuleInput = {
  attachmentId: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
};

export type ModuleAttachmentsCreateManyModuleInputEnvelope = {
  data?: Maybe<Array<ModuleAttachmentsCreateManyModuleInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleAttachmentsCreateNestedManyWithoutAttachmentInput = {
  connect?: Maybe<Array<ModuleAttachmentsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleAttachmentsCreateOrConnectWithoutAttachmentInput>>;
  create?: Maybe<Array<ModuleAttachmentsCreateWithoutAttachmentInput>>;
  createMany?: Maybe<ModuleAttachmentsCreateManyAttachmentInputEnvelope>;
};

export type ModuleAttachmentsCreateNestedManyWithoutModuleInput = {
  connect?: Maybe<Array<ModuleAttachmentsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleAttachmentsCreateOrConnectWithoutModuleInput>>;
  create?: Maybe<Array<ModuleAttachmentsCreateWithoutModuleInput>>;
  createMany?: Maybe<ModuleAttachmentsCreateManyModuleInputEnvelope>;
};

export type ModuleAttachmentsCreateOrConnectWithoutAttachmentInput = {
  create: ModuleAttachmentsCreateWithoutAttachmentInput;
  where: ModuleAttachmentsWhereUniqueInput;
};

export type ModuleAttachmentsCreateOrConnectWithoutModuleInput = {
  create: ModuleAttachmentsCreateWithoutModuleInput;
  where: ModuleAttachmentsWhereUniqueInput;
};

export type ModuleAttachmentsCreateWithoutAttachmentInput = {
  module: ModuleCreateNestedOneWithoutModuleAttachmentsInput;
};

export type ModuleAttachmentsCreateWithoutModuleInput = {
  attachment: ModuleCreateNestedOneWithoutModuleAttachedToInput;
};

export type ModuleAttachmentsListRelationFilter = {
  every?: Maybe<ModuleAttachmentsWhereInput>;
  none?: Maybe<ModuleAttachmentsWhereInput>;
  some?: Maybe<ModuleAttachmentsWhereInput>;
};

export type ModuleAttachmentsScalarWhereInput = {
  AND?: Maybe<Array<ModuleAttachmentsScalarWhereInput>>;
  NOT?: Maybe<Array<ModuleAttachmentsScalarWhereInput>>;
  OR?: Maybe<Array<ModuleAttachmentsScalarWhereInput>>;
  attachmentId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  moduleId?: Maybe<IntFilter>;
};

export type ModuleAttachmentsUpdateManyMutationInput = {
  _?: Maybe<Scalars['Int']>;
};

export type ModuleAttachmentsUpdateManyWithWhereWithoutAttachmentInput = {
  data: ModuleAttachmentsUpdateManyMutationInput;
  where: ModuleAttachmentsScalarWhereInput;
};

export type ModuleAttachmentsUpdateManyWithWhereWithoutModuleInput = {
  data: ModuleAttachmentsUpdateManyMutationInput;
  where: ModuleAttachmentsScalarWhereInput;
};

export type ModuleAttachmentsUpdateManyWithoutAttachmentInput = {
  connect?: Maybe<Array<ModuleAttachmentsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleAttachmentsCreateOrConnectWithoutAttachmentInput>>;
  create?: Maybe<Array<ModuleAttachmentsCreateWithoutAttachmentInput>>;
  createMany?: Maybe<ModuleAttachmentsCreateManyAttachmentInputEnvelope>;
  delete?: Maybe<Array<ModuleAttachmentsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModuleAttachmentsScalarWhereInput>>;
  disconnect?: Maybe<Array<ModuleAttachmentsWhereUniqueInput>>;
  set?: Maybe<Array<ModuleAttachmentsWhereUniqueInput>>;
  update?: Maybe<Array<ModuleAttachmentsUpdateWithWhereUniqueWithoutAttachmentInput>>;
  updateMany?: Maybe<Array<ModuleAttachmentsUpdateManyWithWhereWithoutAttachmentInput>>;
  upsert?: Maybe<Array<ModuleAttachmentsUpsertWithWhereUniqueWithoutAttachmentInput>>;
};

export type ModuleAttachmentsUpdateManyWithoutModuleInput = {
  connect?: Maybe<Array<ModuleAttachmentsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleAttachmentsCreateOrConnectWithoutModuleInput>>;
  create?: Maybe<Array<ModuleAttachmentsCreateWithoutModuleInput>>;
  createMany?: Maybe<ModuleAttachmentsCreateManyModuleInputEnvelope>;
  delete?: Maybe<Array<ModuleAttachmentsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModuleAttachmentsScalarWhereInput>>;
  disconnect?: Maybe<Array<ModuleAttachmentsWhereUniqueInput>>;
  set?: Maybe<Array<ModuleAttachmentsWhereUniqueInput>>;
  update?: Maybe<Array<ModuleAttachmentsUpdateWithWhereUniqueWithoutModuleInput>>;
  updateMany?: Maybe<Array<ModuleAttachmentsUpdateManyWithWhereWithoutModuleInput>>;
  upsert?: Maybe<Array<ModuleAttachmentsUpsertWithWhereUniqueWithoutModuleInput>>;
};

export type ModuleAttachmentsUpdateWithWhereUniqueWithoutAttachmentInput = {
  data: ModuleAttachmentsUpdateWithoutAttachmentInput;
  where: ModuleAttachmentsWhereUniqueInput;
};

export type ModuleAttachmentsUpdateWithWhereUniqueWithoutModuleInput = {
  data: ModuleAttachmentsUpdateWithoutModuleInput;
  where: ModuleAttachmentsWhereUniqueInput;
};

export type ModuleAttachmentsUpdateWithoutAttachmentInput = {
  module?: Maybe<ModuleUpdateOneRequiredWithoutModuleAttachmentsInput>;
};

export type ModuleAttachmentsUpdateWithoutModuleInput = {
  attachment?: Maybe<ModuleUpdateOneRequiredWithoutModuleAttachedToInput>;
};

export type ModuleAttachmentsUpsertWithWhereUniqueWithoutAttachmentInput = {
  create: ModuleAttachmentsCreateWithoutAttachmentInput;
  update: ModuleAttachmentsUpdateWithoutAttachmentInput;
  where: ModuleAttachmentsWhereUniqueInput;
};

export type ModuleAttachmentsUpsertWithWhereUniqueWithoutModuleInput = {
  create: ModuleAttachmentsCreateWithoutModuleInput;
  update: ModuleAttachmentsUpdateWithoutModuleInput;
  where: ModuleAttachmentsWhereUniqueInput;
};

export type ModuleAttachmentsWhereInput = {
  AND?: Maybe<Array<ModuleAttachmentsWhereInput>>;
  NOT?: Maybe<Array<ModuleAttachmentsWhereInput>>;
  OR?: Maybe<Array<ModuleAttachmentsWhereInput>>;
  attachment?: Maybe<ModuleWhereInput>;
  attachmentId?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  module?: Maybe<ModuleWhereInput>;
  moduleId?: Maybe<IntFilter>;
};

export type ModuleAttachmentsWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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

export type ModuleCategoryMetadata = {
  __typename?: 'ModuleCategoryMetadata';
  externalId: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
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

export type ModuleCollectionsMetadata = {
  __typename?: 'ModuleCollectionsMetadata';
  externalId: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type ModuleCreateManyAttachmentToAppendInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  bundleUrl?: Maybe<Scalars['String']>;
  collectionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtensionId?: Maybe<Scalars['Int']>;
  defaultRightExtensionId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finishId: Scalars['Int'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  ownerExternalId?: Maybe<Scalars['String']>;
  partNumber: Scalars['String'];
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateManyAttachmentToAppendInputEnvelope = {
  data?: Maybe<Array<ModuleCreateManyAttachmentToAppendInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleCreateManyCollectionInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppendId?: Maybe<Scalars['Int']>;
  bundleUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtensionId?: Maybe<Scalars['Int']>;
  defaultRightExtensionId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finishId: Scalars['Int'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  ownerExternalId?: Maybe<Scalars['String']>;
  partNumber: Scalars['String'];
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateManyCollectionInputEnvelope = {
  data?: Maybe<Array<ModuleCreateManyCollectionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleCreateManyDefaultLeftExtensionInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppendId?: Maybe<Scalars['Int']>;
  bundleUrl?: Maybe<Scalars['String']>;
  collectionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultRightExtensionId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finishId: Scalars['Int'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  ownerExternalId?: Maybe<Scalars['String']>;
  partNumber: Scalars['String'];
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateManyDefaultLeftExtensionInputEnvelope = {
  data?: Maybe<Array<ModuleCreateManyDefaultLeftExtensionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleCreateManyDefaultRightExtensionInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppendId?: Maybe<Scalars['Int']>;
  bundleUrl?: Maybe<Scalars['String']>;
  collectionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtensionId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finishId: Scalars['Int'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  ownerExternalId?: Maybe<Scalars['String']>;
  partNumber: Scalars['String'];
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateManyDefaultRightExtensionInputEnvelope = {
  data?: Maybe<Array<ModuleCreateManyDefaultRightExtensionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleCreateManyFinishInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppendId?: Maybe<Scalars['Int']>;
  bundleUrl?: Maybe<Scalars['String']>;
  collectionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtensionId?: Maybe<Scalars['Int']>;
  defaultRightExtensionId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  ownerExternalId?: Maybe<Scalars['String']>;
  partNumber: Scalars['String'];
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateManyFinishInputEnvelope = {
  data?: Maybe<Array<ModuleCreateManyFinishInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleCreateManyOwnerInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppendId?: Maybe<Scalars['Int']>;
  bundleUrl?: Maybe<Scalars['String']>;
  collectionId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtensionId?: Maybe<Scalars['Int']>;
  defaultRightExtensionId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finishId: Scalars['Int'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  partNumber: Scalars['String'];
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateManyOwnerInputEnvelope = {
  data?: Maybe<Array<ModuleCreateManyOwnerInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleCreateNestedManyWithoutAttachmentToAppendInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutAttachmentToAppendInput>>;
  create?: Maybe<Array<ModuleCreateWithoutAttachmentToAppendInput>>;
  createMany?: Maybe<ModuleCreateManyAttachmentToAppendInputEnvelope>;
};

export type ModuleCreateNestedManyWithoutCollectionInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutCollectionInput>>;
  create?: Maybe<Array<ModuleCreateWithoutCollectionInput>>;
  createMany?: Maybe<ModuleCreateManyCollectionInputEnvelope>;
};

export type ModuleCreateNestedManyWithoutDefaultLeftExtensionInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutDefaultLeftExtensionInput>>;
  create?: Maybe<Array<ModuleCreateWithoutDefaultLeftExtensionInput>>;
  createMany?: Maybe<ModuleCreateManyDefaultLeftExtensionInputEnvelope>;
};

export type ModuleCreateNestedManyWithoutDefaultRightExtensionInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutDefaultRightExtensionInput>>;
  create?: Maybe<Array<ModuleCreateWithoutDefaultRightExtensionInput>>;
  createMany?: Maybe<ModuleCreateManyDefaultRightExtensionInputEnvelope>;
};

export type ModuleCreateNestedManyWithoutFinishInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutFinishInput>>;
  create?: Maybe<Array<ModuleCreateWithoutFinishInput>>;
  createMany?: Maybe<ModuleCreateManyFinishInputEnvelope>;
};

export type ModuleCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<ModuleCreateWithoutOwnerInput>>;
  createMany?: Maybe<ModuleCreateManyOwnerInputEnvelope>;
};

export type ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutAttachmentToAppendParentsInput>;
  create?: Maybe<ModuleCreateWithoutAttachmentToAppendParentsInput>;
};

export type ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutDefaultLeftExtensionParentsInput>;
  create?: Maybe<ModuleCreateWithoutDefaultLeftExtensionParentsInput>;
};

export type ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutDefaultRightExtensionParentsInput>;
  create?: Maybe<ModuleCreateWithoutDefaultRightExtensionParentsInput>;
};

export type ModuleCreateNestedOneWithoutModuleAttachedToInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutModuleAttachedToInput>;
  create?: Maybe<ModuleCreateWithoutModuleAttachedToInput>;
};

export type ModuleCreateNestedOneWithoutModuleAttachmentsInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutModuleAttachmentsInput>;
  create?: Maybe<ModuleCreateWithoutModuleAttachmentsInput>;
};

export type ModuleCreateNestedOneWithoutModuleTypeInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutModuleTypeInput>;
  create?: Maybe<ModuleCreateWithoutModuleTypeInput>;
};

export type ModuleCreateNestedOneWithoutModulesIOwnInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutModulesIOwnInput>;
  create?: Maybe<ModuleCreateWithoutModulesIOwnInput>;
};

export type ModuleCreateNestedOneWithoutProjectModulesInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutProjectModulesInput>;
  create?: Maybe<ModuleCreateWithoutProjectModulesInput>;
};

export type ModuleCreateOrConnectWithoutAttachmentToAppendInput = {
  create: ModuleCreateWithoutAttachmentToAppendInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutAttachmentToAppendParentsInput = {
  create: ModuleCreateWithoutAttachmentToAppendParentsInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutCollectionInput = {
  create: ModuleCreateWithoutCollectionInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutDefaultLeftExtensionInput = {
  create: ModuleCreateWithoutDefaultLeftExtensionInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutDefaultLeftExtensionParentsInput = {
  create: ModuleCreateWithoutDefaultLeftExtensionParentsInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutDefaultRightExtensionInput = {
  create: ModuleCreateWithoutDefaultRightExtensionInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutDefaultRightExtensionParentsInput = {
  create: ModuleCreateWithoutDefaultRightExtensionParentsInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutFinishInput = {
  create: ModuleCreateWithoutFinishInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutModuleAttachedToInput = {
  create: ModuleCreateWithoutModuleAttachedToInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutModuleAttachmentsInput = {
  create: ModuleCreateWithoutModuleAttachmentsInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutModuleTypeInput = {
  create: ModuleCreateWithoutModuleTypeInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutModulesIOwnInput = {
  create: ModuleCreateWithoutModulesIOwnInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutOwnerInput = {
  create: ModuleCreateWithoutOwnerInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateOrConnectWithoutProjectModulesInput = {
  create: ModuleCreateWithoutProjectModulesInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleCreateWithoutAttachmentToAppendInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutAttachmentToAppendParentsInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutCollectionInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutDefaultLeftExtensionInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutDefaultLeftExtensionParentsInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutDefaultRightExtensionInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutDefaultRightExtensionParentsInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutFinishInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutModuleAttachedToInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutModuleAttachmentsInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutModuleTypeInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutModulesIOwnInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutOwnerInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  partNumber: Scalars['String'];
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleCreateWithoutProjectModulesInput = {
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  attachmentToAppend?: Maybe<ModuleCreateNestedOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleCreateNestedManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<Scalars['String']>;
  collection: CollectionCreateNestedOneWithoutModulesInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  defaultLeftExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleCreateNestedOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleCreateNestedManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  finish: FinishCreateNestedOneWithoutModulesInput;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension?: Maybe<Scalars['Boolean']>;
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsCreateNestedManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsCreateNestedManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryCreateNestedManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleCreateNestedManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleCreateNestedOneWithoutModulesIOwnInput>;
  partNumber: Scalars['String'];
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ModuleDimension = {
  __typename?: 'ModuleDimension';
  depth?: Maybe<ModuleMinMax>;
  height?: Maybe<ModuleUnit>;
  width?: Maybe<ModuleMinMax>;
};

export type ModuleDrawerTypesMetadata = {
  __typename?: 'ModuleDrawerTypesMetadata';
  externalId: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type ModuleExtensionsMetadata = {
  __typename?: 'ModuleExtensionsMetadata';
  left?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  right?: Maybe<Scalars['String']>;
};

export type ModuleFinishesMetadata = {
  __typename?: 'ModuleFinishesMetadata';
  externalId: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type ModuleListRelationFilter = {
  every?: Maybe<ModuleWhereInput>;
  none?: Maybe<ModuleWhereInput>;
  some?: Maybe<ModuleWhereInput>;
};

export type ModuleMinMax = {
  __typename?: 'ModuleMinMax';
  max?: Maybe<ModuleUnit>;
  min?: Maybe<ModuleUnit>;
};

export type ModuleOrderByInput = {
  alwaysDisplay?: Maybe<SortOrder>;
  attachmentToAppendId?: Maybe<SortOrder>;
  bundleUrl?: Maybe<SortOrder>;
  collectionId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  defaultLeftExtensionId?: Maybe<SortOrder>;
  defaultRightExtensionId?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  externalId?: Maybe<SortOrder>;
  finishId?: Maybe<SortOrder>;
  hasPegs?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isEdge?: Maybe<SortOrder>;
  isExtension?: Maybe<SortOrder>;
  isMat?: Maybe<SortOrder>;
  isSubmodule?: Maybe<SortOrder>;
  isVirtualProduct?: Maybe<SortOrder>;
  originalMarathonProductJson?: Maybe<SortOrder>;
  ownerExternalId?: Maybe<SortOrder>;
  partNumber?: Maybe<SortOrder>;
  rules?: Maybe<SortOrder>;
  shouldHideBasedOnWidth?: Maybe<SortOrder>;
  thumbnailUrl?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ModuleRules = {
  __typename?: 'ModuleRules';
  alwaysDisplay?: Maybe<Scalars['Boolean']>;
  bundleUrl?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<ModuleCategoryMetadata>>>;
  collection: ModuleCollectionsMetadata;
  description?: Maybe<Scalars['String']>;
  dimensions: ModuleDimension;
  drawerTypes?: Maybe<Array<Maybe<ModuleDrawerTypesMetadata>>>;
  /** Extensions are sub pieces that MUST BE CONNECTED to the main product or other extension. */
  extensions?: Maybe<ModuleExtensionsMetadata>;
  externalId: Scalars['String'];
  /** The current finish of this module */
  finish: ModuleFinishesMetadata;
  hasPegs?: Maybe<Scalars['Boolean']>;
  isEdge?: Maybe<Scalars['Boolean']>;
  isExtension: Scalars['Boolean'];
  isMat?: Maybe<Scalars['Boolean']>;
  isSubmodule?: Maybe<Scalars['Boolean']>;
  isVirtualProduct?: Maybe<Scalars['Boolean']>;
  /** The equivalent of same module but on other finishes */
  otherFinishes?: Maybe<Array<Scalars['String']>>;
  ownerExternalId?: Maybe<Scalars['String']>;
  /** The module part number, probably equivalent to the module id */
  partNumber: Scalars['String'];
  rules?: Maybe<ModuleRulesMetadata>;
  shouldHideBasedOnWidth?: Maybe<Scalars['Boolean']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  /** Different types of edges a module might have */
  trims?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ModuleRulesMetadata = {
  __typename?: 'ModuleRulesMetadata';
  /** The amount (in degrees) that the product can be angled */
  angle?: Maybe<Scalars['Float']>;
  /** Whether or not this module is only valid if it's taking the drawer full depth */
  fullDepth?: Maybe<Scalars['Boolean']>;
  /** Whether or not this module is a filler kind of module */
  isFiller?: Maybe<Scalars['Boolean']>;
  /** Options are which other modules can be put IN modules */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Queue info */
  queue?: Maybe<QueueInfoMetadata>;
  /** The product can only be put inside the drawer, if the current net interior of the drawer belongs to the range of the piece */
  requiredNetInterior?: Maybe<ModuleMinMax>;
  /** The amount (in degrees) that the product can be rotated */
  rotation?: Maybe<Scalars['Float']>;
  trimOffset?: Maybe<TrimOffsetMetadata>;
  /** Where a module can be cut if there's excess beyond the drawer */
  trimmable?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ModuleScalarWhereInput = {
  AND?: Maybe<Array<ModuleScalarWhereInput>>;
  NOT?: Maybe<Array<ModuleScalarWhereInput>>;
  OR?: Maybe<Array<ModuleScalarWhereInput>>;
  alwaysDisplay?: Maybe<BoolFilter>;
  attachmentToAppendId?: Maybe<IntNullableFilter>;
  bundleUrl?: Maybe<StringNullableFilter>;
  collectionId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  defaultLeftExtensionId?: Maybe<IntNullableFilter>;
  defaultRightExtensionId?: Maybe<IntNullableFilter>;
  description?: Maybe<StringNullableFilter>;
  externalId?: Maybe<StringNullableFilter>;
  finishId?: Maybe<IntFilter>;
  hasPegs?: Maybe<BoolFilter>;
  id?: Maybe<IntFilter>;
  isEdge?: Maybe<BoolFilter>;
  isExtension?: Maybe<BoolFilter>;
  isMat?: Maybe<BoolFilter>;
  isSubmodule?: Maybe<BoolFilter>;
  isVirtualProduct?: Maybe<BoolFilter>;
  originalMarathonProductJson?: Maybe<JsonNullableFilter>;
  ownerExternalId?: Maybe<StringNullableFilter>;
  partNumber?: Maybe<StringFilter>;
  rules?: Maybe<JsonNullableFilter>;
  shouldHideBasedOnWidth?: Maybe<BoolFilter>;
  thumbnailUrl?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ModuleType = {
  __typename?: 'ModuleType';
  id: Scalars['Int'];
  module: Module;
  moduleId: Scalars['Int'];
  type: Type;
  typeId: Scalars['Int'];
};

export type ModuleTypeCreateManyModuleInput = {
  id?: Maybe<Scalars['Int']>;
  typeId: Scalars['Int'];
};

export type ModuleTypeCreateManyModuleInputEnvelope = {
  data?: Maybe<Array<ModuleTypeCreateManyModuleInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleTypeCreateManyTypeInput = {
  id?: Maybe<Scalars['Int']>;
  moduleId: Scalars['Int'];
};

export type ModuleTypeCreateManyTypeInputEnvelope = {
  data?: Maybe<Array<ModuleTypeCreateManyTypeInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ModuleTypeCreateNestedManyWithoutModuleInput = {
  connect?: Maybe<Array<ModuleTypeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleTypeCreateOrConnectWithoutModuleInput>>;
  create?: Maybe<Array<ModuleTypeCreateWithoutModuleInput>>;
  createMany?: Maybe<ModuleTypeCreateManyModuleInputEnvelope>;
};

export type ModuleTypeCreateNestedManyWithoutTypeInput = {
  connect?: Maybe<Array<ModuleTypeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleTypeCreateOrConnectWithoutTypeInput>>;
  create?: Maybe<Array<ModuleTypeCreateWithoutTypeInput>>;
  createMany?: Maybe<ModuleTypeCreateManyTypeInputEnvelope>;
};

export type ModuleTypeCreateOrConnectWithoutModuleInput = {
  create: ModuleTypeCreateWithoutModuleInput;
  where: ModuleTypeWhereUniqueInput;
};

export type ModuleTypeCreateOrConnectWithoutTypeInput = {
  create: ModuleTypeCreateWithoutTypeInput;
  where: ModuleTypeWhereUniqueInput;
};

export type ModuleTypeCreateWithoutModuleInput = {
  type: TypeCreateNestedOneWithoutModuleTypeInput;
};

export type ModuleTypeCreateWithoutTypeInput = {
  module: ModuleCreateNestedOneWithoutModuleTypeInput;
};

export type ModuleTypeListRelationFilter = {
  every?: Maybe<ModuleTypeWhereInput>;
  none?: Maybe<ModuleTypeWhereInput>;
  some?: Maybe<ModuleTypeWhereInput>;
};

export type ModuleTypeScalarWhereInput = {
  AND?: Maybe<Array<ModuleTypeScalarWhereInput>>;
  NOT?: Maybe<Array<ModuleTypeScalarWhereInput>>;
  OR?: Maybe<Array<ModuleTypeScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  moduleId?: Maybe<IntFilter>;
  typeId?: Maybe<IntFilter>;
};

export type ModuleTypeUpdateManyMutationInput = {
  _?: Maybe<Scalars['Int']>;
};

export type ModuleTypeUpdateManyWithWhereWithoutModuleInput = {
  data: ModuleTypeUpdateManyMutationInput;
  where: ModuleTypeScalarWhereInput;
};

export type ModuleTypeUpdateManyWithWhereWithoutTypeInput = {
  data: ModuleTypeUpdateManyMutationInput;
  where: ModuleTypeScalarWhereInput;
};

export type ModuleTypeUpdateManyWithoutModuleInput = {
  connect?: Maybe<Array<ModuleTypeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleTypeCreateOrConnectWithoutModuleInput>>;
  create?: Maybe<Array<ModuleTypeCreateWithoutModuleInput>>;
  createMany?: Maybe<ModuleTypeCreateManyModuleInputEnvelope>;
  delete?: Maybe<Array<ModuleTypeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModuleTypeScalarWhereInput>>;
  disconnect?: Maybe<Array<ModuleTypeWhereUniqueInput>>;
  set?: Maybe<Array<ModuleTypeWhereUniqueInput>>;
  update?: Maybe<Array<ModuleTypeUpdateWithWhereUniqueWithoutModuleInput>>;
  updateMany?: Maybe<Array<ModuleTypeUpdateManyWithWhereWithoutModuleInput>>;
  upsert?: Maybe<Array<ModuleTypeUpsertWithWhereUniqueWithoutModuleInput>>;
};

export type ModuleTypeUpdateManyWithoutTypeInput = {
  connect?: Maybe<Array<ModuleTypeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleTypeCreateOrConnectWithoutTypeInput>>;
  create?: Maybe<Array<ModuleTypeCreateWithoutTypeInput>>;
  createMany?: Maybe<ModuleTypeCreateManyTypeInputEnvelope>;
  delete?: Maybe<Array<ModuleTypeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModuleTypeScalarWhereInput>>;
  disconnect?: Maybe<Array<ModuleTypeWhereUniqueInput>>;
  set?: Maybe<Array<ModuleTypeWhereUniqueInput>>;
  update?: Maybe<Array<ModuleTypeUpdateWithWhereUniqueWithoutTypeInput>>;
  updateMany?: Maybe<Array<ModuleTypeUpdateManyWithWhereWithoutTypeInput>>;
  upsert?: Maybe<Array<ModuleTypeUpsertWithWhereUniqueWithoutTypeInput>>;
};

export type ModuleTypeUpdateWithWhereUniqueWithoutModuleInput = {
  data: ModuleTypeUpdateWithoutModuleInput;
  where: ModuleTypeWhereUniqueInput;
};

export type ModuleTypeUpdateWithWhereUniqueWithoutTypeInput = {
  data: ModuleTypeUpdateWithoutTypeInput;
  where: ModuleTypeWhereUniqueInput;
};

export type ModuleTypeUpdateWithoutModuleInput = {
  type?: Maybe<TypeUpdateOneRequiredWithoutModuleTypeInput>;
};

export type ModuleTypeUpdateWithoutTypeInput = {
  module?: Maybe<ModuleUpdateOneRequiredWithoutModuleTypeInput>;
};

export type ModuleTypeUpsertWithWhereUniqueWithoutModuleInput = {
  create: ModuleTypeCreateWithoutModuleInput;
  update: ModuleTypeUpdateWithoutModuleInput;
  where: ModuleTypeWhereUniqueInput;
};

export type ModuleTypeUpsertWithWhereUniqueWithoutTypeInput = {
  create: ModuleTypeCreateWithoutTypeInput;
  update: ModuleTypeUpdateWithoutTypeInput;
  where: ModuleTypeWhereUniqueInput;
};

export type ModuleTypeWhereInput = {
  AND?: Maybe<Array<ModuleTypeWhereInput>>;
  NOT?: Maybe<Array<ModuleTypeWhereInput>>;
  OR?: Maybe<Array<ModuleTypeWhereInput>>;
  id?: Maybe<IntFilter>;
  module?: Maybe<ModuleWhereInput>;
  moduleId?: Maybe<IntFilter>;
  type?: Maybe<TypeWhereInput>;
  typeId?: Maybe<IntFilter>;
};

export type ModuleTypeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type ModuleUnit = {
  __typename?: 'ModuleUnit';
  inches?: Maybe<Scalars['String']>;
  millimeters: Scalars['Float'];
};

export type ModuleUpdateManyMutationInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateManyWithWhereWithoutAttachmentToAppendInput = {
  data: ModuleUpdateManyMutationInput;
  where: ModuleScalarWhereInput;
};

export type ModuleUpdateManyWithWhereWithoutCollectionInput = {
  data: ModuleUpdateManyMutationInput;
  where: ModuleScalarWhereInput;
};

export type ModuleUpdateManyWithWhereWithoutDefaultLeftExtensionInput = {
  data: ModuleUpdateManyMutationInput;
  where: ModuleScalarWhereInput;
};

export type ModuleUpdateManyWithWhereWithoutDefaultRightExtensionInput = {
  data: ModuleUpdateManyMutationInput;
  where: ModuleScalarWhereInput;
};

export type ModuleUpdateManyWithWhereWithoutFinishInput = {
  data: ModuleUpdateManyMutationInput;
  where: ModuleScalarWhereInput;
};

export type ModuleUpdateManyWithWhereWithoutOwnerInput = {
  data: ModuleUpdateManyMutationInput;
  where: ModuleScalarWhereInput;
};

export type ModuleUpdateManyWithoutAttachmentToAppendInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutAttachmentToAppendInput>>;
  create?: Maybe<Array<ModuleCreateWithoutAttachmentToAppendInput>>;
  createMany?: Maybe<ModuleCreateManyAttachmentToAppendInputEnvelope>;
  delete?: Maybe<Array<ModuleWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModuleScalarWhereInput>>;
  disconnect?: Maybe<Array<ModuleWhereUniqueInput>>;
  set?: Maybe<Array<ModuleWhereUniqueInput>>;
  update?: Maybe<Array<ModuleUpdateWithWhereUniqueWithoutAttachmentToAppendInput>>;
  updateMany?: Maybe<Array<ModuleUpdateManyWithWhereWithoutAttachmentToAppendInput>>;
  upsert?: Maybe<Array<ModuleUpsertWithWhereUniqueWithoutAttachmentToAppendInput>>;
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

export type ModuleUpdateManyWithoutDefaultLeftExtensionInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutDefaultLeftExtensionInput>>;
  create?: Maybe<Array<ModuleCreateWithoutDefaultLeftExtensionInput>>;
  createMany?: Maybe<ModuleCreateManyDefaultLeftExtensionInputEnvelope>;
  delete?: Maybe<Array<ModuleWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModuleScalarWhereInput>>;
  disconnect?: Maybe<Array<ModuleWhereUniqueInput>>;
  set?: Maybe<Array<ModuleWhereUniqueInput>>;
  update?: Maybe<Array<ModuleUpdateWithWhereUniqueWithoutDefaultLeftExtensionInput>>;
  updateMany?: Maybe<Array<ModuleUpdateManyWithWhereWithoutDefaultLeftExtensionInput>>;
  upsert?: Maybe<Array<ModuleUpsertWithWhereUniqueWithoutDefaultLeftExtensionInput>>;
};

export type ModuleUpdateManyWithoutDefaultRightExtensionInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutDefaultRightExtensionInput>>;
  create?: Maybe<Array<ModuleCreateWithoutDefaultRightExtensionInput>>;
  createMany?: Maybe<ModuleCreateManyDefaultRightExtensionInputEnvelope>;
  delete?: Maybe<Array<ModuleWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModuleScalarWhereInput>>;
  disconnect?: Maybe<Array<ModuleWhereUniqueInput>>;
  set?: Maybe<Array<ModuleWhereUniqueInput>>;
  update?: Maybe<Array<ModuleUpdateWithWhereUniqueWithoutDefaultRightExtensionInput>>;
  updateMany?: Maybe<Array<ModuleUpdateManyWithWhereWithoutDefaultRightExtensionInput>>;
  upsert?: Maybe<Array<ModuleUpsertWithWhereUniqueWithoutDefaultRightExtensionInput>>;
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

export type ModuleUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<ModuleWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ModuleCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<ModuleCreateWithoutOwnerInput>>;
  createMany?: Maybe<ModuleCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<ModuleWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ModuleScalarWhereInput>>;
  disconnect?: Maybe<Array<ModuleWhereUniqueInput>>;
  set?: Maybe<Array<ModuleWhereUniqueInput>>;
  update?: Maybe<Array<ModuleUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<ModuleUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<ModuleUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type ModuleUpdateOneRequiredWithoutModuleAttachedToInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutModuleAttachedToInput>;
  create?: Maybe<ModuleCreateWithoutModuleAttachedToInput>;
  update?: Maybe<ModuleUpdateWithoutModuleAttachedToInput>;
  upsert?: Maybe<ModuleUpsertWithoutModuleAttachedToInput>;
};

export type ModuleUpdateOneRequiredWithoutModuleAttachmentsInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutModuleAttachmentsInput>;
  create?: Maybe<ModuleCreateWithoutModuleAttachmentsInput>;
  update?: Maybe<ModuleUpdateWithoutModuleAttachmentsInput>;
  upsert?: Maybe<ModuleUpsertWithoutModuleAttachmentsInput>;
};

export type ModuleUpdateOneRequiredWithoutModuleTypeInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutModuleTypeInput>;
  create?: Maybe<ModuleCreateWithoutModuleTypeInput>;
  update?: Maybe<ModuleUpdateWithoutModuleTypeInput>;
  upsert?: Maybe<ModuleUpsertWithoutModuleTypeInput>;
};

export type ModuleUpdateOneRequiredWithoutProjectModulesInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutProjectModulesInput>;
  create?: Maybe<ModuleCreateWithoutProjectModulesInput>;
  update?: Maybe<ModuleUpdateWithoutProjectModulesInput>;
  upsert?: Maybe<ModuleUpsertWithoutProjectModulesInput>;
};

export type ModuleUpdateOneWithoutAttachmentToAppendParentsInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutAttachmentToAppendParentsInput>;
  create?: Maybe<ModuleCreateWithoutAttachmentToAppendParentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ModuleUpdateWithoutAttachmentToAppendParentsInput>;
  upsert?: Maybe<ModuleUpsertWithoutAttachmentToAppendParentsInput>;
};

export type ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutDefaultLeftExtensionParentsInput>;
  create?: Maybe<ModuleCreateWithoutDefaultLeftExtensionParentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ModuleUpdateWithoutDefaultLeftExtensionParentsInput>;
  upsert?: Maybe<ModuleUpsertWithoutDefaultLeftExtensionParentsInput>;
};

export type ModuleUpdateOneWithoutDefaultRightExtensionParentsInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutDefaultRightExtensionParentsInput>;
  create?: Maybe<ModuleCreateWithoutDefaultRightExtensionParentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ModuleUpdateWithoutDefaultRightExtensionParentsInput>;
  upsert?: Maybe<ModuleUpsertWithoutDefaultRightExtensionParentsInput>;
};

export type ModuleUpdateOneWithoutModulesIOwnInput = {
  connect?: Maybe<ModuleWhereUniqueInput>;
  connectOrCreate?: Maybe<ModuleCreateOrConnectWithoutModulesIOwnInput>;
  create?: Maybe<ModuleCreateWithoutModulesIOwnInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ModuleUpdateWithoutModulesIOwnInput>;
  upsert?: Maybe<ModuleUpsertWithoutModulesIOwnInput>;
};

export type ModuleUpdateWithWhereUniqueWithoutAttachmentToAppendInput = {
  data: ModuleUpdateWithoutAttachmentToAppendInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpdateWithWhereUniqueWithoutCollectionInput = {
  data: ModuleUpdateWithoutCollectionInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpdateWithWhereUniqueWithoutDefaultLeftExtensionInput = {
  data: ModuleUpdateWithoutDefaultLeftExtensionInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpdateWithWhereUniqueWithoutDefaultRightExtensionInput = {
  data: ModuleUpdateWithoutDefaultRightExtensionInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpdateWithWhereUniqueWithoutFinishInput = {
  data: ModuleUpdateWithoutFinishInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ModuleUpdateWithoutOwnerInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpdateWithoutAttachmentToAppendInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutAttachmentToAppendParentsInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutCollectionInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutDefaultLeftExtensionInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutDefaultLeftExtensionParentsInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutDefaultRightExtensionInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutDefaultRightExtensionParentsInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutFinishInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutModuleAttachedToInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutModuleAttachmentsInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutModuleTypeInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutModulesIOwnInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutOwnerInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutModuleInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpdateWithoutProjectModulesInput = {
  alwaysDisplay?: Maybe<BoolFieldUpdateOperationsInput>;
  attachmentToAppend?: Maybe<ModuleUpdateOneWithoutAttachmentToAppendParentsInput>;
  attachmentToAppendParents?: Maybe<ModuleUpdateManyWithoutAttachmentToAppendInput>;
  bundleUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutModulesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  defaultLeftExtension?: Maybe<ModuleUpdateOneWithoutDefaultLeftExtensionParentsInput>;
  defaultLeftExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultLeftExtensionInput>;
  defaultRightExtension?: Maybe<ModuleUpdateOneWithoutDefaultRightExtensionParentsInput>;
  defaultRightExtensionParents?: Maybe<ModuleUpdateManyWithoutDefaultRightExtensionInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutModulesInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  isEdge?: Maybe<BoolFieldUpdateOperationsInput>;
  isExtension?: Maybe<BoolFieldUpdateOperationsInput>;
  isMat?: Maybe<BoolFieldUpdateOperationsInput>;
  isSubmodule?: Maybe<BoolFieldUpdateOperationsInput>;
  isVirtualProduct?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsUpdateManyWithoutAttachmentInput>;
  moduleAttachments?: Maybe<ModuleAttachmentsUpdateManyWithoutModuleInput>;
  moduleCategories?: Maybe<ModuleCategoryUpdateManyWithoutModuleInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutModuleInput>;
  modulesIOwn?: Maybe<ModuleUpdateManyWithoutOwnerInput>;
  originalMarathonProductJson?: Maybe<Scalars['Json']>;
  owner?: Maybe<ModuleUpdateOneWithoutModulesIOwnInput>;
  partNumber?: Maybe<StringFieldUpdateOperationsInput>;
  rules?: Maybe<Scalars['Json']>;
  shouldHideBasedOnWidth?: Maybe<BoolFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ModuleUpsertWithWhereUniqueWithoutAttachmentToAppendInput = {
  create: ModuleCreateWithoutAttachmentToAppendInput;
  update: ModuleUpdateWithoutAttachmentToAppendInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpsertWithWhereUniqueWithoutCollectionInput = {
  create: ModuleCreateWithoutCollectionInput;
  update: ModuleUpdateWithoutCollectionInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpsertWithWhereUniqueWithoutDefaultLeftExtensionInput = {
  create: ModuleCreateWithoutDefaultLeftExtensionInput;
  update: ModuleUpdateWithoutDefaultLeftExtensionInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpsertWithWhereUniqueWithoutDefaultRightExtensionInput = {
  create: ModuleCreateWithoutDefaultRightExtensionInput;
  update: ModuleUpdateWithoutDefaultRightExtensionInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpsertWithWhereUniqueWithoutFinishInput = {
  create: ModuleCreateWithoutFinishInput;
  update: ModuleUpdateWithoutFinishInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ModuleCreateWithoutOwnerInput;
  update: ModuleUpdateWithoutOwnerInput;
  where: ModuleWhereUniqueInput;
};

export type ModuleUpsertWithoutAttachmentToAppendParentsInput = {
  create: ModuleCreateWithoutAttachmentToAppendParentsInput;
  update: ModuleUpdateWithoutAttachmentToAppendParentsInput;
};

export type ModuleUpsertWithoutDefaultLeftExtensionParentsInput = {
  create: ModuleCreateWithoutDefaultLeftExtensionParentsInput;
  update: ModuleUpdateWithoutDefaultLeftExtensionParentsInput;
};

export type ModuleUpsertWithoutDefaultRightExtensionParentsInput = {
  create: ModuleCreateWithoutDefaultRightExtensionParentsInput;
  update: ModuleUpdateWithoutDefaultRightExtensionParentsInput;
};

export type ModuleUpsertWithoutModuleAttachedToInput = {
  create: ModuleCreateWithoutModuleAttachedToInput;
  update: ModuleUpdateWithoutModuleAttachedToInput;
};

export type ModuleUpsertWithoutModuleAttachmentsInput = {
  create: ModuleCreateWithoutModuleAttachmentsInput;
  update: ModuleUpdateWithoutModuleAttachmentsInput;
};

export type ModuleUpsertWithoutModuleTypeInput = {
  create: ModuleCreateWithoutModuleTypeInput;
  update: ModuleUpdateWithoutModuleTypeInput;
};

export type ModuleUpsertWithoutModulesIOwnInput = {
  create: ModuleCreateWithoutModulesIOwnInput;
  update: ModuleUpdateWithoutModulesIOwnInput;
};

export type ModuleUpsertWithoutProjectModulesInput = {
  create: ModuleCreateWithoutProjectModulesInput;
  update: ModuleUpdateWithoutProjectModulesInput;
};

export type ModuleWhereInput = {
  AND?: Maybe<Array<ModuleWhereInput>>;
  NOT?: Maybe<Array<ModuleWhereInput>>;
  OR?: Maybe<Array<ModuleWhereInput>>;
  alwaysDisplay?: Maybe<BoolFilter>;
  attachmentToAppend?: Maybe<ModuleWhereInput>;
  attachmentToAppendId?: Maybe<IntNullableFilter>;
  attachmentToAppendParents?: Maybe<ModuleListRelationFilter>;
  bundleUrl?: Maybe<StringNullableFilter>;
  collection?: Maybe<CollectionWhereInput>;
  collectionId?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  defaultLeftExtension?: Maybe<ModuleWhereInput>;
  defaultLeftExtensionId?: Maybe<IntNullableFilter>;
  defaultLeftExtensionParents?: Maybe<ModuleListRelationFilter>;
  defaultRightExtension?: Maybe<ModuleWhereInput>;
  defaultRightExtensionId?: Maybe<IntNullableFilter>;
  defaultRightExtensionParents?: Maybe<ModuleListRelationFilter>;
  description?: Maybe<StringNullableFilter>;
  externalId?: Maybe<StringNullableFilter>;
  finish?: Maybe<FinishWhereInput>;
  finishId?: Maybe<IntFilter>;
  hasPegs?: Maybe<BoolFilter>;
  id?: Maybe<IntFilter>;
  isEdge?: Maybe<BoolFilter>;
  isExtension?: Maybe<BoolFilter>;
  isMat?: Maybe<BoolFilter>;
  isSubmodule?: Maybe<BoolFilter>;
  isVirtualProduct?: Maybe<BoolFilter>;
  moduleAttachedTo?: Maybe<ModuleAttachmentsListRelationFilter>;
  moduleAttachments?: Maybe<ModuleAttachmentsListRelationFilter>;
  moduleCategories?: Maybe<ModuleCategoryListRelationFilter>;
  moduleType?: Maybe<ModuleTypeListRelationFilter>;
  modulesIOwn?: Maybe<ModuleListRelationFilter>;
  originalMarathonProductJson?: Maybe<JsonNullableFilter>;
  owner?: Maybe<ModuleWhereInput>;
  ownerExternalId?: Maybe<StringNullableFilter>;
  partNumber?: Maybe<StringFilter>;
  projectModules?: Maybe<ProjectModuleListRelationFilter>;
  rules?: Maybe<JsonNullableFilter>;
  shouldHideBasedOnWidth?: Maybe<BoolFilter>;
  thumbnailUrl?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ModuleWhereUniqueInput = {
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  partNumber?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  cloneOneProject: Project;
  createList?: Maybe<List>;
  createOneProject: Project;
  createOneProjectModule: ProjectModule;
  deleteManyProjectModule: AffectedRowsOutput;
  deleteOneProject?: Maybe<Project>;
  deleteOneProjectModule?: Maybe<ProjectModule>;
  login?: Maybe<Session>;
  updateManyProjectModule: AffectedRowsOutput;
  updateOneProject?: Maybe<Project>;
  updateOneProjectModule?: Maybe<ProjectModule>;
};

export type MutationCloneOneProjectArgs = {
  id: Scalars['Int'];
};

export type MutationCreateListArgs = {
  id: Scalars['Int'];
};

export type MutationCreateOneProjectArgs = {
  data: ProjectCreateInput;
};

export type MutationCreateOneProjectModuleArgs = {
  data: ProjectModuleCreateInput;
};

export type MutationDeleteManyProjectModuleArgs = {
  where?: Maybe<ProjectModuleWhereInput>;
};

export type MutationDeleteOneProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type MutationDeleteOneProjectModuleArgs = {
  where: ProjectModuleWhereUniqueInput;
};

export type MutationLoginArgs = {
  user: UserSingIn;
};

export type MutationUpdateManyProjectModuleArgs = {
  data: ProjectModuleUpdateManyMutationInput;
  where?: Maybe<ProjectModuleWhereInput>;
};

export type MutationUpdateOneProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type MutationUpdateOneProjectModuleArgs = {
  data: ProjectModuleUpdateInput;
  where: ProjectModuleWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
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

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
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

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  cart: Array<ProjectCart>;
  cartAmount: Scalars['Int'];
  collection: Collection;
  collectionId: Scalars['Int'];
  finish: Finish;
  finishId: Scalars['Int'];
  gable: Scalars['Float'];
  hasPegs: Scalars['Boolean'];
  id: Scalars['Int'];
  lists: Array<List>;
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
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectListsArgs = {
  cursor?: Maybe<ListWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type ProjectProjectModulesArgs = {
  cursor?: Maybe<ProjectModuleWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectModuleOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectModuleWhereInput>;
};

export type ProjectCart = {
  __typename?: 'ProjectCart';
  children?: Maybe<Array<ProjectCart>>;
  id: Scalars['Int'];
  projectModule: ProjectModule;
  quantity: Scalars['Int'];
};

export type ProjectCreateInput = {
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  collection: CollectionCreateNestedOneWithoutProjectsInput;
  finish: FinishCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  lists?: Maybe<ListCreateNestedManyWithoutProjectInput>;
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutProjectInput>;
  slide: SlideCreateNestedOneWithoutProjectsInput;
  slideDepth: SlideDepthCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: TypeCreateNestedOneWithoutProjectsInput;
  user?: Maybe<UserCreateNestedOneWithoutProjectInput>;
};

export type ProjectCreateManyCollectionInput = {
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  finishId: Scalars['Int'];
  gable: Scalars['Float'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  slideDepthId: Scalars['Int'];
  slideId: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  typeId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectCreateManyCollectionInputEnvelope = {
  data?: Maybe<Array<ProjectCreateManyCollectionInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectCreateManyFinishInput = {
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  collectionId: Scalars['Int'];
  gable: Scalars['Float'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  slideDepthId: Scalars['Int'];
  slideId: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  typeId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectCreateManyFinishInputEnvelope = {
  data?: Maybe<Array<ProjectCreateManyFinishInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectCreateManySlideDepthInput = {
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  collectionId: Scalars['Int'];
  finishId: Scalars['Int'];
  gable: Scalars['Float'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  slideId: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  typeId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectCreateManySlideDepthInputEnvelope = {
  data?: Maybe<Array<ProjectCreateManySlideDepthInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectCreateManySlideInput = {
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  collectionId: Scalars['Int'];
  finishId: Scalars['Int'];
  gable: Scalars['Float'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  slideDepthId: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  typeId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectCreateManySlideInputEnvelope = {
  data?: Maybe<Array<ProjectCreateManySlideInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectCreateManyTypeInput = {
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  collectionId: Scalars['Int'];
  finishId: Scalars['Int'];
  gable: Scalars['Float'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  slideDepthId: Scalars['Int'];
  slideId: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  userId?: Maybe<Scalars['Int']>;
};

export type ProjectCreateManyTypeInputEnvelope = {
  data?: Maybe<Array<ProjectCreateManyTypeInput>>;
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

export type ProjectCreateNestedManyWithoutTypeInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutTypeInput>>;
  create?: Maybe<Array<ProjectCreateWithoutTypeInput>>;
  createMany?: Maybe<ProjectCreateManyTypeInputEnvelope>;
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

export type ProjectCreateOrConnectWithoutTypeInput = {
  create: ProjectCreateWithoutTypeInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutCollectionInput = {
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  finish: FinishCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  lists?: Maybe<ListCreateNestedManyWithoutProjectInput>;
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutProjectInput>;
  slide: SlideCreateNestedOneWithoutProjectsInput;
  slideDepth: SlideDepthCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: TypeCreateNestedOneWithoutProjectsInput;
  user?: Maybe<UserCreateNestedOneWithoutProjectInput>;
};

export type ProjectCreateWithoutFinishInput = {
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  collection: CollectionCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  lists?: Maybe<ListCreateNestedManyWithoutProjectInput>;
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutProjectInput>;
  slide: SlideCreateNestedOneWithoutProjectsInput;
  slideDepth: SlideDepthCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: TypeCreateNestedOneWithoutProjectsInput;
  user?: Maybe<UserCreateNestedOneWithoutProjectInput>;
};

export type ProjectCreateWithoutProjectModulesInput = {
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  collection: CollectionCreateNestedOneWithoutProjectsInput;
  finish: FinishCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  lists?: Maybe<ListCreateNestedManyWithoutProjectInput>;
  slide: SlideCreateNestedOneWithoutProjectsInput;
  slideDepth: SlideDepthCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: TypeCreateNestedOneWithoutProjectsInput;
  user?: Maybe<UserCreateNestedOneWithoutProjectInput>;
};

export type ProjectCreateWithoutSlideDepthInput = {
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  collection: CollectionCreateNestedOneWithoutProjectsInput;
  finish: FinishCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  lists?: Maybe<ListCreateNestedManyWithoutProjectInput>;
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutProjectInput>;
  slide: SlideCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: TypeCreateNestedOneWithoutProjectsInput;
  user?: Maybe<UserCreateNestedOneWithoutProjectInput>;
};

export type ProjectCreateWithoutSlideInput = {
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  collection: CollectionCreateNestedOneWithoutProjectsInput;
  finish: FinishCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  lists?: Maybe<ListCreateNestedManyWithoutProjectInput>;
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutProjectInput>;
  slideDepth: SlideDepthCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: TypeCreateNestedOneWithoutProjectsInput;
  user?: Maybe<UserCreateNestedOneWithoutProjectInput>;
};

export type ProjectCreateWithoutTypeInput = {
  cabinetWidth?: Maybe<Scalars['Float']>;
  calculatedWidth?: Maybe<Scalars['Float']>;
  collection: CollectionCreateNestedOneWithoutProjectsInput;
  finish: FinishCreateNestedOneWithoutProjectsInput;
  gable: Scalars['Float'];
  hasPegs?: Maybe<Scalars['Boolean']>;
  lists?: Maybe<ListCreateNestedManyWithoutProjectInput>;
  projectModules?: Maybe<ProjectModuleCreateNestedManyWithoutProjectInput>;
  slide: SlideCreateNestedOneWithoutProjectsInput;
  slideDepth: SlideDepthCreateNestedOneWithoutProjectsInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  user?: Maybe<UserCreateNestedOneWithoutProjectInput>;
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
  nanoId: Scalars['String'];
  parent?: Maybe<ProjectModule>;
  parentId?: Maybe<Scalars['Int']>;
  parentNanoId?: Maybe<Scalars['String']>;
  posX: Scalars['Float'];
  posY: Scalars['Float'];
  posZ: Scalars['Float'];
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['Int']>;
  rotY: Scalars['Float'];
};

export type ProjectModuleChildrenArgs = {
  cursor?: Maybe<ProjectModuleWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectModuleOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectModuleWhereInput>;
};

export type ProjectModuleCreateInput = {
  children?: Maybe<ProjectModuleCreateNestedManyWithoutParentInput>;
  module: ModuleCreateNestedOneWithoutProjectModulesInput;
  nanoId: Scalars['String'];
  parent?: Maybe<ProjectModuleCreateNestedOneWithoutChildrenInput>;
  parentNanoId?: Maybe<Scalars['String']>;
  posX?: Maybe<Scalars['Float']>;
  posY?: Maybe<Scalars['Float']>;
  posZ?: Maybe<Scalars['Float']>;
  project?: Maybe<ProjectCreateNestedOneWithoutProjectModulesInput>;
  rotY?: Maybe<Scalars['Float']>;
};

export type ProjectModuleCreateManyModuleInput = {
  id?: Maybe<Scalars['Int']>;
  nanoId: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  parentNanoId?: Maybe<Scalars['String']>;
  posX?: Maybe<Scalars['Float']>;
  posY?: Maybe<Scalars['Float']>;
  posZ?: Maybe<Scalars['Float']>;
  projectId?: Maybe<Scalars['Int']>;
  rotY?: Maybe<Scalars['Float']>;
};

export type ProjectModuleCreateManyModuleInputEnvelope = {
  data?: Maybe<Array<ProjectModuleCreateManyModuleInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectModuleCreateManyParentInput = {
  id?: Maybe<Scalars['Int']>;
  moduleId: Scalars['Int'];
  nanoId: Scalars['String'];
  parentNanoId?: Maybe<Scalars['String']>;
  posX?: Maybe<Scalars['Float']>;
  posY?: Maybe<Scalars['Float']>;
  posZ?: Maybe<Scalars['Float']>;
  projectId?: Maybe<Scalars['Int']>;
  rotY?: Maybe<Scalars['Float']>;
};

export type ProjectModuleCreateManyParentInputEnvelope = {
  data?: Maybe<Array<ProjectModuleCreateManyParentInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectModuleCreateManyProjectInput = {
  id?: Maybe<Scalars['Int']>;
  moduleId: Scalars['Int'];
  nanoId: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  parentNanoId?: Maybe<Scalars['String']>;
  posX?: Maybe<Scalars['Float']>;
  posY?: Maybe<Scalars['Float']>;
  posZ?: Maybe<Scalars['Float']>;
  rotY?: Maybe<Scalars['Float']>;
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
  nanoId: Scalars['String'];
  parent?: Maybe<ProjectModuleCreateNestedOneWithoutChildrenInput>;
  parentNanoId?: Maybe<Scalars['String']>;
  posX?: Maybe<Scalars['Float']>;
  posY?: Maybe<Scalars['Float']>;
  posZ?: Maybe<Scalars['Float']>;
  project?: Maybe<ProjectCreateNestedOneWithoutProjectModulesInput>;
  rotY?: Maybe<Scalars['Float']>;
};

export type ProjectModuleCreateWithoutModuleInput = {
  children?: Maybe<ProjectModuleCreateNestedManyWithoutParentInput>;
  nanoId: Scalars['String'];
  parent?: Maybe<ProjectModuleCreateNestedOneWithoutChildrenInput>;
  parentNanoId?: Maybe<Scalars['String']>;
  posX?: Maybe<Scalars['Float']>;
  posY?: Maybe<Scalars['Float']>;
  posZ?: Maybe<Scalars['Float']>;
  project?: Maybe<ProjectCreateNestedOneWithoutProjectModulesInput>;
  rotY?: Maybe<Scalars['Float']>;
};

export type ProjectModuleCreateWithoutParentInput = {
  children?: Maybe<ProjectModuleCreateNestedManyWithoutParentInput>;
  module: ModuleCreateNestedOneWithoutProjectModulesInput;
  nanoId: Scalars['String'];
  parentNanoId?: Maybe<Scalars['String']>;
  posX?: Maybe<Scalars['Float']>;
  posY?: Maybe<Scalars['Float']>;
  posZ?: Maybe<Scalars['Float']>;
  project?: Maybe<ProjectCreateNestedOneWithoutProjectModulesInput>;
  rotY?: Maybe<Scalars['Float']>;
};

export type ProjectModuleCreateWithoutProjectInput = {
  children?: Maybe<ProjectModuleCreateNestedManyWithoutParentInput>;
  module: ModuleCreateNestedOneWithoutProjectModulesInput;
  nanoId: Scalars['String'];
  parent?: Maybe<ProjectModuleCreateNestedOneWithoutChildrenInput>;
  parentNanoId?: Maybe<Scalars['String']>;
  posX?: Maybe<Scalars['Float']>;
  posY?: Maybe<Scalars['Float']>;
  posZ?: Maybe<Scalars['Float']>;
  rotY?: Maybe<Scalars['Float']>;
};

export type ProjectModuleListRelationFilter = {
  every?: Maybe<ProjectModuleWhereInput>;
  none?: Maybe<ProjectModuleWhereInput>;
  some?: Maybe<ProjectModuleWhereInput>;
};

export type ProjectModuleOrderByInput = {
  id?: Maybe<SortOrder>;
  moduleId?: Maybe<SortOrder>;
  nanoId?: Maybe<SortOrder>;
  parentId?: Maybe<SortOrder>;
  parentNanoId?: Maybe<SortOrder>;
  posX?: Maybe<SortOrder>;
  posY?: Maybe<SortOrder>;
  posZ?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  rotY?: Maybe<SortOrder>;
};

export type ProjectModuleScalarWhereInput = {
  AND?: Maybe<Array<ProjectModuleScalarWhereInput>>;
  NOT?: Maybe<Array<ProjectModuleScalarWhereInput>>;
  OR?: Maybe<Array<ProjectModuleScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  moduleId?: Maybe<IntFilter>;
  nanoId?: Maybe<StringFilter>;
  parentId?: Maybe<IntNullableFilter>;
  parentNanoId?: Maybe<StringNullableFilter>;
  posX?: Maybe<FloatFilter>;
  posY?: Maybe<FloatFilter>;
  posZ?: Maybe<FloatFilter>;
  projectId?: Maybe<IntNullableFilter>;
  rotY?: Maybe<FloatFilter>;
};

export type ProjectModuleUpdateInput = {
  children?: Maybe<ProjectModuleUpdateManyWithoutParentInput>;
  module?: Maybe<ModuleUpdateOneRequiredWithoutProjectModulesInput>;
  nanoId?: Maybe<StringFieldUpdateOperationsInput>;
  parent?: Maybe<ProjectModuleUpdateOneWithoutChildrenInput>;
  parentNanoId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  posX?: Maybe<FloatFieldUpdateOperationsInput>;
  posY?: Maybe<FloatFieldUpdateOperationsInput>;
  posZ?: Maybe<FloatFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneWithoutProjectModulesInput>;
  rotY?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectModuleUpdateManyMutationInput = {
  nanoId?: Maybe<StringFieldUpdateOperationsInput>;
  parentNanoId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  posX?: Maybe<FloatFieldUpdateOperationsInput>;
  posY?: Maybe<FloatFieldUpdateOperationsInput>;
  posZ?: Maybe<FloatFieldUpdateOperationsInput>;
  rotY?: Maybe<FloatFieldUpdateOperationsInput>;
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
  nanoId?: Maybe<StringFieldUpdateOperationsInput>;
  parent?: Maybe<ProjectModuleUpdateOneWithoutChildrenInput>;
  parentNanoId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  posX?: Maybe<FloatFieldUpdateOperationsInput>;
  posY?: Maybe<FloatFieldUpdateOperationsInput>;
  posZ?: Maybe<FloatFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneWithoutProjectModulesInput>;
  rotY?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectModuleUpdateWithoutModuleInput = {
  children?: Maybe<ProjectModuleUpdateManyWithoutParentInput>;
  nanoId?: Maybe<StringFieldUpdateOperationsInput>;
  parent?: Maybe<ProjectModuleUpdateOneWithoutChildrenInput>;
  parentNanoId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  posX?: Maybe<FloatFieldUpdateOperationsInput>;
  posY?: Maybe<FloatFieldUpdateOperationsInput>;
  posZ?: Maybe<FloatFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneWithoutProjectModulesInput>;
  rotY?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectModuleUpdateWithoutParentInput = {
  children?: Maybe<ProjectModuleUpdateManyWithoutParentInput>;
  module?: Maybe<ModuleUpdateOneRequiredWithoutProjectModulesInput>;
  nanoId?: Maybe<StringFieldUpdateOperationsInput>;
  parentNanoId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  posX?: Maybe<FloatFieldUpdateOperationsInput>;
  posY?: Maybe<FloatFieldUpdateOperationsInput>;
  posZ?: Maybe<FloatFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneWithoutProjectModulesInput>;
  rotY?: Maybe<FloatFieldUpdateOperationsInput>;
};

export type ProjectModuleUpdateWithoutProjectInput = {
  children?: Maybe<ProjectModuleUpdateManyWithoutParentInput>;
  module?: Maybe<ModuleUpdateOneRequiredWithoutProjectModulesInput>;
  nanoId?: Maybe<StringFieldUpdateOperationsInput>;
  parent?: Maybe<ProjectModuleUpdateOneWithoutChildrenInput>;
  parentNanoId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  posX?: Maybe<FloatFieldUpdateOperationsInput>;
  posY?: Maybe<FloatFieldUpdateOperationsInput>;
  posZ?: Maybe<FloatFieldUpdateOperationsInput>;
  rotY?: Maybe<FloatFieldUpdateOperationsInput>;
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
  nanoId?: Maybe<StringFilter>;
  parent?: Maybe<ProjectModuleWhereInput>;
  parentId?: Maybe<IntNullableFilter>;
  parentNanoId?: Maybe<StringNullableFilter>;
  posX?: Maybe<FloatFilter>;
  posY?: Maybe<FloatFilter>;
  posZ?: Maybe<FloatFilter>;
  project?: Maybe<ProjectWhereInput>;
  projectId?: Maybe<IntNullableFilter>;
  rotY?: Maybe<FloatFilter>;
};

export type ProjectModuleWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  nanoId?: Maybe<Scalars['String']>;
};

export type ProjectOrderByInput = {
  cabinetWidth?: Maybe<SortOrder>;
  calculatedWidth?: Maybe<SortOrder>;
  collectionId?: Maybe<SortOrder>;
  finishId?: Maybe<SortOrder>;
  gable?: Maybe<SortOrder>;
  hasPegs?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  slideDepthId?: Maybe<SortOrder>;
  slideId?: Maybe<SortOrder>;
  slug?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  typeId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type ProjectScalarWhereInput = {
  AND?: Maybe<Array<ProjectScalarWhereInput>>;
  NOT?: Maybe<Array<ProjectScalarWhereInput>>;
  OR?: Maybe<Array<ProjectScalarWhereInput>>;
  cabinetWidth?: Maybe<FloatNullableFilter>;
  calculatedWidth?: Maybe<FloatNullableFilter>;
  collectionId?: Maybe<IntFilter>;
  finishId?: Maybe<IntFilter>;
  gable?: Maybe<FloatFilter>;
  hasPegs?: Maybe<BoolFilter>;
  id?: Maybe<IntFilter>;
  slideDepthId?: Maybe<IntFilter>;
  slideId?: Maybe<IntFilter>;
  slug?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  typeId?: Maybe<IntFilter>;
  userId?: Maybe<IntNullableFilter>;
};

export type ProjectUpdateInput = {
  cabinetWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  calculatedWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutProjectsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  lists?: Maybe<ListUpdateManyWithoutProjectInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutProjectInput>;
  slide?: Maybe<SlideUpdateOneRequiredWithoutProjectsInput>;
  slideDepth?: Maybe<SlideDepthUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<TypeUpdateOneRequiredWithoutProjectsInput>;
  user?: Maybe<UserUpdateOneWithoutProjectInput>;
};

export type ProjectUpdateManyMutationInput = {
  cabinetWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  calculatedWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
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

export type ProjectUpdateManyWithWhereWithoutTypeInput = {
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

export type ProjectUpdateManyWithoutTypeInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutTypeInput>>;
  create?: Maybe<Array<ProjectCreateWithoutTypeInput>>;
  createMany?: Maybe<ProjectCreateManyTypeInputEnvelope>;
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  update?: Maybe<Array<ProjectUpdateWithWhereUniqueWithoutTypeInput>>;
  updateMany?: Maybe<Array<ProjectUpdateManyWithWhereWithoutTypeInput>>;
  upsert?: Maybe<Array<ProjectUpsertWithWhereUniqueWithoutTypeInput>>;
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

export type ProjectUpdateWithWhereUniqueWithoutTypeInput = {
  data: ProjectUpdateWithoutTypeInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutCollectionInput = {
  cabinetWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  calculatedWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  lists?: Maybe<ListUpdateManyWithoutProjectInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutProjectInput>;
  slide?: Maybe<SlideUpdateOneRequiredWithoutProjectsInput>;
  slideDepth?: Maybe<SlideDepthUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<TypeUpdateOneRequiredWithoutProjectsInput>;
  user?: Maybe<UserUpdateOneWithoutProjectInput>;
};

export type ProjectUpdateWithoutFinishInput = {
  cabinetWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  calculatedWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  lists?: Maybe<ListUpdateManyWithoutProjectInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutProjectInput>;
  slide?: Maybe<SlideUpdateOneRequiredWithoutProjectsInput>;
  slideDepth?: Maybe<SlideDepthUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<TypeUpdateOneRequiredWithoutProjectsInput>;
  user?: Maybe<UserUpdateOneWithoutProjectInput>;
};

export type ProjectUpdateWithoutProjectModulesInput = {
  cabinetWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  calculatedWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutProjectsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  lists?: Maybe<ListUpdateManyWithoutProjectInput>;
  slide?: Maybe<SlideUpdateOneRequiredWithoutProjectsInput>;
  slideDepth?: Maybe<SlideDepthUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<TypeUpdateOneRequiredWithoutProjectsInput>;
  user?: Maybe<UserUpdateOneWithoutProjectInput>;
};

export type ProjectUpdateWithoutSlideDepthInput = {
  cabinetWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  calculatedWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutProjectsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  lists?: Maybe<ListUpdateManyWithoutProjectInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutProjectInput>;
  slide?: Maybe<SlideUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<TypeUpdateOneRequiredWithoutProjectsInput>;
  user?: Maybe<UserUpdateOneWithoutProjectInput>;
};

export type ProjectUpdateWithoutSlideInput = {
  cabinetWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  calculatedWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutProjectsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  lists?: Maybe<ListUpdateManyWithoutProjectInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutProjectInput>;
  slideDepth?: Maybe<SlideDepthUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<TypeUpdateOneRequiredWithoutProjectsInput>;
  user?: Maybe<UserUpdateOneWithoutProjectInput>;
};

export type ProjectUpdateWithoutTypeInput = {
  cabinetWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  calculatedWidth?: Maybe<NullableFloatFieldUpdateOperationsInput>;
  collection?: Maybe<CollectionUpdateOneRequiredWithoutProjectsInput>;
  finish?: Maybe<FinishUpdateOneRequiredWithoutProjectsInput>;
  gable?: Maybe<FloatFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  lists?: Maybe<ListUpdateManyWithoutProjectInput>;
  projectModules?: Maybe<ProjectModuleUpdateManyWithoutProjectInput>;
  slide?: Maybe<SlideUpdateOneRequiredWithoutProjectsInput>;
  slideDepth?: Maybe<SlideDepthUpdateOneRequiredWithoutProjectsInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneWithoutProjectInput>;
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

export type ProjectUpsertWithWhereUniqueWithoutTypeInput = {
  create: ProjectCreateWithoutTypeInput;
  update: ProjectUpdateWithoutTypeInput;
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
  cabinetWidth?: Maybe<FloatNullableFilter>;
  calculatedWidth?: Maybe<FloatNullableFilter>;
  collection?: Maybe<CollectionWhereInput>;
  collectionId?: Maybe<IntFilter>;
  finish?: Maybe<FinishWhereInput>;
  finishId?: Maybe<IntFilter>;
  gable?: Maybe<FloatFilter>;
  hasPegs?: Maybe<BoolFilter>;
  id?: Maybe<IntFilter>;
  lists?: Maybe<ListListRelationFilter>;
  projectModules?: Maybe<ProjectModuleListRelationFilter>;
  slide?: Maybe<SlideWhereInput>;
  slideDepth?: Maybe<SlideDepthWhereInput>;
  slideDepthId?: Maybe<IntFilter>;
  slideId?: Maybe<IntFilter>;
  slug?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  type?: Maybe<TypeWhereInput>;
  typeId?: Maybe<IntFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntNullableFilter>;
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

export type QueueInfoMetadata = {
  __typename?: 'QueueInfoMetadata';
  /** Repeat models */
  append?: Maybe<Scalars['String']>;
  /** Last model after repeat */
  modules: Array<Scalars['String']>;
};

export type Session = {
  __typename?: 'Session';
  id: Scalars['Int'];
  token: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type SessionCreateManyUserInput = {
  id?: Maybe<Scalars['Int']>;
  token: Scalars['String'];
};

export type SessionCreateManyUserInputEnvelope = {
  data?: Maybe<Array<SessionCreateManyUserInput>>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  token: Scalars['String'];
};

export type SessionListRelationFilter = {
  every?: Maybe<SessionWhereInput>;
  none?: Maybe<SessionWhereInput>;
  some?: Maybe<SessionWhereInput>;
};

export type SessionScalarWhereInput = {
  AND?: Maybe<Array<SessionScalarWhereInput>>;
  NOT?: Maybe<Array<SessionScalarWhereInput>>;
  OR?: Maybe<Array<SessionScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  token?: Maybe<StringFilter>;
  userId?: Maybe<IntFilter>;
};

export type SessionUpdateManyMutationInput = {
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SessionScalarWhereInput>>;
  disconnect?: Maybe<Array<SessionWhereUniqueInput>>;
  set?: Maybe<Array<SessionWhereUniqueInput>>;
  update?: Maybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>;
  NOT?: Maybe<Array<SessionWhereInput>>;
  OR?: Maybe<Array<SessionWhereInput>>;
  id?: Maybe<IntFilter>;
  token?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<IntFilter>;
};

export type SessionWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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

export type TrimOffsetMetadata = {
  __typename?: 'TrimOffsetMetadata';
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
  top?: Maybe<Scalars['Float']>;
};

export type Type = {
  __typename?: 'Type';
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  hasPegs: Scalars['Boolean'];
  id: Scalars['Int'];
  moduleType: Array<ModuleType>;
  name: Scalars['String'];
  projects: Array<Project>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type TypeModuleTypeArgs = {
  cursor?: Maybe<ModuleTypeWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type TypeProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type TypeCreateNestedOneWithoutModuleTypeInput = {
  connect?: Maybe<TypeWhereUniqueInput>;
  connectOrCreate?: Maybe<TypeCreateOrConnectWithoutModuleTypeInput>;
  create?: Maybe<TypeCreateWithoutModuleTypeInput>;
};

export type TypeCreateNestedOneWithoutProjectsInput = {
  connect?: Maybe<TypeWhereUniqueInput>;
  connectOrCreate?: Maybe<TypeCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<TypeCreateWithoutProjectsInput>;
};

export type TypeCreateOrConnectWithoutModuleTypeInput = {
  create: TypeCreateWithoutModuleTypeInput;
  where: TypeWhereUniqueInput;
};

export type TypeCreateOrConnectWithoutProjectsInput = {
  create: TypeCreateWithoutProjectsInput;
  where: TypeWhereUniqueInput;
};

export type TypeCreateWithoutModuleTypeInput = {
  externalId?: Maybe<Scalars['String']>;
  hasPegs?: Maybe<Scalars['Boolean']>;
  projects?: Maybe<ProjectCreateNestedManyWithoutTypeInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<TypeTranslationsCreateNestedManyWithoutTypeInput>;
};

export type TypeCreateWithoutProjectsInput = {
  externalId?: Maybe<Scalars['String']>;
  hasPegs?: Maybe<Scalars['Boolean']>;
  moduleType?: Maybe<ModuleTypeCreateNestedManyWithoutTypeInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  translations?: Maybe<TypeTranslationsCreateNestedManyWithoutTypeInput>;
};

export type TypeOrderByInput = {
  externalId?: Maybe<SortOrder>;
  hasPegs?: Maybe<SortOrder>;
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

export type TypeUpdateOneRequiredWithoutModuleTypeInput = {
  connect?: Maybe<TypeWhereUniqueInput>;
  connectOrCreate?: Maybe<TypeCreateOrConnectWithoutModuleTypeInput>;
  create?: Maybe<TypeCreateWithoutModuleTypeInput>;
  update?: Maybe<TypeUpdateWithoutModuleTypeInput>;
  upsert?: Maybe<TypeUpsertWithoutModuleTypeInput>;
};

export type TypeUpdateOneRequiredWithoutProjectsInput = {
  connect?: Maybe<TypeWhereUniqueInput>;
  connectOrCreate?: Maybe<TypeCreateOrConnectWithoutProjectsInput>;
  create?: Maybe<TypeCreateWithoutProjectsInput>;
  update?: Maybe<TypeUpdateWithoutProjectsInput>;
  upsert?: Maybe<TypeUpsertWithoutProjectsInput>;
};

export type TypeUpdateWithoutModuleTypeInput = {
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  projects?: Maybe<ProjectUpdateManyWithoutTypeInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<TypeTranslationsUpdateManyWithoutTypeInput>;
};

export type TypeUpdateWithoutProjectsInput = {
  externalId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  hasPegs?: Maybe<BoolFieldUpdateOperationsInput>;
  moduleType?: Maybe<ModuleTypeUpdateManyWithoutTypeInput>;
  slug?: Maybe<StringFieldUpdateOperationsInput>;
  thumbnailUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  translations?: Maybe<TypeTranslationsUpdateManyWithoutTypeInput>;
};

export type TypeUpsertWithoutModuleTypeInput = {
  create: TypeCreateWithoutModuleTypeInput;
  update: TypeUpdateWithoutModuleTypeInput;
};

export type TypeUpsertWithoutProjectsInput = {
  create: TypeCreateWithoutProjectsInput;
  update: TypeUpdateWithoutProjectsInput;
};

export type TypeWhereInput = {
  AND?: Maybe<Array<TypeWhereInput>>;
  NOT?: Maybe<Array<TypeWhereInput>>;
  OR?: Maybe<Array<TypeWhereInput>>;
  externalId?: Maybe<StringNullableFilter>;
  hasPegs?: Maybe<BoolFilter>;
  id?: Maybe<IntFilter>;
  moduleType?: Maybe<ModuleTypeListRelationFilter>;
  projects?: Maybe<ProjectListRelationFilter>;
  slug?: Maybe<StringFilter>;
  thumbnailUrl?: Maybe<StringNullableFilter>;
  translations?: Maybe<TypeTranslationsListRelationFilter>;
};

export type TypeWhereUniqueInput = {
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
  isAdminUser: Scalars['Boolean'];
  marathonUserId: Scalars['Int'];
  project: Array<Project>;
  session: Array<Session>;
};

export type UserProjectArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type UserSessionArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type UserCreateNestedOneWithoutProjectInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProjectInput>;
  create?: Maybe<UserCreateWithoutProjectInput>;
};

export type UserCreateOrConnectWithoutProjectInput = {
  create: UserCreateWithoutProjectInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutProjectInput = {
  email: Scalars['String'];
  isAdminUser?: Maybe<Scalars['Boolean']>;
  marathonUserId: Scalars['Int'];
  session?: Maybe<SessionCreateNestedManyWithoutUserInput>;
};

export type UserSingIn = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserUpdateOneWithoutProjectInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutProjectInput>;
  create?: Maybe<UserCreateWithoutProjectInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutProjectInput>;
  upsert?: Maybe<UserUpsertWithoutProjectInput>;
};

export type UserUpdateWithoutProjectInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  isAdminUser?: Maybe<BoolFieldUpdateOperationsInput>;
  marathonUserId?: Maybe<IntFieldUpdateOperationsInput>;
  session?: Maybe<SessionUpdateManyWithoutUserInput>;
};

export type UserUpsertWithoutProjectInput = {
  create: UserCreateWithoutProjectInput;
  update: UserUpdateWithoutProjectInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  isAdminUser?: Maybe<BoolFilter>;
  marathonUserId?: Maybe<IntFilter>;
  project?: Maybe<ProjectListRelationFilter>;
  session?: Maybe<SessionListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type CartQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type CartQuery = {
  __typename?: 'Query';
  project?:
    | {
        __typename?: 'Project';
        id: number;
        slug: string;
        title: string;
        cartAmount: number;
        cart: Array<{
          __typename?: 'ProjectCart';
          id: number;
          quantity: number;
          children?:
            | Array<{
                __typename?: 'ProjectCart';
                id: number;
                quantity: number;
                projectModule: {
                  __typename?: 'ProjectModule';
                  id: number;
                  moduleId: number;
                  module: {
                    __typename?: 'Module';
                    id: number;
                    partNumber: string;
                    description?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                    isVirtualProduct: boolean;
                    owner?:
                      | {
                          __typename?: 'Module';
                          id: number;
                          partNumber: string;
                          description?: string | null | undefined;
                          thumbnailUrl?: string | null | undefined;
                        }
                      | null
                      | undefined;
                  };
                };
              }>
            | null
            | undefined;
          projectModule: {
            __typename?: 'ProjectModule';
            id: number;
            moduleId: number;
            module: {
              __typename?: 'Module';
              id: number;
              partNumber: string;
              description?: string | null | undefined;
              thumbnailUrl?: string | null | undefined;
              isVirtualProduct: boolean;
              owner?:
                | {
                    __typename?: 'Module';
                    id: number;
                    partNumber: string;
                    description?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                  }
                | null
                | undefined;
            };
          };
        }>;
      }
    | null
    | undefined;
};

export type CreateListMutationVariables = Exact<{
  projectId: Scalars['Int'];
}>;

export type CreateListMutation = {
  __typename?: 'Mutation';
  createList?:
    | {
        __typename?: 'List';
        id: number;
        externalId?: string | null | undefined;
        name?: string | null | undefined;
        project?: { __typename?: 'Project'; id: number } | null | undefined;
      }
    | null
    | undefined;
};

export type GetCollectionsQueryVariables = Exact<{
  typeId: Scalars['Int'];
}>;

export type GetCollectionsQuery = {
  __typename?: 'Query';
  type?: { __typename?: 'Type'; id: number; hasPegs: boolean } | null | undefined;
  collections: Array<{
    __typename?: 'Collection';
    id: number;
    name: string;
    slug: string;
    hasPegs: boolean;
    isComingSoon: boolean;
    subtitle?: string | null | undefined;
    description?: string | null | undefined;
    footer?: string | null | undefined;
    thumbnailUrl?: string | null | undefined;
  }>;
};

export type GetFinishByCollectionQueryVariables = Exact<{
  collectionId: Scalars['Int'];
}>;

export type GetFinishByCollectionQuery = {
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

export type CartDataFragment = {
  __typename?: 'ProjectCart';
  id: number;
  quantity: number;
  projectModule: {
    __typename?: 'ProjectModule';
    id: number;
    moduleId: number;
    module: {
      __typename?: 'Module';
      id: number;
      partNumber: string;
      description?: string | null | undefined;
      thumbnailUrl?: string | null | undefined;
      isVirtualProduct: boolean;
      owner?:
        | {
            __typename?: 'Module';
            id: number;
            partNumber: string;
            description?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
          }
        | null
        | undefined;
    };
  };
};

export type ModuleDataWithoutExtensionsFragment = {
  __typename?: 'Module';
  id: number;
  bundleUrl?: string | null | undefined;
  hasPegs: boolean;
  isExtension: boolean;
  isMat: boolean;
  isSubmodule: boolean;
  isEdge: boolean;
  partNumber: string;
  thumbnailUrl?: string | null | undefined;
  description?: string | null | undefined;
  rules?:
    | {
        __typename?: 'ModuleRules';
        rules?:
          | { __typename?: 'ModuleRulesMetadata'; options?: Array<string | null | undefined> | null | undefined }
          | null
          | undefined;
        extensions?:
          | { __typename?: 'ModuleExtensionsMetadata'; options?: Array<string | null | undefined> | null | undefined }
          | null
          | undefined;
      }
    | null
    | undefined;
  categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
};

export type ModuleDataFragment = {
  __typename?: 'Module';
  id: number;
  bundleUrl?: string | null | undefined;
  hasPegs: boolean;
  isExtension: boolean;
  isMat: boolean;
  isSubmodule: boolean;
  isEdge: boolean;
  partNumber: string;
  thumbnailUrl?: string | null | undefined;
  description?: string | null | undefined;
  defaultLeftExtension?:
    | {
        __typename?: 'Module';
        rulesJson?: any | null | undefined;
        id: number;
        bundleUrl?: string | null | undefined;
        hasPegs: boolean;
        isExtension: boolean;
        isMat: boolean;
        isSubmodule: boolean;
        isEdge: boolean;
        partNumber: string;
        thumbnailUrl?: string | null | undefined;
        description?: string | null | undefined;
        rules?:
          | {
              __typename?: 'ModuleRules';
              rules?:
                | { __typename?: 'ModuleRulesMetadata'; options?: Array<string | null | undefined> | null | undefined }
                | null
                | undefined;
              extensions?:
                | {
                    __typename?: 'ModuleExtensionsMetadata';
                    options?: Array<string | null | undefined> | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined;
        categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
      }
    | null
    | undefined;
  defaultRightExtension?:
    | {
        __typename?: 'Module';
        rulesJson?: any | null | undefined;
        id: number;
        bundleUrl?: string | null | undefined;
        hasPegs: boolean;
        isExtension: boolean;
        isMat: boolean;
        isSubmodule: boolean;
        isEdge: boolean;
        partNumber: string;
        thumbnailUrl?: string | null | undefined;
        description?: string | null | undefined;
        rules?:
          | {
              __typename?: 'ModuleRules';
              rules?:
                | { __typename?: 'ModuleRulesMetadata'; options?: Array<string | null | undefined> | null | undefined }
                | null
                | undefined;
              extensions?:
                | {
                    __typename?: 'ModuleExtensionsMetadata';
                    options?: Array<string | null | undefined> | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined;
        categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
      }
    | null
    | undefined;
  attachmentToAppend?:
    | {
        __typename?: 'Module';
        rulesJson?: any | null | undefined;
        id: number;
        bundleUrl?: string | null | undefined;
        hasPegs: boolean;
        isExtension: boolean;
        isMat: boolean;
        isSubmodule: boolean;
        isEdge: boolean;
        partNumber: string;
        thumbnailUrl?: string | null | undefined;
        description?: string | null | undefined;
        rules?:
          | {
              __typename?: 'ModuleRules';
              rules?:
                | { __typename?: 'ModuleRulesMetadata'; options?: Array<string | null | undefined> | null | undefined }
                | null
                | undefined;
              extensions?:
                | {
                    __typename?: 'ModuleExtensionsMetadata';
                    options?: Array<string | null | undefined> | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined;
        categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
      }
    | null
    | undefined;
  moduleAttachments: Array<{
    __typename?: 'ModuleAttachments';
    id: number;
    attachment: {
      __typename?: 'Module';
      rulesJson?: any | null | undefined;
      id: number;
      bundleUrl?: string | null | undefined;
      hasPegs: boolean;
      isExtension: boolean;
      isMat: boolean;
      isSubmodule: boolean;
      isEdge: boolean;
      partNumber: string;
      thumbnailUrl?: string | null | undefined;
      description?: string | null | undefined;
      rules?:
        | {
            __typename?: 'ModuleRules';
            rules?:
              | { __typename?: 'ModuleRulesMetadata'; options?: Array<string | null | undefined> | null | undefined }
              | null
              | undefined;
            extensions?:
              | {
                  __typename?: 'ModuleExtensionsMetadata';
                  options?: Array<string | null | undefined> | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
    };
  }>;
  owner?:
    | {
        __typename?: 'Module';
        id: number;
        partNumber: string;
        description?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
      }
    | null
    | undefined;
  rules?:
    | {
        __typename?: 'ModuleRules';
        rules?:
          | { __typename?: 'ModuleRulesMetadata'; options?: Array<string | null | undefined> | null | undefined }
          | null
          | undefined;
        extensions?:
          | { __typename?: 'ModuleExtensionsMetadata'; options?: Array<string | null | undefined> | null | undefined }
          | null
          | undefined;
      }
    | null
    | undefined;
  categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
};

export type ProjectModuleDataFragment = {
  __typename?: 'ProjectModule';
  id: number;
  nanoId: string;
  posX: number;
  posY: number;
  posZ: number;
  rotY: number;
  parentId?: number | null | undefined;
  parentNanoId?: string | null | undefined;
  module: {
    __typename?: 'Module';
    rulesJson?: any | null | undefined;
    id: number;
    bundleUrl?: string | null | undefined;
    hasPegs: boolean;
    isExtension: boolean;
    isMat: boolean;
    isSubmodule: boolean;
    isEdge: boolean;
    partNumber: string;
    thumbnailUrl?: string | null | undefined;
    description?: string | null | undefined;
    defaultLeftExtension?:
      | {
          __typename?: 'Module';
          rulesJson?: any | null | undefined;
          id: number;
          bundleUrl?: string | null | undefined;
          hasPegs: boolean;
          isExtension: boolean;
          isMat: boolean;
          isSubmodule: boolean;
          isEdge: boolean;
          partNumber: string;
          thumbnailUrl?: string | null | undefined;
          description?: string | null | undefined;
          rules?:
            | {
                __typename?: 'ModuleRules';
                rules?:
                  | {
                      __typename?: 'ModuleRulesMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
                extensions?:
                  | {
                      __typename?: 'ModuleExtensionsMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
          categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
        }
      | null
      | undefined;
    defaultRightExtension?:
      | {
          __typename?: 'Module';
          rulesJson?: any | null | undefined;
          id: number;
          bundleUrl?: string | null | undefined;
          hasPegs: boolean;
          isExtension: boolean;
          isMat: boolean;
          isSubmodule: boolean;
          isEdge: boolean;
          partNumber: string;
          thumbnailUrl?: string | null | undefined;
          description?: string | null | undefined;
          rules?:
            | {
                __typename?: 'ModuleRules';
                rules?:
                  | {
                      __typename?: 'ModuleRulesMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
                extensions?:
                  | {
                      __typename?: 'ModuleExtensionsMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
          categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
        }
      | null
      | undefined;
    attachmentToAppend?:
      | {
          __typename?: 'Module';
          rulesJson?: any | null | undefined;
          id: number;
          bundleUrl?: string | null | undefined;
          hasPegs: boolean;
          isExtension: boolean;
          isMat: boolean;
          isSubmodule: boolean;
          isEdge: boolean;
          partNumber: string;
          thumbnailUrl?: string | null | undefined;
          description?: string | null | undefined;
          rules?:
            | {
                __typename?: 'ModuleRules';
                rules?:
                  | {
                      __typename?: 'ModuleRulesMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
                extensions?:
                  | {
                      __typename?: 'ModuleExtensionsMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
          categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
        }
      | null
      | undefined;
    moduleAttachments: Array<{
      __typename?: 'ModuleAttachments';
      id: number;
      attachment: {
        __typename?: 'Module';
        rulesJson?: any | null | undefined;
        id: number;
        bundleUrl?: string | null | undefined;
        hasPegs: boolean;
        isExtension: boolean;
        isMat: boolean;
        isSubmodule: boolean;
        isEdge: boolean;
        partNumber: string;
        thumbnailUrl?: string | null | undefined;
        description?: string | null | undefined;
        rules?:
          | {
              __typename?: 'ModuleRules';
              rules?:
                | { __typename?: 'ModuleRulesMetadata'; options?: Array<string | null | undefined> | null | undefined }
                | null
                | undefined;
              extensions?:
                | {
                    __typename?: 'ModuleExtensionsMetadata';
                    options?: Array<string | null | undefined> | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined;
        categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
      };
    }>;
    owner?:
      | {
          __typename?: 'Module';
          id: number;
          partNumber: string;
          description?: string | null | undefined;
          thumbnailUrl?: string | null | undefined;
        }
      | null
      | undefined;
    rules?:
      | {
          __typename?: 'ModuleRules';
          rules?:
            | { __typename?: 'ModuleRulesMetadata'; options?: Array<string | null | undefined> | null | undefined }
            | null
            | undefined;
          extensions?:
            | { __typename?: 'ModuleExtensionsMetadata'; options?: Array<string | null | undefined> | null | undefined }
            | null
            | undefined;
        }
      | null
      | undefined;
    categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
  };
};

export type LoginMutationVariables = Exact<{
  user: UserSingIn;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login?: { __typename?: 'Session'; id: number; userId: number; token: string } | null | undefined;
};

export type ModuleOptionsQueryVariables = Exact<{
  options?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;

export type ModuleOptionsQuery = {
  __typename?: 'Query';
  modules: Array<{
    __typename?: 'Module';
    id: number;
    bundleUrl?: string | null | undefined;
    hasPegs: boolean;
    isExtension: boolean;
    isMat: boolean;
    isSubmodule: boolean;
    isEdge: boolean;
    partNumber: string;
    thumbnailUrl?: string | null | undefined;
    description?: string | null | undefined;
    defaultLeftExtension?:
      | {
          __typename?: 'Module';
          rulesJson?: any | null | undefined;
          id: number;
          bundleUrl?: string | null | undefined;
          hasPegs: boolean;
          isExtension: boolean;
          isMat: boolean;
          isSubmodule: boolean;
          isEdge: boolean;
          partNumber: string;
          thumbnailUrl?: string | null | undefined;
          description?: string | null | undefined;
          rules?:
            | {
                __typename?: 'ModuleRules';
                rules?:
                  | {
                      __typename?: 'ModuleRulesMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
                extensions?:
                  | {
                      __typename?: 'ModuleExtensionsMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
          categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
        }
      | null
      | undefined;
    defaultRightExtension?:
      | {
          __typename?: 'Module';
          rulesJson?: any | null | undefined;
          id: number;
          bundleUrl?: string | null | undefined;
          hasPegs: boolean;
          isExtension: boolean;
          isMat: boolean;
          isSubmodule: boolean;
          isEdge: boolean;
          partNumber: string;
          thumbnailUrl?: string | null | undefined;
          description?: string | null | undefined;
          rules?:
            | {
                __typename?: 'ModuleRules';
                rules?:
                  | {
                      __typename?: 'ModuleRulesMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
                extensions?:
                  | {
                      __typename?: 'ModuleExtensionsMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
          categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
        }
      | null
      | undefined;
    attachmentToAppend?:
      | {
          __typename?: 'Module';
          rulesJson?: any | null | undefined;
          id: number;
          bundleUrl?: string | null | undefined;
          hasPegs: boolean;
          isExtension: boolean;
          isMat: boolean;
          isSubmodule: boolean;
          isEdge: boolean;
          partNumber: string;
          thumbnailUrl?: string | null | undefined;
          description?: string | null | undefined;
          rules?:
            | {
                __typename?: 'ModuleRules';
                rules?:
                  | {
                      __typename?: 'ModuleRulesMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
                extensions?:
                  | {
                      __typename?: 'ModuleExtensionsMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
          categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
        }
      | null
      | undefined;
    moduleAttachments: Array<{
      __typename?: 'ModuleAttachments';
      id: number;
      attachment: {
        __typename?: 'Module';
        rulesJson?: any | null | undefined;
        id: number;
        bundleUrl?: string | null | undefined;
        hasPegs: boolean;
        isExtension: boolean;
        isMat: boolean;
        isSubmodule: boolean;
        isEdge: boolean;
        partNumber: string;
        thumbnailUrl?: string | null | undefined;
        description?: string | null | undefined;
        rules?:
          | {
              __typename?: 'ModuleRules';
              rules?:
                | { __typename?: 'ModuleRulesMetadata'; options?: Array<string | null | undefined> | null | undefined }
                | null
                | undefined;
              extensions?:
                | {
                    __typename?: 'ModuleExtensionsMetadata';
                    options?: Array<string | null | undefined> | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined;
        categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
      };
    }>;
    owner?:
      | {
          __typename?: 'Module';
          id: number;
          partNumber: string;
          description?: string | null | undefined;
          thumbnailUrl?: string | null | undefined;
        }
      | null
      | undefined;
    rules?:
      | {
          __typename?: 'ModuleRules';
          rules?:
            | { __typename?: 'ModuleRulesMetadata'; options?: Array<string | null | undefined> | null | undefined }
            | null
            | undefined;
          extensions?:
            | { __typename?: 'ModuleExtensionsMetadata'; options?: Array<string | null | undefined> | null | undefined }
            | null
            | undefined;
        }
      | null
      | undefined;
    categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
  }>;
};

export type ModuleRulesQueryVariables = Exact<{
  partNumber: Scalars['String'];
}>;

export type ModuleRulesQuery = {
  __typename?: 'Query';
  module?: { __typename?: 'Module'; id: number; rulesJson?: any | null | undefined; isMat: boolean } | null | undefined;
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
        slug: string;
        title: string;
        gable: number;
        calculatedWidth?: number | null | undefined;
        hasPegs: boolean;
        cartAmount: number;
        type: { __typename?: 'Type'; id: number; slug: string };
        finish: { __typename?: 'Finish'; id: number; slug: string };
        slideDepth: { __typename?: 'SlideDepth'; id: number; depth: number };
        modules: Array<{
          __typename?: 'Module';
          id: number;
          bundleUrl?: string | null | undefined;
          hasPegs: boolean;
          isExtension: boolean;
          isMat: boolean;
          isSubmodule: boolean;
          isEdge: boolean;
          partNumber: string;
          thumbnailUrl?: string | null | undefined;
          description?: string | null | undefined;
          defaultLeftExtension?:
            | {
                __typename?: 'Module';
                rulesJson?: any | null | undefined;
                id: number;
                bundleUrl?: string | null | undefined;
                hasPegs: boolean;
                isExtension: boolean;
                isMat: boolean;
                isSubmodule: boolean;
                isEdge: boolean;
                partNumber: string;
                thumbnailUrl?: string | null | undefined;
                description?: string | null | undefined;
                rules?:
                  | {
                      __typename?: 'ModuleRules';
                      rules?:
                        | {
                            __typename?: 'ModuleRulesMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                      extensions?:
                        | {
                            __typename?: 'ModuleExtensionsMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                    }
                  | null
                  | undefined;
                categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
              }
            | null
            | undefined;
          defaultRightExtension?:
            | {
                __typename?: 'Module';
                rulesJson?: any | null | undefined;
                id: number;
                bundleUrl?: string | null | undefined;
                hasPegs: boolean;
                isExtension: boolean;
                isMat: boolean;
                isSubmodule: boolean;
                isEdge: boolean;
                partNumber: string;
                thumbnailUrl?: string | null | undefined;
                description?: string | null | undefined;
                rules?:
                  | {
                      __typename?: 'ModuleRules';
                      rules?:
                        | {
                            __typename?: 'ModuleRulesMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                      extensions?:
                        | {
                            __typename?: 'ModuleExtensionsMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                    }
                  | null
                  | undefined;
                categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
              }
            | null
            | undefined;
          attachmentToAppend?:
            | {
                __typename?: 'Module';
                rulesJson?: any | null | undefined;
                id: number;
                bundleUrl?: string | null | undefined;
                hasPegs: boolean;
                isExtension: boolean;
                isMat: boolean;
                isSubmodule: boolean;
                isEdge: boolean;
                partNumber: string;
                thumbnailUrl?: string | null | undefined;
                description?: string | null | undefined;
                rules?:
                  | {
                      __typename?: 'ModuleRules';
                      rules?:
                        | {
                            __typename?: 'ModuleRulesMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                      extensions?:
                        | {
                            __typename?: 'ModuleExtensionsMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                    }
                  | null
                  | undefined;
                categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
              }
            | null
            | undefined;
          moduleAttachments: Array<{
            __typename?: 'ModuleAttachments';
            id: number;
            attachment: {
              __typename?: 'Module';
              rulesJson?: any | null | undefined;
              id: number;
              bundleUrl?: string | null | undefined;
              hasPegs: boolean;
              isExtension: boolean;
              isMat: boolean;
              isSubmodule: boolean;
              isEdge: boolean;
              partNumber: string;
              thumbnailUrl?: string | null | undefined;
              description?: string | null | undefined;
              rules?:
                | {
                    __typename?: 'ModuleRules';
                    rules?:
                      | {
                          __typename?: 'ModuleRulesMetadata';
                          options?: Array<string | null | undefined> | null | undefined;
                        }
                      | null
                      | undefined;
                    extensions?:
                      | {
                          __typename?: 'ModuleExtensionsMetadata';
                          options?: Array<string | null | undefined> | null | undefined;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined;
              categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
            };
          }>;
          owner?:
            | {
                __typename?: 'Module';
                id: number;
                partNumber: string;
                description?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
              }
            | null
            | undefined;
          rules?:
            | {
                __typename?: 'ModuleRules';
                rules?:
                  | {
                      __typename?: 'ModuleRulesMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
                extensions?:
                  | {
                      __typename?: 'ModuleExtensionsMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
          categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
        }>;
        projectModules: Array<{
          __typename?: 'ProjectModule';
          id: number;
          nanoId: string;
          posX: number;
          posY: number;
          posZ: number;
          rotY: number;
          parentId?: number | null | undefined;
          parentNanoId?: string | null | undefined;
          children: Array<{
            __typename?: 'ProjectModule';
            id: number;
            nanoId: string;
            posX: number;
            posY: number;
            posZ: number;
            rotY: number;
            parentId?: number | null | undefined;
            parentNanoId?: string | null | undefined;
            module: {
              __typename?: 'Module';
              rulesJson?: any | null | undefined;
              id: number;
              bundleUrl?: string | null | undefined;
              hasPegs: boolean;
              isExtension: boolean;
              isMat: boolean;
              isSubmodule: boolean;
              isEdge: boolean;
              partNumber: string;
              thumbnailUrl?: string | null | undefined;
              description?: string | null | undefined;
              defaultLeftExtension?:
                | {
                    __typename?: 'Module';
                    rulesJson?: any | null | undefined;
                    id: number;
                    bundleUrl?: string | null | undefined;
                    hasPegs: boolean;
                    isExtension: boolean;
                    isMat: boolean;
                    isSubmodule: boolean;
                    isEdge: boolean;
                    partNumber: string;
                    thumbnailUrl?: string | null | undefined;
                    description?: string | null | undefined;
                    rules?:
                      | {
                          __typename?: 'ModuleRules';
                          rules?:
                            | {
                                __typename?: 'ModuleRulesMetadata';
                                options?: Array<string | null | undefined> | null | undefined;
                              }
                            | null
                            | undefined;
                          extensions?:
                            | {
                                __typename?: 'ModuleExtensionsMetadata';
                                options?: Array<string | null | undefined> | null | undefined;
                              }
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                    categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
                  }
                | null
                | undefined;
              defaultRightExtension?:
                | {
                    __typename?: 'Module';
                    rulesJson?: any | null | undefined;
                    id: number;
                    bundleUrl?: string | null | undefined;
                    hasPegs: boolean;
                    isExtension: boolean;
                    isMat: boolean;
                    isSubmodule: boolean;
                    isEdge: boolean;
                    partNumber: string;
                    thumbnailUrl?: string | null | undefined;
                    description?: string | null | undefined;
                    rules?:
                      | {
                          __typename?: 'ModuleRules';
                          rules?:
                            | {
                                __typename?: 'ModuleRulesMetadata';
                                options?: Array<string | null | undefined> | null | undefined;
                              }
                            | null
                            | undefined;
                          extensions?:
                            | {
                                __typename?: 'ModuleExtensionsMetadata';
                                options?: Array<string | null | undefined> | null | undefined;
                              }
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                    categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
                  }
                | null
                | undefined;
              attachmentToAppend?:
                | {
                    __typename?: 'Module';
                    rulesJson?: any | null | undefined;
                    id: number;
                    bundleUrl?: string | null | undefined;
                    hasPegs: boolean;
                    isExtension: boolean;
                    isMat: boolean;
                    isSubmodule: boolean;
                    isEdge: boolean;
                    partNumber: string;
                    thumbnailUrl?: string | null | undefined;
                    description?: string | null | undefined;
                    rules?:
                      | {
                          __typename?: 'ModuleRules';
                          rules?:
                            | {
                                __typename?: 'ModuleRulesMetadata';
                                options?: Array<string | null | undefined> | null | undefined;
                              }
                            | null
                            | undefined;
                          extensions?:
                            | {
                                __typename?: 'ModuleExtensionsMetadata';
                                options?: Array<string | null | undefined> | null | undefined;
                              }
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                    categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
                  }
                | null
                | undefined;
              moduleAttachments: Array<{
                __typename?: 'ModuleAttachments';
                id: number;
                attachment: {
                  __typename?: 'Module';
                  rulesJson?: any | null | undefined;
                  id: number;
                  bundleUrl?: string | null | undefined;
                  hasPegs: boolean;
                  isExtension: boolean;
                  isMat: boolean;
                  isSubmodule: boolean;
                  isEdge: boolean;
                  partNumber: string;
                  thumbnailUrl?: string | null | undefined;
                  description?: string | null | undefined;
                  rules?:
                    | {
                        __typename?: 'ModuleRules';
                        rules?:
                          | {
                              __typename?: 'ModuleRulesMetadata';
                              options?: Array<string | null | undefined> | null | undefined;
                            }
                          | null
                          | undefined;
                        extensions?:
                          | {
                              __typename?: 'ModuleExtensionsMetadata';
                              options?: Array<string | null | undefined> | null | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                  categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
                };
              }>;
              owner?:
                | {
                    __typename?: 'Module';
                    id: number;
                    partNumber: string;
                    description?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                  }
                | null
                | undefined;
              rules?:
                | {
                    __typename?: 'ModuleRules';
                    rules?:
                      | {
                          __typename?: 'ModuleRulesMetadata';
                          options?: Array<string | null | undefined> | null | undefined;
                        }
                      | null
                      | undefined;
                    extensions?:
                      | {
                          __typename?: 'ModuleExtensionsMetadata';
                          options?: Array<string | null | undefined> | null | undefined;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined;
              categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
            };
          }>;
          module: {
            __typename?: 'Module';
            rulesJson?: any | null | undefined;
            id: number;
            bundleUrl?: string | null | undefined;
            hasPegs: boolean;
            isExtension: boolean;
            isMat: boolean;
            isSubmodule: boolean;
            isEdge: boolean;
            partNumber: string;
            thumbnailUrl?: string | null | undefined;
            description?: string | null | undefined;
            defaultLeftExtension?:
              | {
                  __typename?: 'Module';
                  rulesJson?: any | null | undefined;
                  id: number;
                  bundleUrl?: string | null | undefined;
                  hasPegs: boolean;
                  isExtension: boolean;
                  isMat: boolean;
                  isSubmodule: boolean;
                  isEdge: boolean;
                  partNumber: string;
                  thumbnailUrl?: string | null | undefined;
                  description?: string | null | undefined;
                  rules?:
                    | {
                        __typename?: 'ModuleRules';
                        rules?:
                          | {
                              __typename?: 'ModuleRulesMetadata';
                              options?: Array<string | null | undefined> | null | undefined;
                            }
                          | null
                          | undefined;
                        extensions?:
                          | {
                              __typename?: 'ModuleExtensionsMetadata';
                              options?: Array<string | null | undefined> | null | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                  categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
                }
              | null
              | undefined;
            defaultRightExtension?:
              | {
                  __typename?: 'Module';
                  rulesJson?: any | null | undefined;
                  id: number;
                  bundleUrl?: string | null | undefined;
                  hasPegs: boolean;
                  isExtension: boolean;
                  isMat: boolean;
                  isSubmodule: boolean;
                  isEdge: boolean;
                  partNumber: string;
                  thumbnailUrl?: string | null | undefined;
                  description?: string | null | undefined;
                  rules?:
                    | {
                        __typename?: 'ModuleRules';
                        rules?:
                          | {
                              __typename?: 'ModuleRulesMetadata';
                              options?: Array<string | null | undefined> | null | undefined;
                            }
                          | null
                          | undefined;
                        extensions?:
                          | {
                              __typename?: 'ModuleExtensionsMetadata';
                              options?: Array<string | null | undefined> | null | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                  categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
                }
              | null
              | undefined;
            attachmentToAppend?:
              | {
                  __typename?: 'Module';
                  rulesJson?: any | null | undefined;
                  id: number;
                  bundleUrl?: string | null | undefined;
                  hasPegs: boolean;
                  isExtension: boolean;
                  isMat: boolean;
                  isSubmodule: boolean;
                  isEdge: boolean;
                  partNumber: string;
                  thumbnailUrl?: string | null | undefined;
                  description?: string | null | undefined;
                  rules?:
                    | {
                        __typename?: 'ModuleRules';
                        rules?:
                          | {
                              __typename?: 'ModuleRulesMetadata';
                              options?: Array<string | null | undefined> | null | undefined;
                            }
                          | null
                          | undefined;
                        extensions?:
                          | {
                              __typename?: 'ModuleExtensionsMetadata';
                              options?: Array<string | null | undefined> | null | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                  categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
                }
              | null
              | undefined;
            moduleAttachments: Array<{
              __typename?: 'ModuleAttachments';
              id: number;
              attachment: {
                __typename?: 'Module';
                rulesJson?: any | null | undefined;
                id: number;
                bundleUrl?: string | null | undefined;
                hasPegs: boolean;
                isExtension: boolean;
                isMat: boolean;
                isSubmodule: boolean;
                isEdge: boolean;
                partNumber: string;
                thumbnailUrl?: string | null | undefined;
                description?: string | null | undefined;
                rules?:
                  | {
                      __typename?: 'ModuleRules';
                      rules?:
                        | {
                            __typename?: 'ModuleRulesMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                      extensions?:
                        | {
                            __typename?: 'ModuleExtensionsMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                    }
                  | null
                  | undefined;
                categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
              };
            }>;
            owner?:
              | {
                  __typename?: 'Module';
                  id: number;
                  partNumber: string;
                  description?: string | null | undefined;
                  thumbnailUrl?: string | null | undefined;
                }
              | null
              | undefined;
            rules?:
              | {
                  __typename?: 'ModuleRules';
                  rules?:
                    | {
                        __typename?: 'ModuleRulesMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                  extensions?:
                    | {
                        __typename?: 'ModuleExtensionsMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
            categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
          };
        }>;
      }
    | null
    | undefined;
};

export type GetProjectModuleQueryVariables = Exact<{
  nanoIds: Array<Scalars['String']> | Scalars['String'];
}>;

export type GetProjectModuleQuery = {
  __typename?: 'Query';
  projectModules: Array<{
    __typename?: 'ProjectModule';
    id: number;
    nanoId: string;
    posX: number;
    posY: number;
    posZ: number;
    rotY: number;
    parentId?: number | null | undefined;
    parentNanoId?: string | null | undefined;
    module: {
      __typename?: 'Module';
      rulesJson?: any | null | undefined;
      id: number;
      bundleUrl?: string | null | undefined;
      hasPegs: boolean;
      isExtension: boolean;
      isMat: boolean;
      isSubmodule: boolean;
      isEdge: boolean;
      partNumber: string;
      thumbnailUrl?: string | null | undefined;
      description?: string | null | undefined;
      defaultLeftExtension?:
        | {
            __typename?: 'Module';
            rulesJson?: any | null | undefined;
            id: number;
            bundleUrl?: string | null | undefined;
            hasPegs: boolean;
            isExtension: boolean;
            isMat: boolean;
            isSubmodule: boolean;
            isEdge: boolean;
            partNumber: string;
            thumbnailUrl?: string | null | undefined;
            description?: string | null | undefined;
            rules?:
              | {
                  __typename?: 'ModuleRules';
                  rules?:
                    | {
                        __typename?: 'ModuleRulesMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                  extensions?:
                    | {
                        __typename?: 'ModuleExtensionsMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
            categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
          }
        | null
        | undefined;
      defaultRightExtension?:
        | {
            __typename?: 'Module';
            rulesJson?: any | null | undefined;
            id: number;
            bundleUrl?: string | null | undefined;
            hasPegs: boolean;
            isExtension: boolean;
            isMat: boolean;
            isSubmodule: boolean;
            isEdge: boolean;
            partNumber: string;
            thumbnailUrl?: string | null | undefined;
            description?: string | null | undefined;
            rules?:
              | {
                  __typename?: 'ModuleRules';
                  rules?:
                    | {
                        __typename?: 'ModuleRulesMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                  extensions?:
                    | {
                        __typename?: 'ModuleExtensionsMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
            categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
          }
        | null
        | undefined;
      attachmentToAppend?:
        | {
            __typename?: 'Module';
            rulesJson?: any | null | undefined;
            id: number;
            bundleUrl?: string | null | undefined;
            hasPegs: boolean;
            isExtension: boolean;
            isMat: boolean;
            isSubmodule: boolean;
            isEdge: boolean;
            partNumber: string;
            thumbnailUrl?: string | null | undefined;
            description?: string | null | undefined;
            rules?:
              | {
                  __typename?: 'ModuleRules';
                  rules?:
                    | {
                        __typename?: 'ModuleRulesMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                  extensions?:
                    | {
                        __typename?: 'ModuleExtensionsMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
            categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
          }
        | null
        | undefined;
      moduleAttachments: Array<{
        __typename?: 'ModuleAttachments';
        id: number;
        attachment: {
          __typename?: 'Module';
          rulesJson?: any | null | undefined;
          id: number;
          bundleUrl?: string | null | undefined;
          hasPegs: boolean;
          isExtension: boolean;
          isMat: boolean;
          isSubmodule: boolean;
          isEdge: boolean;
          partNumber: string;
          thumbnailUrl?: string | null | undefined;
          description?: string | null | undefined;
          rules?:
            | {
                __typename?: 'ModuleRules';
                rules?:
                  | {
                      __typename?: 'ModuleRulesMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
                extensions?:
                  | {
                      __typename?: 'ModuleExtensionsMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
          categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
        };
      }>;
      owner?:
        | {
            __typename?: 'Module';
            id: number;
            partNumber: string;
            description?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
          }
        | null
        | undefined;
      rules?:
        | {
            __typename?: 'ModuleRules';
            rules?:
              | { __typename?: 'ModuleRulesMetadata'; options?: Array<string | null | undefined> | null | undefined }
              | null
              | undefined;
            extensions?:
              | {
                  __typename?: 'ModuleExtensionsMetadata';
                  options?: Array<string | null | undefined> | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
    };
  }>;
};

export type CreateProjectModuleMutationVariables = Exact<{
  data: ProjectModuleCreateInput;
}>;

export type CreateProjectModuleMutation = {
  __typename?: 'Mutation';
  createOneProjectModule: {
    __typename?: 'ProjectModule';
    id: number;
    nanoId: string;
    posX: number;
    posY: number;
    posZ: number;
    rotY: number;
    parentId?: number | null | undefined;
    parentNanoId?: string | null | undefined;
    module: {
      __typename?: 'Module';
      rulesJson?: any | null | undefined;
      id: number;
      bundleUrl?: string | null | undefined;
      hasPegs: boolean;
      isExtension: boolean;
      isMat: boolean;
      isSubmodule: boolean;
      isEdge: boolean;
      partNumber: string;
      thumbnailUrl?: string | null | undefined;
      description?: string | null | undefined;
      defaultLeftExtension?:
        | {
            __typename?: 'Module';
            rulesJson?: any | null | undefined;
            id: number;
            bundleUrl?: string | null | undefined;
            hasPegs: boolean;
            isExtension: boolean;
            isMat: boolean;
            isSubmodule: boolean;
            isEdge: boolean;
            partNumber: string;
            thumbnailUrl?: string | null | undefined;
            description?: string | null | undefined;
            rules?:
              | {
                  __typename?: 'ModuleRules';
                  rules?:
                    | {
                        __typename?: 'ModuleRulesMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                  extensions?:
                    | {
                        __typename?: 'ModuleExtensionsMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
            categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
          }
        | null
        | undefined;
      defaultRightExtension?:
        | {
            __typename?: 'Module';
            rulesJson?: any | null | undefined;
            id: number;
            bundleUrl?: string | null | undefined;
            hasPegs: boolean;
            isExtension: boolean;
            isMat: boolean;
            isSubmodule: boolean;
            isEdge: boolean;
            partNumber: string;
            thumbnailUrl?: string | null | undefined;
            description?: string | null | undefined;
            rules?:
              | {
                  __typename?: 'ModuleRules';
                  rules?:
                    | {
                        __typename?: 'ModuleRulesMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                  extensions?:
                    | {
                        __typename?: 'ModuleExtensionsMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
            categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
          }
        | null
        | undefined;
      attachmentToAppend?:
        | {
            __typename?: 'Module';
            rulesJson?: any | null | undefined;
            id: number;
            bundleUrl?: string | null | undefined;
            hasPegs: boolean;
            isExtension: boolean;
            isMat: boolean;
            isSubmodule: boolean;
            isEdge: boolean;
            partNumber: string;
            thumbnailUrl?: string | null | undefined;
            description?: string | null | undefined;
            rules?:
              | {
                  __typename?: 'ModuleRules';
                  rules?:
                    | {
                        __typename?: 'ModuleRulesMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                  extensions?:
                    | {
                        __typename?: 'ModuleExtensionsMetadata';
                        options?: Array<string | null | undefined> | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
            categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
          }
        | null
        | undefined;
      moduleAttachments: Array<{
        __typename?: 'ModuleAttachments';
        id: number;
        attachment: {
          __typename?: 'Module';
          rulesJson?: any | null | undefined;
          id: number;
          bundleUrl?: string | null | undefined;
          hasPegs: boolean;
          isExtension: boolean;
          isMat: boolean;
          isSubmodule: boolean;
          isEdge: boolean;
          partNumber: string;
          thumbnailUrl?: string | null | undefined;
          description?: string | null | undefined;
          rules?:
            | {
                __typename?: 'ModuleRules';
                rules?:
                  | {
                      __typename?: 'ModuleRulesMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
                extensions?:
                  | {
                      __typename?: 'ModuleExtensionsMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
          categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
        };
      }>;
      owner?:
        | {
            __typename?: 'Module';
            id: number;
            partNumber: string;
            description?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
          }
        | null
        | undefined;
      rules?:
        | {
            __typename?: 'ModuleRules';
            rules?:
              | { __typename?: 'ModuleRulesMetadata'; options?: Array<string | null | undefined> | null | undefined }
              | null
              | undefined;
            extensions?:
              | {
                  __typename?: 'ModuleExtensionsMetadata';
                  options?: Array<string | null | undefined> | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
    };
  };
};

export type UpdateProjectModuleMutationVariables = Exact<{
  data: ProjectModuleUpdateInput;
  id: Scalars['Int'];
}>;

export type UpdateProjectModuleMutation = {
  __typename?: 'Mutation';
  updateOneProjectModule?:
    | {
        __typename?: 'ProjectModule';
        id: number;
        nanoId: string;
        posX: number;
        posY: number;
        posZ: number;
        rotY: number;
        parentId?: number | null | undefined;
        parentNanoId?: string | null | undefined;
        module: {
          __typename?: 'Module';
          rulesJson?: any | null | undefined;
          id: number;
          bundleUrl?: string | null | undefined;
          hasPegs: boolean;
          isExtension: boolean;
          isMat: boolean;
          isSubmodule: boolean;
          isEdge: boolean;
          partNumber: string;
          thumbnailUrl?: string | null | undefined;
          description?: string | null | undefined;
          defaultLeftExtension?:
            | {
                __typename?: 'Module';
                rulesJson?: any | null | undefined;
                id: number;
                bundleUrl?: string | null | undefined;
                hasPegs: boolean;
                isExtension: boolean;
                isMat: boolean;
                isSubmodule: boolean;
                isEdge: boolean;
                partNumber: string;
                thumbnailUrl?: string | null | undefined;
                description?: string | null | undefined;
                rules?:
                  | {
                      __typename?: 'ModuleRules';
                      rules?:
                        | {
                            __typename?: 'ModuleRulesMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                      extensions?:
                        | {
                            __typename?: 'ModuleExtensionsMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                    }
                  | null
                  | undefined;
                categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
              }
            | null
            | undefined;
          defaultRightExtension?:
            | {
                __typename?: 'Module';
                rulesJson?: any | null | undefined;
                id: number;
                bundleUrl?: string | null | undefined;
                hasPegs: boolean;
                isExtension: boolean;
                isMat: boolean;
                isSubmodule: boolean;
                isEdge: boolean;
                partNumber: string;
                thumbnailUrl?: string | null | undefined;
                description?: string | null | undefined;
                rules?:
                  | {
                      __typename?: 'ModuleRules';
                      rules?:
                        | {
                            __typename?: 'ModuleRulesMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                      extensions?:
                        | {
                            __typename?: 'ModuleExtensionsMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                    }
                  | null
                  | undefined;
                categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
              }
            | null
            | undefined;
          attachmentToAppend?:
            | {
                __typename?: 'Module';
                rulesJson?: any | null | undefined;
                id: number;
                bundleUrl?: string | null | undefined;
                hasPegs: boolean;
                isExtension: boolean;
                isMat: boolean;
                isSubmodule: boolean;
                isEdge: boolean;
                partNumber: string;
                thumbnailUrl?: string | null | undefined;
                description?: string | null | undefined;
                rules?:
                  | {
                      __typename?: 'ModuleRules';
                      rules?:
                        | {
                            __typename?: 'ModuleRulesMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                      extensions?:
                        | {
                            __typename?: 'ModuleExtensionsMetadata';
                            options?: Array<string | null | undefined> | null | undefined;
                          }
                        | null
                        | undefined;
                    }
                  | null
                  | undefined;
                categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
              }
            | null
            | undefined;
          moduleAttachments: Array<{
            __typename?: 'ModuleAttachments';
            id: number;
            attachment: {
              __typename?: 'Module';
              rulesJson?: any | null | undefined;
              id: number;
              bundleUrl?: string | null | undefined;
              hasPegs: boolean;
              isExtension: boolean;
              isMat: boolean;
              isSubmodule: boolean;
              isEdge: boolean;
              partNumber: string;
              thumbnailUrl?: string | null | undefined;
              description?: string | null | undefined;
              rules?:
                | {
                    __typename?: 'ModuleRules';
                    rules?:
                      | {
                          __typename?: 'ModuleRulesMetadata';
                          options?: Array<string | null | undefined> | null | undefined;
                        }
                      | null
                      | undefined;
                    extensions?:
                      | {
                          __typename?: 'ModuleExtensionsMetadata';
                          options?: Array<string | null | undefined> | null | undefined;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined;
              categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
            };
          }>;
          owner?:
            | {
                __typename?: 'Module';
                id: number;
                partNumber: string;
                description?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
              }
            | null
            | undefined;
          rules?:
            | {
                __typename?: 'ModuleRules';
                rules?:
                  | {
                      __typename?: 'ModuleRulesMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
                extensions?:
                  | {
                      __typename?: 'ModuleExtensionsMetadata';
                      options?: Array<string | null | undefined> | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
          categories: Array<{ __typename?: 'Category'; id: number; slug: string; name: string }>;
        };
      }
    | null
    | undefined;
};

export type DeleteProjectModuleMutationVariables = Exact<{
  nanoIds: Array<Scalars['String']> | Scalars['String'];
}>;

export type DeleteProjectModuleMutation = {
  __typename?: 'Mutation';
  deleteManyProjectModule: { __typename?: 'AffectedRowsOutput'; count: number };
};

export type ProjectDataFragment = {
  __typename?: 'Project';
  id: number;
  title: string;
  slug: string;
  cabinetWidth?: number | null | undefined;
  gable: number;
  type: { __typename?: 'Type'; id: number; slug: string };
  collection: { __typename?: 'Collection'; id: number; slug: string };
};

export type ProjectCartQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type ProjectCartQuery = {
  __typename?: 'Query';
  project?: { __typename?: 'Project'; id: number; slug: string; cartAmount: number } | null | undefined;
};

export type ProjectsQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;

export type ProjectsQuery = {
  __typename?: 'Query';
  projects: Array<{
    __typename?: 'Project';
    id: number;
    title: string;
    slug: string;
    cabinetWidth?: number | null | undefined;
    gable: number;
    type: { __typename?: 'Type'; id: number; slug: string };
    collection: { __typename?: 'Collection'; id: number; slug: string };
  }>;
  portfolio: Array<{
    __typename?: 'Project';
    id: number;
    title: string;
    slug: string;
    cabinetWidth?: number | null | undefined;
    gable: number;
    type: { __typename?: 'Type'; id: number; slug: string };
    collection: { __typename?: 'Collection'; id: number; slug: string };
  }>;
};

export type CreateProjectMutationVariables = Exact<{
  data: ProjectCreateInput;
}>;

export type CreateProjectMutation = {
  __typename?: 'Mutation';
  createOneProject: {
    __typename?: 'Project';
    id: number;
    title: string;
    slug: string;
    cabinetWidth?: number | null | undefined;
    gable: number;
    type: { __typename?: 'Type'; id: number; slug: string };
    collection: { __typename?: 'Collection'; id: number; slug: string };
  };
};

export type UpdateProjectMutationVariables = Exact<{
  projectId: Scalars['Int'];
  data: ProjectUpdateInput;
}>;

export type UpdateProjectMutation = {
  __typename?: 'Mutation';
  updateOneProject?:
    | {
        __typename?: 'Project';
        id: number;
        title: string;
        slug: string;
        cabinetWidth?: number | null | undefined;
        gable: number;
        type: { __typename?: 'Type'; id: number; slug: string };
        collection: { __typename?: 'Collection'; id: number; slug: string };
      }
    | null
    | undefined;
};

export type DeleteProjectMutationVariables = Exact<{
  projectId: Scalars['Int'];
}>;

export type DeleteProjectMutation = {
  __typename?: 'Mutation';
  deleteOneProject?: { __typename?: 'Project'; id: number } | null | undefined;
};

export type CloneProjectMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type CloneProjectMutation = {
  __typename?: 'Mutation';
  cloneOneProject: {
    __typename?: 'Project';
    id: number;
    title: string;
    slug: string;
    cabinetWidth?: number | null | undefined;
    gable: number;
    type: { __typename?: 'Type'; id: number; slug: string };
    collection: { __typename?: 'Collection'; id: number; slug: string };
  };
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

export const CartDataFragmentDoc = gql`
  fragment CartData on ProjectCart {
    id
    quantity
    projectModule {
      id
      moduleId
      module {
        id
        partNumber
        description
        thumbnailUrl
        isVirtualProduct
        owner {
          id
          partNumber
          description
          thumbnailUrl
        }
      }
    }
  }
`;
export const ModuleDataWithoutExtensionsFragmentDoc = gql`
  fragment ModuleDataWithoutExtensions on Module {
    id
    bundleUrl
    hasPegs
    isExtension
    isMat
    isSubmodule
    isEdge
    partNumber
    rules {
      rules {
        options
      }
      extensions {
        options
      }
    }
    thumbnailUrl
    description
    categories {
      id
      slug
      name
    }
  }
`;
export const ModuleDataFragmentDoc = gql`
  fragment ModuleData on Module {
    ...ModuleDataWithoutExtensions
    defaultLeftExtension {
      ...ModuleDataWithoutExtensions
      rulesJson
    }
    defaultRightExtension {
      ...ModuleDataWithoutExtensions
      rulesJson
    }
    attachmentToAppend {
      ...ModuleDataWithoutExtensions
      rulesJson
    }
    moduleAttachments {
      id
      attachment {
        ...ModuleDataWithoutExtensions
        rulesJson
      }
    }
    owner {
      id
      partNumber
      description
      thumbnailUrl
    }
  }
  ${ModuleDataWithoutExtensionsFragmentDoc}
`;
export const ProjectModuleDataFragmentDoc = gql`
  fragment ProjectModuleData on ProjectModule {
    id
    nanoId
    posX
    posY
    posZ
    rotY
    parentId
    parentNanoId
    module {
      ...ModuleData
      rulesJson
    }
  }
  ${ModuleDataFragmentDoc}
`;
export const ProjectDataFragmentDoc = gql`
  fragment ProjectData on Project {
    id
    title
    slug
    cabinetWidth
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
export const CartDocument = gql`
  query Cart($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      cartAmount
      cart {
        ...CartData
        children {
          ...CartData
        }
      }
    }
  }
  ${CartDataFragmentDoc}
`;

/**
 * __useCartQuery__
 *
 * To run a query within a React component, call `useCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCartQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCartQuery(baseOptions: Apollo.QueryHookOptions<CartQuery, CartQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CartQuery, CartQueryVariables>(CartDocument, options);
}
export function useCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CartQuery, CartQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CartQuery, CartQueryVariables>(CartDocument, options);
}
export type CartQueryHookResult = ReturnType<typeof useCartQuery>;
export type CartLazyQueryHookResult = ReturnType<typeof useCartLazyQuery>;
export type CartQueryResult = Apollo.QueryResult<CartQuery, CartQueryVariables>;
export const CreateListDocument = gql`
  mutation CreateList($projectId: Int!) {
    createList(id: $projectId) {
      id
      externalId
      name
      project {
        id
      }
    }
  }
`;
export type CreateListMutationFn = Apollo.MutationFunction<CreateListMutation, CreateListMutationVariables>;

/**
 * __useCreateListMutation__
 *
 * To run a mutation, you first call `useCreateListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListMutation, { data, loading, error }] = useCreateListMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useCreateListMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateListMutation, CreateListMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateListMutation, CreateListMutationVariables>(CreateListDocument, options);
}
export type CreateListMutationHookResult = ReturnType<typeof useCreateListMutation>;
export type CreateListMutationResult = Apollo.MutationResult<CreateListMutation>;
export type CreateListMutationOptions = Apollo.BaseMutationOptions<CreateListMutation, CreateListMutationVariables>;
export const GetCollectionsDocument = gql`
  query GetCollections($typeId: Int!) {
    type(where: { id: $typeId }) {
      id
      hasPegs
    }
    collections {
      id
      name
      slug
      hasPegs
      isComingSoon
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
 *      typeId: // value for 'typeId'
 *   },
 * });
 */
export function useGetCollectionsQuery(
  baseOptions: Apollo.QueryHookOptions<GetCollectionsQuery, GetCollectionsQueryVariables>
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
export const GetFinishByCollectionDocument = gql`
  query GetFinishByCollection($collectionId: Int!) {
    finishes(where: { collectionFinishes: { some: { collectionId: { equals: $collectionId } } } }) {
      id
      description
      name
      slug
      thumbnailUrl
    }
  }
`;

/**
 * __useGetFinishByCollectionQuery__
 *
 * To run a query within a React component, call `useGetFinishByCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFinishByCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFinishByCollectionQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useGetFinishByCollectionQuery(
  baseOptions: Apollo.QueryHookOptions<GetFinishByCollectionQuery, GetFinishByCollectionQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFinishByCollectionQuery, GetFinishByCollectionQueryVariables>(
    GetFinishByCollectionDocument,
    options
  );
}
export function useGetFinishByCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetFinishByCollectionQuery, GetFinishByCollectionQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFinishByCollectionQuery, GetFinishByCollectionQueryVariables>(
    GetFinishByCollectionDocument,
    options
  );
}
export type GetFinishByCollectionQueryHookResult = ReturnType<typeof useGetFinishByCollectionQuery>;
export type GetFinishByCollectionLazyQueryHookResult = ReturnType<typeof useGetFinishByCollectionLazyQuery>;
export type GetFinishByCollectionQueryResult = Apollo.QueryResult<
  GetFinishByCollectionQuery,
  GetFinishByCollectionQueryVariables
>;
export const LoginDocument = gql`
  mutation Login($user: UserSingIn!) {
    login(user: $user) {
      id
      userId
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ModuleOptionsDocument = gql`
  query ModuleOptions($options: [String!]) {
    modules(where: { partNumber: { in: $options } }) {
      ...ModuleData
    }
  }
  ${ModuleDataFragmentDoc}
`;

/**
 * __useModuleOptionsQuery__
 *
 * To run a query within a React component, call `useModuleOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useModuleOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModuleOptionsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useModuleOptionsQuery(
  baseOptions?: Apollo.QueryHookOptions<ModuleOptionsQuery, ModuleOptionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ModuleOptionsQuery, ModuleOptionsQueryVariables>(ModuleOptionsDocument, options);
}
export function useModuleOptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ModuleOptionsQuery, ModuleOptionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ModuleOptionsQuery, ModuleOptionsQueryVariables>(ModuleOptionsDocument, options);
}
export type ModuleOptionsQueryHookResult = ReturnType<typeof useModuleOptionsQuery>;
export type ModuleOptionsLazyQueryHookResult = ReturnType<typeof useModuleOptionsLazyQuery>;
export type ModuleOptionsQueryResult = Apollo.QueryResult<ModuleOptionsQuery, ModuleOptionsQueryVariables>;
export const ModuleRulesDocument = gql`
  query ModuleRules($partNumber: String!) {
    module(where: { partNumber: $partNumber }) {
      id
      rulesJson
      isMat
    }
  }
`;

/**
 * __useModuleRulesQuery__
 *
 * To run a query within a React component, call `useModuleRulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useModuleRulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModuleRulesQuery({
 *   variables: {
 *      partNumber: // value for 'partNumber'
 *   },
 * });
 */
export function useModuleRulesQuery(baseOptions: Apollo.QueryHookOptions<ModuleRulesQuery, ModuleRulesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ModuleRulesQuery, ModuleRulesQueryVariables>(ModuleRulesDocument, options);
}
export function useModuleRulesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ModuleRulesQuery, ModuleRulesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ModuleRulesQuery, ModuleRulesQueryVariables>(ModuleRulesDocument, options);
}
export type ModuleRulesQueryHookResult = ReturnType<typeof useModuleRulesQuery>;
export type ModuleRulesLazyQueryHookResult = ReturnType<typeof useModuleRulesLazyQuery>;
export type ModuleRulesQueryResult = Apollo.QueryResult<ModuleRulesQuery, ModuleRulesQueryVariables>;
export const PlannerDocument = gql`
  query Planner($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      gable
      calculatedWidth
      hasPegs
      cartAmount
      type {
        id
        slug
      }
      finish {
        id
        slug
      }
      slideDepth {
        id
        depth
      }
      modules {
        ...ModuleData
      }
      projectModules(where: { parentId: { equals: null } }) {
        ...ProjectModuleData
        children {
          ...ProjectModuleData
        }
      }
    }
  }
  ${ModuleDataFragmentDoc}
  ${ProjectModuleDataFragmentDoc}
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
export const GetProjectModuleDocument = gql`
  query GetProjectModule($nanoIds: [String!]!) {
    projectModules(where: { nanoId: { in: $nanoIds } }) {
      ...ProjectModuleData
    }
  }
  ${ProjectModuleDataFragmentDoc}
`;

/**
 * __useGetProjectModuleQuery__
 *
 * To run a query within a React component, call `useGetProjectModuleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectModuleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectModuleQuery({
 *   variables: {
 *      nanoIds: // value for 'nanoIds'
 *   },
 * });
 */
export function useGetProjectModuleQuery(
  baseOptions: Apollo.QueryHookOptions<GetProjectModuleQuery, GetProjectModuleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProjectModuleQuery, GetProjectModuleQueryVariables>(GetProjectModuleDocument, options);
}
export function useGetProjectModuleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetProjectModuleQuery, GetProjectModuleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProjectModuleQuery, GetProjectModuleQueryVariables>(GetProjectModuleDocument, options);
}
export type GetProjectModuleQueryHookResult = ReturnType<typeof useGetProjectModuleQuery>;
export type GetProjectModuleLazyQueryHookResult = ReturnType<typeof useGetProjectModuleLazyQuery>;
export type GetProjectModuleQueryResult = Apollo.QueryResult<GetProjectModuleQuery, GetProjectModuleQueryVariables>;
export const CreateProjectModuleDocument = gql`
  mutation CreateProjectModule($data: ProjectModuleCreateInput!) {
    createOneProjectModule(data: $data) {
      ...ProjectModuleData
    }
  }
  ${ProjectModuleDataFragmentDoc}
`;
export type CreateProjectModuleMutationFn = Apollo.MutationFunction<
  CreateProjectModuleMutation,
  CreateProjectModuleMutationVariables
>;

/**
 * __useCreateProjectModuleMutation__
 *
 * To run a mutation, you first call `useCreateProjectModuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectModuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectModuleMutation, { data, loading, error }] = useCreateProjectModuleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProjectModuleMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProjectModuleMutation, CreateProjectModuleMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateProjectModuleMutation, CreateProjectModuleMutationVariables>(
    CreateProjectModuleDocument,
    options
  );
}
export type CreateProjectModuleMutationHookResult = ReturnType<typeof useCreateProjectModuleMutation>;
export type CreateProjectModuleMutationResult = Apollo.MutationResult<CreateProjectModuleMutation>;
export type CreateProjectModuleMutationOptions = Apollo.BaseMutationOptions<
  CreateProjectModuleMutation,
  CreateProjectModuleMutationVariables
>;
export const UpdateProjectModuleDocument = gql`
  mutation UpdateProjectModule($data: ProjectModuleUpdateInput!, $id: Int!) {
    updateOneProjectModule(data: $data, where: { id: $id }) {
      ...ProjectModuleData
    }
  }
  ${ProjectModuleDataFragmentDoc}
`;
export type UpdateProjectModuleMutationFn = Apollo.MutationFunction<
  UpdateProjectModuleMutation,
  UpdateProjectModuleMutationVariables
>;

/**
 * __useUpdateProjectModuleMutation__
 *
 * To run a mutation, you first call `useUpdateProjectModuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectModuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectModuleMutation, { data, loading, error }] = useUpdateProjectModuleMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateProjectModuleMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateProjectModuleMutation, UpdateProjectModuleMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateProjectModuleMutation, UpdateProjectModuleMutationVariables>(
    UpdateProjectModuleDocument,
    options
  );
}
export type UpdateProjectModuleMutationHookResult = ReturnType<typeof useUpdateProjectModuleMutation>;
export type UpdateProjectModuleMutationResult = Apollo.MutationResult<UpdateProjectModuleMutation>;
export type UpdateProjectModuleMutationOptions = Apollo.BaseMutationOptions<
  UpdateProjectModuleMutation,
  UpdateProjectModuleMutationVariables
>;
export const DeleteProjectModuleDocument = gql`
  mutation DeleteProjectModule($nanoIds: [String!]!) {
    deleteManyProjectModule(where: { nanoId: { in: $nanoIds } }) {
      count
    }
  }
`;
export type DeleteProjectModuleMutationFn = Apollo.MutationFunction<
  DeleteProjectModuleMutation,
  DeleteProjectModuleMutationVariables
>;

/**
 * __useDeleteProjectModuleMutation__
 *
 * To run a mutation, you first call `useDeleteProjectModuleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectModuleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectModuleMutation, { data, loading, error }] = useDeleteProjectModuleMutation({
 *   variables: {
 *      nanoIds: // value for 'nanoIds'
 *   },
 * });
 */
export function useDeleteProjectModuleMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteProjectModuleMutation, DeleteProjectModuleMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteProjectModuleMutation, DeleteProjectModuleMutationVariables>(
    DeleteProjectModuleDocument,
    options
  );
}
export type DeleteProjectModuleMutationHookResult = ReturnType<typeof useDeleteProjectModuleMutation>;
export type DeleteProjectModuleMutationResult = Apollo.MutationResult<DeleteProjectModuleMutation>;
export type DeleteProjectModuleMutationOptions = Apollo.BaseMutationOptions<
  DeleteProjectModuleMutation,
  DeleteProjectModuleMutationVariables
>;
export const ProjectCartDocument = gql`
  query ProjectCart($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      cartAmount
    }
  }
`;

/**
 * __useProjectCartQuery__
 *
 * To run a query within a React component, call `useProjectCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectCartQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProjectCartQuery(baseOptions: Apollo.QueryHookOptions<ProjectCartQuery, ProjectCartQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProjectCartQuery, ProjectCartQueryVariables>(ProjectCartDocument, options);
}
export function useProjectCartLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProjectCartQuery, ProjectCartQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProjectCartQuery, ProjectCartQueryVariables>(ProjectCartDocument, options);
}
export type ProjectCartQueryHookResult = ReturnType<typeof useProjectCartQuery>;
export type ProjectCartLazyQueryHookResult = ReturnType<typeof useProjectCartLazyQuery>;
export type ProjectCartQueryResult = Apollo.QueryResult<ProjectCartQuery, ProjectCartQueryVariables>;
export const ProjectsDocument = gql`
  query Projects($userId: Int!) {
    projects(where: { userId: { equals: $userId } }) {
      ...ProjectData
    }
    portfolio: projects(where: { user: { email: { equals: "charlie.ricottone@marathonhardware.com" } } }) {
      ...ProjectData
    }
  }
  ${ProjectDataFragmentDoc}
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
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useProjectsQuery(baseOptions: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables>) {
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
      ...ProjectData
    }
  }
  ${ProjectDataFragmentDoc}
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
export const UpdateProjectDocument = gql`
  mutation UpdateProject($projectId: Int!, $data: ProjectUpdateInput!) {
    updateOneProject(data: $data, where: { id: $projectId }) {
      ...ProjectData
    }
  }
  ${ProjectDataFragmentDoc}
`;
export type UpdateProjectMutationFn = Apollo.MutationFunction<UpdateProjectMutation, UpdateProjectMutationVariables>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateProjectMutation, UpdateProjectMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateProjectMutation, UpdateProjectMutationVariables>(UpdateProjectDocument, options);
}
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationResult = Apollo.MutationResult<UpdateProjectMutation>;
export type UpdateProjectMutationOptions = Apollo.BaseMutationOptions<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>;
export const DeleteProjectDocument = gql`
  mutation DeleteProject($projectId: Int!) {
    deleteOneProject(where: { id: $projectId }) {
      id
    }
  }
`;
export type DeleteProjectMutationFn = Apollo.MutationFunction<DeleteProjectMutation, DeleteProjectMutationVariables>;

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useDeleteProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteProjectMutation, DeleteProjectMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteProjectMutation, DeleteProjectMutationVariables>(DeleteProjectDocument, options);
}
export type DeleteProjectMutationHookResult = ReturnType<typeof useDeleteProjectMutation>;
export type DeleteProjectMutationResult = Apollo.MutationResult<DeleteProjectMutation>;
export type DeleteProjectMutationOptions = Apollo.BaseMutationOptions<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>;
export const CloneProjectDocument = gql`
  mutation CloneProject($id: Int!) {
    cloneOneProject(id: $id) {
      ...ProjectData
    }
  }
  ${ProjectDataFragmentDoc}
`;
export type CloneProjectMutationFn = Apollo.MutationFunction<CloneProjectMutation, CloneProjectMutationVariables>;

/**
 * __useCloneProjectMutation__
 *
 * To run a mutation, you first call `useCloneProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCloneProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cloneProjectMutation, { data, loading, error }] = useCloneProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCloneProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<CloneProjectMutation, CloneProjectMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CloneProjectMutation, CloneProjectMutationVariables>(CloneProjectDocument, options);
}
export type CloneProjectMutationHookResult = ReturnType<typeof useCloneProjectMutation>;
export type CloneProjectMutationResult = Apollo.MutationResult<CloneProjectMutation>;
export type CloneProjectMutationOptions = Apollo.BaseMutationOptions<
  CloneProjectMutation,
  CloneProjectMutationVariables
>;
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
