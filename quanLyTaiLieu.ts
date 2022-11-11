 export class TaiLieuChung{
     _maTaiLieu:number;
     _nhaXuatBan:string;
     _soBanPhatHanh:number;

    constructor(maTaiLieu: number, nhaXuatBan: string, soBanPhatHanh: number) {
        this._maTaiLieu = maTaiLieu;
        this._nhaXuatBan = nhaXuatBan;
        this._soBanPhatHanh = soBanPhatHanh;
    }

    getMaTaiLieu(): number {
        return this._maTaiLieu;
    }

    setMaTaiLieu(value: number) {
        this._maTaiLieu = value;
    }

    getNhaXuatBan(): string {
        return this._nhaXuatBan;
    }

    setNhaXuatBan(value: string) {
        this._nhaXuatBan = value;
    }

    getSoBanPhatHanh(): number {
        return this._soBanPhatHanh;
    }

    setSoBanPhatHanh(value: number) {
        this._soBanPhatHanh = value;
    }
}
