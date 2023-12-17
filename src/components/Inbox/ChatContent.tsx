import { useState, useEffect } from "react";
import useStore from "../../store";
import {
  Channel,
  ChannelHeader,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useChatContext,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";

const ChatContent = () => {
  const [channel, setChannel] = useState<any>();

  const { channel: activeChannel, client } = useChatContext();

  const { chatClient } = useStore();

  const { goBack } = useStore();

  const members = Object.values(activeChannel?.state.members || {}).filter(
    (member) => member.user?.id !== client?.user?.id
  );

  console.log("members", members);

  const updateChannel = async () => {
    const name = members
      .map((member) => member && member.user?.name)
      .join(", ");
    console.log("name", name);

    if (activeChannel && name && activeChannel?.data?.name !== name) {
      await activeChannel?.update(
        { name },
        { text: `Channel name changed to ${name}` }
      );
    }
  };

  useEffect(() => {
    if (chatClient) {
      const channel = chatClient.channel("messaging", activeChannel?.id);
      setChannel(channel);
      channel.watch();
    }

    updateChannel();
  }, []);

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <div
      id="chat-content"
      className="flex flex-col gap-2 w-full h-full overflow-auto"
    >
      <Channel channel={channel}>
        <Window>
          <div className="flex shadow-lg shadow-slate-900 justify-between">
            <ChannelHeader Avatar={undefined} image={undefined} />
            <button className="btn btn-circle p-1" onClick={() => goBack()}>
              x
            </button>
          </div>
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </div>
  );
};

export default ChatContent;
