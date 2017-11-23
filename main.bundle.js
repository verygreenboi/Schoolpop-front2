webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"dashboard.module",
		"common"
	],
	"./message/message.module": [
		"../../../../../src/app/message/message.module.ts",
		"message.module"
	],
	"./news/news.module": [
		"../../../../../src/app/news/news.module.ts",
		"news.module"
	],
	"./parents/parents.module": [
		"../../../../../src/app/parents/parents.module.ts",
		"parents.module"
	],
	"./profile/profile.module": [
		"../../../../../src/app/profile/profile.module.ts",
		"profile.module"
	],
	"./school/school.module": [
		"../../../../../src/app/school/school.module.ts",
		"school.module"
	],
	"./user/user.module": [
		"../../../../../src/app/user/user.module.ts",
		"user.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/actions/report-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_REPORT_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REPORTS_FETCHED_ACTION; });
/* unused harmony export FetchReportAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ReportsFetchedAction; });
var FETCH_REPORT_ACTION = 'FETCH_REPORT_ACTION';
var REPORTS_FETCHED_ACTION = 'REPORTS_FETCHED_ACTION';
var FetchReportAction = (function () {
    function FetchReportAction(payload) {
        this.payload = payload;
        this.type = FETCH_REPORT_ACTION;
    }
    return FetchReportAction;
}());

var ReportsFetchedAction = (function () {
    function ReportsFetchedAction(payload) {
        this.payload = payload;
        this.type = REPORTS_FETCHED_ACTION;
    }
    return ReportsFetchedAction;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-overlay {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #fefefe;\n  z-index: 100000;\n  opacity: 1;\n}\n\n.loading-overlay>md-spinner {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  z-index: 100001;\n}\n\n.loading-overlay-off {\n  z-index: -1;\n  opacity: 0;\n}\n\n.loading-overlay-off>md-spinner {\n  opacity: 0;\n}\n\n\n/* ==============================\n   Page loader\n   ============================== */\n\n.page-loader {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #fefefe;\n  z-index: 100000;\n}\n\n.loader {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  font-size: 10px;\n  text-indent: -12345px;\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  border-right: 1px solid rgba(0, 0, 0, 0.08);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  border-left: 1px solid rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  -webkit-animation: spinner 700ms infinite linear;\n  animation: spinner 700ms infinite linear;\n  z-index: 100001;\n}\n\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<router-outlet name=\"popup\"></router-outlet>\n\n<div #spinnerElement class=\"page-loader\">\n  <div class=\"loader\">Loading...</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_message_action__ = __webpack_require__("../../../../../src/app/message/message-action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(rs, inboxStore, router, ngZone, renderer, ms, ps) {
        var _this = this;
        this.rs = rs;
        this.inboxStore = inboxStore;
        this.router = router;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.ms = ms;
        this.ps = ps;
        this.title = 'app works!';
        this.sub = router.events.subscribe(function (event) {
            _this._navigationInterceptor(event);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var body = jQuery('body');
        body.attr('class', '');
        body.addClass('sticky-header');
        this.rs.bc.subscribe(function (c) {
            body.attr('class', '');
            body.addClass(c);
        });
        if (this.ps.currentUser) {
            this.inboxStore.dispatch(new __WEBPACK_IMPORTED_MODULE_6__message_message_action__["e" /* LoadDashBoardAction */]());
        }
    };
    AppComponent.prototype._navigationInterceptor = function (event) {
        var _this = this;
        if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* NavigationStart */]) {
            // We wanna run this function outside of Angular's zone to
            // bypass change detection
            this.ngZone.runOutsideAngular(function () {
                var ne = jQuery(_this.spinnerElement.nativeElement);
                ne.show();
            });
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NavigationEnd */]) {
            this._hideSpinner();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationCancel */]) {
            this._hideSpinner();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* NavigationError */]) {
            this._hideSpinner();
        }
    };
    AppComponent.prototype._hideSpinner = function () {
        var _this = this;
        // We wanna run this function outside of Angular's zone to
        // bypass change detection,
        this.ngZone.runOutsideAngular(function () {
            var ne = jQuery(_this.spinnerElement.nativeElement);
            ne.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('spinnerElement'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], AppComponent.prototype, "spinnerElement", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'body',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_route_service__["b" /* RouteService */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["f" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_5__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_0__services_parse_service__["a" /* ParseService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.js.helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = adjustMainContentHeight;
/* harmony export (immutable) */ __webpack_exports__["d"] = visibleSubMenuClose;
/* harmony export (immutable) */ __webpack_exports__["c"] = toggleSidebar;
/* harmony export (immutable) */ __webpack_exports__["b"] = hover;
/* unused harmony export initCompose */
function adjustMainContentHeight() {
    // console.log("Did something");
    // Adjust main content height
    var docHeight = jQuery(document).height();
    if (docHeight > jQuery('.body-content').height())
        jQuery('.body-content').height(docHeight);
}
function visibleSubMenuClose() {
    jQuery('.menu-list').each(function () {
        var t = jQuery(this);
        if (t.hasClass('nav-active')) {
            t.find('> ul').slideUp(300, function () {
                t.removeClass('nav-active');
            });
        }
    });
}
// export function consolate(message:String) {
//   console.log();
// }
function toggleSidebar() {
    jQuery('.menu-list > a').click(function () {
        var parent = jQuery(this).parent();
        var sub = parent.find('> ul');
        if (!jQuery('body').hasClass('sidebar-collapsed')) {
            if (sub.is(':visible')) {
                sub.slideUp(300, function () {
                    parent.removeClass('nav-active');
                    jQuery('.body-content').css({ height: '' });
                    adjustMainContentHeight();
                });
            }
            else {
                visibleSubMenuClose();
                parent.addClass('nav-active');
                sub.slideDown(300, function () {
                    adjustMainContentHeight();
                });
            }
        }
        return false;
    });
}
function hover() {
    jQuery('.side-navigation > li').hover(function () {
        jQuery(this).addClass('nav-hover');
    }, function () {
        jQuery(this).removeClass('nav-hover');
    });
}
function initCompose() {
    jQuery('.wysihtml5').wysihtml5();
}


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_window_ref_service__ = __webpack_require__("../../../../../src/app/services/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_report_service__ = __webpack_require__("../../../../../src/app/services/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pickup_service__ = __webpack_require__("../../../../../src/app/services/pickup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_is_activated_guard__ = __webpack_require__("../../../../../src/app/guards/is-activated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_layout_layout_module__ = __webpack_require__("../../../../../src/app/commons/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_module__ = __webpack_require__("../../../../../src/app/settings/settings.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_store_effect_effect_service__ = __webpack_require__("../../../../../src/app/services/store/effect/effect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_store_effect_server_notification_effect_service__ = __webpack_require__("../../../../../src/app/services/store/effect/server-notification-effect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_store_effect_load_mail_service__ = __webpack_require__("../../../../../src/app/services/store/effect/load-mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commons_directives_directives_module__ = __webpack_require__("../../../../../src/app/commons/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__commons_widget_widget_module__ = __webpack_require__("../../../../../src/app/commons/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routing__ = __webpack_require__("../../../../../src/app/routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__errors_errors_module__ = __webpack_require__("../../../../../src/app/errors/errors.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__event_event_module__ = __webpack_require__("../../../../../src/app/event/event.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__forgot_password_forgot_password_module__ = __webpack_require__("../../../../../src/app/forgot-password/forgot-password.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__klass_klass_module__ = __webpack_require__("../../../../../src/app/klass/klass.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__register_register_module__ = __webpack_require__("../../../../../src/app/register/register.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__demo_demo_component__ = __webpack_require__("../../../../../src/app/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__message_reducers_inbox_reducer__ = __webpack_require__("../../../../../src/app/message/reducers/inbox-reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_store_effect_view_mail_service__ = __webpack_require__("../../../../../src/app/services/store/effect/view-mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_store_effect_report_effect__ = __webpack_require__("../../../../../src/app/services/store/effect/report-effect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__not_active_not_active_component__ = __webpack_require__("../../../../../src/app/not-active/not-active.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__guards_authenticated_guard__ = __webpack_require__("../../../../../src/app/guards/authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_16__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_25__demo_demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_33__not_active_not_active_component__["a" /* NotActiveComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_35__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__commons_layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_19__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_20__errors_errors_module__["a" /* ErrorsModule */],
                __WEBPACK_IMPORTED_MODULE_21__event_event_module__["a" /* EventModule */],
                __WEBPACK_IMPORTED_MODULE_22__forgot_password_forgot_password_module__["a" /* ForgotPasswordModule */],
                __WEBPACK_IMPORTED_MODULE_23__klass_klass_module__["a" /* KlassModule */],
                __WEBPACK_IMPORTED_MODULE_24__register_register_module__["a" /* RegisterModule */],
                __WEBPACK_IMPORTED_MODULE_6__settings_settings_module__["a" /* SettingsModule */],
                __WEBPACK_IMPORTED_MODULE_11__commons_widget_widget_module__["a" /* WidgetModule */],
                __WEBPACK_IMPORTED_MODULE_10__commons_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_router__["g" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__routing__["a" /* ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_27__ngrx_store__["g" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_26__message_reducers_inbox_reducer__["a" /* messageStoreReducer */]),
                __WEBPACK_IMPORTED_MODULE_29__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_9__services_store_effect_load_mail_service__["a" /* LoadMailServiceEffect */]),
                __WEBPACK_IMPORTED_MODULE_29__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_31__services_store_effect_view_mail_service__["a" /* ViewMailServiceEffect */]),
                __WEBPACK_IMPORTED_MODULE_29__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_8__services_store_effect_server_notification_effect_service__["a" /* ServerNotificationEffectService */]),
                __WEBPACK_IMPORTED_MODULE_29__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_7__services_store_effect_effect_service__["a" /* UserEffectService */]),
                __WEBPACK_IMPORTED_MODULE_29__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_32__services_store_effect_report_effect__["a" /* ReportEffectService */]),
                __WEBPACK_IMPORTED_MODULE_30__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_route_service__["b" /* RouteService */],
                __WEBPACK_IMPORTED_MODULE_28__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_34__guards_authenticated_guard__["a" /* AuthenticatedGuard */],
                __WEBPACK_IMPORTED_MODULE_2__services_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_4__guards_is_activated_guard__["a" /* IsActivatedGuard */],
                __WEBPACK_IMPORTED_MODULE_3__services_pickup_service__["a" /* PickupService */],
                __WEBPACK_IMPORTED_MODULE_36__services_parse_service__["a" /* ParseService */],
                __WEBPACK_IMPORTED_MODULE_1__services_report_service__["a" /* ReportService */],
                __WEBPACK_IMPORTED_MODULE_0__services_window_ref_service__["a" /* WindowRefService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/commons/directives/async-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _this = this;



var AsyncValidator = (function () {
    function AsyncValidator(us) {
        this.us = us;
    }
    AsyncValidator_1 = AsyncValidator;
    AsyncValidator.prototype.validate = function (c) {
        return validateUserExistByUsernameEmailObjectId(c.value).first();
    };
    AsyncValidator = AsyncValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Directive"])({
            selector: '[asyncValidator][formControlName], [asyncValidator][ngModel]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_ASYNC_VALIDATORS"],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["forwardRef"])(function () { return AsyncValidator_1; }), multi: true
                },
                __WEBPACK_IMPORTED_MODULE_0__services_user_service__["e" /* UserService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["e" /* UserService */]])
    ], AsyncValidator);
    return AsyncValidator;
    var AsyncValidator_1;
}());

var validateUserExistByUsernameEmailObjectId = function (term) {
    return _this.us.searchUserByTerm(term).map(function (u) {
        if (u.length == 0) {
            return { asyncInvalid: true };
        }
        else {
            return null;
        }
    });
};


/***/ }),

/***/ "../../../../../src/app/commons/directives/directives.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dnd_directive__ = __webpack_require__("../../../../../src/app/commons/directives/dnd.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gravatar_directive__ = __webpack_require__("../../../../../src/app/commons/directives/gravatar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__replace_tag_directive__ = __webpack_require__("../../../../../src/app/commons/directives/replace-tag.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__async_validator_directive__ = __webpack_require__("../../../../../src/app/commons/directives/async-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__equal_validator_directive__ = __webpack_require__("../../../../../src/app/commons/directives/equal-validator.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__dnd_directive__["a" /* DndDirective */],
                __WEBPACK_IMPORTED_MODULE_3__gravatar_directive__["a" /* GravatarDirective */],
                __WEBPACK_IMPORTED_MODULE_4__replace_tag_directive__["a" /* ReplaceTagDirective */],
                __WEBPACK_IMPORTED_MODULE_5__async_validator_directive__["a" /* AsyncValidator */],
                __WEBPACK_IMPORTED_MODULE_6__equal_validator_directive__["a" /* EqualValidatorDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__dnd_directive__["a" /* DndDirective */],
                __WEBPACK_IMPORTED_MODULE_3__gravatar_directive__["a" /* GravatarDirective */],
                __WEBPACK_IMPORTED_MODULE_4__replace_tag_directive__["a" /* ReplaceTagDirective */],
                __WEBPACK_IMPORTED_MODULE_5__async_validator_directive__["a" /* AsyncValidator */],
                __WEBPACK_IMPORTED_MODULE_6__equal_validator_directive__["a" /* EqualValidatorDirective */]
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());



/***/ }),

/***/ "../../../../../src/app/commons/directives/dnd.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DndDirective = (function () {
    function DndDirective() {
        this.onFileDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.background = '#eee';
    }
    DndDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var files = evt.dataTransfer.files;
        this.background = '#999';
    };
    DndDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
    };
    DndDirective.prototype.onDrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.background = '#eee';
            this.onFileDrop.emit(files[0]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DndDirective.prototype, "onFileDrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.background'),
        __metadata("design:type", Object)
    ], DndDirective.prototype, "background", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DndDirective.prototype, "onDragOver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DndDirective.prototype, "onDragLeave", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DndDirective.prototype, "onDrop", null);
    DndDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[spDnd]'
        }),
        __metadata("design:paramtypes", [])
    ], DndDirective);
    return DndDirective;
}());



/***/ }),

/***/ "../../../../../src/app/commons/directives/equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidatorDirective = (function () {
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidatorDirective_1 = EqualValidatorDirective;
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidatorDirective.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    EqualValidatorDirective = EqualValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: EqualValidatorDirective_1, multi: true }]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidatorDirective);
    return EqualValidatorDirective;
    var EqualValidatorDirective_1;
}());



/***/ }),

/***/ "../../../../../src/app/commons/directives/gravatar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GravatarDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__md5__ = __webpack_require__("../../../../../src/app/md5.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GravatarDirective = (function () {
    function GravatarDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.email = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].of("default@schoolpop.ng");
    }
    GravatarDirective.prototype.ngOnInit = function () {
    };
    GravatarDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.email != null) {
            this.email.subscribe(function (email) {
                _this._elRef.nativeElement.src = _this.getSrc(email);
            }, function (err) {
                _this._elRef.nativeElement.src = _this.getSrc("default@schoolpop.ng");
            });
        }
    };
    GravatarDirective.prototype.getSrc = function (email) {
        var baseUrl = 'https://www.gravatar.com/avatar/';
        var hash = __WEBPACK_IMPORTED_MODULE_2__md5__["a" /* encrypt */](email);
        return baseUrl + hash;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */])
    ], GravatarDirective.prototype, "email", void 0);
    GravatarDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[spGravatar]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], GravatarDirective);
    return GravatarDirective;
}());



/***/ }),

/***/ "../../../../../src/app/commons/directives/replace-tag.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaceTagDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReplaceTagDirective = (function () {
    function ReplaceTagDirective(templateRef, vcf) {
        this.templateRef = templateRef;
        this.vcf = vcf;
        this._needUpdate = false;
        this.isRead = false;
    }
    Object.defineProperty(ReplaceTagDirective.prototype, "tag", {
        set: function (t) {
            this._tag = t;
            this._needUpdate = true;
            this.vcf.clear();
            var template = this.templateRef.elementRef.nativeElement.nextElementSibling;
            if (template) {
                this.templateRef.elementRef.nativeElement.parentNode.removeChild(template);
            }
            this.vcf.createEmbeddedView(this.templateRef);
        },
        enumerable: true,
        configurable: true
    });
    ReplaceTagDirective.prototype.ngAfterViewChecked = function () {
        if (this._needUpdate) {
            this._updateTemplate();
            this._needUpdate = false;
        }
        this.templateRef.elementRef.nativeElement.class = !this.isRead ? "unread" : "";
    };
    ReplaceTagDirective.prototype._updateTemplate = function () {
        var template = this.templateRef.elementRef.nativeElement.nextElementSibling;
        if (template) {
            var r = document.createElement(this._tag);
            r.innerHTML = template.innerHTML;
            this.templateRef.elementRef.nativeElement.parentNode.replaceChild(r, template);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('replaceTag'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ReplaceTagDirective.prototype, "tag", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ReplaceTagDirective.prototype, "isRead", void 0);
    ReplaceTagDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[replaceTag]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ReplaceTagDirective);
    return ReplaceTagDirective;
}());



/***/ }),

