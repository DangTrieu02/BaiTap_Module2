"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Bao = void 0;
var quanLyTaiLieu_1 = require("./quanLyTaiLieu");
var Bao = /** @class */ (function (_super) {
    __extends(Bao, _super);
    function Bao(maTaiLieu, nhaXuatBan, soBanPhatHanh, ngayPhatHanh) {
        var _this = _super.call(this, maTaiLieu, nhaXuatBan, soBanPhatHanh) || this;
        _this._ngayPhatHanh = ngayPhatHanh;
        return _this;
    }
    Bao.prototype.getNgayPhatHanh = function () {
        return this._ngayPhatHanh;
    };
    Bao.prototype.setNgayPhatHanh = function (value) {
        this._ngayPhatHanh = value;
    };
    return Bao;
}(quanLyTaiLieu_1.TaiLieuChung));
exports.Bao = Bao;
