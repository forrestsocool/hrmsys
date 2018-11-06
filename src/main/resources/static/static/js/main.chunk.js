(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");
/* harmony import */ var ra_data_json_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ra-data-json-server */ "./node_modules/ra-data-json-server/esm/index.js");
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Work */ "./node_modules/@material-ui/icons/Work.js");
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Group */ "./node_modules/@material-ui/icons/Group.js");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Star */ "./node_modules/@material-ui/icons/Star.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ra_language_english__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ra-language-english */ "./node_modules/ra-language-english/index.js");
/* harmony import */ var ra_language_english__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ra_language_english__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ra_language_chinese__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ra-language-chinese */ "./node_modules/ra-language-chinese/index.js");
/* harmony import */ var ra_language_chinese__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ra_language_chinese__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _authProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authProvider */ "./src/authProvider.js");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee */ "./src/employee/index.js");
/* harmony import */ var _department__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./department */ "./src/department.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./position */ "./src/position.js");
/* harmony import */ var _MyLogin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MyLogin */ "./src/MyLogin.js");
/* harmony import */ var ra_core_esm_util_fetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ra-core/esm/util/fetch */ "./node_modules/ra-core/esm/util/fetch.js");
var _jsxFileName = "E:\\Project\\JS\\reactjs\\helloworld - \u526F\u672C\\src\\App.js";
// in src/App.js













 //import dataProvider from './dataProvider';
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// const App = () => (
//     <Admin dashboard={Dashboard} dataProvider={dataProvider}  authProvider={authProvider}>
//         <Resource name="posts" list={PostList}  edit={PostEdit} create={PostCreate}  icon={PostIcon} />
//         <Resource name="users" list={UserList}  icon={UserIcon}/>
//     </Admin>
// );
// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// const App = () => (
//     <Admin dataProvider={dataProvider}>
//         <Resource name="posts"  list={PostList}/>
//     </Admin>
// );

var messages = {
  zh: ra_language_chinese__WEBPACK_IMPORTED_MODULE_7___default.a,
  en: ra_language_english__WEBPACK_IMPORTED_MODULE_6___default.a
};

var i18nProvider = function i18nProvider(locale) {
  return messages[locale];
};

var httpClient = function httpClient(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!options.headers) {
    options.headers = new Headers({
      Accept: 'application/json'
    });
  }

  var token = localStorage.getItem('token');
  options.headers.set('Authorization', "".concat(token));
  return ra_core_esm_util_fetch__WEBPACK_IMPORTED_MODULE_13__["fetchJson"](url, options);
};

var dataProvider = Object(ra_data_json_server__WEBPACK_IMPORTED_MODULE_2__["default"])('/api', httpClient); //const uploadCapableDataProvider = addUploadFeature(dataProvider);

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Admin"], {
    locale: "zh",
    i18nProvider: i18nProvider,
    title: "\u6211\u662F\u901A\u4FE1\u5175-\u6570\u636E\u7BA1\u7406\u7CFB\u7EDF",
    dataProvider: dataProvider,
    loginPage: _MyLogin__WEBPACK_IMPORTED_MODULE_12__["default"],
    authProvider: _authProvider__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Resource"], {
    options: {
      label: '人员信息'
    },
    name: "empl",
    list: _employee__WEBPACK_IMPORTED_MODULE_9__["EmployeeList"],
    create: _employee__WEBPACK_IMPORTED_MODULE_9__["EmployeeCreate"],
    edit: _employee__WEBPACK_IMPORTED_MODULE_9__["EmployeeEdit"],
    icon: _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Resource"], {
    options: {
      label: '单位信息'
    },
    name: "dept",
    list: _department__WEBPACK_IMPORTED_MODULE_10__["DeptList"],
    create: _department__WEBPACK_IMPORTED_MODULE_10__["DeptCreate"],
    edit: _department__WEBPACK_IMPORTED_MODULE_10__["DeptEdit"],
    icon: _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Resource"], {
    options: {
      label: '人员类别'
    },
    name: "posi",
    list: _position__WEBPACK_IMPORTED_MODULE_11__["PosiList"],
    create: _position__WEBPACK_IMPORTED_MODULE_11__["PosiCreate"],
    edit: _position__WEBPACK_IMPORTED_MODULE_11__["PosiEdit"],
    icon: _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/LoginForm.js":
