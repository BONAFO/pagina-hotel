"use client";

import { createContext, useContext } from "react";

const NavigationContext = createContext();

const navigation = {
  pages: [
    { name: "home", path: "/" },
    { name: "about", path: "/about", slug: "", inFoot: true },
    { name: "contact", path: "/contact", slug: "", inFoot: true },
    {
      name: "menu",
      path: "https://pagina-resto-vhde-swart.vercel.app/",
      slug: "",
      inFoot: false,
    },
    { name: "experiences", path: "/experiences", slug: "", inFoot: true },

    { name: "rooms", path: "/rooms", slug: "", inFoot: true },
    { name: "reservations", path: "/reservations", slug: "", inFoot: true },
    { name: "services", path: "/services", slug: "", inFoot: true },
    { name: "resto-menu", path: "https://menu-resto-ten.vercel.app/", slug: "", inFoot: true },
  ],
};

export function NavigationProvider({ children }) {
  return (
    <NavigationContext.Provider value={navigation}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
