import {TaiLieuChung} from "./quanLyTaiLieu";

export class TapChi extends TaiLieuChung {
    private _soPhatHanh:number;
    private _thangPhatHanh:string;

    constructor(maTaiLieu: number, nhaXuatBan: string, soBanPhatHanh: number, soPhatHanh: number, thangPhatHanh: string) {
        super(maTaiLieu, nhaXuatBan, soBanPhatHanh);
        this._soPhatHanh = soPhatHanh;
        this._thangPhatHanh = thangPhatHanh;
    }

    getSoPhatHanh(): number {
        return this._soPhatHanh;
    }

    setSoPhatHanh(value: number) {
        this._soPhatHanh = value;
    }

    getThangPhatHanh(): string {
        return this._thangPhatHanh;
    }

    setThangPhatHanh(value: string) {
        this._thangPhatHanh = value;
    }
}
