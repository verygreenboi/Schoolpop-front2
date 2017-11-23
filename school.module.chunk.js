webpackJsonp(["school.module"],{

/***/ "../../../../../src/app/guards/not-teacher-or-admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotTeacherOrAdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotTeacherOrAdminGuard = (function () {
    function NotTeacherOrAdminGuard(ps, router) {
        this.ps = ps;
        this.router = router;
    }
    NotTeacherOrAdminGuard.prototype.canActivate = function (next, state) {
        var role = this.ps.currentUser.get('role');
        if (role === 'teacher' || role === 'admin') {
            return true;
        }
        else {
            this.router.navigate(['/50x']);
            return false;
        }
    };
    NotTeacherOrAdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], NotTeacherOrAdminGuard);
    return NotTeacherOrAdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/resolvers/school.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_school_service__ = __webpack_require__("../../../../../src/app/services/school.service.ts");
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


var SchoolResolver = (function () {
    function SchoolResolver(ss) {
        this.ss = ss;
    }
    SchoolResolver.prototype.resolve = function (route, state) {
        return this.ss.getSchool();
    };
    SchoolResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_school_service__["a" /* SchoolService */]])
    ], SchoolResolver);
    return SchoolResolver;
}());



/***/ }),

/***/ "../../../../../src/app/school/add-admin/add-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/school/add-admin/add-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isSearching\" class=\"row\">\n  <div class=\"col-md-8\">\n    <h3>Add New Admin</h3>\n    <div class=\"row\">\n      <md-input-container class=\"col-md-12\">\n        <input mdInput placeholder=\"Search by username or email\" [mdAutocomplete]=\"auto\" [formControl]=\"userCtrl\">\n      </md-input-container>\n\n      <md-autocomplete #auto=\"mdAutocomplete\" class=\"col-md-8\"> \n        <md-option (click)=\"assignAdmin(user)\" *ngFor=\"let user of filteredUsers | async\" [value]=\"user.firstName +' '+user.lastName\">\n          {{ user.firstName +\" \" + user.lastName}}\n        </md-option>\n      </md-autocomplete>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <sp-datatable (event)=\"doEvent($event)\" [viewable]=\"true\" [deletable]=\"true\" [dataset]=\"dataset\">\n      <sp-column [value]=\"'id'\" [header]=\"'Id'\"></sp-column>\n      <sp-column [value]=\"'firstName'\" [header]=\"'First Name'\"></sp-column>\n      <sp-column [value]=\"'lastName'\" [header]=\"'Last Name'\"></sp-column>\n    </sp-datatable>\n    <md-paginator [length]=\"admins?.count\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\">\n    </md-paginator>\n  </div>\n</div>\n\n<sp-fab [icon]=\"isSearching ? 'clear' : 'add'\" (click)=\"toggleSearch()\"></sp-fab>"

/***/ }),

