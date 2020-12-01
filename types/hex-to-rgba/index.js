"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (hex, coef = 1) => {
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        let c = hex.substring(1).split('');
        if (c.length === 3)
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        const color = `0x${c.join("")}`; // eslint-disable-line
        return `rgba(${[(color >> 16) & 255, (color >> 8) & 255, color & 255].join(', ')}, ${coef})`;
    }
    throw new Error('Bad Hex');
};
//# sourceMappingURL=index.js.map