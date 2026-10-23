"use client";

import { useState } from "react";
import NavbarTranslations from "@/src/translations/Navbar";
import useRoutesHook from "../Routes";




export default function useNavbar() {
 const {
    contactPath,
    homePath,
    reservationsPath,
    roomsPath,
    experiencesPath,
    servicesPath,
  } = useRoutesHook();

const routes = {
  Inicio: homePath,
  Habitaciones: roomsPath,
  Servicios: servicesPath,
  Experiencias: experiencesPath,
  Contacto: contactPath,
  Reservas: reservationsPath,
};

  const [isOpen, setIsOpen] = useState(false);

  const links = NavbarTranslations.links.map((label) => ({
    label,
    href: routes[label],
  }));

  const reservation = {
    label: NavbarTranslations.reservation,
    href: routes.Reservas,
  };

  function toggleMenu() {
    setIsOpen((previous) => !previous);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return {
    content: NavbarTranslations,
    links,
    reservation,
    isOpen,
    toggleMenu,
    closeMenu,
    menuLabel: isOpen
      ? NavbarTranslations.menu.close
      : NavbarTranslations.menu.open,
  };
}