/***/ "../../../../../src/app/school/add-admin/add-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_school_service__ = __webpack_require__("../../../../../src/app/services/school.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_IEvent__ = __webpack_require__("../../../../../src/app/model/IEvent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__school_util__ = __webpack_require__("../../../../../src/app/school/school-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddAdminComponent = (function () {
    function AddAdminComponent(ls, ss, router, cd) {
        this.ls = ls;
        this.ss = ss;
        this.router = router;
        this.cd = cd;
        this.admins = {};
        this.dataset = [];
        this.isSearching = false;
        this.shoudSearch = true;
    }
    AddAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ls.setLoading(true);
        this.userCtrl = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]();
        this.sub = this.ss.getAdmin().subscribe(function (u) {
            _this.ls.setLoading(false);
            _this.admins = u;
            var ds = [];
            for (var i = 0; i < _this.admins.users.length; i++) {
                var item = Object(__WEBPACK_IMPORTED_MODULE_6__school_util__["a" /* getUserItem */])(_this.admins.users[i], i);
                ds.push(item);
            }
            _this.dataset = ds;
            // this.cd.markForCheck();
        }, function (err) {
            _this.ls.setLoading(false);
            console.log(err);
        });
        this.filteredUsers = this.userCtrl.valueChanges
            .debounceTime(500)
            .filter(function (t) { return _this.shoudSearch; })
            .switchMap(function (t) { return _this.ss.search(t); });
    };
    AddAdminComponent.prototype.doEvent = function (e) {
        var _this = this;
        // console.log(e);
        if (e.event === __WEBPACK_IMPORTED_MODULE_3__model_IEvent__["a" /* EventType */].view) {
            this.router.navigate(['/profile', e.objectId]);
        }
        else {
            this.ls.setLoading(true);
            this.ss.removeAdmin(e.objectId).subscribe(function (s) {
                _this.ls.setLoading(false);
                _this.dataset = _this.dataset.filter(function (i) { return i.objectId != e.objectId; });
                _this.dataset.forEach(function (i) {
                    if (i.id > 1) {
                        i.id--;
                    }
                });
                _this.admins.count--;
            }, function (err) {
                _this.ls.setLoading(false);
            });
        }
    };
    AddAdminComponent.prototype.toggleSearch = function () {
        this.isSearching = !this.isSearching;
    };
    AddAdminComponent.prototype.assignAdmin = function (user) {
        var _this = this;
        console.log(user);
        this.shoudSearch = false;
        this.userCtrl.disable();
        this.ls.setLoading(true);
        this.ss.addAdmin(user.id).subscribe(function (a) {
            console.log(a);
            _this.dataset.forEach(function (i) {
                i.id++;
            });
            var item = Object(__WEBPACK_IMPORTED_MODULE_6__school_util__["a" /* getUserItem */])(a, 0);
            _this.dataset.unshift(item);
            _this.ls.setLoading(false);
            _this.isSearching = false;
            _this.userCtrl.enable();
            _this.userCtrl.reset();
            _this.admins.count++;
            _this.shoudSearch = true;
        }, function (err) {
            _this.ls.setLoading(false);
            _this.userCtrl.enable();
            _this.shoudSearch = true;
            console.log(err);
        });
    };
    AddAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sp-add-admin',
            template: __webpack_require__("../../../../../src/app/school/add-admin/add-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/school/add-admin/add-admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_0__services_school_service__["a" /* SchoolService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])
    ], AddAdminComponent);
    return AddAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/school/add-teacher/add-teacher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/school/add-teacher/add-teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isSearching\" class=\"row\">\n  <div class=\"col-md-8\">\n    <h3>Add New Teacher</h3>\n    <div class=\"row\">\n      <md-input-container class=\"col-md-12\">\n        <input mdInput placeholder=\"Search by username or email\" [mdAutocomplete]=\"auto\" [formControl]=\"userCtrl\">\n      </md-input-container>\n\n      <md-autocomplete #auto=\"mdAutocomplete\" class=\"col-md-8\">\n        <md-option (click)=\"assignTeacher(user)\" *ngFor=\"let user of filteredUsers | async\" [value]=\"user.firstName +' '+user.lastName\">\n          {{ user.firstName +\" \" + user.lastName}}\n        </md-option>\n      </md-autocomplete>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <sp-datatable (event)=\"doEvent($event)\" [viewable]=\"true\" [deletable]=\"true\" [dataset]=\"dataset\">\n      <sp-column [value]=\"'id'\" [header]=\"'Id'\"></sp-column>\n      <sp-column [value]=\"'firstName'\" [header]=\"'First Name'\"></sp-column>\n      <sp-column [value]=\"'lastName'\" [header]=\"'Last Name'\"></sp-column>\n    </sp-datatable>\n    <md-paginator [length]=\"teachers?.count\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\">\n    </md-paginator>\n  </div>\n</div>\n\n<sp-fab [icon]=\"isSearching ? 'clear' : 'add'\" (click)=\"toggleSearch()\"></sp-fab>"

/***/ }),

