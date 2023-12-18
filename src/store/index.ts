import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { StreamChat } from "stream-chat";
import { createTasks } from "./../data/task";

export type TaskProps = ReturnType<typeof createTasks>;

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

type TaskStoreProps = {
  taskData: TaskProps[] | null;
  setTaskData: (taskData: TaskProps[] | undefined) => void;
  selectedTask: string | null;
  setSelectedTask: (selectedTask: string) => void;
  addTask: (task: TaskProps) => void;
  deleteTask: (id: string) => void;
};

export const useTaskStore = create<TaskStoreProps>()(
  devtools(
    persist(
      (set) => ({
        taskData: null,
        setTaskData: (taskData: TaskProps[] | undefined) => set({ taskData }),
        selectedTask: null,
        setSelectedTask: (selectedTask: string) => set({ selectedTask }),
        addTask: (task: TaskProps) =>
          set((state) => ({
            taskData: [task, ...(state.taskData ?? [])],
          })),
        deleteTask: (id: string) =>
          set((state) => ({
            taskData: state.taskData?.filter((task) => task.userId !== id),
          })),
      }),
      {
        name: "task store",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

export default useStore;
