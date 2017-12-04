webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authorization_service__ = __webpack_require__("../../../../../src/app/services/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_authenticate_authenticate_component__ = __webpack_require__("../../../../../src/app/components/authenticate/authenticate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_search_requests_service__ = __webpack_require__("../../../../../src/app/services/search-requests.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'authenticate',
        component: __WEBPACK_IMPORTED_MODULE_14__components_authenticate_authenticate_component__["a" /* AuthenticateComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_authenticate_authenticate_component__["a" /* AuthenticateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_12__services_authorization_service__["a" /* AuthorizationService */], __WEBPACK_IMPORTED_MODULE_15__services_search_requests_service__["a" /* SearchRequestsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/authenticate/authenticate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authenticate/authenticate.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  authenticate works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/authenticate/authenticate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authorization_service__ = __webpack_require__("../../../../../src/app/services/authorization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticateComponent = (function () {
    function AuthenticateComponent(authService, activatedRoute, http, router) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
    }
    AuthenticateComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.loggedIn) {
            this.activatedRoute.queryParams.subscribe(function (params) {
                localStorage.setItem('code', params.code);
                _this.authService.loadToken();
                _this.authService.verifyInstagram(params).subscribe(function (data) {
                    _this.authService.saveInstagramToken(data);
                    _this.router.navigate(['/profile']);
                });
                // this.http.post("http://localhost:3000/instagram/token", {params: params}).subscribe((data) => {
                // data = JSON.parse(data["_body"]);
                // var token = data["accessToken"];
                // localStorage.setItem('instagram_token', token);
                //
                // this.router.navigate(['/']);
                // });
            });
        }
    };
    return AuthenticateComponent;
}());
AuthenticateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-authenticate',
        template: __webpack_require__("../../../../../src/app/components/authenticate/authenticate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authenticate/authenticate.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AuthenticateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=authenticate.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n  list-style: none;\n}\n\n\nb {\n  font-size: 18px;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-lg-4\"></div>\n  <div class=\"col-lg-4\">\n    <label>{{_range}} {{unit}}</label>\n    <input type=\"range\"  [(ngModel)]=\"range\" name=\"\" id=\"points\" value=\"range\" min=\"0\" max=\"3000\">\n    <div class=\"input-group\">\n      <input [(ngModel)]=\"address\" name=\"address\" type=\"text\" class=\"form-control\" />\n      <span class=\"input-group-btn\">\n        <button (click)=\"search()\" class=\"btn btn-default\"  type=\"button\">Search</button>\n      </span>\n    </div><!-- /input-group -->\n  </div><!-- /.col-lg-4 -->\n  <div  *ngFor=\"let result of results\" class=\"container\">\n    <li> <b>Address:</b> {{result.destination_address}} <b>ranges:</b> {{result.distance.text}}</li>\n  </div>\n  <div class=\"col-lg-4\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_requests_service__ = __webpack_require__("../../../../../src/app/services/search-requests.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(http, searchReqService) {
        this.http = http;
        this.searchReqService = searchReqService;
        this.unit = "miles";
        this._range = 100;
    }
    Object.defineProperty(HomeComponent.prototype, "range", {
        set: function (range) {
            this._range = range;
            this.doSomething(this._range);
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.doSomething = function (number) {
        if (number == 1) {
            this.unit = "mile";
        }
        else {
            this.unit = "miles";
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.search = function () {
        var _this = this;
        this.searchReqService.search(this.address, this._range).subscribe(function (data) {
            _this.results = data;
            console.log(_this.results);
        });
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], HomeComponent.prototype, "range", null);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_requests_service__["a" /* SearchRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_search_requests_service__["a" /* SearchRequestsService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" (submit)=\"onLoginSubmit()\">\n  <h2 class=\"page-header\">Login</h2>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authorization_service__ = __webpack_require__("../../../../../src/app/services/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function LoginComponent(authService, validate, flashMessage, router) {
        this.authService = authService;
        this.validate = validate;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {};
        user["email"] = this.email;
        user["password"] = this.password;
        if (this.validate.validateLogin(user)) {
            this.authService.loginUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.authService.storeUserData(data.token, data.user);
                    _this.router.navigate(['/profile']);
                }
                else {
                    console.log("login failed");
                }
            });
        }
        else {
            console.log("not a valid use");
            if (!this.validate.validateEmail(this.email)) {
                this.flashMessage.show('Not a valid email address', { cssClass: 'alert-danger', timeout: 3000 });
            }
            if (this.validate.isUndefined(this.password) || !this.validate.requiredLength(this.password, 0)) {
                this.flashMessage.show('Please enter a password', { cssClass: 'alert-danger', timeout: 3000 });
            }
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-2\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"> Search</a>\n    </div>\n\n    <div cl\n    ass=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-2\">\n      <ul class=\"nav navbar-nav\">\n\n      \n\n      </ul>\n\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!authService.loggedIn()\"><a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"!authService.loggedIn()\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__ = __webpack_require__("../../../../../src/app/services/authorization.service.ts");
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
    function NavbarComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 300px;\n  height: 300px;\n  margin: 5px;\n}\n\n\n.containa {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"container\">\n  <h2 class=\"page-header\">Address</h2>\n  <h3>9423 Kinnerton Pl </h3>\n  <h2 class=\"page-header\">Pictures</h2>\n  <a *ngIf=\"isValid\" href=\"/instagram/authenticate\" class=\"btn btn-primary\">Authorize Instagram</a>\n  <div *ngIf=\"!isValid\" class=\"containa\">\n    <div *ngFor=\"let picture of pictures\">\n      <img src={{picture}} />\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authorization_service__ = __webpack_require__("../../../../../src/app/services/authorization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.isValid = false;
    }
    ProfileComponent.prototype.checkToken = function () {
        var _this = this;
        this.authService.validateInstagramToken().subscribe(function (data) {
            console.log(data);
            if (data["_body"] == "TOKEN STILL VALID") {
                _this.isValid = false;
                _this.loadPictures();
            }
            else {
                _this.isValid = true;
            }
        });
    };
    ProfileComponent.prototype.loadPictures = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            if (data.user.instagram.pictures) {
                _this.pictures = data.user.instagram.pictures;
            }
            console.log(data);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.checkToken();
        this.loadPictures();
        // if(!this.isValid){
        // }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#checklist {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n\n}\n\n.contain {\n\n  width: 150px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"container\" (submit)=\"onRegisterSubmit()\">\n  <h2 class=\"page-header\">Register</h2>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Full Name</label>\n    <input type=\"text\" [(ngModel)]=\"fullName\" name=\"fullName\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Work Address</label>\n    <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" class=\"form-control\">\n  </div>\n    <label>Styles</label><br/>\n  <div class=\"form-group\" id=\"checklist\">\n\n    <div class=\"contain\">\n      <label class=\"container\">Traditional\n        <input type=\"checkbox\">\n        <span class=\"checkmark\"></span>\n      </label>\n\n      <label class=\"container\">Realism\n        <input type=\"checkbox\">\n        <span class=\"checkmark\"></span>\n      </label>\n\n      <label class=\"container\">Watercolor\n        <input type=\"checkbox\">\n        <span class=\"checkmark\"></span>\n      </label>\n\n      <label class=\"container\">Tribal\n        <input type=\"checkbox\">\n        <span class=\"checkmark\"></span>\n      </label>\n    </div>\n    <div class=\"contain\">\n      <label class=\"container\">New School\n        <input type=\"checkbox\">\n        <span class=\"checkmark\"></span>\n      </label>\n\n      <label class=\"container\">Neo Traditional\n        <input type=\"checkbox\">\n        <span class=\"checkmark\"></span>\n      </label>\n\n      <label class=\"container\">Japanese\n        <input type=\"checkbox\">\n        <span class=\"checkmark\"></span>\n      </label>\n\n      <label class=\"container\">Black and Grey\n        <input type=\"checkbox\">\n        <span class=\"checkmark\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"text\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Confirm Password</label>\n    <input type=\"text\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" type=\"password\"  class=\"form-control\">\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authorization_service__ = __webpack_require__("../../../../../src/app/services/authorization.service.ts");
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
    function RegisterComponent(flashMessage, validate, router, authService) {
        this.flashMessage = flashMessage;
        this.validate = validate;
        this.router = router;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {};
        user["email"] = this.email;
        user["password"] = this.password;
        user["address"] = this.address;
        if (this.validate.validateRegister(user, this.confirmPassword, this.address)) {
            this.authService.registerUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Registration successful!', { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    _this.flashMessage.show('User already exists', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
            //this.router.navigate(['/login']);
        }
        else {
            if (this.validate.isUndefined(this.email) || !this.validate.requiredLength(this.email, 0)) {
                this.flashMessage.show('Please enter an email', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else if (!this.validate.validateEmail(this.email)) {
                this.flashMessage.show('Not a valid email address', { cssClass: 'alert-danger', timeout: 3000 });
            }
            if (this.validate.isUndefined(this.address) || !this.validate.requiredLength(this.address, 0)) {
                this.flashMessage.show('Please enter an address', { cssClass: 'alert-danger', timeout: 3000 });
            }
            if (this.validate.isUndefined(this.password)) {
                this.flashMessage.show('Please enter a password', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else if (this.validate.isUndefined(this.confirmPassword)) {
                this.flashMessage.show('Please enter your password confirmation', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else if (!this.validate.requiredLength(this.password, 6)) {
                this.flashMessage.show('Password needs to be at least 6 characters long', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else if (!this.validate.validatePasswordsMatch(this.password, this.confirmPassword)) {
                this.flashMessage.show('Passwords need to match', { cssClass: 'alert-danger', timeout: 4000 });
            }
            // if(!this.validate.requiredLength(this.address, 0)){
            //   this.flashMessage.show('Please enter in an adress', {cssClass: 'alert-danger', timeout: 3000});
            // }
            //  this.router.navigate(['login']);
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_authorization_service__["a" /* AuthorizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authorization_service__["a" /* AuthorizationService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/authorization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorizationService = (function () {
    function AuthorizationService(http) {
        this.http = http;
        this.baseURL = "http://localhost:3000/";
    }
    //Register's user by sending a post request to the server
    AuthorizationService.prototype.registerUser = function (user) {
        var requestURL = this.baseURL + "users/register";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(requestURL, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Sends and authentication request to the server and logs the user in
    AuthorizationService.prototype.loginUser = function (user) {
        var requestURL = this.baseURL + "users/authenticate";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(requestURL, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthorizationService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthorizationService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthorizationService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    AuthorizationService.prototype.loadInstagramAccessToken = function () {
        this.instagramAccessToken = localStorage.getItem('instagram_token');
    };
    AuthorizationService.prototype.loadUser = function () {
        this.user = localStorage.getItem('user');
    };
    // we simple want to verify that the users access token is still valid and if so they're logged in
    AuthorizationService.prototype.loggedIn = function () {
        this.loadToken();
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthorizationService.prototype.verifyInstagram = function (params) {
        var requestURL = this.baseURL + "instagram/token";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(requestURL, { params: params }, { headers: headers });
    };
    //This method simply saves their instagram access token
    AuthorizationService.prototype.saveInstagramToken = function (data) {
        var token = data["accessToken"];
        localStorage.setItem('instagram_token', token);
    };
    //we need to validate that their instagram access token is still working, if not we need them to revalidate it
    AuthorizationService.prototype.validateInstagramToken = function () {
        this.loadInstagramAccessToken();
        var requestURL = this.baseURL + "instagram/validate";
        var params = new URLSearchParams();
        params.set('instagramAccessToken', this.instagramAccessToken);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(requestURL, { headers: headers });
    };
    //This method returns the users profile that is stored in the database
    AuthorizationService.prototype.getProfile = function () {
        var requestURL = this.baseURL + "users/profile";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(requestURL, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AuthorizationService;
}());
AuthorizationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthorizationService);

var _a;
//# sourceMappingURL=authorization.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search-requests.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchRequestsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchRequestsService = (function () {
    function SearchRequestsService(http) {
        this.http = http;
        this.baseURL = "http://localhost:3000/";
    }
    //search based on a given address
    SearchRequestsService.prototype.search = function (address, range) {
        var requestURL = this.baseURL + "google/distances";
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('address', address);
        params.set('range', range);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        requestOptions.search = params;
        return this.http.get(requestURL, requestOptions).map(function (res) { return res.json(); });
    };
    return SearchRequestsService;
}());
SearchRequestsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SearchRequestsService);

var _a;
//# sourceMappingURL=search-requests.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.isUndefined = function (value) {
        return value == undefined;
    };
    //Regex to validate a proper email address
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    //Making sure that the passwords inputed by the users match
    ValidateService.prototype.validatePasswordsMatch = function (password, passwordConfirmation) {
        return password == passwordConfirmation;
    };
    ValidateService.prototype.validateRegister = function (user, passwordConfirmation, address) {
        if (this.isUndefined(user.email) || this.isUndefined(user.password) || this.isUndefined(passwordConfirmation) || this.isUndefined(address)) {
            return false;
        }
        else if (!this.validatePasswordsMatch(user.password, passwordConfirmation)) {
            return false;
        }
        else if (address.length == 0 || user.password.length < 6) {
            return false;
        }
        else {
            return this.validateEmail(user.email);
        }
    };
    ValidateService.prototype.requiredLength = function (value, length) {
        return value.length > length;
    };
    //user should have both a valid email (doesn't need to be regisetered) and password as input
    ValidateService.prototype.validateLogin = function (user) {
        return !this.isUndefined(user.email) && this.validateEmail(user.email) && !this.isUndefined(user.password) &&
            this.requiredLength(user.password, 0);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map