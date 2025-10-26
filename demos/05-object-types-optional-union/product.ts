type Product = {
    id: number;
    title: string;
    price: number;
    description?: string;  // lenient
}

let product1: Product = {
    id: 101,
    title: "Wireless Mouse",
    price: 25.99,
    description: "A high-precision wireless mouse"
};   

let product2: Product = {
    id: 102,
    title: "USB-C Hub",
    price: 45.50
};