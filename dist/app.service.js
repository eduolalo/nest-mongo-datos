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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
const config_1 = require("./config");
let AppService = class AppService {
    constructor(database, configService) {
        this.database = database;
        this.configService = configService;
    }
    getHello() {
        const apiKey = this.configService.apiKey;
        const name = this.configService.database.name;
        return `Hello World! ${apiKey} ${name}`;
    }
    getTasks() {
        return this.database.collection("tasks").find().toArray();
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("MONGO")),
    __param(1, (0, common_1.Inject)(config_1.default.KEY)),
    __metadata("design:paramtypes", [mongodb_1.Db, void 0])
], AppService);
//# sourceMappingURL=app.service.js.map