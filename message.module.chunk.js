webpackJsonp(["message.module"],{

/***/ "../../../../../src/app/message/compose-pop-up/compose-pop-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/compose-pop-up/compose-pop-up.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  compose-pop-up works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/message/compose-pop-up/compose-pop-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposePopUpComponent; });
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


var ComposePopUpComponent = (function () {
    function ComposePopUpComponent(router) {
        this.router = router;
    }
    ComposePopUpComponent.prototype.ngOnInit = function () {
    };
    ComposePopUpComponent.prototype.closePopup = function () {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.router.navigate([{ outlets: { popup: null } }]);
    };
    ComposePopUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-compose-pop-up',
            template: __webpack_require__("../../../../../src/app/message/compose-pop-up/compose-pop-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/compose-pop-up/compose-pop-up.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], ComposePopUpComponent);
    return ComposePopUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message/compose/compose.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  border: 1px solid #dfdfdf;\n  box-shadow: none;\n  border-radius: 0;\n}\n\n.dropzone {\n  min-height: 200px;\n  display: table;\n  width: 100%;\n  background-color: #eee;\n  border: dotted 1px #aaa;\n}\n\n.text-wrapper {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.centered {\n  font-family: sans-serif;\n  font-size: 1.3em;\n  font-weight: bold;\n  text-align: center;\n}\n\n.file {\n  margin-left: 10px;\n}\n\n.mat-icon {\n  height: 96px;\n  width: 96px;\n}\n\n.title {\n  font-weight: bold;\n  margin-left: 12px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/compose/compose.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox-body\">\n  <div class=\"compose-mail\">\n    <form [formGroup]=\"composeForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\n      <div class=\"form-group\">\n        <label for=\"to\" class=\"col-sm-1 control-label\">To</label>\n        <div class=\"col-sm-11\">\n          <input formControlName=\"to\" type=\"text\" tabindex=\"1\" id=\"to\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"subject\" class=\"col-sm-1 control-label\">Subject</label>\n        <div class=\"col-sm-11\">\n          <input formControlName=\"subject\" type=\"text\" tabindex=\"1\" id=\"subject\" class=\"form-control\">\n        </div>\n      </div>\n      <div class=\"compose-editor form-group\">\n        <label for=\"subject\" class=\"col-sm-1 control-label\">Message</label>\n        <div class=\"col-sm-11\">\n          <textarea [froalaEditor]=\"{height: 250}\" formControlName=\"text\" class=\"wysihtml5 form-control\" rows=\"9\"></textarea>\n        </div>\n\n        <div class=\"col-sm-11 col-md-offset-1 m-t-20\">\n          <div class=\"dropzone\" spDnd (onFileDrop)=\"onDrop($event)\">\n            <div class=\"text-wrapper\">\n              <div *ngIf=\"fileList.length == 0\" class=\"centered\">Drop your file here!</div>\n              <div class=\"file-list row\">\n                <sp-file-uploader class=\"file col-md-2\" *ngFor=\"let file of fileList\" [file]=\"file\" (onFileUploaded)=\"addToAttachments($event)\" ></sp-file-uploader>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"compose-btn pull-right\">\n        <button [disabled]=\"!composeForm.valid && canSend()\" class=\"btn  btn-success\" type=\"submit\"> Send Mail</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/message/compose/compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loading_service__ = __webpack_require__("../../../../../src/app/services/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ComposeComponent = (function () {
    function ComposeComponent(ls, ms, us, iconRegistry, snackBar, sanitizer, router, fb) {
        this.ls = ls;
        this.ms = ms;
        this.us = us;
        this.snackBar = snackBar;
        this.router = router;
        this.fb = fb;
        this.messageEmitter = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.to = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](['Enter Username or Email']);
        this.fileList = [];
        this.fileListClone = [];
        this.attachment = [];
        iconRegistry.addSvgIcon('png', sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/png.svg'));
        iconRegistry.addSvgIcon('file', sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/file.svg'));
        iconRegistry.addSvgIcon('svg', sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/svg.svg'));
        iconRegistry.addSvgIcon('pdf', sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/pdf.svg'));
        this.composeForm = fb.group({
            to: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            subject: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            text: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
        });
    }
    ComposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.composeForm.controls['to'].valueChanges
            .filter(function (val) { return val.length >= 2; })
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(function (val) { return _this.us.userExists(val); })
            .subscribe(function (u) {
            if (u != null) {
                _this.composeForm.controls['to'].setErrors(u);
            }
        }, function (e) { return console.log(e); });
    };
    ComposeComponent.prototype.onSubmit = function () {
        var message = this.composeForm.value;
        message.attachments = this.attachment;
        this.messageEmitter.emit(message);
    };
    ComposeComponent.prototype.onDrop = function (e) {
        if (this.fileList.length == 3) {
            this.showSnack("Maximum number of files attached", 2000);
        }
        else {
            if (e.type.match('image/*') || e.type === 'application/pdf') {
                this.fileList.unshift({
                    file: e,
                    isDirty: true
                });
            }
            else {
                this.showSnack("This file format is not supported", 2000);
            }
        }
    };
    ComposeComponent.prototype.addToAttachments = function (attachment) {
        this.attachment.push(attachment.pf);
        this.fileListClone.push(attachment.clone);
    };
    ComposeComponent.prototype.showSnack = function (message, duration, action) {
        this.snackBar.open(message, action, {
            duration: duration
        });
    };
    ComposeComponent.prototype.canSend = function () {
        __WEBPACK_IMPORTED_MODULE_8_lodash__["each"](this.fileListClone, function (file) {
            if (file.isDirty) {
                return false;
            }
        });
        return true;
    };
    ComposeComponent.prototype.getIcon = function (file) {
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])("onMessage"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"])
    ], ComposeComponent.prototype, "messageEmitter", void 0);
    ComposeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'sp-compose',
            template: __webpack_require__("../../../../../src/app/message/compose/compose.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/compose/compose.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["e" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]])
    ], ComposeComponent);
    return ComposeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message/inbox/inbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox-head\">\n  <div class=\"mail-option\"></div>\n</div>\n<div class=\"inbox-body no-pad\">\n  <table class=\"table table-inbox table-hover\">\n    <tbody>\n      <ng-container *ngFor=\"let mail of inbox\">\n        <tr (click)=\"viewMessage(mail)\" [ngClass]=\"{'unread': !mail.isRead }\">\n          <td class=\"inbox-small-cells\">\n            <label class=\"checkbox-custom check-success\">\n              <input type=\"checkbox\" value=\"c1\" id=\"c1\"> <label for=\"c1\"> </label>\n            </label>\n          </td>\n          <td *ngIf=\"!mail.isRead\" class=\"inbox-small-cells\"><i class=\"fa fa-star inbox-started\"></i></td>\n          <td class=\"view-message dont-show\">\n            {{mail.from.firstName}} {{mail.from.lastName}}\n          </td>\n          <td class=\"view-message\">\n            {{mail.subject}}\n          </td>\n          <td>\n            {{formatTime(mail.createdAt)}}\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/message/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moment_util__ = __webpack_require__("../../../../../src/app/moment-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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





var InboxComponent = (function () {
    function InboxComponent(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.inbox = [];
        this.moment = new __WEBPACK_IMPORTED_MODULE_2__moment_util__["a" /* MomentUtil */]().getMoment();
        store.subscribe(function (state) {
            _this.inbox = __WEBPACK_IMPORTED_MODULE_4_lodash__["values"](state.dataState.inbox);
        });
    }
    InboxComponent.prototype.ngOnInit = function () {
    };
    InboxComponent.prototype.formatTime = function (date) {
        return this.moment(date).fromNow();
    };
    InboxComponent.prototype.viewMessage = function (mail) {
        this.router.navigate(['/message', mail.objectId]);
    };
    InboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sp-inbox',
            template: __webpack_require__("../../../../../src/app/message/inbox/inbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["f" /* Store */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper no-pad\">\n  <div class=\"mail-box\">\n    <aside class=\"sm-side\">\n      <div class=\"m-title\">\n        <h3>{{getLabel()}}</h3>\n        <span *ngIf=\"currentSection == 0 || currentSection == 2\">{{inboxUnreadCount}} unread mail</span>\n      </div>\n      <div class=\"inbox-body\">\n        <a class=\"btn btn-compose\" (click)=\"changeCurrentMessageSection(3)\">\n          Compose\n        </a>\n      </div>\n      <ul class=\"inbox-nav inbox-divider\">\n        <li [ngClass]=\"{'active': currentSection == 0}\">\n          <a (click)=\"changeCurrentMessageSection(0)\">\n            <i class=\"fa fa-inbox\"></i> Inbox\n            <span class=\"label label-danger pull-right\">{{inbox?.length}}</span>\n          </a>\n        </li>\n        <li [ngClass]=\"{'active': currentSection == 1}\">\n          <a (click)=\"changeCurrentMessageSection(1)\">\n            <i class=\"fa fa-envelope\"></i> Sent\n            <span class=\"label label-danger pull-right\">{{outbox?.length}}</span>\n          </a>\n        </li>\n      </ul>\n    </aside>\n    <aside class=\"lg-side\">\n      <div class=\"inbox-head\">\n        <div class=\"mail-option\"></div>\n      </div>\n      <sp-message-list [messages]=\"getMessages()\" *ngIf=\"currentSection == 0 || currentSection == 1\"></sp-message-list>\n      <sp-view-message [mail]=\"mail\" *ngIf=\"currentSection == 2\"></sp-view-message>\n      <sp-compose *ngIf=\"currentSection == 3\" (onMessage)=\"dispatchMessage($event)\"></sp-compose>\n    </aside>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_route_service__ = __webpack_require__("../../../../../src/app/services/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_action__ = __webpack_require__("../../../../../src/app/message/message-action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_window_ref_service__ = __webpack_require__("../../../../../src/app/services/window-ref.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessageComponent = (function () {
    function MessageComponent(store, ms, rs, ref, windowRef) {
        this.store = store;
        this.ms = ms;
        this.rs = rs;
        this.ref = ref;
        this.inbox = [];
        this.outbox = [];
        this.currentSection = 0;
        this._window = windowRef.nativeWindow;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rs.setBc('sticky-header');
        this._window.scroll(0, 0);
        this.store.subscribe(function (state) {
            _this.inbox = __WEBPACK_IMPORTED_MODULE_5_lodash__["values"](state.dataState.inbox);
            _this.outbox = __WEBPACK_IMPORTED_MODULE_5_lodash__["values"](state.dataState.outbox);
            _this.currentSection = state.uiState.currentMailSection;
            _this.mail = state.viewMessageState.message;
            _this.inboxUnreadCount = state.uiState.currentUnread;
            _this.ref.markForCheck();
        });
    };
    MessageComponent.prototype.changeCurrentMessageSection = function (section) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__message_action__["b" /* ChangeCurrentMessageSection */](section));
    };
    MessageComponent.prototype.getMessages = function () {
        if (this.currentSection === 0) {
            return this.getMessageVMFrom(this.inbox);
        }
        else if (this.currentSection === 1) {
            return this.getMessageVMTo(this.outbox);
        }
    };
    MessageComponent.prototype.getMessageVMFrom = function (m) {
        var dataset = [];
        __WEBPACK_IMPORTED_MODULE_5_lodash__["each"](m, function (message) {
            var mail = {
                objectId: message.objectId,
                fullName: message.from.firstName + ' ' + message.from.lastName,
                subject: message.subject,
                createdAt: message.createdAt,
                isRead: message.isRead,
            };
            dataset.push(mail);
        });
        return dataset;
    };
    MessageComponent.prototype.getMessageVMTo = function (m) {
        var dataset = [];
        __WEBPACK_IMPORTED_MODULE_5_lodash__["each"](m, function (message) {
            var mail = {
                objectId: message.objectId,
                fullName: message.to.firstName + ' ' + message.to.lastName,
                subject: message.subject,
                isRead: true,
                createdAt: message.createdAt
            };
            dataset.push(mail);
        });
        return dataset;
    };
    MessageComponent.prototype.getLabel = function () {
        switch (this.currentSection) {
            case 0:
                return 'Inbox';
            case 1:
                return 'Sent';
            case 3:
                return 'Compose';
            default:
                return 'Inbox';
        }
    };
    MessageComponent.prototype.dispatchMessage = function (message) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__message_action__["p" /* SendMessageAction */](message));
    };
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-message',
            template: __webpack_require__("../../../../../src/app/message/message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/message.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["f" /* Store */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_route_service__["b" /* RouteService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_6__services_window_ref_service__["a" /* WindowRefService */]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message/message.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__commons_layout_layout_module__ = __webpack_require__("../../../../../src/app/commons/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_route_module__ = __webpack_require__("../../../../../src/app/message/message.route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__compose_compose_component__ = __webpack_require__("../../../../../src/app/message/compose/compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__compose_pop_up_compose_pop_up_component__ = __webpack_require__("../../../../../src/app/message/compose-pop-up/compose-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__commons_widget_widget_module__ = __webpack_require__("../../../../../src/app/commons/widget/widget.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inbox_inbox_component__ = __webpack_require__("../../../../../src/app/message/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__outbox_outbox_component__ = __webpack_require__("../../../../../src/app/message/outbox/outbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__commons_directives_directives_module__ = __webpack_require__("../../../../../src/app/commons/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__view_view_component__ = __webpack_require__("../../../../../src/app/message/view/view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var MessageModule = (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__commons_layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["t" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__commons_widget_widget_module__["a" /* WidgetModule */],
                __WEBPACK_IMPORTED_MODULE_13__commons_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_12_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__message_route_module__["a" /* routes */])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__message_component__["a" /* MessageComponent */], __WEBPACK_IMPORTED_MODULE_6__compose_compose_component__["a" /* ComposeComponent */], __WEBPACK_IMPORTED_MODULE_7__compose_pop_up_compose_pop_up_component__["a" /* ComposePopUpComponent */], __WEBPACK_IMPORTED_MODULE_9__inbox_inbox_component__["a" /* InboxComponent */], __WEBPACK_IMPORTED_MODULE_10__outbox_outbox_component__["a" /* OutboxComponent */], __WEBPACK_IMPORTED_MODULE_15__view_view_component__["a" /* ViewMessageComponent */]],
            providers: []
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ }),

/***/ "../../../../../src/app/message/message.route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_view_component__ = __webpack_require__("../../../../../src/app/message/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_layout_basic_basic_component__ = __webpack_require__("../../../../../src/app/commons/layout/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose_compose_component__ = __webpack_require__("../../../../../src/app/message/compose/compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose_pop_up_compose_pop_up_component__ = __webpack_require__("../../../../../src/app/message/compose-pop-up/compose-pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inbox_inbox_component__ = __webpack_require__("../../../../../src/app/message/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__outbox_outbox_component__ = __webpack_require__("../../../../../src/app/message/outbox/outbox.component.ts");







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__commons_layout_basic_basic_component__["a" /* BasicComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__message_component__["a" /* MessageComponent */]
            },
            {
                path: 'compose',
                component: __WEBPACK_IMPORTED_MODULE_3__compose_compose_component__["a" /* ComposeComponent */],
                children: [
                    {
                        path: ':id',
                        component: __WEBPACK_IMPORTED_MODULE_4__compose_pop_up_compose_pop_up_component__["a" /* ComposePopUpComponent */]
                    }
                ]
            },
            {
                path: 'inbox',
                component: __WEBPACK_IMPORTED_MODULE_5__inbox_inbox_component__["a" /* InboxComponent */]
            },
            {
                path: 'outbox',
                component: __WEBPACK_IMPORTED_MODULE_6__outbox_outbox_component__["a" /* OutboxComponent */]
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_1__view_view_component__["a" /* ViewMessageComponent */]
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/message/outbox/outbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/outbox/outbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox-head\">\n  <div class=\"mail-option\"></div>\n</div>\n<div class=\"inbox-body no-pad\">\n  <table class=\"table table-inbox table-hover\">\n    <tbody>\n      <ng-container *ngFor=\"let mail of outbox\">\n        <tr [ngClass]=\"{'unread': !mail.isRead }\">\n          <td class=\"view-message dont-show\">\n            {{mail.to.firstName}} {{mail.to.lastName}}\n          </td>\n          <td class=\"view-message\">\n            {{mail.subject}}\n          </td>\n          <td>\n            {{formatTime(mail.createdAt)}}\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/message/outbox/outbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moment_util__ = __webpack_require__("../../../../../src/app/moment-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OutboxComponent = (function () {
    function OutboxComponent(store) {
        var _this = this;
        this.store = store;
        this.outbox = [];
        this.moment = new __WEBPACK_IMPORTED_MODULE_2__moment_util__["a" /* MomentUtil */]();
        store.subscribe(function (state) {
            _this.outbox = __WEBPACK_IMPORTED_MODULE_3_lodash__["values"](state.dataState.outbox);
        });
    }
    OutboxComponent.prototype.ngOnInit = function () {
    };
    OutboxComponent.prototype.formatTime = function (date) {
        return this.moment.getMoment()(date).fromNow();
    };
    OutboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sp-outbox',
            template: __webpack_require__("../../../../../src/app/message/outbox/outbox.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/outbox/outbox.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* Store */]])
    ], OutboxComponent);
    return OutboxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message/view/view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox-head\"></div>\n<div class=\"inbox-body\">\n  <div class=\"heading-inbox row\">\n    <div class=\"col-md-12\">\n      <h4>{{subject$ | async}}</h4>\n    </div>\n  </div>\n  <div class=\"sender-info\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-xs-12\">\n        <div class=\"pull-left\">\n          <img src=\"{{hash$ | async}}\">\n        </div>\n        <div class=\"s-info\">\n          <strong>\n            {{fullname$ | async}}\n          </strong>\n          <span>{{email$ | async}}</span>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-xs-12\"></div>\n    </div>\n  </div>\n  <div [innerHtml]=\"message$ | async\" class=\"view-mail\"></div>\n  <div class=\"attachment-mail\"></div>\n  <div class=\"reply-mail m-b-20\"></div>\n  <div class=\"compose-btn pull-right\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/message/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__md5__ = __webpack_require__("../../../../../src/app/md5.ts");
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
    function ViewMessageComponent(store, ms, route) {
        this.store = store;
        this.ms = ms;
        this.route = route;
        this.email = 'default@schoolpop.ng';
        this.email$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].of(this.email);
    }
    ViewMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mail$ = this.route.params.map(function (params) { return params['id']; }).flatMap(function (id) {
            var objectId = id;
            return _this.store.skip(1).flatMap(function (state) {
                return _this.getMail(state, id);
            });
        });
        this.subject$ = this.mail$.map(function (m) { return m.subject; });
        this.fullname$ = this.mail$.map(function (m) { return m.from.firstName + ' ' + m.from.lastName; });
        this.email$ = this.mail$.map(function (m) { return m.from.email; });
        this.hash$ = this.email$.map(function (e) { return _this.getSrc(e); });
        this.message$ = this.mail$.map(function (m) { return m.message.text; });
        // this.route.params.map(params => params['id']).subscribe(
        //   (id:string) => this.store.dispatch(new LoadViewMessageAction(id))
        // )
    };
    ViewMessageComponent.prototype.getMailFromInbox = function (state, id) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].of(state.dataState.inbox[id]);
    };
    ViewMessageComponent.prototype.getMailFromOutbox = function (state, id) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].of(state.dataState.outbox[id]);
    };
    ViewMessageComponent.prototype.getMail = function (state, id) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].concat(this.getMailFromInbox(state, id), this.getMailFromOutbox(state, id)).take(1);
    };
    ViewMessageComponent.prototype.getSrc = function (email) {
        var baseUrl = 'https://www.gravatar.com/avatar/';
        var hash = __WEBPACK_IMPORTED_MODULE_5__md5__["a" /* encrypt */](email);
        return baseUrl + hash;
    };
    ViewMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'sp-view',
            template: __webpack_require__("../../../../../src/app/message/view/view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["f" /* Store */], __WEBPACK_IMPORTED_MODULE_0__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], ViewMessageComponent);
    return ViewMessageComponent;
}());



/***/ }),

/***/ "../../../../angular-froala-wysiwyg/editor/editor.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaEditorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");