/***/ "../../../../../src/app/school/add-teacher/add-teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTeacherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_IEvent__ = __webpack_require__("../../../../../src/app/model/IEvent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_school_service__ = __webpack_require__("../../../../../src/app/services/school.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__school_util__ = __webpack_require__("../../../../../src/app/school/school-util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddTeacherComponent = (function () {
    function AddTeacherComponent(ls, ss, router, cd) {
        this.ls = ls;
        this.ss = ss;
        this.router = router;
        this.cd = cd;
        this.teachers = {};
        this.dataset = [];
        this.isSearching = false;
        this.shoudSearch = true;
    }
    AddTeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ls.setLoading(true);
        this.userCtrl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]();
        this.sub = this.ss.getTeachers().subscribe(function (u) {
            _this.ls.setLoading(false);
            _this.teachers = u;
            var ds = [];
            for (var i = 0; i < _this.teachers.users.length; i++) {
                var item = Object(__WEBPACK_IMPORTED_MODULE_6__school_util__["a" /* getUserItem */])(_this.teachers.users[i], i);
                ds.push(item);
            }
            _this.dataset = ds;
            // this.cd.markForCheck();
        }, function (err) {
            _this.ls.setLoading(false);
            console.log(err);
        });
        this.filteredUsers = this.userCtrl.valueChanges
            .debounceTime(500)
            .filter(function (t) { return _this.shoudSearch; })
            .switchMap(function (t) { return _this.ss.search(t); });
    };
    AddTeacherComponent.prototype.assignTeacher = function (user) {
        var _this = this;
        console.log(user);
        this.shoudSearch = false;
        this.userCtrl.disable();
        this.ls.setLoading(true);
        this.ss.addTeacher(user.id).subscribe(function (a) {
            console.log(a);
            _this.dataset.forEach(function (i) {
                i.id++;
            });
            var item = Object(__WEBPACK_IMPORTED_MODULE_6__school_util__["a" /* getUserItem */])(a, 0);
            _this.dataset.unshift(item);
            _this.ls.setLoading(false);
            _this.isSearching = false;
            _this.userCtrl.enable();
            _this.userCtrl.reset();
            _this.teachers.count++;
            _this.shoudSearch = true;
        }, function (err) {
            _this.ls.setLoading(false);
            _this.userCtrl.enable();
            _this.shoudSearch = true;
            console.log(err);
        });
    };
    AddTeacherComponent.prototype.doEvent = function (e) {
        var _this = this;
        // console.log(e);
        if (e.event === __WEBPACK_IMPORTED_MODULE_0__model_IEvent__["a" /* EventType */].view) {
            this.router.navigate(['/profile', e.objectId]);
        }
        else {
            this.ls.setLoading(true);
            this.ss.removeAdmin(e.objectId).subscribe(function (s) {
                _this.ls.setLoading(false);
                _this.dataset = _this.dataset.filter(function (i) { return i.objectId != e.objectId; });
                _this.dataset.forEach(function (i) {
                    if (i.id > 1) {
                        i.id--;
                    }
                });
                _this.teachers.count--;
            }, function (err) {
                _this.ls.setLoading(false);
            });
        }
    };
    AddTeacherComponent.prototype.toggleSearch = function () {
        this.isSearching = !this.isSearching;
    };
    AddTeacherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'sp-add-teacher',
            template: __webpack_require__("../../../../../src/app/school/add-teacher/add-teacher.component.html"),
            styles: [__webpack_require__("../../../../../src/app/school/add-teacher/add-teacher.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_1__services_school_service__["a" /* SchoolService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["ChangeDetectorRef"]])
    ], AddTeacherComponent);
    return AddTeacherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/school/main-config/main-config.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 18px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/school/main-config/main-config.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"editForm\">\n  <div class=\"row\">\n    <md-input-container class=\"col-md-12\">\n      <input mdInput placeholder=\"School Name\" formControlName=\"commonName\">\n    </md-input-container>\n    \n    <md-input-container class=\"col-md-12\">\n      <input mdInput placeholder=\"School Motto\" formControlName=\"motto\">\n    </md-input-container>\n\n    <md-input-container class=\"col-md-12\">\n      <textarea mdInput placeholder=\"Address\" formControlName=\"address\"></textarea>\n    </md-input-container>\n\n    <div class=\"col-md-2 pull-right\">\n      <button [disabled]=\"!editForm.valid || isLoading\" md-raised-button (click)=\"updateSchool()\">Save</button>\n    </div>\n  </div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/school/main-config/main-config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_school_service__ = __webpack_require__("../../../../../src/app/services/school.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainConfigComponent = (function () {
    function MainConfigComponent(ls, ss, ps, fb, router, route) {
        this.ls = ls;
        this.ss = ss;
        this.ps = ps;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.school = this.ps.currentUser.get("school");
        this.commonName = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](this.school.get("commonName") ? this.school.get("commonName") : '', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required);
        this.isLoading = false;
    }
    MainConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ls.setLoading(true);
        this.isLoading = true;
        this.editForm = this.fb.group({
            commonName: this.commonName,
            motto: [this.school.get('motto') ? this.school.get('motto') : ''],
            address: [this.school.get('address') ? this.school.get('address') : '', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
        });
        this.sub = this.ss.getSchool().subscribe(function (s) {
            _this.ls.setLoading(false);
            _this.isLoading = false;
            _this.school = s;
            _this.editForm.setValue({
                commonName: _this.school.get('commonName'),
                motto: _this.school.get('motto'),
                address: _this.school.get('address')
            });
        }, function (err) {
            console.log(err);
            _this.isLoading = false;
            _this.ls.setLoading(false);
            if (err.code === 100) {
                // this.router.navigate(['50x']);
            }
        });
    };
    MainConfigComponent.prototype.ngOnDestroy = function () {
        this.ls.setLoading(false);
        this.sub.unsubscribe();
    };
    MainConfigComponent.prototype.updateSchool = function () {
        var _this = this;
        this.ls.setLoading(true);
        this.isLoading = true;
        this.ss.updateSchool(this.editForm.value).subscribe(function (s) {
            _this.ls.setLoading(false);
            _this.isLoading = false;
        }, function (e) {
            _this.ls.setLoading(false);
            _this.isLoading = false;
            console.log(e);
        });
    };
    MainConfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sp-main-config',
            template: __webpack_require__("../../../../../src/app/school/main-config/main-config.component.html"),
            styles: [__webpack_require__("../../../../../src/app/school/main-config/main-config.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_2__services_school_service__["a" /* SchoolService */],
            __WEBPACK_IMPORTED_MODULE_3__services_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], MainConfigComponent);
    return MainConfigComponent;
}());



