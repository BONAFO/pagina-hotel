import ContactData from "@/src/translations/ContactData";

const FooterTranslations = {
  navigation: [
    { label: "Inicio", route: "home" },
    { label: "Habitaciones", route: "rooms" },
    { label: "Experiencias", route: "experiences" },
    { label: "Conocenos", route: "about" },
    { label: "Contacto", route: "contact" },
  ],

  contact: ContactData,

  brand: {
    name: "ALTOS",
    subtitle: "HOTEL & ESTANCIA",
    description:
      "Un lugar para descansar, disfrutar de los pequeños momentos y vivir una estadía diferente.",
    tagline: "Tu descanso nos inspira",
  },

  explorationTitle: "Explorá",

  reservation: {
    title: "¿Planeamos tu estadía?",
    description:
      "Consultanos por disponibilidad, habitaciones o cualquier duda antes de tu llegada.",
    button: "RESERVAR ESTADÍA",
    contactButton: "Hacer una consulta",
  },

  copyright:
    "© 2026 ALTOS HOTEL & ESTANCIA. Todos los derechos reservados.",
};

export default FooterTranslations;