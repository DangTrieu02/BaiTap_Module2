"use strict";
exports.__esModule = true;
exports.TaiLieuChung = void 0;
var TaiLieuChung = /** @class */ (function () {
    function TaiLieuChung(maTaiLieu, nhaXuatBan, soBanPhatHanh) {
        this._maTaiLieu = maTaiLieu;
        this._nhaXuatBan = nhaXuatBan;
        this._soBanPhatHanh = soBanPhatHanh;
    }
    TaiLieuChung.prototype.getMaTaiLieu = function () {
        return this._maTaiLieu;
    };
    TaiLieuChung.prototype.setMaTaiLieu = function (value) {
        this._maTaiLieu = value;
    };
    TaiLieuChung.prototype.getNhaXuatBan = function () {
        return this._nhaXuatBan;
    };
    TaiLieuChung.prototype.setNhaXuatBan = function (value) {
        this._nhaXuatBan = value;
    };
    TaiLieuChung.prototype.getSoBanPhatHanh = function () {
        return this._soBanPhatHanh;
    };
    TaiLieuChung.prototype.setSoBanPhatHanh = function (value) {
        this._soBanPhatHanh = value;
    };
    return TaiLieuChung;
}());
exports.TaiLieuChung = TaiLieuChung;
