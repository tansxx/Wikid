import React, { useState } from "react";
import "@/styles/GlobalStyle.ts";
import { font, color } from "@/styles/theme";
import InactivityModal from "@/components/mywikipage/InactivityModal/InactivityModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return <>{isModalOpen && <InactivityModal onClose={handleClose} />}</>;
}
