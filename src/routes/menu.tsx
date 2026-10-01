import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ShoppingBag, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cart";
import { resolveImageUrl } from "@/utils/imageUrl";
import logo from "@/assets/parivar-logo.png";

const fallbackMenuData: Record<
  string,
  { name: string; desc: string; price: number; image_url: string }[]
> = {
  "Biryani & Mains": [
    {
      name: "Hyderabadi Chicken Dum Biryani",
      desc: "Fragrant saffron basmati rice and marinated chicken slow-cooked in sealed dum handi with royal spices, served with salan and raita",
      price: 16.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787056264/2_jlzkle.jpg",
    },
    {
      name: "Hyderabadi Mutton Dum Biryani",
      desc: "Tender Australian halal goat slow-simmered in aromatic spices layered with aged saffron basmati rice, served with salan and raita",
      price: 18.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787056264/2_jlzkle.jpg",
    },
    {
      name: "Chicken 65 Biryani",
      desc: "Spicy deep-fried chicken 65 bites tossed with curry leaves, layered over fragrant spiced dum biryani rice",
      price: 17.99,
      image_url: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Vegetarian Dum Biryani",
      desc: "Seasonal garden vegetables, paneer, and aged basmati rice cooked on slow dum with saffron, herbs, and fried onions",
      price: 14.99,
      image_url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Bagara Rice / Saffron Basmati Rice",
      desc: "Traditional Hyderabadi tempered basmati rice infused with whole spices, bay leaves, cardamom, and pure ghee",
      price: 6.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787059285/32_glqnri.jpg",
    },
  ],
  Entrée: [
    {
      name: "Tandoori (Half)",
      desc: "Half tandoori chicken, marinated and charred",
      price: 11.99,
      image_url:
        "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Tandoori (Full)",
      desc: "Full tandoori chicken, smoky and juicy",
      price: 17.99,
      image_url:
        "https://imgs.search.brave.com/jNKHIdPcMvtIdQAyweUwMBkc5AKdR2uoXL_kdOQ3z98/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vdGFuZG9vcmkt/Y2hpY2tlbi1wcmVw/YXJlZC1ieS1yb2Fz/dGluZy1jaGlja2Vu/LW1hcmluYXRlZC15/b2dodXJ0LXNwaWNl/cy10YW5kb29yLXNl/cnZlZC13b29kZW4t/cnVzdGljLWJhY2tn/cm91bmQtc2VsZWN0/aXZlLWZvY3VzXzcy/NjM2My00OTguanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw",
    },
    {
      name: "Chicken Tikka",
      desc: "Boneless chicken pieces, spiced and grilled",
      price: 14.99,
      image_url:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Sheekh Kebab",
      desc: "Minced meat skewers with aromatic spices",
      price: 13.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787056642/8_nodyar.webp",
    },
    {
      name: "Fish Fry (Basa)",
      desc: "Crispy fried basa fish with spices",
      price: 14.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787056736/7_csyno8.avif",
    },
    {
      name: "Chicken 65",
      desc: "Spicy deep-fried chicken bites",
      price: 14.99,
      image_url:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Mutton Haleem",
      desc: "Slow-cooked lentil and meat stew",
      price: 14.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787056130/1_g8gsoo.jpg",
    },
  ],
  "Naan Bread": [
    {
      name: "Plain Naan",
      desc: "Soft, freshly baked naan bread",
      price: 2.0,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787056843/9_r61oag.jpg",
    },
    {
      name: "Butter Naan",
      desc: "Naan brushed with melted butter",
      price: 3.0,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787056843/9_r61oag.jpg",
    },
    {
      name: "Garlic Naan",
      desc: "Naan topped with fresh garlic and herbs",
      price: 3.5,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787057000/11_tcqqht.jpg",
    },
  ],
  "Savory Items": [
    {
      name: "Momos (10 pcs)",
      desc: "Steamed dumplings with dipping sauce",
      price: 11.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787056464/5_il90qp.jpg",
    },
    {
      name: "Samosa (2 pcs)",
      desc: "Crispy pastry filled with spiced potatoes",
      price: 4.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787056419/4_ldlbhe.jpg",
    },
    {
      name: "Vegetable Roll",
      desc: "Flaky roll stuffed with seasoned vegetables",
      price: 2.5,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787056575/6_pkmebp.webp",
    },
  ],
  "Chicken Curries": [
    {
      name: "Butter Chicken",
      desc: "Classic creamy tomato curry, mildly spiced",
      price: 14.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787057584/17_agl38c.avif",
    },
    {
      name: "Achari Chicken",
      desc: "Chicken in tangy pickle-spiced gravy",
      price: 14.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787057584/17_agl38c.avif",
    },
    {
      name: "Chicken Khorma",
      desc: "Mild, creamy chicken in cashew sauce",
      price: 13.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787058411/19_e1eowg.jpg",
    },
    {
      name: "Parivar Special Chicken Gravy",
      desc: "Our signature chicken curry recipe",
      price: 14.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787058495/20_o5npca.jpg",
    },
    {
      name: "Chicken Vindaloo",
      desc: "Fiery Goan-style chicken curry",
      price: 13.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787058550/21_jlbc5b.jpg",
    },
    {
      name: "Chicken Masala",
      desc: "Rich and spiced chicken masala gravy",
      price: 14.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787058665/22_vwwqxh.jpg",
    },
  ],
  "Mutton Curries": [
    {
      name: "Mutton Vindaloo",
      desc: "Spicy vindaloo with tender mutton",
      price: 14.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787058733/23_en28o5.jpg",
    },
    {
      name: "Mutton Khorma",
      desc: "Creamy mutton in aromatic korma sauce",
      price: 14.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787058789/24_ghxkbz.jpg",
    },
    {
      name: "Mutton Masala",
      desc: "Bold and flavorful mutton masala curry",
      price: 14.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787058849/25_tieqqj.jpg",
    },
  ],
  "Vegetarian Curries": [
    {
      name: "Daal Tadka",
      desc: "Yellow lentils tempered with garlic and spices",
      price: 11.99,
      image_url:
        "https://images.unsplash.com/photo-1626509646543-518ee55030e4?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Mixed Veg Curry",
      desc: "Seasonal vegetables in a rich gravy",
      price: 13.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787058912/26_r6jiaw.jpg",
    },
    {
      name: "Paneer Tikka Masala",
      desc: "Grilled paneer in spiced tomato sauce",
      price: 13.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787058969/27_xsldjd.jpg",
    },
  ],
  "Desi Chinese": [
    {
      name: "Chicken Fry Noodles",
      desc: "Stir-fried noodles with chicken",
      price: 14.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787059055/28_eukwyi.jpg",
    },
    {
      name: "Veg Fry Noodles",
      desc: "Stir-fried noodles with vegetables",
      price: 12.99,
      image_url:
        "https://images.unsplash.com/photo-1512621843614-b4bf72d1f0d3?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Chicken Manchurian",
      desc: "Indo-Chinese chicken in tangy sauce",
      price: 14.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787059101/29_tkbtxd.webp",
    },
    {
      name: "Veg Manchurian",
      desc: "Vegetable balls in Manchurian sauce",
      price: 13.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787059155/30_gyryht.jpg",
    },
    {
      name: "Chicken Fried Rice",
      desc: "Wok-tossed rice with chicken and vegetables",
      price: 14.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787059215/31_hzkkzs.webp",
    },
    {
      name: "Veg Fried Rice",
      desc: "Wok-tossed rice with fresh vegetables",
      price: 12.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787059285/32_glqnri.jpg",
    },
  ],
  Desserts: [
    {
      name: "Gulab Jamun",
      desc: "Golden fried milk dumplings in syrup",
      price: 4.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787059366/33_jmmded.jpg",
    },
    {
      name: "Qubani",
      desc: "Stewed apricot dessert with cream",
      price: 4.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787059429/34_lef3g3.jpg",
    },
    {
      name: "Rasmalai",
      desc: "Soft paneer discs in sweetened milk",
      price: 4.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787059516/35_c6byxv.jpg",
    },
    {
      name: "Shahi Tukda",
      desc: "Fried bread soaked in saffron milk and nuts",
      price: 4.99,
      image_url:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Zafrani Kheer",
      desc: "Saffron-infused rice pudding",
      price: 4.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787059576/36_ipydit.jpg",
    },
    {
      name: "Khowa Puri",
      desc: "Sweet fried bread with thickened milk filling",
      price: 4.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787059662/37_ms78sj.jpg",
    },
  ],
  Drinks: [
    {
      name: "Chai Small",
      desc: "Authentic spiced Indian tea",
      price: 1.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787057104/12_cmt01s.jpg",
    },
    {
      name: "Chai Large",
      desc: "Large cup of spiced Indian tea",
      price: 2.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787057248/13_cj1ec7.jpg",
    },
    {
      name: "Mango Lassi",
      desc: "Sweet, rich yogurt drink with mango",
      price: 3.99,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787057298/14_aj7lb2.jpg",
    },
    {
      name: "Can Drink",
      desc: "Assorted canned beverages",
      price: 2.5,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787057522/16_a83b5q.jpg",
    },
    {
      name: "Water Bottle",
      desc: "Purified drinking water",
      price: 1.0,
      image_url: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787057451/15_ehvwx6.jpg",
    },
  ],
};

