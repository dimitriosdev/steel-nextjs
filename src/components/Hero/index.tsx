import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight dark:text-white">
                  Steel Made Constructions
                </h1>
                <p className="text-body-color dark:text-body-color-dark mb-12 text-base leading-relaxed! sm:text-lg md:text-xl">
                  Παρέχουμε υπηρεσίες εγκατάστασης αλουμινίου και σιδήρου σχεδόν
                  δύο δεκαετίες. Η μακρά ιστορία μας είναι απόδειξη της
                  αφοσίωσης στους πελάτες μας. Εγκαταστάσεις αλουμινίου υψηλής
                  ποιότητας, μεταλλικές κατασκευές, θωρακισμένες πόρτες, αίθρια.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link
                    href="#contact"
                    className="bg-primary hover:bg-primary/80 rounded-xs px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out"
                  >
                    Ζητήστε Προσφορά
                  </Link>
                  <Link
                    href="#about"
                    className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Μάθετε περισσότερα
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Abstract, more complex metal construction: stylized facade */}
            <g opacity="0.7">
              {/* Main building block */}
              <rect
                x="120"
                y="220"
                width="210"
                height="160"
                rx="18"
                fill="url(#paint0_linear_25:217)"
              />
              {/* Left vertical panel */}
              <rect
                x="135"
                y="230"
                width="18"
                height="140"
                rx="4"
                fill="#b0b7c3"
                opacity="0.25"
              />
              {/* Right vertical panel */}
              <rect
                x="277"
                y="230"
                width="18"
                height="140"
                rx="4"
                fill="#b0b7c3"
                opacity="0.25"
              />
              {/* Horizontal beams */}
              <rect
                x="120"
                y="250"
                width="210"
                height="8"
                rx="2"
                fill="#b0b7c3"
                opacity="0.3"
              />
              <rect
                x="120"
                y="290"
                width="210"
                height="8"
                rx="2"
                fill="#b0b7c3"
                opacity="0.15"
              />
              <rect
                x="120"
                y="330"
                width="210"
                height="8"
                rx="2"
                fill="#b0b7c3"
                opacity="0.15"
              />
              {/* Door: stylized as a tall, thin rectangle with a metallic gradient and a handle */}
              <rect
                className="hero-door-anim"
                x="215"
                y="320"
                width="24"
                height="60"
                rx="3"
                fill="url(#paint5_linear_25:217)"
                opacity="0.85"
              />
              <rect
                x="234"
                y="350"
                width="3"
                height="12"
                rx="1.5"
                fill="#b0b7c3"
                opacity="0.7"
              />
              {/* Windows: vertical and horizontal for a modern grid look */}
              <rect
                className="hero-window-anim"
                x="155"
                y="250"
                width="32"
                height="32"
                rx="3"
                fill="#e0e6ed"
                opacity="0.8"
              />
              <rect
                className="hero-window-anim"
                x="263"
                y="250"
                width="32"
                height="32"
                rx="3"
                fill="#e0e6ed"
                opacity="0.8"
              />
              <rect
                className="hero-window-anim"
                x="155"
                y="300"
                width="32"
                height="32"
                rx="3"
                fill="#e0e6ed"
                opacity="0.8"
              />
              <rect
                className="hero-window-anim"
                x="263"
                y="300"
                width="32"
                height="32"
                rx="3"
                fill="#e0e6ed"
                opacity="0.8"
              />
              {/* Window mullions */}
              <rect
                x="171"
                y="250"
                width="2"
                height="32"
                fill="#b0b7c3"
                opacity="0.3"
              />
              <rect
                x="279"
                y="250"
                width="2"
                height="32"
                fill="#b0b7c3"
                opacity="0.3"
              />
              <rect
                x="171"
                y="300"
                width="2"
                height="32"
                fill="#b0b7c3"
                opacity="0.3"
              />
              <rect
                x="279"
                y="300"
                width="2"
                height="32"
                fill="#b0b7c3"
                opacity="0.3"
              />
              {/* Decorative bolts */}
              <circle cx="130" cy="230" r="2" fill="#b0b7c3" />
              <circle cx="320" cy="230" r="2" fill="#b0b7c3" />
              <circle cx="130" cy="370" r="2" fill="#b0b7c3" />
              <circle cx="320" cy="370" r="2" fill="#b0b7c3" />
            </g>

            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
