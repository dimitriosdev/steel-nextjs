import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Σχετικά | Steel Made Κατασκευές",
  description:
    "Μεταλλικές Κατασκευές / Συστήματα Κουφωμάτων Αλουμινίου. Παρέχουμε πρωτοποριακές λύσεις μεταλλικών κατασκευών και κουφωμάτων αλουμινίου, εξυπηρετώντας ένα διακεκριμένο πελατολόγιο.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Σχετικά"
        description="Μεταλλικές Κατασκευές / Συστήματα Κουφωμάτων Αλουμινίου"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
