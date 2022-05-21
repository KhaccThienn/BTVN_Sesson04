class ConNguoi {
    ten: string;
    tuoi: number;
    gioiTinh: number;
    diaChi: string;

    constructor(ten: string, tuoi: number, gioiTinh: number, diaChi: string) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
        this.diaChi = diaChi;
    }

    checkGt (): string{
        if (this.gioiTinh == 1) {
            return "Nam";
        } else if (this.gioiTinh == 2) {
            return "Nu";
        } else {
            return "Bede";
        }
    };

    hienThiThongTin(): void {
        var tbody = document.getElementById('tbody-list');
        tbody.innerHTML += `
            <tr>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${this.checkGt()}</td>
                <td>${this.diaChi}</td>
            </tr>
        `;
    }
}

var cn1 = new ConNguoi("Thien", 18, 1, "Chuongg My");
var cn2 = new ConNguoi("JinD", 22, 3, "Hanoii");
cn1.hienThiThongTin();
cn2.hienThiThongTin();



class SinhVien extends ConNguoi {
    msv: string;
    diemToan: number;
    diemLy: number;
    diemHoa: number;

    constructor(ten: string, tuoi: number, gioiTinh: number, diaChi: string, msv: string, diemToan: number, diemLy: number, diemHoa: number) {
        super(ten, tuoi, gioiTinh, diaChi);
        super.checkGt();
        this.msv = msv;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }

    calcAvg(): number{
        return ( (this.diemToan + this.diemLy + this.diemHoa) / 3)
    }

    ranking(): string{
        let avg = this.calcAvg();

        if (avg < 5) {
            return 'Kem';
        } else if (avg >= 5 && avg < 8) {
            return 'Kha';
        } else {
            return 'Gioi';
        }
    }
    
    showSV(): void{        
        var tbody_sv = document.getElementById("tbody-list-sv");

        tbody_sv.innerHTML += `
            <tr>
                <td>${this.msv}</td>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${this.checkGt()}</td>
                <td>${this.diaChi}</td>    
                <td>${this.diemToan}</td>
                <td>${this.diemLy}</td>
                <td>${this.diemHoa}</td>
                <td>${this.calcAvg().toFixed(2)}</td>
                <td>${this.ranking()}</td>
            </tr>
        `;
    }
}

var sv1 = new SinhVien('Thien', 18, 1, 'Ha Noi', 'B9220', 9, 9, 9);
sv1.showSV();
var sv2 = new SinhVien('Tu', 18, 1, 'Ha Noi', 'B92312', 4, 4, 4);
sv2.showSV();



class NhanVien extends ConNguoi {
    mnv: string;
    luongCB: number;
    soNgayCong: number;

    constructor(ten: string, tuoi: number, gioiTinh: number, diaChi: string, mnv: string, luongCB: number, soNgayCong: number) {
        super(ten, tuoi, gioiTinh, diaChi);
        super.checkGt();
        this.mnv = mnv;
        this.luongCB = luongCB;
        this.soNgayCong = soNgayCong;
    }

    tinhLuong(): number{
        return this.luongCB * this.soNgayCong;
    }

    rankingSalary(): string{
        var salary = this.tinhLuong();

        if (salary < 7000000) {
            return 'Nhan Vien Cui Bap';
        } else if (salary < 10000000) {
            return "Nhan Vien Binh Dan";
        }else{
            return 'Can Bo Cao Cap';
        }
    }

    showNV(): void{
        var tbody_nv = document.getElementById("tbody-list-emp");
        tbody_nv.innerHTML += `
            <tr>
                <td>${this.mnv}</td>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${this.checkGt()}</td>
                <td>${this.diaChi}</td>
                <td>${this.soNgayCong}</td>
                <td>${this.luongCB}</td>
                <td>${this.tinhLuong()}</td>
                <td>${this.rankingSalary()}</td>
            </tr>
        `;
    }
}

var nv1 = new NhanVien('Thien', 18, 1, 'Ha Noi', 'b9220', 500000, 30);
nv1.showNV();
var nv2 = new NhanVien('Tu', 19, 2, 'nam Dinh', 'b2938123', 500000, 10);
nv2.showNV()