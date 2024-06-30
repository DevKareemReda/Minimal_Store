// all products

const search = [
  {
    id: 1,
    title: "Aster Backpack",
    categories: ["Backpacks", "Bags", "Messengers"],
    color: ["Black", "Blue", "Grey"],
    price: 69.99,
    description: [
      "The exterior of the Aster Backpack is crafted from high-quality, durable material, possibly a smooth nylon or a textured canvas, in a classic color like black or navy blue.",
      "This ensures the bag is both water-resistant and easy to clean. The zippers and hardware are sleek and robust, adding to its overall durability.For comfort, the Aster Backpack is equipped with padded shoulder straps that are adjustable, allowing for a customized fit. There's also a padded back panel, providing additional comfort and support when carrying heavier loads.",
      "At the top, a sturdy handle allows for easy carrying when not worn on the back. The main compartment, accessed by a smooth, dual zipper closure, offers generous storage capacity suitable for daily essentials and more. Inside, a padded sleeve provides protection for a laptop, secured with a hook-and-loop strap for added safety during transit.",
    ],

    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product01-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product01b-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product01c-1.jpg",
    ],
    rating: {
      count: 943467,
    },
    quantity: 1,
  },
  {
    id: 2,
    title: "Blue Bag",
    categories: ["Backpacks", "Bags", "Messengers"],
    color: ["Black", "Blue", "Grey"],
    price: 148.99,
    description: [
      "A blue bag typically conjures an image of a versatile and practical accessory. Imagine a medium-sized bag, rectangular in shape, crafted from a durable blue canvas material.",
      " It has a sturdy zipper running along its top,ensuring the contents remain secure. The shade of blue is deep and calming, reminiscent of a clear summer sky. On the front, there might be a small pocket with a velcro closure, handy for storing small items like keys or a phone. The bag features comfortable straps that allow it to be carried over the shoulder or by hand. Inside, it's lined with a soft, contrasting fabric, perhaps in a light grey or white, adding a touch of elegance.",
      "The bag's design is practical yet stylish: a single flap secured with silver clasps conceals its contents, promising security without sacrificing accessibility. Its corners are gently rounded, softened with use yet still retaining their shape. Stitched seams run neatly along its edges, a testament to careful craftsmanship.",
    ],
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product08-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product08b-1-768x768.jpg",
    ],
    rating: {
      count: 943434,
    },
    quantity: 1,
  },
  {
    id: 3,
    title: "Coast Bag",
    categories: ["Backpacks", "Bags", "Messengers"],
    color: ["Black", "Blue", "Grey"],
    price: 128.99,
    description: [
      "Comfort is prioritized with the Coast Bag, often featuring adjustable shoulder straps that are padded for enhanced support. This makes it comfortable to wear even when carrying heavier loads.",
      "Internally, the Coast Bag is well-organized with multiple compartments and pockets. A main compartment typically offers ample space for everyday items such as a wallet, keys, and a small water bottle. Additional pockets may be dedicated to storing electronics like a smartphone or tablet, ensuring everything has its place.",
      "Coast Bags usually have sturdy handles for carrying by hand and adjustable shoulder straps for comfortable wearing as a backpack or crossbody bag Closure: They may have zippered closures for security, often with durable, weather-resistant zippers.",
    ],
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product09-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product09b-1-768x768.jpg",
    ],
    rating: {
      count: 943435,
    },
    quantity: 1,
  },
  {
    id: 4,
    title: "Eugene Wallet",
    categories: ["Backpacks", "Bags", "Messengers"],
    color: ["Black", "Blue", "Grey"],
    price: 49.99,
    description: [
      "Eugene Wallet is a refined and functional accessory designed to organize essentials with elegance and simplicity.",
      "Externally, the Eugene Wallet features a clean and compact design that fits comfortably in the hand or pocket. It often showcases meticulous craftsmanship, with fine stitching and smooth edges contributing to its polished look. Some designs may incorporate embossed logos or discreet branding, adding a subtle touch of sophistication.",
      "The Eugene Wallet is crafted from premium materials such as full-grain leather or durable technical fabrics like ballistic nylon or ultra-high-molecular-weight polyethylene (UHMWPE). These materials ensure durability and a sleek appearance.",
    ],
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product07-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product07b-1-768x768.jpg",
    ],
    rating: {
      count: 943448,
    },
    quantity: 1,
  },
  {
    id: 5,
    title: "Grey Beanie",
    categories: ["Backpacks", "Bags", "Messengers"],
    color: ["Black", "Blue", "Grey"],
    price: 29.99,
    description: [
      "A grey beanie is a cozy and versatile headwear accessory that blends comfort with casual style. Picture a soft, knit fabric in a shade of grey that's neither too light nor too dark, offering a neutral tone that complements a variety of outfits.",
      "Externally, the Eugene Wallet features a clean and compact design that fits comfortably in the hand or pocket. It often showcases meticulous craftsmanship, with fine stitching and smooth edges contributing to its polished look. Some designs may incorporate embossed logos or discreet branding, adding a subtle touch of sophistication.",
      "The term grey encompasses various shades, from light heather grey to dark charcoal grey. The exact shade can vary depending on the manufacturer and style, offering options that can match different outfits and personal preferences.",
    ],
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product04-1.jpg",
    ],
    rating: {
      count: "943468-1",
    },
    quantity: 1,
  },
  {
    id: 6,
    title: "Horwood Cap",
    categories: ["Backpacks", "Bags", "Messengers"],
    color: ["Black", "Blue", "Grey"],
    price: 39.99,
    description: [
      "Many Horwood caps come with an adjustable suspension system (usually internal) to ensure a snug and comfortable fit for different head sizes.",
      "Ventilation: Some caps include ventilation holes or slots to improve airflow and comfort during prolonged wearChin Strap: Often equipped with a chin strap or harness to secure the cap in place, especially in environments where there is a risk of it being dislodged Primarily designed to protect the wearer's head from impacts.",
      "Historically, caps like the Horwood Cap were part of the academic regalia worn by scholars and students in European universities. They have evolved over time into symbolic attire worn during graduation ceremonies and other academic events.",
    ],
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product05-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product05c-1-768x768.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product05b-1-768x768.jpg",
    ],
    rating: {
      count: 943462,
    },
    quantity: 1,
  },
  {
    id: 7,
    title: "Leather Wallet",
    categories: ["Backpacks", "Bags", "Messengers"],
    color: ["Black", "Blue", "Grey"],
    price: 49.99,
    description: [
      "A leather wallet is a classic accessory that combines functionality with style. Typically small and compact, it is designed to hold essentials such as cash, cards, and sometimes coins.",
      "From a design perspective, leather wallets come in various styles ranging from minimalist bi-folds to more intricate tri-folds, each offering different compartments and organizational features. Some may have embossed patterns, stitching details, or metal accents, adding a touch of personalization or luxury.",
      "In summary, a leather wallet is not just a practical item for storing money and cards; it's also a statement of personal style and craftsmanship, making it a timeless accessory that can be passed down through generations.",
    ],
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product06b-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product06c-1-768x768.jpg",
    ],
    rating: {
      count: 943447,
    },
    quantity: 1,
  },
  {
    id: 8,
    title: "Odell Messenger",
    categories: ["Backpacks", "Bags", "Messengers"],
    color: ["Black", "Blue", "Grey"],
    price: 129.99,
    description: [
      "The Odell Messenger bag blends practical functionality with contemporary style, making it a versatile accessory for both professional and casual settings.",
      "From a structural standpoint, the Odell Messenger bag features a single shoulder strap that can be adjusted for comfort, allowing it to be worn across the body or over the shoulder. This design distributes weight evenly, making it convenient for commuting or traveling.",
      "Stylistically, the bag often boasts a clean and modern aesthetic, with minimalist designs or subtle accents such as leather trims, metal hardware, or embossed logos. This makes it suitable for professional environments while still maintaining a casual appeal that fits into everyday life.",
    ],
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product03-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product03b-1-768x768.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product03c-1-768x768.jpg",
    ],
    rating: {
      count: 943468,
    },
    quantity: 1,
  },
  {
    id: 9,
    title: "Woven Backpack",
    categories: ["Backpacks", "Bags", "Messengers"],
    color: ["Black", "Blue", "Grey"],
    price: 119.99,
    description: [
      "A woven backpack bag exudes a distinctive charm with its intricate craftsmanship and practical design. Typically made from materials such as woven straw, rattan.",
      "Structurally, the woven backpack is lightweight and flexible, making it comfortable to carry for extended periods. It often features adjustable shoulder straps that ensure a customizable fit, allowing you to wear it comfortably whether you're hiking, shopping, or exploring new places.",
      "Stylistically, the woven backpack embodies a relaxed and carefree vibe, making it a popular choice for outdoor activities, vacations, or simply adding a bohemian touch to your wardrobe. Its natural materials and craftsmanship also contribute to its eco-friendly appeal, appealing to those conscious of sustainable fashion choices.",
    ],
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product02-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product02b-1-768x768.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product02c-1-768x768.jpg",
    ],
    rating: {
      count: 943465,
    },
    quantity: 1,
  },
  {
    id: 10,
    title: "blog",
    date: "Monday, 22 January 2018",
  },
  {
    id: 11,
    title: "about",
    date: "Monday, 22 January 2018",
  },
  {
    id: 12,
    title: "contact",
    date: "Monday, 22 January 2018",
  },
  {
    id: 13,
    title: "shop",
    date: "Monday, 22 January 2018",
  },
  {
    id: 14,
    title: "carts",
    date: "Monday, 22 January 2018",
  },
  {
    id: 15,
    title: "My account",
    date: "Monday, 22 January 2018",
  },
  {
    id: 16,
    title: "checkout",
    date: "Monday, 22 January 2018",
  },
  {
    id: 17,
    title: "home",
    date: "Monday, 22 January 2018",
  },
  {
    id: 18,
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/post06.jpg",
      "https://secure.gravatar.com/avatar/fffe06841f263355f3b6a99f4280ef49?s=46&d=mm&r=g",
    ],
    title: "Holisticly expedite customer directed",
    date: "Saturday, 06 January 2023",
    description: [
      "Holisticly expedite customer directed - it sounds like a marketing or business jargon phrase that could mean to efficiently accelerate processes that directly impact customer satisfaction and direction in a comprehensive manner. Essentially, it suggests a strategy or approach aimed at swiftly addressing and fulfilling customer needs in a thorough and all-encompassing way.",
      "Imagine a business strategy where every step and action is meticulously designed to swiftly cater to customer demands and preferences in a thorough and thoughtful manner. From initial inquiry to final delivery or service, every aspect of the customer experience is streamlined and optimized for efficiency and customer satisfaction. This approach ensures that customers receive prompt and comprehensive service that meets their needs and expectations seamlessly.",
      "For instance, a company following this strategy might employ advanced technologies to quickly respond to customer inquiries, personalize recommendations based on past interactions, and ensure swift delivery of products or services. This approach aims to enhance overall customer satisfaction by delivering a seamless and responsive experience at every touchpoint.",
    ],
  },

  {
    id: 19,
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/post03.jpg",
      "https://secure.gravatar.com/avatar/fffe06841f263355f3b6a99f4280ef49?s=46&d=mm&r=g",
    ],
    title: "Credibly productivate corporate",
    date: "Friday, 05 January 2023",
    description: [
      "Credibly productivate corporate appears to be another phrase with a business-oriented tone, likely used in marketing or corporate strategy contexts. Here's how we can interpret and describe it: This phrase suggests a strategy or approach that focuses on establishing credibility while effectively promoting and developing corporate initiatives or products.",

      "Imagine a corporate strategy that not only builds trust and credibility but also effectively promotes and develops its products or initiatives. It's about creating a solid reputation through meaningful actions and then leveraging that credibility to drive forward corporate goals, whether it's launching new products, expanding into new markets, or fostering innovation within the organization.",

      "Productivation: The process of bringing products or initiatives to life, from concept and development to execution and delivery. Corporate Focus: Applying these principles and strategies at a corporate level, ensuring alignment with overall business objectives and values.",
    ],
  },

  {
    id: 20,
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/post02.jpg",
      "https://secure.gravatar.com/avatar/fffe06841f263355f3b6a99f4280ef49?s=46&d=mm&r=g",
    ],
    title: "Energistically fabricate client-centered",
    date: "Thursday, 04 January 2024",
    description: [
      "Energistically fabricate client-centered is another phrase that seems to come from a business or marketing context. Here’s how we can interpret and describe it:This phrase suggests an energetic and proactive approach to creating solutions or services that are specifically tailored to meet the needs and preferences of clients.",
      "Imagine a business strategy that energetically focuses on creating products or services with the client's needs and preferences at the forefront. It's about being dynamic and proactive in designing and delivering solutions that directly address what clients want and value.",
      "Fabrication: The process of creating or producing solutions, products, or services that are customized and aligned with client expectations.Client-Centered Focus: Putting clients at the center of every decision and action, ensuring that their feedback and requirements guide the development and delivery of offerings.",
    ],
    publish: "Published in",
  },

  {
    id: 21,
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/post04.jpg",
      "https://secure.gravatar.com/avatar/fffe06841f263355f3b6a99f4280ef49?s=46&d=mm&r=g",
    ],
    title: "Phosfluorescently seize excellent",
    date: "Monday, 01 January 2023",
    description: [
      "Phosfluorescently seize excellent is a phrase that combines a scientific term with a call to action, likely used in a motivational or business context. Here’s a way to interpret and describe it:This phrase suggests a strategy or approach that involves seizing or capturing excellence in a vivid and impactful manner, possibly through innovative or illuminating means.",
      "Phosfluorescently seizing excellence evokes the image of capturing brilliance in a way that is both subtle and radiant. It's about grasping and embodying excellence in a manner that illuminates and inspires, akin to how phosphorescence softly glows in darkness. This phrase suggests achieving greatness or capturing attention through a quiet yet compelling presence",

      "leaving a lasting impression with its understated yet powerful impact.Intrinsicly mesh bleeding-edge metrics without client-centric communities. Energistically incentivize resource maximizing deliverables whereas tactical infomediaries. Appropriately reinvent customized architectures rather than turnkey solutions. Proactively empower prospective e-commerce vis-a-vis orthogonal manufactured products. Synergistically expedite bleeding-edge functionalities via goal-oriented “outside the box” thinking.",
    ],
  },

  {
    id: 22,
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/post05.jpg",
      "https://secure.gravatar.com/avatar/fffe06841f263355f3b6a99f4280ef49?s=46&d=mm&r=g",
    ],
    title: "Synergistically redefine accurate",
    date: "Wednesday, 03 January 2024",
    description: [
      "synergistically redefine accurate implies reshaping and enhancing precision through collaborative and harmonious efforts. It suggests a dynamic process where different elements or perspectives come together to update and improve the understanding or measurement of correctness. This phrase indicates a proactive approach to evolving standards or definitions, combining strengths and perspectives to establish a more effective and refined concept of accuracy.",
      "To synergistically redefine accurate is to collaboratively and harmoniously revise and enhance the understanding or definition of precision and correctness. It involves pooling diverse perspectives, knowledge, and expertise to collectively update and improve upon existing standards or definitions of accuracy.",

      "Synergistically redefining accurate involves a collaborative effort to transform and refine the concept of precision through the combined strengths of different perspectives and expertise. It's about integrating diverse insights and knowledge to update and improve the understanding of what constitutes accuracy.",
    ],
  },

  {
    id: 23,
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/post01.jpg",
      "https://secure.gravatar.com/avatar/fffe06841f263355f3b6a99f4280ef49?s=46&d=mm&r=g",
    ],
    title: "Phosfluorescently incubate e-business",
    date: "Tuesday, 02 January 2024",
    description: [
      "Phosfluorescently incubating e-business suggests nurturing and fostering online business initiatives in a way that radiates innovation and growth potential. It implies cultivating digital ventures with a subtle yet impactful glow, much like phosphorescence softly illuminates its surroundings. This phrase evokes the image of developing e-business strategies that are not only effective but also innovative and forward-thinking, fostering an environment where digital enterprises can thrive and evolve dynamically.",
      "Phosfluorescently incubating e-business involves nurturing and developing online ventures with a subtle yet powerful energy, akin to how phosphorescence softly illuminates its surroundings. It suggests fostering digital enterprises with innovative strategies and growth potential, creating an environment where new ideas and technologies can thrive and evolve.",
      "Phosfluorescently incubating e-business signifies nurturing and fostering digital ventures with a glow of innovation and potential. This approach involves cultivating online enterprises in a manner that softly but effectively illuminates their growth and development, much like phosphorescence radiates subtle light.",
    ],
  },
];

