(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/graphql/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/db/index.js":
/*!*************************!*\
  !*** ./src/db/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  prisma\n} = __webpack_require__(/*! ../generated/prisma-client */ \"./src/generated/prisma-client/index.js\");\n\nmodule.exports = {\n  db: prisma\n};\n\n//# sourceURL=webpack:///./src/db/index.js?");

/***/ }),

/***/ "./src/generated/prisma-client/index.js":
/*!**********************************************!*\
  !*** ./src/generated/prisma-client/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar prisma_lib_1 = __webpack_require__(/*! prisma-client-lib */ \"prisma-client-lib\");\n\nvar typeDefs = __webpack_require__(/*! ./prisma-schema */ \"./src/generated/prisma-client/prisma-schema.js\").typeDefs;\n\nvar models = [{\n  name: \"User\",\n  embedded: false\n}, {\n  name: \"Position\",\n  embedded: false\n}, {\n  name: \"Tag\",\n  embedded: false\n}, {\n  name: \"Project\",\n  embedded: false\n}];\nexports.Prisma = prisma_lib_1.makePrismaClientClass({\n  typeDefs,\n  models,\n  endpoint: `${process.env[\"PRISMA_ENDPOINT\"]}`,\n  secret: `${process.env[\"PRISMA_SECRET\"]}`\n});\nexports.prisma = new exports.Prisma();\n\n//# sourceURL=webpack:///./src/generated/prisma-client/index.js?");

/***/ }),

