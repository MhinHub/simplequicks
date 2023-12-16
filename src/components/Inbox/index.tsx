import ListItems from "./ListItems";
import ChatContent from "./ChatContent";
import Error from "./Error";
import { getUsers } from "../../utils/api/user";
import { useState, useEffect } from "react";
import useStore from "../../store";

const Inbox = () => {
  const [data, setData] = useState<any[]>([]);
  const { content } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUsers({});
      setData(result.data);
    };
    fetchData();
  }, []);

  const Elemen: { [key: string]: React.ReactNode } = {
    "list-items": <ListItems key={0} data={data} />,
    "chat-content": <ChatContent key={1} />,
    error: <Error key={2} />,
  };

  return (
    <div className="w-full h-full flex flex-col gap-2 overflow-auto">
      {Elemen[content ? content : "list-items"]}
    </div>
  );
};

export default Inbox;
