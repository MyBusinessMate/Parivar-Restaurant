import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCartStore } from "@/store/cart";
import { motion } from "framer-motion";
import { Tag, Sparkles, Plus, Clock, ShieldCheck, ShoppingBag } from "lucide-react";
import logo from "@/assets/parivar-logo.png";

interface Deal {
  id: string;
  name: string;
  originalPrice: number;
  dealPrice: number;
  saving: number;
  description: string;
  items: string[];
  imageUrl: string;
  badge: string;
}

const DEALS: Deal[] = [
  {
    id: "biryani-feast-for-two",
    name: "Biryani Feast for Two",
    originalPrice: 48.0,
    dealPrice: 38.99,
    saving: 9.01,
    description: "Two royal dum biryanis of your choice served with crispy Chicken 65, salan, raita, and cold drinks.",
    items: [
      "2x Chicken or Mutton Dum Biryanis",
      "1x Chicken 65 Starters Portion",
      "2x Can Soft Drinks",
      "Served with Mirchi Ka Salan & Cucumber Raita",
    ],
    imageUrl: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787056264/2_jlzkle.jpg",
    badge: "Most Popular",
  },
  {
    id: "family-royal-platter",
    name: "Family Royal Platter",
    originalPrice: 92.0,
    dealPrice: 74.99,
    saving: 17.01,
    description: "The complete Nizami dining spread for 4-5 people with biryani, curry, tandoori starters, and naan.",
    items: [
      "2x Hyderabadi Dum Biryanis",
      "1x Butter Chicken or Mutton Korma",
      "1x Tandoori Chicken (Half)",
      "3x Fresh Garlic Naans",
      "4x Can Soft Drinks & Gulab Jamuns",
    ],
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
    badge: "Best Value",
  },
  {
    id: "student-late-night-combo",
    name: "Student Late-Night Combo",
    originalPrice: 24.5,
    dealPrice: 19.99,
    saving: 4.51,
    description: "Freshly packed hot meal combo for students and late-night workers. Available every night until 3:00 AM.",
    items: [
      "1x Hyderabadi Chicken Dum Biryani",
      "1x Crispy Golden Samosa (2 pcs)",
      "1x Hyderabadi Irani Chai or Soft Drink",
    ],
    imageUrl: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787056419/4_ldlbhe.jpg",
    badge: "Late Night 3 AM",
  },
  {
    id: "curry-naan-duo",
    name: "Curry & Tandoor Naan Duo",
    originalPrice: 28.5,
    dealPrice: 22.99,
    saving: 5.51,
    description: "Your choice of rich Mughlai curry paired with fragrant tempered basmati rice and blistered garlic naan.",
    items: [
      "1x Signature Curry (Butter Chicken, Mutton Korma, or Paneer Tikka Masala)",
      "1x Bagara Basmati Rice",
      "1x Clay Tandoor Garlic Naan",
    ],
    imageUrl: "https://res.cloudinary.com/akmdvmmw/image/upload/v1787057584/17_agl38c.avif",
    badge: "Dinner Special",
  },
  {
    id: "tandoori-chai-supper",
    name: "Tandoori Grill & Chai Supper",
    originalPrice: 24.0,
    dealPrice: 18.99,
    saving: 5.01,
    description: "Smoky charcoal tandoori chicken served with freshly baked butter naan and a steaming cup of Irani chai.",
    items: [
      "1x Tandoori Chicken (Half, 2 pcs)",
      "1x Warm Butter Naan",
      "1x Large Spiced Hyderabadi Irani Chai",
      "Mint Chutney & Pickled Onions",
    ],
    imageUrl: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=800&auto=format&fit=crop",
    badge: "Chef Special",
  },
  {
    id: "vegetarian-delight-box",
    name: "Vegetarian Feast Box",
    originalPrice: 39.5,
    dealPrice: 32.99,
    saving: 6.51,
    description: "A rich vegetarian celebration featuring aromatic veg dum biryani, classic daal tadka, and naans.",
    items: [
      "1x Vegetarian Saffron Dum Biryani",
      "1x Daal Tadka or Mixed Veg Curry",
      "2x Freshly Baked Plain Naans",
      "2x Warm Gulab Jamuns in Saffron Syrup",
    ],
    imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    badge: "100% Vegetarian",
  },
];

const DEALS_FAQS = [
  {
    question: "Are meal deal combos available for takeaway and late-night delivery?",
    answer:
      "Yes, all Parivar deal combos can be ordered for dine-in, fast counter takeaway, or delivered directly to your door across Wiley Park, Lakemba, Punchbowl, Roselands, and surrounding South-West Sydney suburbs until 3:00 AM daily.",
  },
  {
    question: "Are all meats in the combos 100% Halal certified?",
    answer:
      "Every single meat item served at Parivar Restaurant—including Australian lamb, goat, and chicken—is strictly 100% Halal certified from accredited Australian suppliers.",
  },
  {
    question: "Can I customize the curries or biryanis in a meal package?",
    answer:
      "Yes, simply let our team know your preference during checkout or counter ordering to adjust spice heat levels or select mutton instead of chicken where applicable.",
  },
];