/***/ "./src/generated/prisma-client/prisma-schema.js":
/*!******************************************************!*\
  !*** ./src/generated/prisma-client/prisma-schema.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.\n  // Please don't change this file manually but run `prisma generate` to update it.\n  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/\n\n  /* GraphQL */\n  `type AggregatePosition {\n  count: Int!\n}\n\ntype AggregateProject {\n  count: Int!\n}\n\ntype AggregateTag {\n  count: Int!\n}\n\ntype AggregateUser {\n  count: Int!\n}\n\ntype BatchPayload {\n  count: Long!\n}\n\nscalar DateTime\n\nscalar Long\n\ntype Mutation {\n  createPosition(data: PositionCreateInput!): Position!\n  updatePosition(data: PositionUpdateInput!, where: PositionWhereUniqueInput!): Position\n  updateManyPositions(data: PositionUpdateManyMutationInput!, where: PositionWhereInput): BatchPayload!\n  upsertPosition(where: PositionWhereUniqueInput!, create: PositionCreateInput!, update: PositionUpdateInput!): Position!\n  deletePosition(where: PositionWhereUniqueInput!): Position\n  deleteManyPositions(where: PositionWhereInput): BatchPayload!\n  createProject(data: ProjectCreateInput!): Project!\n  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project\n  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!\n  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!\n  deleteProject(where: ProjectWhereUniqueInput!): Project\n  deleteManyProjects(where: ProjectWhereInput): BatchPayload!\n  createTag(data: TagCreateInput!): Tag!\n  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag\n  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!\n  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!\n  deleteTag(where: TagWhereUniqueInput!): Tag\n  deleteManyTags(where: TagWhereInput): BatchPayload!\n  createUser(data: UserCreateInput!): User!\n  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User\n  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!\n  deleteUser(where: UserWhereUniqueInput!): User\n  deleteManyUsers(where: UserWhereInput): BatchPayload!\n}\n\nenum MutationType {\n  CREATED\n  UPDATED\n  DELETED\n}\n\ninterface Node {\n  id: ID!\n}\n\ntype PageInfo {\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n  endCursor: String\n}\n\ntype Position {\n  id: ID!\n  name: String!\n  description: String\n  user: User\n  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]\n}\n\ntype PositionConnection {\n  pageInfo: PageInfo!\n  edges: [PositionEdge]!\n  aggregate: AggregatePosition!\n}\n\ninput PositionCreateInput {\n  id: ID\n  name: String!\n  description: String\n  user: UserCreateOneInput\n  projects: ProjectCreateManyWithoutPositionsInput\n}\n\ninput PositionCreateManyWithoutProjectsInput {\n  create: [PositionCreateWithoutProjectsInput!]\n  connect: [PositionWhereUniqueInput!]\n}\n\ninput PositionCreateWithoutProjectsInput {\n  id: ID\n  name: String!\n  description: String\n  user: UserCreateOneInput\n}\n\ntype PositionEdge {\n  node: Position!\n  cursor: String!\n}\n\nenum PositionOrderByInput {\n  id_ASC\n  id_DESC\n  name_ASC\n  name_DESC\n  description_ASC\n  description_DESC\n}\n\ntype PositionPreviousValues {\n  id: ID!\n  name: String!\n  description: String\n}\n\ninput PositionScalarWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  description: String\n  description_not: String\n  description_in: [String!]\n  description_not_in: [String!]\n  description_lt: String\n  description_lte: String\n  description_gt: String\n  description_gte: String\n  description_contains: String\n  description_not_contains: String\n  description_starts_with: String\n  description_not_starts_with: String\n  description_ends_with: String\n  description_not_ends_with: String\n  AND: [PositionScalarWhereInput!]\n  OR: [PositionScalarWhereInput!]\n  NOT: [PositionScalarWhereInput!]\n}\n\ntype PositionSubscriptionPayload {\n  mutation: MutationType!\n  node: Position\n  updatedFields: [String!]\n  previousValues: PositionPreviousValues\n}\n\ninput PositionSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: PositionWhereInput\n  AND: [PositionSubscriptionWhereInput!]\n  OR: [PositionSubscriptionWhereInput!]\n  NOT: [PositionSubscriptionWhereInput!]\n}\n\ninput PositionUpdateInput {\n  name: String\n  description: String\n  user: UserUpdateOneInput\n  projects: ProjectUpdateManyWithoutPositionsInput\n}\n\ninput PositionUpdateManyDataInput {\n  name: String\n  description: String\n}\n\ninput PositionUpdateManyMutationInput {\n  name: String\n  description: String\n}\n\ninput PositionUpdateManyWithoutProjectsInput {\n  create: [PositionCreateWithoutProjectsInput!]\n  delete: [PositionWhereUniqueInput!]\n  connect: [PositionWhereUniqueInput!]\n  set: [PositionWhereUniqueInput!]\n  disconnect: [PositionWhereUniqueInput!]\n  update: [PositionUpdateWithWhereUniqueWithoutProjectsInput!]\n  upsert: [PositionUpsertWithWhereUniqueWithoutProjectsInput!]\n  deleteMany: [PositionScalarWhereInput!]\n  updateMany: [PositionUpdateManyWithWhereNestedInput!]\n}\n\ninput PositionUpdateManyWithWhereNestedInput {\n  where: PositionScalarWhereInput!\n  data: PositionUpdateManyDataInput!\n}\n\ninput PositionUpdateWithoutProjectsDataInput {\n  name: String\n  description: String\n  user: UserUpdateOneInput\n}\n\ninput PositionUpdateWithWhereUniqueWithoutProjectsInput {\n  where: PositionWhereUniqueInput!\n  data: PositionUpdateWithoutProjectsDataInput!\n}\n\ninput PositionUpsertWithWhereUniqueWithoutProjectsInput {\n  where: PositionWhereUniqueInput!\n  update: PositionUpdateWithoutProjectsDataInput!\n  create: PositionCreateWithoutProjectsInput!\n}\n\ninput PositionWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  description: String\n  description_not: String\n  description_in: [String!]\n  description_not_in: [String!]\n  description_lt: String\n  description_lte: String\n  description_gt: String\n  description_gte: String\n  description_contains: String\n  description_not_contains: String\n  description_starts_with: String\n  description_not_starts_with: String\n  description_ends_with: String\n  description_not_ends_with: String\n  user: UserWhereInput\n  projects_every: ProjectWhereInput\n  projects_some: ProjectWhereInput\n  projects_none: ProjectWhereInput\n  AND: [PositionWhereInput!]\n  OR: [PositionWhereInput!]\n  NOT: [PositionWhereInput!]\n}\n\ninput PositionWhereUniqueInput {\n  id: ID\n}\n\ntype Project {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  shortDescription: String\n  name: String!\n  thumbnail: String\n  cover: String\n  description: String\n  positions(where: PositionWhereInput, orderBy: PositionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Position!]\n  followers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]\n  owner: User!\n  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]\n}\n\ntype ProjectConnection {\n  pageInfo: PageInfo!\n  edges: [ProjectEdge]!\n  aggregate: AggregateProject!\n}\n\ninput ProjectCreateInput {\n  id: ID\n  shortDescription: String\n  name: String!\n  thumbnail: String\n  cover: String\n  description: String\n  positions: PositionCreateManyWithoutProjectsInput\n  followers: UserCreateManyWithoutFollowingProjectsInput\n  owner: UserCreateOneWithoutOwningProjectsInput!\n  tags: TagCreateManyWithoutProjectsInput\n}\n\ninput ProjectCreateManyWithoutFollowersInput {\n  create: [ProjectCreateWithoutFollowersInput!]\n  connect: [ProjectWhereUniqueInput!]\n}\n\ninput ProjectCreateManyWithoutOwnerInput {\n  create: [ProjectCreateWithoutOwnerInput!]\n  connect: [ProjectWhereUniqueInput!]\n}\n\ninput ProjectCreateManyWithoutPositionsInput {\n  create: [ProjectCreateWithoutPositionsInput!]\n  connect: [ProjectWhereUniqueInput!]\n}\n\ninput ProjectCreateManyWithoutTagsInput {\n  create: [ProjectCreateWithoutTagsInput!]\n  connect: [ProjectWhereUniqueInput!]\n}\n\ninput ProjectCreateWithoutFollowersInput {\n  id: ID\n  shortDescription: String\n  name: String!\n  thumbnail: String\n  cover: String\n  description: String\n  positions: PositionCreateManyWithoutProjectsInput\n  owner: UserCreateOneWithoutOwningProjectsInput!\n  tags: TagCreateManyWithoutProjectsInput\n}\n\ninput ProjectCreateWithoutOwnerInput {\n  id: ID\n  shortDescription: String\n  name: String!\n  thumbnail: String\n  cover: String\n  description: String\n  positions: PositionCreateManyWithoutProjectsInput\n  followers: UserCreateManyWithoutFollowingProjectsInput\n  tags: TagCreateManyWithoutProjectsInput\n}\n\ninput ProjectCreateWithoutPositionsInput {\n  id: ID\n  shortDescription: String\n  name: String!\n  thumbnail: String\n  cover: String\n  description: String\n  followers: UserCreateManyWithoutFollowingProjectsInput\n  owner: UserCreateOneWithoutOwningProjectsInput!\n  tags: TagCreateManyWithoutProjectsInput\n}\n\ninput ProjectCreateWithoutTagsInput {\n  id: ID\n  shortDescription: String\n  name: String!\n  thumbnail: String\n  cover: String\n  description: String\n  positions: PositionCreateManyWithoutProjectsInput\n  followers: UserCreateManyWithoutFollowingProjectsInput\n  owner: UserCreateOneWithoutOwningProjectsInput!\n}\n\ntype ProjectEdge {\n  node: Project!\n  cursor: String!\n}\n\nenum ProjectOrderByInput {\n  id_ASC\n  id_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n  shortDescription_ASC\n  shortDescription_DESC\n  name_ASC\n  name_DESC\n  thumbnail_ASC\n  thumbnail_DESC\n  cover_ASC\n  cover_DESC\n  description_ASC\n  description_DESC\n}\n\ntype ProjectPreviousValues {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  shortDescription: String\n  name: String!\n  thumbnail: String\n  cover: String\n  description: String\n}\n\ninput ProjectScalarWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  createdAt: DateTime\n  createdAt_not: DateTime\n  createdAt_in: [DateTime!]\n  createdAt_not_in: [DateTime!]\n  createdAt_lt: DateTime\n  createdAt_lte: DateTime\n  createdAt_gt: DateTime\n  createdAt_gte: DateTime\n  updatedAt: DateTime\n  updatedAt_not: DateTime\n  updatedAt_in: [DateTime!]\n  updatedAt_not_in: [DateTime!]\n  updatedAt_lt: DateTime\n  updatedAt_lte: DateTime\n  updatedAt_gt: DateTime\n  updatedAt_gte: DateTime\n  shortDescription: String\n  shortDescription_not: String\n  shortDescription_in: [String!]\n  shortDescription_not_in: [String!]\n  shortDescription_lt: String\n  shortDescription_lte: String\n  shortDescription_gt: String\n  shortDescription_gte: String\n  shortDescription_contains: String\n  shortDescription_not_contains: String\n  shortDescription_starts_with: String\n  shortDescription_not_starts_with: String\n  shortDescription_ends_with: String\n  shortDescription_not_ends_with: String\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  thumbnail: String\n  thumbnail_not: String\n  thumbnail_in: [String!]\n  thumbnail_not_in: [String!]\n  thumbnail_lt: String\n  thumbnail_lte: String\n  thumbnail_gt: String\n  thumbnail_gte: String\n  thumbnail_contains: String\n  thumbnail_not_contains: String\n  thumbnail_starts_with: String\n  thumbnail_not_starts_with: String\n  thumbnail_ends_with: String\n  thumbnail_not_ends_with: String\n  cover: String\n  cover_not: String\n  cover_in: [String!]\n  cover_not_in: [String!]\n  cover_lt: String\n  cover_lte: String\n  cover_gt: String\n  cover_gte: String\n  cover_contains: String\n  cover_not_contains: String\n  cover_starts_with: String\n  cover_not_starts_with: String\n  cover_ends_with: String\n  cover_not_ends_with: String\n  description: String\n  description_not: String\n  description_in: [String!]\n  description_not_in: [String!]\n  description_lt: String\n  description_lte: String\n  description_gt: String\n  description_gte: String\n  description_contains: String\n  description_not_contains: String\n  description_starts_with: String\n  description_not_starts_with: String\n  description_ends_with: String\n  description_not_ends_with: String\n  AND: [ProjectScalarWhereInput!]\n  OR: [ProjectScalarWhereInput!]\n  NOT: [ProjectScalarWhereInput!]\n}\n\ntype ProjectSubscriptionPayload {\n  mutation: MutationType!\n  node: Project\n  updatedFields: [String!]\n  previousValues: ProjectPreviousValues\n}\n\ninput ProjectSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: ProjectWhereInput\n  AND: [ProjectSubscriptionWhereInput!]\n  OR: [ProjectSubscriptionWhereInput!]\n  NOT: [ProjectSubscriptionWhereInput!]\n}\n\ninput ProjectUpdateInput {\n  shortDescription: String\n  name: String\n  thumbnail: String\n  cover: String\n  description: String\n  positions: PositionUpdateManyWithoutProjectsInput\n  followers: UserUpdateManyWithoutFollowingProjectsInput\n  owner: UserUpdateOneRequiredWithoutOwningProjectsInput\n  tags: TagUpdateManyWithoutProjectsInput\n}\n\ninput ProjectUpdateManyDataInput {\n  shortDescription: String\n  name: String\n  thumbnail: String\n  cover: String\n  description: String\n}\n\ninput ProjectUpdateManyMutationInput {\n  shortDescription: String\n  name: String\n  thumbnail: String\n  cover: String\n  description: String\n}\n\ninput ProjectUpdateManyWithoutFollowersInput {\n  create: [ProjectCreateWithoutFollowersInput!]\n  delete: [ProjectWhereUniqueInput!]\n  connect: [ProjectWhereUniqueInput!]\n  set: [ProjectWhereUniqueInput!]\n  disconnect: [ProjectWhereUniqueInput!]\n  update: [ProjectUpdateWithWhereUniqueWithoutFollowersInput!]\n  upsert: [ProjectUpsertWithWhereUniqueWithoutFollowersInput!]\n  deleteMany: [ProjectScalarWhereInput!]\n  updateMany: [ProjectUpdateManyWithWhereNestedInput!]\n}\n\ninput ProjectUpdateManyWithoutOwnerInput {\n  create: [ProjectCreateWithoutOwnerInput!]\n  delete: [ProjectWhereUniqueInput!]\n  connect: [ProjectWhereUniqueInput!]\n  set: [ProjectWhereUniqueInput!]\n  disconnect: [ProjectWhereUniqueInput!]\n  update: [ProjectUpdateWithWhereUniqueWithoutOwnerInput!]\n  upsert: [ProjectUpsertWithWhereUniqueWithoutOwnerInput!]\n  deleteMany: [ProjectScalarWhereInput!]\n  updateMany: [ProjectUpdateManyWithWhereNestedInput!]\n}\n\ninput ProjectUpdateManyWithoutPositionsInput {\n  create: [ProjectCreateWithoutPositionsInput!]\n  delete: [ProjectWhereUniqueInput!]\n  connect: [ProjectWhereUniqueInput!]\n  set: [ProjectWhereUniqueInput!]\n  disconnect: [ProjectWhereUniqueInput!]\n  update: [ProjectUpdateWithWhereUniqueWithoutPositionsInput!]\n  upsert: [ProjectUpsertWithWhereUniqueWithoutPositionsInput!]\n  deleteMany: [ProjectScalarWhereInput!]\n  updateMany: [ProjectUpdateManyWithWhereNestedInput!]\n}\n\ninput ProjectUpdateManyWithoutTagsInput {\n  create: [ProjectCreateWithoutTagsInput!]\n  delete: [ProjectWhereUniqueInput!]\n  connect: [ProjectWhereUniqueInput!]\n  set: [ProjectWhereUniqueInput!]\n  disconnect: [ProjectWhereUniqueInput!]\n  update: [ProjectUpdateWithWhereUniqueWithoutTagsInput!]\n  upsert: [ProjectUpsertWithWhereUniqueWithoutTagsInput!]\n  deleteMany: [ProjectScalarWhereInput!]\n  updateMany: [ProjectUpdateManyWithWhereNestedInput!]\n}\n\ninput ProjectUpdateManyWithWhereNestedInput {\n  where: ProjectScalarWhereInput!\n  data: ProjectUpdateManyDataInput!\n}\n\ninput ProjectUpdateWithoutFollowersDataInput {\n  shortDescription: String\n  name: String\n  thumbnail: String\n  cover: String\n  description: String\n  positions: PositionUpdateManyWithoutProjectsInput\n  owner: UserUpdateOneRequiredWithoutOwningProjectsInput\n  tags: TagUpdateManyWithoutProjectsInput\n}\n\ninput ProjectUpdateWithoutOwnerDataInput {\n  shortDescription: String\n  name: String\n  thumbnail: String\n  cover: String\n  description: String\n  positions: PositionUpdateManyWithoutProjectsInput\n  followers: UserUpdateManyWithoutFollowingProjectsInput\n  tags: TagUpdateManyWithoutProjectsInput\n}\n\ninput ProjectUpdateWithoutPositionsDataInput {\n  shortDescription: String\n  name: String\n  thumbnail: String\n  cover: String\n  description: String\n  followers: UserUpdateManyWithoutFollowingProjectsInput\n  owner: UserUpdateOneRequiredWithoutOwningProjectsInput\n  tags: TagUpdateManyWithoutProjectsInput\n}\n\ninput ProjectUpdateWithoutTagsDataInput {\n  shortDescription: String\n  name: String\n  thumbnail: String\n  cover: String\n  description: String\n  positions: PositionUpdateManyWithoutProjectsInput\n  followers: UserUpdateManyWithoutFollowingProjectsInput\n  owner: UserUpdateOneRequiredWithoutOwningProjectsInput\n}\n\ninput ProjectUpdateWithWhereUniqueWithoutFollowersInput {\n  where: ProjectWhereUniqueInput!\n  data: ProjectUpdateWithoutFollowersDataInput!\n}\n\ninput ProjectUpdateWithWhereUniqueWithoutOwnerInput {\n  where: ProjectWhereUniqueInput!\n  data: ProjectUpdateWithoutOwnerDataInput!\n}\n\ninput ProjectUpdateWithWhereUniqueWithoutPositionsInput {\n  where: ProjectWhereUniqueInput!\n  data: ProjectUpdateWithoutPositionsDataInput!\n}\n\ninput ProjectUpdateWithWhereUniqueWithoutTagsInput {\n  where: ProjectWhereUniqueInput!\n  data: ProjectUpdateWithoutTagsDataInput!\n}\n\ninput ProjectUpsertWithWhereUniqueWithoutFollowersInput {\n  where: ProjectWhereUniqueInput!\n  update: ProjectUpdateWithoutFollowersDataInput!\n  create: ProjectCreateWithoutFollowersInput!\n}\n\ninput ProjectUpsertWithWhereUniqueWithoutOwnerInput {\n  where: ProjectWhereUniqueInput!\n  update: ProjectUpdateWithoutOwnerDataInput!\n  create: ProjectCreateWithoutOwnerInput!\n}\n\ninput ProjectUpsertWithWhereUniqueWithoutPositionsInput {\n  where: ProjectWhereUniqueInput!\n  update: ProjectUpdateWithoutPositionsDataInput!\n  create: ProjectCreateWithoutPositionsInput!\n}\n\ninput ProjectUpsertWithWhereUniqueWithoutTagsInput {\n  where: ProjectWhereUniqueInput!\n  update: ProjectUpdateWithoutTagsDataInput!\n  create: ProjectCreateWithoutTagsInput!\n}\n\ninput ProjectWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  createdAt: DateTime\n  createdAt_not: DateTime\n  createdAt_in: [DateTime!]\n  createdAt_not_in: [DateTime!]\n  createdAt_lt: DateTime\n  createdAt_lte: DateTime\n  createdAt_gt: DateTime\n  createdAt_gte: DateTime\n  updatedAt: DateTime\n  updatedAt_not: DateTime\n  updatedAt_in: [DateTime!]\n  updatedAt_not_in: [DateTime!]\n  updatedAt_lt: DateTime\n  updatedAt_lte: DateTime\n  updatedAt_gt: DateTime\n  updatedAt_gte: DateTime\n  shortDescription: String\n  shortDescription_not: String\n  shortDescription_in: [String!]\n  shortDescription_not_in: [String!]\n  shortDescription_lt: String\n  shortDescription_lte: String\n  shortDescription_gt: String\n  shortDescription_gte: String\n  shortDescription_contains: String\n  shortDescription_not_contains: String\n  shortDescription_starts_with: String\n  shortDescription_not_starts_with: String\n  shortDescription_ends_with: String\n  shortDescription_not_ends_with: String\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  thumbnail: String\n  thumbnail_not: String\n  thumbnail_in: [String!]\n  thumbnail_not_in: [String!]\n  thumbnail_lt: String\n  thumbnail_lte: String\n  thumbnail_gt: String\n  thumbnail_gte: String\n  thumbnail_contains: String\n  thumbnail_not_contains: String\n  thumbnail_starts_with: String\n  thumbnail_not_starts_with: String\n  thumbnail_ends_with: String\n  thumbnail_not_ends_with: String\n  cover: String\n  cover_not: String\n  cover_in: [String!]\n  cover_not_in: [String!]\n  cover_lt: String\n  cover_lte: String\n  cover_gt: String\n  cover_gte: String\n  cover_contains: String\n  cover_not_contains: String\n  cover_starts_with: String\n  cover_not_starts_with: String\n  cover_ends_with: String\n  cover_not_ends_with: String\n  description: String\n  description_not: String\n  description_in: [String!]\n  description_not_in: [String!]\n  description_lt: String\n  description_lte: String\n  description_gt: String\n  description_gte: String\n  description_contains: String\n  description_not_contains: String\n  description_starts_with: String\n  description_not_starts_with: String\n  description_ends_with: String\n  description_not_ends_with: String\n  positions_every: PositionWhereInput\n  positions_some: PositionWhereInput\n  positions_none: PositionWhereInput\n  followers_every: UserWhereInput\n  followers_some: UserWhereInput\n  followers_none: UserWhereInput\n  owner: UserWhereInput\n  tags_every: TagWhereInput\n  tags_some: TagWhereInput\n  tags_none: TagWhereInput\n  AND: [ProjectWhereInput!]\n  OR: [ProjectWhereInput!]\n  NOT: [ProjectWhereInput!]\n}\n\ninput ProjectWhereUniqueInput {\n  id: ID\n}\n\ntype Query {\n  position(where: PositionWhereUniqueInput!): Position\n  positions(where: PositionWhereInput, orderBy: PositionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Position]!\n  positionsConnection(where: PositionWhereInput, orderBy: PositionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PositionConnection!\n  project(where: ProjectWhereUniqueInput!): Project\n  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!\n  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!\n  tag(where: TagWhereUniqueInput!): Tag\n  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!\n  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!\n  user(where: UserWhereUniqueInput!): User\n  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!\n  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!\n  node(id: ID!): Node\n}\n\ntype Subscription {\n  position(where: PositionSubscriptionWhereInput): PositionSubscriptionPayload\n  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload\n  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload\n  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload\n}\n\ntype Tag {\n  id: ID!\n  name: String!\n  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]\n}\n\ntype TagConnection {\n  pageInfo: PageInfo!\n  edges: [TagEdge]!\n  aggregate: AggregateTag!\n}\n\ninput TagCreateInput {\n  id: ID\n  name: String!\n  projects: ProjectCreateManyWithoutTagsInput\n}\n\ninput TagCreateManyWithoutProjectsInput {\n  create: [TagCreateWithoutProjectsInput!]\n  connect: [TagWhereUniqueInput!]\n}\n\ninput TagCreateWithoutProjectsInput {\n  id: ID\n  name: String!\n}\n\ntype TagEdge {\n  node: Tag!\n  cursor: String!\n}\n\nenum TagOrderByInput {\n  id_ASC\n  id_DESC\n  name_ASC\n  name_DESC\n}\n\ntype TagPreviousValues {\n  id: ID!\n  name: String!\n}\n\ninput TagScalarWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  AND: [TagScalarWhereInput!]\n  OR: [TagScalarWhereInput!]\n  NOT: [TagScalarWhereInput!]\n}\n\ntype TagSubscriptionPayload {\n  mutation: MutationType!\n  node: Tag\n  updatedFields: [String!]\n  previousValues: TagPreviousValues\n}\n\ninput TagSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: TagWhereInput\n  AND: [TagSubscriptionWhereInput!]\n  OR: [TagSubscriptionWhereInput!]\n  NOT: [TagSubscriptionWhereInput!]\n}\n\ninput TagUpdateInput {\n  name: String\n  projects: ProjectUpdateManyWithoutTagsInput\n}\n\ninput TagUpdateManyDataInput {\n  name: String\n}\n\ninput TagUpdateManyMutationInput {\n  name: String\n}\n\ninput TagUpdateManyWithoutProjectsInput {\n  create: [TagCreateWithoutProjectsInput!]\n  delete: [TagWhereUniqueInput!]\n  connect: [TagWhereUniqueInput!]\n  set: [TagWhereUniqueInput!]\n  disconnect: [TagWhereUniqueInput!]\n  update: [TagUpdateWithWhereUniqueWithoutProjectsInput!]\n  upsert: [TagUpsertWithWhereUniqueWithoutProjectsInput!]\n  deleteMany: [TagScalarWhereInput!]\n  updateMany: [TagUpdateManyWithWhereNestedInput!]\n}\n\ninput TagUpdateManyWithWhereNestedInput {\n  where: TagScalarWhereInput!\n  data: TagUpdateManyDataInput!\n}\n\ninput TagUpdateWithoutProjectsDataInput {\n  name: String\n}\n\ninput TagUpdateWithWhereUniqueWithoutProjectsInput {\n  where: TagWhereUniqueInput!\n  data: TagUpdateWithoutProjectsDataInput!\n}\n\ninput TagUpsertWithWhereUniqueWithoutProjectsInput {\n  where: TagWhereUniqueInput!\n  update: TagUpdateWithoutProjectsDataInput!\n  create: TagCreateWithoutProjectsInput!\n}\n\ninput TagWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  projects_every: ProjectWhereInput\n  projects_some: ProjectWhereInput\n  projects_none: ProjectWhereInput\n  AND: [TagWhereInput!]\n  OR: [TagWhereInput!]\n  NOT: [TagWhereInput!]\n}\n\ninput TagWhereUniqueInput {\n  id: ID\n  name: String\n}\n\ntype User {\n  id: ID!\n  followingProjects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]\n  owningProjects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]\n}\n\ntype UserConnection {\n  pageInfo: PageInfo!\n  edges: [UserEdge]!\n  aggregate: AggregateUser!\n}\n\ninput UserCreateInput {\n  id: ID\n  followingProjects: ProjectCreateManyWithoutFollowersInput\n  owningProjects: ProjectCreateManyWithoutOwnerInput\n}\n\ninput UserCreateManyWithoutFollowingProjectsInput {\n  create: [UserCreateWithoutFollowingProjectsInput!]\n  connect: [UserWhereUniqueInput!]\n}\n\ninput UserCreateOneInput {\n  create: UserCreateInput\n  connect: UserWhereUniqueInput\n}\n\ninput UserCreateOneWithoutOwningProjectsInput {\n  create: UserCreateWithoutOwningProjectsInput\n  connect: UserWhereUniqueInput\n}\n\ninput UserCreateWithoutFollowingProjectsInput {\n  id: ID\n  owningProjects: ProjectCreateManyWithoutOwnerInput\n}\n\ninput UserCreateWithoutOwningProjectsInput {\n  id: ID\n  followingProjects: ProjectCreateManyWithoutFollowersInput\n}\n\ntype UserEdge {\n  node: User!\n  cursor: String!\n}\n\nenum UserOrderByInput {\n  id_ASC\n  id_DESC\n}\n\ntype UserPreviousValues {\n  id: ID!\n}\n\ninput UserScalarWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  AND: [UserScalarWhereInput!]\n  OR: [UserScalarWhereInput!]\n  NOT: [UserScalarWhereInput!]\n}\n\ntype UserSubscriptionPayload {\n  mutation: MutationType!\n  node: User\n  updatedFields: [String!]\n  previousValues: UserPreviousValues\n}\n\ninput UserSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: UserWhereInput\n  AND: [UserSubscriptionWhereInput!]\n  OR: [UserSubscriptionWhereInput!]\n  NOT: [UserSubscriptionWhereInput!]\n}\n\ninput UserUpdateDataInput {\n  followingProjects: ProjectUpdateManyWithoutFollowersInput\n  owningProjects: ProjectUpdateManyWithoutOwnerInput\n}\n\ninput UserUpdateInput {\n  followingProjects: ProjectUpdateManyWithoutFollowersInput\n  owningProjects: ProjectUpdateManyWithoutOwnerInput\n}\n\ninput UserUpdateManyWithoutFollowingProjectsInput {\n  create: [UserCreateWithoutFollowingProjectsInput!]\n  delete: [UserWhereUniqueInput!]\n  connect: [UserWhereUniqueInput!]\n  set: [UserWhereUniqueInput!]\n  disconnect: [UserWhereUniqueInput!]\n  update: [UserUpdateWithWhereUniqueWithoutFollowingProjectsInput!]\n  upsert: [UserUpsertWithWhereUniqueWithoutFollowingProjectsInput!]\n  deleteMany: [UserScalarWhereInput!]\n}\n\ninput UserUpdateOneInput {\n  create: UserCreateInput\n  update: UserUpdateDataInput\n  upsert: UserUpsertNestedInput\n  delete: Boolean\n  disconnect: Boolean\n  connect: UserWhereUniqueInput\n}\n\ninput UserUpdateOneRequiredWithoutOwningProjectsInput {\n  create: UserCreateWithoutOwningProjectsInput\n  update: UserUpdateWithoutOwningProjectsDataInput\n  upsert: UserUpsertWithoutOwningProjectsInput\n  connect: UserWhereUniqueInput\n}\n\ninput UserUpdateWithoutFollowingProjectsDataInput {\n  owningProjects: ProjectUpdateManyWithoutOwnerInput\n}\n\ninput UserUpdateWithoutOwningProjectsDataInput {\n  followingProjects: ProjectUpdateManyWithoutFollowersInput\n}\n\ninput UserUpdateWithWhereUniqueWithoutFollowingProjectsInput {\n  where: UserWhereUniqueInput!\n  data: UserUpdateWithoutFollowingProjectsDataInput!\n}\n\ninput UserUpsertNestedInput {\n  update: UserUpdateDataInput!\n  create: UserCreateInput!\n}\n\ninput UserUpsertWithoutOwningProjectsInput {\n  update: UserUpdateWithoutOwningProjectsDataInput!\n  create: UserCreateWithoutOwningProjectsInput!\n}\n\ninput UserUpsertWithWhereUniqueWithoutFollowingProjectsInput {\n  where: UserWhereUniqueInput!\n  update: UserUpdateWithoutFollowingProjectsDataInput!\n  create: UserCreateWithoutFollowingProjectsInput!\n}\n\ninput UserWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  followingProjects_every: ProjectWhereInput\n  followingProjects_some: ProjectWhereInput\n  followingProjects_none: ProjectWhereInput\n  owningProjects_every: ProjectWhereInput\n  owningProjects_some: ProjectWhereInput\n  owningProjects_none: ProjectWhereInput\n  AND: [UserWhereInput!]\n  OR: [UserWhereInput!]\n  NOT: [UserWhereInput!]\n}\n\ninput UserWhereUniqueInput {\n  id: ID\n}\n`\n};\n\n//# sourceURL=webpack:///./src/generated/prisma-client/prisma-schema.js?");

