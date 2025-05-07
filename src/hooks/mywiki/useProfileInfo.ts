import { useCallback, useEffect, useState } from "react";
import axiosInstance from "@/apis/axiosInstance";

export interface ProfileInfo {
  id: number;
  code: string;
  name: string;
  nickname: string;
  city?: string;
  mbti?: string;
  job?: string;
  bloodType?: string;
  nationality?: string;
  family?: string;
  birthday?: string;
  sns?: string;
  image?: string;
  content?: string;
  securityQuestion?: string;
  updatedAt: string;
}

interface UseProfileInfoResult {
  profile: ProfileInfo | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useProfileInfo(code: string): UseProfileInfoResult {
  const [profile, setProfile] = useState<ProfileInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = useCallback(async () => {
    if (!code) return;

    setLoading(true);
    try {
      const res = await axiosInstance.get<ProfileInfo>(`/profiles/${code}`);
      setProfile(res.data);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "프로필 정보를 불러오는 데 실패했습니다."
      );
    } finally {
      setLoading(false);
    }
  }, [code]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return { profile, loading, error, refetch: fetchProfile };
}