// const store = [
//   {
//     id: 1,
//     title: "Aster Backpack",
//     categories: ["Backpacks", "Bags", "Messengers"],
//     color: ["Black", "Blue", "Grey"],
//     price: 69.99,
//     description: [
//       "The exterior of the Aster Backpack is crafted from high-quality, durable material, possibly a smooth nylon or a textured canvas, in a classic color like black or navy blue.",
//       "This ensures the bag is both water-resistant and easy to clean. The zippers and hardware are sleek and robust, adding to its overall durability.For comfort, the Aster Backpack is equipped with padded shoulder straps that are adjustable, allowing for a customized fit. There's also a padded back panel, providing additional comfort and support when carrying heavier loads.",
//       "At the top, a sturdy handle allows for easy carrying when not worn on the back. The main compartment, accessed by a smooth, dual zipper closure, offers generous storage capacity suitable for daily essentials and more. Inside, a padded sleeve provides protection for a laptop, secured with a hook-and-loop strap for added safety during transit.",
//     ],

//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product01-1.jpg",
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product01b-1.jpg",
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product01c-1.jpg",
//     ],
//     rating: {
//       count: 943467,
//     },
//     quantity: 1,
//   },
//   {
//     id: 2,
//     title: "Blue Bag",
//     categories: ["Backpacks", "Bags", "Messengers"],
//     color: ["Black", "Blue", "Grey"],
//     price: 148.99,
//     description: [
//       "A blue bag typically conjures an image of a versatile and practical accessory. Imagine a medium-sized bag, rectangular in shape, crafted from a durable blue canvas material.",
//       " It has a sturdy zipper running along its top,ensuring the contents remain secure. The shade of blue is deep and calming, reminiscent of a clear summer sky. On the front, there might be a small pocket with a velcro closure, handy for storing small items like keys or a phone. The bag features comfortable straps that allow it to be carried over the shoulder or by hand. Inside, it's lined with a soft, contrasting fabric, perhaps in a light grey or white, adding a touch of elegance.",
//       "The bag's design is practical yet stylish: a single flap secured with silver clasps conceals its contents, promising security without sacrificing accessibility. Its corners are gently rounded, softened with use yet still retaining their shape. Stitched seams run neatly along its edges, a testament to careful craftsmanship.",
//     ],
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product08-1.jpg",
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product08b-1-768x768.jpg",
//     ],
//     rating: {
//       count: 943434,
//     },
//     quantity: 1,
//   },
//   {
//     id: 3,
//     title: "Coast Bag",
//     categories: ["Backpacks", "Bags", "Messengers"],
//     color: ["Black", "Blue", "Grey"],
//     price: 128.99,
//     description: [
//       "Comfort is prioritized with the Coast Bag, often featuring adjustable shoulder straps that are padded for enhanced support. This makes it comfortable to wear even when carrying heavier loads.",
//       "Internally, the Coast Bag is well-organized with multiple compartments and pockets. A main compartment typically offers ample space for everyday items such as a wallet, keys, and a small water bottle. Additional pockets may be dedicated to storing electronics like a smartphone or tablet, ensuring everything has its place.",
//       "Coast Bags usually have sturdy handles for carrying by hand and adjustable shoulder straps for comfortable wearing as a backpack or crossbody bag Closure: They may have zippered closures for security, often with durable, weather-resistant zippers.",
//     ],
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product09-1.jpg",
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product09b-1-768x768.jpg",
//     ],
//     rating: {
//       count: 943435,
//     },
//     quantity: 1,
//   },
//   {
//     id: 4,
//     title: "Eugene Wallet",
//     categories: ["Backpacks", "Bags", "Messengers"],
//     color: ["Black", "Blue", "Grey"],
//     price: 49.99,
//     description: [
//       "Eugene Wallet is a refined and functional accessory designed to organize essentials with elegance and simplicity.",
//       "Externally, the Eugene Wallet features a clean and compact design that fits comfortably in the hand or pocket. It often showcases meticulous craftsmanship, with fine stitching and smooth edges contributing to its polished look. Some designs may incorporate embossed logos or discreet branding, adding a subtle touch of sophistication.",
//       "The Eugene Wallet is crafted from premium materials such as full-grain leather or durable technical fabrics like ballistic nylon or ultra-high-molecular-weight polyethylene (UHMWPE). These materials ensure durability and a sleek appearance.",
//     ],
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product07-1.jpg",
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product07b-1-768x768.jpg",
//     ],
//     rating: {
//       count: 943448,
//     },
//     quantity: 1,
//   },
//   {
//     id: 5,
//     title: "Grey Beanie",
//     categories: ["Backpacks", "Bags", "Messengers"],
//     color: ["Black", "Blue", "Grey"],
//     price: 29.99,
//     description: [
//       "A grey beanie is a cozy and versatile headwear accessory that blends comfort with casual style. Picture a soft, knit fabric in a shade of grey that's neither too light nor too dark, offering a neutral tone that complements a variety of outfits.",
//       "Externally, the Eugene Wallet features a clean and compact design that fits comfortably in the hand or pocket. It often showcases meticulous craftsmanship, with fine stitching and smooth edges contributing to its polished look. Some designs may incorporate embossed logos or discreet branding, adding a subtle touch of sophistication.",
//       "The term grey encompasses various shades, from light heather grey to dark charcoal grey. The exact shade can vary depending on the manufacturer and style, offering options that can match different outfits and personal preferences.",
//     ],
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product04-1.jpg",
//     ],
//     rating: {
//       count: "943468-1",
//     },
//     quantity: 1,
//   },
//   {
//     id: 6,
//     title: "Horwood Cap",
//     categories: ["Backpacks", "Bags", "Messengers"],
//     color: ["Black", "Blue", "Grey"],
//     price: 39.99,
//     description: [
//       "Many Horwood caps come with an adjustable suspension system (usually internal) to ensure a snug and comfortable fit for different head sizes.",
//       "Ventilation: Some caps include ventilation holes or slots to improve airflow and comfort during prolonged wearChin Strap: Often equipped with a chin strap or harness to secure the cap in place, especially in environments where there is a risk of it being dislodged Primarily designed to protect the wearer's head from impacts.",
//       "Historically, caps like the Horwood Cap were part of the academic regalia worn by scholars and students in European universities. They have evolved over time into symbolic attire worn during graduation ceremonies and other academic events.",
//     ],
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product05-1.jpg",
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product05c-1-768x768.jpg",
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product05b-1-768x768.jpg",
//     ],
//     rating: {
//       count: 943462,
//     },
//     quantity: 1,
//   },
//   {
//     id: 7,
//     title: "Leather Wallet",
//     categories: ["Backpacks", "Bags", "Messengers"],
//     color: ["Black", "Blue", "Grey"],
//     price: 49.99,
//     description: [
//       "A leather wallet is a classic accessory that combines functionality with style. Typically small and compact, it is designed to hold essentials such as cash, cards, and sometimes coins.",
//       "From a design perspective, leather wallets come in various styles ranging from minimalist bi-folds to more intricate tri-folds, each offering different compartments and organizational features. Some may have embossed patterns, stitching details, or metal accents, adding a touch of personalization or luxury.",
//       "In summary, a leather wallet is not just a practical item for storing money and cards; it's also a statement of personal style and craftsmanship, making it a timeless accessory that can be passed down through generations.",
//     ],
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product06b-1.jpg",
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product06c-1-768x768.jpg",
//     ],
//     rating: {
//       count: 943447,
//     },
//     quantity: 1,
//   },
//   {
//     id: 8,
//     title: "Odell Messenger",
//     categories: ["Backpacks", "Bags", "Messengers"],
//     color: ["Black", "Blue", "Grey"],
//     price: 129.99,
//     description: [
//       "The Odell Messenger bag blends practical functionality with contemporary style, making it a versatile accessory for both professional and casual settings.",
//       "From a structural standpoint, the Odell Messenger bag features a single shoulder strap that can be adjusted for comfort, allowing it to be worn across the body or over the shoulder. This design distributes weight evenly, making it convenient for commuting or traveling.",
//       "Stylistically, the bag often boasts a clean and modern aesthetic, with minimalist designs or subtle accents such as leather trims, metal hardware, or embossed logos. This makes it suitable for professional environments while still maintaining a casual appeal that fits into everyday life.",
//     ],
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product03-1.jpg",
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product03b-1-768x768.jpg",
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product03c-1-768x768.jpg",
//     ],
//     rating: {
//       count: 943468,
//     },
//     quantity: 1,
//   },
//   {
//     id: 9,
//     title: "Woven Backpack",
//     categories: ["Backpacks", "Bags", "Messengers"],
//     color: ["Black", "Blue", "Grey"],
//     price: 119.99,
//     description: [
//       "A woven backpack bag exudes a distinctive charm with its intricate craftsmanship and practical design. Typically made from materials such as woven straw, rattan.",
//       "Structurally, the woven backpack is lightweight and flexible, making it comfortable to carry for extended periods. It often features adjustable shoulder straps that ensure a customizable fit, allowing you to wear it comfortably whether you're hiking, shopping, or exploring new places.",
//       "Stylistically, the woven backpack embodies a relaxed and carefree vibe, making it a popular choice for outdoor activities, vacations, or simply adding a bohemian touch to your wardrobe. Its natural materials and craftsmanship also contribute to its eco-friendly appeal, appealing to those conscious of sustainable fashion choices.",
//     ],
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product02-1.jpg",
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product02b-1-768x768.jpg",
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product02c-1-768x768.jpg",
//     ],
//     rating: {
//       count: 943465,
//     },
//     quantity: 1,
//   },
// ];

