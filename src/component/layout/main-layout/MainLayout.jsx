import React from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header goes here  */}
      <Header />

      <div className="main">{children}</div>

      {/* footer goes here  */}

      <Footer />
    </div>
  );
};
