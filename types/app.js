"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRgba = exports.colorNameToHex = exports.isColorName = exports.shadeColor = void 0;
const shade_color_1 = __importDefault(require("./shade-color"));
exports.shadeColor = shade_color_1.default;
const is_color_name_1 = __importDefault(require("./is-color-name"));
exports.isColorName = is_color_name_1.default;
const hex_to_rgba_1 = __importDefault(require("./hex-to-rgba"));
exports.hexToRgba = hex_to_rgba_1.default;
const color_name_to_hex_1 = __importDefault(require("./color-name-to-hex"));
exports.colorNameToHex = color_name_to_hex_1.default;
//# sourceMappingURL=app.js.map