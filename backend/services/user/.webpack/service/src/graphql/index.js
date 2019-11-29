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

/***/ "./src/clients/documentClient.js":
/*!***************************************!*\
  !*** ./src/clients/documentClient.js ***!
  \***************************************/
/*! exports provided: documentClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"documentClient\", function() { return documentClient; });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst documentClient = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__[\"DynamoDB\"].DocumentClient({\n  convertEmptyValues: true\n});\n\n\n//# sourceURL=webpack:///./src/clients/documentClient.js?");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: USER_TABLE_NAME, USER_TABLE_EMAIL_INDEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_TABLE_NAME\", function() { return USER_TABLE_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_TABLE_EMAIL_INDEX\", function() { return USER_TABLE_EMAIL_INDEX; });\nconst {\n  USER_TABLE_NAME\n} = process.env;\nconst {\n  USER_TABLE_EMAIL_INDEX\n} = process.env;\n\n\n//# sourceURL=webpack:///./src/config/index.js?");

/***/ }),

/***/ "./src/data/user/createUser.js":
/*!*************************************!*\
  !*** ./src/data/user/createUser.js ***!
  \*************************************/
/*! exports provided: createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony import */ var _clients_documentClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../clients/documentClient */ \"./src/clients/documentClient.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./src/config/index.js\");\n/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/logger */ \"./src/util/logger.js\");\n\n\n\n\nconst createUser = ({\n  userId,\n  email,\n  username,\n  picture,\n  firstname,\n  lastname\n}) => {\n  const user = {\n    userId,\n    email,\n    username,\n    picture,\n    firstname,\n    lastname,\n    createdAt: Date.now()\n  };\n  const params = {\n    TableName: _config__WEBPACK_IMPORTED_MODULE_1__[\"USER_TABLE_NAME\"],\n    Item: user\n  };\n  return _clients_documentClient__WEBPACK_IMPORTED_MODULE_0__[\"documentClient\"].put(params).promise().then(() => user).catch(error => {\n    _util_logger__WEBPACK_IMPORTED_MODULE_2__[\"logger\"].error('Could not create user', error);\n    return null;\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/data/user/createUser.js?");

/***/ }),

/***/ "./src/data/user/getUserByEmail.js":
/*!*****************************************!*\
  !*** ./src/data/user/getUserByEmail.js ***!
  \*****************************************/
/*! exports provided: getUserByEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserByEmail\", function() { return getUserByEmail; });\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.get */ \"lodash.get\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _clients_documentClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../clients/documentClient */ \"./src/clients/documentClient.js\");\n/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/logger */ \"./src/util/logger.js\");\n\n\n\n\nconst {\n  USER_TABLE_NAME,\n  USER_TABLE_EMAIL_INDEX\n} = __webpack_require__(/*! ../../config */ \"./src/config/index.js\");\n\nconst getUserByEmail = ({\n  email\n}) => {\n  const params = {\n    TableName: USER_TABLE_NAME,\n    IndexName: USER_TABLE_EMAIL_INDEX,\n    KeyConditionExpression: 'email = :hkey',\n    ExpressionAttributeValues: {\n      ':hkey': email\n    }\n  };\n  return _clients_documentClient__WEBPACK_IMPORTED_MODULE_1__[\"documentClient\"].query(params).promise().then(result => lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(result, 'Items[0]', null)).catch(error => {\n    _util_logger__WEBPACK_IMPORTED_MODULE_2__[\"logger\"].error('Could not get user', error);\n    return null;\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/data/user/getUserByEmail.js?");

/***/ }),

/***/ "./src/data/user/getUserById.js":
/*!**************************************!*\
  !*** ./src/data/user/getUserById.js ***!
  \**************************************/
/*! exports provided: getUserById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserById\", function() { return getUserById; });\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.get */ \"lodash.get\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _clients_documentClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../clients/documentClient */ \"./src/clients/documentClient.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./src/config/index.js\");\n/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/logger */ \"./src/util/logger.js\");\n\n\n\n\n\nconst getUserById = ({\n  userId\n}) => {\n  const params = {\n    TableName: _config__WEBPACK_IMPORTED_MODULE_2__[\"USER_TABLE_NAME\"],\n    Key: {\n      userId\n    }\n  };\n  return _clients_documentClient__WEBPACK_IMPORTED_MODULE_1__[\"documentClient\"].get(params).promise().then(response => lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(response, 'Item', null)).catch(error => {\n    _util_logger__WEBPACK_IMPORTED_MODULE_3__[\"logger\"].error('Could not get user', error);\n    return null;\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/data/user/getUserById.js?");

/***/ }),

/***/ "./src/data/user/index.js":
/*!********************************!*\
  !*** ./src/data/user/index.js ***!
  \********************************/
