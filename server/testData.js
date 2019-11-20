const Product = require("./models/product.model");

const loadTestData = async () => {
  const data = [
    {
      id: "1",
      name: "Soccer ball CLASSIC",
      img: { src: "../client/public/images/productsImages/soccerBall1.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 33.99,
      tag: "new",
      quantity: 0
    },
    {
      id: "2",
      name: "Soccer gloves IMPERISHABLE",
      img: { src: "../client/public/images/productsImages/soccerGloves3.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 49.99,
      tag: "new",
      quantity: 0
    },
    {
      id: "3",
      name: "Soccer ball FUTURE",
      img: { src: "../client/public/images/productsImages/soccerBall2.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 45.99,
      tag: "new",
      quantity: 0
    },
    {
      id: "4",
      name: "Soccer gloves FC",
      img: { src: "../client/public/images/productsImages/soccerGloves2.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 35.99,
      tag: "",
      quantity: 0
    },
    {
      id: "5",
      name: "Soccer ball OLDSCHOOL",
      img: { src: "../client/public/images/productsImages/soccerBall3.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 49.99,
      tag: "",
      quantity: 0
    },
    {
      id: "6",
      name: "Amazing soccer gloves MIRACLE",
      img: { src: "../client/public/images/productsImages/soccerGloves1.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 29.99,
      tag: "",
      quantity: 0
    },
    {
      id: "7",
      name: "Soccer ball TERRANOVA",
      img: { src: "../client/public/images/productsImages/soccerBall4.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 39.99,
      tag: "last items",
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
