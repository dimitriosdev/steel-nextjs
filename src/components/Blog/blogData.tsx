import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Πλεονεκτήματα Συστημάτων Αλουμινίου στα Κτίρια",
    paragraph:
      "Ανακαλύψτε γιατί τα συστήματα αλουμινίου αποτελούν την ιδανική επιλογή για σύγχρονες κατασκευές: αντοχή, αισθητική και ενεργειακή απόδοση.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Ευθύμης Γιαπουτζής",
      image: "/images/blog/author-02.png",
      designation: "Ιδιοκτήτης",
    },
    tags: ["αλουμίνιο"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Συμβουλές για Συντήρηση Μεταλλικών Κατασκευών",
    paragraph:
      "Μάθετε πώς να διατηρείτε τις μεταλλικές κατασκευές σας σε άριστη κατάσταση με απλές και πρακτικές συμβουλές.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Ευθύμης Γιαπουτζής",
      image: "/images/blog/author-02.png",
      designation: "Ιδιοκτήτης",
    },
    tags: ["συντήρηση"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Επιλογή Θωρακισμένης Πόρτας: Τι να Προσέξετε",
    paragraph:
      "Οδηγός για την επιλογή της κατάλληλης θωρακισμένης πόρτας για το σπίτι ή την επιχείρησή σας, με έμφαση στην ασφάλεια και την ποιότητα.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Ευθύμης Γιαπουτζής",
      image: "/images/blog/author-02.png",
      designation: "Ιδιοκτήτης",
    },
    tags: ["πόρτες"],
    publishDate: "2025",
  },
];
export default blogData;
