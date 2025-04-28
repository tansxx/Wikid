import React from "react";
import "@/styles/GlobalStyle.ts";
import WikiAvatar from "@/components/mywikipage/WikiAvatar";

export default function Home() {
  return (
    <div>
      <WikiAvatar
        src="/assets/images/img_profile.png"
        isEditMode={false}
        alt="일반 프로필"
      />
      <WikiAvatar
        src="/assets/images/img_profile.png"
        isEditMode={true}
        alt="수정 프로필"
      />
    </div>
  );
}