/***/ "../../../../../src/app/commons/layout/basic/basic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/layout/basic/basic.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Sidebar start-->\n<sp-sidebar></sp-sidebar>\n<!--Sidebar end /-->\n<div class=\"body-content\">\n  <sp-navbar></sp-navbar>\n  <router-outlet></router-outlet>\n  <sp-footer></sp-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/commons/layout/basic/basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicComponent = (function () {
    function BasicComponent() {
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    BasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-basic',
            template: __webpack_require__("../../../../../src/app/commons/layout/basic/basic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/layout/basic/basic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicComponent);
    return BasicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/layout/blank/blank.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/layout/blank/blank.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/commons/layout/blank/blank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankComponent = (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    BlankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-blank',
            template: __webpack_require__("../../../../../src/app/commons/layout/blank/blank.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/layout/blank/blank.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_basic_component__ = __webpack_require__("../../../../../src/app/commons/layout/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blank_blank_component__ = __webpack_require__("../../../../../src/app/commons/layout/blank/blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widget_widget_module__ = __webpack_require__("../../../../../src/app/commons/widget/widget.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__basic_basic_component__["a" /* BasicComponent */],
                __WEBPACK_IMPORTED_MODULE_4__blank_blank_component__["a" /* BlankComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__widget_widget_module__["a" /* WidgetModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__basic_basic_component__["a" /* BasicComponent */],
                __WEBPACK_IMPORTED_MODULE_4__blank_blank_component__["a" /* BlankComponent */]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/commons/validators/validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateEmail;
function validateEmail(c) {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmail: {
            valid: false
        }
    };
}


/***/ }),

/***/ "../../../../../src/app/commons/widget/assign-teacher-dialog/assign-teacher-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-input-container {\n  display: block;\n  margin-bottom: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/assign-teacher-dialog/assign-teacher-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <form [formGroup]=\"searchForm\"></form>\n    <md-input-container>\n      <input mdInput placeholder=\"Search by username, Email or User Id\" [formControl]=\"term\">\n    </md-input-container>\n    <md-nav-list *ngFor=\"let teacher of dataset\">\n      <div md-list-item>\n        {{teacher.get(\"firstName\")}} {{teacher.get(\"lastName\")}} \n        <button md-raised-button (click)=\"assign(teacher)\" class=\"pull-right\">Assign</button>\n      </div>\n    </md-nav-list>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/assign-teacher-dialog/assign-teacher-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignTeacherDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignTeacherDialogComponent = (function () {
    function AssignTeacherDialogComponent(assignTeacherDialogRef, builder, us) {
        this.assignTeacherDialogRef = assignTeacherDialogRef;
        this.builder = builder;
        this.us = us;
        this.teachers = [
            {
                objectId: "ksvksdnlsd",
                firstName: "Thompson",
                lastName: "Edolo",
                email: "verygreenboi"
            }
        ];
        this.dataset = [];
        this.term = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('');
        this.searchForm = this.builder.group({
            term: this.term
        });
    }
    AssignTeacherDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm.valueChanges.debounceTime(500).distinctUntilChanged().switchMap(function (t) {
            console.log(t);
            return _this.us.searchUserByTerm(t.term);
        }).retry(3).subscribe(function (ter) {
            console.log(ter);
            _this.dataset = ter;
        });
    };
    AssignTeacherDialogComponent.prototype.assign = function (id) {
        this.assignTeacherDialogRef.close({
            teacher: id
        });
    };
    AssignTeacherDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-assign-teacher-dialog',
            template: __webpack_require__("../../../../../src/app/commons/widget/assign-teacher-dialog/assign-teacher-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/assign-teacher-dialog/assign-teacher-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["e" /* UserService */]])
    ], AssignTeacherDialogComponent);
    return AssignTeacherDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/chart-widget/chart-widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/chart-widget/chart-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: block\">\n  <canvas #chartName=\"base-chart\" baseChart [options]=\"options\" [data]=\"dataset?.data\" [labels]=\"dataset?.labels\" [chartType]=\"chartType\"></canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/chart-widget/chart-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartWidgetComponent = (function () {
    function ChartWidgetComponent() {
        this.dataset = {
            labels: [],
            data: []
        };
        this.options = {};
    }
    ChartWidgetComponent.prototype.ngOnInit = function () {
    };
    ChartWidgetComponent.prototype.ngAfterViewChecked = function () {
    };
    ChartWidgetComponent.prototype.ngOnChanges = function (changes) {
        this.myChart.ngOnChanges({});
    };
    ChartWidgetComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartWidgetComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chartName'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ng2_charts__["BaseChartDirective"])
    ], ChartWidgetComponent.prototype, "myChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChartWidgetComponent.prototype, "chartType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartWidgetComponent.prototype, "dataset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartWidgetComponent.prototype, "options", void 0);
    ChartWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-chart-widget',
            template: __webpack_require__("../../../../../src/app/commons/widget/chart-widget/chart-widget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/chart-widget/chart-widget.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartWidgetComponent);
    return ChartWidgetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/children-view/children-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/children-view/children-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"widget\">\n  <div class=\"title\">\n    <h1>{{title}}</h1>\n  </div>\n  <div class=\"row\">\n    <a class=\"col-xs-4\" *ngFor=\"let child of children\" (click)=\"selectChild(child)\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <img src=\"{{child?.avatar}}\" alt=\"\" />\n        </div>\n        <div class=\"col-xs-12\">\n          <p>\n            <strong>\n            {{child.firstName}} {{child.lastName}}\n            </strong>\n          </p>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/children-view/children-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildrenViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildrenViewComponent = (function () {
    function ChildrenViewComponent() {
        this.children = [];
        this.title = '';
        this.child = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ChildrenViewComponent.prototype.ngOnInit = function () {
    };
    ChildrenViewComponent.prototype.selectChild = function (user) {
        this.child.emit(user);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChildrenViewComponent.prototype, "children", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChildrenViewComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ChildrenViewComponent.prototype, "child", void 0);
    ChildrenViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-children-view',
            template: __webpack_require__("../../../../../src/app/commons/widget/children-view/children-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/children-view/children-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChildrenViewComponent);
    return ChildrenViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/class-fee-dialog/class-fee-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/class-fee-dialog/class-fee-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  class-fee-dialog works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/class-fee-dialog/class-fee-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassFeeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClassFeeDialogComponent = (function () {
    function ClassFeeDialogComponent() {
    }
    ClassFeeDialogComponent.prototype.ngOnInit = function () {
    };
    ClassFeeDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-class-fee-dialog',
            template: __webpack_require__("../../../../../src/app/commons/widget/class-fee-dialog/class-fee-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/class-fee-dialog/class-fee-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassFeeDialogComponent);
    return ClassFeeDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/column/column.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/column/column.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/commons/widget/column/column.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datatable_datatable_component__ = __webpack_require__("../../../../../src/app/commons/widget/datatable/datatable.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColumnComponent = (function () {
    function ColumnComponent(table) {
        table.addColumn(this);
    }
    ColumnComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ColumnComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ColumnComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ColumnComponent.prototype, "itemId", void 0);
    ColumnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-column',
            template: __webpack_require__("../../../../../src/app/commons/widget/column/column.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/column/column.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datatable_datatable_component__["a" /* DatatableComponent */]])
    ], ColumnComponent);
    return ColumnComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/compose-dialog/compose-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/compose-dialog/compose-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  compose-dialog works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/compose-dialog/compose-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComposeDialogComponent = (function () {
    function ComposeDialogComponent() {
    }
    ComposeDialogComponent.prototype.ngOnInit = function () {
    };
    ComposeDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-compose-dialog',
            template: __webpack_require__("../../../../../src/app/commons/widget/compose-dialog/compose-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/compose-dialog/compose-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComposeDialogComponent);
    return ComposeDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/datatable/datatable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.87);\n}\n\ntable,\nth,\ntd {\n  border: none;\n}\n\nth {\n  text-transform: uppercase;\n  font-size: 16px;\n}\n\ntable {\n  width: 100%;\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nthead {\n  border-bottom: 1px solid #d0d0d0;\n}\n\ntd,\nth {\n  padding: 15px 5px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  border-radius: 2px;\n}\n\n@media only screen and (min-width: 1200px) {\n  table {\n    font-size: 15px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  table {\n    font-size: 14.5px;\n  }\n}\n\n@media only screen and (min-width: 0) {\n  table {\n    font-size: 14px;\n  }\n}\n\n.green {\n  color: green;\n}\n\n.green-tx {\n  color: green;\n}\n\n.red {\n  color: red;\n}\n\n.blue {\n  color: blue;\n}\n\n.clickable {\n  cursor: pointer;\n}\n\n.green,\n.red,\n.blue {\n  visibility: hidden;\n}\n\n.green:before,\n.red:before,\n.blue:before {\n  visibility: visible;\n  font-family: FontAwesome;\n  font-size: 16px;\n  display: inline-block;\n}\n\n.green:before {\n  content: \"\\F044\";\n}\n\n.red:before {\n  content: \"\\F1F8\";\n}\n\n.blue:before {\n  content: \"\\F06E\";\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/datatable/datatable.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <thead>\n    <tr>\n      <th *ngFor=\"let column of columns\">{{column.header}}</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let row of dataset\">\n      <td class=\"{{getRemarkStyle([column.header], row[column.value])}}\" *ngFor=\"let column of columns\">{{row[column.value]}}</td>\n      <ng-container *ngIf=\"viewable\">\n        <td (click)=\"viewRow(row.objectId)\" class=\"blue clickable\">View</td>\n      </ng-container>\n      <ng-container *ngIf=\"editable\">\n        <td (click)=\"editRow(row.objectId)\" class=\"green clickable\">Edit</td>\n      </ng-container>\n      <ng-container *ngIf=\"deletable\">\n        <td (click)=\"deleteRow(row.objectId)\" class=\"red clickable\">Delete</td>\n      </ng-container>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/datatable/datatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatatableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_IEvent__ = __webpack_require__("../../../../../src/app/model/IEvent.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatatableComponent = (function () {
    function DatatableComponent() {
        this.columns = [];
        this.deletable = false;
        this.editable = false;
        this.viewable = false;
        this.parse = false;
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DatatableComponent.prototype.ngOnInit = function () {
    };
    DatatableComponent.prototype.addColumn = function (column) {
        this.columns.push(column);
    };
    DatatableComponent.prototype.editRow = function (id) {
        var e = {};
        e.objectId = id;
        e.event = __WEBPACK_IMPORTED_MODULE_1__model_IEvent__["a" /* EventType */].edit;
        this.event.emit(e);
    };
    ;
    DatatableComponent.prototype.deleteRow = function (id) {
        var e = {};
        e.objectId = id;
        e.event = __WEBPACK_IMPORTED_MODULE_1__model_IEvent__["a" /* EventType */].delete;
        this.event.emit(e);
    };
    DatatableComponent.prototype.viewRow = function (id) {
        var e = {};
        e.objectId = id;
        e.event = __WEBPACK_IMPORTED_MODULE_1__model_IEvent__["a" /* EventType */].view;
        this.event.emit(e);
    };
    DatatableComponent.prototype.getRemarkStyle = function (header, value) {
        // console.log(header, value);
        if (header === 'Remark') {
            if (value === 'Failed') {
                return 'red-tx';
            }
            else if (value === 'Passed') {
                return 'green-tx';
            }
            else {
                return '';
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "dataset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "deletable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "editable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "viewable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("parse-table"),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "parse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DatatableComponent.prototype, "event", void 0);
    DatatableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-datatable',
            template: __webpack_require__("../../../../../src/app/commons/widget/datatable/datatable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/datatable/datatable.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DatatableComponent);
    return DatatableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/delete-class-dialog/delete-class-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/delete-class-dialog/delete-class-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  delete-class-dialog works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/delete-class-dialog/delete-class-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteClassDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeleteClassDialogComponent = (function () {
    function DeleteClassDialogComponent() {
    }
    DeleteClassDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteClassDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-delete-class-dialog',
            template: __webpack_require__("../../../../../src/app/commons/widget/delete-class-dialog/delete-class-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/delete-class-dialog/delete-class-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteClassDialogComponent);
    return DeleteClassDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/delete-dialog/delete-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/delete-dialog/delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Delete</h1>\n<div md-dialog-content>What would you like to do?</div>\n<div md-dialog-actions>\n  <button md-button md-dialog-close=\"cancel\">Cancel</button>\n  <button md-button md-dialog-close=\"delete\">Delete</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/delete-dialog/delete-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteDialogComponent = (function () {
    function DeleteDialogComponent(deleteDialogRef, us) {
        this.deleteDialogRef = deleteDialogRef;
        this.us = us;
    }
    DeleteDialogComponent.prototype.ngOnInit = function () {
    };
    DeleteDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-delete-dialog',
            template: __webpack_require__("../../../../../src/app/commons/widget/delete-dialog/delete-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/delete-dialog/delete-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["e" /* UserService */]])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/edit-class-dialog/edit-class-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/edit-class-dialog/edit-class-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-class-dialog works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/edit-class-dialog/edit-class-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClassDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditClassDialogComponent = (function () {
    function EditClassDialogComponent() {
    }
    EditClassDialogComponent.prototype.ngOnInit = function () {
    };
    EditClassDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-edit-class-dialog',
            template: __webpack_require__("../../../../../src/app/commons/widget/edit-class-dialog/edit-class-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/edit-class-dialog/edit-class-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditClassDialogComponent);
    return EditClassDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/edit-result-dialog/edit-result-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  text-transform: uppercase;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/edit-result-dialog/edit-result-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Edit {{subject}}</h1>\n<div md-dialog-content>\n  <div class=\"row\">\n    <form [formGroup]=\"editForm\">\n      <div class=\"col-sm-12\">\n        <md-input-container>\n          <input mdInput placeholder=\"CA Test Score\" formControlName=\"caScore\">\n        </md-input-container>\n      </div>\n      <div class=\"col-sm-12\">\n        <md-input-container>\n          <input mdInput placeholder=\"Exam Score\" formControlName=\"examScore\">\n        </md-input-container>\n      </div>\n    </form>\n  </div>\n</div>\n<div md-dialog-actions>\n  <button md-button md-dialog-close=\"cancel\">Cancel</button>\n  <button md-button (click)=\"getScores()\">Save</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/edit-result-dialog/edit-result-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditResultDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var Parse = __webpack_require__("../../../../parse/index.js");
var EditResultDialogComponent = (function () {
    function EditResultDialogComponent(editResultDialogRef, data, fb) {
        this.editResultDialogRef = editResultDialogRef;
        this.data = data;
        this.fb = fb;
        this.subject = "";
        this.caScore = 0;
        this.examScore = 0;
    }
    EditResultDialogComponent.prototype.ngOnInit = function () {
        this.subject = this.data.get("subject").get("title");
        this.caScore = this.data.get("caScore");
        this.examScore = this.data.get("examScore");
        this.editForm = this.fb.group({
            caScore: [this.caScore],
            examScore: [this.examScore]
        });
    };
    EditResultDialogComponent.prototype.getScores = function () {
        this.editResultDialogRef.close({
            id: this.data.id,
            caScore: this.editForm.value.caScore,
            examScore: this.editForm.value.examScore
        });
    };
    EditResultDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sp-edit-result-dialog',
            template: __webpack_require__("../../../../../src/app/commons/widget/edit-result-dialog/edit-result-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/edit-result-dialog/edit-result-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], EditResultDialogComponent);
    return EditResultDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/empty-message/empty-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/empty-message/empty-message.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  empty-message works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/empty-message/empty-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmptyMessageComponent = (function () {
    function EmptyMessageComponent() {
    }
    EmptyMessageComponent.prototype.ngOnInit = function () {
    };
    EmptyMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-empty-message',
            template: __webpack_require__("../../../../../src/app/commons/widget/empty-message/empty-message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/empty-message/empty-message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmptyMessageComponent);
    return EmptyMessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/fab/fab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fab {\n  position: fixed;\n  bottom: 40px;\n  right: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/fab/fab.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"fab\" md-fab>\n  <md-icon>{{icon}}</md-icon>\n</button>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/fab/fab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FabComponent = (function () {
    function FabComponent() {
        this.icon = "add";
    }
    FabComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FabComponent.prototype, "icon", void 0);
    FabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-fab',
            template: __webpack_require__("../../../../../src/app/commons/widget/fab/fab.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/fab/fab.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FabComponent);
    return FabComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/file-uploader/file-uploader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-icon {\n  height: 96px;\n  width: 96px;\n}\n\n.title {\n  font-weight: bold;\n  margin-left: 12px;\n}\n\nmd-progress-spinner {\n  width: 50%;\n  height: 50%;\n}\n\n.container {\n  position: relative;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0.8;\n  transition: .5s ease;\n  background-color: #008CBA;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/file-uploader/file-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"icon\">\n  <md-icon svgIcon=\"{{getIcon(file.file)}}\"></md-icon>\n</div>\n<span class=\"title\">\n  {{file.file.name}}\n</span>\n<md-progress-bar *ngIf=\"file.isDirty\" mode=\"indeterminate\"></md-progress-bar>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/file-uploader/file-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Parse = __webpack_require__("../../../../parse/index.js");
var FileUploaderComponent = (function () {
    function FileUploaderComponent(iconRegistry, sanitizer) {
        this.onFileUploaded = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        iconRegistry.addSvgIcon('png', sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/png.svg'));
        iconRegistry.addSvgIcon('file', sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/file.svg'));
        iconRegistry.addSvgIcon('svg', sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/svg.svg'));
        iconRegistry.addSvgIcon('pdf', sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/pdf.svg'));
    }
    FileUploaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.file.isDirty) {
            this.uploadFile(this.file.file).subscribe(function (att) {
                _this.file.isDirty = false;
                _this.onFileUploaded.emit({ pf: att, local: _this.file });
            }, function (err) {
                console.log(err);
            });
        }
    };
    FileUploaderComponent.prototype.ngOnDestroy = function () {
        if (this.uploadSub) {
            this.uploadSub.unsubscribe();
        }
    };
    FileUploaderComponent.prototype.uploadFile = function (file) {
        var upload = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */](function (observer) {
            var f = new Parse.File(file.name, file, file.type);
            f.save().then(function (pf) {
                var attachment = new Parse.Object("Attachment");
                attachment.set("file", pf);
                return attachment.save();
            }).then(function (att) {
                observer.next(att);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
        return upload;
    };
    FileUploaderComponent.prototype.getIcon = function (file) {
        if (file.type.match('image/*')) {
            return 'png';
        }
        else if (file.type === 'application/pdf') {
            return 'pdf';
        }
        switch (file.type) {
            case 'image/svg+xml':
                return 'svg';
            default:
                return 'file';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FileUploaderComponent.prototype, "file", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
    ], FileUploaderComponent.prototype, "onFileUploaded", void 0);
    FileUploaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sp-file-uploader',
            template: __webpack_require__("../../../../../src/app/commons/widget/file-uploader/file-uploader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/file-uploader/file-uploader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"]])
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer> {{getYear()}} © Schoolpop by Glassstone Solutions.</footer>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getYear = function () {
        return __WEBPACK_IMPORTED_MODULE_1_moment__().format('YYYY');
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-footer',
            template: __webpack_require__("../../../../../src/app/commons/widget/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/full-calendar/full-calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div #fullCalender></div>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/full-calendar/full-calendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null],\"sourceMap\":false}!../../../../fullcalendar/dist/fullcalendar.min.css"), "");

// module
exports.push([module.i, "/*!\n * FullCalendar v1.6.4 Stylesheet\n * Docs & License: http://arshaw.com/fullcalendar/\n * (c) 2013 Adam Shaw\n */\n.fc {\n  direction: ltr;\n  text-align: left; }\n  .fc table {\n    border-collapse: collapse;\n    border-spacing: 0; }\n\nhtml .fc {\n  font-size: 1em;\n  font-family: \"Helvetica Neue\", Helvetica; }\n\n.fc table {\n  font-size: 1em;\n  font-family: \"Helvetica Neue\", Helvetica; }\n\n.fc td,\n.fc th {\n  padding: 0;\n  vertical-align: top; }\n\n/* Header\n------------------------------------------------------------------------*/\n.fc-header td {\n  white-space: nowrap;\n  padding: 15px 10px 0px; }\n\n.fc-header-left {\n  width: 25%;\n  text-align: left; }\n\n.fc-header-center {\n  text-align: center; }\n\n.fc-header-right {\n  width: 25%;\n  text-align: right; }\n\n.fc-header-title {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: -5px; }\n  .fc-header-title h2 {\n    margin-top: 0;\n    white-space: nowrap;\n    font-size: 32px;\n    font-weight: 100;\n    margin-bottom: 10px; }\n\n.fc .fc-header-space {\n  padding-left: 10px; }\n\n.fc-header .fc-button {\n  margin-bottom: 1em;\n  vertical-align: top;\n  margin-right: -1px; }\n\n.fc-header .fc-corner-right,\n.fc-header .ui-corner-right {\n  /* theme */\n  margin-right: 0;\n  /* back to normal */ }\n\n.fc-header .fc-state-hover,\n.fc-header .ui-state-hover {\n  z-index: 2; }\n\n.fc-header .fc-state-down {\n  z-index: 3; }\n\n.fc-header .fc-state-active,\n.fc-header .ui-state-active {\n  z-index: 4; }\n\n/* buttons edges butting together */\n/* button layering (for border precedence) */\n/* Content\n------------------------------------------------------------------------*/\n.fc-content {\n  clear: both;\n  zoom: 1;\n  /* for IE7, gives accurate coordinates for [un]freezeContentHeight */ }\n\n.fc-view {\n  width: 100%;\n  overflow: hidden; }\n\n/* Cell Styles\n------------------------------------------------------------------------*/\n/* <th>, usually */\n.fc-widget-content {\n  /* <td>, usually */\n  border: 1px solid #e5e5e5; }\n\n.fc-widget-header {\n  border-bottom: 1px solid #EEE; }\n\n.fc-state-highlight {\n  /* <td> today cell */\n  /* TODO: add .fc-today to <th> */\n  /* background: #fcf8e3; */ }\n  .fc-state-highlight > div > div.fc-day-number {\n    background-color: #ff3b30;\n    color: #FFFFFF;\n    border-radius: 50%;\n    margin: 4px; }\n\n.fc-cell-overlay {\n  /* semi-transparent rectangle while dragging */\n  background: #bce8f1;\n  opacity: .3;\n  filter: alpha(opacity=30);\n  /* for IE */ }\n\n/* Buttons\n------------------------------------------------------------------------*/\n.fc-button {\n  position: relative;\n  display: inline-block;\n  padding: 0 .6em;\n  overflow: hidden;\n  height: 1.9em;\n  line-height: 1.9em;\n  white-space: nowrap;\n  cursor: pointer; }\n\n.fc-state-default {\n  /* non-theme */\n  border: 1px solid; }\n  .fc-state-default.fc-corner-left {\n    /* non-theme */\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px; }\n  .fc-state-default.fc-corner-right {\n    /* non-theme */\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px; }\n\n/*\n\tOur default prev/next buttons use HTML entities like &lsaquo; &rsaquo; &laquo; &raquo;\n\tand we'll try to make them look good cross-browser.\n*/\n.fc-text-arrow {\n  margin: 0 .4em;\n  font-size: 2em;\n  line-height: 23px;\n  vertical-align: baseline;\n  /* for IE7 */ }\n\n.fc-button-prev .fc-text-arrow,\n.fc-button-next .fc-text-arrow {\n  /* for &lsaquo; &rsaquo; */\n  font-weight: bold; }\n\n/* icon (for jquery ui) */\n.fc-button .fc-icon-wrap {\n  position: relative;\n  float: left;\n  top: 50%; }\n\n.fc-button .ui-icon {\n  position: relative;\n  float: left;\n  margin-top: -50%;\n  *margin-top: 0;\n  *top: -50%; }\n\n.fc-state-default {\n  border-color: #ff3b30;\n  color: #ff3b30; }\n\n.fc-button-month.fc-state-default,\n.fc-button-agendaWeek.fc-state-default,\n.fc-button-agendaDay.fc-state-default {\n  min-width: 67px;\n  text-align: center;\n  transition: all 0.2s;\n  -webkit-transition: all 0.2s; }\n\n.fc-state-hover,\n.fc-state-down,\n.fc-state-active,\n.fc-state-disabled {\n  color: #333333;\n  background-color: #FFE3E3; }\n\n.fc-state-hover {\n  color: #ff3b30;\n  text-decoration: none;\n  background-position: 0 -15px;\n  transition: background-position 0.1s linear; }\n\n.fc-state-down,\n.fc-state-active {\n  background-color: #ff3b30;\n  background-image: none;\n  outline: 0;\n  color: #FFFFFF; }\n\n.fc-state-disabled {\n  cursor: default;\n  background-image: none;\n  background-color: #FFE3E3;\n  filter: alpha(opacity=65);\n  box-shadow: none;\n  border: 1px solid #FFE3E3;\n  color: #ff3b30; }\n\n/* Global Event Styles\n------------------------------------------------------------------------*/\n.fc-event-container > * {\n  z-index: 8; }\n\n.fc-event-container > .ui-draggable-dragging,\n.fc-event-container > .ui-resizable-resizing {\n  z-index: 9; }\n\n.fc-event {\n  border: 1px solid #FFF;\n  /* default BORDER color */\n  background-color: #FFF;\n  /* default BACKGROUND color */\n  color: #919191;\n  /* default TEXT color */\n  font-size: 12px;\n  cursor: default; }\n  .fc-event.chill {\n    background-color: #f3dcf8; }\n  .fc-event.info {\n    background-color: #c6ebfe; }\n  .fc-event.important {\n    background-color: #FFBEBE; }\n  .fc-event.success {\n    background-color: #BEFFBF; }\n  .fc-event:hover {\n    opacity: 0.7; }\n\na.fc-event {\n  text-decoration: none;\n  cursor: pointer; }\n\n.fc-event-draggable {\n  cursor: pointer; }\n\n.fc-rtl .fc-event {\n  text-align: right; }\n\n.fc-event-inner {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  line-height: 15px; }\n\n.fc-event-time,\n.fc-event-title {\n  padding: 0 1px; }\n\n.fc .ui-resizable-handle {\n  display: block;\n  position: absolute;\n  z-index: 99999;\n  overflow: hidden;\n  /* hacky spaces (IE6/7) */\n  font-size: 300%;\n  /* */\n  line-height: 50%;\n  /* */ }\n\n/* Horizontal Events\n------------------------------------------------------------------------*/\n.fc-event-hori {\n  border-width: 1px 0;\n  margin-bottom: 1px; }\n\n.fc-ltr .fc-event-hori.fc-event-start,\n.fc-rtl .fc-event-hori.fc-event-end {\n  border-left-width: 1px;\n  /*\nborder-top-left-radius: 3px;\n\tborder-bottom-left-radius: 3px;\n*/ }\n\n.fc-ltr .fc-event-hori.fc-event-end,\n.fc-rtl .fc-event-hori.fc-event-start {\n  border-right-width: 1px;\n  /*\nborder-top-right-radius: 3px;\n\tborder-bottom-right-radius: 3px;\n*/ }\n\n/* resizable */\n.fc-event-hori .ui-resizable-e {\n  top: 0 !important;\n  /* importants override pre jquery ui 1.7 styles */\n  right: -3px !important;\n  width: 7px !important;\n  height: 100% !important;\n  cursor: e-resize; }\n\n.fc-event-hori .ui-resizable-w {\n  top: 0 !important;\n  left: -3px !important;\n  width: 7px !important;\n  height: 100% !important;\n  cursor: w-resize; }\n\n.fc-event-hori .ui-resizable-handle {\n  _padding-bottom: 14px;\n  /* IE6 had 0 height */ }\n\n/* Reusable Separate-border Table\n------------------------------------------------------------*/\ntable.fc-border-separate {\n  border-collapse: separate; }\n\n.fc-border-separate th,\n.fc-border-separate td {\n  border-width: 1px 0 0 1px; }\n\n.fc-border-separate th.fc-last,\n.fc-border-separate td.fc-last {\n  border-right-width: 1px; }\n\n.fc-border-separate .fc-week .fc-first {\n  border-left: 0; }\n\n.fc-border-separate .fc-week .fc-last {\n  border-right: 0; }\n\n.fc-border-separate tr.fc-last th {\n  border-bottom-width: 1px;\n  border-color: #cdcdcd;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 30px; }\n\n.fc-border-separate tbody tr.fc-first td,\n.fc-border-separate tbody tr.fc-first th {\n  border-top-width: 0; }\n\n/* Month View, Basic Week View, Basic Day View\n------------------------------------------------------------------------*/\n.fc-grid th {\n  text-align: center; }\n\n.fc .fc-week-number {\n  width: 22px;\n  text-align: center; }\n  .fc .fc-week-number div {\n    padding: 0 2px; }\n\n.fc-grid .fc-day-number {\n  float: right;\n  padding: 0 2px; }\n\n.fc-grid .fc-other-month .fc-day-number {\n  opacity: 0.3;\n  filter: alpha(opacity=30);\n  /* for IE */\n  /* opacity with small font can sometimes look too faded\n\t   might want to set the 'color' property instead\n\t   making day-numbers bold also fixes the problem */ }\n\n.fc-grid .fc-day-content {\n  clear: both;\n  padding: 2px 2px 1px;\n  /* distance between events and day edges */ }\n\n.fc-grid .fc-event-time {\n  font-weight: bold; }\n\n/* event styles */\n/* right-to-left */\n.fc-rtl .fc-grid .fc-day-number {\n  float: left; }\n\n.fc-rtl .fc-grid .fc-event-time {\n  float: right; }\n\n/* Agenda Week View, Agenda Day View\n------------------------------------------------------------------------*/\n.fc-agenda table {\n  border-collapse: separate; }\n\n.fc-agenda-days th {\n  text-align: center; }\n\n.fc-agenda .fc-agenda-axis {\n  width: 50px;\n  padding: 0 4px;\n  vertical-align: middle;\n  text-align: right;\n  white-space: nowrap;\n  font-weight: normal; }\n\n.fc-agenda .fc-week-number {\n  font-weight: bold; }\n\n.fc-agenda .fc-day-content {\n  padding: 2px 2px 1px; }\n\n/* make axis border take precedence */\n.fc-agenda-days .fc-agenda-axis {\n  border-right-width: 1px; }\n\n.fc-agenda-days .fc-col0 {\n  border-left-width: 0; }\n\n/* all-day area */\n.fc-agenda-allday th {\n  border-width: 0 1px; }\n\n.fc-agenda-allday .fc-day-content {\n  min-height: 34px;\n  /* TODO: doesnt work well in quirksmode */\n  _height: 34px; }\n\n/* divider (between all-day and slots) */\n.fc-agenda-divider-inner {\n  height: 2px;\n  overflow: hidden; }\n\n.fc-widget-header .fc-agenda-divider-inner {\n  background: #eee; }\n\n/* slot rows */\n.fc-agenda-slots th {\n  border-width: 1px 1px 0; }\n\n.fc-agenda-slots td {\n  border-width: 1px 0 0;\n  background: none; }\n  .fc-agenda-slots td div {\n    height: 20px; }\n\n.fc-agenda-slots tr.fc-slot0 th,\n.fc-agenda-slots tr.fc-slot0 td {\n  border-top-width: 0; }\n\n.fc-agenda-slots tr.fc-minor th.ui-widget-header {\n  *border-top-style: solid;\n  /* doesn't work with background in IE6/7 */ }\n\n/* Vertical Events\n------------------------------------------------------------------------*/\n.fc-event-vert {\n  border-width: 0 1px; }\n  .fc-event-vert.fc-event-start {\n    border-top-width: 1px;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n  .fc-event-vert.fc-event-end {\n    border-bottom-width: 1px;\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n  .fc-event-vert .fc-event-time {\n    white-space: nowrap;\n    font-size: 10px; }\n  .fc-event-vert .fc-event-inner {\n    position: relative;\n    z-index: 2; }\n  .fc-event-vert .fc-event-bg {\n    /* makes the event lighter w/ a semi-transparent overlay  */\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    opacity: .25;\n    filter: alpha(opacity=25); }\n\n.fc .ui-draggable-dragging .fc-event-bg,\n.fc-select-helper .fc-event-bg {\n  display: none\\9;\n  /* for IE6/7/8. nested opacity filters while dragging don't work */ }\n\n/* resizable */\n.fc-event-vert .ui-resizable-s {\n  bottom: 0 !important;\n  /* importants override pre jquery ui 1.7 styles */\n  width: 100% !important;\n  height: 8px !important;\n  overflow: hidden !important;\n  line-height: 8px !important;\n  font-size: 11px !important;\n  font-family: monospace;\n  text-align: center;\n  cursor: s-resize; }\n\n.fc-agenda .ui-resizable-resizing {\n  /* TODO: better selector */\n  _overflow: hidden; }\n\nthead tr.fc-first {\n  background-color: #f7f7f7; }\n\ntable.fc-header {\n  background-color: #FFFFFF;\n  border-radius: 6px 6px 0 0; }\n\n.fc-week .fc-day > div .fc-day-number {\n  font-size: 15px;\n  margin: 2px;\n  min-width: 19px;\n  padding: 6px;\n  text-align: center; }\n\n.fc-sun,\n.fc-sat {\n  color: #b8b8b8; }\n\n.fc-week .fc-day:hover .fc-day-number {\n  background-color: #B8B8B8;\n  border-radius: 50%;\n  color: #FFFFFF;\n  transition: background-color 0.2s; }\n\n.fc-week .fc-day.fc-state-highlight:hover .fc-day-number {\n  background-color: #ff3b30; }\n\n.fc-button-today {\n  border: 1px solid rgba(255, 255, 255, 0); }\n\n.fc-view-agendaDay thead tr.fc-first .fc-widget-header {\n  text-align: right;\n  padding-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/full-calendar/full-calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullCalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_fullcalendar_dist_fullcalendar_min_js__ = __webpack_require__("../../../../fullcalendar/dist/fullcalendar.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_fullcalendar_dist_fullcalendar_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_fullcalendar_dist_fullcalendar_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullCalendarComponent = (function () {
    function FullCalendarComponent() {
        this.initFlag = false;
    }
    FullCalendarComponent.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options) {
            this.build();
        }
    };
    FullCalendarComponent.prototype.ngOnChanges = function (changes) {
        if (changes.options.currentValue) {
            jQuery(this.fullCalender.nativeElement).fullCalendar(changes.options.currentValue);
        }
    };
    FullCalendarComponent.prototype.ngOnDestroy = function () {
        if (this.calendar) {
            this.calendar = void 0;
        }
    };
    FullCalendarComponent.prototype.build = function () {
        // Clear before rebuild
        this.ngOnDestroy();
        if (typeof jQuery.fullCalendar === 'undefined') {
            throw new Error('Configuration issue: Embedding jquery.fullCalendar.js lib is mandatory');
        }
        this.calendar = jQuery(this.fullCalender.nativeElement).fullCalendar(this.options);
    };
    FullCalendarComponent.prototype.onResize = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FullCalendarComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fullCalender'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FullCalendarComponent.prototype, "fullCalender", void 0);
    FullCalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-full-calendar',
            template: __webpack_require__("../../../../../src/app/commons/widget/full-calendar/full-calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/full-calendar/full-calendar.component.scss")],
            host: {
                '(window:resize)': 'onResize()'
            }
        }),
        __metadata("design:paramtypes", [])
    ], FullCalendarComponent);
    return FullCalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/gravatar/gravatar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  border-radius: 50%;\n  margin-right: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/gravatar/gravatar.component.html":
/***/ (function(module, exports) {

module.exports = "<img *ngIf=\"user && user.get('img'); else g\" src=\"{{user.get('img').url()}}\" [width]=\"width\" height=\"{{width}}\" alt=\"\">\n<ng-template #g>\n  <img src=\"{{getHash(user.get('email'))}}\" [width]=\"width\" height=\"{{width}}\" alt=\"\">\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/gravatar/gravatar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GravatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__md5__ = __webpack_require__("../../../../../src/app/md5.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GravatarComponent = (function () {
    function GravatarComponent() {
    }
    GravatarComponent.prototype.ngOnInit = function () {
    };
    GravatarComponent.prototype.getHash = function (email) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__md5__["b" /* getSrc */])(email);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GravatarComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], GravatarComponent.prototype, "width", void 0);
    GravatarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-gravatar',
            template: __webpack_require__("../../../../../src/app/commons/widget/gravatar/gravatar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/gravatar/gravatar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GravatarComponent);
    return GravatarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/link-parent/link-parent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mr-2 {\n  margin-right: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/link-parent/link-parent.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>Link Parent</h1>\n<div md-dialog-content>\n  <div class=\"row\">\n    <form [formGroup]=\"linkParentForm\">\n      <md-input-container class=\"col-sm-12\">\n        <input type=\"text\" mdInput placeholder=\"Parent's username, user ID or email\" formControlName=\"term\">\n      </md-input-container>\n    </form>\n  </div>\n  <div *ngIf=\"parent\" class=\"row\">\n    <div class=\"col-sm-3\">\n      <img src=\"{{parent?.avatar}}\" alt=\"\">\n    </div>\n    <div class=\"col-sm-7\">\n      <p>{{parent?.firstName}} {{parent?.lastName}}</p>\n    </div>\n  </div>\n</div>\n<div md-dialog-actions>\n  <button md-button md-dialog-close=\"cancel\" class=\"mr-2\">Cancel</button>\n  <button\n    md-raised-button\n    class=\"mr-2\"\n    [disabled]=\"linkParentForm.invalid\"\n    (click)=\"search()\">\n    Search\n  </button>\n  <button *ngIf=\"parent\" md-raised-button (click)=\"link()\" color=\"warn\">Link</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/link-parent/link-parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LinkParentComponent = (function () {
    function LinkParentComponent(linkParentDialogRef, data, fb, us) {
        this.linkParentDialogRef = linkParentDialogRef;
        this.data = data;
        this.fb = fb;
        this.us = us;
        this.linkParentForm = fb.group({
            term: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    LinkParentComponent.prototype.ngOnInit = function () {
    };
    LinkParentComponent.prototype.search = function () {
        var _this = this;
        var term = this.linkParentForm.value.term;
        this.us.searchUserByTerm(term, 'parent')
            .filter(function (u) { return u.length > 0; })
            .map(function (u) { return _this.us.getUserVM(u[0]); })
            .subscribe(function (user) { return _this.parent = user; });
    };
    LinkParentComponent.prototype.link = function () {
        if (parent) {
            this.linkParentDialogRef.close({
                parent: this.parent
            });
        }
    };
    LinkParentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-link-parent',
            template: __webpack_require__("../../../../../src/app/commons/widget/link-parent/link-parent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/link-parent/link-parent.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["e" /* UserService */]])
    ], LinkParentComponent);
    return LinkParentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/message-item/message-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/message-item/message-item.component.html":
/***/ (function(module, exports) {

module.exports = "<td class=\"inbox-small-cells\">\n  <label class=\"checkbox-custom check-success\">\n    <input type=\"checkbox\" value=\"c1\" id=\"c1\"> <label for=\"c1\"> </label>\n  </label>\n</td>\n<td class=\"inbox-small-cells\"><i class=\"fa fa-star inbox-started\"></i></td>\n<td class=\"view-message dont-show\">\n  Small Doctor\n</td>\n<td class=\"view-message\">\n  Maga don die\n</td>\n<td>\n  2 hours ago\n</td>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/message-item/message-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageItemComponent = (function () {
    function MessageItemComponent() {
    }
    MessageItemComponent.prototype.ngOnInit = function () {
    };
    MessageItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-message-item',
            template: __webpack_require__("../../../../../src/app/commons/widget/message-item/message-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/message-item/message-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageItemComponent);
    return MessageItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/message-list/message-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td {\n  text-transform: capitalize;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/message-list/message-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox-body no-pad\">\n  <table class=\"table table-inbox table-hover\">\n    <tbody>\n      <ng-container *ngFor=\"let mail of messages\">\n        <tr [ngClass]=\"{'unread': !mail.isRead }\">\n          <td class=\"inbox-small-cells\">\n            <label class=\"checkbox-custom check-success\">\n              <input type=\"checkbox\" value=\"c1\" id=\"c1\"> <label for=\"c1\"> </label>\n            </label>\n          </td>\n          <td class=\"inbox-small-cells\"><i class=\"fa fa-star inbox-started\"></i></td>\n          <td (click)=\"viewMessage(mail.objectId)\" class=\"view-message dont-show\">\n            {{mail.fullName}}\n          </td>\n          <td (click)=\"viewMessage(mail.objectId)\" class=\"view-message\">\n            {{mail.subject}}\n          </td>\n          <td (click)=\"viewMessage(mail.objectId)\">\n            {{formatTime(mail.createdAt)}}\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/message-list/message-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_message_action__ = __webpack_require__("../../../../../src/app/message/message-action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moment_util__ = __webpack_require__("../../../../../src/app/moment-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageListComponent = (function () {
    function MessageListComponent(store) {
        this.store = store;
        this.moment = new __WEBPACK_IMPORTED_MODULE_2__moment_util__["a" /* MomentUtil */]().getMoment();
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.subscribe(function (state) {
            _this.section = state.uiState.currentMailSection;
        });
    };
    MessageListComponent.prototype.formatTime = function (date) {
        return this.moment(date).fromNow();
    };
    MessageListComponent.prototype.viewMessage = function (id) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__message_message_action__["f" /* LoadViewMessageAction */]({ id: id, section: this.section }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MessageListComponent.prototype, "messages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MessageListComponent.prototype, "section", void 0);
    MessageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'sp-message-list',
            template: __webpack_require__("../../../../../src/app/commons/widget/message-list/message-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/message-list/message-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */]])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notification-menu .info-number {\n  padding: 0px 18px;\n  height: 60px;\n  line-height: 60px;\n  font-size: 16px;\n  background: none;\n  color: #8b8b8b;\n  border-color: #fff;\n  transition: all 0.2s ease-out 0s;\n  float: left;\n}\n\n.info-number .badge {\n  font-size: 11px;\n  font-weight: normal;\n  line-height: 13px;\n  padding: 2px 6px;\n  position: absolute;\n  right: 5px;\n  top: 10px;\n}\n\n.bg-primary,\n.info-number .bg-primary {\n  color: #fff;\n  background-color: #9c78cd;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-section\">\n  <!--Logo start-->\n  <div class=\"logo dark-logo-bg hidden-xs hidden-sm hidden-md\">\n    <a routerLink=\"/\">\n      <img src=\"assets/img/logo.png\" width=\"32\" alt=\"\">\n      <!--<i class=\"fa fa-maxcdn\"></i>-->\n      <span class=\"brand-name\">Schoolpop</span>\n    </a>\n  </div>\n\n  <div class=\"icon-logo dark-logo-bg hidden-xs hidden-sm\">\n    <a routerLink=\"/\">\n      <img src=\"assets/img/logo.png\" width=\"32\" alt=\"\">\n    </a>\n  </div>\n\n  <!-- logo and Logo icon end-->\n\n  <!--toggle button start-->\n  <sp-toggle-button (click)=\"toggle()\"></sp-toggle-button>\n  <!--toggle button end-->\n  <div class=\"notification-wrap\">\n    <!--Left notification-->\n    <div class=\"left-notification\">\n      <ul class=\"notification-menu\">\n        <li class=\"d-none\">\n\n          <a class=\"btn btn-default dropdown-toggle info-number\" data-toggle=\"dropdown\">\n            <!--TODO: Replace placeholder-->\n            <i class=\"fa fa-envelope-o\"></i>\n            <span class=\"badge bg-primary\">{{count}}</span>\n          </a>\n\n          <div class=\"dropdown-menu dropdown-title\">\n            <div class=\"title-row\">\n              <h5 class=\"title purple\">\n                {{count | i18nPlural: mailMapping}}\n              </h5>\n              <a [routerLink]=\"['/mail', 'inbox']\" class=\"btn-primary btn-view-all\">View all</a>\n            </div>\n            <div class=\"notification-list mail-list\">\n              <a class=\"single-mail\" [routerLink]=\"['/message', mail.objectId]\" *ngFor=\"let mail of mails; let i=index\">\n                <span class=\"icon\">{{mail.from.firstName | slice:0:1}} {{mail.from.lastName | slice:0:1}}</span>\n                <strong>{{mail.from.firstName}} {{mail.from.lastName}}</strong>\n                <small>\n                  {{getFormattedDate(mail.createdAt)}}\n                </small>\n                <p>\n                \t<small>{{mail.subject}}</small>\n               \t</p>\n                <span class=\"un-read tooltips\" data-original-title=\"Mark as Read\" data-toggle=\"tooltip\" data-placement=\"left\">\n                    <i class=\"fa fa-circle\"></i>\n                </span>\n              </a>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <!--Left notification end-->\n\n    <!--Right notification-->\n    <div class=\"right-notification\">\n      <ul class=\"notification-menu\">\n\n        <!--Search-->\n        <li>\n          <form class=\"search-content\" [formGroup]=\"searchForm\">\n            <input type=\"text\" formControlName=\"term\" class=\"form-control\" name=\"keyword\" placeholder=\"Search...\">\n          </form>\n        </li>\n        <!--Search end-->\n\n        <li>\n\n          <a class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n            <sp-gravatar [user]=\"ps.currentUser\" [width]=\"32\"></sp-gravatar>\n            {{getUserName()}}\n            <span class=\" fa fa-angle-down\"></span>\n          </a>\n\n          <ul class=\"dropdown-menu dropdown-usermenu purple pull-right\">\n            <li><a [routerLink]=\"['/profile']\" >  Profile</a></li>\n            <li>\n              <a [routerLink]=\"['/setting']\" >\n                <span>Settings</span>\n              </a>\n            </li>\n            <li>\n              <a (click)=\"logout()\">Logout</a>\n            </li>\n          </ul>\n\n        </li>\n      </ul>\n    </div>\n    <!--Right notification end-->\n  </div>\n\n</div>\n<md-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></md-progress-bar>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moment_util__ = __webpack_require__("../../../../../src/app/moment-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_js_helpers__ = __webpack_require__("../../../../../src/app/app.js.helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NavbarComponent = (function () {
    function NavbarComponent(store, ms, parse, ss, ls, fb, router) {
        var _this = this;
        this.store = store;
        this.ms = ms;
        this.parse = parse;
        this.ss = ss;
        this.ls = ls;
        this.fb = fb;
        this.router = router;
        this.mails = [];
        this.terms = '';
        this.isLoading = false;
        this.ps = this.parse;
        this.moment = new __WEBPACK_IMPORTED_MODULE_1__moment_util__["a" /* MomentUtil */]().getMoment();
        this.mailMapping = { '=0': 'No unread mails.', '=1': 'One unread mail.', 'other': '# unread mails.' };
        store.subscribe(function (state) {
            _this.mails = __WEBPACK_IMPORTED_MODULE_10_lodash__["values"](state.dataState.inbox);
            _this.mails = _this.mails.filter(function (mail) { return mail.isRead == false; });
            _this.count = state.uiState.currentUnread;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.searchForm.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .subscribe(function (v) { return _this.ss.setQ(v.term); });
        // this.messageStreamSub = this.ms.messageStream().subscribe();
        this.ls.loadingObservable.subscribe(function (l) { return _this.isLoading = l; });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        // this.messageStreamSub.unsubscribe();
    };
    NavbarComponent.prototype.createForm = function () {
        this.searchForm = this.fb.group({
            term: ['']
        });
    };
    NavbarComponent.prototype.toggle = function () {
        var body = jQuery('body');
        var bodyposition = body.css('position');
        if (bodyposition !== 'relative') {
            if (!body.hasClass('sidebar-collapsed')) {
                body.addClass('sidebar-collapsed');
                jQuery('.side-navigation ul').attr('style', '');
            }
            else {
                body.removeClass('sidebar-collapsed chat-view');
                jQuery('.side-navigation li.active ul').css({ display: 'block' });
            }
        }
        else {
            if (body.hasClass('sidebar-open'))
                body.removeClass('sidebar-open');
            else
                body.addClass('sidebar-open');
            Object(__WEBPACK_IMPORTED_MODULE_6__app_js_helpers__["a" /* adjustMainContentHeight */])();
        }
    };
    NavbarComponent.prototype.getUserName = function () {
        return this.ps.currentUser.get("firstName") + " " + this.ps.currentUser.get("lastName");
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.ls.setLoading(true);
        this.ps.logout().subscribe(function (l) {
            _this.ls.setLoading(false);
            location.href = "/";
        });
    };
    NavbarComponent.prototype.getFormattedDate = function (date) {
        return this.moment(date).fromNow();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'sp-navbar',
            template: __webpack_require__("../../../../../src/app/commons/widget/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* Store */], __WEBPACK_IMPORTED_MODULE_9__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_4__services_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_7__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_2__services_loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_8__angular_router__["f" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/new-class-dialog/new-class-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/new-class-dialog/new-class-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>New Class</h1>\n<div md-dialog-content>\n  <form [formGroup]=\"editForm\">\n\n    <md-input-container>\n      <input mdInput placeholder=\"Class title\" formControlName=\"commonName\">\n    </md-input-container>\n    <md-input-container>\n      <input mdInput placeholder=\"Class fee in Naira\" formControlName=\"fee\">\n    </md-input-container>\n  </form>\n</div>\n<div md-dialog-actions>\n  <button md-button md-dialog-close=\"cancel\">Cancel</button>\n  <button md-button (click)=\"saveClass()\" [disabled]=\"!editForm.valid\">Save</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/new-class-dialog/new-class-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewClassDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NewClassDialogComponent = (function () {
    function NewClassDialogComponent(newClassDialogRef, data, fb) {
        this.newClassDialogRef = newClassDialogRef;
        this.data = data;
        this.fb = fb;
    }
    NewClassDialogComponent.prototype.ngOnInit = function () {
        this.editForm = this.fb.group({
            commonName: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required],
            fee: [0, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].min(1)]]
        });
    };
    NewClassDialogComponent.prototype.saveClass = function () {
        this.newClassDialogRef.close({
            title: this.editForm.value.commonName,
            fee: this.editForm.value.fee
        });
    };
    NewClassDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'sp-new-class-dialog',
            template: __webpack_require__("../../../../../src/app/commons/widget/new-class-dialog/new-class-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/new-class-dialog/new-class-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"]])
    ], NewClassDialogComponent);
    return NewClassDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/news-card/news-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*      light colors         */\n\n\n/*           Font Smoothing      */\n\n.card h1,\n.card .h1,\n.card h2,\n.card .h2,\n.card h3,\n.card .h3,\n.card h4,\n.card .h4,\n.card h5,\n.card .h5,\n.card h6,\n.card .h6,\n.card p,\n.card .navbar,\n.card .brand,\n.card .btn,\n.card a,\n.card .td-name,\n.card td {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Playfair Display\", \"Raleway\", \"Helvetica Neue\", Arial, sans-serif;\n}\n\n.card h1,\n.card .h1,\n.card h2,\n.card .h2,\n.card h3,\n.card .h3,\n.card h4,\n.card .h4 {\n  font-weight: 400;\n  margin: 30px 0 15px;\n}\n\n.card h1,\n.card .h1 {\n  font-size: 52px;\n}\n\n.card h2,\n.card .h2 {\n  font-size: 36px;\n}\n\n.card h3,\n.card .h3 {\n  font-size: 28px;\n  margin: 20px 0 10px;\n}\n\n.card h4,\n.card .h4 {\n  font-size: 24px;\n  line-height: 30px;\n}\n\n.card h5,\n.card .h5 {\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n\n.card h6,\n.card .h6 {\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.card p {\n  font-size: 16px;\n  line-height: 1.3;\n  font-family: \"Raleway\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\n.card .category,\n.card .label,\n.card .title-modern,\n.card .btn-modern,\n.card .price h4 {\n  font-family: \"Raleway\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\n.card h1 small,\n.card h2 small,\n.card h3 small,\n.card h4 small,\n.card h5 small,\n.card h6 small,\n.card .h1 small,\n.card .h2 small,\n.card .h3 small,\n.card .h4 small,\n.card .h5 small,\n.card .h6 small,\n.card h1 .small,\n.card h2 .small,\n.card h3 .small,\n.card h4 .small,\n.card h5 .small,\n.card h6 .small,\n.card .h1 .small,\n.card .h2 .small,\n.card .h3 .small,\n.card .h4 .small,\n.card .h5 .small,\n.card .h6 .small {\n  color: #9A9A9A;\n  font-weight: 300;\n  line-height: 1.3;\n}\n\n.card h1 small,\n.card h2 small,\n.card h3 small,\n.card h1 .small,\n.card h2 .small,\n.card h3 .small {\n  font-size: 60%;\n}\n\n.card .text-primary,\n.card .text-primary:hover {\n  color: #1D62F0 !important;\n}\n\n.card .text-info,\n.card .text-info:hover {\n  color: #109CFF !important;\n}\n\n.card .text-success,\n.card .text-success:hover {\n  color: #0C9C14 !important;\n}\n\n.card .text-warning,\n.card .text-warning:hover {\n  color: #ED8D00 !important;\n}\n\n.card .text-danger,\n.card .text-danger:hover {\n  color: #EE2D20 !important;\n}\n\n\n/*     General overwrite     */\n\nbody {\n  font-family: \"Helvetica Neue\", \"Open Sans\", Arial, sans-serif;\n  background-color: #cccccc;\n}\n\na {\n  color: #2CA8FF;\n}\n\na:hover,\na:focus {\n  color: #109CFF;\n  text-decoration: none;\n}\n\na:focus,\na:active,\nbutton::-moz-focus-inner,\ninput[type=\"reset\"]::-moz-focus-inner,\ninput[type=\"button\"]::-moz-focus-inner,\ninput[type=\"submit\"]::-moz-focus-inner,\nselect::-moz-focus-inner,\ninput[type=\"file\"]>input[type=\"button\"]::-moz-focus-inner {\n  outline: 0;\n}\n\n.ui-slider-handle:focus,\n.navbar-toggle {\n  outline: 0 !important;\n}\n\n\n/*           Animations              */\n\n.form-control,\n.input-group-addon,\n.tagsinput,\n.navbar,\n.navbar .alert {\n  transition: all 300ms linear;\n}\n\n.tagsinput .tag,\n.tagsinput-remove-link,\n.filter,\n.btn-hover,\n[data-toggle=\"collapse\"] i {\n  transition: all 150ms linear;\n}\n\n.btn-morphing .fa,\n.btn-morphing .circle,\n.gsdk-collapse {\n  transition: all 370ms linear;\n}\n\n.margin-top {\n  margin-top: 50px;\n}\n\n.btn-center {\n  text-align: center;\n}\n\n.btn {\n  border-width: 1px;\n  background-color: transparent;\n  font-weight: 400;\n  opacity: 0.8;\n  filter: alpha(opacity=80);\n  padding: 8px 16px;\n  border-color: #888888;\n  color: #888888;\n}\n\n.btn:hover,\n.btn:focus,\n.btn:active,\n.btn.active,\n.open>.btn.dropdown-toggle {\n  background-color: transparent;\n  color: #777777;\n  border-color: #777777;\n}\n\n.btn.disabled,\n.btn.disabled:hover,\n.btn.disabled:focus,\n.btn.disabled.focus,\n.btn.disabled:active,\n.btn.disabled.active,\n.btn:disabled,\n.btn:disabled:hover,\n.btn:disabled:focus,\n.btn:disabled.focus,\n.btn:disabled:active,\n.btn:disabled.active,\n.btn[disabled],\n.btn[disabled]:hover,\n.btn[disabled]:focus,\n.btn[disabled].focus,\n.btn[disabled]:active,\n.btn[disabled].active,\nfieldset[disabled] .btn,\nfieldset[disabled] .btn:hover,\nfieldset[disabled] .btn:focus,\nfieldset[disabled] .btn.focus,\nfieldset[disabled] .btn:active,\nfieldset[disabled] .btn.active {\n  background-color: transparent;\n  border-color: #888888;\n}\n\n.btn.btn-fill {\n  color: #FFFFFF;\n  background-color: #888888;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.btn.btn-fill:hover,\n.btn.btn-fill:focus,\n.btn.btn-fill:active,\n.btn.btn-fill.active,\n.open>.btn.btn-fill.dropdown-toggle {\n  background-color: #777777;\n  color: #FFFFFF;\n}\n\n.btn.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n\n.btn .caret {\n  border-top-color: #888888;\n}\n\n.btn:hover,\n.btn:focus {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  outline: 0 !important;\n}\n\n.btn:active,\n.btn.active,\n.open>.btn.dropdown-toggle {\n  box-shadow: none;\n  outline: 0 !important;\n}\n\n.btn.btn-icon {\n  padding: 8px;\n}\n\n.btn-primary {\n  border-color: #3472F7;\n  color: #3472F7;\n}\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open>.btn-primary.dropdown-toggle {\n  background-color: transparent;\n  color: #1D62F0;\n  border-color: #1D62F0;\n}\n\n.btn-primary.disabled,\n.btn-primary.disabled:hover,\n.btn-primary.disabled:focus,\n.btn-primary.disabled.focus,\n.btn-primary.disabled:active,\n.btn-primary.disabled.active,\n.btn-primary:disabled,\n.btn-primary:disabled:hover,\n.btn-primary:disabled:focus,\n.btn-primary:disabled.focus,\n.btn-primary:disabled:active,\n.btn-primary:disabled.active,\n.btn-primary[disabled],\n.btn-primary[disabled]:hover,\n.btn-primary[disabled]:focus,\n.btn-primary[disabled].focus,\n.btn-primary[disabled]:active,\n.btn-primary[disabled].active,\nfieldset[disabled] .btn-primary,\nfieldset[disabled] .btn-primary:hover,\nfieldset[disabled] .btn-primary:focus,\nfieldset[disabled] .btn-primary.focus,\nfieldset[disabled] .btn-primary:active,\nfieldset[disabled] .btn-primary.active {\n  background-color: transparent;\n  border-color: #3472F7;\n}\n\n.btn-primary.btn-fill {\n  color: #FFFFFF;\n  background-color: #3472F7;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.btn-primary.btn-fill:hover,\n.btn-primary.btn-fill:focus,\n.btn-primary.btn-fill:active,\n.btn-primary.btn-fill.active,\n.open>.btn-primary.btn-fill.dropdown-toggle {\n  background-color: #1D62F0;\n  color: #FFFFFF;\n}\n\n.btn-primary.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n\n.btn-primary .caret {\n  border-top-color: #3472F7;\n}\n\n.btn-success {\n  border-color: #05AE0E;\n  color: #05AE0E;\n}\n\n.btn-success:hover,\n.btn-success:focus,\n.btn-success:active,\n.btn-success.active,\n.open>.btn-success.dropdown-toggle {\n  background-color: transparent;\n  color: #049F0C;\n  border-color: #049F0C;\n}\n\n.btn-success.disabled,\n.btn-success.disabled:hover,\n.btn-success.disabled:focus,\n.btn-success.disabled.focus,\n.btn-success.disabled:active,\n.btn-success.disabled.active,\n.btn-success:disabled,\n.btn-success:disabled:hover,\n.btn-success:disabled:focus,\n.btn-success:disabled.focus,\n.btn-success:disabled:active,\n.btn-success:disabled.active,\n.btn-success[disabled],\n.btn-success[disabled]:hover,\n.btn-success[disabled]:focus,\n.btn-success[disabled].focus,\n.btn-success[disabled]:active,\n.btn-success[disabled].active,\nfieldset[disabled] .btn-success,\nfieldset[disabled] .btn-success:hover,\nfieldset[disabled] .btn-success:focus,\nfieldset[disabled] .btn-success.focus,\nfieldset[disabled] .btn-success:active,\nfieldset[disabled] .btn-success.active {\n  background-color: transparent;\n  border-color: #05AE0E;\n}\n\n.btn-success.btn-fill {\n  color: #FFFFFF;\n  background-color: #05AE0E;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.btn-success.btn-fill:hover,\n.btn-success.btn-fill:focus,\n.btn-success.btn-fill:active,\n.btn-success.btn-fill.active,\n.open>.btn-success.btn-fill.dropdown-toggle {\n  background-color: #049F0C;\n  color: #FFFFFF;\n}\n\n.btn-success.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n\n.btn-success .caret {\n  border-top-color: #05AE0E;\n}\n\n.btn-info {\n  border-color: #2CA8FF;\n  color: #2CA8FF;\n}\n\n.btn-info:hover,\n.btn-info:focus,\n.btn-info:active,\n.btn-info.active,\n.open>.btn-info.dropdown-toggle {\n  background-color: transparent;\n  color: #109CFF;\n  border-color: #109CFF;\n}\n\n.btn-info.disabled,\n.btn-info.disabled:hover,\n.btn-info.disabled:focus,\n.btn-info.disabled.focus,\n.btn-info.disabled:active,\n.btn-info.disabled.active,\n.btn-info:disabled,\n.btn-info:disabled:hover,\n.btn-info:disabled:focus,\n.btn-info:disabled.focus,\n.btn-info:disabled:active,\n.btn-info:disabled.active,\n.btn-info[disabled],\n.btn-info[disabled]:hover,\n.btn-info[disabled]:focus,\n.btn-info[disabled].focus,\n.btn-info[disabled]:active,\n.btn-info[disabled].active,\nfieldset[disabled] .btn-info,\nfieldset[disabled] .btn-info:hover,\nfieldset[disabled] .btn-info:focus,\nfieldset[disabled] .btn-info.focus,\nfieldset[disabled] .btn-info:active,\nfieldset[disabled] .btn-info.active {\n  background-color: transparent;\n  border-color: #2CA8FF;\n}\n\n.btn-info.btn-fill {\n  color: #FFFFFF;\n  background-color: #2CA8FF;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.btn-info.btn-fill:hover,\n.btn-info.btn-fill:focus,\n.btn-info.btn-fill:active,\n.btn-info.btn-fill.active,\n.open>.btn-info.btn-fill.dropdown-toggle {\n  background-color: #109CFF;\n  color: #FFFFFF;\n}\n\n.btn-info.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n\n.btn-info .caret {\n  border-top-color: #2CA8FF;\n}\n\n.btn-warning {\n  border-color: #FF9500;\n  color: #FF9500;\n}\n\n.btn-warning:hover,\n.btn-warning:focus,\n.btn-warning:active,\n.btn-warning.active,\n.open>.btn-warning.dropdown-toggle {\n  background-color: transparent;\n  color: #ED8D00;\n  border-color: #ED8D00;\n}\n\n.btn-warning.disabled,\n.btn-warning.disabled:hover,\n.btn-warning.disabled:focus,\n.btn-warning.disabled.focus,\n.btn-warning.disabled:active,\n.btn-warning.disabled.active,\n.btn-warning:disabled,\n.btn-warning:disabled:hover,\n.btn-warning:disabled:focus,\n.btn-warning:disabled.focus,\n.btn-warning:disabled:active,\n.btn-warning:disabled.active,\n.btn-warning[disabled],\n.btn-warning[disabled]:hover,\n.btn-warning[disabled]:focus,\n.btn-warning[disabled].focus,\n.btn-warning[disabled]:active,\n.btn-warning[disabled].active,\nfieldset[disabled] .btn-warning,\nfieldset[disabled] .btn-warning:hover,\nfieldset[disabled] .btn-warning:focus,\nfieldset[disabled] .btn-warning.focus,\nfieldset[disabled] .btn-warning:active,\nfieldset[disabled] .btn-warning.active {\n  background-color: transparent;\n  border-color: #FF9500;\n}\n\n.btn-warning.btn-fill {\n  color: #FFFFFF;\n  background-color: #FF9500;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.btn-warning.btn-fill:hover,\n.btn-warning.btn-fill:focus,\n.btn-warning.btn-fill:active,\n.btn-warning.btn-fill.active,\n.open>.btn-warning.btn-fill.dropdown-toggle {\n  background-color: #ED8D00;\n  color: #FFFFFF;\n}\n\n.btn-warning.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n\n.btn-warning .caret {\n  border-top-color: #FF9500;\n}\n\n.btn-danger {\n  border-color: #FF3B30;\n  color: #FF3B30;\n}\n\n.btn-danger:hover,\n.btn-danger:focus,\n.btn-danger:active,\n.btn-danger.active,\n.open>.btn-danger.dropdown-toggle {\n  background-color: transparent;\n  color: #EE2D20;\n  border-color: #EE2D20;\n}\n\n.btn-danger.disabled,\n.btn-danger.disabled:hover,\n.btn-danger.disabled:focus,\n.btn-danger.disabled.focus,\n.btn-danger.disabled:active,\n.btn-danger.disabled.active,\n.btn-danger:disabled,\n.btn-danger:disabled:hover,\n.btn-danger:disabled:focus,\n.btn-danger:disabled.focus,\n.btn-danger:disabled:active,\n.btn-danger:disabled.active,\n.btn-danger[disabled],\n.btn-danger[disabled]:hover,\n.btn-danger[disabled]:focus,\n.btn-danger[disabled].focus,\n.btn-danger[disabled]:active,\n.btn-danger[disabled].active,\nfieldset[disabled] .btn-danger,\nfieldset[disabled] .btn-danger:hover,\nfieldset[disabled] .btn-danger:focus,\nfieldset[disabled] .btn-danger.focus,\nfieldset[disabled] .btn-danger:active,\nfieldset[disabled] .btn-danger.active {\n  background-color: transparent;\n  border-color: #FF3B30;\n}\n\n.btn-danger.btn-fill {\n  color: #FFFFFF;\n  background-color: #FF3B30;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.btn-danger.btn-fill:hover,\n.btn-danger.btn-fill:focus,\n.btn-danger.btn-fill:active,\n.btn-danger.btn-fill.active,\n.open>.btn-danger.btn-fill.dropdown-toggle {\n  background-color: #EE2D20;\n  color: #FFFFFF;\n}\n\n.btn-danger.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n\n.btn-danger .caret {\n  border-top-color: #FF3B30;\n}\n\n.btn-neutral {\n  border-color: #FFFFFF;\n  color: #FFFFFF;\n}\n\n.btn-neutral:hover,\n.btn-neutral:focus,\n.btn-neutral:active,\n.btn-neutral.active,\n.open>.btn-neutral.dropdown-toggle {\n  background-color: transparent;\n  color: #FFFFFF;\n  border-color: #FFFFFF;\n}\n\n.btn-neutral.disabled,\n.btn-neutral.disabled:hover,\n.btn-neutral.disabled:focus,\n.btn-neutral.disabled.focus,\n.btn-neutral.disabled:active,\n.btn-neutral.disabled.active,\n.btn-neutral:disabled,\n.btn-neutral:disabled:hover,\n.btn-neutral:disabled:focus,\n.btn-neutral:disabled.focus,\n.btn-neutral:disabled:active,\n.btn-neutral:disabled.active,\n.btn-neutral[disabled],\n.btn-neutral[disabled]:hover,\n.btn-neutral[disabled]:focus,\n.btn-neutral[disabled].focus,\n.btn-neutral[disabled]:active,\n.btn-neutral[disabled].active,\nfieldset[disabled] .btn-neutral,\nfieldset[disabled] .btn-neutral:hover,\nfieldset[disabled] .btn-neutral:focus,\nfieldset[disabled] .btn-neutral.focus,\nfieldset[disabled] .btn-neutral:active,\nfieldset[disabled] .btn-neutral.active {\n  background-color: transparent;\n  border-color: #FFFFFF;\n}\n\n.btn-neutral.btn-fill {\n  color: #FFFFFF;\n  background-color: #FFFFFF;\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.btn-neutral.btn-fill:hover,\n.btn-neutral.btn-fill:focus,\n.btn-neutral.btn-fill:active,\n.btn-neutral.btn-fill.active,\n.open>.btn-neutral.btn-fill.dropdown-toggle {\n  background-color: #FFFFFF;\n  color: #FFFFFF;\n}\n\n.btn-neutral.btn-fill .caret {\n  border-top-color: #FFFFFF;\n}\n\n.btn-neutral .caret {\n  border-top-color: #FFFFFF;\n}\n\n.btn-neutral:active,\n.btn-neutral.active,\n.open>.btn-neutral.dropdown-toggle {\n  background-color: #FFFFFF;\n  color: #888888;\n}\n\n.btn-neutral.btn-fill,\n.btn-neutral.btn-fill:hover,\n.btn-neutral.btn-fill:focus {\n  color: #888888;\n}\n\n.btn-neutral.btn-simple:active,\n.btn-neutral.btn-simple.active {\n  background-color: transparent;\n}\n\n.btn:disabled,\n.btn[disabled],\n.btn.disabled {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n\n.btn-round {\n  border-width: 1px;\n  border-radius: 30px !important;\n  padding: 9px 18px;\n}\n\n.btn-round.btn-icon {\n  padding: 9px;\n}\n\n.btn-simple {\n  border: 0;\n  font-size: 16px;\n  padding: 8px 16px;\n}\n\n.btn-simple.btn-icon {\n  padding: 8px;\n}\n\n.btn-lg {\n  font-size: 18px;\n  border-radius: 6px;\n  padding: 14px 30px;\n  font-weight: 400;\n}\n\n.btn-lg.btn-round {\n  padding: 15px 30px;\n}\n\n.btn-lg.btn-simple {\n  padding: 16px 30px;\n}\n\n.btn-sm {\n  font-size: 12px;\n  border-radius: 6px;\n  padding: 5px 10px;\n}\n\n.btn-sm.btn-round {\n  padding: 6px 10px;\n}\n\n.btn-sm.btn-simple {\n  padding: 7px 10px;\n}\n\n.btn-xs {\n  font-size: 12px;\n  border-radius: 6px;\n  padding: 1px 5px;\n}\n\n.btn-xs.btn-round {\n  padding: 2px 5px;\n}\n\n.btn-xs.btn-simple {\n  padding: 3px 5px;\n}\n\n.btn-wd {\n  min-width: 140px;\n}\n\n.btn-group.select {\n  width: 100%;\n}\n\n.btn-group.select .btn {\n  text-align: left;\n}\n\n.btn-group.select .caret {\n  position: absolute;\n  top: 50%;\n  margin-top: -1px;\n  right: 8px;\n}\n\n\n/*           Labels & Progress-bar              */\n\n.label {\n  padding: 10px 13px;\n  border-radius: 2px;\n  font-weight: 500;\n  font-size: 11px;\n  text-transform: uppercase;\n  display: inline-block;\n}\n\n.label-primary {\n  background-color: #3472F7;\n}\n\n.label-info {\n  background-color: #2CA8FF;\n}\n\n.label-success {\n  background-color: #05AE0E;\n}\n\n.label-warning {\n  background-color: #FF9500;\n}\n\n.label-danger {\n  background-color: #FF3B30;\n}\n\n.section {\n  padding: 30px 0;\n  position: relative;\n  background-color: #FFFFFF;\n}\n\n.section-gray {\n  background-color: #EEEEEE;\n}\n\n.section-white {\n  background-color: #FFFFFF;\n}\n\n.btn-social {\n  opacity: 0.93;\n  padding: 8px 9px;\n}\n\n.btn-social .fa {\n  font-size: 18px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.btn-social.btn-round {\n  padding: 9px 10px;\n}\n\n.btn-social.btn-simple {\n  padding: 9px 5px;\n  font-size: 16px;\n}\n\n.btn-social.btn-simple .fa {\n  font-size: 20px;\n  position: relative;\n  top: -2px;\n  width: 24px;\n}\n\n.btn-facebook {\n  border-color: #3b5998;\n  color: #3b5998;\n}\n\n.btn-facebook:hover,\n.btn-facebook:focus,\n.btn-facebook:active,\n.btn-facebook.active,\n.open>.btn-facebook.dropdown-toggle {\n  background-color: transparent;\n  color: #3b5998;\n  border-color: #3b5998;\n  opacity: 1;\n}\n\n.btn-facebook:disabled,\n.btn-facebook[disabled],\n.btn-facebook.disabled {\n  background-color: transparent;\n  border-color: #3b5998;\n}\n\n.btn-facebook.btn-fill {\n  color: #FFFFFF;\n  background-color: #3b5998;\n  opacity: 0.9;\n}\n\n.btn-facebook.btn-fill:hover,\n.btn-facebook.btn-fill:focus,\n.btn-facebook.btn-fill:active,\n.btn-facebook.btn-fill.active,\n.open>.btn-facebook.btn-fill.dropdown-toggle {\n  background-color: #3b5998;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.btn-twitter {\n  border-color: #55acee;\n  color: #55acee;\n}\n\n.btn-twitter:hover,\n.btn-twitter:focus,\n.btn-twitter:active,\n.btn-twitter.active,\n.open>.btn-twitter.dropdown-toggle {\n  background-color: transparent;\n  color: #55acee;\n  border-color: #55acee;\n  opacity: 1;\n}\n\n.btn-twitter:disabled,\n.btn-twitter[disabled],\n.btn-twitter.disabled {\n  background-color: transparent;\n  border-color: #55acee;\n}\n\n.btn-twitter.btn-fill {\n  color: #FFFFFF;\n  background-color: #55acee;\n  opacity: 0.9;\n}\n\n.btn-twitter.btn-fill:hover,\n.btn-twitter.btn-fill:focus,\n.btn-twitter.btn-fill:active,\n.btn-twitter.btn-fill.active,\n.open>.btn-twitter.btn-fill.dropdown-toggle {\n  background-color: #55acee;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.btn-pinterest {\n  border-color: #cc2127;\n  color: #cc2127;\n}\n\n.btn-pinterest:hover,\n.btn-pinterest:focus,\n.btn-pinterest:active,\n.btn-pinterest.active,\n.open>.btn-pinterest.dropdown-toggle {\n  background-color: transparent;\n  color: #cc2127;\n  border-color: #cc2127;\n  opacity: 1;\n}\n\n.btn-pinterest:disabled,\n.btn-pinterest[disabled],\n.btn-pinterest.disabled {\n  background-color: transparent;\n  border-color: #cc2127;\n}\n\n.btn-pinterest.btn-fill {\n  color: #FFFFFF;\n  background-color: #cc2127;\n  opacity: 0.9;\n}\n\n.btn-pinterest.btn-fill:hover,\n.btn-pinterest.btn-fill:focus,\n.btn-pinterest.btn-fill:active,\n.btn-pinterest.btn-fill.active,\n.open>.btn-pinterest.btn-fill.dropdown-toggle {\n  background-color: #cc2127;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.btn-google {\n  border-color: #dd4b39;\n  color: #dd4b39;\n}\n\n.btn-google:hover,\n.btn-google:focus,\n.btn-google:active,\n.btn-google.active,\n.open>.btn-google.dropdown-toggle {\n  background-color: transparent;\n  color: #dd4b39;\n  border-color: #dd4b39;\n  opacity: 1;\n}\n\n.btn-google:disabled,\n.btn-google[disabled],\n.btn-google.disabled {\n  background-color: transparent;\n  border-color: #dd4b39;\n}\n\n.btn-google.btn-fill {\n  color: #FFFFFF;\n  background-color: #dd4b39;\n  opacity: 0.9;\n}\n\n.btn-google.btn-fill:hover,\n.btn-google.btn-fill:focus,\n.btn-google.btn-fill:active,\n.btn-google.btn-fill.active,\n.open>.btn-google.btn-fill.dropdown-toggle {\n  background-color: #dd4b39;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.btn-linkedin {\n  border-color: #0976b4;\n  color: #0976b4;\n}\n\n.btn-linkedin:hover,\n.btn-linkedin:focus,\n.btn-linkedin:active,\n.btn-linkedin.active,\n.open>.btn-linkedin.dropdown-toggle {\n  background-color: transparent;\n  color: #0976b4;\n  border-color: #0976b4;\n  opacity: 1;\n}\n\n.btn-linkedin:disabled,\n.btn-linkedin[disabled],\n.btn-linkedin.disabled {\n  background-color: transparent;\n  border-color: #0976b4;\n}\n\n.btn-linkedin.btn-fill {\n  color: #FFFFFF;\n  background-color: #0976b4;\n  opacity: 0.9;\n}\n\n.btn-linkedin.btn-fill:hover,\n.btn-linkedin.btn-fill:focus,\n.btn-linkedin.btn-fill:active,\n.btn-linkedin.btn-fill.active,\n.open>.btn-linkedin.btn-fill.dropdown-toggle {\n  background-color: #0976b4;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.btn-dribbble {\n  border-color: #ea4c89;\n  color: #ea4c89;\n}\n\n.btn-dribbble:hover,\n.btn-dribbble:focus,\n.btn-dribbble:active,\n.btn-dribbble.active,\n.open>.btn-dribbble.dropdown-toggle {\n  background-color: transparent;\n  color: #ea4c89;\n  border-color: #ea4c89;\n  opacity: 1;\n}\n\n.btn-dribbble:disabled,\n.btn-dribbble[disabled],\n.btn-dribbble.disabled {\n  background-color: transparent;\n  border-color: #ea4c89;\n}\n\n.btn-dribbble.btn-fill {\n  color: #FFFFFF;\n  background-color: #ea4c89;\n  opacity: 0.9;\n}\n\n.btn-dribbble.btn-fill:hover,\n.btn-dribbble.btn-fill:focus,\n.btn-dribbble.btn-fill:active,\n.btn-dribbble.btn-fill.active,\n.open>.btn-dribbble.btn-fill.dropdown-toggle {\n  background-color: #ea4c89;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.btn-github {\n  border-color: #333333;\n  color: #333333;\n}\n\n.btn-github:hover,\n.btn-github:focus,\n.btn-github:active,\n.btn-github.active,\n.open>.btn-github.dropdown-toggle {\n  background-color: transparent;\n  color: #333333;\n  border-color: #333333;\n  opacity: 1;\n}\n\n.btn-github:disabled,\n.btn-github[disabled],\n.btn-github.disabled {\n  background-color: transparent;\n  border-color: #333333;\n}\n\n.btn-github.btn-fill {\n  color: #FFFFFF;\n  background-color: #333333;\n  opacity: 0.9;\n}\n\n.btn-github.btn-fill:hover,\n.btn-github.btn-fill:focus,\n.btn-github.btn-fill:active,\n.btn-github.btn-fill.active,\n.open>.btn-github.btn-fill.dropdown-toggle {\n  background-color: #333333;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.btn-youtube {\n  border-color: #e52d27;\n  color: #e52d27;\n}\n\n.btn-youtube:hover,\n.btn-youtube:focus,\n.btn-youtube:active,\n.btn-youtube.active,\n.open>.btn-youtube.dropdown-toggle {\n  background-color: transparent;\n  color: #e52d27;\n  border-color: #e52d27;\n  opacity: 1;\n}\n\n.btn-youtube:disabled,\n.btn-youtube[disabled],\n.btn-youtube.disabled {\n  background-color: transparent;\n  border-color: #e52d27;\n}\n\n.btn-youtube.btn-fill {\n  color: #FFFFFF;\n  background-color: #e52d27;\n  opacity: 0.9;\n}\n\n.btn-youtube.btn-fill:hover,\n.btn-youtube.btn-fill:focus,\n.btn-youtube.btn-fill:active,\n.btn-youtube.btn-fill.active,\n.open>.btn-youtube.btn-fill.dropdown-toggle {\n  background-color: #e52d27;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.btn-stumbleupon {\n  border-color: #eb4924;\n  color: #eb4924;\n}\n\n.btn-stumbleupon:hover,\n.btn-stumbleupon:focus,\n.btn-stumbleupon:active,\n.btn-stumbleupon.active,\n.open>.btn-stumbleupon.dropdown-toggle {\n  background-color: transparent;\n  color: #eb4924;\n  border-color: #eb4924;\n  opacity: 1;\n}\n\n.btn-stumbleupon:disabled,\n.btn-stumbleupon[disabled],\n.btn-stumbleupon.disabled {\n  background-color: transparent;\n  border-color: #eb4924;\n}\n\n.btn-stumbleupon.btn-fill {\n  color: #FFFFFF;\n  background-color: #eb4924;\n  opacity: 0.9;\n}\n\n.btn-stumbleupon.btn-fill:hover,\n.btn-stumbleupon.btn-fill:focus,\n.btn-stumbleupon.btn-fill:active,\n.btn-stumbleupon.btn-fill.active,\n.open>.btn-stumbleupon.btn-fill.dropdown-toggle {\n  background-color: #eb4924;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.btn-reddit {\n  border-color: #ff4500;\n  color: #ff4500;\n}\n\n.btn-reddit:hover,\n.btn-reddit:focus,\n.btn-reddit:active,\n.btn-reddit.active,\n.open>.btn-reddit.dropdown-toggle {\n  background-color: transparent;\n  color: #ff4500;\n  border-color: #ff4500;\n  opacity: 1;\n}\n\n.btn-reddit:disabled,\n.btn-reddit[disabled],\n.btn-reddit.disabled {\n  background-color: transparent;\n  border-color: #ff4500;\n}\n\n.btn-reddit.btn-fill {\n  color: #FFFFFF;\n  background-color: #ff4500;\n  opacity: 0.9;\n}\n\n.btn-reddit.btn-fill:hover,\n.btn-reddit.btn-fill:focus,\n.btn-reddit.btn-fill:active,\n.btn-reddit.btn-fill.active,\n.open>.btn-reddit.btn-fill.dropdown-toggle {\n  background-color: #ff4500;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.btn-tumblr {\n  border-color: #35465c;\n  color: #35465c;\n}\n\n.btn-tumblr:hover,\n.btn-tumblr:focus,\n.btn-tumblr:active,\n.btn-tumblr.active,\n.open>.btn-tumblr.dropdown-toggle {\n  background-color: transparent;\n  color: #35465c;\n  border-color: #35465c;\n  opacity: 1;\n}\n\n.btn-tumblr:disabled,\n.btn-tumblr[disabled],\n.btn-tumblr.disabled {\n  background-color: transparent;\n  border-color: #35465c;\n}\n\n.btn-tumblr.btn-fill {\n  color: #FFFFFF;\n  background-color: #35465c;\n  opacity: 0.9;\n}\n\n.btn-tumblr.btn-fill:hover,\n.btn-tumblr.btn-fill:focus,\n.btn-tumblr.btn-fill:active,\n.btn-tumblr.btn-fill.active,\n.open>.btn-tumblr.btn-fill.dropdown-toggle {\n  background-color: #35465c;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.btn-behance {\n  border-color: #1769ff;\n  color: #1769ff;\n}\n\n.btn-behance:hover,\n.btn-behance:focus,\n.btn-behance:active,\n.btn-behance.active,\n.open>.btn-behance.dropdown-toggle {\n  background-color: transparent;\n  color: #1769ff;\n  border-color: #1769ff;\n  opacity: 1;\n}\n\n.btn-behance:disabled,\n.btn-behance[disabled],\n.btn-behance.disabled {\n  background-color: transparent;\n  border-color: #1769ff;\n}\n\n.btn-behance.btn-fill {\n  color: #FFFFFF;\n  background-color: #1769ff;\n  opacity: 0.9;\n}\n\n.btn-behance.btn-fill:hover,\n.btn-behance.btn-fill:focus,\n.btn-behance.btn-fill:active,\n.btn-behance.btn-fill.active,\n.open>.btn-behance.btn-fill.dropdown-toggle {\n  background-color: #1769ff;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\n.card {\n  border-radius: 6px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.23);\n  background-color: #FFFFFF;\n  margin-bottom: 20px;\n  position: relative;\n  max-width: 320px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card .title,\n.card .stats,\n.card .category,\n.card .description,\n.card .social-line,\n.card .actions,\n.card .content,\n.card .footer,\n.card small,\n.card a {\n  position: relative;\n  z-index: 3;\n}\n\n.card a {\n  color: #444444;\n}\n\n.card a:hover,\n.card a:focus {\n  color: #333333;\n}\n\n.card[data-radius=\"none\"] {\n  border-radius: 0px;\n}\n\n.card[data-radius=\"none\"] .header {\n  border-radius: 0px 0px 0 0;\n}\n\n.card[data-radius=\"none\"] .header img {\n  border-radius: 0px 0px 0 0;\n}\n\n.card.card-plain {\n  box-shadow: none;\n}\n\n.card .btn {\n  text-shadow: none;\n  font-weight: bold;\n}\n\n.card .title-uppercase {\n  text-transform: uppercase;\n}\n\n.card .header {\n  position: relative;\n  border-radius: 6px 6px 0 0;\n  height: 200px;\n  z-index: 3;\n}\n\n.card .header img {\n  opacity: 0;\n  filter: alpha(opacity=0);\n  display: none;\n}\n\n.card .header .category {\n  padding: 15px;\n}\n\n.card .header .social-line {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  display: block;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n}\n\n.card .header .social-line .btn,\n.card .header .social-line a {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n}\n\n.card .header .social-line.social-line-visible {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.card .content .price {\n  border: 2px solid rgba(255, 255, 255, 0.7);\n  color: white;\n  border-radius: 50%;\n  width: 152px;\n  height: 152px;\n  margin: 50px auto;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 200px;\n}\n\n.card .content .price h4 {\n  margin: 5px 0 0;\n  font-size: 36px;\n}\n\n.card .content .price h6 {\n  margin-top: 45px;\n  font-size: 16px;\n}\n\n.card .content .price .currency {\n  font-size: 22px;\n  font-weight: normal;\n}\n\n.card .actions {\n  padding: 10px 15px;\n}\n\n.card .social-line .btn {\n  float: left;\n  display: block;\n  transition: all 0.2s;\n  -webkit-transition: all 0.2s;\n}\n\n.card .social-line .btn-social {\n  border: 1px solid #EEEEEE;\n  border-radius: 0;\n  border-left: 0;\n  background-color: #FFFFFF;\n  padding: 12px 4px;\n}\n\n.card .social-line .btn-social:last-child {\n  border-right: 0;\n}\n\n.card .social-line[data-buttons=\"5\"] .btn {\n  width: 20%;\n}\n\n.card .social-line[data-buttons=\"4\"] .btn {\n  width: 25%;\n}\n\n.card .social-line[data-buttons=\"3\"] .btn {\n  width: 33.3333333%;\n}\n\n.card .social-line[data-buttons=\"2\"] .btn {\n  width: 50%;\n}\n\n.card .social-line:after {\n  clear: both;\n  display: table;\n  content: \" \";\n}\n\n.card .filter,\n.card .header .actions {\n  position: absolute;\n  z-index: 2;\n  background-color: rgba(0, 0, 0, 0.76);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.card .header .actions {\n  background-color: transparent;\n  z-index: 3;\n}\n\n.card .header .actions .btn {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\n.card:hover .filter {\n  opacity: 0.7;\n  filter: alpha(opacity=70);\n}\n\n.card:hover .header .social-line,\n.card:hover .header .actions {\n  opacity: 1;\n  filter: alpha(opacity=100);\n}\n\n.card .category,\n.card .label {\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.card .category i,\n.card .label i {\n  font-size: 16px;\n}\n\n.card .category {\n  color: #9A9A9A;\n}\n\n.card .label {\n  text-shadow: none;\n}\n\n.card .title {\n  color: #333333;\n}\n\n.card>.title {\n  margin: 0;\n  padding: 30px 0 0;\n}\n\n.card .content {\n  padding: 15px 15px 5px 15px;\n}\n\n.card .content .title {\n  margin: 10px 0 20px 0;\n}\n\n.card .content .category~.title {\n  margin-top: 0px;\n}\n\n.card .content .description~.title {\n  margin-top: -10px;\n}\n\n.card .description {\n  font-size: 16px;\n  color: #9A9A9A;\n}\n\n.card h6 {\n  font-size: 12px;\n  margin: 0;\n}\n\n.card .footer {\n  padding: 0 15px 15px;\n}\n\n.card .footer .social-line .btn:first-child {\n  border-radius: 0 0 0 6px;\n}\n\n.card .footer .social-line .btn:last-child {\n  border-radius: 0 0 6px 0;\n}\n\n.card.card-separator:after {\n  height: 100%;\n  right: -15px;\n  top: 0;\n  width: 1px;\n  background-color: #DDDDDD;\n  content: \"\";\n  position: absolute;\n}\n\n.card .icon {\n  display: block;\n  margin: 0 auto;\n  top: 50%;\n  position: relative;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  text-align: center;\n}\n\n.card .icon i {\n  font-size: 60px;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  padding: 18px;\n  border-radius: 50%;\n}\n\n.col-lg-4 .card .icon i {\n  font-size: 80px;\n  padding: 22px;\n}\n\n.card.card-with-border .content {\n  padding: 15px 15px 25px 15px;\n}\n\n.card.card-with-border .footer {\n  padding-bottom: 25px;\n}\n\n.card.card-with-border:after {\n  position: absolute;\n  display: block;\n  width: calc(100% - 10px);\n  height: calc(100% - 10px);\n  content: \"\";\n  top: 5px;\n  left: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  border-radius: 5px;\n}\n\n.card.card-just-text .content {\n  padding: 50px 65px;\n  text-align: center;\n}\n\n.card[data-background=\"image\"] .image,\n.card[data-background=\"color\"] .image {\n  border-radius: 6px;\n}\n\n.card[data-background=\"image\"] .title,\n.card[data-background=\"color\"] .title {\n  font-weight: bold;\n}\n\n.card[data-background=\"image\"] .filter,\n.card[data-background=\"color\"] .filter {\n  border-radius: 6px;\n}\n\n.card[data-background=\"image\"] .title,\n.card[data-background=\"image\"] .stats,\n.card[data-background=\"image\"] .category,\n.card[data-background=\"image\"] .description,\n.card[data-background=\"image\"] .content,\n.card[data-background=\"image\"] .footer,\n.card[data-background=\"image\"] small,\n.card[data-background=\"image\"] a,\n.card[data-background=\"color\"] .title,\n.card[data-background=\"color\"] .stats,\n.card[data-background=\"color\"] .category,\n.card[data-background=\"color\"] .description,\n.card[data-background=\"color\"] .content,\n.card[data-background=\"color\"] .footer,\n.card[data-background=\"color\"] small,\n.card[data-background=\"color\"] a {\n  color: #FFFFFF;\n}\n\n.card[data-background=\"image\"] a:hover,\n.card[data-background=\"image\"] a:focus,\n.card[data-background=\"color\"] a:hover,\n.card[data-background=\"color\"] a:focus {\n  color: #FFFFFF;\n}\n\n.card[data-background=\"image\"] .icon i,\n.card[data-background=\"color\"] .icon i {\n  color: #FFFFFF;\n  border: 2px solid rgba(255, 255, 255, 0.6);\n}\n\n.card[data-background=\"image\"].card-with-border:after,\n.card[data-background=\"color\"].card-with-border:after {\n  border: 1px solid rgba(255, 255, 255, 0.45);\n}\n\n.card[data-background=\"image\"] {\n  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);\n}\n\n.card[data-background=\"image\"] .filter {\n  opacity: 0.55;\n  filter: alpha(opacity=55.0);\n}\n\n.card[data-background=\"image\"]:hover .filter {\n  opacity: 0.75;\n  filter: alpha(opacity=75);\n}\n\n.card[data-color=\"blue\"] {\n  background: #4087ea;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 12+ */\n  /* IE10+ */\n  background: radial-gradient(ellipse at center, #533ce1 0%, #4087ea 100%);\n  /* W3C */\n  background-size: 250% 250%;\n}\n\n.card[data-color=\"azure\"] {\n  background: #45c0fd;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 12+ */\n  /* IE10+ */\n  background: radial-gradient(ellipse at center, #4091ff 0%, #45c0fd 100%);\n  /* W3C */\n  background-size: 250% 250%;\n}\n\n.card[data-color=\"green\"] {\n  background: #a1eb3a;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 12+ */\n  /* IE10+ */\n  background: radial-gradient(ellipse at center, #53A319 0%, #a1eb3a 100%);\n  /* W3C */\n  background-size: 250% 250%;\n}\n\n.card[data-color=\"orange\"] {\n  background: #ffb33b;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 12+ */\n  /* IE10+ */\n  background: radial-gradient(ellipse at center, #ff5221 0%, #ffb33b 100%);\n  /* W3C */\n  background-size: 250% 250%;\n}\n\n.card[data-color=\"red\"] {\n  background: #ff3b30;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 12+ */\n  /* IE10+ */\n  background: radial-gradient(ellipse at center, #bb0502 0%, #ff3b30 100%);\n  /* W3C */\n  background-size: 250% 250%;\n}\n\n.card[data-color=\"black\"] {\n  background: #787878;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 12+ */\n  /* IE10+ */\n  background: radial-gradient(ellipse at center, #343434 0%, #787878 100%);\n  /* W3C */\n  background-size: 250% 250%;\n}\n\n.filter.filter-white {\n  background-color: rgba(255, 255, 255, 0.91);\n}\n\n.filter.filter-blue {\n  background: #4087ea;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 12+ */\n  /* IE10+ */\n  background: radial-gradient(ellipse at center, #533ce1 0%, #4087ea 100%);\n  /* W3C */\n  background-size: 250% 250%;\n}\n\n.filter.filter-azure {\n  background: #45c0fd;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 12+ */\n  /* IE10+ */\n  background: radial-gradient(ellipse at center, #4091ff 0%, #45c0fd 100%);\n  /* W3C */\n  background-size: 250% 250%;\n}\n\n.filter.filter-green {\n  background: #a1eb3a;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 12+ */\n  /* IE10+ */\n  background: radial-gradient(ellipse at center, #53A319 0%, #a1eb3a 100%);\n  /* W3C */\n  background-size: 250% 250%;\n}\n\n.filter.filter-orange {\n  background: #ffb33b;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 12+ */\n  /* IE10+ */\n  background: radial-gradient(ellipse at center, #ff5221 0%, #ffb33b 100%);\n  /* W3C */\n  background-size: 250% 250%;\n}\n\n.filter.filter-red {\n  background: #ff3b30;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 12+ */\n  /* IE10+ */\n  background: radial-gradient(ellipse at center, #bb0502 0%, #ff3b30 100%);\n  /* W3C */\n  background-size: 250% 250%;\n}\n\n@media (min-width: 1200px) {\n  .card .header {\n    height: 265px;\n  }\n  .card[data-background=\"color\"] .header {\n    height: 230px;\n  }\n  .col-md-3 .card .header,\n  .col-sm-3 .card .header,\n  .col-xs-3 .card .header,\n  .col-lg-3 .card .header {\n    height: 185px;\n  }\n}\n\n\n/*          Changes for small display      */\n\n@media (max-width: 767px) {\n  .navbar-transparent {\n    padding-top: 15px;\n    background-color: rgba(0, 0, 0, 0.45);\n  }\n  body {\n    position: relative;\n  }\n  .social-line .btn {\n    margin: 0 0 10px 0;\n  }\n  .card .header .social-line .btn {\n    margin: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/news-card/news-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-box\">\n  <div class=\"card\" >\n    <ng-container *ngIf=\"news.img\">\n      <div class=\"header\" #card>\n        <img src=\"{{news.img}}\" />\n        <div class=\"social-line\" data-buttons=\"3\">\n          <button class=\"btn btn-social btn-facebook\">\n            <i class=\"fa fa-facebook-square\"></i> Share\n          </button>\n          <button class=\"btn btn-social btn-twitter\">\n            <i class=\"fa fa-twitter\"></i> Tweet\n          </button>\n          <button class=\"btn btn-social btn-pinterest\">\n            <i class=\"fa fa-pinterest\"></i> Pin\n          </button>\n        </div>\n      </div>\n    </ng-container>\n    <div class=\"content\">\n      <h6 class=\"category\">News</h6>\n      <h4 class=\"title\">\n        {{news.title}}\n      </h4>\n      <p class=\"description\">\n        {{news.text}}\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/news-card/news-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsCardComponent = (function () {
    function NewsCardComponent(renderer) {
        this.renderer = renderer;
    }
    NewsCardComponent.prototype.ngAfterViewInit = function () {
        if (this.cardElement && this.news && this.news.img) {
            var new_css = {
                'background-image': "url(\"" + this.news.img + "\")",
                'background-position': 'center center',
                'background-size': 'cover'
            };
            var ne = jQuery(this.cardElement.nativeElement);
            ne.css(new_css);
        }
    };
    NewsCardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewsCardComponent.prototype, "news", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('card'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], NewsCardComponent.prototype, "cardElement", void 0);
    NewsCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-news-card',
            template: __webpack_require__("../../../../../src/app/commons/widget/news-card/news-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/news-card/news-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], NewsCardComponent);
    return NewsCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/news-widget/news-widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/news-widget/news-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/news-widget/news-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_owl_carousel__ = __webpack_require__("../../../../owl.carousel/dist/owl.carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_owl_carousel__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsWidgetComponent = (function () {
    function NewsWidgetComponent(el) {
        this.el = el;
        this.defaultClass = 'owl-carousel';
        this.news = [];
    }
    NewsWidgetComponent.prototype.ngAfterViewInit = function () {
        this.$owlElement = $(this.el.nativeElement).owlCarousel({
            loop: true,
            center: true,
            items: 1,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 1000 * 10,
            autoplayHoverPause: true,
            autoHeight: true
        });
    };
    NewsWidgetComponent.prototype.ngOnDestroy = function () {
        this.$owlElement.data('owlCarousel').destroy();
        this.$owlElement = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], NewsWidgetComponent.prototype, "defaultClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], NewsWidgetComponent.prototype, "news", void 0);
    NewsWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'news-widget',
            template: __webpack_require__("../../../../../src/app/commons/widget/news-widget/news-widget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/news-widget/news-widget.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NewsWidgetComponent);
    return NewsWidgetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/pager/pager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/pager/pager.component.html":
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n  <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n    <a (click)=\"setPage(1)\">First</a>\n  </li>\n  <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n    <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n  </li>\n  <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n    <a (click)=\"setPage(page)\">{{page}}</a>\n  </li>\n  <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n    <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n  </li>\n  <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n    <a (click)=\"setPage(pager.totalPages)\">Last</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/pager/pager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pager_service__ = __webpack_require__("../../../../../src/app/services/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagerComponent = (function () {
    function PagerComponent(pagerService) {
        this.pagerService = pagerService;
        this.perPage = 10;
        this.totalCount = 0;
        // pager object
        this.pager = {};
        // paged items
        this.currentPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PagerComponent.prototype.ngOnInit = function () {
        // console.log('On Init', this.allItems);
    };
    PagerComponent.prototype.ngAfterViewInit = function () {
        this.currentPage.emit(1);
    };
    PagerComponent.prototype.ngOnChanges = function () {
        // console.log('On Changes', this.allItems);
        if (this.allItems && this.allItems.length > 0) {
            this.setPage(1);
        }
    };
    PagerComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.totalCount, page);
        this.currentPage.emit(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PagerComponent.prototype, "allItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PagerComponent.prototype, "perPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PagerComponent.prototype, "totalCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PagerComponent.prototype, "currentPage", void 0);
    PagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-pager',
            template: __webpack_require__("../../../../../src/app/commons/widget/pager/pager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/pager/pager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_pager_service__["a" /* PagerService */]])
    ], PagerComponent);
    return PagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/parent-children-layout/parent-children-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/parent-children-layout/parent-children-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  parent-children-layout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/parent-children-layout/parent-children-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentChildrenLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentChildrenLayoutComponent = (function () {
    function ParentChildrenLayoutComponent() {
    }
    ParentChildrenLayoutComponent.prototype.ngOnInit = function () {
    };
    ParentChildrenLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-pc-layout',
            template: __webpack_require__("../../../../../src/app/commons/widget/parent-children-layout/parent-children-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/parent-children-layout/parent-children-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentChildrenLayoutComponent);
    return ParentChildrenLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/result-list-widget/result-list-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <md-card-title>\n      <h3>Recent Results</h3>\n    </md-card-title>\n  </md-card-header>\n  <md-card-content>\n    <sp-datatable (event)=\"emitEvent($event)\" [editable]=\"editable\" [dataset]=\"dataset\">\n      <sp-column [value]=\"'id'\" [header]=\"'Id'\"></sp-column>\n      <sp-column [value]=\"'subject'\" [header]=\"'Subject'\"></sp-column>\n      <sp-column [value]=\"'score'\" [header]=\"'Score'\"></sp-column>\n      <sp-column [value]=\"'remark'\" [header]=\"'Remark'\"></sp-column>\n    </sp-datatable>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/result-list-widget/result-list-widget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/result-list-widget/result-list-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultListWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_IEvent__ = __webpack_require__("../../../../../src/app/model/IEvent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { DataSource } from '@angular/cdk';
var ResultListWidgetComponent = (function () {
    function ResultListWidgetComponent(cdRef) {
        this.cdRef = cdRef;
        this.reports = [];
        this.editable = false;
        this.event = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]();
        this.onRefresh = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]();
        this.dataset = [];
        this.rerender = false;
    }
    ResultListWidgetComponent.prototype.ngOnInit = function () {
        this.createDataset();
    };
    ResultListWidgetComponent.prototype.createDataset = function () {
        for (var index = 0; index < this.reports.length; index++) {
            var element = this.reports[index];
            var item = {};
            item.id = index + 1;
            item.objectId = element.id;
            item.score = element.get('score');
            item.withExam = element.get('withExam');
            item.caScore = element.get('caScore');
            item.examScore = element.get('examScore');
            item.subject = element.get('subject').get('title');
            item.remark = this.getRemark(element.get('score'), item.withExam);
            this.dataset.push(item);
        }
    };
    ResultListWidgetComponent.prototype.getRemark = function (score, we) {
        if (score < 45 && we) {
            return 'Failed';
        }
        else if (score > 45) {
            return 'Passed';
        }
        else {
            return 'No Remarks';
        }
    };
    ResultListWidgetComponent.prototype.emitEvent = function (event) {
        // TODO: Handle event locally before emitting
        if (event.event === __WEBPACK_IMPORTED_MODULE_0__model_IEvent__["a" /* EventType */].delete) {
            this.dataset = this.dataset.filter(function (item) { return item.objectId !== event.objectId; });
        }
        this.event.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ResultListWidgetComponent.prototype, "reports", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ResultListWidgetComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ResultListWidgetComponent.prototype, "editable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"])
    ], ResultListWidgetComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"])
    ], ResultListWidgetComponent.prototype, "onRefresh", void 0);
    ResultListWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'sp-result-list-widget',
            template: __webpack_require__("../../../../../src/app/commons/widget/result-list-widget/result-list-widget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/result-list-widget/result-list-widget.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_core__["ChangeDetectorRef"]])
    ], ResultListWidgetComponent);
    return ResultListWidgetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"sidebar-left\">\n\n    <!--Top logo-->\n    <div class=\"logo dark-logo-bg visible-xs- visible-sm-\">\n      <a routerLink=\"/\">\n        <img src=\"assets/img/logo.png\" width=\"32\" alt=\"\">\n        <span class=\"brand-name\">Schoolpop</span>\n      </a>\n    </div>\n\n    <div class=\"sidebar-left-info\">\n      <div class=\"search-field\"></div>\n      <ul class=\"nav nav-pills nav-stacked side-navigation\">\n\n        <li>\n          <h3 class=\"navigation-title\">Navigation</h3>\n        </li>\n\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/\"><i class=\"fa fa-home\"></i> <span>Dashboard</span></a>\n        </li>\n\n        <li *ngIf=\"isAdmin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/class\"><i class=\"fa fa-home\"></i> <span>Classes</span></a>\n        </li>\n\n        <!--Students-->\n        <li *ngIf=\"isStudent\">\n          <a [routerLink]=\"['/profile']\"><i class=\"fa fa-home\"></i> <span>Profile</span></a>\n        </li>\n        <li *ngIf=\"isAdmin || isTeacher\">\n          <a [routerLink]=\"['/user']\">\n            <i class=\"fa fa-home\"></i>\n            <span>View Students</span>\n          </a>\n        </li>\n        <li *ngIf=\"isParent\">\n          <a [routerLink]=\"['/user']\">\n            <i class=\"fa fa-home\"></i>\n            <span>View Children</span>\n          </a>\n        </li>\n        <!--Students end-->\n\n        <!--Parents-->\n        <li *ngIf=\"isAdmin || isTeacher\">\n          <a [routerLink]=\"['/parents']\" >\n            <i class=\"fa fa-user\"></i>\n            <span>Parents</span>\n          </a>\n        </li>\n        <!--Parents end-->\n\n        <li>\n          <h3 class=\"navigation-title\">Others</h3>\n        </li>\n\n        <li class=\"menu-list\">\n          <a [routerLink]=\"['/message']\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span>Message\n              <span *ngIf=\"uc > 0\" class=\"label noti-arrow bg-danger pull-right\">{{uc}} Unread</span>\n            </span>\n          </a>\n        </li>\n\n        <li class=\"menu-list\">\n          <a href=\"javascript:;\"><i class=\"fa fa-calendar\"></i><span>Events / News</span></a>\n          <ul class=\"child-list\">\n            <li>\n              <a [routerLink]=\"['/event']\" >View All Events</a>\n            </li>\n\n            <li>\n              <a [routerLink]=\"['/news']\" >View All News</a>\n            </li>\n          </ul>\n        </li>\n\n        <li *ngIf=\"isAdmin\" [routerLinkActive]=\"['school']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/school']\"><i class=\"fa fa-home\"></i> <span>School Management</span></a>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_js_helpers__ = __webpack_require__("../../../../../src/app/app.js.helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = (function () {
    function SidebarComponent(parse, ms, store) {
        var _this = this;
        this.parse = parse;
        this.ms = ms;
        this.store = store;
        this.ps = this.parse;
        this.user = this.ps.currentUser;
        this.isParent = this.user.get('role') === 'parent';
        this.isStudent = this.user.get('role') === 'user';
        this.isTeacher = this.user.get('role') === 'teacher';
        this.isAdmin = this.user.get('role') === 'admin';
        store.subscribe(function (state) {
            _this.uc = state.uiState.currentUnread;
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        Object(__WEBPACK_IMPORTED_MODULE_4__app_js_helpers__["d" /* visibleSubMenuClose */])();
        Object(__WEBPACK_IMPORTED_MODULE_4__app_js_helpers__["c" /* toggleSidebar */])();
        Object(__WEBPACK_IMPORTED_MODULE_4__app_js_helpers__["b" /* hover */])();
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'sp-sidebar',
            template: __webpack_require__("../../../../../src/app/commons/widget/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* Store */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/single-mail/single-mail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/single-mail/single-mail.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/single-mail/single-mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleMailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleMailComponent = (function () {
    function SingleMailComponent() {
    }
    SingleMailComponent.prototype.ngOnInit = function () {
    };
    SingleMailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-single-mail',
            template: __webpack_require__("../../../../../src/app/commons/widget/single-mail/single-mail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/single-mail/single-mail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleMailComponent);
    return SingleMailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/staff-student-layout/staff-student-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/staff-student-layout/staff-student-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  staff-student-layout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/staff-student-layout/staff-student-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffStudentLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StaffStudentLayoutComponent = (function () {
    function StaffStudentLayoutComponent() {
    }
    StaffStudentLayoutComponent.prototype.ngOnInit = function () {
    };
    StaffStudentLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-ss-layout',
            template: __webpack_require__("../../../../../src/app/commons/widget/staff-student-layout/staff-student-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/staff-student-layout/staff-student-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StaffStudentLayoutComponent);
    return StaffStudentLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/toggle-button/toggle-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/toggle-button/toggle-button.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"toggle-btn\"><i class=\"fa fa-outdent\"></i></a>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/toggle-button/toggle-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleButtonComponent = (function () {
    function ToggleButtonComponent() {
    }
    ToggleButtonComponent.prototype.ngOnInit = function () {
    };
    ToggleButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-toggle-button',
            template: __webpack_require__("../../../../../src/app/commons/widget/toggle-button/toggle-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/toggle-button/toggle-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleButtonComponent);
    return ToggleButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/u-pwidget/u-pwidget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".action-positive {\n  margin-bottom: 8px;\n  margin-right: 8px;\n}\n\nbutton {\n  color: #9c78cd;\n}\n\nimg {\n  margin-left: -40px;\n  margin-top: -24px;\n}\n\nh3 {\n  display: inline-block;\n}\n\nspan.label {\n  padding: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/u-pwidget/u-pwidget.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <img [src]=\"source\" md-card-image>\n  </md-card-header>\n  <md-card-content>\n      <h3 class=\"\">\n        {{getFullname()}}\n      </h3>\n      <span *ngIf=\"!fStatus\" class=\"label bg-danger pull-right\">Fees Unpaid</span>\n      <span *ngIf=\"fStatus\" class=\"label bg-success pull-right\">Fees Paid</span>\n  </md-card-content>\n  <md-card-footer *ngIf=\"showFooter\">\n    <button (click)=\"navigateToUser()\" class=\"pull-right action-positive\" md-raised-button>View</button>\n  </md-card-footer>\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/u-pwidget/u-pwidget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UPWidgetComponent = (function () {
    function UPWidgetComponent(router) {
        this.router = router;
        this.showFooter = true;
        this.source = 'assets/img/mat-bg-1.jpg';
    }
    UPWidgetComponent.prototype.ngOnInit = function () {
    };
    UPWidgetComponent.prototype.getFullname = function () {
        if (this.user) {
            return this.user.firstName + ' ' + this.user.lastName;
        }
        else {
            return ' ';
        }
    };
    UPWidgetComponent.prototype.navigateToUser = function () {
        this.router.navigate(['/profile', this.user.objectId]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UPWidgetComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UPWidgetComponent.prototype, "showFooter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fees-paid'),
        __metadata("design:type", Boolean)
    ], UPWidgetComponent.prototype, "fStatus", void 0);
    UPWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-up-widget',
            template: __webpack_require__("../../../../../src/app/commons/widget/u-pwidget/u-pwidget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/u-pwidget/u-pwidget.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], UPWidgetComponent);
    return UPWidgetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/user-fee-dialog/user-fee-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/user-fee-dialog/user-fee-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-fee-dialog works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/user-fee-dialog/user-fee-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFeeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserFeeDialogComponent = (function () {
    function UserFeeDialogComponent() {
    }
    UserFeeDialogComponent.prototype.ngOnInit = function () {
    };
    UserFeeDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-user-fee-dialog',
            template: __webpack_require__("../../../../../src/app/commons/widget/user-fee-dialog/user-fee-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/user-fee-dialog/user-fee-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserFeeDialogComponent);
    return UserFeeDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/user-overview-widget/user-overview-widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/user-overview-widget/user-overview-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"state-overview\">\n  <section [ngClass]=\"color\" class=\"panel\">\n    <div class=\"symbol\">\n      <i class=\"fa fa-send\"></i>\n    </div>\n    <div class=\"value white\">\n      <h1 class=\"timer\" data-from=\"0\" [attr.data-to]=\"count\" data-speed=\"1000\">\n        {{count}}\n      </h1>\n      <p>{{title}}</p>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/user-overview-widget/user-overview-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserOverviewWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserOverviewWidgetComponent = (function () {
    function UserOverviewWidgetComponent() {
        this.title = '';
        this.count = 0;
    }
    UserOverviewWidgetComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserOverviewWidgetComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserOverviewWidgetComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UserOverviewWidgetComponent.prototype, "color", void 0);
    UserOverviewWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-uo-widget',
            template: __webpack_require__("../../../../../src/app/commons/widget/user-overview-widget/user-overview-widget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/user-overview-widget/user-overview-widget.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserOverviewWidgetComponent);
    return UserOverviewWidgetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/view-message/view-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "strong {\n  text-transform: capitalize;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/view-message/view-message.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"inbox-body\">\n  <div class=\"heading-inbox row\">\n    <div class=\"col-md-12\">\n      <h4>{{subject}}</h4>\n    </div>\n  </div>\n  <div class=\"sender-info\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-xs-12\">\n        <div class=\"pull-left\">\n          <img src=\"{{hash}}\">\n        </div>\n        <div class=\"s-info\">\n          <strong>\n            {{fullname}}\n          </strong>\n          <span>{{email}}</span>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-xs-12\"></div>\n    </div>\n  </div>\n  <div [innerHtml]=\"message\" class=\"view-mail\"></div>\n  <div class=\"attachment-mail\"></div>\n  <div class=\"reply-mail m-b-20\"></div>\n  <div class=\"compose-btn pull-right\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/commons/widget/view-message/view-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__md5__ = __webpack_require__("../../../../../src/app/md5.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_message_action__ = __webpack_require__("../../../../../src/app/message/message-action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewMessageComponent = (function () {
    // TODO: Dispatch MESSAGE_READ_ACTION
    function ViewMessageComponent(ps, store) {
        this.ps = ps;
        this.store = store;
    }
    ViewMessageComponent.prototype.ngOnInit = function () {
        this.isFromMe = this.ps.currentUser.id == this.mail.from.objectId ? true : false;
        this.subject = this.mail.subject;
        this.message = this.mail.message.text;
        if (this.isFromMe) {
            this.setPersonalInfo(this.mail.to);
        }
        else {
            this.setPersonalInfo(this.mail.from);
            if (!this.mail.isRead)
                this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__message_message_action__["l" /* MarkAsReadAction */](this.mail.objectId));
        }
    };
    ViewMessageComponent.prototype.setPersonalInfo = function (user) {
        this.email = user.email;
        this.fullname = user.firstName + " " + user.lastName;
        this.hash = this.getHash(this.email);
    };
    ViewMessageComponent.prototype.getHash = function (email) {
        var baseUrl = 'https://www.gravatar.com/avatar/';
        var hash = __WEBPACK_IMPORTED_MODULE_3__md5__["a" /* encrypt */](email);
        return baseUrl + hash;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ViewMessageComponent.prototype, "mail", void 0);
    ViewMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sp-view-message',
            template: __webpack_require__("../../../../../src/app/commons/widget/view-message/view-message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/view-message/view-message.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* Store */]])
    ], ViewMessageComponent);
    return ViewMessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/widget.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commons/widget/widget.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  widget works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/commons/widget/widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetComponent = (function () {
    function WidgetComponent() {
    }
    WidgetComponent.prototype.ngOnInit = function () {
    };
    WidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-widget',
            template: __webpack_require__("../../../../../src/app/commons/widget/widget.component.html"),
            styles: [__webpack_require__("../../../../../src/app/commons/widget/widget.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetComponent);
    return WidgetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/commons/widget/widget.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_pager_service__ = __webpack_require__("../../../../../src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_directives_module__ = __webpack_require__("../../../../../src/app/commons/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable_release__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable_release___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable_release__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/commons/widget/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/commons/widget/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toggle_button_toggle_button_component__ = __webpack_require__("../../../../../src/app/commons/widget/toggle-button/toggle-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__single_mail_single_mail_component__ = __webpack_require__("../../../../../src/app/commons/widget/single-mail/single-mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gravatar_gravatar_component__ = __webpack_require__("../../../../../src/app/commons/widget/gravatar/gravatar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__full_calendar_full_calendar_component__ = __webpack_require__("../../../../../src/app/commons/widget/full-calendar/full-calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__news_widget_news_widget_component__ = __webpack_require__("../../../../../src/app/commons/widget/news-widget/news-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_overview_widget_user_overview_widget_component__ = __webpack_require__("../../../../../src/app/commons/widget/user-overview-widget/user-overview-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__parent_children_layout_parent_children_layout_component__ = __webpack_require__("../../../../../src/app/commons/widget/parent-children-layout/parent-children-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__staff_student_layout_staff_student_layout_component__ = __webpack_require__("../../../../../src/app/commons/widget/staff-student-layout/staff-student-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__u_pwidget_u_pwidget_component__ = __webpack_require__("../../../../../src/app/commons/widget/u-pwidget/u-pwidget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__result_list_widget_result_list_widget_component__ = __webpack_require__("../../../../../src/app/commons/widget/result-list-widget/result-list-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__column_column_component__ = __webpack_require__("../../../../../src/app/commons/widget/column/column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__datatable_datatable_component__ = __webpack_require__("../../../../../src/app/commons/widget/datatable/datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__compose_dialog_compose_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/compose-dialog/compose-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__delete_dialog_delete_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__edit_result_dialog_edit_result_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/edit-result-dialog/edit-result-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__edit_class_dialog_edit_class_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/edit-class-dialog/edit-class-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__delete_class_dialog_delete_class_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/delete-class-dialog/delete-class-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__new_class_dialog_new_class_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/new-class-dialog/new-class-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__assign_teacher_dialog_assign_teacher_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/assign-teacher-dialog/assign-teacher-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__chart_widget_chart_widget_component__ = __webpack_require__("../../../../../src/app/commons/widget/chart-widget/chart-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__class_fee_dialog_class_fee_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/class-fee-dialog/class-fee-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__user_fee_dialog_user_fee_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/user-fee-dialog/user-fee-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__fab_fab_component__ = __webpack_require__("../../../../../src/app/commons/widget/fab/fab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__message_list_message_list_component__ = __webpack_require__("../../../../../src/app/commons/widget/message-list/message-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__message_item_message_item_component__ = __webpack_require__("../../../../../src/app/commons/widget/message-item/message-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__empty_message_empty_message_component__ = __webpack_require__("../../../../../src/app/commons/widget/empty-message/empty-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__view_message_view_message_component__ = __webpack_require__("../../../../../src/app/commons/widget/view-message/view-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__file_uploader_file_uploader_component__ = __webpack_require__("../../../../../src/app/commons/widget/file-uploader/file-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__footer_footer_component__ = __webpack_require__("../../../../../src/app/commons/widget/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__children_view_children_view_component__ = __webpack_require__("../../../../../src/app/commons/widget/children-view/children-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__news_card_news_card_component__ = __webpack_require__("../../../../../src/app/commons/widget/news-card/news-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__widget_component__ = __webpack_require__("../../../../../src/app/commons/widget/widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pager_pager_component__ = __webpack_require__("../../../../../src/app/commons/widget/pager/pager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__link_parent_link_parent_component__ = __webpack_require__("../../../../../src/app/commons/widget/link-parent/link-parent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// import { CdkTableModule } from '@angular/cdk';


























var WidgetModule = (function () {
    function WidgetModule() {
    }
    WidgetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_30_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["u" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["p" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["q" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable_release__["NgxDatatableModule"],
                // CdkTableModule,
                __WEBPACK_IMPORTED_MODULE_24__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_1__directives_directives_module__["a" /* DirectivesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__toggle_button_toggle_button_component__["a" /* ToggleButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_9__single_mail_single_mail_component__["a" /* SingleMailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__gravatar_gravatar_component__["a" /* GravatarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__full_calendar_full_calendar_component__["a" /* FullCalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__news_widget_news_widget_component__["a" /* NewsWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_overview_widget_user_overview_widget_component__["a" /* UserOverviewWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_14__parent_children_layout_parent_children_layout_component__["a" /* ParentChildrenLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__staff_student_layout_staff_student_layout_component__["a" /* StaffStudentLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__u_pwidget_u_pwidget_component__["a" /* UPWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_18__result_list_widget_result_list_widget_component__["a" /* ResultListWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_19__column_column_component__["a" /* ColumnComponent */],
                __WEBPACK_IMPORTED_MODULE_20__datatable_datatable_component__["a" /* DatatableComponent */],
                __WEBPACK_IMPORTED_MODULE_21__compose_dialog_compose_dialog_component__["a" /* ComposeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_22__delete_dialog_delete_dialog_component__["a" /* DeleteDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_23__edit_result_dialog_edit_result_dialog_component__["a" /* EditResultDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_25__edit_class_dialog_edit_class_dialog_component__["a" /* EditClassDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_26__delete_class_dialog_delete_class_dialog_component__["a" /* DeleteClassDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__new_class_dialog_new_class_dialog_component__["a" /* NewClassDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_28__assign_teacher_dialog_assign_teacher_dialog_component__["a" /* AssignTeacherDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_29__chart_widget_chart_widget_component__["a" /* ChartWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_31__class_fee_dialog_class_fee_dialog_component__["a" /* ClassFeeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_32__user_fee_dialog_user_fee_dialog_component__["a" /* UserFeeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_33__fab_fab_component__["a" /* FabComponent */],
                __WEBPACK_IMPORTED_MODULE_34__message_list_message_list_component__["a" /* MessageListComponent */],
                __WEBPACK_IMPORTED_MODULE_35__message_item_message_item_component__["a" /* MessageItemComponent */],
                __WEBPACK_IMPORTED_MODULE_36__empty_message_empty_message_component__["a" /* EmptyMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_37__view_message_view_message_component__["a" /* ViewMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_38__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_39__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_40__children_view_children_view_component__["a" /* ChildrenViewComponent */],
                __WEBPACK_IMPORTED_MODULE_41__news_card_news_card_component__["a" /* NewsCardComponent */],
                __WEBPACK_IMPORTED_MODULE_42__widget_component__["a" /* WidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_43__pager_pager_component__["a" /* PagerComponent */],
                __WEBPACK_IMPORTED_MODULE_44__link_parent_link_parent_component__["a" /* LinkParentComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_19__column_column_component__["a" /* ColumnComponent */],
                __WEBPACK_IMPORTED_MODULE_21__compose_dialog_compose_dialog_component__["a" /* ComposeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__datatable_datatable_component__["a" /* DatatableComponent */],
                __WEBPACK_IMPORTED_MODULE_11__full_calendar_full_calendar_component__["a" /* FullCalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__gravatar_gravatar_component__["a" /* GravatarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__news_widget_news_widget_component__["a" /* NewsWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_14__parent_children_layout_parent_children_layout_component__["a" /* ParentChildrenLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__result_list_widget_result_list_widget_component__["a" /* ResultListWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__single_mail_single_mail_component__["a" /* SingleMailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__staff_student_layout_staff_student_layout_component__["a" /* StaffStudentLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__toggle_button_toggle_button_component__["a" /* ToggleButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_overview_widget_user_overview_widget_component__["a" /* UserOverviewWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_16__u_pwidget_u_pwidget_component__["a" /* UPWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_33__fab_fab_component__["a" /* FabComponent */],
                __WEBPACK_IMPORTED_MODULE_29__chart_widget_chart_widget_component__["a" /* ChartWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_34__message_list_message_list_component__["a" /* MessageListComponent */],
                __WEBPACK_IMPORTED_MODULE_35__message_item_message_item_component__["a" /* MessageItemComponent */],
                __WEBPACK_IMPORTED_MODULE_36__empty_message_empty_message_component__["a" /* EmptyMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_37__view_message_view_message_component__["a" /* ViewMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_38__file_uploader_file_uploader_component__["a" /* FileUploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_39__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_40__children_view_children_view_component__["a" /* ChildrenViewComponent */],
                __WEBPACK_IMPORTED_MODULE_41__news_card_news_card_component__["a" /* NewsCardComponent */],
                __WEBPACK_IMPORTED_MODULE_43__pager_pager_component__["a" /* PagerComponent */],
                __WEBPACK_IMPORTED_MODULE_44__link_parent_link_parent_component__["a" /* LinkParentComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_pager_service__["a" /* PagerService */]]
        })
    ], WidgetModule);
    return WidgetModule;
}());



/***/ }),

/***/ "../../../../../src/app/demo/demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  demo works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoComponent = (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-demo',
            template: __webpack_require__("../../../../../src/app/demo/demo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demo/demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/errors/error-messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errors; });
var errors = {
    "100": "Network not found"
};


/***/ }),

/***/ "../../../../../src/app/errors/errors.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__four_oh_four_four_oh_four_component__ = __webpack_require__("../../../../../src/app/errors/four-oh-four/four-oh-four.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__five_oh_x_five_oh_x_component__ = __webpack_require__("../../../../../src/app/errors/five-oh-x/five-oh-x.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ErrorsModule = (function () {
    function ErrorsModule() {
    }
    ErrorsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["g" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__four_oh_four_four_oh_four_component__["a" /* FourOhFourComponent */], __WEBPACK_IMPORTED_MODULE_4__five_oh_x_five_oh_x_component__["a" /* FiveOhXComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__services_route_service__["b" /* RouteService */]
            ]
        })
    ], ErrorsModule);
    return ErrorsModule;
}());



/***/ }),

/***/ "../../../../../src/app/errors/five-oh-x/five-oh-x.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/errors/five-oh-x/five-oh-x.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <section class=\"error-wrapper\">\n    <i class=\"icon-500\"></i>\n    <div class=\"text-center\">\n      <h2 class=\"purple-bg\">Something went wrong</h2>\n    </div>\n    <p>Why not try refreshing your page? or you can contact <a href=\"#\">support</a></p>\n    <a href=\"/\" class=\"back-btn\">Back to Home</a>\n  </section>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/errors/five-oh-x/five-oh-x.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiveOhXComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FiveOhXComponent = (function () {
    function FiveOhXComponent(rs) {
        this.rs = rs;
    }
    FiveOhXComponent.prototype.ngOnInit = function () {
        this.rs.setBc(__WEBPACK_IMPORTED_MODULE_0__services_route_service__["a" /* BODY_CLASSES */].fiohf);
    };
    FiveOhXComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-five-oh-x',
            template: __webpack_require__("../../../../../src/app/errors/five-oh-x/five-oh-x.component.html"),
            styles: [__webpack_require__("../../../../../src/app/errors/five-oh-x/five-oh-x.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_route_service__["b" /* RouteService */]])
    ], FiveOhXComponent);
    return FiveOhXComponent;
}());



/***/ }),

/***/ "../../../../../src/app/errors/four-oh-four/four-oh-four.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/errors/four-oh-four/four-oh-four.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> \n  <section class=\"error-wrapper\">\n    <i class=\"icon-404\"></i>\n    <div class=\"text-center\">\n      <h2 class=\"green-bg\">page not found</h2>\n    </div>\n    <p>Something went wrong or that page doesn’t exist yet.</p>\n    <a href=\"/\" class=\"back-btn\">Back to Home</a>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/errors/four-oh-four/four-oh-four.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FourOhFourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FourOhFourComponent = (function () {
    function FourOhFourComponent(rs) {
        this.rs = rs;
    }
    FourOhFourComponent.prototype.ngOnInit = function () {
        this.rs.setBc('body-404');
    };
    FourOhFourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-four-oh-four',
            template: __webpack_require__("../../../../../src/app/errors/four-oh-four/four-oh-four.component.html"),
            styles: [__webpack_require__("../../../../../src/app/errors/four-oh-four/four-oh-four.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_route_service__["b" /* RouteService */]])
    ], FourOhFourComponent);
    return FourOhFourComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\">\n  <h3>\n    Events\n  </h3>\n  <span class=\"sub-title\">Upcoming Events</span>\n  <div class=\"state-information\">\n    <button *ngIf=\"user.get('role') === 'admin'\" type=\"button\" class=\"btn btn-success m-t-10\"><i class=\"fa fa-plus\"></i> Add New </button>\n  </div>\n</div>\n<div class=\"wrapper\">\n  <section class=\"panel-timeline\">\n    <div class=\"time-line-wrapper\">\n      <div class=\"time-line-caption\">\n        <h3 class=\"time-line-title\">Today</h3>\n      </div>\n      <article *ngFor=\"let event of events$ | async; let even=even;\" [ngClass]=\"{ 'alt': even }\" class=\"time-line-row\">\n        <div class=\"time-line-info\">\n          <div class=\"panel\">\n            <div class=\"panel-body\">\n              <span class=\"arrow\"></span>\n              <span [ngClass]=\"getTypeColor(event.type)\" class=\"time-line-ico-box\"></span>\n              <span [ngClass]=\"getTypeColor(event.type)\" class=\"time-line-subject\"> <i class=\"fa fa-clock-o\"></i> {{getTypeTitle(event.type)}}</span>\n              <div class=\"title\">\n                <h1>23 June</h1>\n                <small class=\"text-muted\">sunday 2014, 2:30 pm</small>\n              </div>\n              <p>{{event.title}}\n                <br> Venue : {{event.detail.venue}}\n              </p>\n              <p>{{event.detail.text}}</p>\n            </div>\n          </div>\n        </div>\n      </article>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventComponent = (function () {
    function EventComponent(ls, rs, ps, evntS) {
        this.ls = ls;
        this.rs = rs;
        this.ps = ps;
        this.evntS = evntS;
        this.user = this.ps.currentUser;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rs.setBc('sticky-header');
        this.ls.setLoading(true);
        this.events$ = this.evntS.getEvents().map(function (e) { return e.events; }).do(function () { return _this.ls.setLoading(false); });
    };
    EventComponent.prototype.getTypeColor = function (type) {
        switch (type) {
            case 0:
                return 'purple';
            case 1:
                return 'green';
            case 2:
                return 'yellow';
            default:
                return 'purple';
        }
    };
    EventComponent.prototype.getTypeTitle = function (type) {
        switch (type) {
            case 0:
                return 'General Meeting';
            case 1:
                return 'Open Day';
            case 2:
                return 'Party';
            default:
                return 'purple';
        }
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-event',
            template: __webpack_require__("../../../../../src/app/event/event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_3__services_route_service__["b" /* RouteService */], __WEBPACK_IMPORTED_MODULE_4__services_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event/event.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_directives_directives_module__ = __webpack_require__("../../../../../src/app/commons/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_component__ = __webpack_require__("../../../../../src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commons_widget_widget_module__ = __webpack_require__("../../../../../src/app/commons/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EventModule = (function () {
    function EventModule() {
    }
    EventModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__commons_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_6__commons_widget_widget_module__["a" /* WidgetModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__event_component__["a" /* EventComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_9__services_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_7__services_parse_service__["a" /* ParseService */],
                __WEBPACK_IMPORTED_MODULE_0__services_route_service__["b" /* RouteService */],
                __WEBPACK_IMPORTED_MODULE_1__services_user_service__["e" /* UserService */]
            ]
        })
    ], EventModule);
    return EventModule;
}());



/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  forgot-password works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forgot-password/forgot-password.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_component__ = __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPasswordModule = (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__forgot_password_component__["a" /* ForgotPasswordComponent */]]
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());



/***/ }),

/***/ "../../../../../src/app/guards/authenticated.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticatedGuard = (function () {
    function AuthenticatedGuard(ps, router) {
        this.ps = ps;
        this.router = router;
    }
    AuthenticatedGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    AuthenticatedGuard.prototype.canActivate = function (next, state) {
        if (this.ps.currentUser) {
            return true;
        }
        else if (this.ps.currentUser && !this.ps.currentUser.get('isActivate')) {
            this.router.navigate(['/500']);
        }
        else {
            this.router.navigate(['/login']);
        }
        return false;
    };
    AuthenticatedGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], AuthenticatedGuard);
    return AuthenticatedGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/is-activated.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsActivatedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IsActivatedGuard = (function () {
    function IsActivatedGuard(ps, router) {
        this.ps = ps;
        this.router = router;
    }
    IsActivatedGuard.prototype.canActivate = function (next, state) {
        if (this.ps.currentUser.get('isActive')) {
            return true;
        }
        else {
            this.router.navigate(['/inactive']);
        }
        return false;
    };
    IsActivatedGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], IsActivatedGuard);
    return IsActivatedGuard;
}());



/***/ }),

/***/ "../../../../../src/app/klass/klass-list/klass-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fab {\n  position: fixed;\n  bottom: 40px;\n  right: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/klass/klass-list/klass-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <md-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></md-progress-bar>\n      <md-card>\n        <md-card-header>\n          <md-card-title>\n            <h3>Class Rooms</h3>\n          </md-card-title>\n        </md-card-header>\n        <md-card-content>\n          <sp-datatable (event)=\"doEvent($event)\" [viewable]=\"true\" [editable]=\"editable\" [dataset]=\"dataset\">\n            <sp-column [value]=\"'id'\" [header]=\"'Id'\"></sp-column>\n            <sp-column [value]=\"'commonName'\" [header]=\"'Common Name'\"></sp-column>\n            <sp-column [value]=\"'sCount'\" [header]=\"'# Of Students'\"></sp-column>\n          </sp-datatable>\n        </md-card-content>\n      </md-card>\n    </div>\n    <div class=\"col-md-4\">\n\n    </div>\n  </div>\n  <button *ngIf=\"editable\" class=\"fab\" md-fab (click)=\"newClass()\">\n    <md-icon>add</md-icon>\n  </button>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/klass/klass-list/klass-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlassListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors_error_messages__ = __webpack_require__("../../../../../src/app/errors/error-messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_IEvent__ = __webpack_require__("../../../../../src/app/model/IEvent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_klass_service__ = __webpack_require__("../../../../../src/app/services/klass.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commons_widget_new_class_dialog_new_class_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/new-class-dialog/new-class-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var KlassListComponent = (function () {
    function KlassListComponent(rs, router, dialog, toastr, vRef, ps, ls, ks) {
        this.rs = rs;
        this.router = router;
        this.dialog = dialog;
        this.toastr = toastr;
        this.ps = ps;
        this.ls = ls;
        this.ks = ks;
        this.classes = [];
        this.dataset = [];
        this.editable = this.ps.currentUser.get("role") == "admin";
        this.isLoading = false;
        this.toastr.setRootViewContainerRef(vRef);
    }
    KlassListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rs.setBc("sticky-header");
        this.ks.getDataSetObservable.subscribe(function (l) {
            _this.dataset = l;
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
        });
    };
    KlassListComponent.prototype.doEvent = function (e) {
        var _this = this;
        var c = Object.assign([], this.ks.classes);
        var item = c.filter(function (i) { return i.id == e.objectId; })[0];
        if (e.event == __WEBPACK_IMPORTED_MODULE_3__model_IEvent__["a" /* EventType */].view) {
            this.router.navigate(['class', item.id]);
        }
        else if (e.event == __WEBPACK_IMPORTED_MODULE_3__model_IEvent__["a" /* EventType */].delete) {
            this.isLoading = true;
            this.ks.deleteClass(item).subscribe(function (c) { return _this.ks.resetDataset(c); });
        }
    };
    KlassListComponent.prototype.newClass = function () {
        var _this = this;
        var newClassDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__commons_widget_new_class_dialog_new_class_dialog_component__["a" /* NewClassDialogComponent */]);
        newClassDialogRef.afterClosed()
            .filter(function (r) {
            if (r !== undefined && r !== "cancel") {
                return r;
            }
            return r !== undefined && r !== "cancel";
        })
            .flatMap(function (t) {
            _this.isLoading = true;
            return _this.ks.newClass(t.title, parseInt(t.fee));
        })
            .subscribe(function (c) {
            _this.isLoading = false;
            _this.ks.addClass(c);
            console.log(c);
        }, function (err) {
            _this.isLoading = false;
            console.log(err);
            _this.toastr.error(__WEBPACK_IMPORTED_MODULE_0__errors_error_messages__["a" /* errors */][err.code]);
        });
    };
    KlassListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'sp-klass-list',
            template: __webpack_require__("../../../../../src/app/klass/klass-list/klass-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/klass/klass-list/klass-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__services_route_service__["b" /* RouteService */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_7__services_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_4__services_loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_5__services_klass_service__["a" /* KlassService */]])
    ], KlassListComponent);
    return KlassListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/klass/klass-view/klass-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fab {\n  position: fixed;\n  bottom: 40px;\n  right: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/klass/klass-view/klass-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\">\n  <h3>{{klass?.get(\"commonName\")}}</h3>\n  <span *ngIf=\"klass?.has('teacher')\" class=\"sub-title\">{{klass?.get(\"teacher\").get(\"firstName\")}} {{klass?.get(\"teacher\").get(\"lastName\")}}</span>\n</div>\n<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <md-card>\n        <md-card-header>\n          <md-card-title>\n            <h3>Options</h3>\n          </md-card-title>\n        </md-card-header>\n        <md-card-content>\n          <md-nav-list>\n            <a md-list-item href=\"/class\">Back</a>\n          </md-nav-list>\n          <ng-container *ngIf=\"isAdmin\">\n            <md-nav-list *ngIf=\"!hasTeacher; else e\">\n              <a (click)=\"assignTeacher()\" md-list-item>Assign Teacher</a>\n            </md-nav-list>\n            <ng-template #e>\n              <md-nav-list>\n                <a (click)=\"assignTeacher()\" md-list-item>Re-assign Class Teacher</a>\n              </md-nav-list>\n            </ng-template>\n          </ng-container>\n          <md-nav-list>\n            <a md-list-item (click)=\"sendMessageToClass()\">Send Message To Students</a>\n          </md-nav-list>\n          <md-nav-list>\n            <a md-list-item>Edit Class Name</a>\n          </md-nav-list>\n          <md-nav-list>\n            <a md-list-item>Edit Class Fee</a>\n          </md-nav-list>\n        </md-card-content>\n      </md-card>\n    </div>\n    <div class=\"col-md-8\">\n      <md-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></md-progress-bar>\n      <md-card>\n        <md-card-header>\n          <md-card-title>\n            <h3>Students</h3>\n          </md-card-title>\n        </md-card-header>\n        <md-card-content>\n          <sp-datatable (event)=\"doEvent($event)\" [viewable]=\"true\" [editable]=\"editable\" [dataset]=\"dataset\">\n            <sp-column [value]=\"'firstName'\" [header]=\"'First Name'\"></sp-column>\n            <sp-column [value]=\"'lastName'\" [header]=\"'Last Name'\"></sp-column>\n            <sp-column [value]=\"'sex'\" [header]=\"'Sex'\"></sp-column>\n          </sp-datatable>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>\n\n<button class=\"fab\" md-fab>\n  <md-icon>add</md-icon>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/klass/klass-view/klass-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlassViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors_error_messages__ = __webpack_require__("../../../../../src/app/errors/error-messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_IEvent__ = __webpack_require__("../../../../../src/app/model/IEvent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_klass_service__ = __webpack_require__("../../../../../src/app/services/klass.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__commons_widget_assign_teacher_dialog_assign_teacher_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/assign-teacher-dialog/assign-teacher-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commons_widget_compose_dialog_compose_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/compose-dialog/compose-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var KlassViewComponent = (function () {
    function KlassViewComponent(route, router, ks, dialog, ls, toastr, ps, vRef) {
        this.route = route;
        this.router = router;
        this.ks = ks;
        this.dialog = dialog;
        this.ls = ls;
        this.toastr = toastr;
        this.ps = ps;
        this.klass = {};
        this.isLoading = false;
        this.editable = false;
        this.hasTeacher = false;
        this.isAdmin = this.ps.currentUser.get('role') === 'admin';
        this.isTeacher = this.ps.currentUser.get('role') === 'teacher';
        this.dataset = [];
        this.toastr.setRootViewContainerRef(vRef);
    }
    KlassViewComponent.prototype.ngOnInit = function () {
        this.klass = this.route.snapshot.data['class'];
        this.hasTeacher = this.klass.has('teacher');
        this.getStudents(this.klass);
    };
    KlassViewComponent.prototype.getStudents = function (clazz) {
        var _this = this;
        this.isLoading = true;
        var students = clazz.get('students');
        this.ks.getStudents(students).subscribe(function (s) {
            _this.isLoading = false;
            _this.dataset = s;
        }, function (err) {
            _this.isLoading = false;
            _this.toastr.error(__WEBPACK_IMPORTED_MODULE_1__errors_error_messages__["a" /* errors */][err.code]);
        }, function () {
            console.log('Completed');
        });
    };
    KlassViewComponent.prototype.doEvent = function (e) {
        if (e.event === __WEBPACK_IMPORTED_MODULE_4__model_IEvent__["a" /* EventType */].view) {
            this.router.navigate(['user', e.objectId]);
        }
    };
    KlassViewComponent.prototype.sendMessageToClass = function () {
        var composeDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__commons_widget_compose_dialog_compose_dialog_component__["a" /* ComposeDialogComponent */], {
            height: '400px',
            width: '600px'
        });
    };
    KlassViewComponent.prototype.assignTeacher = function () {
        var _this = this;
        var assignTeacherDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__commons_widget_assign_teacher_dialog_assign_teacher_dialog_component__["a" /* AssignTeacherDialogComponent */], {
            height: '400px',
            width: '600px'
        });
        assignTeacherDialogRef.afterClosed().filter(function (t) { return t !== undefined; }).subscribe(function (t) {
            _this.ls.setLoading(true);
            console.log(t);
            _this.ks.setTeacher(_this.klass, t.teacher).subscribe(function (c) {
                _this.klass = c;
                _this.hasTeacher = true;
            }, function (err) {
                _this.ls.setLoading(false);
                console.log(err);
            }, function () { return _this.ls.setLoading(false); });
        });
    };
    KlassViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'sp-klass-view',
            template: __webpack_require__("../../../../../src/app/klass/klass-view/klass-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/klass/klass-view/klass-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_klass_service__["a" /* KlassService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_9__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__services_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewContainerRef"]])
    ], KlassViewComponent);
    return KlassViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/klass/klass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/klass/klass.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/klass/klass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_klass_service__ = __webpack_require__("../../../../../src/app/services/klass.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__errors_error_messages__ = __webpack_require__("../../../../../src/app/errors/error-messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var KlassComponent = (function () {
    function KlassComponent(rs, ps, ls, toastr, vRef, ks) {
        this.rs = rs;
        this.ps = ps;
        this.ls = ls;
        this.toastr = toastr;
        this.ks = ks;
        this.classes = [];
        this.dataset = [];
        this.toastr.setRootViewContainerRef(vRef);
    }
    KlassComponent.prototype.ngOnInit = function () {
        this.rs.setBc('sticky-header');
        this.ls.setLoading(true);
        this.setup();
    };
    KlassComponent.prototype.setup = function () {
        var _this = this;
        this.ks.getClasses().subscribe(function (c) {
            _this.classes = c;
            _this.ls.setLoading(false);
            _this.ks.setClasses(_this.classes);
            _this.ks.resetDataset();
        }, function (err) {
            _this.ls.setLoading(false);
            console.log(__WEBPACK_IMPORTED_MODULE_5__errors_error_messages__["a" /* errors */][err.code]);
            _this.toastr.error(__WEBPACK_IMPORTED_MODULE_5__errors_error_messages__["a" /* errors */][err.code]);
        });
    };
    KlassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-klass',
            template: __webpack_require__("../../../../../src/app/klass/klass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/klass/klass.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_route_service__["b" /* RouteService */], __WEBPACK_IMPORTED_MODULE_4__services_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_2__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_3__services_klass_service__["a" /* KlassService */]])
    ], KlassComponent);
    return KlassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/klass/klass.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlassModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_widget_new_class_dialog_new_class_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/new-class-dialog/new-class-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_widget_widget_module__ = __webpack_require__("../../../../../src/app/commons/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__klass_component__ = __webpack_require__("../../../../../src/app/klass/klass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_klass_service__ = __webpack_require__("../../../../../src/app/services/klass.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__commons_widget_edit_class_dialog_edit_class_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/edit-class-dialog/edit-class-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__commons_widget_delete_class_dialog_delete_class_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/delete-class-dialog/delete-class-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__klass_list_klass_list_component__ = __webpack_require__("../../../../../src/app/klass/klass-list/klass-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__klass_view_klass_view_component__ = __webpack_require__("../../../../../src/app/klass/klass-view/klass-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__toastr_options__ = __webpack_require__("../../../../../src/app/toastr-options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__resolvers_klass_resolver__ = __webpack_require__("../../../../../src/app/resolvers/klass.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__commons_widget_assign_teacher_dialog_assign_teacher_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/assign-teacher-dialog/assign-teacher-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__commons_widget_compose_dialog_compose_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/compose-dialog/compose-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var KlassModule = (function () {
    function KlassModule() {
    }
    KlassModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__commons_widget_widget_module__["a" /* WidgetModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["p" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["l" /* MatListModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_10__klass_component__["a" /* KlassComponent */], __WEBPACK_IMPORTED_MODULE_15__klass_list_klass_list_component__["a" /* KlassListComponent */], __WEBPACK_IMPORTED_MODULE_16__klass_view_klass_view_component__["a" /* KlassViewComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_parse_service__["a" /* ParseService */],
                __WEBPACK_IMPORTED_MODULE_6__services_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_5__services_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_12__services_klass_service__["a" /* KlassService */],
                __WEBPACK_IMPORTED_MODULE_18__resolvers_klass_resolver__["a" /* KlassResolver */],
                __WEBPACK_IMPORTED_MODULE_4__services_route_service__["b" /* RouteService */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["j" /* MatIconRegistry */],
                __WEBPACK_IMPORTED_MODULE_19__services_user_service__["e" /* UserService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_17__toastr_options__["a" /* CustomOption */] }
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__commons_widget_edit_class_dialog_edit_class_dialog_component__["a" /* EditClassDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__commons_widget_delete_class_dialog_delete_class_dialog_component__["a" /* DeleteClassDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_1__commons_widget_new_class_dialog_new_class_dialog_component__["a" /* NewClassDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__commons_widget_assign_teacher_dialog_assign_teacher_dialog_component__["a" /* AssignTeacherDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_21__commons_widget_compose_dialog_compose_dialog_component__["a" /* ComposeDialogComponent */]
            ]
        })
    ], KlassModule);
    return KlassModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-logo>img {\n  width: 125px;\n  height: 125px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-logo\">\n  <img src=\"assets/img/logo.png\" alt=\"\" />\n</div>\n<h2 class=\"form-heading\">login</h2>\n<div class=\"container log-row\">\n  <form class=\"form-signin\" (ngSubmit)=\"login()\" [formGroup]=\"authForm\" novalidate>\n    <div class=\"login-wrap\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\" autofocus>\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n      <button [disabled]=\"!authForm.valid || isLoading\" class=\"btn btn-lg btn-success btn-block\" type=\"submit\">LOGIN</button>\n      <label class=\"checkbox-custom check-success\" style=\" display: inline-block;\">\n        <input type=\"checkbox\" value=\"remember-me\" id=\"checkbox1\"> <label for=\"checkbox1\">Remember me</label>\n      </label>\n      <a class=\"pull-right\" style=\"margin-top:10px; cursor:pointer;\"> Forgot Password?</a>\n\n      <div class=\"registration\">\n        Don't have an account yet?\n        <a class=\"\" [routerLink]=\"['/register'] \">\n          Create an account\n        </a>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(parseService, fb, toastr, vRef, rs) {
        this.parseService = parseService;
        this.fb = fb;
        this.toastr = toastr;
        this.rs = rs;
        this.loggedIn = false;
        this.hasError = false;
        this.isLoading = false;
        this.toastr.setRootViewContainerRef(vRef);
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.rs.setBc('login-body');
    };
    LoginComponent.prototype.createForm = function () {
        this.authForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var username = this.authForm.value.username;
        var password = this.authForm.value.password;
        this.isLoading = true;
        this.toastr.info('Logging in.', 'Please Wait');
        this.parseService.login(username, password).subscribe(function (loggin) {
            _this.loggedIn = loggin;
            _this.toastr.success('Login successful.');
            location.href = '/';
        }, function (err) {
            _this.isLoading = false;
            console.error(err);
            _this.error = err.error;
            _this.toastr.error('Please check your username / password combination.', 'Login Failed');
            _this.loggedIn = err.loggedIn;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_0__services_route_service__["b" /* RouteService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__toastr_options__ = __webpack_require__("../../../../../src/app/toastr.options.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["g" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__services_parse_service__["a" /* ParseService */],
                __WEBPACK_IMPORTED_MODULE_8__services_route_service__["b" /* RouteService */],
                { provide: __WEBPACK_IMPORTED_MODULE_9_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_10__toastr_options__["a" /* CustomOption */] }
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/md5.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return encrypt; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getSrc;
/**
 * Credit http://www.myersdaily.org/joseph/javascript/md5-text.html
 */
function md5cycle(x, k) {
    var a = x[0], b = x[1], c = x[2], d = x[3];
    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);
    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);
    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);
    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);
    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
}
function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
}
function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
}
function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t);
}
function md51(s) {
    var txt = '';
    var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i;
    for (i = 64; i <= s.length; i += 64) {
        md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < s.length; i++)
        tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
    tail[i >> 2] |= 0x80 << ((i % 4) << 3);
    if (i > 55) {
        md5cycle(state, tail);
        for (i = 0; i < 16; i++)
            tail[i] = 0;
    }
    tail[14] = n * 8;
    md5cycle(state, tail);
    return state;
}
/* there needs to be support for Unicode here,
  * unless we pretend that we can redefine the MD-5
  * algorithm for multi-byte characters (perhaps
  * by adding every four 16-bit characters and
  * shortening the sum to 32 bits). Otherwise
  * I suggest performing MD-5 as if every character
  * was two bytes--e.g., 0040 0025 = @%--but then
  * how will an ordinary MD-5 sum be matched?
  * There is no way to standardize text to something
  * like UTF-8 before transformation; speed cost is
  * utterly prohibitive. The JavaScript standard
  * itself needs to look at this: it should start
  * providing access to strings as preformed UTF-8
  * 8-bit unsigned value arrays.
  */
function md5blk(s) {
    var md5blks = [], i; /* Andy King said do it this way. */
    for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
}
var hex_chr = '0123456789abcdef'.split('');
function rhex(n) {
    var s = '', j = 0;
    for (; j < 4; j++)
        s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
    return s;
}
function hex(x) {
    for (var i = 0; i < x.length; i++)
        x[i] = rhex(x[i]);
    return x.join('');
}
function md5(s) {
    return hex(md51(s));
}
/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */
var add32 = function (a, b) {
    return (a + b) & 0xFFFFFFFF;
};
if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
    add32 = function (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    };
}
var encrypt = function (s) {
    return md5(s);
};
function getSrc(email) {
    var baseUrl = 'https://www.gravatar.com/avatar/';
    var hash = encrypt(email);
    return baseUrl + hash;
}


/***/ }),

/***/ "../../../../../src/app/message/message-action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return INIT_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_VIEW_MESSAGE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MAIL_LOADED_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return VIEW_MESSAGE_LOADED_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_CURRENT_MESSAGE_SECTION_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SEND_MESSAGE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MESSAGE_SENT_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChangeCurrentMessageSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SendMessageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return MessageSentAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MailLoadedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LoadDashBoardAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LoadedViewMessageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LoadViewMessageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MARK_AS_READ_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MarkAsReadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return STREAM_NEW_MESSAGE_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return StreamNewMessageAction; });
var INIT_ACTION = 'LOAD_MAIL_ACTION';
var LOAD_VIEW_MESSAGE_ACTION = 'LOAD_VIEW_MESSAGE_ACTION';
var MAIL_LOADED_ACTION = 'MAIL_LOADED_ACTION';
var VIEW_MESSAGE_LOADED_ACTION = 'VIEW_MESSAGE_LOADED_ACTION';
var CHANGE_CURRENT_MESSAGE_SECTION_ACTION = 'CHANGE_CURRENT_MESSAGE_SECTION_ACTION';
var SEND_MESSAGE_ACTION = 'SEND_MESSAGE_ACTION';
var MESSAGE_SENT_ACTION = 'MESSAGE_SENT_ACTION';
var ChangeCurrentMessageSection = (function () {
    function ChangeCurrentMessageSection(payload) {
        this.payload = payload;
        this.type = CHANGE_CURRENT_MESSAGE_SECTION_ACTION;
    }
    return ChangeCurrentMessageSection;
}());

var SendMessageAction = (function () {
    function SendMessageAction(payload) {
        this.payload = payload;
        this.type = SEND_MESSAGE_ACTION;
    }
    return SendMessageAction;
}());

var MessageSentAction = (function () {
    function MessageSentAction(payload) {
        this.payload = payload;
        this.type = MESSAGE_SENT_ACTION;
    }
    return MessageSentAction;
}());

var MailLoadedAction = (function () {
    function MailLoadedAction(payload) {
        this.payload = payload;
        this.type = MAIL_LOADED_ACTION;
    }
    return MailLoadedAction;
}());

var LoadDashBoardAction = (function () {
    function LoadDashBoardAction() {
        this.type = INIT_ACTION;
    }
    return LoadDashBoardAction;
}());

var LoadedViewMessageAction = (function () {
    // Payload is id of message to be viewed
    function LoadedViewMessageAction(payload) {
        this.payload = payload;
        this.type = VIEW_MESSAGE_LOADED_ACTION;
    }
    return LoadedViewMessageAction;
}());

var LoadViewMessageAction = (function () {
    // Payload is id of message to be viewed
    function LoadViewMessageAction(payload) {
        this.payload = payload;
        this.type = LOAD_VIEW_MESSAGE_ACTION;
    }
    return LoadViewMessageAction;
}());

var MARK_AS_READ_ACTION = 'MARK_AS_READ_ACTION';
var MarkAsReadAction = (function () {
    function MarkAsReadAction(payload) {
        this.payload = payload;
        this.type = MARK_AS_READ_ACTION;
    }
    return MarkAsReadAction;
}());

var STREAM_NEW_MESSAGE_ACTION = 'STREAM_NEW_MESSAGE_ACTION';
var StreamNewMessageAction = (function () {
    function StreamNewMessageAction(payload) {
        this.payload = payload;
        this.type = STREAM_NEW_MESSAGE_ACTION;
    }
    return StreamNewMessageAction;
}());



/***/ }),

/***/ "../../../../../src/app/message/message-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_APP_STATE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_store_profile_state__ = __webpack_require__("../../../../../src/app/profile/store/profile.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_ui_state__ = __webpack_require__("../../../../../src/app/states/ui-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_data_state__ = __webpack_require__("../../../../../src/app/states/data-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_view_message_state__ = __webpack_require__("../../../../../src/app/message/view/view-message-state.ts");




var INITIAL_APP_STATE = {
    uiState: __WEBPACK_IMPORTED_MODULE_1__states_ui_state__["a" /* INITIAL_MESSAGE_UI_STATE */],
    dataState: __WEBPACK_IMPORTED_MODULE_2__states_data_state__["a" /* INITIAL_MESSAGE_DATA_STATE */],
    viewMessageState: __WEBPACK_IMPORTED_MODULE_3__view_view_message_state__["a" /* INITIAL_VIEW_MESSAGE_STATE */],
    profile: __WEBPACK_IMPORTED_MODULE_0__profile_store_profile_state__["a" /* INIT_PROFILE_STATE */]
};


/***/ }),

/***/ "../../../../../src/app/message/reducers/inbox-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = messageStoreReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_store_profile_actions__ = __webpack_require__("../../../../../src/app/profile/store/profile.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_action__ = __webpack_require__("../../../../../src/app/user/user-action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_report_actions__ = __webpack_require__("../../../../../src/app/actions/report-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__states_data_state__ = __webpack_require__("../../../../../src/app/states/data-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_action__ = __webpack_require__("../../../../../src/app/message/message-action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_action__ = __webpack_require__("../../../../../src/app/message/message-action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_state__ = __webpack_require__("../../../../../src/app/message/message-state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducers_user_setCurrentUser__ = __webpack_require__("../../../../../src/app/reducers/user/setCurrentUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reducers_reports_reports_fetched__ = __webpack_require__("../../../../../src/app/reducers/reports/reports-fetched.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_store_profile_reducer__ = __webpack_require__("../../../../../src/app/profile/store/profile.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");















function messageStoreReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_8__message_state__["a" /* INITIAL_APP_STATE */]; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_7__message_action__["a" /* CHANGE_CURRENT_MESSAGE_SECTION_ACTION */]:
            return changeCurrentMessageSection(state, action);
        case __WEBPACK_IMPORTED_MODULE_6__message_action__["h" /* MAIL_LOADED_ACTION */]:
            return handleLoadMainAction(state, action);
        case __WEBPACK_IMPORTED_MODULE_6__message_action__["r" /* VIEW_MESSAGE_LOADED_ACTION */]:
            return handleViewMessageAction(state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_7__message_action__["n" /* SEND_MESSAGE_ACTION */]:
            return handleSendMessage(state, action);
        case __WEBPACK_IMPORTED_MODULE_7__message_action__["j" /* MESSAGE_SENT_ACTION */]:
            return handleMessageSent(state, action);
        case __WEBPACK_IMPORTED_MODULE_7__message_action__["i" /* MARK_AS_READ_ACTION */]:
            return handleMarkAsRead(state, action);
        case __WEBPACK_IMPORTED_MODULE_6__message_action__["o" /* STREAM_NEW_MESSAGE_ACTION */]:
            return handleStreamedMessage(state, action);
        case __WEBPACK_IMPORTED_MODULE_4__actions_report_actions__["b" /* REPORTS_FETCHED_ACTION */]:
            return Object(__WEBPACK_IMPORTED_MODULE_11__reducers_reports_reports_fetched__["a" /* ReportsFetched */])(state, action);
        case __WEBPACK_IMPORTED_MODULE_3__user_user_action__["a" /* SET_CURRENT_SELECTED_USER_ACTION */]:
            return Object(__WEBPACK_IMPORTED_MODULE_10__reducers_user_setCurrentUser__["a" /* SetCurrentSelectedUser */])(state, action);
        case __WEBPACK_IMPORTED_MODULE_2__profile_store_profile_actions__["b" /* ADD_NEW_PICKUP */]:
            return Object(__WEBPACK_IMPORTED_MODULE_12__profile_store_profile_reducer__["b" /* AddNewPickupReducer */])(state, action);
        case __WEBPACK_IMPORTED_MODULE_2__profile_store_profile_actions__["g" /* NEW_PICKUP_ADDED */]:
            return Object(__WEBPACK_IMPORTED_MODULE_12__profile_store_profile_reducer__["c" /* NewPickupAddedReducer */])(state, action);
        case __WEBPACK_IMPORTED_MODULE_2__profile_store_profile_actions__["a" /* ADD_ALL_PICKUPS */]:
            return Object(__WEBPACK_IMPORTED_MODULE_12__profile_store_profile_reducer__["a" /* AddAllPickupsReducer */])(state, action);
        case __WEBPACK_IMPORTED_MODULE_2__profile_store_profile_actions__["i" /* SET_CURRENT_SELECTED_USER */]:
            return Object(__WEBPACK_IMPORTED_MODULE_12__profile_store_profile_reducer__["d" /* SetCurrentSelectedUserReducer */])(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* ADD_USER_COUNT_ACTION */]:
            return Object(__WEBPACK_IMPORTED_MODULE_13__services_user_service__["f" /* addUserCountReducer */])(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__news_news_component__["a" /* ADD_NEWS_ACTION */]:
            return Object(__WEBPACK_IMPORTED_MODULE_14__news_news_component__["e" /* addNewsReducer */])(state, action);
        default:
            return state;
    }
}
function handleStreamedMessage(state, action) {
    var newState = __WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](state);
    console.log(action);
    var inbox = __WEBPACK_IMPORTED_MODULE_9_lodash__["values"](newState.dataState.inbox);
    inbox.unshift(action.payload.item);
    newState.dataState.inbox = __WEBPACK_IMPORTED_MODULE_9_lodash__["keyBy"](inbox, 'objectId');
    newState.uiState.currentUnread = getUnreadCount(inbox);
    return newState;
}
function handleMarkAsRead(state, action) {
    var newState = __WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](state);
    newState.dataState.inbox[action.payload].isRead = true;
    var inbox = __WEBPACK_IMPORTED_MODULE_9_lodash__["values"](newState.dataState.inbox);
    newState.uiState.currentUnread = getUnreadCount(inbox);
    return newState;
}
function handleSendMessage(state, action) {
    var newState = __WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](state);
    newState.uiState.currentMailSection = 0;
    return newState;
}
function handleMessageSent(state, action) {
    var newState = __WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](state);
    newState.uiState.currentMailSection = 0;
    var outbox = __WEBPACK_IMPORTED_MODULE_9_lodash__["values"](newState.dataState.outbox);
    outbox.unshift(action.payload);
    newState.dataState.outbox = __WEBPACK_IMPORTED_MODULE_9_lodash__["keyBy"](outbox, 'objectId');
    return newState;
}
function changeCurrentMessageSection(state, action) {
    var payload = action.payload;
    var newState = __WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](state);
    newState.uiState.currentMailSection = payload;
    return newState;
}
function handleViewMessageAction(state, action) {
    var payload = action;
    var newState = __WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](state);
    var inMail = newState.dataState.inbox[payload.id];
    var outMail = newState.dataState.outbox[payload.id];
    var section = payload.section;
    var mail;
    if (section === 0) {
        mail = inMail;
    }
    else if (section === 1) {
        mail = outMail;
    }
    newState.viewMessageState.message = mail;
    newState.uiState.currentMailSection = 2;
    return newState;
}
function handleLoadMainAction(state, action) {
    var mailsData = action.payload;
    var newState = __WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](state);
    var inbox = newState.dataState.inbox;
    var students = __WEBPACK_IMPORTED_MODULE_9_lodash__["keyBy"](mailsData.users.students, 'objectId');
    var parents = __WEBPACK_IMPORTED_MODULE_9_lodash__["keyBy"](mailsData.users.parents, 'objectId');
    var teachers = __WEBPACK_IMPORTED_MODULE_9_lodash__["keyBy"](mailsData.users.teachers, 'objectId');
    var admins = __WEBPACK_IMPORTED_MODULE_9_lodash__["keyBy"](mailsData.users.admins, 'objectId');
    var users = {
        students: students,
        parents: parents,
        teachers: teachers,
        admins: admins,
        currentSelectedUserProfile: __WEBPACK_IMPORTED_MODULE_5__states_data_state__["b" /* INIT_USER_PROFILE */]
    };
    newState.dataState = {
        inbox: __WEBPACK_IMPORTED_MODULE_9_lodash__["keyBy"](action.payload.mails.inbox, 'objectId'),
        outbox: __WEBPACK_IMPORTED_MODULE_9_lodash__["keyBy"](action.payload.mails.outbox, 'objectId'),
        users: users,
        news: state.dataState.news
    };
    newState.uiState.currentUnread = getUnreadCount(action.payload.mails.inbox);
    return newState;
}
function getUnreadCount(mails) {
    var unreadCount = 0;
    __WEBPACK_IMPORTED_MODULE_9_lodash__["each"](mails, function (mail) {
        if (!mail.isRead) {
            unreadCount++;
        }
    });
    return unreadCount;
}


/***/ }),

/***/ "../../../../../src/app/message/view/view-message-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_VIEW_MESSAGE_STATE; });
var INITIAL_VIEW_MESSAGE_STATE = {
    message: {}
};


/***/ }),

/***/ "../../../../../src/app/model/IEvent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventType; });
var EventType = {
    new: 0,
    edit: 1,
    delete: 2,
    view: 3,
    click: 4
};


/***/ }),

/***/ "../../../../../src/app/model/mail-db.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INIT_MAIL_DB; });
var INIT_MAIL_DB = {
    inbox: [],
    outbox: []
};


/***/ }),

/***/ "../../../../../src/app/model/user-transfer-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INIT_USER_TRANSFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INIT_DASHBOARD_DATA; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mail_db__ = __webpack_require__("../../../../../src/app/model/mail-db.ts");

var INIT_USER_TRANSFER = {
    students: [],
    teachers: [],
    parents: [],
    admins: []
};
var INIT_DASHBOARD_DATA = {
    users: INIT_USER_TRANSFER,
    mails: __WEBPACK_IMPORTED_MODULE_0__mail_db__["a" /* INIT_MAIL_DB */],
    news: []
};


/***/ }),

/***/ "../../../../../src/app/moment-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var MomentUtil = (function () {
    function MomentUtil() {
    }
    MomentUtil.prototype.timeDateAgo = function (date) {
        var d = __WEBPACK_IMPORTED_MODULE_0_moment__(date);
        return d.fromNow();
    };
    MomentUtil.prototype.format = function (date, format) {
        var d = __WEBPACK_IMPORTED_MODULE_0_moment__(date);
        return d.format(format);
    };
    MomentUtil.prototype.getMoment = function () {
        return __WEBPACK_IMPORTED_MODULE_0_moment__;
    };
    MomentUtil.prototype.formatTime = function (date) {
        return __WEBPACK_IMPORTED_MODULE_0_moment__(date).fromNow();
    };
    return MomentUtil;
}());



/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-sm-6\" *ngFor=\"let item of news$ | async\">\n      <sp-news-card [news]=\"item\"></sp-news-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NewsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_NEWS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_NEWS_ACTION; });
/* unused harmony export GetNewsAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddNewsAction; });
/* harmony export (immutable) */ __webpack_exports__["e"] = addNewsReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_window_ref_service__ = __webpack_require__("../../../../../src/app/services/window-ref.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsComponent = (function () {
    function NewsComponent(store, ps, windowRef) {
        this.store = store;
        this.ps = ps;
        this.role = this.ps.currentUser.get('role');
        this._window = windowRef.nativeWindow;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.news$ = this.store.select(function (state) { return __WEBPACK_IMPORTED_MODULE_3_lodash__["values"](state.dataState.news); });
        this.store.dispatch(new GetNewsAction(this.role));
        this._window.scroll(0, 0);
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */], __WEBPACK_IMPORTED_MODULE_0__services_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_4__services_window_ref_service__["a" /* WindowRefService */]])
    ], NewsComponent);
    return NewsComponent;
}());

var GET_NEWS_ACTION = 'GET_NEWS_ACTION';
var ADD_NEWS_ACTION = 'ADD_NEWS_ACTION';
var GetNewsAction = (function () {
    function GetNewsAction(payload) {
        this.type = GET_NEWS_ACTION;
    }
    return GetNewsAction;
}());

var AddNewsAction = (function () {
    function AddNewsAction(payload) {
        this.payload = payload;
        this.type = ADD_NEWS_ACTION;
    }
    return AddNewsAction;
}());

function addNewsReducer(state, action) {
    var newState = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](state);
    newState.dataState.news = __WEBPACK_IMPORTED_MODULE_3_lodash__["keyBy"](action.payload, 'objectId');
    return newState;
}


/***/ }),

/***/ "../../../../../src/app/not-active/not-active.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-logo>img {\n  width: 125px;\n  height: 125px;\n}\n\nh3,\nh4,\np {\n  text-align: center;\n  color: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-active/not-active.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-logo\">\n  <img src=\"{{getHash(user.get('email'))}}\" alt=\"\" />\n</div>\n<h2 class=\"form-heading lock\">\n  <span>Logged in as</span>\n  <span class=\"u-name\">{{user.get('firstName')}} {{user.get('lastName')}}</span>\n</h2>\n\n<div class=\"form-signin\">\n  <div class=\"login-wrap\">\n    <h3>\n      Account Inactive\n    </h3>\n    <p>Your account is inactive. You need to contact an administrator to activate your account.</p>\n    <p>Present your user Id to the adminstrator.</p>\n    <h4>\n      User ID: <span>{{user.id}}</span>\n    </h4>\n    <div class=\"registration m-t-20 d-log text-center\">\n      <a class=\"\" (click)=\"logout()\">\n        Logout\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/not-active/not-active.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotActiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__md5__ = __webpack_require__("../../../../../src/app/md5.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotActiveComponent = (function () {
    function NotActiveComponent(rs, ps) {
        this.rs = rs;
        this.ps = ps;
        this.user = this.ps.currentUser;
    }
    NotActiveComponent.prototype.ngOnInit = function () {
        this.rs.setBc('login-body');
    };
    NotActiveComponent.prototype.getHash = function (email) {
        var baseUrl = 'https://www.gravatar.com/avatar/';
        var hash = __WEBPACK_IMPORTED_MODULE_3__md5__["a" /* encrypt */](email);
        return baseUrl + hash;
    };
    NotActiveComponent.prototype.logout = function () {
        this.ps.logout().subscribe(function (stat) { return location.href = '/'; });
    };
    NotActiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sp-not-active',
            template: __webpack_require__("../../../../../src/app/not-active/not-active.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-active/not-active.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_route_service__["b" /* RouteService */], __WEBPACK_IMPORTED_MODULE_2__services_parse_service__["a" /* ParseService */]])
    ], NotActiveComponent);
    return NotActiveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/store/profile.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_NEW_PICKUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NEW_PICKUP_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_PICKUP_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ALL_PICKUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_CURRENT_SELECTED_USER; });
/* unused harmony export SET_CURRENT_SELECTED_USER_RESULTS */
/* unused harmony export CURRENT_SELECTED_USER_RESULTS_SET */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddNewPickup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return NewPickupAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GetPickupAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddAllPickups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SetCurrentSelectedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SetCurrentSelectedUserResults; });
/* unused harmony export CurrentSelectedUserResultsSet */
var ADD_NEW_PICKUP = 'ADD_NEW_PICKUP';
var NEW_PICKUP_ADDED = 'NEW_PICKUP_ADDED';
var GET_PICKUP_ACTION = 'GET_PICKUP_ACTION';
var ADD_ALL_PICKUPS = 'ADD_ALL_PICKUPS';
var SET_CURRENT_SELECTED_USER = 'SET_CURRENT_SELECTED_USER';
var SET_CURRENT_SELECTED_USER_RESULTS = 'SET_CURRENT_SELECTED_USER_RESULTS';
var CURRENT_SELECTED_USER_RESULTS_SET = 'CURRENT_SELECTED_USER_RESULTS_SET';
var AddNewPickup = (function () {
    function AddNewPickup(payload) {
        this.payload = payload;
        this.type = ADD_NEW_PICKUP;
    }
    return AddNewPickup;
}());

var NewPickupAdded = (function () {
    function NewPickupAdded(payload) {
        this.payload = payload;
        this.type = NEW_PICKUP_ADDED;
    }
    return NewPickupAdded;
}());

var GetPickupAction = (function () {
    function GetPickupAction(payload) {
        this.payload = payload;
        this.type = GET_PICKUP_ACTION;
    }
    return GetPickupAction;
}());

var AddAllPickups = (function () {
    function AddAllPickups(payload) {
        this.payload = payload;
        this.type = ADD_ALL_PICKUPS;
    }
    return AddAllPickups;
}());

var SetCurrentSelectedUser = (function () {
    function SetCurrentSelectedUser(payload) {
        this.payload = payload;
        this.type = SET_CURRENT_SELECTED_USER;
    }
    return SetCurrentSelectedUser;
}());

var SetCurrentSelectedUserResults = (function () {
    function SetCurrentSelectedUserResults(payload) {
        this.payload = payload;
        this.type = SET_CURRENT_SELECTED_USER_RESULTS;
    }
    return SetCurrentSelectedUserResults;
}());

var CurrentSelectedUserResultsSet = (function () {
    function CurrentSelectedUserResultsSet(payload) {
        this.payload = payload;
        this.type = CURRENT_SELECTED_USER_RESULTS_SET;
    }
    return CurrentSelectedUserResultsSet;
}());



/***/ }),

/***/ "../../../../../src/app/profile/store/profile.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = AddNewPickupReducer;
/* harmony export (immutable) */ __webpack_exports__["c"] = NewPickupAddedReducer;
/* harmony export (immutable) */ __webpack_exports__["a"] = AddAllPickupsReducer;
/* harmony export (immutable) */ __webpack_exports__["d"] = SetCurrentSelectedUserReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

function AddNewPickupReducer(state, action) {
    var newState = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](state);
    newState.profile.pickupState.pickup = action.payload.pickup;
    newState.profile.pickupState.dirty = true;
    return newState;
}
function NewPickupAddedReducer(state, action) {
    var newState = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](state);
    newState.profile.pickupState.pickup = action.payload;
    newState.profile.pickupState.dirty = false;
    var pickups = __WEBPACK_IMPORTED_MODULE_0_lodash__["values"](newState.profile.pickupState.pickups);
    pickups.push(action.payload);
    newState.profile.pickupState.pickups = __WEBPACK_IMPORTED_MODULE_0_lodash__["keyBy"](pickups, 'objectId');
    return newState;
}
function AddAllPickupsReducer(state, action) {
    var newState = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](state);
    newState.profile.pickupState.pickups = __WEBPACK_IMPORTED_MODULE_0_lodash__["keyBy"](action.payload, 'objectId');
    return newState;
}
function SetCurrentSelectedUserReducer(state, action) {
    var newState = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](state);
    newState.profile.currentSelectedUser = action.payload;
    return newState;
}


/***/ }),

