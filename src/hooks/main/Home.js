"use client";

import HomeTranslation from "../../translations/Home";
import useRoutesHook from "../Routes";

export default function useHome() {
  const { menuPath, experiencesPath, roomsPath, aboutPath, restoMenuPath } =
    useRoutesHook();

  const highlightRoutes = [roomsPath, experiencesPath, restoMenuPath];

  const routes = {
    about: aboutPath,
    experiences: experiencesPath,
    menu: menuPath,
  };

  const highlights = HomeTranslation.highlights.map((item, index) => ({
    ...item,
    href: highlightRoutes[index],
  }));

  return {
    t: HomeTranslation,
    highlights,
    routes,
  };
}
