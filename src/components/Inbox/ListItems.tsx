import { ChannelFilters, ChannelOptions, ChannelSort } from "stream-chat";
import { ChannelList } from "stream-chat-react";

import MessagingChannelPreview from "./MessagePreview";

const sort: ChannelSort = { last_message_at: -1 };
const filters: ChannelFilters = {
  type: "messaging",
};
const options: ChannelOptions = {
  limit: 8,
};

const ListItems = () => {
  return (
    <div id="list-item">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full sticky top-0 z-50"
      />
      <ChannelList
        filters={filters}
        sort={sort}
        options={options}
        Preview={(props: any) => <MessagingChannelPreview {...props} />}
      />
    </div>
  );
};

export default ListItems;
