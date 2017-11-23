webpackJsonp(["common"],{

/***/ "../../../../../src/app/guards/redirect-student.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectStudentGuard; });
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



var RedirectStudentGuard = (function () {
    function RedirectStudentGuard(ps, router) {
        this.ps = ps;
        this.router = router;
        this.currentUser = this.ps.currentUser;
    }
    RedirectStudentGuard.prototype.canActivate = function (next, state) {
        if (this.currentUser.get("role") != "user") {
            return true;
        }
        else {
            console.log(this.currentUser.id);
            this.router.navigate(['/50x']);
            return false;
        }
    };
    RedirectStudentGuard.prototype.canActivateChild = function (childRoute, state) {
        return this.canActivate(childRoute, state);
    };
    RedirectStudentGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], RedirectStudentGuard);
    return RedirectStudentGuard;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map