/***/ }),

/***/ "../../../../../src/app/school/school-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUserItem;
function getUserItem(user, index) {
    var item = {};
    item.id = index + 1;
    item.objectId = user.id;
    item.firstName = user.get('firstName');
    item.lastName = user.get('lastName');
    return item;
}


/***/ }),

/***/ "../../../../../src/app/school/school.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/school/school.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2\">\n      <md-card>\n        <nav md-tab-nav-bar>\n          <a md-tab-link\n            *ngFor=\"let link of navLinks\"\n            [routerLink]=\"link.link\"\n            routerLinkActive #rla=\"routerLinkActive\"\n            [active]=\"rla.isActive\">\n            {{link.title}}\n          </a>\n        </nav>\n        <router-outlet></router-outlet>\n      </md-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/school/school.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
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



var SchoolComponent = (function () {
    function SchoolComponent(rs, router, route) {
        this.rs = rs;
        this.router = router;
        this.route = route;
        this.navLinks = [
            {
                title: 'Main',
                link: './main'
            },
            {
                title: 'Administrators',
                link: './admin'
            },
            {
                title: 'Teachers',
                link: './teacher'
            },
            {
                title: 'Term',
                link: './term'
            },
        ];
        this.rs.setBc('sticky-header');
    }
    SchoolComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.children[0] == undefined) {
            this.router.navigate(['school', 'main']);
        }
    };
    SchoolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sp-school',
            template: __webpack_require__("../../../../../src/app/school/school.component.html"),
            styles: [__webpack_require__("../../../../../src/app/school/school.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_route_service__["b" /* RouteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SchoolComponent);
    return SchoolComponent;
}());



/***/ }),