var FroalaEditorDirective = (function () {
    function FroalaEditorDirective(el) {
        // editor options
        this._opts = {
            immediateAngularModelUpdate: false,
            angularIgnoreAttrs: null
        };
        this.SPECIAL_TAGS = ['img', 'button', 'input', 'a'];
        this.INNER_HTML_ATTR = 'innerHTML';
        this._hasSpecialTag = false;
        this._listeningEvents = [];
        this._editorInitialized = false;
        this._oldModel = null;
        // Begin ControlValueAccesor methods.
        this.onChange = function (_) { };
        this.onTouched = function () { };
        // froalaModel directive as output: update model if editor contentChanged
        this.froalaModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // froalaInit directive as output: send manual editor initialization
        this.froalaInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var element = el.nativeElement;
        // check if the element is a special tag
        if (this.SPECIAL_TAGS.indexOf(element.tagName.toLowerCase()) != -1) {
            this._hasSpecialTag = true;
        }
        // jquery wrap and store element
        this._$element = $(element);
    }
    // Form model content changed.
    FroalaEditorDirective.prototype.writeValue = function (content) {
        this.updateEditor(content);
    };
    FroalaEditorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    FroalaEditorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    Object.defineProperty(FroalaEditorDirective.prototype, "froalaEditor", {
        // End ControlValueAccesor methods.
        // froalaEditor directive as input: store the editor options
        set: function (opts) {
            this._opts = opts || this._opts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FroalaEditorDirective.prototype, "froalaModel", {
        // froalaModel directive as input: store initial editor content
        set: function (content) {
            this.updateEditor(content);
        },
        enumerable: true,
        configurable: true
    });
    // Update editor with model contents.
    FroalaEditorDirective.prototype.updateEditor = function (content) {
        if (JSON.stringify(this._oldModel) == JSON.stringify(content)) {
            return;
        }
        this._model = content;
        if (this._editorInitialized) {
            this.setContent();
        }
    };
    // update model if editor contentChanged
    FroalaEditorDirective.prototype.updateModel = function () {
        var modelContent = null;
        if (this._hasSpecialTag) {
            var attributeNodes = this._$element[0].attributes;
            var attrs = {};
            for (var i = 0; i < attributeNodes.length; i++) {
                var attrName = attributeNodes[i].name;
                if (this._opts.angularIgnoreAttrs && this._opts.angularIgnoreAttrs.indexOf(attrName) != -1) {
                    continue;
                }
                attrs[attrName] = attributeNodes[i].value;
            }
            if (this._$element[0].innerHTML) {
                attrs[this.INNER_HTML_ATTR] = this._$element[0].innerHTML;
            }
            modelContent = attrs;
        }
        else {
            var returnedHtml = this._$element.froalaEditor('html.get');
            if (typeof returnedHtml === 'string') {
                modelContent = returnedHtml;
            }
        }
        this._oldModel = modelContent;
        // Update froalaModel.
        this.froalaModelChange.emit(modelContent);
        // Update form model.
        this.onChange(modelContent);
    };
    // register event on jquery element
    FroalaEditorDirective.prototype.registerEvent = function (element, eventName, callback) {
        if (!element || !eventName || !callback) {
            return;
        }
        this._listeningEvents.push(eventName);
        element.on(eventName, callback);
    };
    FroalaEditorDirective.prototype.initListeners = function () {
        var self = this;
        // bind contentChange and keyup event to froalaModel
        this.registerEvent(this._$element, 'froalaEditor.contentChanged', function () {
            setTimeout(function () {
                self.updateModel();
            }, 0);
        });
        if (this._opts.immediateAngularModelUpdate) {
            this.registerEvent(this._editor, 'keyup', function () {
                setTimeout(function () {
                    self.updateModel();
                }, 0);
            });
        }
    };
    // register events from editor options
    FroalaEditorDirective.prototype.registerFroalaEvents = function () {
        if (!this._opts.events) {
            return;
        }
        for (var eventName in this._opts.events) {
            if (this._opts.events.hasOwnProperty(eventName)) {
                this.registerEvent(this._$element, eventName, this._opts.events[eventName]);
            }
        }
    };
    FroalaEditorDirective.prototype.createEditor = function () {
        if (this._editorInitialized) {
            return;
        }
        this.setContent(true);
        // Registering events before initializing the editor will bind the initialized event correctly.
        this.registerFroalaEvents();
        // init editor
        this._editor = this._$element.froalaEditor(this._opts).data('froala.editor').$el;
        this.initListeners();
        this._editorInitialized = true;
    };
    FroalaEditorDirective.prototype.setHtml = function () {
        this._$element.froalaEditor('html.set', this._model || '', true);
        //This will reset the undo stack everytime the model changes externally. Can we fix this?
        this._$element.froalaEditor('undo.reset');
        this._$element.froalaEditor('undo.saveStep');
    };
    FroalaEditorDirective.prototype.setContent = function (firstTime) {
        if (firstTime === void 0) { firstTime = false; }
        var self = this;
        // set initial content
        if (this._model || this._model == '') {
            this._oldModel = this._model;
            if (this._hasSpecialTag) {
                var tags = this._model;
                // add tags on element
                if (tags) {
                    for (var attr in tags) {
                        if (tags.hasOwnProperty(attr) && attr != this.INNER_HTML_ATTR) {
                            this._$element.attr(attr, tags[attr]);
                        }
                    }
                    if (tags.hasOwnProperty(this.INNER_HTML_ATTR)) {
                        this._$element[0].innerHTML = tags[this.INNER_HTML_ATTR];
                    }
                }
            }
            else {
                if (firstTime) {
                    this.registerEvent(this._$element, 'froalaEditor.initialized', function () {
                        self.setHtml();
                    });
                }
                else {
                    self.setHtml();
                }
            }
        }
    };
    FroalaEditorDirective.prototype.destroyEditor = function () {
        if (this._editorInitialized) {
            this._$element.off(this._listeningEvents.join(" "));
            this._editor.off('keyup');
            this._$element.froalaEditor('destroy');
            this._listeningEvents.length = 0;
            this._editorInitialized = false;
        }
    };
    FroalaEditorDirective.prototype.getEditor = function () {
        if (this._$element) {
            return this._$element.froalaEditor.bind(this._$element);
        }
        return null;
    };
    // send manual editor initialization
    FroalaEditorDirective.prototype.generateManualController = function () {
        var self = this;
        var controls = {
            initialize: this.createEditor.bind(this),
            destroy: this.destroyEditor.bind(this),
            getEditor: this.getEditor.bind(this),
        };
        this.froalaInit.emit(controls);
    };
    // TODO not sure if ngOnInit is executed after @inputs
    FroalaEditorDirective.prototype.ngOnInit = function () {
        // check if output froalaInit is present. Maybe observers is private and should not be used?? TODO how to better test that an output directive is present.
        if (!this.froalaInit.observers.length) {
            this.createEditor();
        }
        else {
            this.generateManualController();
        }
    };
    FroalaEditorDirective.prototype.ngOnDestroy = function () {
        this.destroyEditor();
    };
    FroalaEditorDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[froalaEditor]',
                    providers: [{
                            provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FroalaEditorDirective; }),
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    FroalaEditorDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    FroalaEditorDirective.propDecorators = {
        'froalaEditor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'froalaModel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'froalaModelChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'froalaInit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return FroalaEditorDirective;
}());

//# sourceMappingURL=editor.directive.js.map

/***/ }),

/***/ "../../../../angular-froala-wysiwyg/editor/editor.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_directive__ = __webpack_require__("../../../../angular-froala-wysiwyg/editor/editor.directive.js");


var FroalaEditorModule = (function () {
    function FroalaEditorModule() {
    }
    FroalaEditorModule.forRoot = function () {
        return { ngModule: FroalaEditorModule, providers: [] };
    };
    FroalaEditorModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__editor_directive__["a" /* FroalaEditorDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__editor_directive__["a" /* FroalaEditorDirective */]]
                },] },
    ];
    /** @nocollapse */
    FroalaEditorModule.ctorParameters = function () { return []; };
    return FroalaEditorModule;
}());