/***/ }),

/***/ "./src/graphql/index.js":
/*!******************************!*\
  !*** ./src/graphql/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  ApolloServer\n} = __webpack_require__(/*! apollo-server-lambda */ \"apollo-server-lambda\");\n\nconst {\n  makeSchema\n} = __webpack_require__(/*! ./make-schema */ \"./src/graphql/make-schema.js\");\n\nconst {\n  makeContext\n} = __webpack_require__(/*! ./make-context */ \"./src/graphql/make-context.js\");\n\nconst server = new ApolloServer({\n  schema: makeSchema(),\n  context: makeContext\n});\nexports.handler = server.createHandler();\n\n//# sourceURL=webpack:///./src/graphql/index.js?");

/***/ }),

/***/ "./src/graphql/make-context.js":
/*!*************************************!*\
  !*** ./src/graphql/make-context.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const project = __webpack_require__(/*! ../usecases/project */ \"./src/usecases/project/index.js\");\n\nconst makeContext = ({\n  event\n}) => {\n  if (!event) {\n    return Promise.reject(new Error('No lambda event detected'));\n  }\n\n  return {\n    project,\n    viewer: {\n      id: 'ck2ppvh7e4q9s0714yi58vdqf'\n    }\n  };\n};\n\nmodule.exports = {\n  makeContext\n};\n\n//# sourceURL=webpack:///./src/graphql/make-context.js?");

