import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77853L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Steel Made Κατασκευές"
                paragraph="Μεταλλικές Κατασκευές / Συστήματα Κουφωμάτων Αλουμινίου"
                mb="44px"
              />
              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Ποιοι είμαστε
                </h3>
                <p className="text-body-color mb-6 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Παρέχουμε πρωτοποριακές λύσεις μεταλλικών κατασκευών και
                  κουφωμάτων αλουμινίου, εξυπηρετώντας ένα διακεκριμένο
                  πελατολόγιο.
                  <br />Η εταιρία μας μελετά, κατασκευάζει και τοποθετεί
                  ολοκληρωμένα συστήματα αλουμινίου, μεταλλικές κατασκευές,
                  θωρακισμένες πόρτες, αίθρια.
                </p>
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Γιατί εμάς
                </h3>
                <ul className="text-body-color mb-6 list-disc pl-5 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  <li>Ο καλύτερος συνδυασμός ποιότητας και τιμής</li>
                  <li>Ταχύτητα</li>
                  <li>Συνέπεια και επαγγελματισμός</li>
                  <li>
                    Πιστοποιήσεις ISO σύμφωνα με τις πιο αυστηρές ευρωπαϊκές
                    οδηγίες
                  </li>
                  <li>
                    Οργανωμένο τμήμα service μετά το πέρας κάθε κατασκευής
                  </li>
                </ul>
                <div className="mt-8 flex flex-col gap-2">
                  <span className="text-primary font-semibold">
                    Ζητήστε μας προσφορά.
                  </span>
                  <span>ή επικοινωνήστε μαζί μας</span>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto max-w-full lg:mr-0 dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="drop-shadow-three mx-auto hidden max-w-full lg:mr-0 dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