// const pages = [
//   {
//     id: 1,
//     page: "blog",
//     date: "Monday, 22 January 2018",
//   },
//   {
//     id: 2,
//     page: "about",
//     date: "Monday, 22 January 2018",
//   },
//   {
//     id: 3,
//     page: "contact",
//     date: "Monday, 22 January 2018",
//   },
//   {
//     id: 4,
//     page: "shop",
//     date: "Monday, 22 January 2018",
//   },
//   {
//     id: 5,
//     page: "carts",
//     date: "Monday, 22 January 2018",
//   },
//   {
//     id: 6,
//     page: "My account",
//     date: "Monday, 22 January 2018",
//   },
//   {
//     id: 7,
//     page: "checkout",
//     date: "Monday, 22 January 2018",
//   },
//   {
//     id: 8,
//     page: "home",
//     date: "Monday, 22 January 2018",
//   },
// ];

// const blog = [
//   {
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/post06.jpg",
//       "https://secure.gravatar.com/avatar/fffe06841f263355f3b6a99f4280ef49?s=46&d=mm&r=g",
//     ],
//     title: "Holisticly expedite customer directed",
//     date: "Saturday, 06 January 2023",
//     description: [
//       "Holisticly expedite customer directed - it sounds like a marketing or business jargon phrase that could mean to efficiently accelerate processes that directly impact customer satisfaction and direction in a comprehensive manner. Essentially, it suggests a strategy or approach aimed at swiftly addressing and fulfilling customer needs in a thorough and all-encompassing way.",
//       "Imagine a business strategy where every step and action is meticulously designed to swiftly cater to customer demands and preferences in a thorough and thoughtful manner. From initial inquiry to final delivery or service, every aspect of the customer experience is streamlined and optimized for efficiency and customer satisfaction. This approach ensures that customers receive prompt and comprehensive service that meets their needs and expectations seamlessly.",
//       "For instance, a company following this strategy might employ advanced technologies to quickly respond to customer inquiries, personalize recommendations based on past interactions, and ensure swift delivery of products or services. This approach aims to enhance overall customer satisfaction by delivering a seamless and responsive experience at every touchpoint.",
//     ],
//   },