/***/ "../../../../../src/app/school/school.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolModule", function() { return SchoolModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commons_layout_layout_module__ = __webpack_require__("../../../../../src/app/commons/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_layout_basic_basic_component__ = __webpack_require__("../../../../../src/app/commons/layout/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolvers_school_resolver__ = __webpack_require__("../../../../../src/app/resolvers/school.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__school_component__ = __webpack_require__("../../../../../src/app/school/school.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_admin_add_admin_component__ = __webpack_require__("../../../../../src/app/school/add-admin/add-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_config_main_config_component__ = __webpack_require__("../../../../../src/app/school/main-config/main-config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__commons_widget_widget_module__ = __webpack_require__("../../../../../src/app/commons/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_school_service__ = __webpack_require__("../../../../../src/app/services/school.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_teacher_add_teacher_component__ = __webpack_require__("../../../../../src/app/school/add-teacher/add-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__term_term_component__ = __webpack_require__("../../../../../src/app/school/term/term.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_not_teacher_or_admin_guard__ = __webpack_require__("../../../../../src/app/guards/not-teacher-or-admin.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__commons_layout_basic_basic_component__["a" /* BasicComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_15__guards_not_teacher_or_admin_guard__["a" /* NotTeacherOrAdminGuard */]
        ],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_6__school_component__["a" /* SchoolComponent */],
                children: [
                    {
                        path: 'admin',
                        component: __WEBPACK_IMPORTED_MODULE_9__add_admin_add_admin_component__["a" /* AddAdminComponent */]
                    },
                    {
                        path: 'main',
                        component: __WEBPACK_IMPORTED_MODULE_10__main_config_main_config_component__["a" /* MainConfigComponent */]
                    },
                    {
                        path: 'teacher',
                        component: __WEBPACK_IMPORTED_MODULE_13__add_teacher_add_teacher_component__["a" /* AddTeacherComponent */]
                    },
                    {
                        path: 'term',
                        component: __WEBPACK_IMPORTED_MODULE_14__term_term_component__["a" /* TermComponent */]
                    }
                ]
            }
        ]
    }
];
var SchoolModule = (function () {
    function SchoolModule() {
    }
    SchoolModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__commons_layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["v" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["g" /* RouterModule */].forChild(ROUTES),
                __WEBPACK_IMPORTED_MODULE_11__commons_widget_widget_module__["a" /* WidgetModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__school_component__["a" /* SchoolComponent */], __WEBPACK_IMPORTED_MODULE_9__add_admin_add_admin_component__["a" /* AddAdminComponent */], __WEBPACK_IMPORTED_MODULE_10__main_config_main_config_component__["a" /* MainConfigComponent */], __WEBPACK_IMPORTED_MODULE_13__add_teacher_add_teacher_component__["a" /* AddTeacherComponent */], __WEBPACK_IMPORTED_MODULE_14__term_term_component__["a" /* TermComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__guards_not_teacher_or_admin_guard__["a" /* NotTeacherOrAdminGuard */],
                __WEBPACK_IMPORTED_MODULE_2__resolvers_school_resolver__["a" /* SchoolResolver */],
                __WEBPACK_IMPORTED_MODULE_12__services_school_service__["a" /* SchoolService */]
            ]
        })
    ], SchoolModule);
    return SchoolModule;
}());



/***/ }),

