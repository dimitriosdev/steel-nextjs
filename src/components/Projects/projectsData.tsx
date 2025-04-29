import { Project } from "@/types/project";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Επέκταση Εργοστασίου Χάλυβα",
    description:
      "Επέκταση του κύριου εργοστασίου χάλυβα με νέες γραμμές παραγωγής και σύγχρονες εγκαταστάσεις.",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // steel factory interior
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80", // steel production
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80", // modern facilities
    ],
  },
  {
    id: 2,
    title: "Κατασκευή Αποθήκης",
    description: "Κατασκευή μεγάλης αποθήκης για logistics και αποθήκευση.",
    images: [
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=800&q=80", // warehouse exterior
    ],
  },
  {
    id: 3,
    title: "Ανακαίνιση Κτιρίου Γραφείων",
    description:
      "Πλήρης ανακαίνιση πολυώροφου κτιρίου γραφείων στο κέντρο της πόλης.",
    images: [
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80", // office renovation
    ],
  },
  {
    id: 4,
    title: "Εγκατάσταση Ηλιακών Πάνελ",
    description:
      "Τοποθέτηση ηλιακών πάνελ σε βιομηχανικό χώρο για ενεργειακή αυτονομία.",
    images: [
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80", // solar panels
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80", // solar installation
    ],
  },
  {
    id: 5,
    title: "Ανάπλαση Πλατείας",
    description:
      "Ανάπλαση κεντρικής πλατείας με νέους χώρους πρασίνου και παιδική χαρά.",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // park area
    ],
  },
  {
    id: 6,
    title: "Κατασκευή Γέφυρας",
    description: "Κατασκευή σύγχρονης γέφυρας για τη βελτίωση της κυκλοφορίας.",
    images: [
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80", // bridge
      "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=800&q=80", // bridge construction (replaced broken/duplicate)
    ],
  },
];

export default projectsData;
