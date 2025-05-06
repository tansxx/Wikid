import React, { useState } from "react";
import "@/styles/GlobalStyle.ts";
import { font, color } from "@/styles/theme";
import NotificationModal from "@/components/mywikipage/NotificationModal/NotificationModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true); // 최초에 열려 있음

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return <>{isModalOpen && <NotificationModal onClose={handleClose} />}</>;
}
