import LoginForm from "@/components/AuthForm/LoginForm";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage = () => {
  const { isLoggedIn, isInitialized } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && isLoggedIn) {
      router.replace("/");
    }
  }, [isInitialized, isLoggedIn, router]);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen -mt-[100px] Mobile:px-5 bg-background px-4">
        <div className="w-full max-w-md">
          <h2 className="text-text2xlSemibold mb-[50px] text-center text-gray500">
            로그인
          </h2>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