/***/ }),

/***/ "./src/graphql/make-schema.js":
/*!************************************!*\
  !*** ./src/graphql/make-schema.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  makeExecutableSchema\n} = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n\nconst merge = __webpack_require__(/*! lodash.merge */ \"lodash.merge\");\n\nconst rootSchema = __webpack_require__(/*! ./schemas/root */ \"./src/graphql/schemas/root.js\");\n\nconst projectSchema = __webpack_require__(/*! ./schemas/project */ \"./src/graphql/schemas/project/index.js\");\n\nconst makeSchema = () => {\n  const schemas = [rootSchema, projectSchema];\n  const typeDefs = schemas.reduce((acc, schema) => acc.concat(schema.typeDefs), '');\n  const resolvers = Object.assign(schemas.reduce((acc, schema) => merge(acc, schema.resolvers), {}));\n  return makeExecutableSchema({\n    typeDefs,\n    resolvers\n  });\n};\n\nmodule.exports = {\n  makeSchema\n};\n\n//# sourceURL=webpack:///./src/graphql/make-schema.js?");

/***/ }),

/***/ "./src/graphql/schemas/project/index.js":
/*!**********************************************!*\
  !*** ./src/graphql/schemas/project/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const property = __webpack_require__(/*! lodash.property */ \"lodash.property\");\n\nconst typeDefs = `\n  extend type Query {\n    projects: ProjectList\n  }\n\n  extend type Mutation {\n    createProject(input: ProjectInput!): Project\n  }\n\n  type Pagination {\n    pageSize: Int\n    total: Int\n    page: Int\n  }\n\n  type ProjectList {\n    projects: [Project]\n    pagination: Pagination\n  }\n\n  input ProjectInput {\n    name: String!\n    description: String\n    shortDescription: String\n    thumbnail: String\n    cover: String\n    owner: ID\n    positions: [PositionInput]\n    tags: [TagInput]\n  }\n\n  type User {\n    id: ID\n    username: String\n    email: String\n    firstname: String\n    lastname: String\n    accessRole: AccessRole\n    followingProjects: [Project]\n    owningProjects: [Project]\n  }\n\n  type Project {\n    id: ID\n    createdAt: String\n    updatedAt: String\n    shortDescription: String\n    name: String\n    thumbnail: String\n    cover: String\n    description: String\n    positions: [Position]\n    followers: [User]\n    owner: User\n    tags: [Tag]\n  }\n\n  type Position {\n    id: ID\n    name: String\n    description: String\n    user: User\n    projects: [Project]\n  }\n\n  input PositionInput {\n    id: ID\n    name: String\n    description: String\n  }\n\n  type Tag {\n    id: ID\n    name: String\n  }\n\n  input TagInput {\n    id: ID\n    name: String\n  }\n\n  enum AccessRole {\n    ADMIN\n    USER\n  }\n`;\nconst resolvers = {\n  Query: {\n    projects: (_, {\n      page = 1,\n      pageSize = 10\n    }, {\n      project\n    }) => project.getProjects({\n      page,\n      pageSize\n    })\n  },\n  Mutation: {\n    createProject: (_, {\n      input\n    }, {\n      project,\n      viewer: {\n        id\n      }\n    }) => project.createProject({ ...input,\n      owner: id\n    })\n  },\n  ProjectList: {\n    projects: projects => projects,\n    pagination: (_, {\n      page = 1,\n      pageSize = 10\n    }, {\n      project\n    }) => project.getProjectCount().then(total => ({\n      total,\n      page,\n      pageSize\n    }))\n  },\n  Pagination: {\n    total: property('total'),\n    page: property('page'),\n    pageSize: property('pageSize')\n  },\n  Project: {\n    id: property('id'),\n    name: property('name'),\n    description: property('description')\n  }\n};\nmodule.exports = {\n  typeDefs,\n  resolvers\n};\n\n//# sourceURL=webpack:///./src/graphql/schemas/project/index.js?");

