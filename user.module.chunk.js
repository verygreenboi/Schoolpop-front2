webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/resolvers/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
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


var UserResolver = (function () {
    function UserResolver(us) {
        this.us = us;
    }
    UserResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        return this.us.getProfile(id);
    };
    UserResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["e" /* UserService */]])
    ], UserResolver);
    return UserResolver;
}());



/***/ }),

/***/ "../../../../../src/app/user/attendance/attendance.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/attendance/attendance.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <md-card-title>\n      <h3>Attendance</h3>\n    </md-card-title>\n  </md-card-header>\n  <md-card-content>\n    <sp-datatable [dataset]=\"dataset\">\n      <sp-column [value]=\"'id'\" [header]=\"'ID'\"></sp-column>\n      <sp-column [value]=\"'date'\" [header]=\"'Date'\"></sp-column>\n      <sp-column [value]=\"'status'\" [header]=\"'Present?'\"></sp-column>\n      <sp-column [value]=\"'markedBy'\" [header]=\"'Marked By'\"></sp-column>\n    </sp-datatable>\n  </md-card-content>\n</md-card>\n<sp-fab *ngIf=\"editable\" (click)=\"onFabClick($event)\"></sp-fab>\n"

/***/ }),

/***/ "../../../../../src/app/user/attendance/attendance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__moment_util__ = __webpack_require__("../../../../../src/app/moment-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttendanceComponent = (function () {
    function AttendanceComponent(us, ps) {
        this.us = us;
        this.ps = ps;
        this.dataset = [];
        this.moment = new __WEBPACK_IMPORTED_MODULE_0__moment_util__["a" /* MomentUtil */]().getMoment();
        this.editable = this.ps.currentUser.get('role') === 'teacher' || this.ps.currentUser.get('role') === 'admin';
    }
    AttendanceComponent.prototype.ngOnInit = function () {
        this.setup(this.us.getCurrentUser().attendance);
    };
    AttendanceComponent.prototype.setup = function (data) {
        var _this = this;
        console.log(data);
        data.forEach(function (element) {
            var a = {};
            a.id = element.id;
            a.date = _this.moment(element.get('createdAt')).format('MMMM Do YYYY, h:mm:ss a');
            a.status = element.get('status');
            a.markedBy = _this.getMarker(element.get('markedBy'));
            _this.dataset.push(a);
        });
    };
    AttendanceComponent.prototype.getMarker = function (user) {
        return user.get('firstName') + ' ' + user.get('lastName');
    };
    AttendanceComponent.prototype.onFabClick = function (e) {
    };
    AttendanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sp-attendance',
            template: __webpack_require__("../../../../../src/app/user/attendance/attendance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/attendance/attendance.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["e" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_parse_service__["a" /* ParseService */]])
    ], AttendanceComponent);
    return AttendanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\" *ngIf=\"isParent\">\n    <sp-up-widget class=\"col-md-4\" *ngFor=\"let user of users\" [user]=\"user\"></sp-up-widget>\n  </div>\n\n  <div class=\"row\" *ngIf=\"isAdmin || isTeacher\">\n    <div class=\"col-md-8\">\n      <md-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></md-progress-bar>\n      <md-card>\n        <md-card-header>\n          <md-card-title>\n            <h3>Student List</h3>\n          </md-card-title>\n        </md-card-header>\n        <md-card-content>\n          <sp-datatable (event)=\"doEvent($event)\" [viewable]=\"true\" [editable]=\"false\" [dataset]=\"dataset\">\n            <sp-column [value]=\"'id'\" [header]=\"'#'\"></sp-column>\n            <sp-column [value]=\"'objectId'\" [header]=\"'User ID'\"></sp-column>\n            <sp-column [value]=\"'firstName'\" [header]=\"'Last name'\"></sp-column>\n            <sp-column [value]=\"'lastName'\" [header]=\"'Fires name'\"></sp-column>\n            <sp-column [value]=\"'sex'\" [header]=\"'Sex'\"></sp-column>\n          </sp-datatable>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>\n\n<sp-fab *ngIf=\"isAdmin || isTeacher\" (click)=\"onClick($event)\"></sp-fab>\n"

/***/ }),

/***/ "../../../../../src/app/user/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_IEvent__ = __webpack_require__("../../../../../src/app/model/IEvent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
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