/*!**************************!*\
  !*** ./src/LoginForm.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ra_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ra-core */ "./node_modules/ra-core/esm/index.js");



var _jsxFileName = "E:\\Project\\JS\\reactjs\\helloworld - \u526F\u672C\\src\\LoginForm.js";












var styles = function styles() {
  return {
    form: {
      padding: '0 1em 1em 1em'
    },
    input: {
      marginTop: '1em'
    },
    button: {
      width: '100%'
    }
  };
}; // see http://redux-form.com/6.4.3/examples/material-ui/


var renderInput = function renderInput(_ref) {
  var _ref$meta = _ref.meta;
  _ref$meta = _ref$meta === void 0 ? {} : _ref$meta;

  var touched = _ref$meta.touched,
      error = _ref$meta.error,
      inputProps = Object(E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _ref.input),
      props = Object(E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["meta", "input"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a, Object.assign({
    error: !!(touched && error),
    helperText: touched && error
  }, inputProps, props, {
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

var login = function login(auth, dispatch, _ref2) {
  var redirectTo = _ref2.redirectTo;
  return dispatch(Object(ra_core__WEBPACK_IMPORTED_MODULE_13__["userLogin"])(auth, redirectTo));
};

var LoginForm = function LoginForm(_ref3) {
  var classes = _ref3.classes,
      isLoading = _ref3.isLoading,
      handleSubmit = _ref3.handleSubmit,
      translate = _ref3.translate;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: handleSubmit(login),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
    id: "username",
    name: "username",
    component: renderInput,
    label: translate('ra.auth.username'),
    disabled: isLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
    id: "password",
    name: "password",
    component: renderInput,
    label: translate('ra.auth.password'),
    type: "password",
    disabled: isLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "raised",
    type: "submit",
    color: "primary",
    disabled: isLoading,
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, isLoading && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_11___default.a, {
    size: 25,
    thickness: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), translate('ra.auth.sign_in'))));
};

LoginForm.propTypes = Object(E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, redux_form__WEBPACK_IMPORTED_MODULE_5__["propTypes"], {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  redirectTo: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoading: state.admin.loading > 0
  };
};

var enhance = recompose_compose__WEBPACK_IMPORTED_MODULE_7___default()(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(styles), ra_core__WEBPACK_IMPORTED_MODULE_13__["translate"], Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps), Object(redux_form__WEBPACK_IMPORTED_MODULE_5__["reduxForm"])({
  form: 'signIn',
  validate: function validate(values, props) {
    var errors = {};
    var translate = props.translate;
    if (!values.username) errors.username = translate('ra.validation.required');
    if (!values.password) errors.password = translate('ra.validation.required');
    return errors;
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (enhance(LoginForm));

/***/ }),

/***/ "./src/MyLogin.js":
/*!************************!*\
  !*** ./src/MyLogin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Lock */ "./node_modules/@material-ui/icons/Lock.js");
/* harmony import */ var _material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LoginForm */ "./src/LoginForm.js");

var _jsxFileName = "E:\\Project\\JS\\reactjs\\helloworld - \u526F\u672C\\src\\MyLogin.js";







 // import Notification from '../layout/Notification';
// import DefaultLoginForm from './LoginForm';

var styles = function styles(theme) {
  return {
    main: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      height: '1px',
      alignItems: 'center',
      justifyContent: 'flex-start',
      background: 'url(/background.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    card: {
      minWidth: 300,
      marginTop: '6em'
    },
    avatar: {
      margin: '1em',
      display: 'flex',
      justifyContent: 'center'
    },
    title: {
      height: 80,
      marginTop: '2em',
      alignItems: 'center',
      fontSize: 38,
      color: '#fff'
    },
    icon: {
      backgroundColor: theme.palette.secondary[500]
    }
  };
};

