import Image from "next/image";

export const metadata = {
  title: "Συμβουλές για Συντήρηση Μεταλλικών Κατασκευών",
  description:
    "Μάθετε πώς να διατηρείτε τις μεταλλικές κατασκευές σας σε άριστη κατάσταση με απλές και πρακτικές συμβουλές.",
};

export default function BlogArticle2() {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold text-black dark:text-white">
          Συμβουλές για Συντήρηση Μεταλλικών Κατασκευών
        </h1>
        <Image
          src="/images/blog/blog-02.jpg"
          alt="Συντήρηση Μεταλλικών Κατασκευών"
          width={800}
          height={400}
          className="mb-8 rounded"
        />
        <p className="mb-4 text-lg">
          Η σωστή συντήρηση των μεταλλικών κατασκευών είναι απαραίτητη για τη
          διατήρηση της αντοχής και της αισθητικής τους. Ελέγχετε τακτικά για
          σημάδια φθοράς, σκουριάς ή αποχρωματισμού και εφαρμόζετε προστατευτικά
          χρώματα ή βερνίκια όπου χρειάζεται.
        </p>
        <p className="mb-4 text-lg">
          Αποφύγετε τη συσσώρευση υγρασίας και καθαρίζετε τις επιφάνειες με
          κατάλληλα προϊόντα. Η πρόληψη και η έγκαιρη αντιμετώπιση
          μικροπροβλημάτων εξασφαλίζει τη μακροζωία των μεταλλικών στοιχείων.
        </p>
        <p className="mt-8 text-base text-gray-500">
          Γράφει ο Ευθύμης Γιαπουτζής, Ιδιοκτήτης
        </p>
      </div>
    </section>
  );
}
