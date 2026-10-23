"use client";

import { useEffect, useState } from "react";
import ExperiencesTranslations from "@/src/translations/Experiences";
import useRoutesHook from "../Routes";

export function useExperiences() {
  const { menuPath, contactPath } = useRoutesHook();
  const routes = {
    contact: contactPath,
    menu: menuPath,
  };

  const categoryRoutes = {
    NATURALEZA: routes.contact,
    DESCANSO: routes.contact,
    GASTRONOMÍA: routes.menu,
    EXPLORACIÓN: routes.contact,
  };
  const experiences = ExperiencesTranslations.experiences.map((experience) => ({
    ...experience,
    href: categoryRoutes[experience.category],
  }));

  return {
    content: ExperiencesTranslations,
    experiences,
  };
}

export function useExperienceCard(imageCount) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % imageCount);
    }, 4500);

    return () => clearInterval(interval);
  }, [imageCount]);

  return { activeImage };
}
