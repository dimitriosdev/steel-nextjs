import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Επικοινωνία | Συστήματα Αλουμινίου - Σιδήρου",
  description:
    "Επικοινωνήστε μαζί μας για προσφορές, ερωτήσεις ή πληροφορίες σχετικά με τις υπηρεσίες μας στις μεταλλικές κατασκευές και συστήματα αλουμινίου.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Επικοινωνία" />
      <Contact />
    </>
  );
};

export default ContactPage;
