class Product {
    constructor(id, title, price, speed, discription, modal, city) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.speed = speed;
        this.discription = discription;
        this.modal = modal;
        this.city = city
    }
}
export const PRODUCTS = [
    new Product(
        'c1',
        '2018 Porsche Panamera GTS',
        '17,997',
        "21,000",
        'Gas',
        2018,
        'Toronto'
    ), new Product(
        'c2',
        '2018 Porsche Panamera GTS',
        '17,997',
        "21,000",
        'Gas',
        2018,
        'Toronto'
    ), new Product(
        'c3',
        '2018 Porsche Panamera GTS',
        '17,997',
        "21,000",
        'Gas',
        2018,
        'Toronto'
    ), new Product(
        'c4',
        '2018 Porsche Panamera GTS',
        '17,997',
        "21,000",
        'Gas',
        2018,
        'Toronto'
    ), new Product(
        'c5',
        '2018 Porsche Panamera GTS',
        '17,997',
        "21,000",
        'Gas',
        2018,
        'Toronto'
    )
];
export default Product