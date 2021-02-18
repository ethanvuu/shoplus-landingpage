(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <div class=\"nav\">\r\n        <a target=\"_blank\" [href]=\"logoURL\"> <img src=\"assets/shopluslogo.png\" alt=\"\"></a>\r\n\r\n    </div>\r\n    <article>\r\n        <section *ngIf=\"banner\" class=\"left-column\">\r\n            <h1 [innerHTML]=\"bypassHtmlSecurity(banner.title)\">\r\n            </h1>\r\n            <p [innerHTML]=\"bypassHtmlSecurity(banner.subTitle)\" class=\"medium-text\">\r\n            </p>\r\n            <div>\r\n                <a class=\"splus-button\" [href]=\"buttonURL\">\r\n                    Dùng Thử Ngay\r\n                </a>\r\n            </div>\r\n        </section>\r\n        <section class=\"right-column\">\r\n            <img *ngIf=\"banner\" [src]=\"banner.image\" alt=\"\">\r\n            <img *ngIf=\"!banner\" class=\"loader\" src=\"assets/loader.svg\" alt=\"\">            \r\n        </section>\r\n    </article>\r\n</header>\r\n<main class=\"pain-point\">\r\n    <div class=\"bg\"></div>\r\n    <article>\r\n        <h2>\r\n            <span class=\"top\"></span>Những nhọc nhằn gian khó <br>\r\n            <span class=\"bottom\">chỉ có LiveStreamer mới hiểu </span>\r\n        </h2>\r\n        <section class=\"pains\">\r\n            <div *ngFor=\"let col of painPoint$ | async\" class=\"col\">\r\n                <div class=\"pain-image\">\r\n                    <img [src]=\"col.image\" alt=\"\">\r\n                </div>\r\n                <div class=\"pain-description\">\r\n                    <p class=\"medium-text\">\r\n                        {{col.title}}\r\n                    </p>\r\n                    <p class=\"text\">\r\n                        {{col.text}}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </article>\r\n</main>\r\n<main class=\"solution\">\r\n    <img class=\"bg\" src=\"assets/solutionbg.png\" alt=\"\">\r\n    <article>\r\n        <h2>\r\n            Lọc bình luận & Chốt đơn Livestream <br>\r\n            theo thời gian thực\r\n            <span class=\"hightlight\">\r\n            </span>\r\n        </h2>\r\n        <section class=\"before-after\">\r\n            <aside class=\"before\">\r\n                <p class=\"medium-text\">\r\n                    <span class=\"hightlight\">\r\n                        Không dùng </span> Shoplus\r\n                </p>\r\n                <div *ngFor=\"let item of beforeSource$ | async\" class=\"item\">\r\n                    <div class=\"image\">\r\n                        <img [src]=\"item.icon\" alt=\"\">\r\n                    </div>\r\n                    <p class=\"text\">\r\n                        {{item.text}}\r\n                    </p>\r\n                </div>\r\n            </aside>\r\n            <div class=\"solution-image\">\r\n                <img src=\"assets/solutionimg.gif\" alt=\"\">\r\n            </div>\r\n            <aside class=\"after\">\r\n                <p class=\"medium-text\">\r\n                    <span class=\"hightlight\">\r\n                        Sử dụng </span> Shoplus\r\n                </p>\r\n                <div *ngFor=\"let item of afterSource$ | async\" class=\"item\">\r\n                    <div class=\"image\">\r\n                        <img [src]=\"item.icon\" alt=\"\">\r\n                    </div>\r\n                    <p class=\"text\">\r\n                        {{item.text}}\r\n                    </p>\r\n                </div>\r\n            </aside>\r\n        </section>\r\n    </article>\r\n</main>\r\n<main class=\"how-to-use\">\r\n    <article>\r\n        <h2>\r\n            Hướng dẫn sử dụng\r\n        </h2>\r\n        <div *ngIf=\"howToUse\" (click)=\"playVideo(3, video3, howToUse.iframe)\" #video3 class=\"video\">\r\n            <img class=\"dots left\" src=\"assets/dots.png\">\r\n            <img class=\"dots right\" src=\"assets/dots.png\">\r\n            <div *ngIf=\"videosOverlay[3]\" class=\"video-overlay\">\r\n                <img class=\"bg\" [src]=\"howToUse.overlay\">\r\n            </div>\r\n            <iframe frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n                allowfullscreen></iframe>\r\n        </div>\r\n        <div *ngIf=\"!howToUse\" (click)=\"playVideo(3, video4)\" #video4 class=\"video\">\r\n                <img *ngIf=\"!howToUse\" class=\"loader\" src=\"assets/loader.svg\" alt=\"\"> \r\n        </div>\r\n    </article>\r\n</main>\r\n\r\n<main class=\"testimonials\">\r\n    <img class=\"testimonials-bg\" src=\"assets/testimonialbg.png\" alt=\"\">\r\n    <article>\r\n        <h2>\r\n            Khách hàng tin dùng Shoplus <span class=\"highlight\"></span>\r\n        </h2>\r\n\r\n        <div class=\"videos\">\r\n            <ng-container *ngIf=\"testimonials$\">\r\n                <div *ngFor=\"let video of (testimonials$ | async), let i = index\" (click)=\"playVideo(i, video0, video.iframe)\" #video0\r\n                    class=\"video\">\r\n                    <div *ngIf=\"videosOverlay[i]\" class=\"video-overlay\">\r\n                        <img class=\"bg\" [src]=\"video.overlay\">\r\n                        <div class=\"description\">\r\n                            <p class=\"medium-text\">\r\n                                {{video.shopOwner}} <br>\r\n                                {{video.shopName}}\r\n                            </p>\r\n                            <img src=\"assets/playbutton.png\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <iframe frameborder=\"0\"\r\n                        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n                        allowfullscreen></iframe>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </article>\r\n</main>\r\n\r\n<main class=\"partners\">\r\n    <article class=\"top\">\r\n        <div class=\"shoplus\">\r\n            <a [href]=\"logoURL\" target=\"_blank\">\r\n                <img src=\"assets/shopluslogo.png\" alt=\"\"></a>\r\n            <p class=\"medium-text\">\r\n                Hiệu Quả - Đơn Giản - Dễ Dùng\r\n            </p>\r\n        </div>\r\n        <div class=\"partners\">\r\n            <div class=\"partner\">\r\n                <div class=\"logo\">\r\n                    <img src=\"assets/facebook.svg\" alt=\"\">\r\n                </div>\r\n                <p class=\"text\">\r\n                    Đối tác marketing chính thức duy nhất tại Việt Nam của Facebook\r\n                </p>\r\n            </div>\r\n            <div class=\"partner\">\r\n                <div class=\"logo\">\r\n                    <img src=\"assets/unilever.svg\" alt=\"\">\r\n                </div>\r\n                <p class=\"text\">\r\n                    Đối tác kỹ thuật hỗ trợ livestream của Unilever Philippine\r\n                </p>\r\n            </div>\r\n            <div class=\"partner\">\r\n                <div class=\"logo\">\r\n                    <img src=\"assets/others.svg\" alt=\"\">\r\n                </div>\r\n                <p class=\"text\">\r\n                    Đối tác tin cậy của 80 nghìn online shop ở Thái Lan, Philippine và Việt Nam\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </article>\r\n    <article class=\"header\">\r\n        <h2>\r\n            <span class=\"highlight\">TRẢI NGHIỆM MIỄN PHÍ</span> <br> Shoplus ngay!\r\n        </h2>\r\n    </article>\r\n    <article class=\"stores\">\r\n        <a class=\"splus-button\" target=\"_blank\" [href]=\"buttonURL\">\r\n            <img src=\"assets/laptop.png\" alt=\"\">\r\n            Phiên bản Web\r\n        </a>\r\n        <div class=\"line-break\"></div>\r\n        <a class=\"store\" target=\"_blank\" [href]=\"iOS\">\r\n            <img src=\"assets/appstore.png\" alt=\"\">\r\n        </a>\r\n        <a class=\"store\" target=\"_blank\" [href]=\"android\">\r\n            <img src=\"assets/ggplay.png\" alt=\"\">\r\n        </a>\r\n    </article>\r\n</main>\r\n\r\n<footer>\r\n    <img class=\"bg\" src=\"assets/footerbg.png\" alt=\"\">\r\n    <article>\r\n        <a [href]=\"logoURL\" target=\"_blank\">\r\n            <img src=\"assets/shopluslogo.png\" alt=\"\"> </a>\r\n        <p class=\"medium-text\">\r\n            Sản phẩm của CÔNG TY TNHH IKALA VIỆT NAM\r\n        </p>\r\n        <p class=\"text\">\r\n            Số giấy chứng nhận đăng ký kinh doanh: 0315632122 <br> Ngày cấp: 16/04/2019. Nơi cấp: Sở kế hoạch và đầu tư\r\n            thành phố Hồ Chí Minh.\r\n            <br> Địa chỉ: Tầng 6, 62 Trần Quang Khải, P. Tân Định, Quận 1, HCM <br> Hotline: <a target=\"_blank\" href=\"tel:02873002340\">028 7300 2340 </a><br>\r\n            Email:\r\n            <a href=\"mailto:contactvn@shoplus.me\">contactvn@shoplus.me</a> - Website: <a target=\"_blank\" href=\"https://shoplus.me\">https://shoplus.me</a> \r\n        </p>\r\n        <section class=\"socials\">\r\n            <a target=\"_blank\" href=\"https://www.facebook.com/shoplusVN/\"><img src=\"assets/facebook.png\" alt=\"\"></a>\r\n            <a target=\"_blank\" href=\"https://www.messenger.com/t/shoplusVN\"><img src=\"assets/messenger.png\" alt=\"\"></a>\r\n            <a target=\"_blank\" href=\"https://www.youtube.com/channel/UCmE-chPKGqguiq3JaHfiWTw\"><img\r\n                    src=\"assets/youtube.png\" alt=\"\"></a>\r\n        </section>\r\n    </article>\r\n\r\n    <img class=\"footer-curve\" src=\"assets/footer-curve.svg\" alt=\"\">\r\n</footer>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-responsive.component.css": 
        /*!**********************************************!*\
          !*** ./src/app/app-responsive.component.css ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 1200px) {\r\n  header article section img {\r\n    height: 88%;\r\n  }\r\n\r\n  header article section.right-column {\r\n    justify-content: center;\r\n  }\r\n\r\n  /****************\r\n*****************\r\nSELLER PAIN POINT\r\n*****************\r\n****************/\r\n  main.pain-point article .pains {\r\n    justify-content: space-around;\r\n  }\r\n\r\n  main.pain-point article .pains .col {\r\n    max-width: 180px;\r\n  }\r\n  main.pain-point article .pains .col .pain-image {\r\n    margin-bottom: 10px;\r\n  }\r\n  main.pain-point article .pains .col .pain-image img {\r\n    width: 155px;\r\n  }\r\n\r\n  /****************\r\n*****************\r\nTESTIMONIALS\r\n*****************\r\n****************/\r\n  main.testimonials .videos {\r\n    justify-content: center;\r\n  }\r\n  main.testimonials .videos .video:first-child {\r\n    margin-right: 25px;\r\n  }\r\n  main.testimonials .videos .video {\r\n    margin-bottom: 25px;\r\n  }\r\n  /****************\r\n*****************\r\nHOW TO USE\r\n*****************\r\n****************/\r\n  main.how-to-use article .video {\r\n    max-width: 550px;\r\n  }\r\n  /****************\r\n*****************\r\nPARTNERS\r\n*****************\r\n****************/\r\n  main.partners article.top .shoplus {\r\n    width: 380px;\r\n  }\r\n  main.partners article.top .shoplus .medium-text {\r\n    font-size: 25px;\r\n  }\r\n  main.partners .partners {\r\n    width: 700px;\r\n  }\r\n  /****************\r\n*****************\r\nPARTNERS\r\n*****************\r\n****************/\r\n  main.partners article.header h2 {\r\n    margin-top: 20px;\r\n  }\r\n  main.partners article.stores .splus-button {\r\n    font-size: 22px;\r\n  }\r\n\r\n  main.partners {\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n  }\r\n  main.partners article.top {\r\n    justify-content: center;\r\n  }\r\n  main.partners article.top .shoplus {\r\n    margin-bottom: 80px;\r\n  }\r\n  main.partners .shoplus img {\r\n    right: 0;\r\n  }\r\n  main.partners .partners {\r\n    justify-content: space-around;\r\n  }\r\n  main.partners .partners .partner {\r\n    margin-bottom: 60px;\r\n  }\r\n  main.partners article.stores a:first-child {\r\n    margin-right: 0;\r\n  }\r\n  main.partners article.stores a {\r\n    margin-bottom: 35px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .nav img {\r\n    height: 60px;\r\n  }\r\n\r\n  header {\r\n    padding-top: 100px;\r\n  }\r\n\r\n  header article {\r\n    flex-direction: column;\r\n    max-height: inherit;\r\n    height: auto;\r\n    align-items: center;\r\n  }\r\n\r\n  header article section.left-column,\r\n  header article section.right-column {\r\n    width: 90%;\r\n    height: auto;\r\n  }\r\n\r\n  header article section div {\r\n    text-align: center;\r\n  }\r\n\r\n  header article section img {\r\n    width: 100%;\r\n    height: auto;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n\r\n  /****************\r\n*****************\r\nPAINS\r\n*****************\r\n****************/\r\n  main.testimonials .testimonials-bg {\r\n    width: 100%;\r\n    height: 40%;\r\n    -o-object-fit: initial;\r\n       object-fit: initial;\r\n  }\r\n\r\n  main.testimonials .videos .video:first-child {\r\n    margin-right: 0px;\r\n  }\r\n  /****************\r\n*****************\r\nSHOPLUS SOLUTIONS\r\n*****************\r\n****************/\r\n  main.solution .bg {\r\n    width: 300%;\r\n  }\r\n  main.solution article .before-after {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  main.solution article .before-after .before,\r\n  main.solution article .before-after .after {\r\n    width: auto;\r\n    align-items: flex-start;\r\n    margin-top: 40px;\r\n  }\r\n\r\n  main.solution article .before-after .item {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n  }\r\n\r\n  main.solution article .before-after .item .text {\r\n    width: auto;\r\n  }\r\n\r\n  main.solution article .before-after .solution-image {\r\n    order: -1;\r\n  }\r\n  /*********\r\n  PARTNERS\r\n  *********/\r\n  main.partners article.stores .line-break {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .nav img {\r\n    height: 50px;\r\n  }\r\n  header {\r\n    margin-bottom: -60px;\r\n  }\r\n  main {\r\n    padding-top: 40px !important;\r\n    padding-bottom: 40px !important;\r\n  }\r\n  /******/\r\n  /****************\r\n*****************\r\nPAINS\r\n*****************\r\n****************/\r\n  main.pain-point .bg {\r\n    width: 500%;\r\n  }\r\n  main.pain-point article .pains {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  main.pain-point article .pains .col {\r\n    width: 500px;\r\n    max-width: 100%;\r\n  }\r\n\r\n  main.pain-point article .pains .col .pain-image img {\r\n    width: 300px;\r\n  }\r\n  /****************\r\n*****************\r\nSHOPLUS SOLUTIONS\r\n*****************\r\n****************/\r\n  main.solution .bg {\r\n    width: 500%;\r\n  }\r\n\r\n  /****************\r\n*****************\r\nHOW TO USE\r\n*****************\r\n****************/\r\n\r\n  main.how-to-use article .video iframe {\r\n    height: 200px;\r\n  }\r\n\r\n  /****************\r\n*****************\r\nTESTIMONIALS\r\n*****************\r\n****************/\r\n  main.testimonials {\r\n    padding-top: 40px;\r\n  }\r\n  main.testimonials .testimonials-bg {\r\n    top: -35px;\r\n  }\r\n  main.testimonials h2 {\r\n    margin-bottom: 20px;\r\n  }\r\n  main.testimonials .videos {\r\n    flex-direction: column;\r\n  }\r\n  main.testimonials .videos .video {\r\n    max-width: 550px;\r\n  }\r\n\r\n  main.testimonials .videos .video iframe {\r\n    width: 100%;\r\n    max-width: 550px;\r\n  }\r\n\r\n  main.partners article.stores {\r\n    justify-content: center;\r\n  }\r\n\r\n  main.partners article.stores a:first-child {\r\n    margin-right: 0;\r\n  }\r\n  /****************\r\n*****************\r\nPARTNERS\r\n*****************\r\n****************/\r\n  main.partners article.header h2 br {\r\n    display: initial;\r\n  }\r\n  main.partners article.stores {\r\n    flex-direction: column;\r\n  }\r\n  main.partners article.stores .splus-button {\r\n    font-size: 22px;\r\n  }\r\n\r\n  main.partners article.stores a.store img, main.partners article.stores .splus-button  {\r\n    width: 240px;\r\n    height: 75px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 390px) {\r\n  main.solution article .before-after .item .text {\r\n    margin-left: 10px;\r\n    text-align: left;\r\n  }\r\n  main.solution article .before-after .item > * {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  /***PARTNERS***/\r\n  main.partners article.top .shoplus .medium-text {\r\n    font-size: 20px;\r\n  }\r\n  main.partners .partners .partner:first-child .logo {\r\n    margin: 0;\r\n  }\r\n  main.partners .partners .partner .logo {\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 322px) {\r\n  br {\r\n    display: none;\r\n  }\r\n\r\n  footer .socials {\r\n    width: 260px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXJlc3BvbnNpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBOzs7O2dCQUljO0VBQ2Q7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsWUFBWTtFQUNkOztFQUVBOzs7O2dCQUljO0VBQ2Q7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7Ozs7Z0JBSWM7RUFDZDtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBOzs7O2dCQUljO0VBQ2Q7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBOzs7O2dCQUljO0VBQ2Q7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSw0QkFBdUI7U0FBdkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjs7RUFFQTs7SUFFRSxVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixRQUFRO0lBQ1IsTUFBTTtFQUNSOztFQUVBOzs7O2dCQUljO0VBQ2Q7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFtQjtPQUFuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTs7OztnQkFJYztFQUNkO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFNBQVM7RUFDWDtFQUNBOztXQUVTO0VBQ1Q7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsK0JBQStCO0VBQ2pDO0VBQ0EsT0FBTztFQUNQOzs7O2dCQUljO0VBQ2Q7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTs7OztnQkFJYztFQUNkO0lBQ0UsV0FBVztFQUNiOztFQUVBOzs7O2dCQUljOztFQUVkO0lBQ0UsYUFBYTtFQUNmOztFQUVBOzs7O2dCQUljO0VBQ2Q7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7Ozs7Z0JBSWM7RUFDZDtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0VBQ0EsZUFBZTtFQUNmO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAtcmVzcG9uc2l2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgaGVhZGVyIGFydGljbGUgc2VjdGlvbiBpbWcge1xyXG4gICAgaGVpZ2h0OiA4OCU7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgYXJ0aWNsZSBzZWN0aW9uLnJpZ2h0LWNvbHVtbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKioqXHJcblNFTExFUiBQQUlOIFBPSU5UXHJcbioqKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKiovXHJcbiAgbWFpbi5wYWluLXBvaW50IGFydGljbGUgLnBhaW5zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuXHJcbiAgbWFpbi5wYWluLXBvaW50IGFydGljbGUgLnBhaW5zIC5jb2wge1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuICB9XHJcbiAgbWFpbi5wYWluLXBvaW50IGFydGljbGUgLnBhaW5zIC5jb2wgLnBhaW4taW1hZ2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgbWFpbi5wYWluLXBvaW50IGFydGljbGUgLnBhaW5zIC5jb2wgLnBhaW4taW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxNTVweDtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKioqXHJcblRFU1RJTU9OSUFMU1xyXG4qKioqKioqKioqKioqKioqKlxyXG4qKioqKioqKioqKioqKioqL1xyXG4gIG1haW4udGVzdGltb25pYWxzIC52aWRlb3Mge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIG1haW4udGVzdGltb25pYWxzIC52aWRlb3MgLnZpZGVvOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICB9XHJcbiAgbWFpbi50ZXN0aW1vbmlhbHMgLnZpZGVvcyAudmlkZW8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgLyoqKioqKioqKioqKioqKipcclxuKioqKioqKioqKioqKioqKipcclxuSE9XIFRPIFVTRVxyXG4qKioqKioqKioqKioqKioqKlxyXG4qKioqKioqKioqKioqKioqL1xyXG4gIG1haW4uaG93LXRvLXVzZSBhcnRpY2xlIC52aWRlbyB7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIH1cclxuICAvKioqKioqKioqKioqKioqKlxyXG4qKioqKioqKioqKioqKioqKlxyXG5QQVJUTkVSU1xyXG4qKioqKioqKioqKioqKioqKlxyXG4qKioqKioqKioqKioqKioqL1xyXG4gIG1haW4ucGFydG5lcnMgYXJ0aWNsZS50b3AgLnNob3BsdXMge1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG4gIH1cclxuICBtYWluLnBhcnRuZXJzIGFydGljbGUudG9wIC5zaG9wbHVzIC5tZWRpdW0tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG4gIG1haW4ucGFydG5lcnMgLnBhcnRuZXJzIHtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICB9XHJcbiAgLyoqKioqKioqKioqKioqKipcclxuKioqKioqKioqKioqKioqKipcclxuUEFSVE5FUlNcclxuKioqKioqKioqKioqKioqKipcclxuKioqKioqKioqKioqKioqKi9cclxuICBtYWluLnBhcnRuZXJzIGFydGljbGUuaGVhZGVyIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIG1haW4ucGFydG5lcnMgYXJ0aWNsZS5zdG9yZXMgLnNwbHVzLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICBtYWluLnBhcnRuZXJzIHtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gIH1cclxuICBtYWluLnBhcnRuZXJzIGFydGljbGUudG9wIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBtYWluLnBhcnRuZXJzIGFydGljbGUudG9wIC5zaG9wbHVzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgfVxyXG4gIG1haW4ucGFydG5lcnMgLnNob3BsdXMgaW1nIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBtYWluLnBhcnRuZXJzIC5wYXJ0bmVycyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcbiAgbWFpbi5wYXJ0bmVycyAucGFydG5lcnMgLnBhcnRuZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICB9XHJcbiAgbWFpbi5wYXJ0bmVycyBhcnRpY2xlLnN0b3JlcyBhOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgbWFpbi5wYXJ0bmVycyBhcnRpY2xlLnN0b3JlcyBhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5uYXYgaW1nIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcblxyXG4gIGhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgYXJ0aWNsZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWF4LWhlaWdodDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgYXJ0aWNsZSBzZWN0aW9uLmxlZnQtY29sdW1uLFxyXG4gIGhlYWRlciBhcnRpY2xlIHNlY3Rpb24ucmlnaHQtY29sdW1uIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgYXJ0aWNsZSBzZWN0aW9uIGRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgYXJ0aWNsZSBzZWN0aW9uIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKipcclxuKioqKioqKioqKioqKioqKipcclxuUEFJTlNcclxuKioqKioqKioqKioqKioqKipcclxuKioqKioqKioqKioqKioqKi9cclxuICBtYWluLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWxzLWJnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBvYmplY3QtZml0OiBpbml0aWFsO1xyXG4gIH1cclxuXHJcbiAgbWFpbi50ZXN0aW1vbmlhbHMgLnZpZGVvcyAudmlkZW86Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC8qKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKioqXHJcblNIT1BMVVMgU09MVVRJT05TXHJcbioqKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKiovXHJcbiAgbWFpbi5zb2x1dGlvbiAuYmcge1xyXG4gICAgd2lkdGg6IDMwMCU7XHJcbiAgfVxyXG4gIG1haW4uc29sdXRpb24gYXJ0aWNsZSAuYmVmb3JlLWFmdGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgbWFpbi5zb2x1dGlvbiBhcnRpY2xlIC5iZWZvcmUtYWZ0ZXIgLmJlZm9yZSxcclxuICBtYWluLnNvbHV0aW9uIGFydGljbGUgLmJlZm9yZS1hZnRlciAuYWZ0ZXIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICBtYWluLnNvbHV0aW9uIGFydGljbGUgLmJlZm9yZS1hZnRlciAuaXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgbWFpbi5zb2x1dGlvbiBhcnRpY2xlIC5iZWZvcmUtYWZ0ZXIgLml0ZW0gLnRleHQge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICBtYWluLnNvbHV0aW9uIGFydGljbGUgLmJlZm9yZS1hZnRlciAuc29sdXRpb24taW1hZ2Uge1xyXG4gICAgb3JkZXI6IC0xO1xyXG4gIH1cclxuICAvKioqKioqKioqXHJcbiAgUEFSVE5FUlNcclxuICAqKioqKioqKiovXHJcbiAgbWFpbi5wYXJ0bmVycyBhcnRpY2xlLnN0b3JlcyAubGluZS1icmVhayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubmF2IGltZyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIGhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNjBweDtcclxuICB9XHJcbiAgbWFpbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyoqKioqKi9cclxuICAvKioqKioqKioqKioqKioqKlxyXG4qKioqKioqKioqKioqKioqKlxyXG5QQUlOU1xyXG4qKioqKioqKioqKioqKioqKlxyXG4qKioqKioqKioqKioqKioqL1xyXG4gIG1haW4ucGFpbi1wb2ludCAuYmcge1xyXG4gICAgd2lkdGg6IDUwMCU7XHJcbiAgfVxyXG4gIG1haW4ucGFpbi1wb2ludCBhcnRpY2xlIC5wYWlucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIG1haW4ucGFpbi1wb2ludCBhcnRpY2xlIC5wYWlucyAuY29sIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIG1haW4ucGFpbi1wb2ludCBhcnRpY2xlIC5wYWlucyAuY29sIC5wYWluLWltYWdlIGltZyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gIC8qKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKioqXHJcblNIT1BMVVMgU09MVVRJT05TXHJcbioqKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKiovXHJcbiAgbWFpbi5zb2x1dGlvbiAuYmcge1xyXG4gICAgd2lkdGg6IDUwMCU7XHJcbiAgfVxyXG5cclxuICAvKioqKioqKioqKioqKioqKlxyXG4qKioqKioqKioqKioqKioqKlxyXG5IT1cgVE8gVVNFXHJcbioqKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKiovXHJcblxyXG4gIG1haW4uaG93LXRvLXVzZSBhcnRpY2xlIC52aWRlbyBpZnJhbWUge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKioqXHJcblRFU1RJTU9OSUFMU1xyXG4qKioqKioqKioqKioqKioqKlxyXG4qKioqKioqKioqKioqKioqL1xyXG4gIG1haW4udGVzdGltb25pYWxzIHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIH1cclxuICBtYWluLnRlc3RpbW9uaWFscyAudGVzdGltb25pYWxzLWJnIHtcclxuICAgIHRvcDogLTM1cHg7XHJcbiAgfVxyXG4gIG1haW4udGVzdGltb25pYWxzIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIG1haW4udGVzdGltb25pYWxzIC52aWRlb3Mge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgbWFpbi50ZXN0aW1vbmlhbHMgLnZpZGVvcyAudmlkZW8ge1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICB9XHJcblxyXG4gIG1haW4udGVzdGltb25pYWxzIC52aWRlb3MgLnZpZGVvIGlmcmFtZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5cclxuICBtYWluLnBhcnRuZXJzIGFydGljbGUuc3RvcmVzIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgbWFpbi5wYXJ0bmVycyBhcnRpY2xlLnN0b3JlcyBhOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgLyoqKioqKioqKioqKioqKipcclxuKioqKioqKioqKioqKioqKipcclxuUEFSVE5FUlNcclxuKioqKioqKioqKioqKioqKipcclxuKioqKioqKioqKioqKioqKi9cclxuICBtYWluLnBhcnRuZXJzIGFydGljbGUuaGVhZGVyIGgyIGJyIHtcclxuICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgfVxyXG4gIG1haW4ucGFydG5lcnMgYXJ0aWNsZS5zdG9yZXMge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgbWFpbi5wYXJ0bmVycyBhcnRpY2xlLnN0b3JlcyAuc3BsdXMtYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gIG1haW4ucGFydG5lcnMgYXJ0aWNsZS5zdG9yZXMgYS5zdG9yZSBpbWcsIG1haW4ucGFydG5lcnMgYXJ0aWNsZS5zdG9yZXMgLnNwbHVzLWJ1dHRvbiAge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHtcclxuICBtYWluLnNvbHV0aW9uIGFydGljbGUgLmJlZm9yZS1hZnRlciAuaXRlbSAudGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIG1haW4uc29sdXRpb24gYXJ0aWNsZSAuYmVmb3JlLWFmdGVyIC5pdGVtID4gKiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLyoqKlBBUlRORVJTKioqL1xyXG4gIG1haW4ucGFydG5lcnMgYXJ0aWNsZS50b3AgLnNob3BsdXMgLm1lZGl1bS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgbWFpbi5wYXJ0bmVycyAucGFydG5lcnMgLnBhcnRuZXI6Zmlyc3QtY2hpbGQgLmxvZ28ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBtYWluLnBhcnRuZXJzIC5wYXJ0bmVycyAucGFydG5lciAubG9nbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjJweCkge1xyXG4gIGJyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBmb290ZXIgLnNvY2lhbHMge1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("footer,\r\nheader,\r\nmain.how-to-use {\r\n  overflow: hidden;\r\n}\r\n.nav {\r\n  position: absolute;\r\n  padding: 20px;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n/****************\r\n*****************\r\nBANNER\r\n*****************\r\n****************/\r\nheader {\r\n  font-weight: bold;\r\n  padding-bottom: 30px;\r\n  position: relative;\r\n  margin-bottom: -140px;\r\n}\r\nheader article {\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  max-height: 800px;\r\n  overflow: visible;\r\n}\r\nheader article section {\r\n  height: 100%;\r\n}\r\nheader article section.left-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  position: relative;\r\n  width: 40%;\r\n  flex-shrink: 0;\r\n}\r\nheader article section.left-column h1,\r\nheader article section.left-column p {\r\n  margin-bottom: 25px;\r\n}\r\nheader article section.left-column .splus-button {\r\n  text-decoration: none;\r\n  outline: none;\r\n  color: #fafafa;\r\n  background: #ef6f65;\r\n  display: inline-block;\r\n  padding: 16px 24px;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);\r\n}\r\nheader article section.right-column {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  overflow: visible;\r\n}\r\nheader article section img {\r\n  width: auto;\r\n  height: 100%;\r\n  z-index: 10;\r\n}\r\n/****************\r\n*****************\r\nSELLER PAIN POINT\r\n*****************\r\n****************/\r\nmain.pain-point {\r\n  padding-top: 120px;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\nmain.pain-point .bg {\r\n  border-top-left-radius: 80%;\r\n  border-top-right-radius: 80%;\r\n  background: linear-gradient(\r\n      to top,\r\n      #ffffff 15%,\r\n      rgba(239, 111, 101, 0.1) 80%,\r\n      rgba(239, 111, 101, 0.2) 120%\r\n    );\r\n  height: 100%;\r\n  width: 200%;\r\n  top: 0;\r\n  left: 50%;\r\n  position: absolute;\r\n  z-index: -1;\r\n  transform: translateX(-50%);\r\n}\r\nmain.pain-point article h2 {\r\n  text-align: center;\r\n  color: #3d3d3d;\r\n}\r\nmain.pain-point article .pains {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\nmain.pain-point article .pains .col {\r\n  width: calc(100% / 3);\r\n  padding: 15px;\r\n  text-align: center;\r\n  font-weight: 600;\r\n}\r\nmain.pain-point article .pain-image {\r\n  margin-bottom: 30px;\r\n}\r\nmain.pain-point article .col .medium-text {\r\n  color: #ef6f65;\r\n  margin-bottom: 10px;\r\n}\r\n/****************\r\n*****************\r\nSHOPLUS SOLUTIONS\r\n*****************\r\n****************/\r\nmain.solution {\r\n  padding-top: 80px;\r\n  padding-bottom: 40px;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\nmain.solution .bg {\r\n  border-bottom-left-radius: 80%;\r\n  border-bottom-right-radius: 80%;\r\n  background: linear-gradient(\r\n      180deg,\r\n      #ffffff 84.16%,\r\n      rgba(255, 255, 255, 0) 103.26%\r\n    ),\r\n    #ededed;\r\n  height: 100%;\r\n  width: 200%;\r\n  top: 0;\r\n  left: 50%;\r\n  position: absolute;\r\n  z-index: -1;\r\n  transform: translateX(-50%);\r\n}\r\nmain.solution article h2 .highlight {\r\n  color: rgba(95, 199, 216, 0.9);\r\n}\r\nmain.solution article .before-after {\r\n  display: flex;\r\n}\r\nmain.solution article .before-after .solution-image {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-grow: 1;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\nmain.solution article .before-after .solution-image img {\r\n  width: 100%;\r\n}\r\nmain.solution article .before-after .medium-text {\r\n  text-align: center;\r\n  margin-bottom: 25px;\r\n}\r\nmain.solution article .before-after .before,\r\nmain.solution article .before-after .after {\r\n  width: 280px;\r\n}\r\nmain.solution article .before-after .before .hightlight {\r\n  color: #ef6f65;\r\n}\r\nmain.solution article .before-after .after .hightlight {\r\n  color: #5fc7d8;\r\n}\r\nmain.solution article .before-after .item {\r\n  margin: auto;\r\n  display: flex;\r\n  padding: 25px;\r\n}\r\nmain.solution article .before-after .item .text {\r\n  width: 184px;\r\n  margin-left: 20px;\r\n}\r\n/****************\r\n*****************\r\nHOW TO USE\r\n*****************\r\n****************/\r\nmain.how-to-use {\r\n  padding-top: 40px;\r\n  padding-bottom: 60px;\r\n}\r\nmain.how-to-use article h2 {\r\n  text-align: center;\r\n}\r\nmain.how-to-use article .video {\r\n  max-width: 780px;\r\n  margin: auto;\r\n  border-radius: 5px;\r\n  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);\r\n  position: relative;\r\n}\r\nmain.how-to-use article .video .dots {\r\n  position: absolute;\r\n}\r\nmain.how-to-use article .video .dots.left {\r\n  top: -40px;\r\n  left: -100px;\r\n  z-index: -1;\r\n}\r\nmain.how-to-use article .video .dots.right {\r\n  bottom: -60px;\r\n  right: -100px;\r\n  z-index: 2;\r\n}\r\nmain.how-to-use article .video iframe {\r\n  height: 400px;\r\n  width: 100%;\r\n  display: block;\r\n  border-radius: 5px;\r\n}\r\nmain.how-to-use article .video-overlay {\r\n  position: absolute;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\nmain.how-to-use article .video-overlay img.bg {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  z-index: 2;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n/****************\r\n*****************\r\nTESTIMONIALS\r\n*****************\r\n****************/\r\nmain.testimonials {\r\n  padding-top: 100px;\r\n  padding-bottom: 80px;\r\n  position: relative;\r\n}\r\nmain.testimonials .testimonials-bg {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  width: 100%;\r\n  z-index: -1;\r\n}\r\nmain.testimonials h2 .highlight {\r\n  color: #ef6f65;\r\n}\r\nmain.testimonials .videos {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  position: relative;\r\n}\r\nmain.testimonials .videos .video {\r\n  position: relative;\r\n  max-width: 370px;\r\n  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n}\r\nmain.testimonials .videos .video-overlay {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\nmain.testimonials .videos .video-overlay img.bg {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  z-index: 2;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\nmain.testimonials .videos .video-overlay .description {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 16px 16px 16px;\r\n  z-index: 2;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\nmain.testimonials .videos .video-overlay .description p.medium-text {\r\n  color: #fafafa;\r\n  text-align: left;\r\n}\r\nmain.testimonials .videos .video-overlay .description img {\r\n  height: 41px;\r\n}\r\nmain.testimonials .videos .video iframe {\r\n  height: 200px;\r\n  width: 380px;\r\n  max-width: 370px;\r\n  display: block;\r\n}\r\n/****************\r\n*****************\r\nPARTNERS\r\n*****************\r\n****************/\r\nmain.partners {\r\n  padding-bottom: 80px;\r\n}\r\nmain.partners article.top {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\nmain.partners .shoplus {\r\n  width: 500px;\r\n}\r\nmain.partners .shoplus img {\r\n  position: relative;\r\n  right: 24px;\r\n}\r\nmain.partners .shoplus .medium-text {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\nmain.partners .partners {\r\n  width: 580px;\r\n  line-height: 1.6;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\nmain.partners .partners .partner {\r\n  width: 180px;\r\n  text-align: center;\r\n  font-weight: 650;\r\n}\r\nmain.partners .partners .partner p.text {\r\n  font-weight: 400;\r\n}\r\nmain.partners .partners .partner .logo {\r\n  height: 90px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 50px;\r\n}\r\nmain.partners article.header h2 {\r\n  text-align: center;\r\n  margin-top: 100px;\r\n  margin-bottom: 40px ;\r\n}\r\nmain.partners article.header h2 br {\r\n  display: none;\r\n}\r\nmain.partners article.header h2 .highlight {\r\n  color: #ef6f65;\r\n}\r\nmain.partners article.stores {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\nmain.partners article.stores .splus-button {\r\n  width: 260px;\r\n  font-size: 20px;\r\n  text-decoration: none;\r\n  outline: none;\r\n  color: #fafafa;\r\n  background: #ef6f65;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 10px;\r\n  height: 82px;\r\n}\r\nmain.partners article.stores .splus-button img {\r\n  height: 48px;\r\n  width: 48px;\r\n  margin-right: 15px;\r\n}\r\nmain.partners article.stores a:not(:first-child) {\r\n  width: 260px;\r\n  height: 85px;\r\n  text-align: center;\r\n}\r\nmain.partners article.stores a:first-child {\r\n  margin-right: 20px;\r\n}\r\nmain.partners article.stores a img {\r\n  width: 260px;\r\n  height: 85px;\r\n}\r\nmain.partners article.stores .line-break {\r\n  display: none;\r\n}\r\n/****************\r\n*****************\r\nFOOTER\r\n*****************\r\n****************/\r\nfooter {\r\n  background: no-repeat top center/cover;\r\n  position: relative;\r\n  padding-bottom: 120px;\r\n  text-align: center;\r\n  padding-top: 80px;\r\n}\r\nfooter .bg {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top:0;\r\n  left:0;\r\n  z-index:-2;\r\n}\r\nfooter p {\r\n  text-align: center;\r\n  line-height: 2;\r\n  color: #000;\r\n  font-weight: 600;\r\n}\r\nfooter p.medium-text {\r\n  font-weight: bold;\r\n}\r\nfooter .footer-curve {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: -2%;\r\n  z-index: 0;\r\n  width: 103%;\r\n  display: block;\r\n}\r\nfooter .socials {  \r\n  display: flex;\r\n  width: 300px;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  margin-top:30px;\r\n}\r\nfooter  a{\r\n  outline: none;\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\nfooter .socials a {\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixNQUFNO0VBQ04sT0FBTztBQUNUO0FBQ0E7Ozs7Z0JBSWdCO0FBRWhCO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDJDQUEyQztBQUM3QztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBOzs7O2dCQUlnQjtBQUVoQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCOzs7OztLQUtHO0VBQ0gsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sU0FBUztFQUNULGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7Ozs7Z0JBSWdCO0FBQ2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9COzs7OztXQUtTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sU0FBUztFQUNULGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUVBOzs7O2dCQUlnQjtBQUVoQjtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixVQUFVO0FBQ1o7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7Ozs7Z0JBSWdCO0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFFQTs7OztnQkFJZ0I7QUFFaEI7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7Ozs7Z0JBSWdCO0FBRWhCO0VBQ0Usc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osS0FBSztFQUNMLE1BQU07RUFDTixVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjtBQUVBO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcixcclxuaGVhZGVyLFxyXG5tYWluLmhvdy10by11c2Uge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm5hdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuLyoqKioqKioqKioqKioqKipcclxuKioqKioqKioqKioqKioqKipcclxuQkFOTkVSXHJcbioqKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKiovXHJcblxyXG5oZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAtMTQwcHg7XHJcbn1cclxuXHJcbmhlYWRlciBhcnRpY2xlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWF4LWhlaWdodDogODAwcHg7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbmhlYWRlciBhcnRpY2xlIHNlY3Rpb24ge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaGVhZGVyIGFydGljbGUgc2VjdGlvbi5sZWZ0LWNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDAlO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG5oZWFkZXIgYXJ0aWNsZSBzZWN0aW9uLmxlZnQtY29sdW1uIGgxLFxyXG5oZWFkZXIgYXJ0aWNsZSBzZWN0aW9uLmxlZnQtY29sdW1uIHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbmhlYWRlciBhcnRpY2xlIHNlY3Rpb24ubGVmdC1jb2x1bW4gLnNwbHVzLWJ1dHRvbiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICNmYWZhZmE7XHJcbiAgYmFja2dyb3VuZDogI2VmNmY2NTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuaGVhZGVyIGFydGljbGUgc2VjdGlvbi5yaWdodC1jb2x1bW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbmhlYWRlciBhcnRpY2xlIHNlY3Rpb24gaW1nIHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKioqXHJcblNFTExFUiBQQUlOIFBPSU5UXHJcbioqKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKiovXHJcblxyXG5tYWluLnBhaW4tcG9pbnQge1xyXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxubWFpbi5wYWluLXBvaW50IC5iZyB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogODAlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4MCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICB0byB0b3AsXHJcbiAgICAgICNmZmZmZmYgMTUlLFxyXG4gICAgICByZ2JhKDIzOSwgMTExLCAxMDEsIDAuMSkgODAlLFxyXG4gICAgICByZ2JhKDIzOSwgMTExLCAxMDEsIDAuMikgMTIwJVxyXG4gICAgKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDIwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG5tYWluLnBhaW4tcG9pbnQgYXJ0aWNsZSBoMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjM2QzZDNkO1xyXG59XHJcblxyXG5tYWluLnBhaW4tcG9pbnQgYXJ0aWNsZSAucGFpbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbm1haW4ucGFpbi1wb2ludCBhcnRpY2xlIC5wYWlucyAuY29sIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxubWFpbi5wYWluLXBvaW50IGFydGljbGUgLnBhaW4taW1hZ2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbm1haW4ucGFpbi1wb2ludCBhcnRpY2xlIC5jb2wgLm1lZGl1bS10ZXh0IHtcclxuICBjb2xvcjogI2VmNmY2NTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi8qKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKioqXHJcblNIT1BMVVMgU09MVVRJT05TXHJcbioqKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKiovXHJcbm1haW4uc29sdXRpb24ge1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5tYWluLnNvbHV0aW9uIC5iZyB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogODAlO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4MCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAxODBkZWcsXHJcbiAgICAgICNmZmZmZmYgODQuMTYlLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMy4yNiVcclxuICAgICksXHJcbiAgICAjZWRlZGVkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMjAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbm1haW4uc29sdXRpb24gYXJ0aWNsZSBoMiAuaGlnaGxpZ2h0IHtcclxuICBjb2xvcjogcmdiYSg5NSwgMTk5LCAyMTYsIDAuOSk7XHJcbn1cclxuXHJcbm1haW4uc29sdXRpb24gYXJ0aWNsZSAuYmVmb3JlLWFmdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5tYWluLnNvbHV0aW9uIGFydGljbGUgLmJlZm9yZS1hZnRlciAuc29sdXRpb24taW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5tYWluLnNvbHV0aW9uIGFydGljbGUgLmJlZm9yZS1hZnRlciAuc29sdXRpb24taW1hZ2UgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWFpbi5zb2x1dGlvbiBhcnRpY2xlIC5iZWZvcmUtYWZ0ZXIgLm1lZGl1bS10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxubWFpbi5zb2x1dGlvbiBhcnRpY2xlIC5iZWZvcmUtYWZ0ZXIgLmJlZm9yZSxcclxubWFpbi5zb2x1dGlvbiBhcnRpY2xlIC5iZWZvcmUtYWZ0ZXIgLmFmdGVyIHtcclxuICB3aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbm1haW4uc29sdXRpb24gYXJ0aWNsZSAuYmVmb3JlLWFmdGVyIC5iZWZvcmUgLmhpZ2h0bGlnaHQge1xyXG4gIGNvbG9yOiAjZWY2ZjY1O1xyXG59XHJcblxyXG5tYWluLnNvbHV0aW9uIGFydGljbGUgLmJlZm9yZS1hZnRlciAuYWZ0ZXIgLmhpZ2h0bGlnaHQge1xyXG4gIGNvbG9yOiAjNWZjN2Q4O1xyXG59XHJcblxyXG5tYWluLnNvbHV0aW9uIGFydGljbGUgLmJlZm9yZS1hZnRlciAuaXRlbSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxubWFpbi5zb2x1dGlvbiBhcnRpY2xlIC5iZWZvcmUtYWZ0ZXIgLml0ZW0gLnRleHQge1xyXG4gIHdpZHRoOiAxODRweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKipcclxuKioqKioqKioqKioqKioqKipcclxuSE9XIFRPIFVTRVxyXG4qKioqKioqKioqKioqKioqKlxyXG4qKioqKioqKioqKioqKioqL1xyXG5cclxubWFpbi5ob3ctdG8tdXNlIHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxubWFpbi5ob3ctdG8tdXNlIGFydGljbGUgaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWFpbi5ob3ctdG8tdXNlIGFydGljbGUgLnZpZGVvIHtcclxuICBtYXgtd2lkdGg6IDc4MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbm1haW4uaG93LXRvLXVzZSBhcnRpY2xlIC52aWRlbyAuZG90cyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5tYWluLmhvdy10by11c2UgYXJ0aWNsZSAudmlkZW8gLmRvdHMubGVmdCB7XHJcbiAgdG9wOiAtNDBweDtcclxuICBsZWZ0OiAtMTAwcHg7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbm1haW4uaG93LXRvLXVzZSBhcnRpY2xlIC52aWRlbyAuZG90cy5yaWdodCB7XHJcbiAgYm90dG9tOiAtNjBweDtcclxuICByaWdodDogLTEwMHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbm1haW4uaG93LXRvLXVzZSBhcnRpY2xlIC52aWRlbyBpZnJhbWUge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5tYWluLmhvdy10by11c2UgYXJ0aWNsZSAudmlkZW8tb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5tYWluLmhvdy10by11c2UgYXJ0aWNsZSAudmlkZW8tb3ZlcmxheSBpbWcuYmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgei1pbmRleDogMjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKioqXHJcblRFU1RJTU9OSUFMU1xyXG4qKioqKioqKioqKioqKioqKlxyXG4qKioqKioqKioqKioqKioqL1xyXG5cclxubWFpbi50ZXN0aW1vbmlhbHMge1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbm1haW4udGVzdGltb25pYWxzIC50ZXN0aW1vbmlhbHMtYmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxubWFpbi50ZXN0aW1vbmlhbHMgaDIgLmhpZ2hsaWdodCB7XHJcbiAgY29sb3I6ICNlZjZmNjU7XHJcbn1cclxuXHJcbm1haW4udGVzdGltb25pYWxzIC52aWRlb3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbm1haW4udGVzdGltb25pYWxzIC52aWRlb3MgLnZpZGVvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAzNzBweDtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5tYWluLnRlc3RpbW9uaWFscyAudmlkZW9zIC52aWRlby1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbm1haW4udGVzdGltb25pYWxzIC52aWRlb3MgLnZpZGVvLW92ZXJsYXkgaW1nLmJnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5tYWluLnRlc3RpbW9uaWFscyAudmlkZW9zIC52aWRlby1vdmVybGF5IC5kZXNjcmlwdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAxNnB4IDE2cHggMTZweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxubWFpbi50ZXN0aW1vbmlhbHMgLnZpZGVvcyAudmlkZW8tb3ZlcmxheSAuZGVzY3JpcHRpb24gcC5tZWRpdW0tdGV4dCB7XHJcbiAgY29sb3I6ICNmYWZhZmE7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxubWFpbi50ZXN0aW1vbmlhbHMgLnZpZGVvcyAudmlkZW8tb3ZlcmxheSAuZGVzY3JpcHRpb24gaW1nIHtcclxuICBoZWlnaHQ6IDQxcHg7XHJcbn1cclxubWFpbi50ZXN0aW1vbmlhbHMgLnZpZGVvcyAudmlkZW8gaWZyYW1lIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAzODBweDtcclxuICBtYXgtd2lkdGg6IDM3MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKlxyXG4qKioqKioqKioqKioqKioqKlxyXG5QQVJUTkVSU1xyXG4qKioqKioqKioqKioqKioqKlxyXG4qKioqKioqKioqKioqKioqL1xyXG5cclxubWFpbi5wYXJ0bmVycyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbm1haW4ucGFydG5lcnMgYXJ0aWNsZS50b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxubWFpbi5wYXJ0bmVycyAuc2hvcGx1cyB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG5tYWluLnBhcnRuZXJzIC5zaG9wbHVzIGltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG5tYWluLnBhcnRuZXJzIC5zaG9wbHVzIC5tZWRpdW0tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5tYWluLnBhcnRuZXJzIC5wYXJ0bmVycyB7XHJcbiAgd2lkdGg6IDU4MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5tYWluLnBhcnRuZXJzIC5wYXJ0bmVycyAucGFydG5lciB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjUwO1xyXG59XHJcblxyXG5tYWluLnBhcnRuZXJzIC5wYXJ0bmVycyAucGFydG5lciBwLnRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbm1haW4ucGFydG5lcnMgLnBhcnRuZXJzIC5wYXJ0bmVyIC5sb2dvIHtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbm1haW4ucGFydG5lcnMgYXJ0aWNsZS5oZWFkZXIgaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4IDtcclxufVxyXG5cclxubWFpbi5wYXJ0bmVycyBhcnRpY2xlLmhlYWRlciBoMiBiciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxubWFpbi5wYXJ0bmVycyBhcnRpY2xlLmhlYWRlciBoMiAuaGlnaGxpZ2h0IHtcclxuICBjb2xvcjogI2VmNmY2NTtcclxufVxyXG5cclxubWFpbi5wYXJ0bmVycyBhcnRpY2xlLnN0b3JlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxubWFpbi5wYXJ0bmVycyBhcnRpY2xlLnN0b3JlcyAuc3BsdXMtYnV0dG9uIHtcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAjZmFmYWZhO1xyXG4gIGJhY2tncm91bmQ6ICNlZjZmNjU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG59XHJcblxyXG5tYWluLnBhcnRuZXJzIGFydGljbGUuc3RvcmVzIC5zcGx1cy1idXR0b24gaW1nIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5tYWluLnBhcnRuZXJzIGFydGljbGUuc3RvcmVzIGE6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBoZWlnaHQ6IDg1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYWluLnBhcnRuZXJzIGFydGljbGUuc3RvcmVzIGE6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxubWFpbi5wYXJ0bmVycyBhcnRpY2xlLnN0b3JlcyBhIGltZyB7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGhlaWdodDogODVweDtcclxufVxyXG5cclxubWFpbi5wYXJ0bmVycyBhcnRpY2xlLnN0b3JlcyAubGluZS1icmVhayB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKipcclxuKioqKioqKioqKioqKioqKipcclxuRk9PVEVSXHJcbioqKioqKioqKioqKioqKioqXHJcbioqKioqKioqKioqKioqKiovXHJcblxyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCB0b3AgY2VudGVyL2NvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG59XHJcblxyXG5mb290ZXIgLmJnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICB6LWluZGV4Oi0yO1xyXG59XHJcblxyXG5mb290ZXIgcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmZvb3RlciBwLm1lZGl1bS10ZXh0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuZm9vdGVyIC5mb290ZXItY3VydmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogLTIlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgd2lkdGg6IDEwMyU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmZvb3RlciAuc29jaWFscyB7ICBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6MzBweDtcclxufVxyXG5cclxuZm9vdGVyICBhe1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5mb290ZXIgLnNvY2lhbHMgYSB7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _contenful_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contenful.service */ "./src/app/contenful.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(contenful, sanitizer) {
                    this.contenful = contenful;
                    this.sanitizer = sanitizer;
                    this.videosOverlay = [true, true, true, true];
                    //SHOPLUS URLS
                    this.logoURL = "https://www.shoplus.me/vi/";
                    this.buttonURL = "https://oms.shoplus.me/sign_in?auto=1";
                    this.iOS = "https://apps.apple.com/us/app/shoplus-do-less-sell-more/id1316324296";
                    this.android = "https://play.google.com/store/apps/details?id=com.ikala.shoplus";
                    this.youtube = "https://www.youtube.com/channel/UCmE-chPKGqguiq3JaHfiWTw";
                    this.facebook = "https://www.facebook.com/shoplusVN/";
                    this.messenger = "https://www.messenger.com/t/shoplusVN";
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    /** INFOR*/
                    console.info("Please contact me as 'vietanhvu.fullstack.dev@gmail.com' if you found bugs !");
                    /**URLS*/
                    this.contenful.getContents('links').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return value[0]; })).subscribe(function (value) {
                        _this.iOS = value.fields.appStore;
                        _this.android = value.fields.googlePlay;
                        _this.buttonURL = value.fields.button;
                        _this.logoURL = value.fields.logo;
                        _this.youtube = value.fields.youtube;
                        _this.facebook = value.fields.facebook;
                        _this.messenger = value.fields.messenger;
                    });
                    /*BANNER*/
                    this.contenful.getContents('banner')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fields) { return ({ title: fields[0].fields.title, subTitle: fields[0].fields.subTitle, button: fields[0].fields.button, image: fields[0].fields.image.fields.file.url }); })).subscribe(function (value) {
                        _this.banner = value;
                    });
                    /*PAIN POINT*/
                    this.painPoint$ = this.contenful.getContents('painPoint')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fields) {
                        fields.sort(function (a, b) { return +a.fields.order - +b.fields.order; });
                        return fields.map(function (item) { return ({ title: item.fields.title, text: item.fields.text, image: item.fields.image.fields.file.url }); });
                    }));
                    /*Solution*/
                    this.beforeSource$ = this.contenful.getContents('withoutShoplus')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fields) {
                        fields.sort(function (a, b) { return +a.fields.order - +b.fields.order; });
                        return fields.map(function (item) { return ({ text: item.fields.text, icon: item.fields.icon.fields.file.url }); });
                    }));
                    this.afterSource$ = this.contenful.getContents('withShoplus')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fields) {
                        fields.sort(function (a, b) { return +a.fields.order - +b.fields.order; });
                        return fields.map(function (item) { return ({ text: item.fields.text, icon: item.fields.icon.fields.file.url }); });
                    }));
                    /**How To Use */
                    this.contenful.getContents('howToUse')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fields) { return ({ iframe: fields[0].fields.iframe + '?autoplay=1', overlay: fields[0].fields.overlay.fields.file.url }); })).subscribe(function (value) {
                        _this.howToUse = value;
                    });
                    /**Testimonials */
                    this.testimonials$ = this.contenful.getContents('testimonials')
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fields) {
                        fields.sort(function (a, b) { return +a.fields.order - +b.fields.order; });
                        return fields.map(function (item) { return ({ iframe: item.fields.iframe + '?autoplay=1', shopName: item.fields.shopName, shopOwner: item.fields.shopOwner, overlay: item.fields.overlay.fields.file.url }); });
                    }));
                };
                AppComponent.prototype.bypassHtmlSecurity = function (html) {
                    return this.sanitizer.bypassSecurityTrustHtml(html);
                };
                AppComponent.prototype.bypassTrustResourceUrl = function (html) {
                    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
                };
                AppComponent.prototype.playVideo = function (i, element, src) {
                    if (this.howToUse && this.testimonials$) {
                        this.videosOverlay[+i] = !this.videosOverlay[i];
                        element.querySelector('iframe').src = src;
                        return;
                    }
                    // element.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _contenful_service__WEBPACK_IMPORTED_MODULE_3__["ContentfulService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-responsive.component.css */ "./src/app/app-responsive.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/config.ts": 
        /*!***************************!*\
          !*** ./src/app/config.ts ***!
          \***************************/
        /*! exports provided: CONFIG */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function () { return CONFIG; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var CONFIG = {
                space: 'rqh23idkhfrx',
                accessToken: 'bPWsrOfWqweh2n9LzbAcSL_OJ9y3Va9-H7yGnIMBzlM'
            };
            /***/ 
        }),
        /***/ "./src/app/contenful.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/contenful.service.ts ***!
          \**************************************/
        /*! exports provided: ContentfulService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentfulService", function () { return ContentfulService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");
            /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var ContentfulService = /** @class */ (function () {
                function ContentfulService() {
                    this.cdaClient = Object(contentful__WEBPACK_IMPORTED_MODULE_2__["createClient"])({
                        space: _config__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].space,
                        accessToken: _config__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].accessToken
                    });
                }
                ContentfulService.prototype.getContents = function (contentId, query) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.cdaClient.getEntries(Object.assign({
                        content_type: contentId
                    }, query))
                        .then(function (res) { return res.items; }));
                };
                return ContentfulService;
            }());
            ContentfulService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ContentfulService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\Dell\1-Work\Self Project\spluslp\src\main.ts */ "./src/main.ts");
            /***/ 
        }),
        /***/ 1: 
        /*!********************!*\
          !*** os (ignored) ***!
          \********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map