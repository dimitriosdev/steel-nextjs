import Image from "next/image";

export const metadata = {
  title: "Επιλογή Θωρακισμένης Πόρτας: Τι να Προσέξετε",
  description:
    "Οδηγός για την επιλογή της κατάλληλης θωρακισμένης πόρτας για το σπίτι ή την επιχείρησή σας, με έμφαση στην ασφάλεια και την ποιότητα.",
};

export default function BlogArticle3() {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-black dark:text-white">
          Επιλογή Θωρακισμένης Πόρτας: Τι να Προσέξετε
        </h1>
        <Image
          src="/images/blog/blog-03.jpg"
          alt="Επιλογή Θωρακισμένης Πόρτας"
          width={800}
          height={400}
          className="mb-8 rounded"
        />
        <p className="mb-4 text-lg">
          Η επιλογή θωρακισμένης πόρτας είναι μια σημαντική απόφαση για την
          ασφάλεια του σπιτιού ή της επιχείρησής σας. Δώστε προσοχή στην
          ποιότητα των υλικών, την πιστοποίηση ασφαλείας και το σύστημα
          κλειδώματος.
        </p>
        <p className="mb-4 text-lg">
          Επιλέξτε πόρτα που προσφέρει θερμομόνωση, ηχομόνωση και αντοχή σε
          παραβιάσεις. Συμβουλευτείτε ειδικούς για να διασφαλίσετε ότι η πόρτα
          καλύπτει όλες τις ανάγκες σας και πληροί τα απαραίτητα πρότυπα.
        </p>
        <p className="mt-8 text-base text-gray-500">
          Γράφει ο Ευθύμης Γιαπουτζής, Ιδιοκτήτης
        </p>
      </div>
    </section>
  );
}
