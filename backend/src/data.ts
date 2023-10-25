import { Product } from "./types/Product";

export const sampleProducts: Product[] = [
    {
        name: "Nike Slim Shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "../images/p1.jpg",
        price: 120,
        countInStock: 10,
        brand: "nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt"
    },
    {
        name: "Adidas Fit Shirt",
        slug: "adidas-fit-shirt",
        category: "Shirts",
        image: "../images/p2.jpg",
        price: 100,
        countInStock: 20,
        brand: "Adidas",
        rating: 4.0,
        numReviews: 10,
        description: "high quality product"
    },
    {
        name: "Lacoste Free Pants",
        slug: "lacoste-free-pants",
        category: "Pants",
        image: "../images/p3.jpg",
        price: 200,
        countInStock: 0,
        brand: "Lacoste",
        rating: 3.8,
        numReviews: 17,
        description: "high quality product"
    },
    {
        name: "Nike Slim Pants",
        slug: "nike-slim-pants",
        category: "Pants",
        image: "../images/p4.jpg",
        price: 150,
        countInStock: 12,
        brand: "Nike",
        rating: 4.8,
        numReviews: 25,
        description: "high quality product"
    }
]