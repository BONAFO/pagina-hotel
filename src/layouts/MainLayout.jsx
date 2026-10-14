"use client";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import { NavigationProvider } from "../context/NavigationContext";

export default function MainLayout({ children }) {
  return (
    <>
      <NavigationProvider>
        <Navbar/>
        <Banner/>
        {children}
        <Footer />
      </NavigationProvider>
    </>
  );
}
