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
        let id = prompt("Enter id:");
        id = parseInt(id);
        let name = prompt("Enter name:");
        let price = prompt("Enter price:");
        price = parseFloat(price);
        let description = prompt("Enter description:");

        name = new Product(id,name,price,description);
        this.listProduct.push(name);

        this.showProduct();
    };

    this.showProduct = function ()  {
        let html = "";

        for(let i=0; i < productManagement.listProduct.length; i++){
            html += "<tr>";
            html += "<td>" + productManagement.listProduct[i].id + "</td>";
            html += "<td>" + productManagement.listProduct[i].name + "</td>";
            html += "<td>" + productManagement.listProduct[i].price + "</td>";
            html += "<td>" + productManagement.listProduct[i].description + "</td>";
            html += "<td>" + "<button onclick='productManagement.deleteProduct(" + i + ")'>Delete</button>" + "</td>";
            html += "<td>" + "<button onclick='productManagement.editProduct("+ i + ")'>Edit</button>" + "</td>";
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
        id = parseInt(id);
        let name = prompt("Enter name:");
        let price = prompt("Enter price:");
        price = parseFloat(price);
        let description = prompt("Enter description:");

        this.listProduct[index].edit(id,name,price,description);
        this.showProduct();
    };
};










