function tinhLuong() {
    let tienLuong = document.getElementById('tienLuong').value;
    let soNgay = document.getElementById('soNgay').value;
    let tongLuong = tienLuong * soNgay;
    document.getElementById('result1').innerHTML = tongLuong;
}

function tinhTrungBinh() {
    let a = document.getElementById('soThu1').value;
    let b = document.getElementById('soThu2').value;
    let c = document.getElementById('soThu3').value;
    let d = document.getElementById('soThu4').value;
    let e = document.getElementById('soThu5').value;

    let trungBinh = (Number(a) + Number(b) + Number(c) + Number(d) + Number(e)) / 5;

    document.getElementById('result2').innerHTML = trungBinh;
}

function quyDoiTien() {
    let soTien = document.getElementById('soTien').value;
    const tiGia = 24900;

    document.getElementById('result3').innerHTML = `${soTien * tiGia}`;
}

function tinhToan() {
    let chieuDai = document.getElementById('chieuDai').value;
    let chieuRong = document.getElementById('chieuRong').value;

    let dienTich = chieuDai * chieuRong;
    let chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;

    document.getElementById('result4').innerHTML = `Diện tích là ${dienTich}, chu vi là ${chuVi}`;
}