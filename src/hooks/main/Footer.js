"use client";

import { useState } from "react";
import FooterTranslations from "@/src/translations/Footer";
import useRoutesHook from "../Routes";

export default function useFooter() {
  const {
    aboutPath,
    contactPath,
    homePath,
    reservationsPath,
    roomsPath,
    experiencesPath,
    servicesPath,
  } = useRoutesHook();

  const routes = {
    home: homePath,
    rooms: roomsPath,
    services: servicesPath,
    experiences: experiencesPath,
    contact: contactPath,
    reservations: reservationsPath,
    about: aboutPath,
  };
  const [modalOpen, setModalOpen] = useState(false);

  const navigation = FooterTranslations.navigation.map((item) => ({
    label: item.label,
    href: routes[item.route],
  }));

  return {
    content: FooterTranslations,
    navigation,
    contact: FooterTranslations.contact,
    routes,
    modalOpen,
    openModal: () => setModalOpen(true),
    closeModal: () => setModalOpen(false),
  };
}
