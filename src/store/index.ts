import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface Props {
  userId: string | null;
  setUserId: (userId: string) => void;
  content: any;
  setContent: (content: any) => void;
  goBack: any;
}

const useStore = create<Props>()(
  devtools(
    persist(
      (set) => ({
        userId: null,
        setUserId: (userId: string) => set({ userId }),
        content: null,
        setContent: (content: any) => set({ content }),
        goBack: () => set({ content: null }),
      }),
      {
        name: "store",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useStore;
