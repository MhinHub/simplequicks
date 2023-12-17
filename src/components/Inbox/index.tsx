import ListItems from "./ListItems";
import ChatContent from "./ChatContent";
import Error from "./Error";
import { getUsers } from "../../utils/api/user";
import { useState, useEffect } from "react";
import useStore from "../../store";
import { useClient } from "../../hooks/useClient";
import { Chat, LoadingIndicator } from "stream-chat-react";
import { json } from "../../data/myData";

import "stream-chat-react/dist/css/v2/index.css";

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

  const chatClient = useClient({
    id: json.userId,
    name: json.userName,
    image: json.image,
  });

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <div className="w-full h-full flex flex-col gap-2 overflow-auto">
      <Chat client={chatClient} theme="str-chat__theme-light">
        {Elemen[content ? content : "list-items"]}
      </Chat>
    </div>
  );
};

export default Inbox;
