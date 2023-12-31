import Script from "next/script";
import { ThemeProvider } from "next-themes";

import { Navbar, Footer } from "../components";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

    <Script
      src="https://kit.fontawesome.com/32523335c6.js"
      crossorigin="anonymous"
    />
  </ThemeProvider>
);

export default App;
