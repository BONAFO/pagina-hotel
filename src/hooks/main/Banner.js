"use client";

import { useEffect, useRef, useState } from "react";
import BannerTranslations from "@/src/translations/Banner";
import useRoutesHook from "../Routes";


export default function useBanner() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  
  const slides = BannerTranslations.slides;
  
  const { roomsPath, reservationsPath , experiencesPath, menuPath} = useRoutesHook();
  
  const routes = {
    rooms: roomsPath,
    reservations: reservationsPath,
    experiences : experiencesPath,
    menu : menuPath,
  };
  
  const slideRoutes = [routes.experiences, routes.rooms, routes.menu];

  const goTo = (index) => {
    setActive((index + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      goTo(active + (deltaX < 0 ? 1 : -1));
    }
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [paused]);

  return {
    active,
    paused,
    setPaused,
    slides,
    route: slideRoutes[active],
    goTo,
    handleTouchStart,
    handleTouchEnd,
    ariaLabel: BannerTranslations.ariaLabel,
    slideLabel: BannerTranslations.slideLabel,
  };
}
