import PasswordChangeForm from "@/components/mypage/PasswordChangeForm";
import QuestionCreateForm from "@/components/mypage/QuestionCreateForm";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MyPage() {
  const { isLoggedIn, isInitialized } = useAuthStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isInitialized) return;

    if (!isLoggedIn) {
      router.replace("/login"); // 로그인 안 했으면 로그인 페이지로 보냄
    }
  }, [mounted, isInitialized, isLoggedIn, router]);

  if (!mounted || !isInitialized) {
    return null; // 렌더링 막기
  }

  if (!isLoggedIn) {
    return null; // 비로그인 상태면 렌더 막기
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h2 className="text-text2xlSemibold mb-[50px] text-center text-gray500">
        계정설정
      </h2>
      <PasswordChangeForm />
      <hr className="w-full max-w-md my-10 border-gray-300" />
      <QuestionCreateForm />
    </div>
  );
}
