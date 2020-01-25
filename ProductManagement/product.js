let Product = function (id,name,price,description) {
    let obj = this;
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;

    this.getId = function () {
        return this.id;
    };
    this.getName = function () {
        return this.name;
    };
    this.getPrice = function() {
        return this.price;
    };
    this.getDescription = function () {
        return this.description;
    };

    this.changeId = function (newId) {
        this.id = newId;
    };
    this.changeName = function (newName) {
        this.name = newName;
    };
    this.changePrice = function (newPrice) {
        this.price = newPrice;
    };
    this.changeDescription = function (newDes) {
        this.description = newDes;
    };
    this.edit = function (newId,newName,newPrice,newDescription ) {
        obj.changeName(newName);
        obj.changePrice(newPrice);
        obj.changeDescription(newDescription);
        obj.changeId(newId);
    }
};

let ProductManagement = function () {
    this.listProduct = [];

    this.addProduct = function () {
        let id = document.getElementById("product-id").value;
        document.getElementById("product-id").value = "";
        let name = document.getElementById("product-name").value;
        document.getElementById("product-name").value = "";
        let price = document.getElementById("product-price").value;
        document.getElementById("product-price").value = "";
        price = parseFloat(price);
        let description = document.getElementById("product-description").value;
        document.getElementById("product-description").value = "";

        id = new Product(id,name,price,description);
        this.listProduct.push(id);

        this.showProduct();

    };

    this.showProduct = function ()  {
        let html = "<tr>";
        html += "<th>Tên mã sản phẩm</th>";
        html += "<th>Tên sản phẩm</th>";
        html += "<th>Giá sản phẩm</th>";
        html += "<th>Mô tả sản phẩm</th>";
        html += "<th colspan='2'>Xóa/Sửa sản phẩm</th>";
        html += "</tr>";

        for(let i=0; i < productManagement.listProduct.length; i++){
            html += "<tr>";
            html += "<td>" + productManagement.listProduct[i].id + "</td>";
            html += "<td>" + productManagement.listProduct[i].name + "</td>";
            html += "<td>" + productManagement.listProduct[i].price + "</td>";
            html += "<td>" + productManagement.listProduct[i].description + "</td>";
            html += "<td style='text-align: center'>" + "<button onclick='productManagement.deleteProduct(" + i + ")'>Delete</button>" + "</td>";
            html += "<td style='text-align: center'>" + "<button onclick='productManagement.editProduct("+ i + ")'>Edit</button>" + "</td>";
            html += "</tr>"
        }

        document.getElementById("table").innerHTML = html ;
    };

    this.deleteProduct = function (index) {
        this.listProduct.splice(index,1);
        this.showProduct();
    };

    this.editProduct = function (index) {
        let id = prompt("Enter id:");
        let name = prompt("Enter name:");
        let price = prompt("Enter price:");
        price = parseFloat(price);
        let description = prompt("Enter description:");

        this.listProduct[index].edit(id,name,price,description);
        this.showProduct();
    };
};










