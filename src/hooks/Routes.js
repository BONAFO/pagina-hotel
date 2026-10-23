import { useNavigationHook } from "./Navigation";

export default function useRoutesHook() {
  const contactPath = useNavigationHook("contact");
  const homePath = useNavigationHook("home");
  const aboutPath = useNavigationHook("about");
  const menuPath = useNavigationHook("menu");
  const roomsPath = useNavigationHook("rooms");
  const reservationsPath = useNavigationHook("reservations");
  const servicesPath = useNavigationHook("services");
  const experiencesPath = useNavigationHook("experiences");
  const restoMenuPath = useNavigationHook("resto-menu");

  return {
    contactPath,
    homePath,
    aboutPath,
    menuPath,
    roomsPath,
    reservationsPath,
    servicesPath,
    experiencesPath,
    restoMenuPath,
  };
}
