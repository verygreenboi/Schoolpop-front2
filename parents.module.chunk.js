webpackJsonp(["parents.module"],{

/***/ "../../../../../src/app/parents/parent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/parents/parent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <div class=\"panel\">\n        <div class=\"panel-heading\">\n          <h1>Parents</h1>\n        </div>\n        <div class=\"panel-body\">\n          <ul class=\"team-list cycle-pager external\">\n            <li *ngFor=\"let parent of filterdParents$ | async\">\n              <a [routerLink]=\"['/profile', parent.objectId]\">\n                <span class=\"thumb-small\">\n                  <img class=\"circle\" src=\"{{parent.avatar}}\" alt=\"\">\n                </span>\n                <span class=\"name\">\n                  {{parent.firstName}} {{parent.lastName}}\n                </span>\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"panel-footer\">\n          <md-paginator\n            (page)=\"changePage($event)\"\n            [length]=\"(parentsCount$ | async)\"\n            [pageSize]=\"perPage\"\n            [pageSizeOptions]=\"[5, 10, 25, 100]\">\n          </md-paginator>\n          <!-- <sp-pager [perPage]=\"perPage\" [totalCount]=\"(parentsCount$ | async)\" [allItems]=\"(parents$ | async)\" (currentPage)=\"goToPage($event)\" ></sp-pager> -->\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/parents/parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParentComponent = (function () {
    function ParentComponent(store) {
        this.store = store;
        this.parents = [];
        this.perPage = 5;
        this.page = 1;
        this.initPageObj = {
            pageIndex: 0,
            length: 0,
            pageSize: this.perPage
        };
    }
    ParentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parents$ = this.store
            .select(function (state) { return __WEBPACK_IMPORTED_MODULE_3_lodash__["values"](state.dataState.users.parents); })
            .filter(function (p) { return p.length > 0; });
        this.parentsCount$ = this.store.select(function (state) { return state.uiState.totalCounts.parentCount; });
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__services_user_service__["d" /* GetUserCountActions */]('parent'));
        this.pageObj = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].of(this.initPageObj);
        this.filterdParents$ = this.parents$.filter(function (p) { return p !== undefined; }).map(function (parents) { return parents.slice((_this.perPage * _this.page) - _this.perPage, (_this.perPage * _this.page)); });
    };
    ParentComponent.prototype.ngOnChanges = function (changes) {
        // console.log('ngOnChanges', changes);
    };
    ParentComponent.prototype.ngAfterViewInit = function () {
        // console.log('ngAfterViewInit');
    };
    ParentComponent.prototype.changePage = function (page) {
        console.log(page);
        this.page = page.pageIndex + 1;
        this.perPage = page.pageSize;
        this.paginate(this.page, this.perPage);
    };
    ParentComponent.prototype.paginate = function (page, perPage) {
        var _this = this;
        this.filterdParents$ = this.parents$.filter(function (p) { return p !== undefined; }).map(function (parents) { return parents.slice((perPage * page) - _this.perPage, (_this.perPage * page)); });
    };
    ParentComponent.prototype.goToPage = function (page) {
        var _this = this;
        // console.log(page);
        var shouldLoadMore;
        this.parents$.map(function (p) {
            // console.log(p, page * this.perPage);
            if (p.length < page * _this.perPage) {
                shouldLoadMore = true;
            }
            else {
                shouldLoadMore = false;
            }
            return { shouldLoadMore: shouldLoadMore, parents: p };
        }).subscribe(function (sl) {
            var start = page * _this.perPage;
            var startIndex = start - _this.perPage;
            var end = start + _this.perPage;
            var endIndex = startIndex + _this.perPage;
            console.log(start, startIndex, end, endIndex);
            _this.parents = sl.parents.slice(startIndex, endIndex);
            // if (sl.shouldLoadMore) {
            // } else {
            //   this.parents = sl.parents.slice(startIndex, endIndex);
            // }
        });
    };
    ParentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-parent',
            template: __webpack_require__("../../../../../src/app/parents/parent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/parents/parent.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */]])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/parents/parents.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentsModule", function() { return ParentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_layout_basic_basic_component__ = __webpack_require__("../../../../../src/app/commons/layout/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_layout_layout_module__ = __webpack_require__("../../../../../src/app/commons/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commons_widget_widget_module__ = __webpack_require__("../../../../../src/app/commons/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__parent_component__ = __webpack_require__("../../../../../src/app/parents/parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_pager_service__ = __webpack_require__("../../../../../src/app/services/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__commons_layout_basic_basic_component__["a" /* BasicComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_7__parent_component__["a" /* ParentComponent */]
            }
        ]
    }
];
var ParentsModule = (function () {
    function ParentsModule() {
    }
    ParentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__commons_layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_6__commons_widget_widget_module__["a" /* WidgetModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(ROUTES)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__parent_component__["a" /* ParentComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_pager_service__["a" /* PagerService */]
            ]
        })
    ], ParentsModule);
    return ParentsModule;
}());



/***/ })

});
//# sourceMappingURL=parents.module.chunk.js.map