const categories = Object.keys(fallbackMenuData);

const categoryEditorialData: Record<
  string,
  {
    tagline: string;
    editorialText: string;
    dietaryHighlights: string[];
    pairingSuggestions: string;
    faqs: { question: string; answer: string }[];
  }
> = {
  "Biryani & Mains": {
    tagline: "Authentic Hyderabadi Dum Biryani slow-cooked with royal Nizami spices",
    editorialText:
      "Prepared following centuries-old Nizami royal traditions, our signature Hyderabadi Dum Biryani layers fragrant aged long-grain basmati rice with marinated Australian Halal meat. Sealed in heavy cooking handis with dough ('Dum Pukht') and simmered gently over slow embers, every grain absorbs whole saffron, mint, browned onions, and rich meat juices. Served piping hot with our tangy Mirchi Ka Salan and fresh mint-cucumber raita.",
    dietaryHighlights: ["100% Halal Certified", "Aged Basmati Rice", "Traditional Dum Pukht", "Gluten-Friendly Options"],
    pairingSuggestions:
      "Elevate your meal by pairing our Dum Biryani with Chicken 65, warm Garlic Naan, and cool Mango Lassi or royal Zafrani Kheer.",
    faqs: [
      {
        question: "Is the Biryani at Parivar Restaurant 100% Halal certified?",
        answer:
          "Yes, all meats used in our Hyderabadi Dum Biryanis are strictly 100% Halal certified sourced from accredited Australian suppliers.",
      },
      {
        question: "How is authentic Hyderabadi Dum Biryani cooked?",
        answer:
          "We use the traditional 'Dum Pukht' technique where marinated meat, parboiled aged basmati rice, saffron, and fresh mint are sealed in a heavy handi and slow-cooked over low embers so the meat juices infuse every grain.",
      },
      {
        question: "What condiments are served with the Biryani?",
        answer:
          "Every Biryani is served with house-made Mirchi Ka Salan (tangy peanut and sesame gravy) and cooling cucumber-mint raita.",
      },
    ],
  },
  Entrée: {
    tagline: "Charcoal-tandoor roasted skewers, crispy bites, and slow-simmered Haleem",
    editorialText:
      "Start your dining experience with our authentic Hyderabadi and North Indian appetisers. From succulent chicken tikka and spiced sheekh kebabs roasted fresh over charcoal embers in our high-heat clay tandoor, to our famous crispy Chicken 65 tossed with fresh curry leaves and green chilies. We also serve authentic slow-cooked Hyderabadi Mutton Haleem, pounded with broken wheat, lentils, and pure ghee.",
    dietaryHighlights: ["100% Halal Meats", "Clay Tandoor Roasted", "House Spice Marinades", "Freshly Cooked to Order"],
    pairingSuggestions:
      "Pair our smoky Tandoori Chicken or crispy Basa Fish Fry with fresh Mint Chutney, Butter Naan, and a hot cup of Irani Chai.",
    faqs: [
      {
        question: "Are tandoori starters cooked in a traditional clay oven?",
        answer:
          "Yes, all our tandoori chicken, kebabs, and tikka skewers are roasted over natural lump charcoal in our high-heat clay tandoor oven for an authentic smoky char.",
      },
      {
        question: "What is Chicken 65?",
        answer:
          "Chicken 65 is a spicy, deep-fried Indo-Chinese starter originating in South India, coated with chili, ginger, garlic, and curry leaves with a crisp exterior.",
      },
      {
        question: "Is the Mutton Haleem available every day?",
        answer:
          "Yes, our rich Hyderabadi Mutton Haleem is slow-simmered for 8+ hours with shredded goat meat, broken wheat, lentils, and pure ghee.",
      },
    ],
  },
  "Naan Bread": {
    tagline: "Freshly baked artisan Indian flatbreads from our clay tandoor oven",
    editorialText:
      "Nothing complements rich curries like authentic tandoor bread. Hand-stretched to order, our flatbreads are slapped against the searing clay walls of our tandoor oven, emerging blistered, soft, and lightly crisp. Choose from classic Plain Naan, rich Butter Naan brushed with pure melted butter, or aromatic Garlic Naan sprinkled with freshly minced garlic and coriander herbs.",
    dietaryHighlights: ["Baked Fresh to Order", "Clay Tandoor Cooked", "Vegetarian Friendly", "Vegan Roti Available"],
    pairingSuggestions:
      "Essential companion to our Butter Chicken, Mutton Korma, Daal Tadka, or Paneer Tikka Masala.",
    faqs: [
      {
        question: "How are your naans prepared?",
        answer:
          "Each naan is freshly rolled by hand upon order and slapped onto the internal clay walls of our piping-hot tandoor oven, emerging blistered, soft, and warm.",
      },
      {
        question: "Do you offer dairy-free bread options?",
        answer:
          "Plain Roti is dairy-free and vegan-friendly, whereas Butter Naan and Garlic Naan are brushed with rich butter.",
      },
    ],
  },
  "Savory Items": {
    tagline: "Handcrafted street snacks, flaky pastries, and steamed momo dumplings",
    editorialText:
      "Craving classic Subcontinental street snacks in Sydney? Our savory snacks selection features golden pyramid samosas packed with cumin-spiced potatoes, flaky spiced vegetable rolls, and delicate steamed dumplings (momos) served with house fiery chili-garlic chutney. Ideal for quick bites, afternoon snacks with chai, or sharing at family dinners.",
    dietaryHighlights: ["Handcrafted Daily", "Vegetarian Favorites", "Traditional Street Flavors", "Custom Chutneys"],
    pairingSuggestions:
      "Enjoy piping-hot samosas or vegetable rolls alongside our signature Hyderabadi spiced Irani Chai.",
    faqs: [
      {
        question: "Are the samosas made fresh in-house?",
        answer:
          "Yes, our golden samosas feature crisp hand-folded pastry stuffed with cumin-spiced potatoes and green peas, served with sweet tamarind and spicy mint chutneys.",
      },
      {
        question: "Are the momos steamed fresh?",
        answer:
          "Our dumplings are steamed to order and accompanied by house-crafted fiery chili-garlic dipping sauce.",
      },
    ],
  },
  "Chicken Curries": {
    tagline: "Rich, slow-simmered chicken gravies infused with regional spices",
    editorialText:
      "Our chicken curry repertoire spans from the silky, velvety sweetness of classic Butter Chicken cooked in creamy tomato gravy to the fiery, vinegar-tinged punch of Goan Chicken Vindaloo. Each dish features tender boneless Australian Halal chicken simmered in freshly ground garam masala, ginger, garlic, and slow-caramelized onion bases crafted by experienced chefs.",
    dietaryHighlights: ["100% Halal Chicken", "No Artificial Colors", "Customizable Heat Level", "Slow-Cooked Gravies"],
    pairingSuggestions:
      "Best enjoyed scooped with warm Garlic Naan or ladled over fragrant Saffron Bagara Basmati Rice.",
    faqs: [
      {
        question: "What is the spice level of your Butter Chicken?",
        answer:
          "Our Butter Chicken is mildly spiced with a rich, velvety tomato and cream reduction sweetened slightly with honey and fenugreek leaves (kasoori methi).",
      },
      {
        question: "Can curries be customized to my spice preference?",
        answer:
          "Yes, when ordering dine-in or takeaway our chefs can tailor the chili heat from mild to extra hot upon request.",
      },
    ],
  },
  "Mutton Curries": {
    tagline: "Tender Australian halal goat and lamb in deep, spiced Nizami gravies",
    editorialText:
      "Renowned for deep flavor and melt-in-the-mouth tenderness, our mutton curries are slow-braised for hours with premium cuts of Australian halal goat. Experience the rich cashew and yogurt richness of Mutton Korma, the robust spiced heat of Mutton Masala, or the tangy chili notes of traditional Mutton Vindaloo. Every gravy delivers an authentic taste of Hyderabad and North India.",
    dietaryHighlights: ["Premium Halal Goat Meat", "Slow-Braised Tender Cuts", "Traditional Mughlai Gravy", "Rich Bone Broth Base"],
    pairingSuggestions:
      "Pairs extraordinarily well with Butter Naan, Bagara Rice, and a refreshing side of cucumber raita.",
    faqs: [
      {
        question: "What cut of meat is used in Mutton Curries?",
        answer:
          "We use bone-in and tender boneless cuts of premium Australian halal goat and lamb, braised slowly until fork-tender.",
      },
      {
        question: "What is the difference between Mutton Korma and Mutton Vindaloo?",
        answer:
          "Mutton Korma is cooked in a delicate cashew, yogurt, and cardamom gravy, while Mutton Vindaloo is an intense, tangy, and fiery Goan curry flavored with red chilies and vinegar.",
      },
    ],
  },
  "Vegetarian Curries": {
    tagline: "Wholesome lentil dals, spiced seasonal vegetables, and rich paneer curries",
    editorialText:
      "Vegetarian dining at Parivar is celebrated with the same royal passion as our meats. Our comforting Daal Tadka is tempered with crackling cumin, garlic, and whole dried chilies, while our Paneer Tikka Masala features succulent cottage cheese cubes simmered in spiced tomato-onion gravy. Fresh seasonal vegetable curries round out a vibrant, hearty, and satisfying plant-based spread.",
    dietaryHighlights: ["100% Pure Vegetarian", "Vegan Options Available", "Fresh Paneer Cheese", "High-Protein Lentils"],
    pairingSuggestions:
      "Pair Daal Tadka with Bagara Rice, or Paneer Tikka Masala with piping hot tandoori Garlic Naan.",
    faqs: [
      {
        question: "Are the vegetarian curries suitable for vegans?",
        answer:
          "Our Daal Tadka and Chana Masala can be prepared 100% vegan without ghee or butter upon request. Our Paneer dishes contain fresh dairy cheese.",
      },
      {
        question: "Where is the paneer sourced?",
        answer:
          "We source fresh, soft artisanal paneer cubes that absorb our rich spiced gravy without becoming chewy.",
      },
    ],
  },
  "Desi Chinese": {
    tagline: "Wok-tossed Indo-Chinese noodles, fried rice, and savory Manchurian",
    editorialText:
      "The beloved Indo-Chinese culinary tradition combines Chinese wok cooking with fiery Indian aromatics. High-flame stir-fried noodles and fragrant fried rice tossed with crunchy vegetables, soy sauce, and tender chicken, alongside saucy Chicken or Veg Manchurian balls infused with garlic, ginger, and chili. A favorite comfort food choice across Sydney.",
    dietaryHighlights: ["High-Flame Wok Cooked", "Fresh Crunchy Vegetables", "Halal Chicken Available", "Vegetarian Options"],
    pairingSuggestions:
      "Combine Chicken Fried Rice with saucy Chicken Manchurian, or Veg Noodles with Veg Manchurian for the ultimate Indo-Chinese feast.",
    faqs: [
      {
        question: "What is Desi Chinese cuisine?",
        answer:
          "Desi Chinese (Indo-Chinese) is a beloved fusion adapting Chinese stir-fry and wok-tossing techniques with bold Indian spices, green chilies, ginger, and soy sauce.",
      },
      {
        question: "Can I get non-spicy fried rice or noodles for kids?",
        answer:
          "Yes, our chefs can prepare mild, non-spicy wok noodles or fried rice suitable for children upon request.",
      },
    ],
  },
  Desserts: {
    tagline: "Iconic Hyderabadi royal sweets, apricot compote, and saffron puddings",
    editorialText:
      "No Hyderabadi meal is complete without traditional royal desserts. Indulge in authentic Qubani Ka Meetha—slow-stewed Turkish apricots served with clotted cream—or royal Shahi Tukda, golden fried bread soaked in saffron-cardamom rabri and garnished with slivered pistachios. Also offering soft melt-in-your-mouth Gulab Jamun and delicate Rasmalai in sweet saffron milk.",
    dietaryHighlights: ["Traditional Nizami Recipes", "Saffron & Nut Infusions", "Pure Ghee & Whole Milk", "Vegetarian Friendly"],
    pairingSuggestions:
      "End your late-night feast with warm Gulab Jamun or chilled Qubani Ka Meetha alongside hot spiced Irani Chai.",
    faqs: [
      {
        question: "What is Qubani Ka Meetha?",
        answer:
          "Qubani Ka Meetha is an iconic Hyderabadi royal dessert made by slow-stewing dried apricots in sugar syrup and topped with fresh cream or custard and apricot kernels.",
      },
      {
        question: "What is Shahi Tukda?",
        answer:
          "Shahi Tukda is the 'Royal Bread Pudding' of the Nizams, made with golden fried bread soaked in fragrant saffron-infused rabri and garnished with pistachios.",
      },
    ],
  },
  Drinks: {
    tagline: "Authentic Hyderabadi Irani Chai, creamy mango lassi, and cold refreshments",
    editorialText:
      "Quench your thirst and soothe your palate with our beverage offerings. Sip on authentic Hyderabadi Irani Chai—brewed strong with thickened milk, green cardamom, and aromatic spices—or indulge in thick, silky Mango Lassi blended from real mango pulp and fresh yogurt. Assorted chilled soft drinks and bottled water are also available.",
    dietaryHighlights: ["Freshly Brewed Daily", "Real Alphonso Mango Pulp", "Aromatic Spices", "Refreshing & Soothing"],
    pairingSuggestions:
      "Enjoy a tall Mango Lassi alongside spicy Biryani, and finish with hot Irani Chai after dessert.",
    faqs: [
      {
        question: "How is the Hyderabadi Chai brewed?",
        answer:
          "Our Irani Chai is brewed as a strong decoction with rich whole milk, crushed cardamom, and spices, kept warm on a traditional boiler.",
      },
      {
        question: "Is the Mango Lassi freshly blended?",
        answer:
          "Yes, we blend real Alphonso mango pulp with thick creamy yogurt and a hint of cardamom.",
      },
    ],
  },
};

