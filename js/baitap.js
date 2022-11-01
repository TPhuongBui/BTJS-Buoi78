// Biến cục bộ
var numArray = [];
function themSo() {
    var num = Number(document.querySelector("#nhapSoN").value);
    numArray.push(num);
    console.log(numArray);
    document.querySelector("#nhapSoN").value = "";
}
document.querySelector("#btnThem").onclick = themSo;



// TÍNH TỔNG SỐ DƯƠNG //
function tinhTongSoDuong() {
    var tong = 0;
    for(var i = 0; i < numArray.length; i++){
        if (numArray[i] > 0) {
            tong += numArray[i];
        }
    }
    // console.log(tong);
    document.querySelector("#txtTongSoDuong").innerHTML = "Tổng các số dương là: " + tong;
}

document.querySelector("#btnTongSoDuong").onclick = tinhTongSoDuong;
// END //



// ĐẾM SỐ DƯƠNG //
function demSoDuong() {
    var dem = 0 ;
    for(var i = 0; i < numArray.length; i++){
        if (numArray[i] > 0) {
            dem ++;
        }
    }
    // console.log(dem);
    document.querySelector("#txtDemSoDuong").innerHTML = "Có " + dem + " số dương";
}

document.querySelector("#btnDemSoDuong").onclick = demSoDuong;
// END //



// TÌM SỐ NHỎ NHẤT TRONG MẢNG //
function timMin() {
// numArray = numArray.min();
console.log(Math.min(...numArray));
}

document.querySelector("#btnSoNhoNhat").onclick = timMin;
// END //


// TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG // 
function timMinDuong() {
    var positiveArray = [];
    for( var i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            positiveArray.push(numArray[i]);
            
            document.querySelector("#txtSoDuongNhoNhat").innerHTML = "Số dương nhỏ nhất là: " + Math.min(...positiveArray);

        }else{
            document.querySelector("#txtSoDuongNhoNhat").innerHTML = "Không có số dương nhỏ nhất nào";
    
        }
    }
    
    // console.log(Math.min(...positiveArray));
}

document.querySelector("#btnSoDuongNhoNhat").onclick = timMinDuong;
// END //



// TÌM SỐ CHẴN CUỐI CÙNG//
function soChanCuoiCung() {
    var lastEvenNumber = 0;
    for( var i = 0; i < numArray.length; i++){
        if(numArray[i] % 2 == 0){
            lastEvenNumber = numArray[i];
            document.querySelector("#txtSoChanCuoi").innerHTML = "Số chẵn cuối cùng là: " + lastEvenNumber;

        }else{
            lastEvenNumber = -1;
            document.querySelector("#txtSoChanCuoi").innerHTML = "Không có số chẵn cuối cùng nên kết quả là: " + lastEvenNumber;

        }
    }
    // console.log(lastEvenNumber);
    
}

document.querySelector("#btnSoChanCuoi").onclick = soChanCuoiCung;
// END //


// HOÁN ĐỔI VỊ TRÍ //
function changeIndex() {
    var index1 = Number(document.querySelector("#viTri1").value);
    var index2 = Number(document.querySelector("#viTri2").value);
    var temp = numArray[index1];
    numArray[index1] = numArray[index2];
    numArray[index2] = temp;
    console.log(numArray);

}

document.querySelector("#btnDoiCho").onclick = changeIndex;
// END //


// SẮP XẾP TĂNG DẦN //
function sapXepTangDan() {
    numArray = numArray.sort();
    console.log(numArray)
    document.querySelector("#txtSapXep").innerHTML = "Thứ tự tăng dần như sau: " + numArray;
}

document.querySelector("#btnSapXep").onclick = sapXepTangDan;
// END //


// TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN

function checkPrime(n) {
        if (n < 2)
            return false;
        for (var i = 2; i <= Math.sqrt(n); i++)
            if (n % i == 0)
                return false;
        return true;
    }

    
function findPrimeNumber() {
        for (var i = 0; i < numArray.length; i++) {
            if (checkPrime(numArray[i])) {
                console.log(numArray[i]);
                break;
            }

        }
    document.querySelector("#txtSoNTDau").innerHTML = "Số nguyên tố đầu tiên là: " + numArray[i];
        
}  
document.querySelector("#btnSoNTDau").onclick = findPrimeNumber;
// END //




// TÌM SỐ NGUYÊN TRONG MẢNG//

// Biến cục bộ //
var array2 = [];
function inputNum() {
    var num2 = Number(document.querySelector("#nhapSo").value);
    array2.push(num2);
    console.log(array2);
    document.querySelector("#nhapSo").value = "";
}
document.querySelector("#btnInput").onclick = inputNum;


function findInt() {
    var dem2 = 0
    for (i = 0; i < array2.length; i++){
        if (Number.isInteger(array2[i])) {
            dem2++;
        }
    }

    console.log(dem2);
    document.querySelector("#txtDemSoNguyen").innerHTML = "Có " + dem2 + " số nguyên";

}
document.querySelector("#btnDemSoNguyen").onclick = findInt;
// END //

// SO SÁNH SỐ ÂM VÀ SỐ DƯƠNG //
function compareNum() {
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < numArray.length; i++){
        if (numArray[i] > 0) {
            soDuong++;
            // document.querySelector("#txtSoSanh").innerHTML = "Số dương > Số âm";

        }else if(numArray[i] < 0){
            soAm++;
            // document.querySelector("#txtSoSanh").innerHTML = "Số dương < Số âm";
        }else{
            // document.querySelector("#txtSoSanh").innerHTML = "Số dương = Số âm";
        }
        // numArray[i] > 0 ? soDuong++ : numArray[i] < 0 && soAm++;
        document.querySelector("#txtSoSanh").innerHTML = soDuong > soAm ? "Số dương > Số âm" : soDuong < soAm ? "Số âm > Số dương" : "Số âm = Số dương"
    }
        
}

document.querySelector("#btnSoSanh").onclick = compareNum;

// END //
