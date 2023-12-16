import { Avatar } from "flowbite-react";

const Inbox = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full"
      />
      <div className="flex w-full border-b pb-5">
        <Avatar size="sm" className="me-2 w-12" rounded />
        <div className="flex flex-col">
          <span className="font-bold text-primary-blue">
            John Doe, Jane Doe
          </span>
          <div className="flex flex-col mt-1">
            <span className="font-semibold">John Doe:</span>
            <span className="text-sm">Hello, how are you?</span>
          </div>
        </div>
        <span className="self-baseline ml-auto text-sm">2:30 PM</span>
      </div>
    </div>
  );
};

export default Inbox;
