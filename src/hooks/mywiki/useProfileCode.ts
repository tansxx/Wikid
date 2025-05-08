import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "@/stores/authStore";

export function useProfileCode() {
  const [code, setCode] = useState<string | null>(null);
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const res = await axios.get(
          "https://wikied-api.vercel.app/14-5/users/me",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const profileCode = res.data?.profile?.code;
        if (profileCode) setCode(profileCode);
      } catch (err) {
        console.error(err);
      }
    };

    if (accessToken) fetchCode();
  }, [accessToken]);

  return code;
}
