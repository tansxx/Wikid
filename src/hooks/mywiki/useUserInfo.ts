import { useEffect, useState } from "react";
import axiosInstance from "@/apis/axiosInstance";

interface UserInfo {
  id: number;
  name: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
  profile: {
    id: number;
    code: string;
  };
}

interface UseUserInfoResult {
  user: UserInfo | null;
  loading: boolean;
  error: string | null;
}

export function useUserInfo(): UseUserInfoResult {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get<UserInfo>(`users/me`);
        setUser(response.data);
      } catch (err: any) {
        setError(
          err?.response?.data?.message ||
            "사용자 정보를 불러오는 데 실패했습니다."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
}