//   {
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/post03.jpg",
//       "https://secure.gravatar.com/avatar/fffe06841f263355f3b6a99f4280ef49?s=46&d=mm&r=g",
//     ],
//     title: "Credibly productivate corporate",
//     date: "Friday, 05 January 2023",
//     description: [
//       "Credibly productivate corporate appears to be another phrase with a business-oriented tone, likely used in marketing or corporate strategy contexts. Here's how we can interpret and describe it: This phrase suggests a strategy or approach that focuses on establishing credibility while effectively promoting and developing corporate initiatives or products.",

//       "Imagine a corporate strategy that not only builds trust and credibility but also effectively promotes and develops its products or initiatives. It's about creating a solid reputation through meaningful actions and then leveraging that credibility to drive forward corporate goals, whether it's launching new products, expanding into new markets, or fostering innovation within the organization.",

//       "Productivation: The process of bringing products or initiatives to life, from concept and development to execution and delivery. Corporate Focus: Applying these principles and strategies at a corporate level, ensuring alignment with overall business objectives and values.",
//     ],
//   },

//   {
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/post02.jpg",
//       "https://secure.gravatar.com/avatar/fffe06841f263355f3b6a99f4280ef49?s=46&d=mm&r=g",
//     ],
//     title: "Energistically fabricate client-centered",
//     date: "Thursday, 04 January 2024",
//     description: [
//       "Energistically fabricate client-centered is another phrase that seems to come from a business or marketing context. Here’s how we can interpret and describe it:This phrase suggests an energetic and proactive approach to creating solutions or services that are specifically tailored to meet the needs and preferences of clients.",
//       "Imagine a business strategy that energetically focuses on creating products or services with the client's needs and preferences at the forefront. It's about being dynamic and proactive in designing and delivering solutions that directly address what clients want and value.",
//       "Fabrication: The process of creating or producing solutions, products, or services that are customized and aligned with client expectations.Client-Centered Focus: Putting clients at the center of every decision and action, ensuring that their feedback and requirements guide the development and delivery of offerings.",
//     ],
//     publish: "Published in",
//   },