/***/ "../../../../../src/app/profile/store/profile.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INIT_PICKUP_STATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INIT_PROFILE_STATE; });
var INIT_PICKUP_STATE = {
    pickup: undefined,
    dirty: undefined,
    pickups: {}
};
var INIT_PROFILE_STATE = {
    pickupState: INIT_PICKUP_STATE,
    currentSelectedUser: undefined,
    currentSelectedUserResults: []
};


/***/ }),

/***/ "../../../../../src/app/reducers/reports/reports-fetched.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ReportsFetched;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

function ReportsFetched(state, action) {
    var newState = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](state);
    newState.dataState.users.currentSelectedUserProfile.reports = action.payload;
    return state;
}


/***/ }),

/***/ "../../../../../src/app/reducers/user/setCurrentUser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SetCurrentSelectedUser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

function SetCurrentSelectedUser(state, action) {
    var newState = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](state);
    newState.dataState.users.currentSelectedUserProfile.user = action.payload;
    return state;
}


/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-logo>img {\n  width: 125px;\n  height: 125px;\n}\n\n.error-text {\n  font-size: 80%;\n}\n\n.error-text:before {\n  color: #e32;\n  content: \"* \";\n}\n\nselect {\n  margin-bottom: 15px;\n  border-radius: 4px;\n  border: none;\n  background: #222224;\n  box-shadow: none;\n  font-size: 13px;\n  color: #fff;\n  padding: 12px;\n}\n\nh3 {\n  color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-logo\">\n  <img src=\"assets/img/logo.png\" alt=\"\" />\n</div>\n<h2 class=\"form-heading\">login</h2>\n<div class=\"container log-row\">\n  <form class=\"form-signin\" (ngSubmit)=\"signup()\" [formGroup]=\"registerForm\" novalidate>\n    <div class=\"login-wrap\">\n      <h3>Account Info</h3>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\" autofocus>\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\n      <p class=\"error-text\" *ngIf=\"registerForm.controls.confirmPassword.hasError('notSame')\">\n        Passwords do not match!\n      </p>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n      <p class=\"error-text\" *ngIf=\"!registerForm.controls.email.valid && registerForm.controls.email.touched\">\n        Please enter a valid email!\n      </p>\n\n      <h3>Personal Info</h3>\n      <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" formControlName=\"firstName\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" formControlName=\"lastName\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Other Name\" formControlName=\"otherName\">\n\n      <select class=\"form-control\" formControlName=\"sex\">\n        <option value=\"\">Sex</option>\n        <option value=\"male\">Male</option>\n        <option value=\"female\">Female</option>\n        <option value=\"other\">Other</option>\n      </select>\n\n      <h3>Location</h3>\n      <input type=\"text\" class=\"form-control\" placeholder=\"City (e.g Ikeja, Asaba)\" formControlName=\"city\">\n\n      <select class=\"form-control\" formControlName=\"state\">\n        <option value=\"\">State</option>\n        <option *ngFor=\"let option of states\" value=\"{{option.iso}}\">{{option.state}}</option>\n      </select>\n\n      <button [disabled]=\"!registerForm.valid || isLoading\" class=\"btn btn-lg btn-success btn-block\" type=\"submit\">REGISTER</button>\n\n      <div class=\"registration\">\n        Have an account?\n        <a class=\"\" [routerLink]=\"['/login'] \">\n          Login\n        </a>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_constant__ = __webpack_require__("../../../../../src/app/states.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_validators_validators__ = __webpack_require__("../../../../../src/app/commons/validators/validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    function RegisterComponent(parseService, fb, toastr, vRef, rs) {
        this.parseService = parseService;
        this.fb = fb;
        this.toastr = toastr;
        this.rs = rs;
        this.registered = false;
        this.isLoading = false;
        this.hasError = false;
        this.states = __WEBPACK_IMPORTED_MODULE_0__states_constant__["a" /* STATES */];
        this.toastr.setRootViewContainerRef(vRef);
        this.createForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.rs.setBc('login-body');
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__commons_validators_validators__["a" /* validateEmail */]]],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            otherName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            sex: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            confirmPassword: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, this.validatePasswordConfirmation.bind(this)]]
        });
    };
    RegisterComponent.prototype.signup = function () {
        var _this = this;
        var account = this.registerForm.value;
        this.isLoading = true;
        this.toastr.info('Signing up.', 'Please Wait');
        this.parseService.register(account).subscribe(function (registered) {
            _this.registered = registered;
            _this.toastr.success('Registration successful.');
            location.href = '/';
        }, function (err) {
            _this.toastr.error(err.message, 'Oops');
            _this.isLoading = false;
            _this.hasError = true;
        });
    };
    RegisterComponent.prototype.validatePasswordConfirmation = function (control) {
        if (this.registerForm) {
            return control.value === this.registerForm.get('password').value ? null : { notSame: true };
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_1__services_route_service__["b" /* RouteService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toastr_options__ = __webpack_require__("../../../../../src/app/toastr.options.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RegisterModule = (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_10_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__register_component__["a" /* RegisterComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_parse_service__["a" /* ParseService */],
                __WEBPACK_IMPORTED_MODULE_1__services_route_service__["b" /* RouteService */],
                { provide: __WEBPACK_IMPORTED_MODULE_10_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_0__toastr_options__["a" /* CustomOption */] }
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "../../../../../src/app/resolvers/klass.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlassResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_klass_service__ = __webpack_require__("../../../../../src/app/services/klass.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KlassResolver = (function () {
    function KlassResolver(ks) {
        this.ks = ks;
    }
    KlassResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        return this.ks.getClass(id);
    };
    KlassResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_klass_service__["a" /* KlassService */]])
    ], KlassResolver);
    return KlassResolver;
}());



