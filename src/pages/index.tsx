import React, { useEffect, useState } from "react";
import "@/styles/GlobalStyle.ts";
import Link from "next/link";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import Mainfooter from "@/components/Mainfooter";

export default function Home() {
  const { isLoggedIn, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // Zustand 상태 초기화
    router.push("/");
  };

  return (
    <div>
      <Link href="/mypage">
        <button className="bg-primaryGreen200 rounded-[10px]  px-[30px] py-[10px]">
          임시 계정 설정 버튼
        </button>
      </Link>
      <h2 className="text-3xl font-bold flex items-center gap-2">
        임시 로그인 상태표시 --
        {isLoggedIn ? (
          <>
            (로그인중!)
            <button
              onClick={handleLogout}
              className="ml-2 bg-primaryGreen200 rounded-[10px]  px-[30px] py-[10px]"
            >
              로그아웃 버튼
            </button>
          </>
        ) : (
          "(로그인중 아님!)"
        )}
      </h2>
      <Link href="/login">
        <button className="bg-primaryGreen200 rounded-[10px]  px-[30px] py-[10px]   ">
          임시 로그인페이지이동버튼
        </button>
      </Link>
      <Mainfooter />
    </div>
  );
}