/***/ }),

/***/ "./src/graphql/schemas/root.js":
/*!*************************************!*\
  !*** ./src/graphql/schemas/root.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const typeDefs = `\n    type Query {\n      projectsHealthCheck: Boolean!\n    }\n\n    type Mutation {\n      projectsEcho(input: ProjectsEchoInput!): ProjectsEchoResponse\n    }\n\n    input ProjectsEchoInput {\n        echo: String\n    }\n\n    type ProjectsEchoResponse {\n        echo: String\n    }\n`;\nconst resolvers = {\n  Query: {\n    projectsHealthCheck: () => true\n  },\n  Mutation: {\n    projectsEcho: (_, {\n      input\n    }) => ({\n      echo: input.echo\n    })\n  }\n};\nmodule.exports = {\n  typeDefs,\n  resolvers\n};\n\n//# sourceURL=webpack:///./src/graphql/schemas/root.js?");

/***/ }),

/***/ "./src/usecases/project/create-project.js":
/*!************************************************!*\
  !*** ./src/usecases/project/create-project.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const makeCreateProject = ({\n  db\n}) => ({\n  name,\n  description,\n  owner\n}) => db.createProject({\n  name,\n  description,\n  owner: {\n    connect: {\n      id: owner\n    }\n  }\n});\n\nmodule.exports = {\n  makeCreateProject\n};\n\n//# sourceURL=webpack:///./src/usecases/project/create-project.js?");

/***/ }),