/***/ }),

/***/ "../../../../../src/app/routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__not_active_not_active_component__ = __webpack_require__("../../../../../src/app/not-active/not-active.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klass_klass_view_klass_view_component__ = __webpack_require__("../../../../../src/app/klass/klass-view/klass-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_layout_basic_basic_component__ = __webpack_require__("../../../../../src/app/commons/layout/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_layout_blank_blank_component__ = __webpack_require__("../../../../../src/app/commons/layout/blank/blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__klass_klass_component__ = __webpack_require__("../../../../../src/app/klass/klass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__errors_five_oh_x_five_oh_x_component__ = __webpack_require__("../../../../../src/app/errors/five-oh-x/five-oh-x.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__errors_four_oh_four_four_oh_four_component__ = __webpack_require__("../../../../../src/app/errors/four-oh-four/four-oh-four.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_event_component__ = __webpack_require__("../../../../../src/app/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_authenticated_guard__ = __webpack_require__("../../../../../src/app/guards/authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__klass_klass_list_klass_list_component__ = __webpack_require__("../../../../../src/app/klass/klass-list/klass-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__resolvers_klass_resolver__ = __webpack_require__("../../../../../src/app/resolvers/klass.resolver.ts");















var ROUTES = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'event',
        component: __WEBPACK_IMPORTED_MODULE_3__commons_layout_basic_basic_component__["a" /* BasicComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_9__event_event_component__["a" /* EventComponent */]
            }
        ]
    },
    {
        path: 'class',
        component: __WEBPACK_IMPORTED_MODULE_3__commons_layout_basic_basic_component__["a" /* BasicComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_6__klass_klass_component__["a" /* KlassComponent */],
                canActivate: [
                    __WEBPACK_IMPORTED_MODULE_12__guards_authenticated_guard__["a" /* AuthenticatedGuard */]
                ],
                children: [
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_13__klass_klass_list_klass_list_component__["a" /* KlassListComponent */]
                    },
                    {
                        path: ':id',
                        component: __WEBPACK_IMPORTED_MODULE_2__klass_klass_view_klass_view_component__["a" /* KlassViewComponent */],
                        resolve: {
                            class: __WEBPACK_IMPORTED_MODULE_14__resolvers_klass_resolver__["a" /* KlassResolver */]
                        }
                    }
                ]
            }
        ]
    }, {
        path: 'forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_10__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
    },
    {
        path: 'message',
        loadChildren: './message/message.module#MessageModule'
    },
    {
        path: 'news',
        loadChildren: './news/news.module#NewsModule'
    },
    {
        path: 'parents',
        loadChildren: './parents/parents.module#ParentsModule'
    },
    {
        path: 'setting',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__settings_settings_component__["a" /* SettingsComponent */]
            }
        ],
        component: __WEBPACK_IMPORTED_MODULE_3__commons_layout_basic_basic_component__["a" /* BasicComponent */]
    },
    {
        path: 'school',
        loadChildren: './school/school.module#SchoolModule'
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__commons_layout_blank_blank_component__["a" /* BlankComponent */],
        children: [
            {
                path: '404',
                component: __WEBPACK_IMPORTED_MODULE_8__errors_four_oh_four_four_oh_four_component__["a" /* FourOhFourComponent */]
            },
            {
                path: '50x',
                component: __WEBPACK_IMPORTED_MODULE_7__errors_five_oh_x_five_oh_x_component__["a" /* FiveOhXComponent */]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
            },
            {
                path: 'inactive',
                component: __WEBPACK_IMPORTED_MODULE_1__not_active_not_active_component__["a" /* NotActiveComponent */]
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */]
            }
        ]
    },
    { path: '**', redirectTo: '/404' }
];