var sanitizeRestProps = function sanitizeRestProps(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      location = _ref.location,
      title = _ref.title,
      array = _ref.array,
      theme = _ref.theme,
      staticContext = _ref.staticContext,
      rest = Object(E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["classes", "className", "location", "title", "array", "theme", "staticContext"]);

  return rest;
};
/**
 * A standalone login page, to serve as authentication gate to the admin
 *
 * Expects the user to enter a login and a password, which will be checked
 * by the `authProvider` using the AUTH_LOGIN verb. Redirects to the root page
 * (/) upon success, otherwise displays an authentication error message.
 *
 * Copy and adapt this component to implement your own login logic
 * (e.g. to authenticate via email or facebook or anything else).
 *
 * @example
 *     import MyLoginPage from './MyLoginPage';
 *     const App = () => (
 *         <Admin loginPage={MyLoginPage} authProvider={authProvider}>
 *             ...
 *        </Admin>
 *     );
 */


var Login = function Login(_ref2) {
  var classes = _ref2.classes,
      className = _ref2.className,
      loginForm = _ref2.loginForm,
      rest = Object(E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["classes", "className", "loginForm"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object.assign({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.main, className)
  }, sanitizeRestProps(rest), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\u6211\u662F\u901A\u4FE1\u5175-\u6570\u636E\u7BA1\u7406\u7CFB\u7EDF")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Lock__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), loginForm));
};

Login.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  authProvider: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  input: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  previousRoute: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  loginForm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element
};
Login.defaultProps = {
  loginForm: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(Login));

/***/ }),

/***/ "./src/authProvider.js":
/*!*****************************!*\
  !*** ./src/authProvider.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (type, params) {
  // called when the user attempts to log in
  if (type === react_admin__WEBPACK_IMPORTED_MODULE_0__["AUTH_LOGIN"]) {
    console.log("AUTH_LOGIN");
    var username = params.username,
        password = params.password;
    superagent__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login').send('username=' + username).send('password=' + password) //.buffer(true)
    .end(function (err, res) {
      if (err) {
        return Promise.reject(err.toString());
      } else {
        if (res.text.indexOf("bearer") > -1) {
          console.log("auth success..");
          localStorage.setItem('token', res.text);
          return Promise.resolve();
        } else {
          //alert('yay got ' + JSON.stringify(res.text));
          return Promise.reject("Login failed");
        }
      }
    });
  } // called when the user clicks on the logout button
  else if (type === react_admin__WEBPACK_IMPORTED_MODULE_0__["AUTH_LOGOUT"]) {
      console.log("AUTH_LOGOUT");
      localStorage.removeItem('token');
      return Promise.resolve();
    } // called when the API returns an error
    else if (type === react_admin__WEBPACK_IMPORTED_MODULE_0__["AUTH_ERROR"]) {
        console.log("AUTH_ERROR)");
        var status = params.status;

        if (status === 401 || status === 403) {
          //localStorage.removeItem('token');
          return Promise.reject();
        }

        return Promise.resolve();
      } // called when the user navigates to a new location
      else if (type === react_admin__WEBPACK_IMPORTED_MODULE_0__["AUTH_CHECK"]) {
          console.log("AUTH_CHECK"); // if(localStorage.getItem('token') === null){
          //     return Promise.reject({ redirectTo: '/login' });
          // }
          // else{
          //     return Promise.resolve();
          // }
          //return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/login' });
          //return Promise.resolve();
          // else if (type === AUTH_CHECK) {
          //     console.log("AUTH_CHECK)");
          //
          //     return localStorage.getItem('token')
          //         ? Promise.resolve()
          //         : Promise.reject();
          // }
        } //console.log("auth end..");
  //return Promise.resolve();
  //return Promise.reject('Unknown method');

});

/***/ }),

/***/ "./src/department.js":
/*!***************************!*\
  !*** ./src/department.js ***!
  \***************************/
