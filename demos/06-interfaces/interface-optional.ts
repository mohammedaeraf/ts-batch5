interface Product {
  name: string;
  price: number;
  description?: string; // Optional
}

const p1: Product = {
  name: "Phone",
  price: 30000,
};

const p2: Product = {
  name: "Laptop",
  price: 80000,
  description: "A high-end gaming laptop",
};

console.log(p1);