/***/ }),

/***/ "../../../../../src/app/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Parse = __webpack_require__("../../../../parse/index.js");
var startDate = __WEBPACK_IMPORTED_MODULE_4_moment__().subtract('365', 'd').toISOString();
var endDate = __WEBPACK_IMPORTED_MODULE_4_moment__().add('30', 'd').toISOString();
var EventService = (function () {
    function EventService(ps, us) {
        this.ps = ps;
        this.us = us;
        this.school = this.ps.currentUser.get('school');
        this.role = this.ps.currentUser.get('role');
    }
    EventService.prototype.getEvents = function () {
        var _this = this;
        if (this.role === 'parent') {
            return this.getEventsParent()
                .flatMap(function (events) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].from(events); })
                .map(function (e) {
                var event = {};
                event.id = e.id;
                event.title = e.get('title');
                event.url = '/events/' + e.id;
                event.start = e.get('startDate');
                event.type = e.get('type');
                event.detail = {
                    text: e.get('detail').get('text'),
                    venue: e.get('detail').get('venue')
                };
                if (e.get('startDate')) {
                    event.end = e.get('endDate');
                }
                else {
                    event.start = __WEBPACK_IMPORTED_MODULE_4_moment__(e.get('startDate')).format('YYYY-MM-DD');
                }
                return event;
            })
                .toArray()
                .map(function (events) { return _this.getEventsOptions(events); });
        }
        else {
            return this.getEventsGeneral(this.school).map(function (events) { return _this.getEventsOptions(events); });
        }
    };
    EventService.prototype.getEventsParent = function () {
        var _this = this;
        return this.us.getChildren()
            .flatMap(function (children) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].from(children); })
            .map(function (child) { return child.get('school'); })
            .flatMap(function (school) { return _this.getEventsFromSchool(school); })
            .map(function (events) { return events; })
            .distinct(function (event) { return event.objectId; })
            .toArray()
            .map(function (events) { return events[0]; });
    };
    EventService.prototype.getEventsFromSchool = function (school) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            var query = new Parse.Query('Event');
            query.greaterThanOrEqualTo('startDate', _this.getDatePointer(startDate));
            query.include(['detail']);
            query.equalTo('school', school);
            query.find().then(function (evnt) {
                observer.next(evnt);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    EventService.prototype.getEventsGeneral = function (school) {
        return this.getEventsFromSchool(school)
            .map(function (e) {
            var events = [];
            for (var i = 0; i < e.length; i++) {
                var event_1 = {};
                event_1.id = e[i].id;
                event_1.title = e[i].get('title');
                event_1.url = '/events/' + e[i].id;
                event_1.start = e[i].get('startDate');
                event_1.type = e[i].get('type');
                event_1.detail = {
                    text: e[i].get('detail').get('text'),
                    venue: e[i].get('detail').get('venue')
                };
                if (e[i].get('startDate')) {
                    event_1.end = e[i].get('startDate');
                }
                else {
                    event_1.start = __WEBPACK_IMPORTED_MODULE_4_moment__(e[i].get('startDate')).format('YYYY-MM-DD');
                }
                events.push(event_1);
            }
            return events;
        });
    };
    EventService.prototype.getDatePointer = function (date) {
        if (date === void 0) { date = __WEBPACK_IMPORTED_MODULE_4_moment__().toISOString(); }
        return { '__type': 'Date', 'iso': date };
    };
    EventService.prototype.getEventsOptions = function (events) {
        var options = {};
        options.aspectRatio = 2;
        options.fixedWeekCount = false;
        options.defaultView = 'listMonth';
        options.defaultDate = __WEBPACK_IMPORTED_MODULE_4_moment__().toISOString();
        options.editable = false;
        options.eventLimit = true;
        options.events = events;
        options.theme = false;
        return options;
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_0__user_service__["e" /* UserService */]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "../../../../../src/app/services/klass.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KlassService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Parse = __webpack_require__("../../../../parse/index.js");
var ClassRoom = Parse.Object.extend('ClassRoom');
var KlassService = (function () {
    function KlassService(ps, us) {
        this.ps = ps;
        this.us = us;
        this.classes = [];
        this.dataset = [];
        this.datasetSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Subject */]();
        this.getDataSetObservable = this.datasetSubject.asObservable();
    }
    KlassService.prototype.setTeacher = function (clazz, teacher) {
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            clazz.set('teacher', teacher);
            clazz.save().then(function (c) {
                observer.next(c);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    KlassService.prototype.studentInClass = function (id) {
        return this.getClassByStudent(id).map(function (c) { return c !== null; });
    };
    KlassService.prototype.getStudents = function (students) {
        var _this = this;
        var o = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            students.map(function (s) {
                observer.next(s);
            });
            observer.complete();
        });
        return o.flatMap(function (s) { return _this.us.getStudent(s); }).map(function (u) { return _this.us.getUserItem(u); }).toArray();
        // return Observable.of(students).map((s:String[], i:number) => {
        //   return s[i];
        // }).flatMap(s => this.us.getStudent(s)).toArray();
    };
    KlassService.prototype.getClassByStudent = function (id) {
        var query = new Parse.Query(ClassRoom);
        query.equalTo('students', id);
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            query.first().then(function (c) {
                observer.next(c);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    KlassService.prototype.getClass = function (id) {
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            var query = new Parse.Query(ClassRoom);
            query.equalTo('objectId', id);
            query.include(['teacher']);
            query.first().then(function (c) {
                observer.next(c);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    KlassService.prototype.newClass = function (title, fee) {
        var _this = this;
        var cl;
        return this.createClass(title, fee).flatMap(function (c) {
            cl = c;
            return _this.saveClassToSchool(cl, _this.ps.currentUser.get("school"));
        }).map(function (s) { return cl; });
    };
    KlassService.prototype.createClass = function (title, fee) {
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            var classRoom = new ClassRoom();
            classRoom.set("commonName", title);
            classRoom.set("students", []);
            classRoom.set("fee", fee);
            classRoom.save().then(function (c) {
                observer.next(c);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    KlassService.prototype.saveClassToSchool = function (c, s) {
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            var relation = s.relation("classRoom");
            relation.add(c);
            s.save().then(function (s) {
                observer.next(s);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    KlassService.prototype.getClasses = function () {
        var school = this.ps.currentUser.get("school");
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            var relation = school.relation("classRoom");
            var query = relation.query();
            query.ascending("commonName");
            query.find().then(function (c) {
                observer.next(c);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    KlassService.prototype.deleteClass = function (c) {
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            c.destroy().then(function (cl) {
                observer.next(cl);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    KlassService.prototype.setDataset = function (ds) {
        this.dataset = ds;
        this.datasetSubject.next(this.dataset);
    };
    KlassService.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    KlassService.prototype.resetDataset = function (c) {
        this.dataset = [];
        if (c !== undefined) {
            this.classes = this.classes.filter(function (i) { return i.id !== c.id; });
        }
        for (var index = 0; index < this.classes.length; index++) {
            var element = this.classes[index];
            var item = {};
            item = this.getItem(index + 1, element);
            this.dataset.push(item);
        }
        this.datasetSubject.next(this.dataset);
    };
    KlassService.prototype.addClass = function (c) {
        var item = {};
        this.classes.push(c);
        this.resetDataset();
    };
    KlassService.prototype.getItem = function (i, element) {
        var item = {};
        item.id = i;
        item.objectId = element.id;
        item.commonName = element.get("commonName");
        item.sCount = element.get("students").length;
        return item;
    };
    KlassService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_4__user_service__["e" /* UserService */]])
    ], KlassService);
    return KlassService;
}());



/***/ }),

/***/ "../../../../../src/app/services/loading.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = (function () {
    function LoadingService() {
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Subject */]();
        this.loadingObservable = this.loadingSubject.asObservable();
    }
    LoadingService.prototype.setLoading = function (status) {
        this.loadingSubject.next(status);
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_IEvent__ = __webpack_require__("../../../../../src/app/model/IEvent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Parse = __webpack_require__("../../../../parse/index.js");
var MessageService = (function () {
    function MessageService(ps, us) {
        this.ps = ps;
        this.us = us;
        // Unread mails
        this.unReadMails = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Subject */]();
        this.um = this.unReadMails.asObservable();
        this.mails = [];
        this.unreadCnt = 0;
        // Unread Count
        this.unreadCount = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Subject */]();
        this.uc = this.unreadCount.asObservable();
    }
    MessageService.prototype.newMessageLiveQuery = function () {
        var _this = this;
        return this.messageStream()
            .filter(function (lm) { return lm.eventType === __WEBPACK_IMPORTED_MODULE_3__model_IEvent__["a" /* EventType */].new && lm.item.to.objectId === _this.ps.currentUser.id; });
    };
    MessageService.prototype.messageStream = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */](function (observer) {
            var query = new Parse.Query('Mail');
            query
                .equalTo('to', _this.ps.currentUser)
                .equalTo('isRead', false)
                .include(['message', 'from'])
                .descending('createdAt')
                .include(['message', 'from', 'to']);
            var subscription1 = query.subscribe();
            subscription1.on('create', function (object) {
                console.log('object created');
                observer.next({ item: _this.getMail(object), eventType: __WEBPACK_IMPORTED_MODULE_3__model_IEvent__["a" /* EventType */].new, currentUser: _this.ps.currentUser });
            });
            subscription1.on('leave', function (object) {
                console.log('object left');
                observer.next({ item: _this.getMail(object), eventType: __WEBPACK_IMPORTED_MODULE_3__model_IEvent__["a" /* EventType */].edit, currentUser: _this.ps.currentUser });
            });
            subscription1.on('error', function (error) {
                console.log('connection error');
                observer.error(error);
            });
            subscription1.on('close', function () {
                console.log('connection closed');
                observer.complete();
            });
        });
    };
    MessageService.prototype.markAsRead = function (id) {
        console.log(id);
        var mail = new Parse.Object('Mail');
        mail.set('objectId', id);
        mail.set('isRead', true);
        return this.saveParseObject$(mail);
    };
    MessageService.prototype.sendMail = function (payload) {
        var _this = this;
        var message = {};
        var user = {};
        var files = [];
        var mail = {};
        var getUser$ = this.us.getUser(payload.to);
        var createMessage$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */](function (observer) {
            message = new Parse.Object('Message');
            message.set('text', payload.text);
            message.save().then(function (m) {
                observer.next(m);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
        var createMail$ = function (m, u) {
            mail = new Parse.Object('Mail');
            mail.set('subject', payload.subject);
            mail.set('from', _this.ps.currentUser);
            mail.set('to', u);
            mail.set('message', m);
            mail.set('isRead', false);
            return _this.saveParseObject$(mail);
        };
        return getUser$.flatMap(function (u) {
            user = u;
            return createMessage$;
        })
            .flatMap(function (res) { return createMail$(res, user); })
            .flatMap(function (res) {
            var relation = res.relation('attachments');
            __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](payload.attachments, function (attachment) {
                relation.add(attachment);
            });
            return _this.saveParseObject$(res);
        })
            .map(function (res) { return _this.getMail(res); });
    };
    MessageService.prototype.saveParseObject$ = function (mail) {
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */](function (observer) {
            mail.save().then(function (m) {
                observer.next(m);
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.error(err);
            });
        });
    };
    MessageService.prototype.uploadFiles = function (files, mail) {
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */](function (observer) {
            __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](files, function (file) {
                var f = new Parse.File(file.name, file, file.type);
                f.save().then(function (ff) { return observer.next(ff); }, function (err) {
                    console.log(err);
                    observer.error(err);
                });
            });
            observer.complete();
        }).map(function (f) { return f; });
    };
    MessageService.prototype.upload = function (file) {
        var f = new Parse.File(file.name, file, file.type);
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */](function (observer) {
            f.save().then(function (ff) { return observer.next(ff); }, function (err) {
                observer.error(err);
            }, function () { return observer.complete(); });
        });
    };
    MessageService.prototype.getMailsObservable = function () {
        var _this = this;
        return this.getInboxObservable(10, 0)
            .flatMap(function (mails) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].from(mails); })
            .map(function (m) {
            return _this.getMail(m);
        })
            .toArray();
    };
    MessageService.prototype.getMailById = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */](function (observer) {
            var query = new Parse.Query('Mail');
            query.equalTo('objectId', id);
            query.include(['from', 'to', 'message']);
            query.first().then(function (m) {
                observer.next(_this.getMail(m));
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    MessageService.prototype.getOutboxMailsObservable = function () {
        var _this = this;
        return this.getOutboxObservable(999, 0)
            .flatMap(function (mails) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].from(mails); })
            .map(function (m) {
            return _this.getMail(m);
        })
            .toArray();
    };
    MessageService.prototype.getCombinedMailObservable = function () {
        var _this = this;
        var mails = {
            inbox: [],
            outbox: []
        };
        return this.getMailsObservable().flatMap(function (i) {
            mails.inbox = i;
            return _this.getOutboxMailsObservable();
        }).map(function (o) {
            mails.outbox = o;
            return mails;
        });
    };
    MessageService.prototype.setUnreadCount = function (c) {
        this.unreadCnt = c;
        this.unreadCount.next(c);
    };
    MessageService.prototype.setUnreadCountError = function (error) {
        this.unreadCount.error(error);
    };
    MessageService.prototype.setUnreadMails = function (m) {
        this.mails = m;
        this.unReadMails.next(this.mails);
    };
    MessageService.prototype.setUnreadMailsError = function (error) {
        this.unReadMails.error(error);
    };
    MessageService.prototype.getUnreadMails = function (limit, skip) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */](function (observer) {
            var query = new Parse.Query('Mail');
            query.equalTo('to', _this.ps.currentUser)
                .include(['message', 'from', 'to'])
                .descending('createdAt');
            query.find().then(function (m) {
                observer.next(m);
            }, function (err) {
                observer.error(err);
            });
        });
    };
    MessageService.prototype.getInboxObservable = function (limit, skip) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */](function (observer) {
            var query = new Parse.Query('Mail');
            query.equalTo('to', _this.ps.currentUser)
                .include(['message', 'from', 'to'])
                .descending('createdAt')
                .limit(limit)
                .skip(skip);
            query.find().then(function (m) {
                observer.next(m);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    MessageService.prototype.getOutboxObservable = function (limit, skip) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */](function (observer) {
            var query = new Parse.Query('Mail');
            query.equalTo('from', _this.ps.currentUser)
                .include(['message', 'from', 'to'])
                .descending('createdAt')
                .limit(limit)
                .skip(skip);
            query.find().then(function (m) {
                observer.next(m);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    MessageService.prototype.getMail = function (m) {
        var mail = {
            objectId: m.id,
            from: this.us.getUserVM(m.get('from')),
            to: this.us.getUserVM(m.get('to')),
            message: this.getMessage(m.get('message')),
            isRead: m.get('isRead'),
            subject: m.get('subject'),
            createdAt: m.get('createdAt'),
            updatedAt: m.get('updatedAt')
        };
        return mail;
    };
    MessageService.prototype.getMessage = function (message) {
        return {
            objectId: message.id,
            text: message.get('text'),
            createdAt: message.get('createdAt'),
            updatedAt: message.get('updatedAt')
        };
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_5__user_service__["e" /* UserService */]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Parse = __webpack_require__("../../../../parse/index.js");
var NewsService = (function () {
    function NewsService(ps, us) {
        this.ps = ps;
        this.us = us;
        this.user = this.ps.currentUser;
        if (this.user) {
            this.role = this.user.get('role');
            this.school = this.user.get('school');
        }
    }
    /*
    * TODO: Handle news serialization on server
    * Account for parents.
    */
    NewsService.prototype.getNews = function () {
        var news = [];
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(news);
    };
    NewsService.prototype.getNewsItems = function () {
        var _this = this;
        var news = [];
        if (this.role === 'parent') {
            return this.us.getChildrenForParents()
                .map(function (utm) { return utm.students; })
                .map(function (children) {
                var schools = [];
                __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](children, function (child) {
                    schools.push(child.school);
                });
                return schools;
            })
                .flatMap(function (schools) {
                var sP = [];
                __WEBPACK_IMPORTED_MODULE_4_lodash__["each"](schools, function (school) {
                    sP.push(_this.us.getPointer(school.objectId, 'School'));
                });
                var newsQ = new Parse.Query('News');
                newsQ.containedIn('school', sP);
                return _this.getNI(newsQ).debug();
            });
        }
        else {
            var newsQ = new Parse.Query('News');
            newsQ.equalTo('school', this.school);
            return this.getNI(newsQ).debug();
        }
    };
    NewsService.prototype.getNI = function (query) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (o) {
            query.find().then(function (newsItem) {
                var ns = [];
                for (var i = 0; i < newsItem.length; i++) {
                    var n = _this.getNewsVM(newsItem[i]);
                    ns.push(n);
                }
                o.next(ns);
                o.complete();
            }, function (err) {
                console.error(err);
                o.error(err);
            });
        });
    };
    NewsService.prototype.getNewsVM = function (newsItem) {
        return {
            objectId: newsItem.id,
            createdAt: newsItem.get('createdAt'),
            updatedAt: newsItem.get('updatedAt'),
            title: newsItem.get('title'),
            text: newsItem.get('text'),
            img: newsItem.has('img') ? newsItem.get('img').url() : ''
        };
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_3__user_service__["e" /* UserService */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/parse.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Parse = __webpack_require__("../../../../parse/index.js");
var ParseService = (function () {
    function ParseService() {
        console.log('Parse initialized!');
        Parse.initialize('9o87s1WOIyPgoTEGv0PSp9GXT1En9cwC');
        Parse.serverURL = 'https://api.schoolpop.ng/1';
    }
    ParseService.prototype.getParse = function () {
        return Parse;
    };
    ParseService.prototype.login = function (username, password) {
        console.log(username, password);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            Parse.User.logIn(username, password, {
                success: function (user) {
                    observer.next(true);
                },
                error: function (user, error) {
                    observer.error(error);
                }
            });
        });
    };
    ParseService.prototype.register = function (register) {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            var user = new Parse.User();
            user.set('username', register.username);
            user.set('email', register.email);
            user.set('password', register.password);
            user.set('firstName', register.firstName);
            user.set('otherName', register.otherName);
            user.set('lastName', register.lastName);
            user.set('sex', register.sex);
            user.set('city', register.city);
            user.set('state', register.state);
            user.signUp(null, {
                success: function (u) {
                    observer.next(true);
                    observer.complete();
                },
                error: function (u, error) {
                    observer.error(error);
                }
            });
        });
    };
    ParseService.prototype.logout = function () {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            Parse.User.logOut().then(function () { return observer.next(true); }, function (err) { return observer.error(err); });
        });
    };
    Object.defineProperty(ParseService.prototype, "currentUser", {
        get: function () {
            return Parse.User.current();
        },
        enumerable: true,
        configurable: true
    });
    ParseService.prototype.save = function (object) {
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            object.save().then(function (o) {
                observer.next(o);
                observer.complete();
            }, function (err) { return observer.error(err); });
        });
    };
    ParseService.prototype.changeAvatar = function (img) {
        var _this = this;
        return this.upload(img).flatMap(function (pf) {
            _this.currentUser.set('img', pf);
            return _this.save(_this.currentUser);
        });
    };
    ParseService.prototype.upload = function (file) {
        var f = new Parse.File(file.name, file, file.type);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            f.save().then(function (ff) { return observer.next(ff); }, function (err) {
                observer.error(err);
            }, function () { return observer.complete(); });
        });
    };
    ParseService.prototype.changePassword = function (password) {
        this.currentUser.set('password', password);
        return this.save(this.currentUser);
    };
    ParseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ParseService);
    return ParseService;
}());



/***/ }),

/***/ "../../../../../src/app/services/pickup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Parse = __webpack_require__("../../../../parse/index.js");
var Pickup = Parse.Object.extend('Pickup');
var PickupService = (function () {
    function PickupService(us, ps) {
        this.us = us;
        this.ps = ps;
    }
    PickupService.prototype.newPickup = function (pickup, ident_pf) {
        var pk = new Pickup();
        pk.set('parent', this.us.getUserPointer(pickup.parent.objectId));
        pk.set('student', this.us.getUserPointer(pickup.student.objectId));
        pk.set('picker_firstName', pickup.firstName);
        pk.set('picker_lastName', pickup.lastName);
        pk.set('picker_ident', ident_pf);
        pk.set('done', false);
        pk.set('pickUpOn', pickup.pickUpOn);
        return this.ps.save(pk);
    };
    PickupService.prototype.getPickup = function (student, viewAll) {
        var _this = this;
        if (viewAll === void 0) { viewAll = false; }
        var query = new Parse.Query('Pickup');
        query.equalTo('student', this.us.getUserPointer(student.objectId));
        if (!viewAll) {
            query.greaterThanOrEqualTo('pickUpOn', __WEBPACK_IMPORTED_MODULE_4_moment__(__WEBPACK_IMPORTED_MODULE_4_moment__().format('MM/DD/YYYY'), 'MM/DD/YYYY').toDate());
            query.equalTo('done', false);
        }
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            query.first().then(function (ps) {
                // console.log(this.parseToPickup(ps));
                observer.next(_this.parseToPickup(ps));
                observer.complete();
            }, function (err) {
                console.error(err);
                observer.error(err);
            });
        });
    };
    PickupService.prototype.getPickups = function (parent, school, viewAll) {
        var _this = this;
        if (viewAll === void 0) { viewAll = false; }
        var query = new Parse.Query(Pickup);
        query.include(['parent', 'student', 'school']);
        if (parent) {
            query.equalTo('parent', this.us.getUserPointer(parent.objectId));
        }
        if (school) {
            query.equalTo('school', this.us.getPointer(parent.objectId, 'School'));
        }
        return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            query.find().then(function (pu) {
                var p = [];
                __WEBPACK_IMPORTED_MODULE_5_lodash__["each"](pu, function (puu) { return p.push(_this.parseToPickup(puu)); });
                observer.next(p);
                observer.complete();
            }, function (err) { return observer.error(err); });
        });
    };
    PickupService.prototype.parseToPickup = function (p) {
        return {
            objectId: p.id,
            parent: this.us.getUserVM(p.get('parent')),
            student: this.us.getUserVM(p.get('student')),
            firstName: p.get('picker_firstName'),
            lastName: p.get('picker_lastName'),
            ident: p.get('picker_ident').url(),
            done: p.get('done'),
            pickUpOn: p.get('pickUpOn')
        };
    };
    PickupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["e" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__parse_service__["a" /* ParseService */]])
    ], PickupService);
    return PickupService;
}());



