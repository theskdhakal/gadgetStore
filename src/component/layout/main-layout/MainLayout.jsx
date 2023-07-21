import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

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
