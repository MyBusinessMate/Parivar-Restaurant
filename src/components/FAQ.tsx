import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const faqData = [
  {
    question: "Is Parivar Restaurant 100% Halal certified?",
    answer:
      "Yes, Parivar Restaurant is strictly 100% Halal certified. All our meats (chicken, lamb, goat, and beef), ingredients, and traditional preparation methods comply fully with Islamic dietary laws.",
  },
  {
    question: "What time does Parivar close and are you open late at night in Wiley Park?",
    answer:
      "Parivar Restaurant is open 7 days a week, Monday through Sunday, from 3:00 PM in the afternoon until 3:00 AM late at night. We offer full late-night dine-in and takeaway in Wiley Park.",
  },
  {
    question: "Where is Parivar Restaurant located and what parking is available?",
    answer:
      "We are located at 1/83 King Georges Rd, Wiley Park NSW 2195, in South West Sydney. Street parking is available nearby on King Georges Road and adjacent side streets, and we are within easy walking distance from Wiley Park railway station.",
  },
  {
    question: "What are your signature Hyderabadi specialties?",
    answer:
      "Our most celebrated dishes include authentic slow-cooked Hyderabadi Dum Biryani, royal Hyderabadi Haleem, flame-charred Tandoori Chicken, Sheekh Kebabs, spicy Chicken 65, rich curries, and traditional desserts like Rasmalai and Shahi Tukda.",
  },
  {
    question: "Do you offer catering for weddings and corporate events across Sydney?",
    answer:
      "Yes, Parivar provides full-service Indian and Mughlai catering for weddings, receptions, corporate galas, and private celebrations across Greater Sydney. Packages include live tandoori grills, dum biryani handis, and dessert banquets.",
  },
  {
    question: "Can I order online for takeaway or dine-in table ordering?",
    answer:
      "Yes, our complete menu is available for online ordering directly on our website. You can select takeaway for quick pickup from Wiley Park or specify your table number for direct table service with live status tracking.",
  },
  {
    question: "Does Parivar offer vegetarian dishes?",
    answer:
      "Yes, Parivar offers a curated selection of vegetarian dishes including Daal Tadka, Mixed Vegetable Curry, Paneer Tikka Masala, vegetable samosas, and freshly baked tandoori naan breads.",
  },
  {
    question: "Can spice levels be adjusted for curries and biryanis?",
    answer:
      "Most curries can be adjusted for mild, medium, or spicy heat upon request. Please mention your spice preferences to our team or note them during online ordering.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="gold-divider justify-center mb-4">
            <span className="h-px w-10 bg-gold/40" />
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </span>
            <span className="h-px w-10 bg-gold/40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Everything You Need to <span className="text-gold-gradient italic">Know</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm md:text-base">
            Common questions about our authentic Halal dining, late-night hours, location, and catering services.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const faqSlug = item.question
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");
            return (
              <div
                key={index}
                id={`faq-${faqSlug}`}
                className="glass rounded-2xl border border-gold/15 overflow-hidden transition-all duration-300 hover:border-gold/30"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-display text-lg md:text-xl font-medium text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 text-muted-foreground text-sm md:text-base leading-relaxed border-t border-gold/10">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
