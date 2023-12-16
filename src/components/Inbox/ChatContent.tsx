import { getUser } from "../../utils/api/user";
import { useState, useEffect } from "react";
import useStore from "../../store";

const ChatContent = () => {
  const [data, setData] = useState<any>({});
  const { goBack } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUser(2);
      setData(result.data);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div id="chat-content">
      <button className="btn btn-square" onClick={() => goBack()}>
        Back
      </button>
      <h1>Chat Content</h1>
      {data ? (
        <div className="flex flex-col gap-4">
          <span>{data.first_name}</span>
          <span>{data.last_name}</span>
          <span>{data.email}</span>
        </div>
      ) : (
        <div className="animate-pulse">loading...</div>
      )}
    </div>
  );
};

export default ChatContent;
