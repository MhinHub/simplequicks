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
        className="flex justify-between w-full border-b pb-5 pt-2 px-2 rounded-lg hover:bg-sticker-blue cursor-pointer"
      >
        <Avatar.Group className="mr-2 items-center justify-center">
          <Avatar
            size="sm"
            className="w-8"
            rounded
            stacked
            img={members && members[0]?.user?.image}
          />
          {members.length > 1 && (
            <Avatar.Counter
              total={members.length - 1}
              className="bg-primary-blue w-8 h-8"
            />
          )}
        </Avatar.Group>
        <div className="flex flex-col">
          <span className="font-bold text-primary-blue">
            {channel.data?.name}
          </span>
          <div className="flex flex-col mt-1">
            <span className="text-sm">{latestMessage}</span>
          </div>
        </div>
        <span className="self-baseline ml-auto text-sm">
          {new Date(channel.data?.last_message_at as Date).toLocaleString(
            "id-ID",
            {
              dateStyle: "short",
              hour12: true,
              timeStyle: "short",
            }
          )}
        </span>
      </div>
    </>
  );
};

export default MessagingChannelPreview;
