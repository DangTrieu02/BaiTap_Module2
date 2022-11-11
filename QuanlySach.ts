import {Sach} from "./classSach";
import {TapChi} from "./tapChi";
import {Bao} from "./classbao";

export class QuanlySach{
    static listSach: Sach[]=[];
    static listTapChi: TapChi[]=[];
    static listBao: Bao[]=[];
    //add
    static themSach(sach:Sach):void{
        QuanlySach.listSach.push(sach)
    }
    static themBao(bao:Bao):void{
        QuanlySach.listBao.push(bao)
    }
    static themTapChi(tapchi:TapChi):void{
        QuanlySach.listTapChi.push(tapchi)
    }
    //display
    static hienSach(){
        for (const sach of QuanlySach.listSach) {
            console.table(QuanlySach.listSach)
        }
    }
    static hienTapChi(){
        for (const tapChi of QuanlySach.listTapChi) {
            console.table(QuanlySach.listTapChi)
        }
    }
    static hienBao(){
        for (const bao of QuanlySach.listBao) {
            console.table(QuanlySach.listBao)
        }
    }
    //xoa
    static xoaSach(maTaiLieu:number):void {
        for (let i = 0; i <QuanlySach.listSach.length; i++) {
            if (QuanlySach.listSach[i]._maTaiLieu == maTaiLieu){
                QuanlySach.listSach.splice(i,1)
            }
        }
    }
    static xoaTapChi(maTaiLieu:number):void {
        for (let i = 0; i <QuanlySach.listTapChi.length; i++) {
            if (QuanlySach.listTapChi[i]._maTaiLieu == maTaiLieu){
                QuanlySach.listTapChi.splice(i,1)
            }
        }
    }
    static xoaBao(maTaiLieu:number):void {
        for (let i = 0; i < QuanlySach.listBao.length; i++) {
            if (QuanlySach.listBao[i]._maTaiLieu == maTaiLieu) {
                QuanlySach.listBao.splice(i, 1)
            }
        }
    }

    //timkiem
    static timKiemSach(maTaiLieu:number){
        for (let i = 0; i < this.listSach.length; i++) {
            if (QuanlySach.listSach[i]._maTaiLieu==maTaiLieu){
                console.log( QuanlySach.listSach[i])
            }
        }
        }
    static timKiemTapChi(maTaiLieu:number){
        for (let i = 0; i < this.listTapChi.length; i++) {
            if (QuanlySach.listTapChi[i]._maTaiLieu==maTaiLieu){
                console.log(QuanlySach.listTapChi[i])
            }
        }
    }
    static timKiemBao(maTaiLieu:number){
        for (let i = 0; i < this.listBao.length; i++) {
            if (QuanlySach.listBao[i]._maTaiLieu==maTaiLieu){
                console.log(QuanlySach.listBao[i])
            }
        }
    }
}
// vi du

//them tai lieu
let sach1 = new Sach(1,'aa',445,'bb',50)
QuanlySach.themSach(sach1)

let tapChi1 = new TapChi(2,'ko biet nua',22,44,'thang 12')
QuanlySach.themTapChi(tapChi1)

let bao1 = new Bao(3,'Bao doi Bao dom',22,'ngay 30')
QuanlySach.themBao(bao1)

//xoa

QuanlySach.xoaSach(1)

// tim kiem

QuanlySach.timKiemBao(3)

// hien thi
QuanlySach.hienSach()
QuanlySach.hienBao()
QuanlySach.hienTapChi()
