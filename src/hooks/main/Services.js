"use client";

import ServicesTranslations from "@/src/translations/Services";
import useRoutesHook from "../Routes";

export default function useServices() {
  const { menuPath, roomsPath, contactPath, restoMenuPath } = useRoutesHook();

  const routes = {
    rooms: roomsPath,
    menu: menuPath,
    contact: contactPath,
    restoMenu: restoMenuPath,
  };

  const serviceRoutes = {
    "01": routes.rooms,
    "02": routes.menu,
    "03": routes.contact,
  };

  const hotelServices = ServicesTranslations.hotelServices.map((service) => ({
    ...service,
    href: serviceRoutes[service.number],
  }));

  return {
    content: ServicesTranslations,
    hotelServices,
    restaurantHighlights: ServicesTranslations.restaurant.highlights,
    routes,
  };
}