/*! exports provided: DeptList, DeptCreate, DeptEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeptList", function() { return DeptList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeptCreate", function() { return DeptCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeptEdit", function() { return DeptEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");
var _jsxFileName = "E:\\Project\\JS\\reactjs\\helloworld - \u526F\u672C\\src\\department.js";


var DeptList = function DeptList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["List"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    small: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SimpleList"], {
      primaryText: function primaryText(record) {
        return record.name;
      },
      secondaryText: function secondaryText(record) {
        return record.description;
      } // tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }),
    medium: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Datagrid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "\u540D\u79F0",
      source: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "\u63CF\u8FF0",
      source: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["EditButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

var DeptCreateToolbar = function DeptCreateToolbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SaveButton"], {
    label: "\u4FDD\u5B58",
    redirect: "/dept",
    submitOnEnter: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
};

var DeptCreate = function DeptCreate(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Create"], Object.assign({
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "\u65B0\u589E\u5355\u4F4D\u4FE1\u606F")
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SimpleForm"], {
    validate: validateDept,
    toolbar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DeptCreateToolbar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    label: "\u540D\u79F0",
    source: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["LongTextInput"], {
    label: "\u63CF\u8FF0",
    source: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })));
};

var DeptTitle = function DeptTitle(_ref) {
  var record = _ref.record;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u7F16\u8F91 ", record ? "\"".concat(record.name, "\"") : '');
};

var validateDept = function validateDept(values) {
  var errors = {};

  if (!values.name) {
    errors.name = ['名称不能为空'];
  }

  if (!values.description) {
    errors.description = ['描述不能为空'];
  }

  return errors;
};

var DeptEdit = function DeptEdit(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Edit"], Object.assign({
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DeptTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SimpleForm"], {
    validate: validateDept,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    label: "\u540D\u79F0",
    source: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["LongTextInput"], {
    label: "\u63CF\u8FF0",
    source: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })));
};

/***/ }),

/***/ "./src/employee/AvatarField.js":
/*!*************************************!*\
  !*** ./src/employee/AvatarField.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Project\\JS\\reactjs\\helloworld - \u526F\u672C\\src\\employee\\AvatarField.js";



var AvatarField = function AvatarField(_ref) {
  var record = _ref.record,
      size = _ref.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    src: "/api/avatar/".concat(record.id, ".jpg?size=").concat(size, "x").concat(size),
    size: size / 3,
    style: {
      width: size / 3,
      height: size / 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
};

AvatarField.defaultProps = {
  size: 96
};
/* harmony default export */ __webpack_exports__["default"] = (AvatarField);

/***/ }),

/***/ "./src/employee/EmployeeLinkField.js":
/*!*******************************************!*\
  !*** ./src/employee/EmployeeLinkField.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");
/* harmony import */ var _FullNameField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FullNameField */ "./src/employee/FullNameField.js");
var _jsxFileName = "E:\\Project\\JS\\reactjs\\helloworld - \u526F\u672C\\src\\employee\\EmployeeLinkField.js";




var EmployeeLinkField = function EmployeeLinkField(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/empl/".concat(props.record.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FullNameField__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })));
};

EmployeeLinkField.defaultProps = {
  source: 'id',
  addLabel: true
};
/* harmony default export */ __webpack_exports__["default"] = (EmployeeLinkField);

/***/ }),

/***/ "./src/employee/FullNameField.js":
/*!***************************************!*\
  !*** ./src/employee/FullNameField.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AvatarField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AvatarField */ "./src/employee/AvatarField.js");
/* harmony import */ var recompose_pure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/pure */ "./node_modules/recompose/pure.js");
/* harmony import */ var recompose_pure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_pure__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\Project\\JS\\reactjs\\helloworld - \u526F\u672C\\src\\employee\\FullNameField.js";




var FullNameField = function FullNameField(_ref) {
  var _ref$record = _ref.record,
      record = _ref$record === void 0 ? {} : _ref$record,
      size = _ref.size;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AvatarField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    record: record,
    size: size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), "\xA0", record.name);
};

var PureFullNameField = recompose_pure__WEBPACK_IMPORTED_MODULE_2___default()(FullNameField);
PureFullNameField.defaultProps = {
  source: 'name',
  label: '姓名'
};
/* harmony default export */ __webpack_exports__["default"] = (PureFullNameField);

/***/ }),

