class Product1
{
    Id:number;
    Name:string;
    Price:number;

    constructor(Id:number,Name:string,Price:number)
    {
        this.Id=Id;
        this.Name=Name;
        this.Price=Price;
    }
    discount():number
    {
        const discount_amt=(this.Price*10)/100;
        const discount_price=this.Price-discount_amt;
        return discount_price;
    }

    display():void
    {
        const discount_price=this.discount();
        console.log(`product Id: ${this.Id}`);
        console.log(`product Name: ${this.Name}`);
        console.log(`actual price: ${this.Price}`);
        console.log(`discount price: ${discount_price}`);

    }
}
const p=new Product1(1,"bhakti",43422);
p.display();