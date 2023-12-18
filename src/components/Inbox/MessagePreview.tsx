import {
  ChannelPreviewUIComponentProps,
  ChatContextValue,
  useChatContext,
} from "stream-chat-react";
import type { MouseEventHandler } from "react";
import type { Channel } from "stream-chat";
import useStore from "../../store";
import { Avatar } from "flowbite-react";

export type MessagingChannelPreviewProps = ChannelPreviewUIComponentProps & {
  channel: Channel;
  onClick: MouseEventHandler;
  setActiveChannel?: ChatContextValue["setActiveChannel"];
};

const MessagingChannelPreview = (props: MessagingChannelPreviewProps) => {
  const { channel, setActiveChannel, latestMessage } = props;
  const { client } = useChatContext<any>();
  const { setContent } = useStore();

  const members = Object.values(channel.state.members).filter(
    ({ user }) => user?.id !== client.userID
  );

  return (
    <>
      <div
        onClick={() => {
          setActiveChannel?.(channel);
          setContent("chat-content");
        }}
        className="flex w-full border-b pb-5 pt-2 px-2 rounded-lg hover:bg-sticker-blue cursor-pointer"
      >
        <Avatar
          size="sm"
          className="me-2 w-12"
          rounded
          img={channel.data?.image || members[0]?.user?.image}
        />
        <div className="flex flex-col">
          <span className="font-bold text-primary-blue">
            {channel.data?.name}
          </span>
          <div className="flex flex-col mt-1">
            <span className="text-sm">{latestMessage}</span>
          </div>
        </div>
        <span className="self-baseline ml-auto text-sm">
          {new Date(channel.data?.last_message_at as Date).toLocaleString()}
        </span>
      </div>
    </>
  );
};

export default MessagingChannelPreview;
