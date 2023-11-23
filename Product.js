var Product1 = /** @class */ (function () {
    function Product1(Id, Name, Price) {
        this.Id = Id;
        this.Name = Name;
        this.Price = Price;
    }
    Product1.prototype.discount = function () {
        var discount_amt = (this.Price * 10) / 100;
        var discount_price = this.Price - discount_amt;
        return discount_price;
    };
    Product1.prototype.display = function () {
        var discount_price = this.discount();
        console.log("product Id: ".concat(this.Id));
        console.log("product Name: ".concat(this.Name));
        console.log("actual price: ".concat(this.Price));
        console.log("discount price: ".concat(discount_price));
    };
    return Product1;
}());
var p = new Product1(1, "bhakti", 43422);
p.display();
