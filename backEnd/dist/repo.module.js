"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const repo_service_1 = require("./repo.service");
const user_entity_1 = require("./db/models/user.entity");
const registered_time_entity_1 = require("./db/models/registered_time.entity");
let RepoModule = class RepoModule {
};
RepoModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.default,
                registered_time_entity_1.default,
            ]),
        ],
        providers: [repo_service_1.default],
        exports: [repo_service_1.default],
    })
], RepoModule);
exports.default = RepoModule;
//# sourceMappingURL=repo.module.js.map