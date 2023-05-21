import { Montserrat, Inter, Poppins, Open_Sans, Roboto } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const poppins = Poppins({
    weight: ["300", "400", "500", "700", "900"],
    subsets: ["latin"],
})

const roboto = Roboto({
    weight: ["300", "400", "500", "700", "900"],
    subsets: ["latin"],
})

const openSans = Open_Sans({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
})

export { montserrat, inter, poppins, openSans, roboto };
