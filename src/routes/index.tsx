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
      { title: "Parivar Restaurant - Timeless Indian Flavours in Sydney" },
      {
        name: "description",
        content:
          "Parivar Restaurant brings authentic Hyderabadi fine dining to Sydney - biryani, kebabs, and royal Nizami heritage served as family.",
      },
      { property: "og:title", content: "Parivar Restaurant - Timeless Indian Flavours in Sydney" },
      {
        property: "og:description",
        content: "Authentic Hyderabadi luxury dining in Sydney. Dine in, take away, or book catering.",
      },
      { property: "og:url", content: "https://parivar-restaurant.com" },
      { property: "og:image", content: "https://parivar-restaurant.com/parivar-logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://parivar-restaurant.com",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Parivar Restaurant",
          "image": "https://parivar-restaurant.com/parivar-logo.png",
          "@id": "https://parivar-restaurant.com/#restaurant",
          "url": "https://parivar-restaurant.com",
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
              "closes": "03:00"
            }
          ],
          "servesCuisine": ["Indian", "Hyderabadi", "Halal"],
          "priceRange": "$$",
          "hasMenu": "https://parivar-restaurant.com/menu",
          "acceptsReservations": "True",
          "currenciesAccepted": "AUD",
          "paymentAccepted": "Cash, Credit Card, EFTPOS",
          "sameAs": [
            "https://www.instagram.com/parivar.restaurantnsw/",
            "https://www.facebook.com/people/Parivar-Restaurant/61565578144081/",
            "https://www.wikidata.org/wiki/Q1140924",
            "https://www.wikidata.org/wiki/Q2724036"
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
          "name": "Parivar Restaurant",
          "url": "https://parivar-restaurant.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://parivar-restaurant.com/menu?category={search_term_string}",
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