/***/ "./src/employee/UploadImageField.js":
/*!******************************************!*\
  !*** ./src/employee/UploadImageField.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/lib/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "E:\\Project\\JS\\reactjs\\helloworld - \u526F\u672C\\src\\employee\\UploadImageField.js";


 //import FlatButton from '@material-ui/core/FlatButton';






var UploadImageField =
/*#__PURE__*/
function (_Component) {
  Object(E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(UploadImageField, _Component);

  function UploadImageField() {
    var _this;

    Object(E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UploadImageField);

    _this = Object(E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(UploadImageField).call(this));

    _this.onDrop = function (acceptedFiles, rejectedFiles) {
      _this.setState({
        showProgress: true
      });

      var record = _this.props.record; //console.log(record);
      // POST to a test endpoint for demo purposes

      var req = superagent__WEBPACK_IMPORTED_MODULE_11___default.a.post('/api/avatar/upload/' + record.id);
      acceptedFiles.forEach(function (file) {
        req.attach("file", file);
      });
      var token = localStorage.getItem('token');
      req.set("Authorization", "".concat(token));
      req.set("enctype", "multipart/form-data");
      req.end(function (err, res) {
        //alert('yay got ' + JSON.stringify(res));
        if (err) {
          alert(err);

          _this.setState({
            showProgress: false
          });
        } else {
          _this.setState({
            imageUrl: "/api/avatar/" + record.id + ".jpg?q=" + new Date(),
            showProgress: false,
            showNewPic: true
          });
        }
      });
    };

    _this.imageInputOption = {
      //onDropAccepted: this.onDrop
      onDrop: _this.onDrop
    };

    _this.handleClick = function () {
      var _this$props = _this.props,
          push = _this$props.push,
          record = _this$props.record,
          showNotification = _this$props.showNotification;

      var updatedRecord = Object(E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, record, {
        is_approved: true
      });

      fetch("/comments/".concat(record.id), {
        method: 'PUT',
        body: updatedRecord
      }).then(function () {
        showNotification('Comment approved');
        push('/comments');
      }).catch(function (e) {
        console.error(e);
        showNotification('Error: comment not approved', 'warning');
      });
    };

    _this.state = {
      imageUrl: "/default.jpg",
      showProgress: false,
      showNewPic: false
    };
    return _this;
  }

  Object(E_Project_JS_reactjs_helloworld_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(UploadImageField, [{
    key: "render",
    value: function render() {
      // this.setState({
      //     imageUrl: "/" + record.id + "jpg"
      // });
      var record = this.props.record;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_9__["ImageInput"], {
        options: this.imageInputOption,
        source: "pictures",
        label: "\u7167\u7247\uFF1A\u5927\u5C0F\u8981\u6C42\u5C0F\u4E8E1MB\uFF0C\u5426\u5219\u4E0D\u663E\u793A\u3002",
        multiple: false,
        maxSize: 1048000,
        accept: "image/*",
        placeholder: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, "\u5C06\u56FE\u7247\u62D6\u62FD\u81F3\u6B64\u6216\u70B9\u51FB\u4E0A\u4F20"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_9__["ImageField"], {
        source: "srcc",
        title: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, this.state.showProgress ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("progress", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), " ") : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, this.state.showNewPic ? null : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/api/avatar/".concat(record.id, ".jpg"),
        alt: "",
        height: "200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), this.state.showNewPic ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: this.state.imageUrl,
        alt: "",
        height: "200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }) : null));
    }
  }]);

  return UploadImageField;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

UploadImageField.propTypes = {
  push: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  record: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  showNotification: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, {
  showNotification: react_admin__WEBPACK_IMPORTED_MODULE_9__["showNotification"],
  push: react_router_redux__WEBPACK_IMPORTED_MODULE_10__["push"]
})(UploadImageField));

/***/ }),

/***/ "./src/employee/index.js":
/*!*******************************!*\
  !*** ./src/employee/index.js ***!
  \*******************************/
/*! exports provided: EmployeeList, EmployeeCreate, EmployeeEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeList", function() { return EmployeeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreate", function() { return EmployeeCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEdit", function() { return EmployeeEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");
/* harmony import */ var _EmployeeLinkField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmployeeLinkField */ "./src/employee/EmployeeLinkField.js");
/* harmony import */ var _UploadImageField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UploadImageField */ "./src/employee/UploadImageField.js");
var _jsxFileName = "E:\\Project\\JS\\reactjs\\helloworld - \u526F\u672C\\src\\employee\\index.js";





var EmplFilter = function EmplFilter(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Filter"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    label: "\u641C\u7D22",
    source: "q",
    alwaysOn: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["ReferenceInput"], {
    label: "\u4EBA\u5458\u7C7B\u522B",
    source: "pos_id",
    reference: "posi",
    allowEmpty: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SelectInput"], {
    optionText: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["ReferenceInput"], {
    label: "\u6240\u5C5E\u5355\u4F4D",
    source: "dept_id",
    reference: "dept",
    allowEmpty: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SelectInput"], {
    optionText: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), sexInput, nationInput, partyInput);
};

