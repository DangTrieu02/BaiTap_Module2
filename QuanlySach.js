"use strict";
exports.__esModule = true;
exports.QuanlySach = void 0;
var classSach_1 = require("./classSach");
var tapChi_1 = require("./tapChi");
var classbao_1 = require("./classbao");
var QuanlySach = /** @class */ (function () {
    function QuanlySach() {
    }
    //add
    QuanlySach.themSach = function (sach) {
        QuanlySach.listSach.push(sach);
    };
    QuanlySach.themBao = function (bao) {
        QuanlySach.listBao.push(bao);
    };
    QuanlySach.themTapChi = function (tapchi) {
        QuanlySach.listTapChi.push(tapchi);
    };
    //display
    QuanlySach.hienSach = function () {
        for (var _i = 0, _a = QuanlySach.listSach; _i < _a.length; _i++) {
            var sach = _a[_i];
            console.table(QuanlySach.listSach);
        }
    };
    QuanlySach.hienTapChi = function () {
        for (var _i = 0, _a = QuanlySach.listTapChi; _i < _a.length; _i++) {
            var tapChi = _a[_i];
            console.table(QuanlySach.listTapChi);
        }
    };
    QuanlySach.hienBao = function () {
        for (var _i = 0, _a = QuanlySach.listBao; _i < _a.length; _i++) {
            var bao = _a[_i];
            console.table(QuanlySach.listBao);
        }
    };
    //xoa
    QuanlySach.xoaSach = function (maTaiLieu) {
        for (var i = 0; i < QuanlySach.listSach.length; i++) {
            if (QuanlySach.listSach[i]._maTaiLieu == maTaiLieu) {
                QuanlySach.listSach.splice(i, 1);
            }
        }
    };
    QuanlySach.xoaTapChi = function (maTaiLieu) {
        for (var i = 0; i < QuanlySach.listTapChi.length; i++) {
            if (QuanlySach.listTapChi[i]._maTaiLieu == maTaiLieu) {
                QuanlySach.listTapChi.splice(i, 1);
            }
        }
    };
    QuanlySach.xoaBao = function (maTaiLieu) {
        for (var i = 0; i < QuanlySach.listBao.length; i++) {
            if (QuanlySach.listBao[i]._maTaiLieu == maTaiLieu) {
                QuanlySach.listBao.splice(i, 1);
            }
        }
    };
    //timkiem
    QuanlySach.timKiemSach = function (maTaiLieu) {
        for (var i = 0; i < this.listSach.length; i++) {
            if (QuanlySach.listSach[i]._maTaiLieu == maTaiLieu) {
                console.log(QuanlySach.listSach[i]);
            }
        }
    };
    QuanlySach.timKiemTapChi = function (maTaiLieu) {
        for (var i = 0; i < this.listTapChi.length; i++) {
            if (QuanlySach.listTapChi[i]._maTaiLieu == maTaiLieu) {
                console.log(QuanlySach.listTapChi[i]);
            }
        }
    };
    QuanlySach.timKiemBao = function (maTaiLieu) {
        for (var i = 0; i < this.listBao.length; i++) {
            if (QuanlySach.listBao[i]._maTaiLieu == maTaiLieu) {
                console.log(QuanlySach.listBao[i]);
            }
        }
    };
    QuanlySach.listSach = [];
    QuanlySach.listTapChi = [];
    QuanlySach.listBao = [];
    return QuanlySach;
}());
exports.QuanlySach = QuanlySach;
// vi du
//them tai lieu
var sach1 = new classSach_1.Sach(1, 'aa', 445, 'bb', 50);
QuanlySach.themSach(sach1);
var tapChi1 = new tapChi_1.TapChi(2, 'ko biet nua', 22, 44, 'thang 12');
QuanlySach.themTapChi(tapChi1);
var bao1 = new classbao_1.Bao(3, 'Bao doi Bao dom', 22, 'ngay 30');
QuanlySach.themBao(bao1);
//xoa
QuanlySach.xoaSach(1);
// tim kiem
QuanlySach.timKiemBao(3);
// hien thi
QuanlySach.hienSach();
QuanlySach.hienBao();
QuanlySach.hienTapChi();
