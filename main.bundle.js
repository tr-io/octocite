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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" role=\"navigation\">\n  <div class=\"container\">\n    <a routerLink=\"/citation-form\" class=\"navbar-brand\"><img src=\"favicon.ico\" width=\"30\" height=\"30\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  </div>\n</nav>\n<router-outlet></router-outlet>"

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
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_component__ = __webpack_require__("../../../../../src/app/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_component__ = __webpack_require__("../../../../../src/app/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__citform_component__ = __webpack_require__("../../../../../src/app/citform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_component__ = __webpack_require__("../../../../../src/app/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__citform_component__["a" /* CitFormComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'main',
                    component: __WEBPACK_IMPORTED_MODULE_6__main_component__["a" /* MainComponent */]
                },
                {
                    path: '',
                    redirectTo: '/citation-form',
                    pathMatch: 'full'
                },
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_7__login_component__["a" /* LoginComponent */]
                },
                {
                    path: 'register',
                    component: __WEBPACK_IMPORTED_MODULE_8__register_component__["a" /* RegisterComponent */]
                },
                {
                    path: 'citation-form',
                    component: __WEBPACK_IMPORTED_MODULE_9__citform_component__["a" /* CitFormComponent */]
                }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/citform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-3\">Octocite</h1>\r\n    <p>Generate your citations in MLA, APA, or Chicago for free!</p>\r\n    <small style=\"font-size: 75%; bottom: 0;\" class=\"text-muted\">Created by Leonard Liu, Noah Curran, Ryan Chen, and Shreyas Iyengar. Logo art by Kallista Zhang.</small>\r\n  </div>\r\n</div>\r\n<div class=\"container\" style=\"padding-top: 45px; padding-bottom: 45px\">\r\n  <h1>Generate book citations</h1>\r\n  <div [hidden]=\"submitted\">\r\n    <form (ngSubmit)=\"onSubmit()\" #citForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <p>Choose citation style:</p>\r\n        <div class=\"btn-group\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"typeString\">\r\n          <label ngbButtonLabel class=\"btn-primary\">\r\n            <input ngbButton type=\"radio\" [value]=\"1\"> MLA\r\n          </label>\r\n          <label ngbButtonLabel class=\"btn-primary\">\r\n            <input ngbButton type=\"radio\" [value]=\"2\"> APA\r\n          </label>\r\n          <label ngbButtonLabel class=\"btn-primary\">\r\n            <input ngbButton type=\"radio\" [value]=\"3\"> Chicago\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Author First Name*</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"authorFirstName\" [(ngModel)]=\"authorFirstName\" name=\"authorFirstName\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Author Last Name*</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"authorLastName\" [(ngModel)]=\"authorLastName\" name=\"authorLastName\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Source Title*</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"sourceTitle\" required [(ngModel)]=\"sourceTitle\" name=\"sourceTitle\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Source Container</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"sourceContainer\" placeholder=\"Such as an album, collection of short stories, TV show, etc\" [(ngModel)]=\"sourceContainer\" name=\"sourceContainer\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Version Number</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"version\" [(ngModel)]=\"version\" name=\"version\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Publisher Name*</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"publisher\" [(ngModel)]=\"publisher\" name=\"publisher\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Publication Date*</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"pubDate\" [(ngModel)]=\"pubDate\" name=\"pubDate\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Location of Publication*</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"pubLoc\" [(ngModel)]=\"pubLoc\" name=\"pubLoc\" required>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!citForm.form.valid\">Submit</button>\r\n    </form>\r\n  </div>\r\n  <div [hidden]=\"!submitted\">\r\n    <div [hidden]=\"!_mla\">\r\n      <h2>MLA Style:</h2>\r\n      <p>{{ authorLastName }}, {{ authorFirstName }}. <i>{{ sourceTitle }}.</i> {{ pubLoc }}: {{ publisher }}, {{ pubDate }}.</p>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"retry()\">Cite another source.</button>\r\n    </div>\r\n    <div [hidden]=\"!_apa\">\r\n      <h2>APA Style:</h2>\r\n      <p>{{ authorLastName }}, {{ authorFirstName.charAt(0) }}. ({{ pubDate }}). <i>{{ sourceTitle }}.</i> {{ pubLoc }}: {{ publisher }}</p>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"retry()\">Cite another source.</button>\r\n    </div>\r\n    <div [hidden]=\"!_chicago\">\r\n      <h2>Chicago Style:</h2>\r\n      <p>{{ authorLastName }}, {{ authorFirstName }}. <i>{{ sourceTitle }}.</i> {{ pubLoc }}: {{ publisher }}, {{ pubDate }}.</p>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"retry()\">Cite another source.</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/citform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CitFormComponent = (function () {
    function CitFormComponent() {
        this.typeString = 1;
        this.submitted = false;
        this._mla = false;
        this._apa = false;
        this._chicago = false;
        this.authorFirstName = '';
        this.authorLastName = '';
        this.sourceTitle = '';
        this.sourceContainer = '';
        this.version = '';
        this.publisher = '';
        this.pubDate = '';
        this.pubLoc = '';
    }
    CitFormComponent.prototype.onSubmit = function () {
        this._mla = false;
        this._apa = false;
        this._chicago = false;
        switch (this.typeString) {
            case 1:
                this._mla = true;
                break;
            case 2:
                this._apa = true;
                break;
            case 3:
                this._chicago = true;
                break;
        }
        this.submitted = true;
    };
    CitFormComponent.prototype.retry = function () {
        this.submitted = false;
    };
    return CitFormComponent;
}());
CitFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'citation-form',
        template: __webpack_require__("../../../../../src/app/citform.component.html")
    })
], CitFormComponent);