/*! exports provided: getUserByEmail, getUserById, createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getUserByEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUserByEmail */ \"./src/data/user/getUserByEmail.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getUserByEmail\", function() { return _getUserByEmail__WEBPACK_IMPORTED_MODULE_0__[\"getUserByEmail\"]; });\n\n/* harmony import */ var _getUserById__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getUserById */ \"./src/data/user/getUserById.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getUserById\", function() { return _getUserById__WEBPACK_IMPORTED_MODULE_1__[\"getUserById\"]; });\n\n/* harmony import */ var _createUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createUser */ \"./src/data/user/createUser.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return _createUser__WEBPACK_IMPORTED_MODULE_2__[\"createUser\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/data/user/index.js?");

/***/ }),

/***/ "./src/graphql/index.js":
/*!******************************!*\
  !*** ./src/graphql/index.js ***!
  \******************************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handler\", function() { return handler; });\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-lambda */ \"apollo-server-lambda\");\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _make_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-schema */ \"./src/graphql/make-schema.js\");\n/* harmony import */ var _make_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./make-context */ \"./src/graphql/make-context.js\");\n\n\n\nconst server = new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__[\"ApolloServer\"]({\n  schema: Object(_make_schema__WEBPACK_IMPORTED_MODULE_1__[\"makeSchema\"])(),\n  context: _make_context__WEBPACK_IMPORTED_MODULE_2__[\"makeContext\"]\n});\nconst handler = server.createHandler();\n\n\n//# sourceURL=webpack:///./src/graphql/index.js?");

/***/ }),

/***/ "./src/graphql/make-context.js":
/*!*************************************!*\
  !*** ./src/graphql/make-context.js ***!
  \*************************************/
/*! exports provided: makeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeContext\", function() { return makeContext; });\n/* harmony import */ var _usecases_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../usecases/user */ \"./src/usecases/user/index.js\");\n/* harmony import */ var _util_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/viewer */ \"./src/util/viewer.js\");\n\n\n\nconst makeContext = ({\n  event\n}) => {\n  if (!event) {\n    return Promise.reject(new Error('No lambda event detected'));\n  }\n\n  return {\n    user: _usecases_user__WEBPACK_IMPORTED_MODULE_0__,\n    viewer: Object(_util_viewer__WEBPACK_IMPORTED_MODULE_1__[\"getViewer\"])({\n      event\n    })\n  };\n};\n\n\n\n//# sourceURL=webpack:///./src/graphql/make-context.js?");

/***/ }),

/***/ "./src/graphql/make-schema.js":
/*!************************************!*\
  !*** ./src/graphql/make-schema.js ***!
  \************************************/
/*! exports provided: makeSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeSchema\", function() { return makeSchema; });\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.merge */ \"lodash.merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _schemas_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schemas/root */ \"./src/graphql/schemas/root.js\");\n/* harmony import */ var _schemas_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schemas/user */ \"./src/graphql/schemas/user/index.js\");\n\n\n\n\n\nconst makeSchema = () => {\n  const schemas = [_schemas_root__WEBPACK_IMPORTED_MODULE_2__, _schemas_user__WEBPACK_IMPORTED_MODULE_3__];\n  const typeDefs = schemas.reduce((acc, schema) => acc.concat(schema.typeDefs), '');\n  const resolvers = Object.assign(schemas.reduce((acc, schema) => lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()(acc, schema.resolvers), {}));\n  return Object(graphql_tools__WEBPACK_IMPORTED_MODULE_0__[\"makeExecutableSchema\"])({\n    typeDefs,\n    resolvers\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/graphql/make-schema.js?");

/***/ }),

/***/ "./src/graphql/schemas/root.js":
/*!*************************************!*\
  !*** ./src/graphql/schemas/root.js ***!
  \*************************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeDefs\", function() { return typeDefs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return resolvers; });\nconst typeDefs = `\n    type Query {\n      userHealthCheck: Boolean!\n    }\n\n    type Mutation {\n      userEcho(input: UserEchoInput!): UserEchoResponse\n    }\n\n    input UserEchoInput {\n        echo: String\n    }\n\n    type UserEchoResponse {\n        echo: String\n    }\n`;\nconst resolvers = {\n  Query: {\n    userHealthCheck: () => true\n  },\n  Mutation: {\n    userEcho: (_, {\n      input\n    }) => ({\n      echo: input.echo\n    })\n  }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/schemas/root.js?");

/***/ }),

