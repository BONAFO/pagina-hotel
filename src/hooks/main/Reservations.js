"use client";

import { useState } from "react";
import ReservationsTranslations from "@/src/translations/Reservations";
import useRoutesHook from "../Routes";

export default function useReservations() {
  const { roomsPath } = useRoutesHook();

  const routes = {
    rooms: roomsPath,
  };

  const initialForm = {
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    room: "",
    message: "",
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(initialForm);

  const inputClass =
    "mt-2 w-full border border-[#d8cbb8] bg-[#faf8f3] px-4 py-3.5 text-sm text-[#30271e] outline-none transition-colors placeholder:text-[#a39788] focus:border-[#a17d43]";

  const labelClass = "text-xs uppercase tracking-[0.12em] text-[#74695d]";

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setModalOpen(true);
  }

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return {
    content: ReservationsTranslations,
    routes,
    form,
    handleChange,
    handleSubmit,
    inputClass,
    labelClass,
    modalOpen,
    openModal,
    closeModal,
  };
}