/***/ }),

/***/ "../../../../../src/app/services/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Parse = __webpack_require__("../../../../parse/index.js");
var ReportService = (function () {
    function ReportService() {
    }
    ReportService.prototype.getReports = function (student) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].from([]);
    };
    ReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "../../../../../src/app/services/route.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BODY_CLASSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RouteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BODY_CLASSES = {
    normal: 'sticky-header',
    auth: 'login-body',
    fohf: 'body-404',
    fiohf: 'body-500'
};
var RouteService = (function () {
    function RouteService() {
        this.bodyClassSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Subject */]();
        this.bc = this.bodyClassSubject.asObservable();
    }
    RouteService.prototype.setBc = function (bc) {
        this.bodyClassSubject.next(bc);
    };
    RouteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RouteService);
    return RouteService;
}());



/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = (function () {
    function SearchService() {
        this.termSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["b" /* Subject */]();
        this.getTermObservable = this.termSubject.map(function (searchTerm) {
            return { search: searchTerm };
        });
    }
    SearchService.prototype.setQ = function (q) {
        this.termSubject.next(q);
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/app/services/store/effect/effect.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEffectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEffectService = (function () {
    // @Effect() getDashboardUserEffect$ = this.actions$
    //   .ofType(INIT_ACTION)
    //   .debug()
    //   .switchMap(action => this.us.getUsersForDashboard()).debug('Get users for dashboard');
    function UserEffectService(us, ps, actions$) {
        this.us = us;
        this.ps = ps;
        this.actions$ = actions$;
    }
    UserEffectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__user_service__["e" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */]])
    ], UserEffectService);
    return UserEffectService;
}());