var UsersListComponent = (function () {
    function UsersListComponent(store, ls, rs, router, ps, us) {
        this.store = store;
        this.ls = ls;
        this.rs = rs;
        this.router = router;
        this.ps = ps;
        this.us = us;
        this.users = [];
        this.currentUser = this.ps.currentUser;
        this.studentObject = {};
        this.dataset = [];
        this.isParent = this.currentUser.get('role') === 'parent';
        this.isAdmin = this.currentUser.get('role') === 'admin';
        this.isTeacher = this.currentUser.get('role') === 'teacher';
        this.isLoading = false;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.rs.setBc('sticky-header');
        if (this.isParent) {
            this.setupParent();
        }
        if (this.isAdmin) {
            this.setupAdmin();
        }
        if (this.isTeacher) {
            this.setupTeacher();
        }
    };
    UsersListComponent.prototype.setupTeacher = function () {
        this.setupAdmin();
    };
    UsersListComponent.prototype.setupAdmin = function () {
        // this.us.studentsDatasetObservable.subscribe(
        //   d => this.dataset = d
        // );
        var _this = this;
        this.us.studentDatasetObservable.subscribe(function (u) { return _this.dataset.push(u); });
        var count = 0;
        this.store.map(function (state) { return __WEBPACK_IMPORTED_MODULE_9_lodash__["values"](__WEBPACK_IMPORTED_MODULE_9_lodash__["cloneDeep"](state.dataState.users.students)); })
            .flatMap(function (u) { return __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__["a" /* Observable */].from(u); })
            .map(function (user) {
            var item = {};
            item.id = count + 1;
            item.objectId = user.objectId;
            item.firstName = user.firstName;
            item.lastName = user.lastName;
            item.sex = user.sex;
            count++;
            return item;
        }).subscribe(function (user) { return _this.us.setStudent(user); });
        // this.us.getStudentsCountBySchool().flatMap( c => {
        //   this.studentObject.count = c;
        //   return this.us.getStudentsBySchool();
        // })
    };
    UsersListComponent.prototype.setupParent = function () {
        var _this = this;
        this.ls.setLoading(true);
        this.store.subscribe(function (state) {
            _this.users = __WEBPACK_IMPORTED_MODULE_9_lodash__["values"](state.dataState.users.students);
            _this.ls.setLoading(false);
        });
    };
    UsersListComponent.prototype.doEvent = function (e) {
        console.log(e);
        if (e.event === __WEBPACK_IMPORTED_MODULE_0__model_IEvent__["a" /* EventType */].view) {
            this.router.navigate(['user', e.objectId]);
        }
    };
    UsersListComponent.prototype.onClick = function (e) {
        console.log(e);
    };
    UsersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'sp-list',
            template: __webpack_require__("../../../../../src/app/user/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ngrx_store__["f" /* Store */],
            __WEBPACK_IMPORTED_MODULE_1__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_3__services_route_service__["b" /* RouteService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["e" /* UserService */]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  new works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserNewComponent = (function () {
    function UserNewComponent(rs) {
        this.rs = rs;
    }
    UserNewComponent.prototype.ngOnInit = function () {
        this.rs.setBc("sticky-header");
    };
    UserNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-new',
            template: __webpack_require__("../../../../../src/app/user/new/new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_route_service__["b" /* RouteService */]])
    ], UserNewComponent);
    return UserNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <sp-up-widget *ngIf=\"user\" [fees-paid]=\"fees?.get('paid')\" [showFooter]=\"false\" [user]=\"user\"></sp-up-widget>\n      <md-card class=\"mt-md\">\n        <md-card-header>\n          <md-card-title>\n            <h4>Options</h4>\n          </md-card-title>\n        </md-card-header>\n        <md-card-content>\n          <md-nav-list>\n            <a md-list-item [routerLink]=\"['/user', user.objectId]\"  routerLinkActive=\"active\">Results</a>\n          </md-nav-list>\n          <md-nav-list>\n            <a md-list-item [routerLink]=\"['attendance']\"  routerLinkActive=\"active\">Attendance</a>\n          </md-nav-list>\n          <md-nav-list>\n            <a md-list-item md-button [mdMenuTriggerFor]=\"menu\">Others</a>\n            <md-menu #menu=\"mdMenu\">\n              <button (click)=\"compose()\" md-menu-item>Send Message</button>\n              <button (click)=\"linkParent()\" md-menu-item>Link To Parent</button>\n              <button (click)=\"enterFee()\" md-menu-item>Enter Fees</button>\n            </md-menu>\n          </md-nav-list>\n        </md-card-content>\n      </md-card>\n    </div>\n    <div class=\"col-md-8\">\n      <!--Show details-->\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_widget_user_fee_dialog_user_fee_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/user-fee-dialog/user-fee-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_widget_compose_dialog_compose_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/compose-dialog/compose-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commons_widget_link_parent_link_parent_component__ = __webpack_require__("../../../../../src/app/commons/widget/link-parent/link-parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ListProfileComponent = (function () {
    function ListProfileComponent(rs, store, ls, ps, dialog, us, toastr, vRef, route, router) {
        this.rs = rs;
        this.store = store;
        this.ls = ls;
        this.ps = ps;
        this.dialog = dialog;
        this.us = us;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.toastr.setRootViewContainerRef(vRef);
    }
    ListProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rs.setBc('sticky-header');
        this.profile = this.route.snapshot.data['profile'];
        console.log(this.profile);
        this.user = this.us.getUserVM(this.profile.user.get('user'));
        if (!this.user) {
            this.router.navigate(['/404']);
        }
        this.us.setCurrentUser(this.profile);
        this.isStudent = this.user.role === 'user';
        this.isParent = this.user.role === 'parent';
        this.isTeacher = this.user.role === 'teacher';
        this.isAdmin = this.user.role === 'admin';
        if (this.isStudent) {
            if (this.ps.currentUser.get('role') === 'user' && this.user.objectId !== this.ps.currentUser.id) {
                this.router.navigate(['/profile']);
            }
        }
        if (this.isParent) {
            this.router.navigate(['/profile', this.user.objectId]);
        }
        this.us.getFee(this.user.objectId).subscribe(function (f) {
            _this.fees = f;
        }, function (err) {
            console.log(err);
        });
    };
    ListProfileComponent.prototype.compose = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__commons_widget_compose_dialog_compose_dialog_component__["a" /* ComposeDialogComponent */]);
        // this.router.navigate(['message', 'compose', this.profile.user.get('user').id]);
    };
    ListProfileComponent.prototype.enterFee = function () {
        var feeRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__commons_widget_user_fee_dialog_user_fee_dialog_component__["a" /* UserFeeDialogComponent */]);
    };
    ListProfileComponent.prototype.linkParent = function () {
        var _this = this;
        var linkRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__commons_widget_link_parent_link_parent_component__["a" /* LinkParentComponent */], {
            height: '400px',
            width: '600px',
        });
        linkRef.afterClosed()
            .filter(function (u) { return u !== undefined && u.parent !== undefined; })
            .do(function (user) {
            _this.toastr.info('Linking Parent');
            _this.ls.setLoading(true);
        })
            .flatMap(function (u) { return _this.us.linkParent(u.parent, _this.profile); })
            .do(function (u) {
            _this.ls.setLoading(false);
        })
            .subscribe(function (user) {
            console.log('done');
            _this.toastr.success('Parent Linked');
        }, function (err) {
            console.error(err);
            _this.toastr.error(err.message);
        });
    };
    ListProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'sp-profile',
            template: __webpack_require__("../../../../../src/app/user/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_route_service__["b" /* RouteService */],
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["f" /* Store */],
            __WEBPACK_IMPORTED_MODULE_0__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_3__services_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["e" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_5__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["f" /* Router */]])
    ], ListProfileComponent);
    return ListProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/r/r.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/r/r.component.html":
