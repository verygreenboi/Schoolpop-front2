webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/dashboard/dashboard-impl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardImpl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");

var Parse = __webpack_require__("../../../../parse/index.js");
var ClassRoom = Parse.Object.extend("ClassRoom");
var News = Parse.Object.extend("News");
var User = Parse.Object.extend(Parse.User);
var DashboardImpl = (function () {
    function DashboardImpl(ps, es, ms, ns) {
        this.ps = ps;
        this.es = es;
        this.ms = ms;
        this.ns = ns;
        this.currentUser = this.ps.currentUser;
    }
    DashboardImpl.prototype.getDashboardData = function () {
        if (this.currentUser.get("role") == "admin") {
            return this.getAdminDataObservable();
        }
        else if (this.currentUser.get("role") == "teacher") {
            return this.getTeacherDataObservable();
        }
        else if (this.currentUser.get("role") == "parent") {
            return this.getParentDataObservable();
        }
        else {
            return this.getStudentDataObservable();
        }
    };
    DashboardImpl.prototype.getAdminDataObservable = function () {
        var _this = this;
        var dashboardData = {};
        var school = this.currentUser.get("school");
        return this.getUsers(school, "teacher").flatMap(function (t) {
            dashboardData.teachers = t;
            // Get parents
            return _this.getUsers(school, "parent");
        }).flatMap(function (p) {
            dashboardData.parents = p;
            // Get students
            return _this.getUsers(school, "user");
        })
            .flatMap(function (s) {
            dashboardData.students = s;
            return _this.ms.getInboxObservable(5, 0);
        })
            .map(function (m) {
            dashboardData.mails = m;
            return _this.es.getEvents();
        }).flatMap(function (e) {
            dashboardData.events = e;
            return _this.ns.getNews();
        }).map(function (n) {
            dashboardData.news = n;
            return dashboardData;
        });
    };
    DashboardImpl.prototype.getTeacherDataObservable = function () {
        var dashboardData = {};
        throw new Error('Method not implemented.');
    };
    DashboardImpl.prototype.getParentDataObservable = function () {
        var dashboardData = {};
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(dashboardData);
    };
    DashboardImpl.prototype.getStudentDataObservable = function () {
        var dashboardData = {};
        throw new Error('Method not implemented.');
    };
    DashboardImpl.prototype.getUsers = function (school, role, limit, skip) {
        if (limit === void 0) { limit = 999; }
        if (skip === void 0) { skip = 0; }
        var query = new Parse.Query(User);
        query.equalTo("school", school);
        query.equalTo("role", role);
        query.limit(limit);
        query.skip(skip);
        query.include(['school', 'profile']);
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */](function (observer) {
            query.find().then(function (u) {
                observer.next(u);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    return DashboardImpl;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-icon svg g#Solid path {\n  fill: #9c78cd;\n}\n\nmd-list-item p > span {\n  font-size: 80%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\"></div>\n<div class=\"wrapper\">\n  <!--Top row-->\n  <div class=\"row\">\n    <!--Events-->\n    <div class=\"col-md-8\">\n      <md-card>\n        <md-card-header>\n\n          <md-card-title>\n            <h3>Events</h3>\n          </md-card-title>\n\n          <md-card-subtitle>\n            <p>All events this month</p>\n          </md-card-subtitle>\n\n        </md-card-header>\n\n        <md-card-content>\n          <sp-full-calendar [options]=\"events$ | async\"></sp-full-calendar>\n        </md-card-content>\n\n      </md-card>\n      <!--Events end-->\n      <!--Messages-->\n      <md-card class=\"mt-lg\" *ngIf=\"messages.length > 0\">\n        <md-card-header>\n\n          <md-card-title>\n            <h3>Recent Messages</h3>\n          </md-card-title>\n\n        </md-card-header>\n\n        <md-card-content>\n          <md-list>\n            <md-list-item *ngFor=\"let message of messages\">\n              <md-icon svgIcon=\"{{getIcon(message)}}\"></md-icon>\n              <h3 md-line> {{message.from.firstName}} {{message.from.lastName}}</h3>\n              <p md-line>\n                <span> {{message.subject}} </span>\n              </p>\n            </md-list-item>\n          </md-list>\n        </md-card-content>\n      </md-card>\n      <!--Messages end-->\n    </div>\n\n    <div class=\"col-md-4 lg-m-t\">\n      <div class=\"row  padding-md padding-sm\">\n        <!--UserOverview-->\n        <sp-uo-widget *ngIf=\"currentUser.get('role') != 'user'\" class=\"col-md-6 col-lg-12 mt-lg no-padding-lg\" [color]=\"'purple'\" [count]=\"studentsCounter$ | async\" [title]=\"getTitle()\"></sp-uo-widget>\n        <sp-uo-widget *ngIf=\"currentUser.get('role') == 'admin'\" class=\"col-md-6 col-lg-12 mt-lg no-padding-lg\" [color]=\"'green'\" [count]=\"teachersCounter$ | async\" [title]=\"'Staff'\"></sp-uo-widget>\n        <sp-uo-widget *ngIf=\"currentUser.get('role') == 'admin' || currentUser.get('role') == 'teacher'\" class=\"col-md-6 col-lg-12 mt-lg no-padding-lg\" [color]=\"'yellow'\" [count]=\"parentsCounter$ | async\" [title]=\"'Parent'\"></sp-uo-widget>\n        <!--UserOverview end-->\n\n      </div>\n    </div>\n    <div class=\"col-md-4 lg-m-t\" *ngIf=\"currentUser.get('role') !== 'admin'\">\n      <!--News-->\n      <div class=\"slick-carousal col-md-6 col-lg-12\">\n        <div class=\"overlay-c-bg\"></div>\n        <owl-carousel [options]=\"options\" [items]=\"news\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n          <div class=\"item\" *ngFor=\"let item of news;let i = index\">\n            <h3 class=\"text-success\">News</h3>\n            <span class=\"date\">{{item.createdAt}}</span>\n            <h1>{{item.text | slice:0:140}}</h1>\n            <div class=\"text-center\">\n              <a [routerLink]=\"['/news', item.objectId]\" class=\"view-all\">Read</a>\n            </div>\n          </div>\n        </owl-carousel>\n      </div>\n      <!--News end-->\n    </div>\n  </div>\n  <!--Top row end-->\n  <div class=\"row m-t-20\">\n    <div class=\"col-md-4\" *ngIf=\"currentUser.get('role') == 'admin' || currentUser.get('role') == 'teacher'\">\n      <!--Students by sex chart-->\n      <md-card *ngIf=\"(chartDataset$ | async)\" >\n        <md-card-header>\n          <md-card-title>\n            <h4>Students by sex</h4>\n          </md-card-title>\n        </md-card-header>\n        <md-card-content>\n          <sp-chart-widget [chartType]=\"'pie'\" [dataset]=\"chartDataset$ | async\"></sp-chart-widget>\n        </md-card-content>\n      </md-card>\n      <!--Students by sex chart end-->\n    </div>\n    <ng-container>\n      <div class=\"col-md-4\" *ngIf=\"(currentUser.get('role') == 'admin' || currentUser.get('role') == 'teacher') && local.data.length > 0\">\n        <md-card>\n          <md-card-header>\n            <md-card-title>\n              <h4>Registration by month</h4>\n            </md-card-title>\n          </md-card-header>\n          <md-card-content>\n            <div style=\"display: block\">\n              <canvas #chartName=\"base-chart\" baseChart [options]=\"options\" [data]=\"local.data\" [labels]=\"local?.labels\" [chartType]=\"'doughnut'\"></canvas>\n            </div>\n          </md-card-content>\n        </md-card>\n      </div>\n    </ng-container>\n    <div class=\"col-md-4\" *ngIf=\"currentUser.get('role') == 'admin'\" >\n      <!--News-->\n      <div class=\"slick-carousal col-md-6 col-lg-12\">\n        <div class=\"overlay-c-bg\"></div>\n        <owl-carousel [options]=\"options\" [items]=\"news\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n          <div class=\"item\" *ngFor=\"let item of news;let i = index\">\n            <h3 class=\"text-success\">News</h3>\n            <span class=\"date\">{{item.createdAt}}</span>\n            <h1>{{item.text | slice:0:140}}</h1>\n            <div class=\"text-center\">\n              <a [routerLink]=\"['/news', item.objectId]\" class=\"view-all\">Read</a>\n            </div>\n          </div>\n        </owl-carousel>\n      </div>\n      <!--News end-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_charts__);
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
var DashboardComponent = (function () {
    function DashboardComponent(store, ps, rs, ls, ns, ds, iconRegistry, sanitizer) {
        this.store = store;
        this.ps = ps;
        this.rs = rs;
        this.ls = ls;
        this.ns = ns;
        this.ds = ds;
        this.terms = '';
        this.news = [];
        this.messages = [];
        this.dashData = {};
        this.isSearching = false;
        this.isLoading = false;
        this.events$ = this.ds.getEvents();
        this.currentUser = Parse.User.current();
        this.localData = JSON.parse(localStorage.getItem('regitration'));
        this.local = this.localData === null ? {
            labels: [],
            data: []
        } : this.localData;
        this.options = {
            loop: true,
            center: true,
            items: 1,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 1000 * 10,
            autoplayHoverPause: true,
            autoHeight: true
        };
        iconRegistry.addSvgIcon('envelope', sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/envelope.svg'));
        iconRegistry.addSvgIcon('envelope-o', sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/envelope-o.svg'));
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rs.setBc('sticky-header');
        this.isLoading = true;
        // this.store.dispatch(new LoadDashBoardAction());
        this.studentsCounter$ = this.store.map(this.mapStateToStudentsCount);
        this.parentsCounter$ = this.store.map(this.mapStateToParentsCount);
        this.teachersCounter$ = this.store.map(this.mapStateToTeachersCount);
        this.adminsCounter$ = this.store.map(this.mapStateToAdminCount);
        this.maleCount$ = this.store.skip(1).map(function (state) { return _this.getSexCount(state, 'male'); });
        this.femaleCount$ = this.store.skip(1).map(function (state) { return _this.getSexCount(state, 'female'); });
        this.store
            .map(function (state) { return __WEBPACK_IMPORTED_MODULE_10_lodash__["values"](state.dataState.inbox); })
            .flatMap(function (mails) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].from(mails); })
            .filter(function (mail) { return mail.isRead === false; })
            .take(5)
            .do(function (mail) { return _this.messages.push(mail); }).subscribe();
        this.store.map(function (state) { return __WEBPACK_IMPORTED_MODULE_10_lodash__["values"](state.dataState.news); })
            .flatMap(function (ns) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].from(ns); })
            .do(function (news) { return _this.news.push(news); })
            .subscribe();
        this.initChart();
    };
    DashboardComponent.prototype.initChart = function () {
        var _this = this;
        var role = this.currentUser.get('role');
        if (role === 'admin' || role === 'teacher') {
            this.chartDataset$ = this.store.select(function (state) {
                var m = 0;
                var f = 0;
                var students = __WEBPACK_IMPORTED_MODULE_10_lodash__["values"](__WEBPACK_IMPORTED_MODULE_10_lodash__["cloneDeep"](state.dataState.users.students));
                students.map(function (student) {
                    if (student.sex === 'male') {
                        m++;
                    }
                    else {
                        f++;
                    }
                });
                return {
                    labels: ['Female', 'Male'],
                    data: [f, m]
                };
            });
            this.store.select(function (state) {
                var students = __WEBPACK_IMPORTED_MODULE_10_lodash__["values"](__WEBPACK_IMPORTED_MODULE_10_lodash__["cloneDeep"](state.dataState.users.students));
                var grouped = __WEBPACK_IMPORTED_MODULE_10_lodash__["groupBy"](students, function (user) { return __WEBPACK_IMPORTED_MODULE_11_moment__(user.createdAt).format('MMM'); });
                var keys = __WEBPACK_IMPORTED_MODULE_10_lodash__["keys"](grouped);
                var data = [];
                __WEBPACK_IMPORTED_MODULE_10_lodash__["forEach"](keys, function (key) {
                    data.push(grouped[key].length);
                });
                return {
                    labels: keys,
                    data: data
                };
            }).skip(1).subscribe(function (data) {
                _this.local = data;
                localStorage.setItem('regitration', JSON.stringify(data));
                if (_this.myChart) {
                    _this.myChart.labels = data.labels;
                    _this.myChart.data = data.data;
                    _this.myChart.ngOnChanges({});
                }
            });
        }
    };
    DashboardComponent.prototype.getSexCount = function (state, sex) {
        var count = 0;
        var students = __WEBPACK_IMPORTED_MODULE_10_lodash__["values"](__WEBPACK_IMPORTED_MODULE_10_lodash__["cloneDeep"](state.dataState.users.students));
        return students.reduce(function (acc, user) {
            if (user.sex === sex) {
                return count++;
            }
        }, 0);
    };
    DashboardComponent.prototype.mapStateToStudentsCount = function (state) {
        var newState = __WEBPACK_IMPORTED_MODULE_10_lodash__["cloneDeep"](state);
        return __WEBPACK_IMPORTED_MODULE_10_lodash__["values"](newState.dataState.users.students).length;
    };
    DashboardComponent.prototype.mapStateToParentsCount = function (state) {
        var newState = __WEBPACK_IMPORTED_MODULE_10_lodash__["cloneDeep"](state);
        return __WEBPACK_IMPORTED_MODULE_10_lodash__["values"](newState.dataState.users.parents).length;
    };
    DashboardComponent.prototype.mapStateToTeachersCount = function (state) {
        var newState = __WEBPACK_IMPORTED_MODULE_10_lodash__["cloneDeep"](state);
        return __WEBPACK_IMPORTED_MODULE_10_lodash__["values"](newState.dataState.users.teachers).length;
    };
    DashboardComponent.prototype.mapStateToAdminCount = function (state) {
        var newState = __WEBPACK_IMPORTED_MODULE_10_lodash__["cloneDeep"](state);
        return __WEBPACK_IMPORTED_MODULE_10_lodash__["values"](newState.dataState.users.admins).length;
    };
    DashboardComponent.prototype.getTitleForStudentsByParents = function () {
        return 'Children';
    };
    DashboardComponent.prototype.getTitleForStudentsByStaff = function () {
        return 'Student';
    };
    DashboardComponent.prototype.getTitle = function () {
        if (this.currentUser.get('role') === 'admin' || this.currentUser.get('role') === 'teacher') {
            return this.getTitleForStudentsByStaff();
        }
        else {
            return this.getTitleForStudentsByParents();
        }
    };
    DashboardComponent.prototype.getIcon = function (message) {
        if (message.isRead) {
            return 'envelope-o';
        }
        else {
            return 'envelope';
        }
    };
    DashboardComponent.prototype.getStudentBySexData = function () {
        var students = this.dashData.students;
        var m = 0;
        var f = 0;
        students.forEach(function (student) {
            if (student.get('sex') === 'male') {
                m++;
            }
            else {
                f++;
            }
        });
        return [f, m];
    };
    DashboardComponent.prototype.getStudentBySexLabels = function () {
        return ['Female', 'Male'];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])('chartName'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12_ng2_charts__["BaseChartDirective"])
    ], DashboardComponent.prototype, "myChart", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */],
            __WEBPACK_IMPORTED_MODULE_0__services_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_5__services_route_service__["b" /* RouteService */],
            __WEBPACK_IMPORTED_MODULE_8__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_7__services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commons_layout_layout_module__ = __webpack_require__("../../../../../src/app/commons/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_rout_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.rout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_is_activated_guard__ = __webpack_require__("../../../../../src/app/guards/is-activated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_widget_widget_module__ = __webpack_require__("../../../../../src/app/commons/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_authenticated_guard__ = __webpack_require__("../../../../../src/app/guards/authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_redirect_student_guard__ = __webpack_require__("../../../../../src/app/guards/redirect-student.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_owl_carousel__ = __webpack_require__("../../../../ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ngx_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_16_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__dashboard_rout_module__["a" /* DashboardRoute */],
                __WEBPACK_IMPORTED_MODULE_0__commons_layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["g" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_owl_carousel__["OwlModule"],
                __WEBPACK_IMPORTED_MODULE_5__commons_widget_widget_module__["a" /* WidgetModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__dashboard_component__["a" /* DashboardComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__guards_authenticated_guard__["a" /* AuthenticatedGuard */],
                __WEBPACK_IMPORTED_MODULE_2__guards_is_activated_guard__["a" /* IsActivatedGuard */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_6__services_route_service__["b" /* RouteService */],
                __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatIconRegistry */],
                __WEBPACK_IMPORTED_MODULE_14__guards_redirect_student_guard__["a" /* RedirectStudentGuard */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.rout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DashboardRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commons_layout_basic_basic_component__ = __webpack_require__("../../../../../src/app/commons/layout/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_authenticated_guard__ = __webpack_require__("../../../../../src/app/guards/authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_is_activated_guard__ = __webpack_require__("../../../../../src/app/guards/is-activated.guard.ts");





var DashboardRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__commons_layout_basic_basic_component__["a" /* BasicComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
                canActivate: [
                    __WEBPACK_IMPORTED_MODULE_3__guards_authenticated_guard__["a" /* AuthenticatedGuard */],
                    __WEBPACK_IMPORTED_MODULE_4__guards_is_activated_guard__["a" /* IsActivatedGuard */]
                ]
            }
        ]
    }
];
var DashboardRoute = __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(DashboardRoutes);


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_news_service__ = __webpack_require__("../../../../../src/app/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_impl__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-impl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardService = (function () {
    function DashboardService(ps, es, ms, ns) {
        this.ps = ps;
        this.es = es;
        this.dashData = {};
        this.presenter = new __WEBPACK_IMPORTED_MODULE_4__dashboard_impl__["a" /* DashboardImpl */](ps, es, ms, ns);
    }
    DashboardService.prototype.getDashboardData = function () {
        return this.presenter.getDashboardData();
    };
    DashboardService.prototype.getEvents = function () {
        return this.es.getEvents();
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_5__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_0__services_news_service__["a" /* NewsService */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../ngx-owl-carousel/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var owl_carousel_component_1 = __webpack_require__("../../../../ngx-owl-carousel/src/owl-carousel.component.js");
var owl_child_component_1 = __webpack_require__("../../../../ngx-owl-carousel/src/owl-child.component.js");
__webpack_require__("../../../../owl.carousel/dist/owl.carousel.js");
__export(__webpack_require__("../../../../ngx-owl-carousel/src/owl-carousel.component.js"));
var OwlModule = (function () {
    function OwlModule() {
    }
    OwlModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                owl_carousel_component_1.OwlCarousel, owl_child_component_1.OwlChild
            ],
            exports: [
                owl_carousel_component_1.OwlCarousel,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], OwlModule);
    return OwlModule;
}());
exports.OwlModule = OwlModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-owl-carousel/src/owl-carousel.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var owl_child_component_1 = __webpack_require__("../../../../ngx-owl-carousel/src/owl-child.component.js");
var OwlCarousel = (function () {
    function OwlCarousel(differs) {
        this.differs = differs;
        this.carouselClasses = "";
        this.options = {};
        this.show = true;
    }
    Object.defineProperty(OwlCarousel.prototype, "items", {
        set: function (coll) {
            this._items = coll;
            if (coll && !this.differ) {
                this.differ = this.differs.find(coll).create(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    OwlCarousel.prototype.ngDoCheck = function () {
        if (this.differ) {
            var changes = this.differ.diff(this._items);
            if (changes) {
                var changed = false;
                var changedFn = function () {
                    changed = true;
                };
                changes.forEachAddedItem(changedFn);
                changes.forEachMovedItem(changedFn);
                changes.forEachRemovedItem(changedFn);
                if (changed) {
                    this.refresh();
                }
            }
        }
    };
    OwlCarousel.prototype.refresh = function () {
        var _this = this;
        this.show = false;
        setTimeout(function () {
            _this.show = true;
        }, 0);
    };
    OwlCarousel.prototype.next = function (options) {
        this.trigger('next.owl.carousel', options);
    };
    OwlCarousel.prototype.previous = function (options) {
        this.trigger('prev.owl.carousel', options);
    };
    OwlCarousel.prototype.to = function (options) {
        this.trigger('to.owl.carousel', options);
    };
    OwlCarousel.prototype.trigger = function (action, options) {
        this.$owlChild.trigger(action, options);
    };
    __decorate([
        core_1.ViewChild('owl'), 
        __metadata('design:type', owl_child_component_1.OwlChild)
    ], OwlCarousel.prototype, "$owlChild", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "carouselClasses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], OwlCarousel.prototype, "items", null);
    OwlCarousel = __decorate([
        core_1.Component({
            selector: 'owl-carousel',
            template: '<owl-carousel-child *ngIf="show" #owl [ngClass]="carouselClasses" [options]="options">' +
                '<ng-content></ng-content></owl-carousel-child>',
        }), 
        __metadata('design:paramtypes', [core_1.IterableDiffers])
    ], OwlCarousel);
    return OwlCarousel;
}());
exports.OwlCarousel = OwlCarousel;
//# sourceMappingURL=owl-carousel.component.js.map

/***/ }),

/***/ "../../../../ngx-owl-carousel/src/owl-child.component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var OwlChild = (function () {
    function OwlChild(el) {
        this.el = el;
        this.owlClass = true;
        this.options = {};
        $ = $ || jQuery;
    }
    OwlChild.prototype.ngAfterViewInit = function () {
        this.$owl = $(this.el.nativeElement).owlCarousel(this.options);
    };
    OwlChild.prototype.trigger = function (action, options) {
        this.$owl.trigger(action, options);
    };
    OwlChild.prototype.ngOnDestroy = function () {
        this.$owl.trigger('destroy.owl.carousel').removeClass('owl-loaded');
        delete this.$owl;
    };
    __decorate([
        core_1.HostBinding('class.owl-carousel'), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "owlClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "options", void 0);
    OwlChild = __decorate([
        core_1.Component({
            selector: 'owl-carousel-child',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OwlChild);
    return OwlChild;
}());
exports.OwlChild = OwlChild;
//# sourceMappingURL=owl-child.component.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map