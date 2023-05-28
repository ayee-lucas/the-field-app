import {
  Montserrat,
  Inter,
  Poppins,
  Open_Sans,
  Roboto,
  Playfair_Display,
  Flow_Circular,
  Quicksand,
  Ubuntu,
} from "next/font/google";


const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500","600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const flowCircular = Flow_Circular({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-flow-circular",
})

const quicksand = Quicksand({
    weight: ["400", "500","600", "700"],
    subsets: ["latin"],
    variable: "--font-quicksand",
})

const ubuntu = Ubuntu({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-ubuntu",
})

export { montserrat, inter, poppins, openSans, roboto, playfair, flowCircular,  quicksand, ubuntu };