/***/ (function(module, exports) {

module.exports = "<md-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></md-progress-bar>\n<md-card>\n  <md-card-header>\n    <md-card-title>\n      <h3>Recent Results</h3>\n    </md-card-title>\n  </md-card-header>\n  <md-card-content>\n    <sp-datatable (event)=\"doEvent($event)\" [editable]=\"editable\" [deletable]='editable' [dataset]=\"dataset\">\n      <sp-column [value]=\"'id'\" [header]=\"'Id'\"></sp-column>\n      <sp-column [value]=\"'subject'\" [header]=\"'Subject'\"></sp-column>\n      <sp-column [value]=\"'score'\" [header]=\"'Score'\"></sp-column>\n      <sp-column [value]=\"'remark'\" [header]=\"'Remark'\"></sp-column>\n    </sp-datatable>\n  </md-card-content>\n</md-card>\n\n<sp-fab *ngIf=\"editable\" (click)=\"onClick($event)\"></sp-fab>\n"

/***/ }),

/***/ "../../../../../src/app/user/r/r.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commons_widget_edit_result_dialog_edit_result_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/edit-result-dialog/edit-result-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_IEvent__ = __webpack_require__("../../../../../src/app/model/IEvent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__commons_widget_delete_dialog_delete_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
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
var RComponent = (function () {
    function RComponent(ps, ls, store, rs, route, cdRef, dialog, us, router) {
        this.ps = ps;
        this.ls = ls;
        this.store = store;
        this.rs = rs;
        this.route = route;
        this.cdRef = cdRef;
        this.dialog = dialog;
        this.us = us;
        this.router = router;
        this.reports = [];
        this.dataset = [];
        this.editable = this.ps.currentUser.get('role') === 'teacher' || this.ps.currentUser.get('role') === 'admin';
        this.isLoading = false;
        this.index = 0;
    }
    RComponent.prototype.ngOnInit = function () {
        this.rs.setBc('sticky-header');
        this.ls.setLoading(true);
        this.reports = this.us.getCurrentUser().reports;
        this.user = this.us.getCurrentUser().user.get('user');
        this.createDataset();
        this.ls.setLoading(false);
        // this.user$ = this.store.map(state =>                  state.dataState.users.currentSelectedUserProfile.user);
        // this.user$
        //   .map(user => user)
        //   .flatMap(user => {
        //     const u = this.us.getUserPointer(user.objectId);
        //     return this.us.getResultObservable(u);
        //   })
        //   .map(report => this.getReportItem(report))
        //   .do(report => this.dataset.push)
        //   .subscribe();
    };
    RComponent.prototype.getReportItem = function (r) {
        var item = {};
        item.id = this.index + 1;
        item.objectId = r.id;
        item.score = r.get('caScore') + r.get('examScore');
        item.withExam = r.get('withExam');
        item.caScore = r.get('caScore');
        item.examScore = r.get('examScore');
        item.subject = r.get('subject').get('title');
        item.remark = this.getRemark(r.get('score'), item.withExam);
        return r;
    };
    RComponent.prototype.createDataset = function () {
        for (var index = 0; index < this.reports.length; index++) {
            var element = this.reports[index];
            var item = {};
            item.id = index + 1;
            item.objectId = element.id;
            item.score = element.get('caScore') + element.get('examScore');
            item.withExam = element.get('withExam');
            item.caScore = element.get('caScore');
            item.examScore = element.get('examScore');
            item.subject = element.get('subject').get('title');
            item.remark = this.getRemark(element.get('score'), item.withExam);
            this.dataset.push(item);
        }
    };
    RComponent.prototype.getRemark = function (score, we) {
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
    RComponent.prototype.doEvent = function (e) {
        var _this = this;
        if (e.event === __WEBPACK_IMPORTED_MODULE_1__model_IEvent__["a" /* EventType */].delete) {
            var deleteDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__commons_widget_delete_dialog_delete_dialog_component__["a" /* DeleteDialogComponent */]);
            deleteDialogRef.afterClosed()
                .filter(function (r) {
                console.log(r);
                return r === 'delete';
            })
                .flatMap(function (r) {
                _this.isLoading = true;
                return _this.us.deleteResult(e.objectId);
            })
                .subscribe(function (c) {
                console.log(c);
                for (var i = 0; i < _this.reports.length; i++) {
                    if (_this.reports[i].id === e.objectId) {
                        _this.reports.splice(i, 1);
                    }
                }
                _this.dataset = [];
                _this.createDataset();
                _this.isLoading = false;
            }, function (err) { return console.log(err); });
        }
        else if (e.event === __WEBPACK_IMPORTED_MODULE_1__model_IEvent__["a" /* EventType */].edit) {
            var report_1 = this.reports.filter(function (i) { return i.id === e.objectId; })[0];
            var editResultDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__commons_widget_edit_result_dialog_edit_result_dialog_component__["a" /* EditResultDialogComponent */], {
                data: report_1
            });
            editResultDialogRef.afterClosed()
                .filter(function (r) {
                if (r !== undefined && r !== 'cancel') {
                    return r;
                }
                return r !== undefined && r !== 'cancel';
            })
                .flatMap(function (r) {
                _this.isLoading = true;
                report_1.set('caScore', parseInt(r.caScore, 10));
                report_1.set('examScore', parseInt(r.examScore, 10));
                report_1.set('score', parseInt(r.caScore, 10) + parseInt(r.examScore, 10));
                return _this.us.saveReport(report_1);
            })
                .subscribe(function (d) {
                _this.dataset = [];
                _this.createDataset();
                _this.isLoading = false;
                // console.log(d);
            }, function (err) {
                _this.isLoading = false;
                console.log(err);
            });
        }
    };
    RComponent.prototype.onClick = function (e) {
        console.log(e);
    };
    RComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'sp-r',
            template: __webpack_require__("../../../../../src/app/user/r/r.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/r/r.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__services_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_8__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["f" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__services_route_service__["b" /* RouteService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["e" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */]])
    ], RComponent);
    return RComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<sp-pc-layout *ngIf=\"currentUser.get('role') == 'parent' && !isDetailShown\"></sp-pc-layout>\n<sp-ss-layout *ngIf=\"currentUser.get('role') == 'teascher' && !isDetailShown\"></sp-ss-layout>-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(rs, router, ps) {
        this.rs = rs;
        this.router = router;
        this.ps = ps;
        this.currentUser = this.ps.currentUser;
        this.isDetailShown = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.rs.setBc('sticky-header');
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_route_service__["b" /* RouteService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_parse_service__["a" /* ParseService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commons_layout_layout_module__ = __webpack_require__("../../../../../src/app/commons/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_authenticated_guard__ = __webpack_require__("../../../../../src/app/guards/authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_redirect_student_guard__ = __webpack_require__("../../../../../src/app/guards/redirect-student.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_report_service__ = __webpack_require__("../../../../../src/app/services/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_widget_user_fee_dialog_user_fee_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/user-fee-dialog/user-fee-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_widget_edit_result_dialog_edit_result_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/edit-result-dialog/edit-result-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__commons_widget_widget_module__ = __webpack_require__("../../../../../src/app/commons/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__("../../../../../src/app/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__list_list_component__ = __webpack_require__("../../../../../src/app/user/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__new_new_component__ = __webpack_require__("../../../../../src/app/user/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resolvers_user__ = __webpack_require__("../../../../../src/app/resolvers/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__r_r_component__ = __webpack_require__("../../../../../src/app/user/r/r.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__ = __webpack_require__("../../../../../src/app/user/attendance/attendance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__commons_widget_compose_dialog_compose_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/compose-dialog/compose-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__commons_widget_delete_dialog_delete_dialog_component__ = __webpack_require__("../../../../../src/app/commons/widget/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__commons_layout_basic_basic_component__ = __webpack_require__("../../../../../src/app/commons/layout/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__commons_widget_link_parent_link_parent_component__ = __webpack_require__("../../../../../src/app/commons/widget/link-parent/link-parent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { CdkTableModule } from "@angular/cdk";


var ROUTES = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_20__commons_layout_basic_basic_component__["a" /* BasicComponent */],
        children: [
            {
                path: "",
                component: __WEBPACK_IMPORTED_MODULE_9__user_component__["a" /* UserComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_authenticated_guard__["a" /* AuthenticatedGuard */]],
                canActivateChild: [],
                children: [
                    {
                        path: ":id",
                        component: __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ListProfileComponent */],
                        resolve: {
                            profile: __WEBPACK_IMPORTED_MODULE_15__resolvers_user__["a" /* UserResolver */]
                        },
                        children: [
                            {
                                path: "",
                                component: __WEBPACK_IMPORTED_MODULE_16__r_r_component__["a" /* RComponent */]
                            },
                            {
                                path: "attendance",
                                component: __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["a" /* AttendanceComponent */]
                            }
                        ]
                    },
                    {
                        path: "new",
                        component: __WEBPACK_IMPORTED_MODULE_14__new_new_component__["a" /* UserNewComponent */]
                    },
                    {
                        path: "",
                        component: __WEBPACK_IMPORTED_MODULE_13__list_list_component__["a" /* UsersListComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_redirect_student_guard__["a" /* RedirectStudentGuard */]]
                    }
                ]
            }
        ]
    }
];
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__commons_layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["g" /* RouterModule */].forChild(ROUTES),
                // CdkTableModule,
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["u" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_11__commons_widget_widget_module__["a" /* WidgetModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ListProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__list_list_component__["a" /* UsersListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__new_new_component__["a" /* UserNewComponent */],
                __WEBPACK_IMPORTED_MODULE_16__r_r_component__["a" /* RComponent */],
                __WEBPACK_IMPORTED_MODULE_17__attendance_attendance_component__["a" /* AttendanceComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__resolvers_user__["a" /* UserResolver */], __WEBPACK_IMPORTED_MODULE_3__services_report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_2__guards_redirect_student_guard__["a" /* RedirectStudentGuard */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__commons_widget_compose_dialog_compose_dialog_component__["a" /* ComposeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__commons_widget_delete_dialog_delete_dialog_component__["a" /* DeleteDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_5__commons_widget_edit_result_dialog_edit_result_dialog_component__["a" /* EditResultDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_4__commons_widget_user_fee_dialog_user_fee_dialog_component__["a" /* UserFeeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_21__commons_widget_link_parent_link_parent_component__["a" /* LinkParentComponent */]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map