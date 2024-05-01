export class Supply {
    constructor(id= 0, product = '', quantity = 0, location = '', expire = '') {
        this.id=id;
        this.product=product;
        this.quantity=quantity;
        this.location=location;
        this.expire=expire;
    }
}