var EmployeeList = function EmployeeList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["List"], Object.assign({
    filters: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EmplFilter, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    small: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SimpleList"], {
      primaryText: function primaryText(record) {
        return record.name;
      },
      secondaryText: function secondaryText(record) {
        return record.position.name;
      },
      tertiaryText: function tertiaryText(record) {
        return record.department.name;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }),
    medium: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Datagrid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmployeeLinkField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "\u6027\u522B",
      source: "sex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["DateField"], {
      label: "\u751F\u65E5",
      source: "birthday",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "\u6C11\u65CF",
      source: "nation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "\u653F\u6CBB\u9762\u8C8C",
      source: "party",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "\u7C4D\u8D2F",
      source: "location",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["DateField"], {
      label: "\u5165\u4F0D\u65F6\u95F4",
      source: "armyday",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["DateField"], {
      label: "\u8C03\u5165\u65F6\u95F4",
      source: "workday",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["ReferenceField"], {
      label: "\u4EBA\u5458\u7C7B\u522B",
      source: "pos_id",
      reference: "posi",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      source: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["ReferenceField"], {
      label: "\u6240\u5C5E\u5355\u4F4D",
      source: "dept_id",
      reference: "dept",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      source: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["EditButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};
var postDefaultValue = {
  nation: "汉族",
  party: "中共党员",
  sex: "男"
};

var validateEmploy = function validateEmploy(values) {
  var errors = {};

  if (!values.name) {
    errors.name = ['姓名不能为空'];
  }

  if (!values.birthday) {
    errors.birthday = ['出生时间不能为空'];
  }

  if (!values.location) {
    errors.location = ['籍贯不能为空'];
  }

  if (!values.armyday) {
    errors.armyday = ['入伍时间不能为空'];
  }

  if (!values.workday) {
    errors.workday = ['调入时间不能为空'];
  }

  if (!values.pos_id) {
    errors.pos_id = ['人员类别不能为空'];
  }

  if (!values.dept_id) {
    errors.dept_id = ['部门不能为空'];
  }

  return errors;
};

var PostCreateToolbar = function PostCreateToolbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SaveButton"], {
    label: "\u4FDD\u5B58\u5E76\u8FD4\u56DE",
    redirect: "/empl",
    submitOnEnter: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SaveButton"], {
    label: "\u4FDD\u5B58\u5E76\u7EE7\u7EED",
    redirect: false,
    submitOnEnter: false,
    variant: "flat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }));
};

var CreateEmplTitle = function CreateEmplTitle(_ref) {
  var record = _ref.record;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "\u65B0\u589E\u4EBA\u5458");
};

var nationInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SelectInput"], {
  label: "\u6C11\u65CF",
  source: "nation",
  choices: [{
    id: '汉族',
    name: '汉族'
  }, {
    id: '蒙古族',
    name: '蒙古族'
  }, {
    id: '回族',
    name: '回族'
  }, {
    id: '藏族',
    name: '藏族'
  }, {
    id: '维吾尔族',
    name: '维吾尔族'
  }, {
    id: '苗族',
    name: '苗族'
  }, {
    id: '彝族',
    name: '彝族'
  }, {
    id: '壮族',
    name: '壮族'
  }, {
    id: '布依族',
    name: '布依族'
  }, {
    id: '朝鲜族',
    name: '朝鲜族'
  }, {
    id: '满族',
    name: '满族'
  }, {
    id: '侗族',
    name: '侗族'
  }, {
    id: '瑶族',
    name: '瑶族'
  }, {
    id: '白族',
    name: '白族'
  }, {
    id: '土家族',
    name: '土家族'
  }, {
    id: '哈尼族',
    name: '哈尼族'
  }, {
    id: '哈萨克族',
    name: '哈萨克族'
  }, {
    id: '傣族',
    name: '傣族'
  }, {
    id: '黎族',
    name: '黎族'
  }, {
    id: '傈僳族',
    name: '傈僳族'
  }, {
    id: '佤族',
    name: '佤族'
  }, {
    id: '畲族',
    name: '畲族'
  }, {
    id: '拉祜族',
    name: '拉祜族'
  }, {
    id: '水族',
    name: '水族'
  }, {
    id: '东乡族',
    name: '东乡族'
  }, {
    id: '纳西族',
    name: '纳西族'
  }, {
    id: '景颇族',
    name: '景颇族'
  }, {
    id: '柯尔克孜族',
    name: '柯尔克孜族'
  }, {
    id: '土族',
    name: '土族'
  }, {
    id: '达斡尔族',
    name: '达斡尔族'
  }, {
    id: '仫佬族',
    name: '仫佬族'
  }, {
    id: '羌族',
    name: '羌族'
  }, {
    id: '布朗族',
    name: '布朗族'
  }, {
    id: '撒拉族',
    name: '撒拉族'
  }, {
    id: '毛南族',
    name: '毛南族'
  }, {
    id: '仡佬族',
    name: '仡佬族'
  }, {
    id: '锡伯族',
    name: '锡伯族'
  }, {
    id: '阿昌族',
    name: '阿昌族'
  }, {
    id: '普米族',
    name: '普米族'
  }, {
    id: '塔吉克族',
    name: '塔吉克族'
  }, {
    id: '怒族',
    name: '怒族'
  }, {
    id: '乌兹别克族',
    name: '乌兹别克族'
  }, {
    id: '俄罗斯族',
    name: '俄罗斯族'
  }, {
    id: '鄂温克族',
    name: '鄂温克族'
  }, {
    id: '德昂族',
    name: '德昂族'
  }, {
    id: '保安族',
    name: '保安族'
  }, {
    id: '裕固族',
    name: '裕固族'
  }, {
    id: '京族',
    name: '京族'
  }, {
    id: '塔塔尔族',
    name: '塔塔尔族'
  }, {
    id: '独龙族',
    name: '独龙族'
  }, {
    id: '鄂伦春族',
    name: '鄂伦春族'
  }, {
    id: '赫哲族',
    name: '赫哲族'
  }, {
    id: '门巴族',
    name: '门巴族'
  }, {
    id: '珞巴族',
    name: '珞巴族'
  }, {
    id: '基诺族',
    name: '基诺族'
  }, {
    id: '高山族',
    name: '高山族'
  }],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
});
var partyInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SelectInput"], {
  label: "\u653F\u6CBB\u9762\u8C8C",
  source: "party",
  choices: [{
    id: '中共党员',
    name: '中共党员'
  }, {
    id: '中共预备党员',
    name: '中共预备党员'
  }, {
    id: '共青团员',
    name: '共青团员'
  }, {
    id: '群众',
    name: '群众'
  }, {
    id: '民革党员',
    name: '民革党员'
  }, {
    id: '民盟盟员',
    name: '民盟盟员'
  }, {
    id: '民建会员',
    name: '民建会员'
  }, {
    id: '民进会员',
    name: '民进会员'
  }, {
    id: '农工党党员',
    name: '农工党党员'
  }, {
    id: '致公党党员',
    name: '致公党党员'
  }, {
    id: '九三学社社员',
    name: '九三学社社员'
  }, {
    id: '台盟盟员',
    name: '台盟盟员'
  }, {
    id: '无党派人士',
    name: '无党派人士'
  }],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176
  },
  __self: undefined
});
var sexInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SelectInput"], {
  label: "\u6027\u522B",
  source: "sex",
  choices: [{
    id: '男',
    name: '男'
  }, {
    id: '女',
    name: '女'
  }],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191
  },
  __self: undefined
});
var EmployeeCreate = function EmployeeCreate(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Create"], Object.assign({
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateEmplTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    })
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TabbedForm"], {
    defaultValue: postDefaultValue,
    validate: validateEmploy,
    toolbar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostCreateToolbar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["FormTab"], {
    label: "\u57FA\u672C\u4FE1\u606F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    label: "\u59D3\u540D",
    source: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), sexInput, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["DateInput"], {
    label: "\u51FA\u751F\u5E74\u6708",
    source: "birthday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }), nationInput, partyInput, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    label: "\u7C4D\u8D2F",
    source: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["FormTab"], {
    label: "\u5DE5\u4F5C\u4FE1\u606F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["DateInput"], {
    label: "\u5165\u4F0D\u65F6\u95F4",
    source: "armyday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["DateInput"], {
    label: "\u8C03\u5165\u65F6\u95F4",
    source: "workday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["ReferenceInput"], {
    label: "\u4EBA\u5458\u7C7B\u522B",
    source: "pos_id",
    reference: "posi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SelectInput"], {
    optionText: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["ReferenceInput"], {
    label: "\u6240\u5C5E\u5355\u4F4D",
    source: "dept_id",
    reference: "dept",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SelectInput"], {
    optionText: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  })))));
};

