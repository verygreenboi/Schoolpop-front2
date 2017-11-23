webpackJsonp(["news.module"],{

/***/ "../../../../../src/app/news/news.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commons_widget_widget_module__ = __webpack_require__("../../../../../src/app/commons/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__commons_layout_layout_module__ = __webpack_require__("../../../../../src/app/commons/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_layout_basic_basic_component__ = __webpack_require__("../../../../../src/app/commons/layout/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__commons_layout_basic_basic_component__["a" /* BasicComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_5__news_component__["d" /* NewsComponent */]
            }
        ]
    }];
var NewsModule = (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__commons_layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["g" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_0__commons_widget_widget_module__["a" /* WidgetModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__news_component__["d" /* NewsComponent */]]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ })

});
//# sourceMappingURL=news.module.chunk.js.map