export const Route = createFileRoute("/menu")({
  validateSearch: (search: Record<string, unknown>): { category?: string } => {
    return {
      category: (search.category as string) || undefined,
    };
  },
  loaderDeps: ({ search: { category } }) => ({ category }),
  loader: async ({ deps: { category } }) => {
    const activeCategory = category && categories.includes(category) ? category : "Biryani & Mains";
    let items = fallbackMenuData[activeCategory as keyof typeof fallbackMenuData] || [];
    try {
      const apiUrl = process.env.VITE_API_URL || "https://parivar-restaurant-final.onrender.com";
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const res = await fetch(`${apiUrl}/api/v1/menu/?category=${encodeURIComponent(activeCategory)}`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          items = data;
        }
      }
    } catch {
      // Fallback immediately on network or cold start timeout
    }
    return {
      items,
      activeCategory,
    };
  },
  head: ({
    loaderData,
    search,
  }: {
    loaderData?: { items?: any[]; activeCategory?: string };
    search?: { category?: string };
  }) => {
    const activeCat = loaderData?.activeCategory || "Biryani & Mains";
    const items = loaderData?.items || fallbackMenuData[activeCat as keyof typeof fallbackMenuData] || [];
    const editorial = categoryEditorialData[activeCat] || categoryEditorialData["Biryani & Mains"];
    const canonicalUrl = search?.category
      ? `https://parivar.restaurant/menu?category=${encodeURIComponent(activeCat)}`
      : "https://parivar.restaurant/menu";

    return {
      meta: [
        { title: `${activeCat} Menu | Parivar Restaurant Wiley Park` },
        {
          name: "description",
          content: `Discover Halal ${activeCat} at Parivar Restaurant, Wiley Park. Authentic Hyderabadi recipes prepared fresh daily. Dine-in & takeaway open 3 PM - 3 AM.`,
        },
        { property: "og:title", content: `${activeCat} Menu | Parivar Restaurant Wiley Park` },
        {
          property: "og:description",
          content: `Explore authentic ${activeCat} at Parivar Restaurant in Sydney. Delicious biryani, curries, and tandoori served fresh until 3:00 AM.`,
        },
        { property: "og:url", content: canonicalUrl },
        { property: "og:image", content: "https://parivar.restaurant/parivar-logo.png" },
      ],
      links: [
        {
          rel: "canonical",
          href: canonicalUrl,
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${activeCat} - Parivar Restaurant Menu`,
            description: `Authentic ${activeCat} available for dine-in, takeaway, and catering at Parivar Restaurant Sydney.`,
            numberOfItems: items.length,
            itemListElement: items.map((item: any, index: number) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "MenuItem",
                name: item.name,
                description: item.description || item.desc || "",
                offers: {
                  "@type": "Offer",
                  price: item.price,
                  priceCurrency: "AUD",
                  availability: "https://schema.org/InStock",
                },
              },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://parivar.restaurant/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Menu",
                item: "https://parivar.restaurant/menu",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: activeCat,
                item: canonicalUrl,
              },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: editorial.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        },
      ],
    };
  },
  component: MenuPage,
});

function MenuPage() {
  const loaderData = Route.useLoaderData();
  const { category } = Route.useSearch();
  const cartItems = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const activeCategory = category && categories.includes(category) ? category : "Biryani & Mains";
  const editorial = categoryEditorialData[activeCategory] || categoryEditorialData["Biryani & Mains"];

  const [items, setItems] = useState<any[]>(
    loaderData?.activeCategory === activeCategory && loaderData?.items?.length
      ? loaderData.items
      : fallbackMenuData[activeCategory as keyof typeof fallbackMenuData] || []
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loaderData?.activeCategory === activeCategory && loaderData?.items?.length) {
      setItems(loaderData.items);
      setLoading(false);
      return;
    }

    const fetchMenu = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_API_URL || "https://parivar-restaurant-final.onrender.com"}/api/v1/menu/?category=${encodeURIComponent(activeCategory)}`,
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();

        if (data && data.length > 0) {
          setItems(data);
        } else {
          setItems(fallbackMenuData[activeCategory as keyof typeof fallbackMenuData] || []);
        }
      } catch {
        setItems(fallbackMenuData[activeCategory as keyof typeof fallbackMenuData] || []);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, [activeCategory, loaderData]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32 flex flex-col">
      <Navbar />

      <main id="menu-content" className="container mx-auto px-6 py-10 flex-1 max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gold/40">/</span>
            <Link to="/menu" className="hover:text-gold transition-colors">Menu</Link>
            <span className="text-gold/40">/</span>
            <span className="text-gold font-medium" aria-current="page">{activeCategory}</span>
          </nav>

          <Link
            to="/"
            hash="menu"
            className="inline-flex items-center gap-2 text-[#042416] hover:text-[#D4A017] transition-colors font-medium group text-sm"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            All Categories
          </Link>
        </div>

        {/* Category Pill Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <Link
              key={cat}
              to="/menu"
              search={{ category: cat }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#0B5D3B] text-white shadow-md shadow-[#0B5D3B]/20 border border-[#0B5D3B]"
                  : "bg-background/80 hover:bg-muted text-muted-foreground hover:text-foreground border border-gold/15"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Category Header */}
        <div className="mb-10 text-center">
          <div className="gold-divider mb-4 justify-center">
            <span className="h-px w-10 bg-gold/40" /> Parivar Menu{" "}
            <span className="h-px w-10 bg-gold/40" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold">{activeCategory}</h1>
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mt-2">
            {editorial.tagline}
          </h2>

          <div className="max-w-2xl mx-auto mt-4">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {editorial.editorialText}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {editorial.dietaryHighlights.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-gold/10 text-[#0B5D3B] border border-gold/20"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dishes Grid */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center py-20"
            >
              <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 md:grid-cols-1"
            >
              {items.map((item) => (
                <div
                  key={item.name}
                  className="glass p-4 sm:p-6 rounded-2xl border border-gold/10 flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-full sm:w-32 h-32 shrink-0 rounded-xl overflow-hidden border border-gold/20 relative shadow-sm">
                    <img
                      src={resolveImageUrl(
                        item.image_url || item.img,
                        item.category?.name || "",
                        item.name,
                      )}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = logo;
                      }}
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl" />
                  </div>
                  <div className="flex-1 w-full text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2 mb-2">
                      <h3 className="font-display text-2xl font-medium text-foreground">
                        {item.name}
                      </h3>
                      <span className="text-gold font-display text-2xl sm:text-xl font-bold bg-gold/10 px-3 py-1 rounded-full">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mt-2 sm:mt-0 max-w-lg mx-auto sm:mx-0">
                      {item.description || item.desc}
                    </p>
                    <div className="mt-4 flex items-center justify-center sm:justify-end">
                      {(() => {
                        const cartItem = cartItems.find((i) => i.id === item.name);
                        return cartItem ? (
                          <div className="flex items-center gap-3 bg-[#0B5D3B]/10 rounded-full px-1 py-1 border border-[#0B5D3B]/20">
                            <button
                              onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                              className="bg-background hover:bg-muted text-[#0B5D3B] w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-medium text-[#0B5D3B] min-w-[1.5rem] text-center">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                              className="bg-[#0B5D3B] hover:bg-[#094A2F] text-cream w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-sm"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() =>
                              addItem({
                                id: item.name,
                                name: item.name,
                                price: item.price,
                                image_url: item.image_url || item.img,
                              })
                            }
                            className="bg-[#0B5D3B] text-cream px-5 py-2 rounded-full font-medium hover:bg-[#D4A017] transition-colors duration-300 shadow-sm hover:shadow-gold-glow flex items-center gap-2 text-sm"
                          >
                            <Plus className="w-4 h-4" />
                            Add to Cart
                          </button>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pairing Recommendation */}
        <section className="mt-12 p-6 rounded-2xl bg-card border border-gold/20 shadow-sm">
          <h2 className="font-display text-xl sm:text-2xl text-foreground font-semibold mb-2">
            Chef's Pairing Recommendation
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            {editorial.pairingSuggestions}
          </p>
        </section>

        {/* Category FAQs */}
        <section className="mt-12 mb-8">
          <div className="text-center mb-6">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground font-bold">
              Frequently Asked Questions: {activeCategory}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Everything you need to know about our ingredients, Halal preparation, and ordering.
            </p>
          </div>
          <div className="grid gap-4">
            {editorial.faqs.map((faq, index) => (
              <div key={index} className="glass p-5 rounded-xl border border-gold/15 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