var EditEmplTitle = function EditEmplTitle(_ref2) {
  var record = _ref2.record;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "\u66F4\u65B0\u4FE1\u606F\uFF1A ", record ? "\"".concat(record.name, "\"") : '');
};

var EmployeeEdit = function EmployeeEdit(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Edit"], Object.assign({
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditEmplTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    })
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TabbedForm"], {
    validate: validateEmploy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["FormTab"], {
    label: "\u57FA\u672C\u4FE1\u606F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    label: "\u59D3\u540D",
    source: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }), sexInput, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["DateInput"], {
    label: "\u51FA\u751F\u5E74\u6708",
    source: "birthday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }), nationInput, partyInput, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    label: "\u7C4D\u8D2F",
    source: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["FormTab"], {
    label: "\u5DE5\u4F5C\u4FE1\u606F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["DateInput"], {
    label: "\u5165\u4F0D\u65F6\u95F4",
    source: "armyday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["DateInput"], {
    label: "\u8C03\u5165\u65F6\u95F4",
    source: "workday",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["ReferenceInput"], {
    label: "\u4EBA\u5458\u7C7B\u522B",
    source: "pos_id",
    reference: "posi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SelectInput"], {
    optionText: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["ReferenceInput"], {
    label: "\u6240\u5C5E\u5355\u4F4D",
    source: "dept_id",
    reference: "dept",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SelectInput"], {
    optionText: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["FormTab"], {
    label: "\u7167\u7247",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UploadImageField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }))));
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "E:\\Project\\JS\\reactjs\\helloworld - \u526F\u672C\\src\\index.js";


 //import 'process.env.PUBLIC_URL/index.css';



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/position.js":
/*!*************************!*\
  !*** ./src/position.js ***!
  \*************************/
