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

      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />

      <Blog />
      <Contact />
    </>
  );
}