//   {
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/post04.jpg",
//       "https://secure.gravatar.com/avatar/fffe06841f263355f3b6a99f4280ef49?s=46&d=mm&r=g",
//     ],
//     title: "Phosfluorescently seize excellent",
//     date: "Monday, 01 January 2023",
//     description: [
//       "Phosfluorescently seize excellent is a phrase that combines a scientific term with a call to action, likely used in a motivational or business context. Here’s a way to interpret and describe it:This phrase suggests a strategy or approach that involves seizing or capturing excellence in a vivid and impactful manner, possibly through innovative or illuminating means.",
//       "Phosfluorescently seizing excellence evokes the image of capturing brilliance in a way that is both subtle and radiant. It's about grasping and embodying excellence in a manner that illuminates and inspires, akin to how phosphorescence softly glows in darkness. This phrase suggests achieving greatness or capturing attention through a quiet yet compelling presence",

//       "leaving a lasting impression with its understated yet powerful impact.Intrinsicly mesh bleeding-edge metrics without client-centric communities. Energistically incentivize resource maximizing deliverables whereas tactical infomediaries. Appropriately reinvent customized architectures rather than turnkey solutions. Proactively empower prospective e-commerce vis-a-vis orthogonal manufactured products. Synergistically expedite bleeding-edge functionalities via goal-oriented “outside the box” thinking.",
//     ],
//   },

