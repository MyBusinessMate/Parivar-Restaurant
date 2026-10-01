import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Clock, Car, Train, ExternalLink, Star } from "lucide-react";

const CONTACT_FAQS = [
  {
    question: "What are your exact opening hours?",
    answer:
      "Parivar Restaurant is open 7 days a week from 3:00 PM to 3:00 AM every single day (including public holidays), serving late-night dinners, takeaway, and delivery across Sydney.",
  },
  {
    question: "How close is Parivar Restaurant to public transport?",
    answer:
      "We are conveniently located just 300 meters (a 4-minute flat walk) from Wiley Park Railway Station on the T3 line, with Sydney Bus routes 450 and 487 stopping right along King Georges Road.",
  },
  {
    question: "Is there free parking available nearby?",
    answer:
      "Yes, there is convenient street parking along King Georges Road and surrounding residential side streets, plus dedicated council car parking within a 2-minute walk.",
  },
  {
    question: "Do you accept table bookings for large family groups?",
    answer:
      "Yes! We gladly accept advance table reservations and private function bookings for groups of all sizes. Call or WhatsApp our team at +61 405 635 423 to reserve your table.",
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location | Parivar Restaurant Wiley Park" },
      {
        name: "description",
        content:
          "Visit Parivar Restaurant at 1/83 King Georges Rd, Wiley Park NSW 2195. Halal Indian dining open 3 PM - 3 AM daily. Phone: +61 405 635 423. Free parking.",
      },
      { property: "og:title", content: "Contact & Location | Parivar Restaurant Wiley Park" },
      {
        property: "og:description",
        content:
          "Visit Parivar Restaurant at 1/83 King Georges Rd, Wiley Park NSW 2195. Halal Indian dining open 3 PM - 3 AM daily. Phone: +61 405 635 423. Free parking.",
      },
      { property: "og:url", content: "https://parivar.restaurant/contact" },
      { property: "og:image", content: "https://parivar.restaurant/parivar-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact & Location | Parivar Restaurant Wiley Park" },
      {
        name: "twitter:description",
        content:
          "Visit Parivar Restaurant at 1/83 King Georges Rd, Wiley Park NSW 2195. Halal Indian dining open 3 PM - 3 AM daily. Phone: +61 405 635 423. Free parking.",
      },
      { name: "twitter:image", content: "https://parivar.restaurant/parivar-logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://parivar.restaurant/contact",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "@id": "https://parivar.restaurant/#restaurant",
          name: "Parivar Restaurant",
          telephone: "+61 405 635 423",
          url: "https://parivar.restaurant",
          servesCuisine: ["Hyderabadi", "Indian", "Halal", "Mughlai", "Biryani"],
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1/83 King Georges Rd",
            addressLocality: "Wiley Park",
            addressRegion: "NSW",
            postalCode: "2195",
            addressCountry: "AU",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -33.9238,
            longitude: 151.0664,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "15:00",
              closes: "03:00",
            },
          ],
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
              name: "Contact & Location",
              item: "https://parivar.restaurant/contact",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: CONTACT_FAQS.map((faq) => ({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32 flex flex-col">
      <Navbar />

      <main id="contact-content" className="container mx-auto px-6 py-10 flex-1 max-w-6xl">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="text-gold/40">/</span>
          <span className="text-gold font-medium" aria-current="page">Contact &amp; Location</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="gold-divider mb-4 justify-center">
            <span className="h-px w-10 bg-gold/40" />
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold font-semibold">
              <MapPin className="w-3.5 h-3.5" /> Wiley Park, Sydney
            </span>
            <span className="h-px w-10 bg-gold/40" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gold mb-4">
            Visit &amp; Contact Us
          </h1>

          <h2 className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Conveniently situated in the heart of South-West Sydney on King Georges Road.
            Join us for dine-in family feasts, pick up hot takeaways, or reserve a table for your special occasion.
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass p-6 rounded-2xl border border-gold/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Our Address
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                1/83 King Georges Rd<br />
                Wiley Park NSW 2195<br />
                Australia
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=1/83+King+Georges+Rd,+Wiley+Park+NSW+2195"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
            >
              Get Directions on Google Maps <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="glass p-6 rounded-2xl border border-gold/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Phone &amp; WhatsApp
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Call us directly for table reservations, catering inquiries, or takeaway orders:
              </p>
              <p className="text-lg font-bold text-foreground mt-2">
                +61 405 635 423
              </p>
            </div>
            <a
              href="tel:+61405635423"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
            >
              Call Restaurant Now <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="glass p-6 rounded-2xl border border-gold/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Operating Hours
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open 7 Days a Week, 365 Days a Year:
              </p>
              <p className="text-base font-bold text-foreground mt-2">
                3:00 PM – 3:00 AM Daily
              </p>
              <p className="text-xs text-[#0B5D3B] font-semibold mt-1">
                ✓ Late-night dining &amp; delivery every night
              </p>
            </div>
            <span className="mt-6 text-xs text-muted-foreground">
              Dine-in, Pickup &amp; Late-Night Takeaway
            </span>
          </div>
        </div>

        {/* Transit & Parking Details */}
        <section className="mb-16">
          <div className="glass p-8 rounded-2xl border border-gold/20">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground font-bold mb-6 text-center">
              Getting to Parivar Restaurant
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B5D3B]/10 text-[#0B5D3B] flex items-center justify-center shrink-0">
                  <Train className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    By Public Transit
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>Train:</strong> We are just a 4-minute walk (300 meters) from Wiley Park Railway Station on the T3 Bankstown line.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    <strong>Bus:</strong> Bus routes 450 (Hurstville to Strathfield) and 487 stop directly along King Georges Road nearby.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    By Car &amp; Parking
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Direct access via King Georges Road and Canterbury Road.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    Free street parking is available along King Georges Rd and adjoining side streets, plus dedicated municipal parking areas nearby.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Review Box CTA */}
        <section className="mb-16 text-center">
          <div className="glass p-8 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/5 via-background to-gold/10 max-w-2xl mx-auto shadow-md">
            <div className="flex justify-center gap-1 text-gold mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Share Your Parivar Dining Experience
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Your feedback helps our family kitchen continue serving authentic Hyderabadi flavors to Sydney.
            </p>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJk54W-yO7EmsR2MvH2e_q2B8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B5D3B] hover:bg-[#D4A017] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 text-sm shadow-md"
            >
              ★ Write a Review on Google
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display text-2xl sm:text-3xl text-foreground font-bold">
              Frequently Asked Questions: Visit &amp; Contact
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Helpful details for your visit to Parivar Restaurant.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {CONTACT_FAQS.map((faq, index) => (
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