/***/ "../../../../../src/app/school/term/term.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3>span {\n  font-size: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/school/term/term.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"term\">\n  <form [formGroup]=\"termForm\">\n    <div class=\"col-md-12\">\n      <h3>\n        Current term: {{term?.get('title')}}\n        <span *ngIf=\"after(term?.get('startDate')) && beforeOrSame(term?.get('endDate')) \" class=\"label label-danger\">On Vacation</span>\n      </h3>\n    </div>\n\n    <md-input-container *ngIf=\"isNewTermEdit\" class=\"col-md-8\">\n      <input formControlName=\"editTitle\" mdInput placeholder=\"eg. Second Term\">\n    </md-input-container>\n\n    <md-input-container class=\"col-md-8\">\n      <input formControlName=\"startDate\" mdInput [mdDatepicker]=\"picker\" placeholder=\"Start Date\">\n      <button mdSuffix [mdDatepickerToggle]=\"picker\"></button>\n    </md-input-container>\n    <md-datepicker #picker></md-datepicker>\n    \n    <md-input-container class=\"col-md-8\">\n      <input formControlName=\"endDate\" mdInput [mdDatepicker]=\"picker2\" placeholder=\"End Date\">\n      <button mdSuffix [mdDatepickerToggle]=\"picker2\"></button>\n    </md-input-container>\n    <md-datepicker #picker2></md-datepicker>\n\n    <div class=\"col-md-12 m-t-20\">\n      <button [ngClass]=\"{'btn-success': isNewTermEdit, 'btn-danger': !isNewTermEdit}\" *ngIf=\"after(term?.get('startDate')) && beforeOrSame(term?.get('endDate')) \" (click)=\"newTerm()\" class=\"btn\">Start New Term</button>\n      \n      <button [ngClass]=\"{'btn-danger': isNewTermEdit, 'btn-info': !isNewTermEdit}\" *ngIf=\"!after(term?.get('startDate')) || !beforeOrSame(term?.get('endDate')) \" (click)=\"updateTerm()\" class=\"btn\">Update Term</button>\n    </div>\n    \n    \n\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/school/term/term.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_school_service__ = __webpack_require__("../../../../../src/app/services/school.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parse_service__ = __webpack_require__("../../../../../src/app/services/parse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TermComponent = (function () {
    function TermComponent(ps, ss, fb) {
        var _this = this;
        this.ps = ps;
        this.ss = ss;
        this.isNewTermEdit = false;
        this.termForm = fb.group({
            editTitle: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            startDate: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            endDate: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
        });
        this.termForm.controls.endDate.valueChanges.subscribe(function (date) {
            var d = __WEBPACK_IMPORTED_MODULE_3_moment__(date, 'MM/DD/YYYY').toDate();
            if (_this.beforeOrSame(d)) {
                _this.termForm.controls.endDate.setErrors({ hasVacated: true });
            }
        });
    }
    TermComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ss.getTerm().subscribe(function (s) {
            _this.term = s;
            _this.termForm.patchValue({
                editTitle: s.get('title'),
                startDate: __WEBPACK_IMPORTED_MODULE_3_moment__(s.get('startDate')).format('MM/DD/YYYY'),
                endDate: __WEBPACK_IMPORTED_MODULE_3_moment__(s.get('endDate')).format('MM/DD/YYYY')
            });
            if (_this.after(s.get('startDate'))) {
                _this.termForm.controls.startDate.disable();
            }
            if (_this.beforeOrSame(s.get('endDate'))) {
                _this.termForm.controls.endDate.disable();
            }
            else {
                _this.isNewTermEdit = true;
            }
        });
    };
    TermComponent.prototype.updateTerm = function () {
        var _this = this;
        console.log(this.termForm.value);
        if (!this.isNewTermEdit) {
            this.termForm.controls.startDate.enable();
            this.termForm.controls.endDate.enable();
            this.isNewTermEdit = true;
        }
        else {
            var term = {
                startDate: __WEBPACK_IMPORTED_MODULE_3_moment__(this.termForm.controls.startDate.value).add(8, 'hours').toDate(),
                endDate: __WEBPACK_IMPORTED_MODULE_3_moment__(this.termForm.controls.endDate.value).add(8, 'hours').toDate(),
                title: this.termForm.controls.editTitle.value
            };
            this.ss.updateTerm(this.term, true, term).subscribe(function (t) {
                _this.isNewTermEdit = false;
            }, function (err) {
                console.log(err);
            });
        }
    };
    TermComponent.prototype.newTerm = function () {
        var _this = this;
        if (!this.isNewTermEdit) {
            this.termForm.patchValue({
                startDate: __WEBPACK_IMPORTED_MODULE_3_moment__().format('MM/DD/YYYY'),
                endDate: __WEBPACK_IMPORTED_MODULE_3_moment__().add(3, 'months').format('MM/DD/YYYY')
            });
            this.termForm.controls.startDate.enable();
            this.termForm.controls.endDate.enable();
            this.isNewTermEdit = true;
        }
        else {
            var term = {
                startDate: __WEBPACK_IMPORTED_MODULE_3_moment__(this.termForm.controls.startDate.value).toDate(),
                endDate: __WEBPACK_IMPORTED_MODULE_3_moment__(this.termForm.controls.endDate.value).toDate(),
                title: this.termForm.controls.editTitle.value
            };
            this.ss.createTerm(this.term, term).subscribe(function (t) {
                _this.term = t;
                _this.isNewTermEdit = false;
            }, function (err) {
                console.log(err);
            });
        }
    };
    TermComponent.prototype.beforeOrSame = function (endDate) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(endDate).isSameOrBefore(__WEBPACK_IMPORTED_MODULE_3_moment__());
    };
    TermComponent.prototype.after = function (startDate) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(startDate).isBefore(__WEBPACK_IMPORTED_MODULE_3_moment__());
    };
    TermComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sp-term',
            template: __webpack_require__("../../../../../src/app/school/term/term.component.html"),
            styles: [__webpack_require__("../../../../../src/app/school/term/term.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_0__services_school_service__["a" /* SchoolService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]])
    ], TermComponent);
    return TermComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/school.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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