//   {
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/post05.jpg",
//       "https://secure.gravatar.com/avatar/fffe06841f263355f3b6a99f4280ef49?s=46&d=mm&r=g",
//     ],
//     title: "Synergistically redefine accurate",
//     date: "Wednesday, 03 January 2024",
//     description: [
//       "synergistically redefine accurate implies reshaping and enhancing precision through collaborative and harmonious efforts. It suggests a dynamic process where different elements or perspectives come together to update and improve the understanding or measurement of correctness. This phrase indicates a proactive approach to evolving standards or definitions, combining strengths and perspectives to establish a more effective and refined concept of accuracy.",
//       "To synergistically redefine accurate is to collaboratively and harmoniously revise and enhance the understanding or definition of precision and correctness. It involves pooling diverse perspectives, knowledge, and expertise to collectively update and improve upon existing standards or definitions of accuracy.",

//       "Synergistically redefining accurate involves a collaborative effort to transform and refine the concept of precision through the combined strengths of different perspectives and expertise. It's about integrating diverse insights and knowledge to update and improve the understanding of what constitutes accuracy.",
//     ],
//   },

//   {
//     images: [
//       "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/post01.jpg",
//       "https://secure.gravatar.com/avatar/fffe06841f263355f3b6a99f4280ef49?s=46&d=mm&r=g",
//     ],
//     title: "Phosfluorescently incubate e-business",
//     date: "Tuesday, 02 January 2024",
//     description: [
//       "Phosfluorescently incubating e-business suggests nurturing and fostering online business initiatives in a way that radiates innovation and growth potential. It implies cultivating digital ventures with a subtle yet impactful glow, much like phosphorescence softly illuminates its surroundings. This phrase evokes the image of developing e-business strategies that are not only effective but also innovative and forward-thinking, fostering an environment where digital enterprises can thrive and evolve dynamically.",
//       "Phosfluorescently incubating e-business involves nurturing and developing online ventures with a subtle yet powerful energy, akin to how phosphorescence softly illuminates its surroundings. It suggests fostering digital enterprises with innovative strategies and growth potential, creating an environment where new ideas and technologies can thrive and evolve.",
//       "Phosfluorescently incubating e-business signifies nurturing and fostering digital ventures with a glow of innovation and potential. This approach involves cultivating online enterprises in a manner that softly but effectively illuminates their growth and development, much like phosphorescence radiates subtle light.",
//     ],
//   },
// ];