/***/ "./src/usecases/project/get-project-count.js":
/*!***************************************************!*\
  !*** ./src/usecases/project/get-project-count.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const makeGetProjectCount = ({\n  db\n}) => () => db.projectsConnection().aggregate().count();\n\nmodule.exports = {\n  makeGetProjectCount\n};\n\n//# sourceURL=webpack:///./src/usecases/project/get-project-count.js?");

/***/ }),

/***/ "./src/usecases/project/get-projects.js":
/*!**********************************************!*\
  !*** ./src/usecases/project/get-projects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const makeGetProjects = ({\n  db\n}) => ({\n  page,\n  pageSize\n}) => db.projects({\n  first: pageSize,\n  skip: pageSize * (page - 1)\n});\n\nmodule.exports = {\n  makeGetProjects\n};\n\n//# sourceURL=webpack:///./src/usecases/project/get-projects.js?");

/***/ }),

/***/ "./src/usecases/project/index.js":
/*!***************************************!*\
  !*** ./src/usecases/project/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  db\n} = __webpack_require__(/*! ../../db */ \"./src/db/index.js\");\n\nconst {\n  makeGetProjects\n} = __webpack_require__(/*! ./get-projects */ \"./src/usecases/project/get-projects.js\");\n\nconst {\n  makeCreateProject\n} = __webpack_require__(/*! ./create-project */ \"./src/usecases/project/create-project.js\");\n\nconst {\n  makeGetProjectCount\n} = __webpack_require__(/*! ./get-project-count */ \"./src/usecases/project/get-project-count.js\");\n\nconst getProjects = makeGetProjects({\n  db\n});\nconst getProjectCount = makeGetProjectCount({\n  db\n});\nconst createProject = makeCreateProject({\n  db\n});\nmodule.exports = {\n  getProjects,\n  getProjectCount,\n  createProject\n};\n\n//# sourceURL=webpack:///./src/usecases/project/index.js?");

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-lambda\");\n\n//# sourceURL=webpack:///external_%22apollo-server-lambda%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "lodash.merge":
/*!*******************************!*\
  !*** external "lodash.merge" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash.merge\");\n\n//# sourceURL=webpack:///external_%22lodash.merge%22?");

/***/ }),

/***/ "lodash.property":
/*!**********************************!*\
  !*** external "lodash.property" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash.property\");\n\n//# sourceURL=webpack:///external_%22lodash.property%22?");

/***/ }),

/***/ "prisma-client-lib":
/*!************************************!*\
  !*** external "prisma-client-lib" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prisma-client-lib\");\n\n//# sourceURL=webpack:///external_%22prisma-client-lib%22?");

/***/ })

/******/ })));