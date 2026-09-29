import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/biryani.mp4";
import heroPoster from "@/assets/hero-restaurant.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          src={heroBg}
          poster={heroPoster}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-[100vh] md:h-screen object-cover scale-[1.02]"
          width={1920}
          height={1080}
        />
        {/* Subtle dark overlay for text readability against the image */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              width: 2 + (i % 4),
              height: 2 + (i % 4),
              background: "var(--gold)",
              boxShadow: "0 0 12px var(--gold)",
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center relative z-10 text-center">
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="gold-divider justify-center mb-8"
          >
            <span className="h-px w-12 bg-gold/50" />
            Est. Sydney
            <span className="h-px w-12 bg-gold/50" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-display text-7xl sm:text-8xl md:text-[9rem] leading-[0.95] mb-4"
          >
            <span className="text-gold-gradient block">PARIVAR</span>
            <span className="block text-xl sm:text-2xl md:text-3xl font-normal tracking-wide text-cream/95 mt-2">
              Authentic Halal Hyderabadi &amp; Indian Dining in Wiley Park, Sydney
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Located at 1/83 King Georges Road in Wiley Park, Parivar Restaurant serves authentic slow-cooked dum biryani, royal haleem, clay-tandoor kebabs, and rich curries. Open daily from 3:00 PM to 3:00 AM for dine-in, takeaway, and Sydney-wide event catering.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#menu"
              className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-medium text-primary-foreground overflow-hidden shadow-gold-glow transition-transform hover:scale-105"
              style={{ background: "var(--gradient-gold)" }}
            >
              <span className="relative z-10">Dine In</span>
              <span className="absolute inset-0 bg-white/25 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a
              href="#menu"
              className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-medium text-gold border border-gold/60 hover:bg-gold hover:text-primary-foreground transition-all duration-500"
            >
              Take Away
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/70 text-xs tracking-[0.3em] uppercase"
      >
        <div className="flex flex-col items-center gap-3">
          Scroll
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
