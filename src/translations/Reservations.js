const ReservationsTranslations = {
  hero: {
    eyebrow: "RESERVAS · ALTOS HOTEL & ESTANCIA",
    title: "Tu descanso empieza con una buena elección.",
    description:
      "Contanos cómo imaginás tu estadía. Estamos para ayudarte a encontrar la habitación ideal y preparar una experiencia a tu medida.",
    availabilityButton: "CONSULTAR DISPONIBILIDAD",
    roomsButton: "VER HABITACIONES",
    image: {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
      alt: "Habitación cálida y elegante de ALTOS Hotel",
      eyebrow: "UN LUGAR PARA DESACELERAR",
      caption: "Cada detalle, pensado para vos.",
    },
  },

  stay: {
    eyebrow: "TU ESTADÍA",
    title: "Planifiquemos juntos tu visita.",
    description:
      "Completá tus datos y las fechas que tenés en mente. Nuestro equipo podrá orientarte sobre las opciones disponibles.",
    question: "¿Tenés alguna duda?",
    questionDescription:
      "Si preferís conversar antes de reservar, podemos ayudarte con los detalles de tu estadía.",
    contactButton: "HACER UNA CONSULTA",
    highlights: [
      {
        icon: "✦",
        title: "Descanso",
        description: "Espacios para bajar el ritmo.",
      },
      {
        icon: "✧",
        title: "Bienestar",
        description: "Una experiencia a tu medida.",
      },
    ],
  },

  form: {
    eyebrow: "EMPECEMOS POR LO ESENCIAL",
    title: "Consulta de reserva",
    description: "Los datos nos ayudan a conocer mejor lo que necesitás.",

    fields: {
      name: {
        label: "Nombre y apellido",
        placeholder: "Tu nombre completo",
      },
      email: {
        label: "Correo electrónico",
        placeholder: "tu@email.com",
      },
      phone: {
        label: "Teléfono",
        placeholder: "+54 9 ...",
      },
      guests: {
        label: "Cantidad de huéspedes",
        options: [
          { value: "1", label: "1 huésped" },
          { value: "2", label: "2 huéspedes" },
          { value: "3", label: "3 huéspedes" },
          { value: "4", label: "4 huéspedes" },
          { value: "5+", label: "5 o más huéspedes" },
        ],
      },
      checkIn: {
        label: "Fecha de ingreso",
      },
      checkOut: {
        label: "Fecha de salida",
      },
      room: {
        label: "Habitación de preferencia",
        options: [
          {
            value: "",
            label: "Quiero recibir recomendaciones",
          },
          {
            value: "Habitación Clásica",
            label: "Habitación Clásica",
          },
          {
            value: "Habitación Superior",
            label: "Habitación Superior",
          },
          {
            value: "Suite Especial",
            label: "Suite Especial",
          },
        ],
      },
      message: {
        label: "Comentarios adicionales",
        placeholder: "Contanos si tenés algún pedido especial...",
      },
    },

    notice:
      "Esta solicitud es una consulta inicial y no confirma una reserva. Nos pondremos en contacto para conversar sobre disponibilidad y detalles.",
    submit: "ENVIAR CONSULTA",
  },
};

export default ReservationsTranslations;