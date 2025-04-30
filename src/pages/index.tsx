import React from "react";
import styled from "styled-components";
import "@/styles/GlobalStyle.ts";
import { font, color } from "@/styles/theme";
import { useState } from "react";
import NotificationModal from "@/components/mywikipage/NotificationModal/NotificationModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "내 위키가 수정되었습니다.",
      time: "1분 전",
      isNew: true,
    },
    {
      id: 2,
      message: "내 위키가 수정되었습니다.",
      time: "25분 전",
      isNew: false,
    },
  ]);

  const handleDelete = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div style={{ padding: "100px" }}>
      <button onClick={() => setIsOpen((prev) => !prev)}>
        알림 모달 열기/닫기
      </button>

      {isOpen && (
        <div style={{ position: "absolute", top: 120, right: 40, zIndex: 999 }}>
          <NotificationModal
            notifications={notifications}
            onClose={() => setIsOpen(false)}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
}
