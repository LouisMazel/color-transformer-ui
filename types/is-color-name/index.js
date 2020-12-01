"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (color) => {
    if (!color)
        throw new Error('is-color-name: No color provided');
    const s = new Option().style;
    s.color = color;
    return s.color === color;
};
//# sourceMappingURL=index.js.map