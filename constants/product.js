export const products = [
  {
    //change detailUrl : 'http://......' to
    // detailUrl: {
    //      imgOne: 'http://......'
    //      imgTwo: 'http://......'
    //      imgThree: 'http://......'
    //      imgFour: 'http://......'
    // }
    // or to an array of images
    // change arUrl: 'http://......' to
    // arModel: {
    //      androidModel: 'http://......'
    //      iosModel: 'http://......'
    // }
    // images & models are to be stored in google drive as per product id
    id: "product1",
    url: "https://drive.google.com/uc?export=view&id=1foraAQ7HiXmKeeLgAVagr9bbPRdwpP2K",
    detailUrl:
      "https://media.architecturaldigest.com/photos/5b68b771e4ca455528fdf8c5/master/w_1600%2Cc_limit/The%252520Inside%252520Banana%252520Palm%252520Cocktail%252520Ottoman.jpg",
    title: {
      shortTitle: "Blue Sofa",
      longTitle: "Cologne 2 Seater Sofa in Blue Colour",
    },
    price: {
      mrp: 35999,
      cost: 23040,
      discount: "36%",
    },
    description:
      "This type is attributed to Thomas W. Lawson, an American businessman and author who commissioned the model for extra comfort. You can find textile and leather finishes and various embedded materials, including metal and wood.",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
    arUrl: "https://soham-madhav.github.io/webAR-products/blueSofa.html",
    arModel: {
      android: "./assets/product1/bluesofa.glb",
      ios: "./assets/product1/bluesofa.usdz",
    },
  },
  {
    id: "product2",
    url: "https://drive.google.com/uc?export=view&id=1pTc3FIvvxa47mEa6gTnwU9qXPFSWL12l",
    detailUrl:
      "https://theinside.imgix.net/products/wwvaP49iXb4Bi1zkitKQqXRIxsG13KFDvIGjOXtO.jpeg?auto=compress%2Cformat&ixlib=react-9.0.3&w=798",
    title: {
      shortTitle: "Bed",
      longTitle: "Solid Wood King Size Asian Bed",
    },
    price: {
      mrp: 80000,
      cost: 64000,
      discount: "20%",
    },
    description:
      "Beautiful bed on a dark grain wood board. High quality model perfect for a bedroom scene. Comes with the textures baked in 4k/2k/1k for better optimization.",
    discount: "From 99+5% Off",
    tagline: "Pestige, Nova & more",
    arUrl: "https://soham-madhav.github.io/webAR-products/asianBed.html",
    arModel: {
      android: "./assets/product2/asian-bed.glb",
      ios: "./assets/product2/asian-bed.usdz",
    },
  },
  {
    id: "product3",
    url: "https://drive.google.com/uc?export=view&id=1zJE4j3gOYyrQ8lbEx3_oMLQfNw20ULtz",
    detailUrl:
      "https://theinside.imgix.net/products/kpxIMiSq2vBLRGgXeJDTFdUCq4kXvJ9M0cBBavmd.jpeg?auto=compress%2Cformat&ixlib=react-9.0.3&w=798",
    title: {
      shortTitle: "Red Shelf",
      longTitle: "Classic Red Shelf",
    },
    price: {
      mrp: 24530,
      cost: 18398,
      discount: "25%",
    },
    description:
      "This shelf is ideal for both home or office. Designed with large storage shelves to save your space",
    discount: "Upto 70% Off",
    tagline: "Deal of the Day",
    arUrl: "https://soham-madhav.github.io/webAR-products/redShelf.html",
    arModel: {
      android: "./assets/product3/shelf.glb",
      ios: "./assets/product3/shelf.usdz",
    },
  },
  {
    id: "product4",
    url: "https://drive.google.com/uc?export=view&id=1SqAht7sZrPW9anGP12Di800nonjdqZ26",
    detailUrl:
      "https://theinside.imgix.net/products/XLpm4BetCFMVtJ38O8NrteCXfEO9dmeyF8uEq90H.jpeg?auto=compress%2Cformat&ixlib=react-9.0.3&w=798",
    title: {
      shortTitle: "Classic single Sofa",
      longTitle: "Cologne 1 Seater Sofa Green Colour",
    },
    price: {
      mrp: 17999,
      cost: 10800,
      discount: "40%",
    },
    description:
      "This type is attributed to Thomas W. Lawson, an American businessman and author who commissioned the model for extra comfort. You can find textile and leather finishes and various embedded materials, including metal and wood.",
    discount: "Grab Now",
    tagline: "Best Seller",
    arUrl: "https://soham-madhav.github.io/webAR-products/biggreenchair.html",
    arModel: {
      android: "./assets/product4/bigchair.glb",
      ios: "./assets/product4/bigchair.usdz",
    },
  },
  {
    id: "product5",
    url: "https://drive.google.com/uc?export=view&id=1-9r382GZuDSLfS_aY_AHKyhmPc_yp9rj",
    detailUrl:
      "https://theinside.imgix.net/products/T7Q5i5CGOFTSim4uEiYvbE22bdllyIPISXhsLpA1.jpg?auto=compress%2Cformat&ixlib=react-9.0.3&w=798",
    title: {
      shortTitle: "RHS Sofa",
      longTitle: "Forenster 4-Seater RHS Sofa Set in Dark Grey Colour",
    },
    price: {
      mrp: 45000,
      cost: 34838,
      discount: "23%",
    },
    description:
      "A Sectional Corner Sofa is not defined by a lounger on the right or left side and can fit in any corner of the living room.  It is a RHS sectional sofa which is very fluid, simplistic style which takes its cues from the in-vogue polishes, textures and colours of the season and is bereft of any ornamentation or embellishments. In this style you can see nods to modern, traditional, art deco and even futuristic design.",
    discount: "From ₹499",
    tagline: "Kubra, Nova & more",
    arUrl: "https://soham-madhav.github.io/webAR-products/grayLsofa.html",
    arModel: {
      android: "./assets/product5/grayLsofa.glb",
      ios: "./assets/product5/grayLsofa.usdz",
    },
  },
  {
    id: "product6",
    url: "https://drive.google.com/uc?export=view&id=1abjWa8UtdvRZpVOmy5LQtOrdOGqxgINg",
    detailUrl:
      "https://theinside.imgix.net/products/8THjKHm3ai2WR5HsAIcurqUp44hBBdpFCxQaf3Lf.jpeg?auto=format",
    title: {
      shortTitle: "Cocoon Chair",
      longTitle: "Cocoon Chair with Water Drop Print",
    },
    price: {
      mrp: 10999,
      cost: 7499,
      discount: "32%",
    },
    description:
      "Cocoon Chairs are popular, arch-typical trademark chairs, having a certain character, status and legacy. These are Eames Iconic Replicas, contoured to fit a person. These blue colour cocoon chair represent the playful functionality of Mid-Century American design.",
    discount: "Minimum 40% Off",
    tagline: "Top Selling",
    arUrl: "https://soham-madhav.github.io/webAR-products/coconchair.html",
    arModel: {
      android: "./assets/product6/coconchair.glb",
      ios: "./assets/product6/coconchair.usdz",
    },
  },
  {
    id: "product7",
    url: "https://drive.google.com/uc?export=view&id=1o8IFtXvVOtU4-hHY24aGDA-BRw2TG21g",
    detailUrl:
      "https://theinside.imgix.net/products/hTxiNKszpquAWAiyYiOVXcvKzFeYj9ucoJqEYIvU.jpeg?auto=format",
    title: {
      shortTitle: "Dining Chair",
      longTitle: "Classic Cafe Dining Chair",
    },
    price: {
      mrp: 7299,
      cost: 5256,
      discount: "28%",
    },
    description:
      "On top of its tapered legs and mid-century-inspired frame, we gave our Classic Cafe Dining Chair a plain seat and backrest for extra comfort.",
    discount: "Minimum 50% Off",
    tagline: "Grab Now!",
    arUrl: "https://soham-madhav.github.io/webAR-products/rusticChair.html",
    arModel: {
      android: "./assets/product7/rusticchair.glb",
      ios: "./assets/product7/rusticchair.usdz",
    },
  },
  {
    id: "product8",
    url: "https://drive.google.com/uc?export=view&id=1wo8OuQtb8XxGOvQGSAUNk5Ar-YCAt9Qs",
    detailUrl:
      "https://theinside.imgix.net/products/cOmZCuJ0FIXUu3wh6JmD8c3UIJ25VqMyJ7WPZyh3.jpg?auto=format",
    title: {
      shortTitle: "Side Table",
      longTitle: "Cabin Storage Side Table (Back Unit)",
    },
    price: {
      mrp: 28880,
      cost: 17248,
      discount: "40%",
    },
    description: "Large capacity storage cabinet for office and home.",
    discount: "Minimum 50% Off",
    tagline: "Grab Now!",
    arUrl: "https://soham-madhav.github.io/webAR-products/sidetable.html",
    arModel: {
      android: "./assets/product8/sidetable.glb",
      ios: "./assets/product8/sidetable.usdz",
    },
  },
  {
    id: "product9",
    url: "https://drive.google.com/uc?export=view&id=1ZmeUXEG8D6GtkPfahUhAU4-DRdOeXeDY",
    detailUrl:
      "https://theinside.imgix.net/products/dSm1MDj2F0Chyf4TzIsnYG1wvm9Bc76KEUSufrkn.jpg?auto=format",
    title: {
      shortTitle: "Nightstand",
      longTitle: "Classic Woody Nightstand",
    },
    price: {
      mrp: 11599,
      cost: 8700,
      discount: "25%",
    },
    description:
      "This Nightstand features 2 spacious drawers for storage. Legs are crafted from wood and Drawer Pull is crafted from metal and finished in golden colour.",
    discount: "Minimum 50% Off",
    tagline: "Grab Now!",
    arUrl: "https://soham-madhav.github.io/webAR-products/nightstand.html",
    arModel: {
      android: "./assets/product9/nightstand.glb",
      ios: "./assets/product9/nightstand.usdz",
    },
  },
];