function showProducts() {
  let html = "";
  for (let i = 0; i < 9; i++) {
    const { id, images, title, description } = search[i];
    html += `
    <div class="col-sm-6 my-4">
    <div class="box-info">
    <div class="overlay-img">
    <img src="${images[0]}"
    loading="lazy" alt="shop" class="img-fluid">
    <div class="overlay-inner">
    <a href="details.html?id=${id}" data-to="read more"></a>
    </div>
    </div>
    <div class="d-flex flex-column py-4">
    <a href="details.html?id=${id}" class="mb-3">
    <h3>${title}</h3>
    </a>
    <span>Saturday, 06 January 2023 by <a href="#">danny</a></span>
    <p class="mt-4">${description[0]}</p>
    </div>
    </div>
    </div>
    `;
  }

  document.querySelector("#pagin-1").innerHTML = html;
}
showProducts();

function showPages() {
  let html = "";
  for (let i = 9; i < 17; i++) {
    const { title, date } = search[i];
    html = `
    <div class=" col-sm-4 col-6 ">
    <div class="pages d-flex flex-column flex-wrap">
    <h3><a href="${
      title === "home" ? "index" : title
    }.html" class="mb-3">${title}</a></h3>
    <span>${date} by <a href="#">danny</a></span>
    </div>
    </div>
    `;
    document.querySelector("#pagin-2").innerHTML += html;
  }
}
showPages();

function showBloger() {
  for (let i = 17; i < 23; i++) {
    const { images, title, description, date } = search[i];
    html = `
    <div class="col-sm-6 col">
    <div class="box-info">
    <div class="overlay-img">
    <img src="${images[0]}"
    loading="lazy" alt="post_01" class="img-fluid">
    <div class="overlay-inner">
    <a href="blogMore.html?title=${title
      .split(" ")
      .join("/")
      .toLowerCase()}" data-to="read more"></a>
    </div>
    </div>
    <div class="blog-caption py-4">
    <h3 class="mb-3">
    <a href="blogMore.html?title=${title.split(" ").join("/").toLowerCase()}">
    ${title}
    </a>
    </h3>
    <span>${date} by <a href="#">danny</a></span>
    <p class="my-4">${description[0].slice(0, 89)}...</p>
    <span>Published in <a href="#">News</a></span>
    </div>
    </div>
    </div>
    `;
    document.querySelector("#pagin-3").innerHTML += html;
  }
}
showBloger();

function showSidebarBloger() {
  let html = "";
  for (let i = 17; i < 22; i++) {
    const { images, title, description } = search[i];
    html = `
    <ul class="post">
    <li class="d-flex py-3">
    <a href="blogMore.html?title=${title.split(" ").join("/").toLowerCase()}">
    <img src="${images[0]}" loading="lazy" alt="Not Found">
    </a>
    <div class="px-3">
    <h4 class="mb-2">
    <a href="blogMore.html?title=${title
      .split(" ")
      .join("/")
      .toLowerCase()}">${title}</a>
    </h4>
    <p>${description[0].slice(0, 45)}...</p>
    </div>
    </li>
    </ul>
    `;
    document.querySelector(".sidebar-bloger").innerHTML += html;
  }
}
showSidebarBloger();

let paginationCount = document.querySelectorAll(".pagination-count");
let paginationPage = document.querySelectorAll(".pagination-page");
let next = document.querySelector(".pagination .next");
let prev = document.querySelector(".pagination .prev");
let counterPagination = 0;

