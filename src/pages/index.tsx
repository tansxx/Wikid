import React from "react";
import "@/styles/GlobalStyle.ts";
import ProfileBar from "@/components/mywikipage/ProfileBar/ProfileBar";

export default function Home() {
  return (
    <div>
      <ProfileBar isEditMode={true} />
      <ProfileBar isEditMode={false} />
    </div>
  );
}
