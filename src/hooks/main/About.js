"use client";

import AboutTranslations from "@/src/translations/About";
import useRoutesHook from "../Routes";

export default function useAboutHook() {
  const content = AboutTranslations;

  const { essence, gastronomy, values } = content;
  const { menuPath } = useRoutesHook();
  const routes = {
    restaurant: menuPath,
  };

  return {
    content,
    essence,
    gastronomy,
    values,
    routes,
  };
}
