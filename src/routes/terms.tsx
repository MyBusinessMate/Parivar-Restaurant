import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service - Parivar Restaurant" },
      {
        name: "description",
        content:
          "Terms and Conditions of Service for Parivar Restaurant. Information regarding pricing, orders, takeaway, dining, and catering policies in Wiley Park, Sydney.",
      },
      { property: "og:title", content: "Terms of Service - Parivar Restaurant" },
      {
        property: "og:description",
        content: "Terms and conditions for dining, online ordering, and catering at Parivar Restaurant.",
      },
      { property: "og:url", content: "https://parivar-restaurant.com/terms" },
      { property: "og:image", content: "https://parivar-restaurant.com/parivar-logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://parivar-restaurant.com/terms",
      },
    ],
    scripts: [
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
              "item": "https://parivar-restaurant.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Terms of Service",
              "item": "https://parivar-restaurant.com/terms"
            }
          ]
        })
      }
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32 flex flex-col">
      <Navbar />

      <main id="terms-content" className="container mx-auto px-6 py-12 flex-1 max-w-4xl">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="text-gold/40">/</span>
          <span className="text-gold font-medium" aria-current="page">Terms of Service</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl text-gold mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: September 17, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section className="glass p-6 md:p-8 rounded-2xl border border-gold/15">
            <h2 className="font-display text-2xl text-foreground mb-3">1. Ordering &amp; Pricing</h2>
            <p>
              All prices listed on our website and in-store are in Australian Dollars (AUD) and inclusive of Goods and Services Tax (GST). We reserve the right to amend prices and dish availability without prior notice based on seasonal market supply.
            </p>
          </section>

          <section className="glass p-6 md:p-8 rounded-2xl border border-gold/15">
            <h2 className="font-display text-2xl text-foreground mb-3">2. 100% Halal Guarantee</h2>
            <p>
              Parivar Restaurant guarantees that all food prepared in our kitchen is strictly 100% Halal certified. We source exclusively from certified Australian Halal suppliers and maintain strict separation and hygiene protocols.
            </p>
          </section>

          <section className="glass p-6 md:p-8 rounded-2xl border border-gold/15">
            <h2 className="font-display text-2xl text-foreground mb-3">3. Cancellations &amp; Refunds</h2>
            <p>
              Due to the perishable and freshly prepared nature of our cuisine:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Takeaway orders already placed into kitchen preparation cannot be cancelled or refunded.</li>
              <li>In the rare event of an incorrect or missing dish, please notify our staff immediately so we can prepare an immediate replacement or issue a refund.</li>
              <li>Catering bookings require at least 48 hours notice for cancellations to receive a deposit refund.</li>
            </ul>
          </section>

          <section className="glass p-6 md:p-8 rounded-2xl border border-gold/15">
            <h2 className="font-display text-2xl text-foreground mb-3">4. Operating Hours &amp; Service</h2>
            <p>
              Our dining room and takeaway services operate daily from 3:00 PM until 3:00 AM. Orders placed near closing time are subject to kitchen capacity and final orders schedule.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
