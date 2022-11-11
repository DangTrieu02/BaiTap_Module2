import {TaiLieuChung} from "./quanLyTaiLieu";

export class Bao extends TaiLieuChung {
    private _ngayPhatHanh:string;

    constructor(maTaiLieu: number, nhaXuatBan: string, soBanPhatHanh: number, ngayPhatHanh: string) {
        super(maTaiLieu, nhaXuatBan, soBanPhatHanh);
        this._ngayPhatHanh = ngayPhatHanh;
    }

    getNgayPhatHanh(): string {
        return this._ngayPhatHanh;
    }

    setNgayPhatHanh(value: string) {
        this._ngayPhatHanh = value;
    }
}

