const products = [
  {
    id: 1,
    categories: ["laptop", "gaming"],
    name: "MSI Gaming Laptop",
    description: "Perfect for Professional Gamers needing portability",
    image: "/sample-product-1.jpg",
    price: 1099.99,
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        comment: "Great gaming laptop! Highly recommend.",
      },
      {
        user: "Jane Smith",
        rating: 4,
        comment: "Very good, but could be better.",
      },
    ]
  },
  {
    id: 2,
    categories: ["laptop", "gaming"],
    name: "MSI Laptop",
    description: "Perfect all around laptop for gamers and students",
    image: "/sample-product-2.jpg",
    price: 899.99,
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        comment: "Great student laptop! Highly recommend.",
      },
      {
        user: "Jane Smith",
        rating: 4,
        comment: "Very good, but could be better.",
      },
      {
        user: "John Doe",
        rating: 1,
        comment: "Great student laptop! Highly recommend.",
      },
      {
        user: "Jane Smith",
        rating: 2,
        comment: "Very good, but could be better.",
      },
    ]
  },
];

export default products;