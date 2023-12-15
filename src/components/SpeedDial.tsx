import { Icon } from "@iconify/react";
import { Tooltip } from "flowbite-react";
import { useState, useEffect, useRef } from "react";
import cn from "../utils/cn";

type SpeedDialProps = {
  icons: {
    name: string;
    icon: string;
    bgColor?: string;
    content?: React.ReactNode;
    color: React.HTMLAttributes<HTMLDivElement>["className"] | string;
  }[];
};

const SpeedDial = ({ icons }: SpeedDialProps) => {
  const [visible, setVisible] = useState(false);
  const [isItemClicked, setIsItemClicked] = useState(false);

  const speedDialRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        speedDialRef.current &&
        !speedDialRef.current.contains(event.target)
      ) {
        setVisible(false);
        setIsItemClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative w-96 h-auto" ref={speedDialRef}>
      <div className="fixed flex end-6 bottom-6 group">
        <div
          className={cn(
            "invisible translate-x-10 flex items-center me-4 space-x-5 w-fit transition ease-out animate-in animate-out duration-300",
            visible && "translate-x-0 visible"
          )}
        >
          {icons.map((icon) => (
            <Tooltip
              className="bg-white"
              placement="top-start"
              content={
                <div className="w-[26rem] aspect-square">{icon.content}</div>
              }
              theme={{
                arrow: {
                  style: {
                    dark: "bg-white",
                  },
                },
              }}
              trigger="click"
            >
              <button
                type="button"
                onClick={() => setIsItemClicked(true)}
                className={cn(
                  `flex relative justify-center items-center w-[52px] h-[52px] rounded-full shadow-sm hover:text-white focus:ring-4 focus:ring-gray-300 focus:outline-none bg-white`,
                  "text-" + icon.color,
                  "hover:bg-" + icon.color
                )}
              >
                <Icon icon={icon.icon} width={25} />
                <span
                  className={cn(
                    "absolute -top-8 font-semibold text-white",
                    isItemClicked && "invisible"
                  )}
                >
                  {icon.name}
                </span>
              </button>
            </Tooltip>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className={
            "flex shadow items-center justify-center text-white bg-primary-blue rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          }
        >
          {visible ? (
            <Icon
              icon="maki:cross"
              className="w-6 h-6 group-hover:scale-110 transition"
            />
          ) : (
            <Icon
              icon="bi:lightning-charge-fill"
              className="w-6 h-6 group-hover:scale-110 transition"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default SpeedDial;
