import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Utensils, Calendar, ShieldCheck, HeartHandshake, PhoneCall, CheckCircle2 } from "lucide-react";

interface TiffinPlan {
  id: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  recommendedFor: string;
  badge?: string;
}

const TIFFIN_PLANS: TiffinPlan[] = [
  {
    id: "weekly-regular",
    name: "Classic Homestyle Tiffin",
    price: "$75",
    cadence: "per week (Mon – Fri)",
    description: "Wholesome, low-oil everyday meals prepared just like home with authentic Hyderabadi warmth.",
    features: [
      "1x Daily Meat or Vegetable Curry",
      "1x Homestyle Yellow Daal Tadka",
      "4x Soft Wholemeal Hand-Rolled Rotis OR Basmati Rice",
      "Fresh Cucumber Salad & House Pickle",
      "100% Australian Halal Certified Ingredients",
    ],
    recommendedFor: "Working professionals & busy couples",
    badge: "Most Popular",
  },
  {
    id: "weekly-royal",
    name: "Royal Nizami Feast Tiffin",
    price: "$95",
    cadence: "per week (Mon – Fri)",
    description: "An elevated dining experience featuring rich Mughlai chicken and mutton curries, plus biryani days.",
    features: [
      "2x Premium Curries (Mutton Korma, Butter Chicken, Chicken Masala)",
      "Wednesday & Friday Special Dum Biryani portions",
      "4x Hand-Rolled Rotis + Saffron Rice",
      "Cooling Raita, Salad & Sweet Dessert of the day",
      "100% Halal Goat & Australian Chicken",
    ],
    recommendedFor: "Food lovers wanting authentic Hyderabadi specialties",
    badge: "Chef's Choice",
  },
  {
    id: "student-budget",
    name: "Student 7-Day Care Tiffin",
    price: "$110",
    cadence: "per week (Mon – Sun)",
    description: "Complete everyday dinner support for university students living away from home across Sydney.",
    features: [
      "7 Days dinner box delivered hot and fresh",
      "Rotating daily curries, lentils, rotis & fragrant rice",
      "Generous portion sizes designed for active lifestyles",
      "Affordable cost-per-meal with zero cooking needed",
      "Flexible pause options for university exam breaks",
    ],
    recommendedFor: "International students in Canterbury-Bankstown & Sydney",
  },
];

const WEEKLY_MENU_SCHEDULE = [
  { day: "Monday", lunch: "Chicken Khorma & Daal Tadka", dinner: "Paneer Tikka Masala & Jeera Rice" },
  { day: "Tuesday", lunch: "Mutton Masala & Yellow Lentils", dinner: "Achari Chicken & Warm Rotis" },
  { day: "Wednesday", lunch: "Hyderabadi Chicken Dum Biryani", dinner: "Butter Chicken & Garlic Naan" },
  { day: "Thursday", lunch: "Mutton Korma & Mixed Veg Curry", dinner: "Chicken Vindaloo & Bagara Rice" },
  { day: "Friday", lunch: "Hyderabadi Mutton Dum Biryani & Salan", dinner: "Tandoori Chicken & Parivar Gravy" },
];

const TIFFIN_FAQS = [
  {
    question: "Which Sydney suburbs do you deliver the daily tiffin service to?",
    answer:
      "We deliver daily across Canterbury-Bankstown and surrounding suburbs including Wiley Park, Lakemba, Punchbowl, Roselands, Campsie, Belmore, Greenacre, Bankstown, and Strathfield.",
  },
  {
    question: "Can I pause or skip my tiffin subscription if I travel?",
    answer:
      "Yes, simply notify our kitchen team 24 hours in advance via phone or WhatsApp at +61 405 635 423, and we will pause your subscription and credit the skipped days.",
  },
  {
    question: "Is the food prepared fresh daily or frozen?",
    answer:
      "Every single tiffin meal is prepared fresh from scratch in our commercial kitchen at 1/83 King Georges Rd, Wiley Park every afternoon. We never freeze or mass-reheat meals.",
  },
  {
    question: "Are all meats strictly Halal certified?",
    answer:
      "Yes, 100% of our meat is sourced from accredited Australian Halal suppliers, and our entire kitchen adheres to strict Halal preparation standards.",
  },
];