//# sourceMappingURL=editor.module.js.map

/***/ }),

/***/ "../../../../angular-froala-wysiwyg/editor/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_directive__ = __webpack_require__("../../../../angular-froala-wysiwyg/editor/editor.directive.js");
/* unused harmony reexport FroalaEditorDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_module__ = __webpack_require__("../../../../angular-froala-wysiwyg/editor/editor.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__editor_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-froala-wysiwyg/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FERootModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor__ = __webpack_require__("../../../../angular-froala-wysiwyg/editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view__ = __webpack_require__("../../../../angular-froala-wysiwyg/view/index.js");
/* unused harmony reexport FroalaEditorDirective */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__editor__["a"]; });
/* unused harmony reexport FroalaViewDirective */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__view__["a"]; });





var MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__editor__["a" /* FroalaEditorModule */],
    __WEBPACK_IMPORTED_MODULE_2__view__["a" /* FroalaViewModule */]
];
var FERootModule = (function () {
    function FERootModule() {
    }
    FERootModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__editor__["a" /* FroalaEditorModule */].forRoot(),
                        __WEBPACK_IMPORTED_MODULE_2__view__["a" /* FroalaViewModule */].forRoot()
                    ],
                    exports: MODULES
                },] },
    ];
    /** @nocollapse */
    FERootModule.ctorParameters = function () { return []; };
    return FERootModule;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-froala-wysiwyg/view/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_directive__ = __webpack_require__("../../../../angular-froala-wysiwyg/view/view.directive.js");
