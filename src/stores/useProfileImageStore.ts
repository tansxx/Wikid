import { create } from "zustand";

interface ProfileImageState {
  imageUrl: string;
  setImageUrl: (url: string) => void;
}

export const useProfileImageStore = create<ProfileImageState>((set) => ({
  imageUrl: "",
  setImageUrl: (url) => set({ imageUrl: url }),
}));
