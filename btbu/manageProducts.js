let productsList = ["Oppo Renno7" , "Iphone XS" , "Samsung Zfold 3" , "Xiaomi Redmi 10"];
let amount = [18 , 15 , 16 , 12];
let images = ["https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_29803/oppo-reno7-z-5g_main_111_1020.png.webp",
              "https://didongmango.com/images/products/2022/06/10/original/xt_1654880443.jpg.jpg",
              "https://cdn.tgdd.vn/Products/Images/42/248284/samsung-galaxy-z-fold-3-green-1-600x600.jpg",
              "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/19/637649621484624400_xiaomi-redmi-10-xam-1.jpg"];
let imgTemp;
let imgTemp_1;
              // Hàm hiển thị

function showAllProducts() {
    let content = ""
    for (let i =0; i < productsList.length; i++) {
        content += "<tr>" +
                        "<td class ='nameProducts'>" + productsList[i] + "</td>" +
                        "<td class ='imageProducts'><img src='" + images[i] + "'></td>" +
                        "<td class ='amoutProducts'>" + amount[i] + "</td>" +
                        "<td><button onclick ='editProducts("+i+")'>Edit</button> <button onclick = 'delProducts("+i+")'>Delete</button></td>" +
                    "</tr>"
    }
    document.getElementById("products").innerHTML = content;
}showAllProducts();
console.log(images)

// Hàm để tạo sản phẩm
// Có điều kiện để tạo trùng sản phẩm thì alert ra hộp thoại
function createNewProducts() {
    let newP = document.getElementById("newP").value;
    let amountP = document.getElementById("amountP").value;
    let imgP =   document.getElementById('image').getAttribute('src');
    let flag = false;
    if (newP == '' || amountP == '') {
        // alert('Please enter the details');
        document.getElementById("errorName").style.display = "block";
        document.getElementById("errorAmount").style.display = "block";
    } else if (newP !== '' || amountP == '') {
        for (let i =0; i < productsList.length; i++) {
            if (newP == productsList[i]) {
                flag = true;
            }
        }
        if (flag == false) {
            amount.push(amountP);
            productsList.push(newP);
            images.push(imgP);
            showAllProducts();
            document.getElementById("newP").value = "";
            document.getElementById("amountP").value = "";
        }else {
            alert("Sản phẩm đã có trong dach sách");
            document.getElementById("newP").value = "";
            document.getElementById("amountP").value = "";
        }
    }
}
// Hàm để xóa sản phẩm 
// có tham số để truyền vào vị trí cần xóa
function delProducts(index) {
    let check = confirm("Bạn có chắc chắn muốn xóa? ");
    if (check == true){
        productsList.splice(index, 1);
        amount.splice (index, 1);
        images.splice (index, 1);
        showAllProducts();
    }
}

// Hàm để edit
// Sửa sản phẩm theo tham số index
// Cho người dụng nhập vào sp mới
// Gán lại sp cho sp cũ
// hiển thị lại danh sách 
let editCheck = true; //biến để edit hàng này thì không được edit hàng khác
function editProducts(index) {
    let check = document.getElementsByClassName('nameProducts')[index].innerHTML;
    let check_1 = document.getElementsByClassName('amoutProducts')[index].innerHTML;
    let check_2 = document.getElementsByClassName('imageProducts')[index].innerHTML;
    if (check == productsList[index] && check_1 == amount[index] && editCheck == true) {
        document.getElementsByClassName('nameProducts')[index].innerHTML =  '<input type="text"  id="changeNameProducts" value="' + check + '">';
        document.getElementsByClassName('imageProducts')[index].innerHTML = '<input type="file"  id="changeImageProducts" onChange="chooseFile(this)" >';
        document.getElementsByClassName('amoutProducts')[index].innerHTML = '<input type="number"  id="changeAmoutProducts" min="0" value="' + check_1 + '">';
        editCheck = false;
    }
    if (check != productsList[index] && check_1 != amount[index] && editCheck == false) {
        productsList[index] = document.getElementById("changeNameProducts").value;
        document.getElementsByClassName('nameProducts')[index].innerHTML = productsList[index];
        amount[index] = document.getElementById("changeAmoutProducts").value;
        document.getElementsByClassName('amoutProducts')[index].innerHTML = amount[index];
        images[index] = document.getElementById("changeImageProducts").value;
        document.getElementsByClassName('imageProducts')[index].innerHTML = images[index];
    
           images[index]= imgTemp;
        editCheck = true;
        showAllProducts();
    }
    
}
// Hàm để tìm kiếm
function searchProducts() {
    let productName = document.getElementById("newP").value;
    if (productName === "" || productName === null || productName === undefined) return showAllProducts();
    var productSearch = [];
    var amountSearch = [];
    var imagesSearch = [];
    for (let i = 0; i<productsList.length; i++) {
        if (productsList[i].includes(productName)) {
            productSearch.push(productsList[i]);
            amountSearch.push(amount[i]);
            imagesSearch.push (images[i]);
        }
    }
    let content = "";
    for (let i =0; i < productSearch.length; i++) {
        content += "<tr>" +
                        "<td>" + productSearch[i] + "</td>" +
                        "<td><img src='" + imagesSearch[i] + "'></td>" +
                        "<td>" +  amountSearch [i] + "</td>" +
                        "<td><button onclick ='editProducts("+i+")'>Sửa</button> <button onclick = 'delProducts("+i+")'>Xóa</button></td>" +
                    "</tr>"
    }
    document.getElementById("products").innerHTML = content;
    
}
//hàm upload ảnh phần edit
function chooseFile(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            // $('#image').attr('src', e.target.result);
        imgTemp=e.target.result;
    }
        reader.readAsDataURL(fileInput.files[0]);
        console.log(fileInput.files[0])
        
        
    }
}
// hàm upload ảnh phần create
function chooseFileCreate(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            // $('#image').attr('src', e.target.result);
        document.getElementById('image').setAttribute('src',e.target.result);

        
    }
        reader.readAsDataURL(fileInput.files[0]);
        console.log(fileInput.files[0])
        
        
    }
}