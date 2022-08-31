import React from "react";
import { TextField } from "../components/Input/TextField";
import { NavBar } from "../components/Navbar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header.tsx/Header";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <TextField />
      <Footer />
    </div>
  );
};
