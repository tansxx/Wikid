import SignupForm from "@/components/AuthForm/SignupForm";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignupPage = () => {
  const { isLoggedIn, isInitialized } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (isInitialized && isLoggedIn) {
      router.replace("/");
    }
  }, [isInitialized, isLoggedIn, router]);

  return (
    <>
      <div className="flex justify-center items-center bg-background -mt-[80px] Mobile:px-5 min-h-screen px-4">
        <div className="w-full max-w-md">
          <h2 className="text-text2xlSemibold mb-[50px] text-center text-gray500">
            회원가입
          </h2>
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default SignupPage;
