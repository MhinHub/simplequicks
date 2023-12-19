import Item from "./Item";
import { useTaskStore } from "../../store";
import { useEffect } from "react";
import { tasks } from "../../data/task";
import { AnimatePresence } from "framer-motion";

const ListItem = () => {
  const { taskData: data, setTaskData, selectedTask } = useTaskStore();

  useEffect(() => {
    setTaskData(tasks());
  }, [selectedTask, setTaskData]);

  return (
    <div className="flex flex-col gap-2 my-3 w-full">
      <AnimatePresence>
        {data?.map((item, idx) => (
          <Item key={item.userId} {...item} idx={idx} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ListItem;
