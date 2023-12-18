import { Icon } from "@iconify/react";
import { Tooltip } from "flowbite-react";
import { useState, useEffect, useRef } from "react";
import cn from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";

type SpeedDialProps = {
  icons: {
    name: string;
    icon: string;
    content?: React.ReactNode;
    className: React.HTMLAttributes<HTMLDivElement>["className"] | string;
  }[];
};

const SpeedDial = ({ icons }: SpeedDialProps) => {
  const [visible, setVisible] = useState(false);
  const [isItemClicked, setIsItemClicked] = useState(false);
  const [item, setItem] = useState<string | undefined>();

  const speedDialRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        speedDialRef.current &&
        !speedDialRef.current.contains(event.target)
      ) {
        setVisible(false);
        setIsItemClicked(false);
        setItem(undefined);
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
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0.8, x: 40 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{ opacity: 0, x: 40, transition: { duration: 0.2 } }}
              transition={{
                type: "spring",
              }}
              layout
              className={cn(
                "items-center flex me-4 gap-5 w-fit",
                item === "Task" && "flex-row-reverse"
              )}
            >
              {icons.map((icon, idx) => (
                <Tooltip
                  key={idx}
                  className="bg-white text-black"
                  placement="top-start"
                  content={
                    <div className="w-[28rem] aspect-square">
                      {icon.content}
                    </div>
                  }
                  theme={{
                    arrow: {
                      style: {
                        dark: "bg-white",
                      },
                    },
                  }}
                  trigger="click"
                  animation="duration-300"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setIsItemClicked(item === icon.name ? false : true);
                      setItem(icon.name);
                    }}
                    className={cn(
                      "flex relative transition duration-100 ease-in active:scale-125 justify-center items-center w-[52px] h-[52px] rounded-full shadow-sm focus:ring-4 focus:ring-gray-300 focus:outline-none bg-white",
                      `drop-shadow-md text-${icon.className}`,
                      isItemClicked &&
                        item === icon.name &&
                        `bg-${icon.className} text-white scale-110`
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
            </motion.div>
          )}
        </AnimatePresence>
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className={cn(
            "z-40 flex active:scale-110 transition shadow items-center justify-center text-white bg-primary-blue rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800",
            item && "hidden",
            "animate-in slide-in-from-right-12"
          )}
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
