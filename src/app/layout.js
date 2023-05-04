import MobileNav from "./Components/MobileNav/MobileNav";
import NavBar from "./Components/NavBar/NavBar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Showroe Roy",
  description:
    "Hello, I'm Showrove Roy and I am a MERN stack web developer. I am always looking for new challenges and opportunities to grow as a developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={montserrat.className}>
      <body>
        <NavBar />
        {children}
        <MobileNav />
       
      </body>
    </html>
  );
}
