var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.sendUser = function (user) {
        var url = "http://localhost:8080/user/create";
        var headers1 = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(user), { headers: headers1 });
    };
    return RegisterService;
}());
RegisterService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], RegisterService);
export { RegisterService };
//# sourceMappingURL=../../../../src/app/services/register.service.js.map