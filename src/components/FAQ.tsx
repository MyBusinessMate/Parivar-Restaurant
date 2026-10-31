import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const faqData = [
  {
    question: "Is Parivar Restaurant 100% Halal certified and alcohol-free?",
    answer:
      "Yes, Parivar Restaurant is strictly 100% Halal certified. All our meats (chicken, lamb, goat, and beef), ingredients, and traditional preparation methods comply fully with Islamic dietary laws. Our premises are completely alcohol-free and family-friendly.",
  },
  {
    question: "What time does Parivar Restaurant close and are you open late at night in Wiley Park?",
    answer:
      "Parivar Restaurant is open 7 days a week from 3:00 PM until 3:00 AM daily, including weekends and public holidays. We provide late-night dine-in, takeaway, and pickup for dinner and supper across South West Sydney.",
  },
  {
    question: "Where is Parivar Restaurant located and what parking or transit is available?",
    answer:
      "We are located at 1/83 King Georges Rd, Wiley Park NSW 2195. Free street parking is available along King Georges Road and adjacent residential streets. We are just 300 metres (a 4-minute walk) from Wiley Park railway station.",
  },
  {
    question: "What are Parivar's signature Hyderabadi specialties?",
    answer:
      "Our signature dishes include authentic slow-cooked Hyderabadi Dum Biryani sealed with dough, royal Hyderabadi Haleem, flame-charred Tandoori Chicken, juicy Seekh Kebabs, spicy Chicken 65, rich Mughlai curries, and traditional desserts like Rasmalai and Shahi Tukda.",
  },
  {
    question: "Does Parivar Restaurant offer takeaway to Lakemba, Bankstown, Punchbowl, and Greenacre?",
    answer:
      "Yes. Parivar Restaurant offers convenient online takeaway ordering directly through our website with pickup from our Wiley Park location. We proudly serve patrons across Canterbury-Bankstown, Lakemba, Punchbowl, Greenacre, Roselands, and Campsie.",
  },
  {
    question: "Does Parivar offer vegetarian, nut-free, or gluten-free Indian dishes?",
    answer:
      "Yes, we offer delicious vegetarian dishes including Daal Tadka, Paneer Tikka Masala, and Mixed Vegetable Curry. Guests with severe nut or gluten allergies should inform our team when ordering, as our kitchen prepares traditional Mughlai recipes containing dairy, wheat, and nuts.",
  },
  {
    question: "What Indian wedding and event catering packages does Parivar offer across Sydney?",
    answer:
      "Parivar provides full-service Halal Indian catering for weddings, receptions, corporate galas, and celebrations across Greater Sydney. Packages feature live tandoori grills, dum biryani handis, chaat stations, and royal Mughlai dessert banquets tailored to your guest count.",
  },
  {
    question: "Does Parivar serve Sehri and Iftar meals during Ramadan?",
    answer:
      "Yes. Parivar Restaurant is open daily from 3:00 PM until 3:00 AM, making it the premier late-night destination for Iftar dinners and late-night Sehri meals during Ramadan in Wiley Park, Lakemba, and the wider Canterbury-Bankstown region.",
  },
  {
    question: "Is Parivar Restaurant alcohol-free and suitable for families?",
    answer:
      "Yes. Parivar Restaurant is 100% alcohol-free and dedicated to providing a warm, family-friendly atmosphere. We welcome families, children, and large community gatherings seeking genuine royal Indian hospitality in a relaxed, culturally respectful setting.",
  },
  {
    question: "Can curry and biryani heat levels be customised at Parivar Restaurant?",
    answer:
      "Yes. Most of our curries and dishes can be customized for mild, medium, or spicy heat levels. Please notify our staff or specify your spice preference in your online order notes, and our chefs will accommodate your taste.",
  },
  {
    question: "Can I order online for takeaway or dine-in table ordering?",
    answer:
      "Yes. Our complete menu is available for online ordering on our website. You can place takeaway orders for quick collection or scan and order directly to your dine-in table with real-time digital status tracking.",
  },
  {
    question: "Do you accept advance table reservations and private function bookings?",
    answer:
      "Yes. We welcome advance table reservations for family dinners, birthdays, and group celebrations. To reserve your table or discuss private dining arrangements in Wiley Park, contact our team directly via phone or WhatsApp at +61 405 635 423.",
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
