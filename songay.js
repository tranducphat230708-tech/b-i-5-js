function tinhSoNgay() {
    let thang = parseInt(document.getElementById("thang").value);
    let thongBao = "";

    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            thongBao = "Tháng " + thang + " có 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            thongBao = "Tháng " + thang + " có 30 ngày";
            break;
        case 2:
            thongBao = "Tháng 2 có 28 hoặc 29 ngày";
            break;
        default:
            thongBao = "Vui lòng nhập tháng hợp lệ từ 1 đến 12!";
    }

    document.getElementById("ketQua").innerText = thongBao;
}