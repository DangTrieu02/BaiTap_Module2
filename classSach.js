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
exports.Sach = void 0;
var quanLyTaiLieu_1 = require("./quanLyTaiLieu");
var Sach = /** @class */ (function (_super) {
    __extends(Sach, _super);
    function Sach(maTaiLieu, nhaXuatBan, soBanPhatHanh, tenTacGia, soTrang) {
        var _this = _super.call(this, maTaiLieu, nhaXuatBan, soBanPhatHanh) || this;
        _this._tenTacGia = tenTacGia;
        _this._soTrang = soTrang;
        return _this;
    }
    Sach.prototype.getTenTacGia = function () {
        return this._tenTacGia;
    };
    Sach.prototype.setTenTacGia = function (value) {
        this._tenTacGia = value;
    };
    Sach.prototype.getSoTrang = function () {
        return this._soTrang;
    };
    Sach.prototype.setSoTrang = function (value) {
        this._soTrang = value;
    };
    return Sach;
}(quanLyTaiLieu_1.TaiLieuChung));
exports.Sach = Sach;
var listSach = [];
function themSach() {
    listSach.push();
}