/***/ }),

/***/ "../../../../../src/app/services/store/effect/load-mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadMailServiceEffect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user_transfer_model__ = __webpack_require__("../../../../../src/app/model/user-transfer-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message_action__ = __webpack_require__("../../../../../src/app/message/message-action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_message_action__ = __webpack_require__("../../../../../src/app/message/message-action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoadMailServiceEffect = (function () {
    function LoadMailServiceEffect(ms, us, ns, ls, actions$) {
        var _this = this;
        this.ms = ms;
        this.us = us;
        this.ns = ns;
        this.ls = ls;
        this.actions$ = actions$;
        this.dbd = __WEBPACK_IMPORTED_MODULE_2__model_user_transfer_model__["a" /* INIT_DASHBOARD_DATA */];
        this.userMails$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__message_message_action__["c" /* INIT_ACTION */])
            .do(function () { return _this.ls.setLoading(true); })
            .switchMap(function () {
            _this.ls.setLoading(true);
            return _this.ms.getCombinedMailObservable();
        })
            .do(function (mails) { return _this.dbd.mails = mails; })
            .flatMap(function () { return _this.us.getUsersForDashboard(); })
            .flatMap(function (users) {
            _this.dbd.users = users;
            _this.ls.setLoading(false);
            return _this.ns.getNews();
        })
            .map(function (news) {
            _this.dbd.news = news;
            return new __WEBPACK_IMPORTED_MODULE_7__message_message_action__["k" /* MailLoadedAction */](_this.dbd);
        })
            .do(function () { return _this.ls.setLoading(false); });
        this.sendMail$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__message_message_action__["n" /* SEND_MESSAGE_ACTION */])
            .do(function () { return _this.ls.setLoading(true); })
            .switchMap(function (action) { return _this.ms.sendMail(action.payload); })
            .map(function (mail) { return new __WEBPACK_IMPORTED_MODULE_3__message_message_action__["m" /* MessageSentAction */](mail); })
            .do(function () { return _this.ls.setLoading(false); });
        this.getUserCount$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_0__user_service__["c" /* GET_USER_COUNT_ACTION */])
            .do(function (action) { return _this.role = action.payload; })
            .switchMap(function (action) { return _this.us.getUserCount(action.payload); })
            .map(function (count) { return new __WEBPACK_IMPORTED_MODULE_8__user_service__["b" /* AddUserCountActions */]({ count: count, role: _this.role }); });
        this.getNews$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_10__news_news_component__["c" /* GET_NEWS_ACTION */])
            .switchMap(function (action) { return _this.ns.getNewsItems(); })
            .debug()
            .map(function (news) { return new __WEBPACK_IMPORTED_MODULE_10__news_news_component__["b" /* AddNewsAction */](news); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], LoadMailServiceEffect.prototype, "userMails$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], LoadMailServiceEffect.prototype, "sendMail$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], LoadMailServiceEffect.prototype, "getUserCount$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], LoadMailServiceEffect.prototype, "getNews$", void 0);
    LoadMailServiceEffect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_8__user_service__["e" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_9__loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["a" /* Actions */]])
    ], LoadMailServiceEffect);
    return LoadMailServiceEffect;
}());



/***/ }),

/***/ "../../../../../src/app/services/store/effect/report-effect.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportEffectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_service__ = __webpack_require__("../../../../../src/app/services/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_report_actions__ = __webpack_require__("../../../../../src/app/actions/report-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_report_actions__ = __webpack_require__("../../../../../src/app/actions/report-actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportEffectService = (function () {
    function ReportEffectService(reportService, actions$) {
        var _this = this;
        this.reportService = reportService;
        this.actions$ = actions$;
        this.getReports = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_1__actions_report_actions__["a" /* FETCH_REPORT_ACTION */])
            .switchMap(function (action) { return _this.reportService.getReports(action.payload); })
            .map(function (reports) { return new __WEBPACK_IMPORTED_MODULE_4__actions_report_actions__["c" /* ReportsFetchedAction */](reports); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ReportEffectService.prototype, "getReports", void 0);
    ReportEffectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Actions */]])
    ], ReportEffectService);
    return ReportEffectService;
}());



/***/ }),

/***/ "../../../../../src/app/services/store/effect/server-notification-effect.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerNotificationEffectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_message_action__ = __webpack_require__("../../../../../src/app/message/message-action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerNotificationEffectService = (function () {
    function ServerNotificationEffectService(ms) {
        this.ms = ms;
        this.newMessage$ = this.ms.newMessageLiveQuery()
            .map(function (message) { return new __WEBPACK_IMPORTED_MODULE_1__message_message_action__["q" /* StreamNewMessageAction */](message); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ServerNotificationEffectService.prototype, "newMessage$", void 0);
    ServerNotificationEffectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */]])
    ], ServerNotificationEffectService);
    return ServerNotificationEffectService;
}());



/***/ }),

/***/ "../../../../../src/app/services/store/effect/view-mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMailServiceEffect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message_action__ = __webpack_require__("../../../../../src/app/message/message-action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewMailServiceEffect = (function () {
    function ViewMailServiceEffect(actions$, ms) {
        var _this = this;
        this.actions$ = actions$;
        this.ms = ms;
        this.viewMessage$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__message_message_action__["d" /* LOAD_VIEW_MESSAGE_ACTION */])
            .map(function (action) { return new __WEBPACK_IMPORTED_MODULE_3__message_message_action__["g" /* LoadedViewMessageAction */](action.payload); });
        this.markAsRead$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__message_message_action__["i" /* MARK_AS_READ_ACTION */])
            .switchMap(function (action) { return _this.ms.markAsRead(action.payload); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], ViewMailServiceEffect.prototype, "viewMessage$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Object)
    ], ViewMailServiceEffect.prototype, "markAsRead$", void 0);
    ViewMailServiceEffect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_0__message_service__["a" /* MessageService */]])
    ], ViewMailServiceEffect);
    return ViewMailServiceEffect;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_USER_COUNT_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddUserCountActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_USER_COUNT_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetUserCountActions; });
