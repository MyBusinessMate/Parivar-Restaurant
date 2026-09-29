import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Catering } from "@/components/Catering";
import { Sparkles, Award, UtensilsCrossed, Users } from "lucide-react";
import logo from "@/assets/parivar-logo.png";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Royal Indian & Halal Catering Sydney - Parivar Restaurant" },
      {
        name: "description",
        content:
          "Award-winning Halal Indian & Mughlai catering in Sydney. Authentic Hyderabadi Dum Biryani, live tandoor grills, and bespoke banquets for weddings, corporate events, and parties.",
      },
      { property: "og:title", content: "Royal Indian & Halal Catering Sydney - Parivar Restaurant" },
      {
        property: "og:description",
        content:
          "Experience royal Nizami banquets crafted for your special day. Authentic slow-cooked biryani, kebabs, and dessert spreads across Greater Sydney.",
      },
      { property: "og:url", content: "https://parivar.restaurant/catering" },
      { property: "og:image", content: "https://parivar.restaurant/parivar-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Royal Indian & Halal Catering Sydney - Parivar Restaurant" },
      {
        name: "twitter:description",
        content:
          "Award-winning Halal Indian & Mughlai catering in Sydney. Live tandoor, authentic dum biryani, and dessert buffets.",
      },
      { name: "twitter:image", content: "https://parivar.restaurant/parivar-logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://parivar.restaurant/catering",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodService",
          "name": "Parivar Royal Indian Catering Sydney",
          "serviceType": "Catering Service",
          "provider": {
            "@type": "Restaurant",
            "@id": "https://parivar.restaurant/#restaurant",
            "name": "Parivar Restaurant",
            "telephone": "+61 405 635 423",
            "url": "https://parivar.restaurant",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1/83 King Georges Rd",
              "addressLocality": "Wiley Park",
              "addressRegion": "NSW",
              "postalCode": "2195",
              "addressCountry": "AU"
            }
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Greater Sydney, New South Wales"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Parivar Catering Packages",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Royal Wedding Banquet",
                "description": "Full-service multi-course Nizami feast with live tandoor stations, royal dum biryani, curries, and dessert banquets."
              },
              {
                "@type": "Offer",
                "name": "Corporate Event Hospitality",
                "description": "Premium Indian buffets and individual executive lunch boxes for galas, conferences, and boardrooms."
              },
              {
                "@type": "Offer",
                "name": "Family & Community Gatherings",
                "description": "Sealed dum biryani handis, tandoori starters, and accompaniment spreads for celebrations of 20 to 500+ guests."
              }
            ]
          }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://parivar.restaurant/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Catering",
              "item": "https://parivar.restaurant/catering"
            }
          ]
        })
      }
    ],
  }),
  component: CateringPage,
});

function CateringPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32 flex flex-col">
      <Navbar />

      <main id="catering-content" className="flex-1">
        {/* Breadcrumb Header */}
        <div className="container mx-auto px-6 mb-8 max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gold/40">/</span>
            <span className="text-gold font-medium" aria-current="page">Catering</span>
          </nav>
        </div>

        {/* Catering Hero Showcase */}
        <div className="container mx-auto px-6 mb-16 max-w-7xl text-center">
          <div className="gold-divider justify-center mb-6">
            <span className="h-px w-10 bg-gold/40" />
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
              <Sparkles className="w-3.5 h-3.5" /> Sydney Wedding &amp; Event Catering
            </span>
            <span className="h-px w-10 bg-gold/40" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl mb-6 text-foreground">
            Royal Feasts for <span className="text-gold-gradient italic">Grand Occasions</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10">
            Bring the legendary hospitality and authentic Nizami recipes of Parivar to your weddings, corporate banquets, and family milestones across Greater Sydney. 100% Halal certified, tailored to perfection.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Award, title: "100% Halal", desc: "Strictly certified meats & ingredients" },
              { icon: UtensilsCrossed, title: "Live Stations", desc: "Clay tandoor & fresh naan setups" },
              { icon: Users, title: "Any Size", desc: "From 20 to 1,000+ attendees" },
              { icon: Sparkles, title: "Sydney-Wide", desc: "Delivered & serviced on location" },
            ].map((item, idx) => (
              <div key={idx} className="glass p-5 rounded-xl border border-gold/15 text-center">
                <item.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <h2 className="font-display text-lg font-medium text-foreground">{item.title}</h2>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Existing Catering Component with Form */}
        <Catering />
      </main>

      <Footer />
    </div>
  );
}
