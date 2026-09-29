import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ParivarElements } from "@/components/parivar-elements/ParivarElements";
import { TodaysSpecials } from "@/components/TodaysSpecials";
import { Categories } from "@/components/Categories";
import { SignatureDishes } from "@/components/SignatureDishes";
import { About } from "@/components/About";
import { Catering } from "@/components/Catering";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

import { FAQ, faqData } from "@/components/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parivar Restaurant Wiley Park Sydney — Halal Hyderabadi & Indian Dining Open Until 3AM" },
      {
        name: "description",
        content:
          "Parivar Restaurant in Wiley Park, Sydney serves authentic Halal Hyderabadi biryani, Mughlai curries, and tandoori grills daily from 3:00 PM to 3:00 AM. Dine-in, takeaway, and Sydney-wide catering.",
      },
      { property: "og:title", content: "Parivar Restaurant Wiley Park Sydney — Halal Hyderabadi & Indian Dining Open Until 3AM" },
      {
        property: "og:description",
        content: "Authentic Halal Hyderabadi biryani, slow-cooked haleem, tandoori kebabs, and curries in Wiley Park, Sydney. Open daily 3:00 PM to 3:00 AM. Dine-in, takeaway, and catering.",
      },
      { property: "og:url", content: "https://parivar.restaurant" },
      { property: "og:image", content: "https://parivar.restaurant/parivar-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Parivar Restaurant Wiley Park Sydney — Halal Hyderabadi & Indian Dining Open Until 3AM" },
      {
        name: "twitter:description",
        content: "Authentic Halal Hyderabadi biryani, slow-cooked haleem, tandoori kebabs, and curries in Wiley Park, Sydney. Open daily 3:00 PM to 3:00 AM. Dine-in, takeaway, and catering.",
      },
      { name: "twitter:image", content: "https://parivar.restaurant/parivar-logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://parivar.restaurant",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Parivar Restaurant",
          "image": "https://parivar.restaurant/parivar-logo.png",
          "@id": "https://parivar.restaurant/#restaurant",
          "url": "https://parivar.restaurant",
          "telephone": "+61 405 635 423",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1/83 King Georges Rd",
            "addressLocality": "Wiley Park",
            "addressRegion": "NSW",
            "postalCode": "2195",
            "addressCountry": "AU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -33.9189,
            "longitude": 151.0667
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "15:00",
              "closes": "23:59"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "03:00"
            }
          ],
          "servesCuisine": ["Indian", "Hyderabadi", "Halal"],
          "priceRange": "$$",
          "hasMenu": "https://parivar.restaurant/menu",
          "acceptsReservations": true,
          "currenciesAccepted": "AUD",
          "paymentAccepted": "Cash, Credit Card, EFTPOS",
          "sameAs": [
            "https://www.instagram.com/parivar.restaurantnsw/",
            "https://www.facebook.com/people/Parivar-Restaurant/61565578144081/"
          ],
          "knowsAbout": [
            { "@type": "Thing", "name": "Hyderabadi Biryani", "sameAs": "https://www.wikidata.org/wiki/Q1140924" },
            { "@type": "Thing", "name": "Mughlai Cuisine", "sameAs": "https://www.wikidata.org/wiki/Q17489635" },
            { "@type": "Thing", "name": "Halal Food", "sameAs": "https://www.wikidata.org/wiki/Q184206" },
            { "@type": "Thing", "name": "Hyderabadi Haleem", "sameAs": "https://www.wikidata.org/wiki/Q1626148" }
          ],
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Halal Certified", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Late Night Dining", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Family Friendly", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Takeaway Available", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Catering Available", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Dine In Available", "value": true }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "3",
            "bestRating": "5"
          },
          "review": [
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Hera Hafeez" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5" },
              "reviewBody": "Mashallah Halal food!! Amazing food - fantastic!! We ordered chicken tandoori, biryani, seekh kebab and naan. The owner Saeed gave us free complimentary dessert!!"
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Ibrahim Charniya" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5" },
              "reviewBody": "Excellent Food & Good Service! Parivar is one of the best food places in the Wiley Park area. If you are looking for authenticity, rich flavours and high quality meals this is the place to go."
            },
            {
              "@type": "Review",
              "author": { "@type": "Person", "name": "Jameel Ahmed" },
              "reviewRating": { "@type": "Rating", "ratingValue": "5" },
              "reviewBody": "Had Hyderabadi Haleem, it was too delicious. Loved Mango Lassi. And the Rasmalai was just awesome, I highly recommend this restaurant. Most important thing it is HALAL, and it is opened till midnight. The BEST HYDERABADI FOOD I have ever had in Australia."
            }
          ]
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": "https://parivar.restaurant/#faq",
          "mainEntity": faqData.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://parivar.restaurant/#website",
          "name": "Parivar Restaurant",
          "url": "https://parivar.restaurant",
          "publisher": {
            "@id": "https://parivar.restaurant/#restaurant"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://parivar.restaurant/menu?category={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })
      }
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ParivarElements />
        <TodaysSpecials />
        <Categories />
        <SignatureDishes />
        <About />
        <Catering />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