/*! exports provided: PosiList, PosiCreate, PosiEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosiList", function() { return PosiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosiCreate", function() { return PosiCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosiEdit", function() { return PosiEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");
var _jsxFileName = "E:\\Project\\JS\\reactjs\\helloworld - \u526F\u672C\\src\\position.js";


var PosiList = function PosiList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["List"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Responsive"], {
    small: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SimpleList"], {
      primaryText: function primaryText(record) {
        return record.name;
      },
      secondaryText: function secondaryText(record) {
        return record.description;
      } // tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }),
    medium: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Datagrid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "\u540D\u79F0",
      source: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "\u63CF\u8FF0",
      source: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["EditButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

var PosiCreateToolbar = function PosiCreateToolbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], Object.assign({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SaveButton"], {
    label: "\u4FDD\u5B58",
    redirect: "/posi",
    submitOnEnter: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
};

var PosiCreate = function PosiCreate(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Create"], Object.assign({}, props, {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "\u65B0\u589E\u4EBA\u5458\u7C7B\u522B\u4FE1\u606F"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SimpleForm"], {
    validate: validatePos,
    toolbar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PosiCreateToolbar, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    label: "\u540D\u79F0",
    source: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["LongTextInput"], {
    label: "\u63CF\u8FF0",
    source: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })));
};

var PosiTitle = function PosiTitle(_ref) {
  var record = _ref.record;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u4EBA\u5458\u7C7B\u522B\uFF1A ", record ? "\"".concat(record.name, "\"") : '');
};

var validatePos = function validatePos(values) {
  var errors = {};

  if (!values.name) {
    errors.name = ['名称不能为空'];
  }

  if (!values.description) {
    errors.description = ['描述不能为空'];
  }

  return errors;
};

var PosiEdit = function PosiEdit(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Edit"], Object.assign({
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PosiTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SimpleForm"], {
    validate: validatePos,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    label: "\u540D\u79F0",
    source: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["LongTextInput"], {
    label: "\u63CF\u8FF0",
    source: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })));
};

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.'); // Execute callback

            if (config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\Project\JS\reactjs\helloworld - 副本\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! E:\Project\JS\reactjs\helloworld - 副本\src\index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map