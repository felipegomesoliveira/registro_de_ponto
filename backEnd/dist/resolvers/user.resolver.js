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
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const user_entity_1 = require("../db/models/user.entity");
const repo_service_1 = require("../repo.service");
const user_input_1 = require("./input/user.input");
let UserResolver = class UserResolver {
    constructor(repoService) {
        this.repoService = repoService;
    }
    async getUsers() {
        return this.repoService.userRepo.find();
    }
    async getUser(id) {
        return this.repoService.userRepo.findOne(id);
    }
    async userByEmail(email) {
        return this.repoService.getUserByEmail(email);
    }
    ;
    async createUser(input) {
        const user = this.repoService.userRepo.create({
            name: input.name,
            email: input.email,
            password: input.password,
            role: input.role
        });
        return this.repoService.userRepo.save(user);
    }
};
__decorate([
    graphql_1.Query(() => [user_entity_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
__decorate([
    graphql_1.Query(() => user_entity_1.default, { nullable: true }),
    common_1.UseGuards(auth_guard_1.GqlAuthGuard),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
__decorate([
    graphql_1.Query(() => user_entity_1.default, { nullable: true }),
    __param(0, graphql_1.Args('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "userByEmail", null);
__decorate([
    graphql_1.Mutation(() => user_entity_1.default),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.default]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
UserResolver = __decorate([
    graphql_1.Resolver(() => user_entity_1.default),
    __metadata("design:paramtypes", [repo_service_1.default])
], UserResolver);
exports.default = UserResolver;
//# sourceMappingURL=user.resolver.js.map