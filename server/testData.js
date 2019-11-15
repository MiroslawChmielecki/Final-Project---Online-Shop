const Product = require("./models/product.model");

const loadTestData = async () => {
  const data = [
    {
      id: "21sd42sdsaaf",
      name: "product 1",
      img: "../client/src/images/productsImages/soccerBall1.jpg",
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: "33$",
      tag: "nowość"
    },
    {
      id: "1122sfgdf",
      name: "product 2",
      img: "../client/src/images/productsImages/soccerBall2.jpg",
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: "33$",
      tag: "nowość"
    },
    {
      id: "1133ghgfdhgf",
      name: "product 3",
      img: "../client/src/images/productsImages/soccerBall3.jpg",
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: "23$",
      tag: "nowość"
    },
    {
      id: "1144gkjhdhgf",
      name: "product 4",
      img: "../client/src/images/productsImages/soccerBall4.jpg",
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: "23$",
      tag: "nowość"
    },
    {
      id: "1155gbvbcvdhgf",
      name: "product 5",
      img: "../client/src/images/productsImages/soccerGloves1.jpg",
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: "23$",
      tag: "nowość"
    },
    {
      id: "1166ghffghgf",
      name: "product 6",
      img: "../client/src/images/productsImages/soccerGloves2.jpg",
      description: "Lorem ipsum dipsum tipsum nipsum eliksipsum",
      price: "23$",
      tag: "nowość"
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
