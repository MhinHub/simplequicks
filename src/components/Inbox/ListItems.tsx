import { Avatar } from "flowbite-react";
import useStore from "../../store";

const ListItems = ({ data }: { data: any }) => {
  const { setContent } = useStore();
  return (
    <div id="list-item">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full sticky top-0 z-50"
      />
      {data &&
        data.map((item: any) => (
          <div
            onClick={() => setContent("chat-content")}
            className="flex w-full border-b pb-5 pt-2 px-2 rounded-lg hover:bg-sticker-blue"
          >
            <Avatar size="sm" className="me-2 w-12" rounded img={item.avatar} />
            <div className="flex flex-col">
              <span className="font-bold text-primary-blue">
                {item.first_name + " " + item.last_name}
              </span>
              <div className="flex flex-col mt-1">
                <span className="font-semibold">{item.first_name}:</span>
                <span className="text-sm">{"Hello"}</span>
              </div>
            </div>
            <span className="self-baseline ml-auto text-sm">{"10:10 AM"}</span>
          </div>
        ))}
    </div>
  );
};

export default ListItems;