export const Route = createFileRoute("/deals")({
  head: () => ({
    meta: [
      { title: "Halal Indian Meal Deals & Combos | Parivar Sydney" },
      {
        name: "description",
        content:
          "Special Hyderabadi meal combos, Biryani feast boxes and lunch deals at Parivar Restaurant Wiley Park. 100% Halal certified, available 3 PM to 3 AM.",
      },
      { property: "og:title", content: "Halal Indian Meal Deals & Combos | Parivar Sydney" },
      {
        property: "og:description",
        content:
          "Special Hyderabadi meal combos, Biryani feast boxes and lunch deals at Parivar Restaurant Wiley Park. 100% Halal certified, available 3 PM to 3 AM.",
      },
      { property: "og:url", content: "https://parivar.restaurant/deals" },
      { property: "og:image", content: "https://parivar.restaurant/parivar-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Halal Indian Meal Deals & Combos | Parivar Sydney" },
      {
        name: "twitter:description",
        content:
          "Special Hyderabadi meal combos, Biryani feast boxes and lunch deals at Parivar Restaurant Wiley Park. 100% Halal certified, available 3 PM to 3 AM.",
      },
      { name: "twitter:image", content: "https://parivar.restaurant/parivar-logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://parivar.restaurant/deals",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Parivar Restaurant Value Deals & Meal Combos",
          description: "Curated Halal Indian meal combos and banquet bundles at Parivar Restaurant Wiley Park.",
          numberOfItems: DEALS.length,
          itemListElement: DEALS.map((deal, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: {
              "@type": "Offer",
              name: deal.name,
              description: deal.description,
              price: deal.dealPrice,
              priceCurrency: "AUD",
              availability: "https://schema.org/InStock",
              url: "https://parivar.restaurant/deals",
              seller: {
                "@type": "Restaurant",
                name: "Parivar Restaurant",
                telephone: "+61 405 635 423",
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
              name: "Deals & Combos",
              item: "https://parivar.restaurant/deals",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: DEALS_FAQS.map((faq) => ({
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
  }),
  component: DealsPage,
});

function DealsPage() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32 flex flex-col">
      <Navbar />

      <main id="deals-content" className="container mx-auto px-6 py-10 flex-1 max-w-6xl">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="text-gold/40">/</span>
          <span className="text-gold font-medium" aria-current="page">Deals &amp; Combos</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="gold-divider mb-4 justify-center">
            <span className="h-px w-10 bg-gold/40" />
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold font-semibold">
              <Tag className="w-3.5 h-3.5" /> Best Value Bundles
            </span>
            <span className="h-px w-10 bg-gold/40" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gold mb-4">
            Exclusive Deals &amp; Combos
          </h1>

          <h2 className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Feast like royalty for less. Savor generous portions of slow-cooked Hyderabadi biryani,
            tandoori chicken, freshly baked naans, and rich curries bundled for couples, families, and students.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs sm:text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B5D3B]/10 text-[#0B5D3B] font-semibold border border-[#0B5D3B]/20">
              <ShieldCheck className="w-4 h-4" /> 100% Australian Halal Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-gold font-semibold border border-gold/20">
              <Clock className="w-4 h-4" /> Open Daily 3:00 PM – 3:00 AM
            </span>
          </div>
        </div>

        {/* Deals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {DEALS.map((deal) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl overflow-hidden border border-gold/20 flex flex-col hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={deal.imageUrl}
                  alt={deal.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = logo;
                  }}
                />
                <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Save ${deal.saving.toFixed(2)}
                </span>
                <span className="absolute bottom-3 left-3 bg-[#0B5D3B] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {deal.badge}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {deal.name}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-gold font-display">
                      ${deal.dealPrice.toFixed(2)}
                    </span>
                    <span className="text-sm line-through text-muted-foreground">
                      ${deal.originalPrice.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {deal.description}
                  </p>

                  <div className="bg-muted/40 rounded-xl p-3 mb-6 border border-border/50">
                    <p className="text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wider">
                      Includes:
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {deal.items.map((it, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-gold font-bold">✓</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() =>
                    addItem({
                      id: deal.id,
                      name: deal.name,
                      price: deal.dealPrice,
                      image_url: deal.imageUrl,
                    })
                  }
                  className="w-full bg-[#0B5D3B] hover:bg-[#D4A017] text-white font-medium py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  Add Combo to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground font-bold">
              Frequently Asked Questions About Deals
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Everything you need to know about ordering our combo boxes and feast packages.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {DEALS_FAQS.map((faq, index) => (
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
