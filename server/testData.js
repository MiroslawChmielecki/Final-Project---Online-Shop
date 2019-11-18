const Product = require("./models/product.model");

const loadTestData = async () => {
  const data = [
    {
      id: "21sd42sdsaaf",
      name: "product 1",
      img: { src: "../client/src/images/productsImages/soccerBall1.jpg" },
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: 33,
      tag: "nowość",
      quantity: 0
    },
    {
      id: "1122sfgdf",
      name: "product 2",
      img: { src: "../client/src/images/productsImages/soccerBall2.jpg" },
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: 45,
      tag: "nowość",
      quantity: 0
    },
    {
      id: "3",
      name: "product 3",
      img: { src: "../client/src/images/productsImages/soccerBall3.jpg" },
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: 65,
      tag: "nowość",
      quantity: 0
    },
    {
      id: "4",
      name: "product 4",
      img: { src: "../client/src/images/productsImages/soccerBall4.jpg" },
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: 56,
      tag: "nowość",
      quantity: 0
    },
    {
      id: "5",
      name: "product 5",
      img: { src: "../client/src/images/productsImages/soccerGloves1.jpg" },
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: 78,
      tag: "nowość",
      quantity: 0
    },
    {
      id: "6",
      name: "product 6",
      img: { src: "../client/src/images/productsImages/soccerGloves2.jpg" },
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: 26,
      tag: "nowość",
      quantity: 0
    },
    {
      id: "7",
      name: "product 7",
      img: { src: "../client/src/images/productsImages/soccerGloves3.jpg" },
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: 55,
      tag: "nowość",
      quantity: 0
    }
  ];

  try {
    let counter = await Product.countDocuments();
    if (counter === 0) {
      console.log("No products, Loading data...");
      await Product.create(data);
      console.log("Test data has been successfully loaded");
    }
  } catch (err) {
    console.log("Couldn't load test data", err);
  }
};

module.exports = loadTestData;
