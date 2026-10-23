"use client"
import RoomsTranslations from "@/src/translations/Rooms";
import useRoutesHook from "../Routes";

export default function useRooms() {
    const { reservationsPath } = useRoutesHook();
  
  const routes = {
    reservations: reservationsPath,
  };
  
  function getReservationRoute(roomId) {
    return `${routes.reservations}`;
  }

  return {
    content: RoomsTranslations,
    rooms: RoomsTranslations.rooms,
    getReservationRoute,
  };
}