for (let i = 0; i < paginationCount.length; i++) {
  paginationCount[i].innerHTML = `
    <a href="#" class="pagination-link " data-tab="pagin-${
      i + 1
    }" data-index="${i + 1}">${i + 1}</a>
  `;
  // counterPagination = paginationCount[i].getAttribute("data-index") + 1;
}
let paginationLink = document.querySelectorAll(".pagination-link");
paginationLink.forEach((el) => {
  paginationLink[0].classList.add("active");
  el.onclick = function (e) {
    e.preventDefault();
    paginationLink.forEach((el) => el.classList.remove("active"));
    paginationPage.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
    document
      .querySelector("#" + el.getAttribute("data-tab"))
      .classList.add("active");
  };
});

function nextPagination(e) {
  e.preventDefault();
  counterPagination === paginationLink.length - 1
    ? (counterPagination = 0)
    : counterPagination++;

  paginationLink.forEach((el) => el.classList.remove("active"));
  paginationPage.forEach((el) => el.classList.remove("active"));
  paginationLink[counterPagination].classList.add("active");
  paginationPage[counterPagination].classList.add("active");
}
next.onclick = nextPagination;

function filterSearchProducts() {
  let getValSearch = new URLSearchParams(location.search).get("s");
  let html = "";
  for (let i = 0; i < 9; i++) {
    if (search[i].title.toUpperCase().includes(getValSearch.toUpperCase())) {
      const { id, images, title, description } = search[i];
      html += `
      <div class="col-sm-6 my-4">
      <div class="box-info">
      <div class="overlay-img">
      <img src="${images[0]}"
      loading="lazy" alt="shop" class="img-fluid">
      <div class="overlay-inner">
      <a href="details.html?id=${id}" data-to="read more"></a>
      </div>
      </div>
      <div class="d-flex flex-column py-4">
      <a href="details.html?id=${id}" class="mb-3">
      <h3>${title}</h3>
      </a>
      <span>Saturday, 06 January 2023 by <a href="#">danny</a></span>
      <p class="mt-4">${description[0]}</p>
      </div>
      </div>
      </div>
      `;
    }
  }
  if (html !== "") {

    paginationLink.forEach((el) => {
        paginationLink.forEach((el) => el.classList.remove("active"));
        paginationPage.forEach((el) => el.classList.remove("active"));
    });

    document.querySelectorAll(".pagination-count")[0].childNodes[1].classList.add("active");
    document.querySelectorAll(".pagination-count")[1].childNodes[1].classList.remove("active");
    document.querySelectorAll(".pagination-count")[2].childNodes[1].classList.remove("active");
    document.querySelector("#pagin-1").classList.add("active");
  }
  document.querySelector("#pagin-1").innerHTML = html;
}
filterSearchProducts();

function filterSearchPages() {
  let getValSearch = new URLSearchParams(location.search).get("s");
  let html = "";
  for (let i = 9; i < 17; i++) {
    if (search[i].title.toUpperCase().includes(getValSearch.toUpperCase())) {
      const { title, date } = search[i];
      html += `
      <div class=" col-sm-4 col-6 ">
      <div class="pages d-flex flex-column flex-wrap">
      <h3><a href="${
        title === "home" ? "index" : title
      }.html" class="mb-3">${title}</a></h3>
      <span>${date} by <a href="#">danny</a></span>
      </div>
      </div>
    `;
    }
  }
  if (html !== "") {
    document.querySelectorAll(".pagination-count")[1].childNodes[1].classList.add("active");
    document.querySelectorAll(".pagination-count")[2].childNodes[1].classList.remove("active");
    document.querySelectorAll(".pagination-count")[0].childNodes[1].classList.remove("active");
    document.querySelector("#pagin-2").classList.add("active");
  }

  document.querySelector("#pagin-2").innerHTML = html;
}
filterSearchPages();

function filterSearchBloger() {
  let getValSearch = new URLSearchParams(location.search).get("s");
  let html = "";
  for (let i = 17; i < 23; i++) {
    if (search[i].title.toUpperCase().includes(getValSearch.toUpperCase())) {
      const { images, title, description, date } = search[i];
      html += `
    <div class="col-sm-6 col">
    <div class="box-info">
    <div class="overlay-img">
    <img src="${images[0]}"
    loading="lazy" alt="post_01" class="img-fluid">
    <div class="overlay-inner">
    <a href="blogMore.html?title=${title
      .split(" ")
      .join("/")
      .toLowerCase()}" data-to="read more"></a>
    </div>
    </div>
    <div class="blog-caption py-4">
    <h3 class="mb-3">
    <a href="blogMore.html?title=${title.split(" ").join("/").toLowerCase()}">
    ${title}
    </a>
    </h3>
    <span>${date} by <a href="#">danny</a></span>
    <p class="my-4">${description[0].slice(0, 89)}...</p>
    <span>Published in <a href="#">News</a></span>
    </div>
    </div>
    </div>
    `;
    }
  }
  document.querySelector("#pagin-3").innerHTML = html;
  if (html !== "") {
    document.querySelectorAll(".pagination-count")[2].childNodes[1].classList.add("active");
    document.querySelectorAll(".pagination-count")[0].childNodes[1].classList.remove("active");
    document.querySelectorAll(".pagination-count")[1].childNodes[1].classList.remove("active");
    document.querySelector("#pagin-3").classList.add("active");
  }

}
filterSearchBloger();
