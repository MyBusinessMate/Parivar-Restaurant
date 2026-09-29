import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Parivar Restaurant" },
      {
        name: "description",
        content:
          "Privacy Policy for Parivar Restaurant in Wiley Park, Sydney. Learn how we handle and protect customer contact, ordering, and payment information.",
      },
      { property: "og:title", content: "Privacy Policy - Parivar Restaurant" },
      {
        property: "og:description",
        content: "Learn how Parivar Restaurant protects your personal information.",
      },
      { property: "og:url", content: "https://parivar.restaurant/privacy-policy" },
      { property: "og:image", content: "https://parivar.restaurant/parivar-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy - Parivar Restaurant" },
      {
        name: "twitter:description",
        content: "Learn how Parivar Restaurant protects your personal information.",
      },
      { name: "twitter:image", content: "https://parivar.restaurant/parivar-logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://parivar.restaurant/privacy-policy",
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
              "item": "https://parivar.restaurant/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Privacy Policy",
              "item": "https://parivar.restaurant/privacy-policy"
            }
          ]
        })
      }
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32 flex flex-col">
      <Navbar />

      <main id="privacy-content" className="container mx-auto px-6 py-12 flex-1 max-w-4xl">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="text-gold/40">/</span>
          <span className="text-gold font-medium" aria-current="page">Privacy Policy</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl text-gold mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: September 17, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section className="glass p-6 md:p-8 rounded-2xl border border-gold/15">
            <h2 className="font-display text-2xl text-foreground mb-3">1. Information We Collect</h2>
            <p>
              When you visit Parivar Restaurant, place an online order for takeaway or dine-in, or request event catering, we may collect the following personal information:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Contact details such as your name, telephone number, and email address.</li>
              <li>Order specifics, including selected menu items, table numbers, dietary notes, and pickup/delivery instructions.</li>
              <li>Catering event specifications (guest count, venue location, preferred menu selection).</li>
            </ul>
          </section>

          <section className="glass p-6 md:p-8 rounded-2xl border border-gold/15">
            <h2 className="font-display text-2xl text-foreground mb-3">2. How We Use Your Information</h2>
            <p>
              We process your data strictly to fulfill your culinary requests and provide hospitality services:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>To prepare, cook, and accurately deliver your meals to your table or for takeaway.</li>
              <li>To send real-time order tracking updates via our order tracking system.</li>
              <li>To communicate with you regarding catering estimates and function coordination.</li>
              <li>To respond promptly to customer inquiries and support requests.</li>
            </ul>
          </section>

          <section className="glass p-6 md:p-8 rounded-2xl border border-gold/15">
            <h2 className="font-display text-2xl text-foreground mb-3">3. Payment Information &amp; Security</h2>
            <p>
              Payment details provided online or in-store are processed through secure, PCI-compliant payment gateways and banking terminals. We do not store raw credit or debit card numbers on our servers.
            </p>
          </section>

          <section className="glass p-6 md:p-8 rounded-2xl border border-gold/15">
            <h2 className="font-display text-2xl text-foreground mb-3">4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how your personal information is handled, please contact our management team:
            </p>
            <p className="mt-2 text-foreground font-medium">
              Parivar Restaurant<br />
              1/83 King Georges Rd, Wiley Park NSW 2195, Australia<br />
              Phone: +61 405 635 423
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
