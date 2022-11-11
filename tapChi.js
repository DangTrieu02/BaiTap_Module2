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
exports.TapChi = void 0;
var quanLyTaiLieu_1 = require("./quanLyTaiLieu");
var TapChi = /** @class */ (function (_super) {
    __extends(TapChi, _super);
    function TapChi(maTaiLieu, nhaXuatBan, soBanPhatHanh, soPhatHanh, thangPhatHanh) {
        var _this = _super.call(this, maTaiLieu, nhaXuatBan, soBanPhatHanh) || this;
        _this._soPhatHanh = soPhatHanh;
        _this._thangPhatHanh = thangPhatHanh;
        return _this;
    }
    TapChi.prototype.getSoPhatHanh = function () {
        return this._soPhatHanh;
    };
    TapChi.prototype.setSoPhatHanh = function (value) {
        this._soPhatHanh = value;
    };
    TapChi.prototype.getThangPhatHanh = function () {
        return this._thangPhatHanh;
    };
    TapChi.prototype.setThangPhatHanh = function (value) {
        this._thangPhatHanh = value;
    };
    return TapChi;
}(quanLyTaiLieu_1.TaiLieuChung));
exports.TapChi = TapChi;