/* harmony export (immutable) */ __webpack_exports__["f"] = addUserCountReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__md5__ = __webpack_require__("../../../../../src/app/md5.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user_transfer_model__ = __webpack_require__("../../../../../src/app/model/user-transfer-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Parse = __webpack_require__("../../../../parse/index.js");
var ClassRoom = Parse.Object.extend('ClassRoom');
var Pickup = Parse.Object.extend('Pickup');
var UserService = (function () {
    function UserService(ps, store) {
        this.ps = ps;
        this.store = store;
        this.studentSubject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["b" /* Subject */]();
        this.studentDatasetObservable = this.studentSubject.asObservable();
    }
    UserService.prototype.linkParent = function (parent, profile) {
        profile.user.set('parent', this.getUserPointer(parent.objectId));
        return this.ps.save(profile.user).map(function (p) { return parent; });
    };
    UserService.prototype.setStudentsDataset = function (students) {
        this.studentSubject.next(students);
    };
    UserService.prototype.setStudent = function (student) {
        this.studentSubject.next(student);
    };
    UserService.prototype.getUserCount = function (role) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (o) {
            Parse.Cloud.run('userCount', { 'role': role }).then(function (count) {
                o.next(count);
                o.complete();
            }, function (err) { return o.error(err); });
        });
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    UserService.prototype.setCurrentUser = function (user) {
        this.currentUser = user;
    };
    UserService.prototype.getUsersByRole = function (school, role, limit, skip) {
        if (school === void 0) { school = this.ps.currentUser.get('school'); }
        if (role === void 0) { role = 'user'; }
        if (limit === void 0) { limit = 10; }
        if (skip === void 0) { skip = 0; }
        var users = {};
        var query = new Parse.Query(Parse.User);
        query.equalTo('school', school);
        query.equalTo('role', role);
        query.include(['school']);
        query.ascending('lastName');
        query.ascending('firstName');
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            query.count().then(function (c) {
                users.count = c;
                query.limit(limit);
                return query.find();
            }).then(function (u) {
                users.users = u;
                observer.next(users);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.getStudentsCountBySchool = function (school) {
        if (school === void 0) { school = this.ps.currentUser.get('school'); }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            var User = Parse.Object.extend(Parse.User);
            var query = new Parse.Query(User);
            query.equalTo('school', school);
            query.equalTo('role', 'user');
            query.count().then(function (c) {
                observer.next(c);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.getStudentsBySchool = function (limit, skip, school) {
        if (limit === void 0) { limit = 10; }
        if (skip === void 0) { skip = 0; }
        if (school === void 0) { school = this.ps.currentUser.get('school'); }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            var User = Parse.Object.extend(Parse.User);
            var query = new Parse.Query(User);
            query.equalTo('school', school);
            query.equalTo('role', 'user');
            query.include(['school']);
            query.ascending('lastName');
            query.ascending('firstName');
            query.limit(limit);
            query.find().then(function (s) {
                observer.next(s);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.getChildren = function (limit, skip, user) {
        if (limit === void 0) { limit = 10; }
        if (skip === void 0) { skip = 0; }
        if (user === void 0) { user = this.ps.currentUser; }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            var Profile = Parse.Object.extend('Profile');
            var query = new Parse.Query(Profile);
            query.equalTo('parent', user);
            query.include(['user', 'parent']);
            query.descending('createdAt');
            query.find().then(function (users) {
                var children = [];
                __WEBPACK_IMPORTED_MODULE_6_lodash__["each"](users, function (u) { return children.push(u.get('user')); });
                observer.next(children);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.getStudentsFromSchool = function (schoolId, limit, skip, user) {
        if (limit === void 0) { limit = 10; }
        if (skip === void 0) { skip = 0; }
        if (user === void 0) { user = this.ps.currentUser; }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]();
    };
    UserService.prototype.getStudent = function (id) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            var query = new Parse.Query(Parse.User);
            query.equalTo('objectId', id);
            query.include(['profile', 'school']);
            query.first().then(function (s) {
                observer.next(s);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.getParents = function (schoolId, limit, skip, user) {
        if (limit === void 0) { limit = 10; }
        if (skip === void 0) { skip = 0; }
        if (user === void 0) { user = this.ps.currentUser; }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]();
    };
    UserService.prototype.getStaff = function (schoolId, limit, skip, user) {
        if (limit === void 0) { limit = 10; }
        if (skip === void 0) { skip = 0; }
        if (user === void 0) { user = this.ps.currentUser; }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]();
    };
    UserService.prototype.getUserProfile = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            var User = Parse.Object.extend('Profile');
            var query = new Parse.Query(User);
            query.equalTo('user', _this.getUserPointer(id));
            query.include(['parent', 'user', 'user.school']);
            query.first().then(function (u) {
                observer.next(u);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.getResultObservable = function (user, term) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            var query = new Parse.Query('Report');
            query.equalTo('student', user);
            if (term) {
                query.equalTo('term', term);
            }
            query.first().then(function (rep) {
                var relation = rep.relation('subjects');
                var q = relation.query();
                q.include('subject');
                q.find().then(function (s) {
                    observer.next(s);
                    observer.complete();
                });
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.getAttendanceObservable = function (user) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            var query = new Parse.Query('Activity');
            query.equalTo('type', 'attendance');
            query.equalTo('fromUser', user);
            query.include(['markedBy']);
            query.find().then(function (a) {
                observer.next(a);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.getProfile = function (id) {
        var _this = this;
        var profile = {};
        profile.user = {};
        profile.reports = [];
        profile.attendance = [];
        var userObs = this.getUserProfile(id);
        return userObs.flatMap(function (user) {
            profile.user = user;
            return _this.getResultObservable(user.get('user'));
        }).flatMap(function (results) {
            profile.reports = results;
            return _this.getAttendanceObservable(profile.user.get('user'));
        }).map(function (att) {
            profile.attendance = att;
            return profile;
        });
    };
    UserService.prototype.deleteResult = function (rid) {
        var _this = this;
        return this.getResultById(rid).flatMap(function (o) { return _this.deleteObject(o); });
    };
    UserService.prototype.getResultById = function (id) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            var query = new Parse.Query('Subject');
            query.equalTo('objectId', id);
            query.first().then(function (o) {
                observer.next(o);
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.deleteObject = function (o) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            o.destroy().then(function (object) {
                observer.next(object);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.saveReport = function (report) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            report.save().then(function (r) {
                observer.next(r);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.searchUserByTerm = function (term, role, school) {
        var usernameQuery = new Parse.Query(Parse.User);
        usernameQuery.startsWith('p_username', term.toLowerCase());
        var emailQuery = new Parse.Query(Parse.User);
        emailQuery.startsWith('p_email', term.toLowerCase());
        var firstNameQuery = new Parse.Query(Parse.User);
        firstNameQuery.startsWith('p_firstName', term.toLowerCase());
        var lastNameQuery = new Parse.Query(Parse.User);
        lastNameQuery.startsWith('p_lastName', term.toLowerCase());
        var idQuery = new Parse.Query(Parse.User);
        lastNameQuery.equalTo('objectId', term);
        var mainQuery = Parse.Query.or(usernameQuery, emailQuery, firstNameQuery, lastNameQuery, idQuery);
        if (role !== undefined) {
            mainQuery.equalTo('role', role);
        }
        if (school !== undefined) {
            mainQuery.equalTo('school', school);
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            mainQuery.find().then(function (t) {
                observer.next(t);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.getFee = function (sid) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            Parse.Cloud.run('getFees', { sid: sid }).then(function (res) {
                observer.next(res);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.getUserPointer = function (id) {
        return {
            '__type': 'Pointer',
            'className': '_User',
            'objectId': id
        };
    };
    UserService.prototype.getPointer = function (id, className) {
        return {
            '__type': 'Pointer',
            'className': className,
            'objectId': id
        };
    };
    UserService.prototype.getUserItem = function (element) {
        var item = {};
        item.objectId = element.id;
        item.firstName = element.get('firstName');
        item.lastName = element.get('lastName');
        item.sex = element.get('sex');
        return item;
    };
    UserService.prototype.getUser = function (term) {
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            var usernameQuery = new Parse.Query(Parse.User);
            usernameQuery.equalTo('p_username', term.toLowerCase());
            var emailQuery = new Parse.Query(Parse.User);
            emailQuery.equalTo('p_email', term.toLowerCase());
            var mainQuery = Parse.Query.or(usernameQuery, emailQuery);
            mainQuery.first().then(function (user) {
                observer.next(user);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    UserService.prototype.userExists = function (term) {
        return this.getUser(term).map(function (user) {
            if (user == null) {
                return { asyncInvalid: true };
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.getUsersForDashboard = function () {
        var role = this.ps.currentUser.get('role');
        var query = new Parse.Query(Parse.User);
        switch (role) {
            case 'parent':
                return this.getChildrenForParents();
            case 'teacher':
                return this.getUsersForTeacher();
            case 'admin':
                return this.getStudentsByAdminQuery();
            default:
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(__WEBPACK_IMPORTED_MODULE_1__model_user_transfer_model__["b" /* INIT_USER_TRANSFER */]);
        }
    };
    UserService.prototype.getChildrenForParents = function () {
        var _this = this;
        var utm = __WEBPACK_IMPORTED_MODULE_1__model_user_transfer_model__["b" /* INIT_USER_TRANSFER */];
        return this.getChildren()
            .flatMap(function (users) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].from(users); })
            .map(function (user) { return _this.getUserVM(user); })
            .toArray()
            .map(function (users) {
            utm.students = users;
            return utm;
        });
    };
    UserService.prototype.getUsersForTeacher = function () {
        var _this = this;
        var utm = {
            students: [],
            parents: [],
            teachers: [],
            admins: []
        };
        return this.getStudentByTeacherQuery().flatMap(function (students) {
            utm.students = students;
            return _this.getParentsByTeacherQuery(students);
        })
            .map(function (parents) {
            utm.parents = parents;
            return utm;
        });
    };
    UserService.prototype.getParentsByTeacherQuery = function (students) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].from(students)
            .flatMap(function (student) {
            return _this.getProfileByUser(student);
        })
            .filter(function (parent) { return parent.role === 'parent'; })
            .toArray()
            .map(function (parents) { return __WEBPACK_IMPORTED_MODULE_6_lodash__["uniq"](parents); });
    };
    UserService.prototype.getProfileByUser = function (user) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            var pQ = new Parse.Query('Profile');
            pQ.equalTo('user', _this.getUserPointer(user.objectId));
            pQ.include(['parent']);
            pQ.first().then(function (p) {
                observer.next(_this.getUserVM(p.get('parent')));
                observer.complete();
            }, function (err) {
                console.log(err);
                observer.error(err);
            });
        });
    };
    UserService.prototype.getStudentByTeacherQuery = function () {
        var _this = this;
        var classRoomQuery = new Parse.Query(ClassRoom);
        classRoomQuery.equalTo('teacher', this.ps.currentUser);
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            classRoomQuery.first().then(function (classRoom) {
                observer.next(classRoom);
                observer.complete();
            }, function (err) { return observer.error(err); });
        })
            .flatMap(function (cr) {
            var sArray = [];
            if (cr) {
                sArray = cr.get('students');
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].from(sArray);
        })
            .flatMap(function (id) { return _this.getUserById(id); })
            .toArray();
    };
    UserService.prototype.getStudentsByAdminQuery = function () {
        var _this = this;
        var utm = __WEBPACK_IMPORTED_MODULE_1__model_user_transfer_model__["b" /* INIT_USER_TRANSFER */];
        var school = this.ps.currentUser.get('school');
        var query = new Parse.Query(Parse.User);
        query.equalTo('school', school);
        query.ascending('createdAt');
        query.limit(999);
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            query.find().then(function (users) {
                observer.next(users);
                observer.complete();
            }, function (err) { return observer.error(err); });
        })
            .flatMap(function (users) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].from(users); })
            .map(function (user) { return _this.getUserVM(user); })
            .toArray()
            .map(function (users) {
            __WEBPACK_IMPORTED_MODULE_6_lodash__["each"](users, function (user) {
                switch (user.role) {
                    case 'user':
                        utm.students.push(user);
                        break;
                    case 'parent':
                        utm.parents.push(user);
                        break;
                    case 'teacher':
                        utm.teachers.push(user);
                        break;
                    case 'admin':
                        utm.admins.push(user);
                        break;
                }
            });
            return utm;
        });
    };
    UserService.prototype.getUserById = function (id) {
        var _this = this;
        var userQuery = new Parse.Query(Parse.User);
        userQuery.equalTo('objectId', id);
        userQuery.include(['profile']);
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            userQuery.first().then(function (user) {
                observer.next(user);
                observer.complete();
            }, function (err) { return observer.error(err); });
        }).map(function (user) { return _this.getUserVM(user); });
    };
    UserService.prototype.getUserVM = function (user) {
        if (!user) {
            return {};
        }
        return {
            objectId: user.id,
            username: user.get('username'),
            firstName: user.get('firstName'),
            lastName: user.get('lastName'),
            email: user.get('email'),
            role: user.get('role'),
            sex: user.get('sex'),
            createdAt: user.get('createdAt'),
            avatar: user.has('img') ? user.get('img').url() : Object(__WEBPACK_IMPORTED_MODULE_0__md5__["b" /* getSrc */])(user.get('email'))
        };
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["f" /* Store */]])
    ], UserService);
    return UserService;
}());

var ADD_USER_COUNT_ACTION = 'ADD_USER_COUNT_ACTION';
var AddUserCountActions = (function () {
    function AddUserCountActions(payload) {
        this.payload = payload;
        this.type = ADD_USER_COUNT_ACTION;
    }
    return AddUserCountActions;
}());

var GET_USER_COUNT_ACTION = 'GET_USER_COUNT_ACTION';
var GetUserCountActions = (function () {
    /**
     * Creates an instance of GetUserCountActions.
     * @param {string} [payload] is the user role you want to query
     * @memberof GetUserCountActions
     */
    function GetUserCountActions(payload) {
        this.payload = payload;
        this.type = GET_USER_COUNT_ACTION;
    }
    return GetUserCountActions;
}());

function addUserCountReducer(state, action) {
    var newState = __WEBPACK_IMPORTED_MODULE_6_lodash__["cloneDeep"](state);
    var role = action.payload.role;
    switch (role) {
        case 'user':
            newState.uiState.totalCounts.studentCount = action.payload.count;
            break;
        case 'parent':
            newState.uiState.totalCounts.parentCount = action.payload.count;
            break;
        case 'teacher':
            newState.uiState.totalCounts.teacherCount = action.payload.count;
            break;
        case 'admin':
            newState.uiState.totalCounts.adminCount = action.payload.count;
            break;
    }
    return newState;
}


/***/ }),

/***/ "../../../../../src/app/services/window-ref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRefService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function getWindow() {
    return window;
}
var WindowRefService = (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    WindowRefService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WindowRefService);
    return WindowRefService;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  padding: 30px;\n}\n\n.mat-raised-button {\n  margin: 10px 0 10px 30px;\n  background: #9c78cd;\n  color: white;\n}\n\n.user-desk > span {\n  text-transform: capitalize;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"panel\">\n        <div class=\"user-head\">\n          <img src=\"assets/img/w-p-img.jpg\" alt=\"\">\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"user-desk\">\n            <div class=\"avatar\">\n              <img src=\"{{imgUrl}}\" alt=\"\">\n            </div>\n            <div class=\"clearfix\"></div>\n            <h4 class=\"text-uppercase\">{{user.get('firstName')}} {{user.get('lastName')}}</h4>\n            <span>{{user.get('role')}}</span>\n            <ul *ngIf=\"!isLoading\" class=\"user-p-list\">\n              <li class=\"active\">\n                <div class=\"upload-btn-wrapper\">\n                  <a class=\"active\">Change Profile Picture</a>\n                  <input type=\"file\" accept=\"image/*\" (change)=\"fileChange($event)\" [formControl]=\"uploadProfilePictureControl\" />\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <form novalidate [formGroup]=\"personalInfoForm\" (ngSubmit)=\"saveProfile()\">\n            <md-card class=\"m-b-20\">\n              <md-card-header>\n                <md-card-title>\n                  <h3>Personal Information</h3>\n                </md-card-title>\n              </md-card-header>\n              <md-card-content>\n                <div class=\"row\">\n                  <md-input-container class=\"col-md-12\">\n                    <input type=\"text\" mdInput placeholder=\"First Name\" formControlName=\"firstName\">\n                  </md-input-container>\n                  <md-input-container class=\"col-md-12 m-b-20 m-t-20\">\n                    <input type=\"text\" mdInput placeholder=\"Last Name\" formControlName=\"lastName\">\n                  </md-input-container>\n                  <md-input-container class=\"col-md-12 m-b-20 m-t-20\">\n                    <input type=\"text\" mdInput placeholder=\"City\" formControlName=\"city\">\n                  </md-input-container>\n                  <md-select placeholder=\"State\" class=\"col-md-12 m-b-20 m-t-20\" formControlName=\"state\">\n                    <md-option *ngFor=\"let state of states\" [value]=\"state.iso\">{{state.state}}</md-option>\n                  </md-select>\n                </div>\n              </md-card-content>\n              <md-card-footer>\n                <button type=\"submit\" [disabled]=\"personalInfoForm.invalid || isLoading\" md-raised-button>Save Profile</button>\n              </md-card-footer>\n            </md-card>\n          </form>\n        </div>\n        <div class=\"col-md-6\">\n          <md-card>\n            <form novalidate [formGroup]=\"changePasswordForm\" (ngSubmit)=\"changePassword(myNgForm)\" #myNgForm=\"ngForm\">\n              <md-card-header>\n                <md-card-title>\n                  <h3>Change Your password</h3>\n                </md-card-title>\n              </md-card-header>\n              <md-card-content>\n                <div class=\"row\">\n                  <md-input-container class=\"col-md-12\">\n                    <input type=\"password\" placeholder=\"Enter new password\" formControlName=\"password\" validateEqualTo=\"confirmPassword\" mdInput>\n                    <md-error *ngIf=\"passwordControl.hasError('required')\">\n                      Password is <strong>required</strong> .\n                    </md-error>\n                    <md-error *ngIf=\"passwordControl.hasError('pattern')\">\n                      Password is not <strong>strong</strong> enough.\n                    </md-error>\n                    <md-error *ngIf=\"changePasswordForm.get('password').hasError('validateEqual')\">\n                      Passwords do not match.\n                    </md-error>\n                  </md-input-container>\n                  <md-input-container class=\"col-md-12 m-b-20 m-t-20\">\n                    <input type=\"password\" placeholder=\"Confirm new password\" formControlName=\"confirmPassword\" mdInput>\n                    <md-error *ngIf=\"changePasswordForm.get('password').hasError('validateEqual')\">\n                      Passwords do not match.\n                    </md-error>\n                    <md-error *ngIf=\"confirmPasswordControl.hasError('required')\">\n                      Password confirmation is <strong>required</strong> .\n                    </md-error>\n                  </md-input-container>\n                </div>\n              </md-card-content>\n              <md-card-footer>\n                <button [disabled]=\"changePasswordForm.invalid || isLoading\" md-raised-button>Change Password</button>\n              </md-card-footer>\n            </form>\n          </md-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* unused harmony export PasswordValidation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_constant__ = __webpack_require__("../../../../../src/app/states.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__md5__ = __webpack_require__("../../../../../src/app/md5.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PASSWORD_REGEX = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{4,20}/;
var SettingsComponent = (function () {
    function SettingsComponent(rs, fb, ps, toastr, vRef, ls) {
        this.rs = rs;
        this.fb = fb;
        this.ps = ps;
        this.toastr = toastr;
        this.ls = ls;
        this.passwordControl = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.confirmPasswordControl = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, this.validatePasswordConfirmation.bind(this)]);
        this.uploadProfilePictureControl = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]();
        this.isLoading = false;
        this.user = this.ps.currentUser;
        this.states = __WEBPACK_IMPORTED_MODULE_0__states_constant__["a" /* STATES */];
        this.toastr.setRootViewContainerRef(vRef);
        this.createForm();
    }
    SettingsComponent.prototype.createForm = function () {
        this.changePasswordForm = this.fb.group({
            password: this.passwordControl,
            confirmPassword: this.confirmPasswordControl
        });
        this.personalInfoForm = this.fb.group({
            firstName: [this.user.get('firstName'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
            lastName: [this.user.get('lastName'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
            city: [this.user.get('city'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required],
            state: [this.user.get('state'), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]
        });
    };
    SettingsComponent.prototype.ngOnInit = function () {
        this.rs.setBc(__WEBPACK_IMPORTED_MODULE_3__services_route_service__["a" /* BODY_CLASSES */].normal);
        if (this.user.has('img')) {
            this.imgUrl = this.user.get('img').url();
        }
        else {
            this.imgUrl = Object(__WEBPACK_IMPORTED_MODULE_8__md5__["b" /* getSrc */])(this.user.get('email'));
        }
    };
    SettingsComponent.prototype.saveProfile = function () {
        var _this = this;
        var profile = {};
        profile.firstName = this.personalInfoForm.controls.firstName.value;
        profile.lastName = this.personalInfoForm.controls.lastName.value;
        profile.city = this.personalInfoForm.controls.city.value;
        profile.state = this.personalInfoForm.controls.state.value;
        this.isLoading = true;
        this.ps.currentUser.set('firstName', profile.firstName);
        this.ps.currentUser.set('lastName', profile.lastName);
        this.ps.currentUser.set('city', profile.city);
        this.ps.currentUser.set('state', profile.state);
        this.ls.setLoading(true);
        this.ps.save(this.ps.currentUser).subscribe(function (done) {
            _this.ls.setLoading(false);
            location.href = '/setting';
        }, function (err) {
            _this.isLoading = false;
            _this.ls.setLoading(false);
            _this.toastr.error(err.message);
            console.log(err);
        });
    };
    SettingsComponent.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        var file = fileList[0];
        console.log(file);
        this.ls.setLoading(true);
        this.isLoading = true;
        this.ps.changeAvatar(file).subscribe(function (done) {
            _this.ls.setLoading(false);
            location.href = '/setting';
        }, function (err) {
            _this.isLoading = false;
            _this.ls.setLoading(false);
            _this.toastr.error(err.message);
            console.log(err);
        });
    };
    SettingsComponent.prototype.changePassword = function (form) {
        var _this = this;
        this.isLoading = true;
        this.ls.setLoading(true);
        var password = this.passwordControl.value;
        this.ps.changePassword(password).subscribe(function (done) {
            _this.ls.setLoading(false);
            _this.isLoading = false;
            form.resetForm();
            _this.toastr.success('Password changed');
        }, function (err) {
            _this.ls.setLoading(false);
            _this.isLoading = false;
            _this.toastr.error(err.message, 'Error');
            console.log(err);
        });
    };
    SettingsComponent.prototype.validatePasswordConfirmation = function (control) {
        if (this.changePasswordForm) {
            return control.value === this.changePasswordForm.get('password').value ? null : { notSame: true };
        }
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'sp-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_route_service__["b" /* RouteService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1__services_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_2__services_loading_service__["a" /* LoadingService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());

var PasswordValidation = (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commons_directives_directives_module__ = __webpack_require__("../../../../../src/app/commons/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__commons_widget_widget_module__ = __webpack_require__("../../../../../src/app/commons/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_text_equality_validator__ = __webpack_require__("../../../../ngx-text-equality-validator/dist/ngx-text-equality-validator.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_text_equality_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ngx_text_equality_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__toastr_options__ = __webpack_require__("../../../../../src/app/toastr.options.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__commons_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["g" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["r" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_text_equality_validator__["TextEqualityValidatorModule"],
                __WEBPACK_IMPORTED_MODULE_15_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__commons_widget_widget_module__["a" /* WidgetModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__settings_component__["a" /* SettingsComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_2__services_route_service__["b" /* RouteService */],
                __WEBPACK_IMPORTED_MODULE_1__services_parse_service__["a" /* ParseService */],
                __WEBPACK_IMPORTED_MODULE_10__services_user_service__["e" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatIconRegistry */],
                { provide: __WEBPACK_IMPORTED_MODULE_15_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_16__toastr_options__["a" /* CustomOption */] }
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "../../../../../src/app/states.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATES; });
var STATES = [
    {
        'iso': 'AB',
        'state': 'Abia'
    },
    {
        'iso': 'FC',
        'state': 'Abuja'
    },
    {
        'iso': 'AD',
        'state': 'Adamawa'
    },
    {
        'iso': 'AK',
        'state': 'Akwa Ibom'
    },
    {
        'iso': 'AN',
        'state': 'Anambra'
    },
    {
        'iso': 'BA',
        'state': 'Bauchi'
    },
    {
        'iso': 'BY',
        'state': 'Bayelsa'
    },
    {
        'iso': 'BE',
        'state': 'Benue'
    },
    {
        'iso': 'BO',
        'state': 'Borno'
    },
    {
        'iso': 'CR',
        'state': 'Cross River'
    },
    {
        'iso': 'DE',
        'state': 'Delta'
    },
    {
        'iso': 'EB',
        'state': 'Ebonyi'
    },
    {
        'iso': 'ED',
        'state': 'Edo'
    },
    {
        'iso': 'EK',
        'state': 'Ekiti'
    },
    {
        'iso': 'EN',
        'state': 'Enugu'
    },
    {
        'iso': 'GO',
        'state': 'Gombe'
    },
    {
        'iso': 'IM',
        'state': 'Imo'
    },
    {
        'iso': 'JI',
        'state': 'Jigawa'
    },
    {
        'iso': 'KD',
        'state': 'Kaduna'
    },
    {
        'iso': 'KN',
        'state': 'Kano'
    },
    {
        'iso': 'KT',
        'state': 'Katsina'
    },
    {
        'iso': 'KE',
        'state': 'Kebbi'
    },
    {
        'iso': 'KO',
        'state': 'Kogi'
    },
    {
        'iso': 'KW',
        'state': 'Kwara'
    },
    {
        'iso': 'LA',
        'state': 'Lagos'
    },
    {
        'iso': 'NA',
        'state': 'Nassarawa'
    },
    {
        'iso': 'NI',
        'state': 'Niger'
    },
    {
        'iso': 'OG',
        'state': 'Ogun'
    },
    {
        'iso': 'ON',
        'state': 'Ondo'
    },
    {
        'iso': 'OS',
        'state': 'Osun'
    },
    {
        'iso': 'OY',
        'state': 'Oyo'
    },
    {
        'iso': 'PL',
        'state': 'Plateau'
    },
    {
        'iso': 'RI',
        'state': 'Rivers'
    },
    {
        'iso': 'SO',
        'state': 'Sokoto'
    },
    {
        'iso': 'TA',
        'state': 'Taraba'
    },
    {
        'iso': 'YO',
        'state': 'Yobe'
    },
    {
        'iso': 'ZA',
        'state': 'Zamfara'
    }
];


/***/ }),

/***/ "../../../../../src/app/states/data-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return INIT_USER_PROFILE; });
/* unused harmony export INIT_USERS_STATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_MESSAGE_DATA_STATE; });
var INIT_USER_PROFILE = {
    user: undefined,
    parent: undefined,
    reports: []
};
var INIT_USERS_STATE = {
    students: {},
    parents: {},
    teachers: {},
    admins: {},
    currentSelectedUserProfile: INIT_USER_PROFILE
};
var INITIAL_MESSAGE_DATA_STATE = {
    inbox: {},
    outbox: {},
    users: INIT_USERS_STATE,
    news: {}
};


/***/ }),

/***/ "../../../../../src/app/states/ui-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INIT_TOTAL_COUNTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_MESSAGE_UI_STATE; });
var INIT_TOTAL_COUNTS = {
    studentCount: 0,
    parentCount: 0,
    teacherCount: 0,
    adminCount: 0
};
var INITIAL_MESSAGE_UI_STATE = {
    currentUnread: undefined,
    currentMailSection: 0,
    totalCounts: INIT_TOTAL_COUNTS
};


/***/ }),

/***/ "../../../../../src/app/toastr-options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can pass any options to override defaults
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.dismiss = 'auto';
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));



/***/ }),

/***/ "../../../../../src/app/toastr.options.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can pass any options to override defaults
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.dismiss = 'auto';
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));



/***/ }),

/***/ "../../../../../src/app/user/user-action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_CURRENT_SELECTED_USER_ACTION; });
/* unused harmony export SetCurrentSelectedUserAction */
var SET_CURRENT_SELECTED_USER_ACTION = 'SET_CURRENT_SELECTED_USER_ACTION';
var SetCurrentSelectedUserAction = (function () {
    function SetCurrentSelectedUserAction(payload) {
        this.payload = payload;
        this.type = SET_CURRENT_SELECTED_USER_ACTION;
    }
    return SetCurrentSelectedUserAction;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_skip__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/skip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");











var shouldDebug = true;
if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
    shouldDebug = false;
}
__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].prototype.debug = function (message) {
    return this.do(function (nextValue) {
        if (shouldDebug) {
            console.log(message, nextValue);
        }
    }, function (error) {
        if (shouldDebug) {
            console.log(message, error);
        }
    }, function () {
        if (shouldDebug) {
            console.log(message);
        }
    });
};
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./af.js": "../../../../chart.js/node_modules/moment/locale/af.js",
	"./ar": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../chart.js/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../chart.js/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../chart.js/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../chart.js/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../chart.js/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../chart.js/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../chart.js/node_modules/moment/locale/ar.js",
	"./az": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./az.js": "../../../../chart.js/node_modules/moment/locale/az.js",
	"./be": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./be.js": "../../../../chart.js/node_modules/moment/locale/be.js",
	"./bg": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../chart.js/node_modules/moment/locale/bg.js",
	"./bn": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../chart.js/node_modules/moment/locale/bn.js",
	"./bo": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../chart.js/node_modules/moment/locale/bo.js",
	"./br": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./br.js": "../../../../chart.js/node_modules/moment/locale/br.js",
	"./bs": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../chart.js/node_modules/moment/locale/bs.js",
	"./ca": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../chart.js/node_modules/moment/locale/ca.js",
	"./cs": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../chart.js/node_modules/moment/locale/cs.js",
	"./cv": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../chart.js/node_modules/moment/locale/cv.js",
	"./cy": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../chart.js/node_modules/moment/locale/cy.js",
	"./da": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./da.js": "../../../../chart.js/node_modules/moment/locale/da.js",
	"./de": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./de-at": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../chart.js/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../chart.js/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../chart.js/node_modules/moment/locale/de.js",
	"./dv": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../chart.js/node_modules/moment/locale/dv.js",
	"./el": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./el.js": "../../../../chart.js/node_modules/moment/locale/el.js",
	"./en-au": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../chart.js/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../chart.js/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../chart.js/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../chart.js/node_modules/moment/locale/en-ie.js",
	"./en-nz": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../chart.js/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../chart.js/node_modules/moment/locale/eo.js",
	"./es": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./es-do": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../chart.js/node_modules/moment/locale/es-do.js",
	"./es.js": "../../../../chart.js/node_modules/moment/locale/es.js",
	"./et": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./et.js": "../../../../chart.js/node_modules/moment/locale/et.js",
	"./eu": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../chart.js/node_modules/moment/locale/eu.js",
	"./fa": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../chart.js/node_modules/moment/locale/fa.js",
	"./fi": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../chart.js/node_modules/moment/locale/fi.js",
	"./fo": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../chart.js/node_modules/moment/locale/fo.js",
	"./fr": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../chart.js/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../chart.js/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../chart.js/node_modules/moment/locale/fr.js",
	"./fy": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../chart.js/node_modules/moment/locale/fy.js",
	"./gd": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../chart.js/node_modules/moment/locale/gd.js",
	"./gl": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../chart.js/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../chart.js/node_modules/moment/locale/gom-latn.js",
	"./he": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./he.js": "../../../../chart.js/node_modules/moment/locale/he.js",
	"./hi": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../chart.js/node_modules/moment/locale/hi.js",
	"./hr": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../chart.js/node_modules/moment/locale/hr.js",
	"./hu": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../chart.js/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../chart.js/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./id.js": "../../../../chart.js/node_modules/moment/locale/id.js",
	"./is": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./is.js": "../../../../chart.js/node_modules/moment/locale/is.js",
	"./it": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./it.js": "../../../../chart.js/node_modules/moment/locale/it.js",
	"./ja": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../chart.js/node_modules/moment/locale/ja.js",
	"./jv": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../chart.js/node_modules/moment/locale/jv.js",
	"./ka": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../chart.js/node_modules/moment/locale/ka.js",
	"./kk": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../chart.js/node_modules/moment/locale/kk.js",
	"./km": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./km.js": "../../../../chart.js/node_modules/moment/locale/km.js",
	"./kn": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../chart.js/node_modules/moment/locale/kn.js",
	"./ko": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../chart.js/node_modules/moment/locale/ko.js",
	"./ky": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../chart.js/node_modules/moment/locale/ky.js",
	"./lb": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../chart.js/node_modules/moment/locale/lb.js",
	"./lo": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../chart.js/node_modules/moment/locale/lo.js",
	"./lt": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../chart.js/node_modules/moment/locale/lt.js",
	"./lv": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../chart.js/node_modules/moment/locale/lv.js",
	"./me": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./me.js": "../../../../chart.js/node_modules/moment/locale/me.js",
	"./mi": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../chart.js/node_modules/moment/locale/mi.js",
	"./mk": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../chart.js/node_modules/moment/locale/mk.js",
	"./ml": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../chart.js/node_modules/moment/locale/ml.js",
	"./mr": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../chart.js/node_modules/moment/locale/mr.js",
	"./ms": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../chart.js/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../chart.js/node_modules/moment/locale/ms.js",
	"./my": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./my.js": "../../../../chart.js/node_modules/moment/locale/my.js",
	"./nb": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../chart.js/node_modules/moment/locale/nb.js",
	"./ne": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../chart.js/node_modules/moment/locale/ne.js",
	"./nl": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../chart.js/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../chart.js/node_modules/moment/locale/nl.js",
	"./nn": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../chart.js/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../chart.js/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../chart.js/node_modules/moment/locale/pl.js",
	"./pt": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../chart.js/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../chart.js/node_modules/moment/locale/pt.js",
	"./ro": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../chart.js/node_modules/moment/locale/ro.js",
	"./ru": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../chart.js/node_modules/moment/locale/ru.js",
	"./sd": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../chart.js/node_modules/moment/locale/sd.js",
	"./se": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./se.js": "../../../../chart.js/node_modules/moment/locale/se.js",
	"./si": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./si.js": "../../../../chart.js/node_modules/moment/locale/si.js",
	"./sk": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../chart.js/node_modules/moment/locale/sk.js",
	"./sl": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../chart.js/node_modules/moment/locale/sl.js",
	"./sq": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../chart.js/node_modules/moment/locale/sq.js",
	"./sr": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../chart.js/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../chart.js/node_modules/moment/locale/sr.js",
	"./ss": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../chart.js/node_modules/moment/locale/ss.js",
	"./sv": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../chart.js/node_modules/moment/locale/sv.js",
	"./sw": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../chart.js/node_modules/moment/locale/sw.js",
	"./ta": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../chart.js/node_modules/moment/locale/ta.js",
	"./te": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./te.js": "../../../../chart.js/node_modules/moment/locale/te.js",
	"./tet": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../chart.js/node_modules/moment/locale/tet.js",
	"./th": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./th.js": "../../../../chart.js/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../chart.js/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../chart.js/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../chart.js/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../chart.js/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../chart.js/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../chart.js/node_modules/moment/locale/tzm.js",
	"./uk": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../chart.js/node_modules/moment/locale/uk.js",
	"./ur": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../chart.js/node_modules/moment/locale/ur.js",
	"./uz": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../chart.js/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../chart.js/node_modules/moment/locale/uz.js",
	"./vi": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../chart.js/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../chart.js/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../chart.js/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../chart.js/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../chart.js/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../chart.js/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../chart.js/node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../chart.js/node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "../../../../ngx-text-equality-validator/node_modules/@angular/core/@angular lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../ngx-text-equality-validator/node_modules/@angular/core/@angular lazy recursive";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map