//# sourceMappingURL=citform.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sticky-footer',
        template: __webpack_require__("../../../../../src/app/footer.component.html"),
        styles: ["\n    html {\n      position: relative;\n      min-height: 100%;\n    }\n    body {\n      /* Margin bottom by footer height */\n      margin-bottom: 60px;\n    }\n    .footer {\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      /* Set the fixed height of the footer here */\n      height: 60px;\n      line-height: 60px; /* Vertically center the text there */\n      background-color: #f5f5f5;\n    }\n  "]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top: 35px\">\r\n  <h1>Login</h1>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"username\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"password\" required>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\">Login</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login-page',
        template: __webpack_require__("../../../../../src/app/login.component.html")
    })
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-3\">Octocite</h1>\r\n    <p>Generate your citations in MLA, APA, or Chicago for free!</p>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <h3>Generate citations</h3>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <p>Choose citation style:</p>\r\n      <div class=\"btn-group\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"model\">\r\n        <label ngbButtonLabel class=\"btn-primary\">\r\n          <input ngbButton type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n        </label>\r\n        <label ngbButtonLabel class=\"btn-primary\">\r\n          <input ngbButton type=\"radio\" value=\"middle\"> Middle\r\n        </label>\r\n        <label ngbButtonLabel class=\"btn-primary\">\r\n          <input ngbButton type=\"radio\" [value]=\"false\"> Right\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputString\" placeholder=\"Cite any type of media by typing in the title/ISBN/URL or keywords\" required [(ngModel)]=\"inputString\" name=\"inputString\">{{ inputString }} {{ model }}\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = (function () {
    function MainComponent() {
        this.model = 1;
        this.inputString = '';
    }
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'main-page',
        template: __webpack_require__("../../../../../src/app/main.component.html")
    })
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top: 35px\">\r\n  <h1>Register</h1>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"xXx_username\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"me@me.com\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"hunter2\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"confirmpass\">Confirm Password</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"confirmpass\" placeholder=\"hunter2\" required>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Register</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'register-page',
        template: __webpack_require__("../../../../../src/app/register.component.html")
    })
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
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