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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
let Contact = class Contact extends typeorm_1.BaseEntity {
    id;
    user_id;
    first_name;
    last_name;
    phone_number;
    created_at;
    updated_at;
    user;
};
exports.Contact = Contact;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Contact.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_id',
        type: 'uuid',
        nullable: false,
    }),
    __metadata("design:type", String)
], Contact.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'first_name',
        type: 'varchar',
        length: 50,
    }),
    __metadata("design:type", String)
], Contact.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'last_name',
        type: 'varchar',
        length: 50,
    }),
    __metadata("design:type", String)
], Contact.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'phone_number',
        type: 'varchar',
        length: 50,
    }),
    __metadata("design:type", String)
], Contact.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        nullable: false,
    }),
    __metadata("design:type", Date)
], Contact.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Contact.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.contacts),
    (0, typeorm_1.JoinColumn)({ foreignKeyConstraintName: 'id', name: 'user_id' }),
    __metadata("design:type", user_1.User)
], Contact.prototype, "user", void 0);
exports.Contact = Contact = __decorate([
    (0, typeorm_1.Entity)({ name: 'contacts' })
], Contact);
//# sourceMappingURL=contact.js.map