/* unused harmony reexport FroalaViewDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_module__ = __webpack_require__("../../../../angular-froala-wysiwyg/view/view.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__view_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../angular-froala-wysiwyg/view/view.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaViewDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var FroalaViewDirective = (function () {
    function FroalaViewDirective(renderer, element) {
        this.renderer = renderer;
        this._element = element.nativeElement;
    }
    Object.defineProperty(FroalaViewDirective.prototype, "froalaView", {
        // update content model as it comes
        set: function (content) {
            this._element.innerHTML = content;
        },
        enumerable: true,
        configurable: true
    });
    FroalaViewDirective.prototype.ngAfterViewInit = function () {
        this.renderer.setElementClass(this._element, "fr-view", true);
    };
    FroalaViewDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[froalaView]'
                },] },
    ];
    /** @nocollapse */
    FroalaViewDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    FroalaViewDirective.propDecorators = {
        'froalaView': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return FroalaViewDirective;
}());

//# sourceMappingURL=view.directive.js.map

/***/ }),

/***/ "../../../../angular-froala-wysiwyg/view/view.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FroalaViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_directive__ = __webpack_require__("../../../../angular-froala-wysiwyg/view/view.directive.js");


var FroalaViewModule = (function () {
    function FroalaViewModule() {
    }
    FroalaViewModule.forRoot = function () {
        return { ngModule: FroalaViewModule, providers: [] };
    };
    FroalaViewModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__view_directive__["a" /* FroalaViewDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__view_directive__["a" /* FroalaViewDirective */]]
                },] },
    ];
    /** @nocollapse */
    FroalaViewModule.ctorParameters = function () { return []; };
    return FroalaViewModule;
}());

//# sourceMappingURL=view.module.js.map

/***/ })

});
//# sourceMappingURL=message.module.chunk.js.map