export const Route = createFileRoute("/tiffin")({
  head: () => ({
    meta: [
      { title: "Halal Indian Tiffin Service Sydney | Parivar Restaurant" },
      {
        name: "description",
        content:
          "Daily and weekly Hyderabadi home-style tiffin meal subscriptions in Sydney. Fresh rotis, curries, daal & biryani. Halal certified, delivered to your door.",
      },
      { property: "og:title", content: "Halal Indian Tiffin Service Sydney | Parivar Restaurant" },
      {
        property: "og:description",
        content:
          "Daily and weekly Hyderabadi home-style tiffin meal subscriptions in Sydney. Fresh rotis, curries, daal & biryani. Halal certified, delivered to your door.",
      },
      { property: "og:url", content: "https://parivar.restaurant/tiffin" },
      { property: "og:image", content: "https://parivar.restaurant/parivar-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Halal Indian Tiffin Service Sydney | Parivar Restaurant" },
      {
        name: "twitter:description",
        content:
          "Daily and weekly Hyderabadi home-style tiffin meal subscriptions in Sydney. Fresh rotis, curries, daal & biryani. Halal certified, delivered to your door.",
      },
      { name: "twitter:image", content: "https://parivar.restaurant/parivar-logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://parivar.restaurant/tiffin",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodService",
          name: "Parivar Hyderabadi Tiffin Meal Subscription",
          serviceType: "Tiffin Meal Delivery Service",
          provider: {
            "@type": "Restaurant",
            "@id": "https://parivar.restaurant/#restaurant",
            name: "Parivar Restaurant",
            telephone: "+61 405 635 423",
            url: "https://parivar.restaurant",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1/83 King Georges Rd",
              addressLocality: "Wiley Park",
              addressRegion: "NSW",
              postalCode: "2195",
              addressCountry: "AU",
            },
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Canterbury-Bankstown and Greater Sydney, NSW",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Parivar Tiffin Meal Plans",
            itemListElement: TIFFIN_PLANS.map((plan) => ({
              "@type": "Offer",
              name: plan.name,
              description: plan.description,
              price: plan.price.replace("$", ""),
              priceCurrency: "AUD",
              availability: "https://schema.org/InStock",
            })),
          },
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
              name: "Tiffin Service",
              item: "https://parivar.restaurant/tiffin",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: TIFFIN_FAQS.map((faq) => ({
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
  component: TiffinPage,
});

function TiffinPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32 flex flex-col">
      <Navbar />

      <main id="tiffin-content" className="container mx-auto px-6 py-10 flex-1 max-w-6xl">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="text-gold/40">/</span>
          <span className="text-gold font-medium" aria-current="page">Tiffin Service</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="gold-divider mb-4 justify-center">
            <span className="h-px w-10 bg-gold/40" />
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold font-semibold">
              <Utensils className="w-3.5 h-3.5" /> Daily Home-Style Meals
            </span>
            <span className="h-px w-10 bg-gold/40" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gold mb-4">
            Hyderabadi Tiffin Service Sydney
          </h1>

          <h2 className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Miss authentic home-cooked meals? Enjoy nutritious, low-oil Indian dinners delivered fresh to your doorstep
            across Canterbury-Bankstown and Sydney. 100% Halal certified, crafted with care daily.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs sm:text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B5D3B]/10 text-[#0B5D3B] font-semibold border border-[#0B5D3B]/20">
              <ShieldCheck className="w-4 h-4" /> 100% Australian Halal Certified
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-gold font-semibold border border-gold/20">
              <HeartHandshake className="w-4 h-4" /> No Preservatives, Cooked Fresh
            </span>
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass p-6 rounded-2xl border border-gold/20 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 text-gold font-bold flex items-center justify-center text-xl font-display">
              1
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Choose Your Plan
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Select between our 5-day classic homestyle, royal banquet, or 7-day student dinner subscription.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border border-gold/20 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 text-gold font-bold flex items-center justify-center text-xl font-display">
              2
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Cooked Fresh Daily
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our chefs simmer curries and hand-roll fresh rotis in our Wiley Park kitchen every afternoon.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl border border-gold/20 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 text-gold font-bold flex items-center justify-center text-xl font-display">
              3
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Delivered To Your Door
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Packed in insulated containers and delivered warm to your home or office, ready to eat and enjoy.
            </p>
          </div>
        </div>

        {/* Tiffin Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TIFFIN_PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-6 border border-gold/20 flex flex-col justify-between hover:shadow-gold-glow transition-all duration-300 relative"
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0B5D3B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Ideal for: {plan.recommendedFor}
                </p>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-gold font-display">
                    {plan.price}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {plan.cadence}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="space-y-2 mb-8">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-[#0B5D3B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="tel:+61405635423"
                className="w-full bg-[#0B5D3B] hover:bg-[#D4A017] text-white font-medium py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                Subscribe via Call / WhatsApp
              </a>
            </motion.div>
          ))}
        </div>

        {/* Weekly Rotating Schedule Preview */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground font-bold">
              Sample Weekly Rotating Schedule
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              We rotate our curries, lentils, and breads daily to guarantee variety and nutritional balance.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 border border-gold/20 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/50 text-gold uppercase tracking-wider text-xs">
                  <th className="py-3 px-4">Day</th>
                  <th className="py-3 px-4">Featured Lunch Menu</th>
                  <th className="py-3 px-4">Featured Dinner Menu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30 text-muted-foreground">
                {WEEKLY_MENU_SCHEDULE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 font-semibold text-foreground">{item.day}</td>
                    <td className="py-3 px-4">{item.lunch}</td>
                    <td className="py-3 px-4">{item.dinner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground font-bold">
              Frequently Asked Questions About Tiffin
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Everything you need to know about starting your meal delivery subscription.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {TIFFIN_FAQS.map((faq, index) => (
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
