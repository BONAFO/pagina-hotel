import ContactData from "@/src/translations/ContactData";

const ContactTranslations = {
  hero: {
    eyebrow: "PONETE EN CONTACTO",
    title: "Nos encantará saber de vos.",
    description:
      "Elegí el medio que te resulte más cómodo. Estamos para ayudarte a organizar tu visita y responder tus preguntas.",
  },

  contactInfo: ContactData.map((contact, index) => ({
    number: String(index + 1).padStart(2, "0"),
    label: contact.label,
    value: contact.value,
    description: [
      "Encontranos en el corazón de la ciudad.",
      "Consultas sobre habitaciones y estadías.",
      "Dejanos tu consulta y te ayudaremos.",
    ][index],
    action: "REALIZAR CONSULTA",
  })),

  restaurant: {
    eyebrow: "HOTEL & GASTRONOMÍA",
    title: "¿Tu consulta es por el restaurante?",
    description:
      "ALTOS también cuenta con su propio restaurante. Si querés conocer nuestra propuesta gastronómica, consultar sobre la carta o planificar una visita, estamos para ayudarte.",
    action: "CONSULTAR POR EL RESTAURANTE",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=90",
    imageAlt: "Ambiente del restaurante de ALTOS",
  },
};

export default ContactTranslations;