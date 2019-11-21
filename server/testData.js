const Product = require("./models/product.model");

const loadTestData = async () => {
  const data = [
    {
      id: "1",
      name: "soccer ball classic",
      img: { src: "../../../images/productsImages/soccerBall1.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 33.99,
      tag: "new",
      quantity: 0
    },
    {
      id: "2",
      name: "complete baseball equipment hawks ",
      img: { src: "../../../images/productsImages/BaseballEquipment.png" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 109.99,
      tag: "",
      quantity: 0
    },
    {
      id: "3",
      name: "soccer gloves imperishable",
      img: { src: "../../../images/productsImages/soccerGloves3.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 49.99,
      tag: "last items",
      quantity: 0
    },
    {
      id: "4",
      name: "swimming googles thorpe",
      img: {
        src: "../../../images/productsImages/swimmingGoogle.jpg"
      },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 19.99,
      tag: "new",
      quantity: 0
    },
    {
      id: "5",
      name: "basket ball nba",
      img: { src: "../../../images/productsImages/basketBall2.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 99.99,
      tag: "new",
      quantity: 0
    },
    {
      id: "6",
      name: "soccer socks roberto",
      img: { src: "../../../images/productsImages/soccerSocks4.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 9.99,
      tag: "new",
      quantity: 0
    },
    {
      id: "7",
      name: "rugby ball tough",
      img: { src: "../../../images/productsImages/RugbyBall2.png" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 39.99,
      tag: "last items",
      quantity: 0
    },
    {
      id: "8",
      name: "soccer ball future",
      img: { src: "../../../images/productsImages/soccerBall2.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 45.99,
      tag: "new",
      quantity: 0
    },
    {
      id: "9",
      name: "soccer gloves fc",
      img: { src: "../../../images/productsImages/soccerGloves2.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 35.99,
      tag: "",
      quantity: 0
    },
    {
      id: "10",
      name: "basketball backboard jordan",
      img: { src: "../../../images/productsImages/basketBackboard.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 120.99,
      tag: "new",
      quantity: 0
    },
    {
      id: "11",
      name: "soccer ball oldschool",
      img: { src: "../../../images/productsImages/soccerBall3.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 49.99,
      tag: "",
      quantity: 0
    },
    {
      id: "12",
      name: "amazing soccer gloves miracle",
      img: { src: "../../../images/productsImages/soccerGloves1.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 79.99,
      tag: "",
      quantity: 0
    },
    {
      id: "13",
      name: "hockey helmet gretzky",
      img: { src: "../../../images/productsImages/HockeyHelmet.png" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 149.99,
      tag: "new",
      quantity: 0
    },
    {
      id: "14",
      name: "soccer ball terranova",
      img: { src: "../../../images/productsImages/soccerBall4.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 39.99,
      tag: "",
      quantity: 0
    },
    {
      id: "15",
      name: "badminton racket classic",
      img: { src: "../../../images/productsImages/BadmintonRacket2.png" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 18.99,
      tag: "",
      quantity: 0
    },
    {
      id: "16",
      name: "tennis ball",
      img: { src: "../../../images/productsImages/tennisBall1.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 6.99,
      tag: "",
      quantity: 0
    },
    {
      id: "17",
      name: "soccer socks sabibas",
      img: { src: "../../../images/productsImages/soccerSocks1.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 11.99,
      tag: "",
      quantity: 0
    },
    {
      id: "18",
      name: "basketball basket street",
      img: { src: "../../../images/productsImages/basketballBasket.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 62.99,
      tag: "last items",
      quantity: 0
    },
    {
      id: "19",
      name: "soccer gate fun",
      img: {
        src: "../../../images/productsImages/soccerGateBabyEquipment.jpg"
      },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 89.99,
      tag: "last items",
      quantity: 0
    },
    {
      id: "20",
      name: "baseball stick jusa",
      img: { src: "../../../images/productsImages/BaseballStick3.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 27.99,
      tag: "",
      quantity: 0
    },
    {
      id: "21",
      name: "tennis racket aga",
      img: { src: "../../../images/productsImages/tennisRacket1.png" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 119.99,
      tag: "",
      quantity: 0
    },
    {
      id: "22",
      name: "soccer ball century",
      img: { src: "../../../images/productsImages/soccerBall5.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 79.99,
      tag: "last items",
      quantity: 0
    },
    {
      id: "23",
      name: "hockey face mask hasek",
      img: { src: "../../../images/productsImages/HockeyFaceMask.png" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 62.99,
      tag: "new",
      quantity: 0
    },
    {
      id: "24",
      name: "rugby ball oldpearl",
      img: { src: "../../../images/productsImages/RugbyBall1.png" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 55.99,
      tag: "last items",
      quantity: 0
    },
    {
      id: "25",
      name: "basketball ball classic ",
      img: { src: "../../../images/productsImages/basketBall1.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 32.99,
      tag: "best price",
      quantity: 0
    },
    {
      id: "26",
      name: "soccer gloves dudi",
      img: { src: "../../../images/productsImages/soccerGloves4.jpg" },
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      price: 49.99,
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
