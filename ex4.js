let giohang = [];  
let cuahang = [];  
function dachsangdienthoai() {  
    let hangdienthoai = prompt("Nhập thể loại điện thoại để xem:");  
    let locdienthoai = cuahang.filter(function(dienthoai) {  
        return dienthoai.hangdienthoai === hangdienthoai;  
    });  
    console.log("Danh sách điện thoại thuộc thể loại " + hangdienthoai + ":");  
    locdienthoai.forEach(function(dienthoai) {  
        console.log(`ID: ${dienthoai.id}, Tên điện thoại: ${dienthoai.tendienthoai}, Giá: ${dienthoai.giadienthoai}, Số lượng: ${dienthoai.soluongdienthoai}`);  
    });  
}    
function themdienthoaimoi() {  
    let dienthoaimoi = {  
        id: +prompt("Nhập mã điện thoại:"),  
        tendienthoai: prompt("Nhập tên điện thoại:"),  
        giadienthoai: +prompt("Nhập giá điện thoại:"),  
        soluongdienthoai: +prompt("Nhập số lượng điện thoại:"),  
        hangdienthoai: prompt("Nhập thể loại điện thoại:")  
    };  
    cuahang.push(dienthoaimoi);  
    console.log("Điện thoại đã được thêm vào kho.");  
}  
function timkiemdienthoai() {  
    let tukhoa = prompt("Nhập tên hoặc id điện thoại cần tìm:");  
    let dienthoaitimthay = cuahang.filter(function(dienthoai) {  
        return dienthoai.tendienthoai.includes(tukhoa) || dienthoai.id === +tukhoa;  
    });  
    if (dienthoaitimthay.length > 0) {  
        dienthoaitimthay.forEach(function(dienthoai) {  
            console.log(`ID: ${dienthoai.id}, Tên điện thoại: ${dienthoai.tendienthoai}, Giá: ${dienthoai.giadienthoai}, Số lượng: ${dienthoai.soluongdienthoai}`);  
        });  
    } else {  
        console.log("Không tìm thấy điện thoại nào.");  
    }  
}  
function muadienthoai() {  
    let madienthoai = +prompt("Nhập id điện thoại cần mua:");  
    let soluong = +prompt("Nhập số lượng điện thoại cần mua:");  
    let dienthoaicanmua = cuahang.find(function(dienthoai) {  
        return dienthoai.id === madienthoai;  
    });  
    if (dienthoaicanmua && dienthoaicanmua.soluongdienthoai >= soluong) {  
        let donhang = {  
            id: dienthoaicanmua.id,  
            tendienthoai: dienthoaicanmua.tendienthoai,  
            giadienthoai: dienthoaicanmua.giadienthoai,  
            soluong: soluong  
        };  
        giohang.push(donhang);  
        dienthoaicanmua.soluongdienthoai -= soluong;  
        console.log("Mua điện thoại thành công.");  
    } else {  
        console.log("Điện thoại không đủ số lượng hoặc không tồn tại.");  
    }  
}  
function sapxepdienthoaitheogia() {  
    let dienthoaidasapxep = cuahang.slice();  
    dienthoaidasapxep.sort(function(a, b) {  
        return a.giadienthoai - b.giadienthoai;  
    });  
    console.log("Danh sách điện thoại đã được sắp xếp theo giá:");  
    dienthoaidasapxep.forEach(function(dienthoai) {  
        console.log(`ID: ${dienthoai.id}, Tên điện thoại: ${dienthoai.tendienthoai}, Giá: ${dienthoai.giadienthoai}, Số lượng: ${dienthoai.soluongdienthoai}`);  
    });  
}  
function tinhtongdienthoaidamua() {  
    let tongsoluong = giohang.reduce(function(tong, dienthoai) {  
        return tong + dienthoai.soluong;  
    }, 0);  
    let tongtien = giohang.reduce(function(tong, dienthoai) {  
        return tong + (dienthoai.giadienthoai * dienthoai.soluong);  
    }, 0);  
    console.log(`Tổng số lượng điện thoại đã mua: ${tongsoluong}`);  
    console.log(`Tổng tiền trong giỏ hàng: ${tongtien} VNĐ`);  
}  
function soluongdienthoai() {  
    let tongdienthoaitrongkho = cuahang.reduce(function(tong, dienthoai) {  
        return tong + dienthoai.soluongdienthoai;  
    }, 0);  
    console.log(`Tổng số lượng điện thoại trong kho: ${tongdienthoaitrongkho}`);  
}  
let luaChon;  
do {  
    console.log("1. Hiển thị danh sách điện thoại theo hãng");  
    console.log("2. Thêm điện thoại mới vào cửa hàng");  
    console.log("3. Tìm kiếm điện thoại theo tên hoặc id");  
    console.log("4. Mua điện thoại (Nhập id điện thoại cần mua và số lượng, cập nhật lại cửa hàng)");  
    console.log("5. Thanh toán tất cả điện thoại trong giỏ hàng");  
    console.log("6. Sắp xếp điện thoại theo giá");  
    console.log("7. Tính tổng số lượng điện thoại đã mua và in ra tổng tiền trong giỏ hàng");  
    console.log("8. Hiển thị tổng số lượng điện thoại trong kho");  
    console.log("9. Thoát chương trình");  
    
    luaChon = +prompt("Mời bạn nhập lựa chọn");  
    
    switch (luaChon) {  
        case 1:  
            dachsangdienthoai();  
            break;  
        case 2:  
            themdienthoaimoi();  
            break;  
        case 3:  
            timkiemdienthoai();  
            break;  
        case 4:  
            muadienthoai();  
            break;  
        case 5:  
            tinhtongdienthoaidamua();  
            break;  
        case 6:  
            sapxepdienthoaitheogia();  
            break;  
        case 7:  
            tinhtongdienthoaidamua();  
            break;  
        case 8:  
            soluongdienthoai();  
            break;  
        case 9:  
            console.log("Cảm ơn bạn đã sử dụng chương trình!");  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");  
            break;  
    }  
} while (luaChon !== 9);  