/***/ "./src/graphql/schemas/user/index.js":
/*!*******************************************!*\
  !*** ./src/graphql/schemas/user/index.js ***!
  \*******************************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeDefs\", function() { return typeDefs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return resolvers; });\n/* harmony import */ var lodash_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.property */ \"lodash.property\");\n/* harmony import */ var lodash_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_property__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = `\n  type User {\n    id: ID\n    username: String\n    email: String\n    firstname: String\n    lastname: String\n  }\n\n  input CreateUserInput {\n    email: String!\n    username: String!\n    firstname: String\n    lastname: String\n  }\n\n  extend type Query {\n    user: User\n    userById(id: ID!): User\n    userByEmail(email: String!): User\n  }\n\n  extend type Mutation {\n    createUser(input: CreateUserInput!): User\n  }\n`;\nconst resolvers = {\n  Query: {\n    user: (_, __, {\n      user,\n      viewer: {\n        id\n      }\n    }) => id ? user.byId({\n      userId: id\n    }) : null,\n    userById: (_, {\n      id\n    }, {\n      user\n    }) => user.byId({\n      userId: id\n    }),\n    userByEmail: (_, {\n      email\n    }, {\n      user\n    }) => user.byEmail({\n      email\n    })\n  },\n  User: {\n    id: lodash_property__WEBPACK_IMPORTED_MODULE_0___default()('userId')\n  }\n};\n\n\n//# sourceURL=webpack:///./src/graphql/schemas/user/index.js?");

/***/ }),

/***/ "./src/usecases/user/handle-user-login.js":
/*!************************************************!*\
  !*** ./src/usecases/user/handle-user-login.js ***!
  \************************************************/
/*! exports provided: makeHandleUserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeHandleUserLogin\", function() { return makeHandleUserLogin; });\n/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/logger */ \"./src/util/logger.js\");\n\n\nconst makeHandleUserLogin = ({\n  createUser,\n  getUserByEmail\n}) => async ({\n  userId,\n  email,\n  picture,\n  username,\n  firstname,\n  lastname\n}) => {\n  const foundUser = await getUserByEmail({\n    email\n  });\n\n  if (foundUser) {\n    _util_logger__WEBPACK_IMPORTED_MODULE_0__[\"logger\"].log('User found. skipping..', foundUser);\n    return null;\n  }\n\n  _util_logger__WEBPACK_IMPORTED_MODULE_0__[\"logger\"].log('Creating new user..', email);\n  return createUser({\n    userId,\n    email,\n    picture,\n    username,\n    firstname,\n    lastname\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/usecases/user/handle-user-login.js?");

/***/ }),

/***/ "./src/usecases/user/index.js":
/*!************************************!*\
  !*** ./src/usecases/user/index.js ***!
  \************************************/
/*! exports provided: createUser, byEmail, handleUserLogin, byId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"byEmail\", function() { return byEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleUserLogin\", function() { return handleUserLogin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"byId\", function() { return byId; });\n/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/user */ \"./src/data/user/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return _data_user__WEBPACK_IMPORTED_MODULE_0__[\"createUser\"]; });\n\n/* harmony import */ var _handle_user_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle-user-login */ \"./src/usecases/user/handle-user-login.js\");\n\n\nconst handleUserLogin = Object(_handle_user_login__WEBPACK_IMPORTED_MODULE_1__[\"makeHandleUserLogin\"])({\n  createUser: _data_user__WEBPACK_IMPORTED_MODULE_0__[\"createUser\"],\n  getUserByEmail: _data_user__WEBPACK_IMPORTED_MODULE_0__[\"getUserByEmail\"]\n});\nconst byEmail = _data_user__WEBPACK_IMPORTED_MODULE_0__[\"getUserByEmail\"];\nconst byId = _data_user__WEBPACK_IMPORTED_MODULE_0__[\"getUserById\"];\n\n\n//# sourceURL=webpack:///./src/usecases/user/index.js?");

/***/ }),

/***/ "./src/util/logger.js":
/*!****************************!*\
  !*** ./src/util/logger.js ***!
  \****************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logger\", function() { return logger; });\nconst logger = {\n  log: (msg, data) => console.log(msg, JSON.stringify(data)),\n  error: (msg, error) => console.error(msg, JSON.stringify(error))\n};\n\n\n//# sourceURL=webpack:///./src/util/logger.js?");

/***/ }),

/***/ "./src/util/viewer.js":
/*!****************************!*\
  !*** ./src/util/viewer.js ***!
  \****************************/
/*! exports provided: getViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getViewer\", function() { return getViewer; });\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.get */ \"lodash.get\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getViewer = ({\n  event\n}) => {\n  const viewerString = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(event, 'headers.viewer') || '';\n\n  try {\n    const jsonString = Buffer.from(viewerString, 'base64').toString();\n    return JSON.parse(jsonString);\n  } catch (e) {\n    return {};\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/util/viewer.js?");

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-lambda\");\n\n//# sourceURL=webpack:///external_%22apollo-server-lambda%22?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "lodash.get":
/*!*****************************!*\
  !*** external "lodash.get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash.get\");\n\n//# sourceURL=webpack:///external_%22lodash.get%22?");

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

/***/ })

/******/ })));