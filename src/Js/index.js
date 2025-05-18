function tinhLuong () {
    let tienLuong = document.getElementById('tienLuong').value;
    let soNgay = document.getElementById('soNgay').value;
    let tongLuong = tienLuong * soNgay;
    document.getElementById('result1').innerHTML = tongLuong;
}

