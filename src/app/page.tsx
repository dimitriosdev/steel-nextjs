import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Συστήματα Αλουμινίου - Σιδήρου | Γιαπουτζής Ευθύμης Steel Made Constructions",
  description:
    "Εγκαταστάσεις αλουμινίου υψηλής ποιότητας. Μεταλλικές Κατασκευές, Συστήματα Κουφωμάτων Αλουμινίου, θωρακισμένες πόρτες, αίθρια. Σχεδόν δύο δεκαετίες εμπειρίας και αφοσίωσης στους πελάτες μας.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />

      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* Highlight case studies or client stories here for trust */}
      <section className="bg-primary/5 py-12 text-center">
        <h2 className="text-primary mb-4 text-2xl font-bold">
          Εμπιστεύτηκαν τη δουλειά μας
        </h2>
        <p className="mb-6 text-lg">
          Δείτε μερικά από τα έργα και τους πελάτες που μας εμπιστεύτηκαν για
          τις μεταλλικές και αλουμινένιες κατασκευές τους.
        </p>
        <a
          href="/projects"
          className="bg-primary hover:bg-primary/90 inline-block rounded-md px-6 py-3 font-semibold text-white transition"
        >
          Δείτε τα έργα μας
        </a>
      </section>
      <Blog />
      <Contact />
      {/* Add a clear call-to-action at the bottom */}
      <section className="bg-primary mt-10 py-10 text-center">
        <h2 className="mb-2 text-2xl font-bold text-white">
          Επικοινωνήστε μαζί μας για προσφορά
        </h2>
        <a
          href="/contact"
          className="text-primary inline-block rounded-md bg-white px-8 py-3 font-semibold transition hover:bg-gray-100"
        >
          Ζητήστε Προσφορά
        </a>
      </section>
    </>
  );
}
