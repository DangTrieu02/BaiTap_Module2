import {TaiLieuChung} from "./quanLyTaiLieu";

export class Sach extends TaiLieuChung {
    private _tenTacGia:string;
    private _soTrang:number;

    constructor(maTaiLieu: number, nhaXuatBan: string, soBanPhatHanh: number, tenTacGia: string, soTrang: number) {
        super(maTaiLieu, nhaXuatBan, soBanPhatHanh);
        this._tenTacGia = tenTacGia;
        this._soTrang = soTrang;
    }

    getTenTacGia(): string {
        return this._tenTacGia;
    }

    setTenTacGia(value: string) {
        this._tenTacGia = value;
    }

    getSoTrang(): number {
        return this._soTrang;
    }

    setSoTrang(value: number) {
        this._soTrang = value;
    }
}
let listSach: Sach[]=[];
function themSach(){
    listSach.push()
}
