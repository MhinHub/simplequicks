import Item from "./Item";
import { useTaskStore } from "../../store";
import { useEffect } from "react";
import { tasks } from "../../data/task";

const ListItem = () => {
  const { taskData: data, setTaskData, selectedTask } = useTaskStore();

  useEffect(() => {
    setTaskData(tasks());
  }, [selectedTask]);

  return (
    <div className="flex flex-col gap-2 my-3">
      {data?.map((item, idx) => (
        <Item key={idx} {...item} />
      ))}
    </div>
  );
};

export default ListItem;
