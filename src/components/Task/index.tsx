import Head from "./Head";
import ListItem from "./ListItem";

const Task = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      <Head />
      <ListItem />
    </div>
  );
};

export default Task;
