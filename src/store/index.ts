import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { StreamChat } from "stream-chat";

interface Props {
  userId: string | null;
  setUserId: (userId: string) => void;
  content: any;
  setContent: (content: any) => void;
  chatClient: StreamChat | undefined;
  setChatClient: (chatClient: any) => void;
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
        chatClient: undefined,
        setChatClient: (chatClient: any) => set({ chatClient }),
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
