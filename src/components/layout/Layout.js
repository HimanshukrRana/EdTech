import * as React from "react";
import Header from "./Header";
import Seo from "./Seo";
import Footer from "./Footer";

export default function Layout({ children }) {
  // Put Header or Footer Here
  return (
    <div className="">
      <Header />
      <Seo />
      {children}

      <Footer />
    </div>
  );
}