var Parse = __webpack_require__("../../../../parse/index.js");
var SchoolService = (function () {
    function SchoolService(ps, us) {
        var _this = this;
        this.ps = ps;
        this.us = us;
        this.admins = {};
        this.adminSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["b" /* Subject */]();
        this.school = this.ps.currentUser.get('school');
        this.getAdmin().subscribe(function (a) {
            _this.admins = a;
            _this.adminSubject.next(_this.admins);
        });
    }
    SchoolService.prototype.getSchool = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */](function (observer) {
            _this.school.fetch().then(function (s) {
                observer.next(s);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    SchoolService.prototype.getTerm = function () {
        return this.getSchool().flatMap(function (s) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */](function (observer) {
                s.get('term').fetch().then(function (t) {
                    observer.next(t);
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                });
            });
        });
    };
    SchoolService.prototype.updateSchool = function (values) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */](function (observer) {
            _this.school.set('commonName', values.commonName);
            _this.school.set('motto', values.motto);
            _this.school.set('address', values.address);
            _this.school.save().then(function (s) {
                observer.next(s);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    SchoolService.prototype.createTerm = function (currentTerm, newTerm) {
        var _this = this;
        var newT = this.newTerm(newTerm);
        var oldT = this.updateTerm(currentTerm, false);
        var term;
        return oldT.switchMap(function () { return newT; })
            .flatMap(function (t) {
            term = t;
            var school = _this.ps.currentUser.get('school');
            school.set('term', t);
            return _this.ps.save(school);
        }).map(function () { return term; });
    };
    SchoolService.prototype.updateTerm = function (currentTerm, isNewTerm, newTerm) {
        currentTerm.set('isCurrentTerm', isNewTerm);
        if (newTerm) {
            currentTerm.set('startDate', newTerm.startDate);
            currentTerm.set('endDate', newTerm.endDate);
            currentTerm.set('title', newTerm.title);
        }
        return this.ps.save(currentTerm);
    };
    SchoolService.prototype.newTerm = function (term) {
        var t = new Parse.Object('Term');
        t.set('startDate', term.startDate);
        t.set('endDate', term.endDate);
        t.set('title', term.title);
        t.set('isCurrentTerm', true);
        return this.ps.save(t);
    };
    SchoolService.prototype.getAdmin = function (limit, skip) {
        if (limit === void 0) { limit = 10; }
        if (skip === void 0) { skip = 0; }
        return this.us.getUsersByRole(this.school, 'admin', limit, skip);
    };
    SchoolService.prototype.getTeachers = function (limit, skip) {
        if (limit === void 0) { limit = 10; }
        if (skip === void 0) { skip = 0; }
        return this.us.getUsersByRole(this.school, 'teacher', limit, skip);
    };
    SchoolService.prototype.removeAdmin = function (id) {
        var user = this.us.getUserPointer(id);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */](function (observer) {
            Parse.Cloud.run('removeAdmin', { user: user }).then(function (res) {
                observer.next(res);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    SchoolService.prototype.addAdmin = function (id) {
        var user = this.us.getUserPointer(id);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */](function (observer) {
            Parse.Cloud.run('addAdmin', { user: user }).then(function (res) {
                observer.next(res);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    SchoolService.prototype.addTeacher = function (id) {
        var user = this.us.getUserPointer(id);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */](function (observer) {
            Parse.Cloud.run('addTeacher', { user: user }).then(function (res) {
                observer.next(res);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
    };
    SchoolService.prototype.search = function (term) {
        return this.us.searchUserByTerm(term, 'none')
            .flatMap(function (u) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].from(u); })
            .map(function (user) {
            var u = {
                id: user.id,
                firstName: user.get('firstName'),
                lastName: user.get('lastName'),
                email: user.get('email')
            };
            return u;
        }).toArray();
    };
    SchoolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_0__user_service__["e" /* UserService */]])
    ], SchoolService);
    return SchoolService;
}());



/***/ })

});
//# sourceMappingURL=school.module.chunk.js.map