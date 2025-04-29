import Features from "@/components/Features";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function ServicesPage() {
  return (
    <main>
      <Breadcrumb pageName="Υπηρεσίες" />

      <Features />
      <AboutSectionOne />
      {/* Add more service-related content here if needed */}
    </main>
  );
}
