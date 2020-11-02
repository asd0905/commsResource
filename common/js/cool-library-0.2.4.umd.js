(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('moment'), require('jquery')) :
    typeof define === 'function' && define.amd ? define(['exports', 'moment', 'jquery'], factory) :
    (global = global || self, factory(global.CoolLibrary = {}, global.moment, global.$));
}(this, function (exports, moment, $$1) { 'use strict';

    moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

    /**
     * DateHelper
     *
     * moment 라이브러리에 의존함
     */
    var DateHelper = /** @class */ (function () {
        function DateHelper() {
        }
        /**
         * date 를 하루의 끝시간으로 설정
         * @param {string} dateStr
         * @returns {string}
         */
        DateHelper.prototype.setEndDateToISOString = function (dateStr) {
            var date = moment(dateStr);
            var h = 23;
            var m = 59;
            var s = 59;
            date.hour(h);
            date.minute(m);
            date.second(s);
            return date.toISOString();
        };
        return DateHelper;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var MEMBER_URL = 'https://member.coolschool.co.kr';
    var DEV_MEMBER_URL = 'https://dev-member.coolschool.co.kr';
    var LOCAL_MEMBER_URL = 'https://local-member.coolschool.co.kr';
    var COOLSCHOOL_URL = 'https://www.coolschool.co.kr';
    var DEV_COOLSCHOOL_URL = 'https://dev.coolschool.co.kr';
    var LOCAL_COOLSCHOOL_URL = 'https://local.coolschool.co.kr';
    var COOL_LOGIN_URL = MEMBER_URL + '/login';
    var DEV_COOL_LOGIN_URL = DEV_MEMBER_URL + '/login';
    var LOCAL_COOL_LOGIN_URL = LOCAL_MEMBER_URL + '/login';
    var COOL_LOGIN_CALLBACK_URL = window.location.protocol + '//' + window.location.host + '/callback';
    var COOL_LOGIN_CALLBACK_FOR_SAMSTORY_URL = window.location.protocol + '//' + window.location.host + '/login';
    var COOL_LOGIN_CALLBACK_FOR_EMOTICON_URL = window.location.protocol + '//' + window.location.host + '/login';
    var COOL_LOGIN_CHECK_URL = MEMBER_URL + "/loginCheck";
    var DEV_COOL_LOGIN_CHECK_URL = DEV_MEMBER_URL + "/loginCheck";
    var LOCAL_COOL_LOGIN_CHECK_URL = LOCAL_MEMBER_URL + "/loginCheck";
    var COOLSCHOOL_CALLBACK_URL = 'https://www.coolschool.co.kr/callback';
    var DEV_COOLSCHOOL_CALLBACK_URL = 'https://dev.coolschool.co.kr/callback';
    var LOCAL_COOLSCHOOL_CALLBACK_URL = 'https://local.coolschool.co.kr/callback';
    var SEARCH_URL = '//search.coolschool.co.kr';
    var DEV_SEARCH_URL = '//dev-search.coolschool.co.kr';
    var LOCAL_SEARCH_URL = '//local-search.coolschool.co.kr';
    var FN_LOGIN_URL = function (url) {
        return url + "/login";
    };
    var FN_LOGOUT_URL = function (url) {
        return url + "/logout?client_id=:client_id";
    };
    var FN_LOGOUT_PROC_URL = function (url) {
        return url + "/logoutProc";
    };

    var EnvHelper = /** @class */ (function () {
        function EnvHelper() {
        }
        EnvHelper.prototype.getUrl = function (env, serverName, fnUrl) {
            var url = '';
            switch (env) {
                case "prod" /* PROD */:
                    switch (serverName) {
                        case "member" /* MEMBER */:
                            url = MEMBER_URL;
                            break;
                        case "search" /* SEARCH */:
                            url = SEARCH_URL;
                            break;
                        case "coolschool" /* COOLSCHOOL */:
                            url = COOLSCHOOL_URL;
                            break;
                    }
                    break;
                case "dev" /* DEV */:
                    switch (serverName) {
                        case "member" /* MEMBER */:
                            url = DEV_MEMBER_URL;
                            break;
                        case "search" /* SEARCH */:
                            url = DEV_SEARCH_URL;
                            break;
                        case "coolschool" /* COOLSCHOOL */:
                            url = DEV_COOLSCHOOL_URL;
                            break;
                    }
                    break;
                case "local" /* LOCAL */:
                    switch (serverName) {
                        case "member" /* MEMBER */:
                            url = LOCAL_MEMBER_URL;
                            break;
                        case "search" /* SEARCH */:
                            url = LOCAL_SEARCH_URL;
                            break;
                        case "coolschool" /* COOLSCHOOL */:
                            url = LOCAL_COOLSCHOOL_URL;
                            break;
                    }
                    break;
            }
            if (fnUrl) {
                return fnUrl(url);
            }
            return url;
        };
        return EnvHelper;
    }());

    var StorageHelper = /** @class */ (function () {
        function StorageHelper() {
        }
        /**
         * 쿠키 저장
         * @param cname
         * @param cvalue
         * @param exdays
         */
        StorageHelper.prototype.setCookie = function (cname, cvalue, exdays) {
            var d = new Date();
            // tslint:disable-next-line
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = 'expires=' + d.toUTCString();
            document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
        };
        /**
         * 쿠키 저장 시간 기준
         * @param cname
         * @param cvalue
         * @param hour
         */
        StorageHelper.prototype.setCookieHour = function (cname, cvalue, hour) {
            var d = new Date();
            // tslint:disable-next-line
            d.setTime(d.getTime() + (hour * 60 * 60 * 1000));
            var expires = 'expires=' + d.toUTCString();
            document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
        };
        /**
         * 쿠키가져온기
         * @param cname
         */
        StorageHelper.prototype.getCookie = function (cname) {
            var name = cname + '=';
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            // tslint:disable-next-line
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        };
        /**
         * 세션 스토리지에 값 저장
         * @param sname  세션 스토리지에 저장할 이름
         * @param svalue 세션 스토리지에 저장할 값
         */
        StorageHelper.prototype.setSessionStorage = function (sname, svalue) {
            sessionStorage.setItem(sname, svalue);
        };
        /**
         * 세션 스토리지에서 값을 가져온다.
         * @param sname
         * @return string  이름에 해당하는 값을 반환
         */
        StorageHelper.prototype.getSessionStorage = function (sname) {
            return sessionStorage.getItem(sname);
        };
        return StorageHelper;
    }());

    var UrlHelper = /** @class */ (function () {
        function UrlHelper() {
        }
        /**
         * location 의 param 을 가져온다
         * @param {string} key
         * @returns {string} value
         */
        UrlHelper.prototype.getQueryParam = function (key) {
            return this.getQueryParams()[key] || '';
        };
        /**
         * location params 정보를 가져온다
         * @param {string} queryString
         * @returns {any} params
         */
        UrlHelper.prototype.getQueryParams = function (queryString) {
            if (queryString === void 0) { queryString = ''; }
            var qs = queryString;
            qs = qs || document.location.href.split('?')[1] || document.location.search;
            qs = qs.split('+').join(' ');
            var params = {};
            var tokens;
            var re = /[?&]?([^=]+)=([^&]*)/g;
            var sec = 2;
            // noinspection TsLint
            // tslint:disable-next-line
            while ((tokens = re.exec(qs))) {
                params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[sec]);
            }
            return params;
        };
        /**
         * 하나의 hash 를 가져온다
         * @param url
         */
        UrlHelper.prototype.getHashSingleValue = function (url) {
            var hash = url.indexOf('#');
            if (hash === -1) {
                return '';
            }
            return url.substring(hash);
        };
        return UrlHelper;
    }());

    var Login = /** @class */ (function () {
        function Login() {
            this.urlHelper = new UrlHelper();
            this.storageHelper = new StorageHelper();
            this.envHelper = new EnvHelper();
        }
        /**
         * 쿨스쿨 로그인 페이지로 이동
         * @param {string} clientId
         * @param {string} action (선택)
         * @param isDev 개발 URL 사용여부
         */
        Login.prototype.goDefaultCoolLogin = function (clientId, action, env) {
            if (action === void 0) { action = ''; }
            var param = {
                client_id: clientId,
                redirect_uri: COOL_LOGIN_CALLBACK_URL,
                redirect_uri_next: window.location.href,
                do_action: action,
            };
            var loginURL = this.envHelper.getUrl(env, "member" /* MEMBER */, FN_LOGIN_URL);
            var paramStr = $$1.param(param);
            if (param.redirect_uri_next.search('&') === -1 && action !== '') {
                paramStr = paramStr.replace('&do_action=', '?do_action=');
            }
            window.location.href = loginURL + "?" + paramStr;
        };
        /**
         * 샘스토리용 로그인 페이지로 이동
         * @param clientId
         * @param action
         * @param isDev
         */
        Login.prototype.goCoolLoginForSamstory = function (clientId, action, isDev) {
            if (clientId === void 0) { clientId = ''; }
            if (action === void 0) { action = ''; }
            if (isDev === void 0) { isDev = false; }
            var param = {
                client_id: clientId,
                redirect_uri: COOL_LOGIN_CALLBACK_FOR_SAMSTORY_URL,
                redirect_uri_next: window.location.href,
                do_action: action,
            };
            var loginURL = COOL_LOGIN_URL;
            if (isDev) {
                loginURL = DEV_COOL_LOGIN_URL;
            }
            var paramStr = $$1.param(param);
            if (param.redirect_uri_next.search('&') === -1 && action !== '') {
                paramStr = paramStr.replace('&do_action=', '?do_action=');
            }
            window.location.href = loginURL + "?" + paramStr;
        };
        /**
         * 샘스토리용 next url 지정하여 로그인 페이지 이동
         * @param clientId
         * @param action
         * @param nextUrl
         * @param isDev
         */
        Login.prototype.goCoolLoginNextUrlForSamstory = function (clientId, action, nextUrl, isDev) {
            if (clientId === void 0) { clientId = ''; }
            if (action === void 0) { action = ''; }
            if (isDev === void 0) { isDev = false; }
            var param = {
                client_id: clientId,
                redirect_uri: COOL_LOGIN_CALLBACK_FOR_SAMSTORY_URL,
                redirect_uri_next: nextUrl,
                do_action: action,
            };
            var loginURL = COOL_LOGIN_URL;
            if (isDev) {
                loginURL = DEV_COOL_LOGIN_URL;
            }
            var paramStr = $$1.param(param);
            if (param.redirect_uri_next.search('&') === -1 && action !== '') {
                paramStr = paramStr.replace('&do_action=', '?do_action=');
            }
            window.location.href = loginURL + "?" + paramStr;
        };
        /**
         * 이모티콘용 로그인 페이지로 이동
         * @param clientId
         * @param action
         * @param isDev
         */
        Login.prototype.goCoolLoginForEmoticon = function (clientId, action, isDev) {
            if (clientId === void 0) { clientId = ''; }
            if (action === void 0) { action = ''; }
            if (isDev === void 0) { isDev = false; }
            var param = {
                client_id: clientId,
                redirect_uri: COOL_LOGIN_CALLBACK_FOR_EMOTICON_URL,
                redirect_uri_next: window.location.href,
                do_action: action,
            };
            var loginURL = COOL_LOGIN_URL;
            if (isDev) {
                loginURL = DEV_COOL_LOGIN_URL;
            }
            var paramStr = $$1.param(param);
            if (param.redirect_uri_next.search('&') === -1 && action !== '') {
                paramStr = paramStr.replace('&do_action=', '?do_action=');
            }
            window.location.href = loginURL + "?" + paramStr;
        };
        /**
         * 이모티콘용 next url 지정하여 로그인 페이지 이동
         * @param clientId
         * @param action
         * @param nextUrl
         * @param isDev
         */
        Login.prototype.goCoolLoginNextUrlForEmoticon = function (clientId, action, nextUrl, isDev) {
            if (clientId === void 0) { clientId = ''; }
            if (action === void 0) { action = ''; }
            if (isDev === void 0) { isDev = false; }
            var param = {
                client_id: clientId,
                redirect_uri: COOL_LOGIN_CALLBACK_FOR_EMOTICON_URL,
                redirect_uri_next: nextUrl,
                do_action: action,
            };
            var loginURL = COOL_LOGIN_URL;
            if (isDev) {
                loginURL = DEV_COOL_LOGIN_URL;
            }
            var paramStr = $$1.param(param);
            if (param.redirect_uri_next.search('&') === -1 && action !== '') {
                paramStr = paramStr.replace('&do_action=', '?do_action=');
            }
            window.location.href = loginURL + "?" + paramStr;
        };
        /**
         * 프로필용 로그인 페이지로 이동
         * @param clientId
         * @param action
         * @param isDev
         */
        Login.prototype.goCoolLoginForProfile = function (clientId, action, isDev) {
            if (clientId === void 0) { clientId = ''; }
            if (action === void 0) { action = ''; }
            if (isDev === void 0) { isDev = false; }
            var loginURL = COOL_LOGIN_URL;
            var callbackURL = COOLSCHOOL_CALLBACK_URL;
            if (typeof isDev === 'boolean') {
                if (isDev) {
                    loginURL = DEV_COOL_LOGIN_URL;
                    callbackURL = DEV_COOLSCHOOL_CALLBACK_URL;
                }
            }
            else {
                switch (isDev) {
                    case 'prod': {
                        loginURL = COOL_LOGIN_URL;
                        callbackURL = COOLSCHOOL_CALLBACK_URL;
                        break;
                    }
                    case 'dev': {
                        loginURL = DEV_COOL_LOGIN_URL;
                        callbackURL = DEV_COOLSCHOOL_CALLBACK_URL;
                        break;
                    }
                    case 'local': {
                        loginURL = LOCAL_COOL_LOGIN_URL;
                        callbackURL = LOCAL_COOLSCHOOL_CALLBACK_URL;
                        break;
                    }
                    default: {
                        loginURL = COOL_LOGIN_URL;
                        callbackURL = COOLSCHOOL_CALLBACK_URL;
                        break;
                    }
                }
            }
            var param = {
                client_id: clientId,
                redirect_uri: callbackURL,
                redirect_uri_next: window.location.href,
                do_action: action,
            };
            var paramStr = $$1.param(param);
            window.location.href = loginURL + "?" + paramStr;
        };
        /**
         * 쿨스쿨 로그인 이후 redirect 처리
         */
        Login.prototype.coolLoginCallbackRedirect = function () {
            var redirectNext = this.urlHelper.getQueryParam('redirect_uri_next');
            var redirect = this.urlHelper.getQueryParam('redirect');
            if (redirect) {
                redirectNext = redirect;
            }
            var doAction = this.urlHelper.getQueryParam('do_action');
            if (redirectNext) {
                if (doAction) {
                    if (redirectNext.indexOf('?') !== -1) {
                        location.href = redirectNext + '&do_action=' + doAction;
                    }
                    else {
                        location.href = redirectNext + '?do_action=' + doAction;
                    }
                }
                else {
                    location.href = redirectNext;
                }
            }
            else {
                location.href = '/';
            }
        };
        /**
         * 통합 계정 로그인 세션이 있는지 검사
         */
        Login.prototype.coolLoginCheck = function (isDev) {
            if (isDev === void 0) { isDev = false; }
            var loginCheckURL = COOL_LOGIN_CHECK_URL;
            if (typeof isDev === 'boolean') {
                if (isDev) {
                    loginCheckURL = DEV_COOL_LOGIN_CHECK_URL;
                }
            }
            else {
                switch (isDev) {
                    case 'prod': {
                        loginCheckURL = COOL_LOGIN_CHECK_URL;
                        break;
                    }
                    case 'dev': {
                        loginCheckURL = DEV_COOL_LOGIN_CHECK_URL;
                        break;
                    }
                    case 'local': {
                        loginCheckURL = LOCAL_COOL_LOGIN_CHECK_URL;
                        break;
                    }
                    default: {
                        loginCheckURL = COOL_LOGIN_CHECK_URL;
                        break;
                    }
                }
            }
            return $$1.ajax({
                method: 'GET',
                dataType: 'jsonp',
                url: loginCheckURL
            });
        };
        /**
         * 통합 계정 로그인 세션이 있는지 검사
         */
        Login.prototype.cooLoginCheck = function (isDev) {
            if (isDev === void 0) { isDev = false; }
            return this.coolLoginCheck(isDev);
        };
        /**
         * 로그아웃 함수
         * @param clientId
         * @param env
         * @param logoutOpts
         */
        Login.prototype.logout = function (clientId, env, logoutOpts) {
            return __awaiter(this, void 0, void 0, function () {
                var logoutUrl, setting, settingResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            logoutUrl = this.envHelper.getUrl(env, "member" /* MEMBER */, FN_LOGOUT_URL);
                            setting = {
                                url: logoutUrl.replace(':client_id', clientId),
                                type: 'GET',
                                contentType: "application/json",
                                dataType: "jsonp",
                            };
                            return [4 /*yield*/, $$1.ajax(setting)];
                        case 1:
                            settingResponse = _a.sent();
                            if (!(settingResponse.result === 'success')) return [3 /*break*/, 6];
                            logoutOpts = logoutOpts || {};
                            if (!(logoutOpts.isLogoutProc === undefined || logoutOpts.isLogoutProc === true)) return [3 /*break*/, 5];
                            if (!!logoutOpts.logoutProcUrl) return [3 /*break*/, 3];
                            return [4 /*yield*/, $$1.get(FN_LOGOUT_PROC_URL("//" + window.location.host))];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, $$1.get(FN_LOGOUT_PROC_URL("" + logoutOpts.logoutProcUrl))];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5:
                            this.storageHelper.setCookie('accessToken', '', -1);
                            this.storageHelper.setCookie('client_id', '', -1);
                            if (logoutOpts.isRestoreLocation === undefined || logoutOpts.isRestoreLocation === true) { // 로그아웃 후 있던 페이지에 머무를 것이냐 말것이냐
                                location.href = "//" + window.location.host + window.location.pathname;
                            }
                            return [2 /*return*/, true];
                        case 6: return [2 /*return*/, false];
                    }
                });
            });
        };
        return Login;
    }());

    var FileHelper = /** @class */ (function () {
        function FileHelper() {
        }
        FileHelper.prototype.getExtension = function (fileName) {
            return fileName.split('.').pop();
        };
        return FileHelper;
    }());

    var Factory = /** @class */ (function () {
        function Factory() {
        }
        Factory.newInstanceLogin = function () {
            return new Login();
        };
        Factory.newInstanceUrlHelper = function () {
            return new UrlHelper();
        };
        Factory.newInstanceDateHelper = function () {
            return new DateHelper();
        };
        Factory.newInstanceFileHelper = function () {
            return new FileHelper();
        };
        return Factory;
    }());

    var SearchHelper = /** @class */ (function () {
        function SearchHelper() {
        }
        /**
         * 페이지 조회 정보를 저장하는 함수
         * @param serviceType
         * @param streamId
         * @param coolIdx
         * @param env
         */
        SearchHelper.prototype.coolPageViewForStream = function (serviceType, subServiceType, streamId, coolIdx, env) {
            if (env === void 0) { env = 'prod'; }
            if (serviceType || streamId) {
                var coolPageViewForStreamUrl = '/api/coolPageView/indexing';
                switch (env) {
                    case 'local':
                        coolPageViewForStreamUrl = LOCAL_SEARCH_URL + coolPageViewForStreamUrl;
                        break;
                    case 'dev':
                        coolPageViewForStreamUrl = DEV_SEARCH_URL + coolPageViewForStreamUrl;
                        break;
                    case 'prod':
                    default:
                        coolPageViewForStreamUrl = SEARCH_URL + coolPageViewForStreamUrl;
                        break;
                }
                var settingsData = {
                    "serviceType": serviceType,
                    "subServiceType": subServiceType,
                    "serviceSeq": streamId,
                    "url": window.location.href
                };
                if (coolIdx) {
                    settingsData.coolIdx = coolIdx;
                }
                var settings = {
                    url: coolPageViewForStreamUrl,
                    type: 'POST',
                    contentType: "application/json",
                    dataType: 'json',
                    data: JSON.stringify(settingsData)
                };
                $.ajax(settings);
            }
        };
        return SearchHelper;
    }());

    var VueHelper = /** @class */ (function () {
        function VueHelper() {
        }
        VueHelper.prototype.settingUserParams = function (userInfoUrl, params, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var isIe, settings, userInfoResp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isIe =  !!document.documentMode;
                            if (isIe) {
                                $.ajaxSetup({ cache: false });
                            }
                            settings = {
                                url: userInfoUrl
                            };
                            userInfoResp = {};
                            if (!!params.user) return [3 /*break*/, 3];
                            if (!params.authorization) return [3 /*break*/, 2];
                            settings.headers = {
                                Authorization: params.authorization,
                                ClientId: params.clientId
                            };
                            return [4 /*yield*/, $.ajax(settings)];
                        case 1:
                            userInfoResp = _a.sent();
                            params.isAuth = userInfoResp.result;
                            params.user = userInfoResp.result ? userInfoResp.data : {};
                            return [3 /*break*/, 3];
                        case 2:
                            params.isAuth = false;
                            params.user = {};
                            _a.label = 3;
                        case 3:
                            if (callback) {
                                callback(params);
                            }
                            return [2 /*return*/, params];
                    }
                });
            });
        };
        return VueHelper;
    }());

    var ValidationHelper = /** @class */ (function () {
        /**
         *
         * @param element - validation 하고 싶은 form
         * @param ignoreEl - 무시하고 싶은 element
         * @param callback - 완료 후 콜백하고 싶은 함수
         */
        function ValidationHelper(element, ignoreEl, callback) {
            $(element).validate({
                ignore: "" + ignoreEl,
                submitHandler: function () {
                    if (callback) {
                        callback();
                    }
                }
            });
            $.extend($.validator.messages, {
                required: "필수 항목입니다.",
                remote: "항목을 수정하세요.",
                email: "유효하지 않은 E-Mail주소입니다.",
                url: "유효하지 않은 URL입니다.",
                date: "올바른 날짜를 입력하세요.",
                dateISO: "올바른 날짜(ISO)를 입력하세요.",
                number: "유효한 숫자가 아닙니다.",
                digits: "숫자만 입력 가능합니다.",
                creditcard: "신용카드 번호가 바르지 않습니다.",
                equalTo: "같은 값을 다시 입력하세요.",
                extension: "올바른 확장자가 아닙니다.",
                maxlength: $.validator.format("{0}자를 넘을 수 없습니다. "),
                minlength: $.validator.format("{0}자 이상 입력하세요."),
                rangelength: $.validator.format("문자 길이가 {0} 에서 {1} 사이의 값을 입력하세요."),
                range: $.validator.format("{0} 에서 {1} 사이의 값을 입력하세요."),
                max: $.validator.format("{0} 이하의 값을 입력하세요."),
                min: $.validator.format("{0} 이상의 값을 입력하세요.")
            });
            $.validator.addMethod("whitespace", function (value) {
                var result = true;
                if ((value && $.trim(value).length === 0) || value.indexOf(' ') !== -1) {
                    result = false;
                }
                return result;
            }, "띄어쓰기가 들어갈 수 없습니다.");
        }
        return ValidationHelper;
    }());

    exports.DateHelper = DateHelper;
    exports.Factory = Factory;
    exports.FileHelper = FileHelper;
    exports.Login = Login;
    exports.SearchHelper = SearchHelper;
    exports.StorageHelper = StorageHelper;
    exports.UrlHelper = UrlHelper;
    exports.ValidationHelper = ValidationHelper;
    exports.VueHelper = VueHelper;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=cool-library-0.2.4.umd.js.map
