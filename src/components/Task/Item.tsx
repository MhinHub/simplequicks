import { useState, useEffect } from "react";
import cn from "../../utils/cn";
import { Icon } from "@iconify/react";
import { Datepicker } from "flowbite-react";
import { createTasks } from "../../data/task";

type ItemProps = Omit<ReturnType<typeof createTasks>, "userId">;

const Item = ({ title, date, description, status }: ItemProps) => {
  const [checked, setChecked] = useState(status);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="collapse hover:bg-sticker-waterwing overflow-visible rounded-lg">
        <input
          type="radio"
          name="task-accordion"
          checked={collapsed}
          onChange={() => setCollapsed(!collapsed)}
          className="hidden"
        />
        <div className="flex justify-between items-center px-2 py-4 collapse-title">
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="checkbox text-4xl  [--chkbg:theme(colors.blue.500)]"
            />
            <p
              className={cn(
                "text-base font-medium transition",
                checked && "line-through decoration-primary-dark"
              )}
            >
              {title}
            </p>
          </div>
          <div className="flex gap-3 text-xs items-center">
            <span className={cn("text-indicator-red", checked && "hidden")}>
              {`${Math.floor(
                (new Date(date).getTime() - new Date().getTime()) /
                  (1000 * 3600 * 24)
              )} Days Left`}
            </span>
            <span>{new Date().toLocaleDateString()}</span>
            <Icon
              icon="mdi:chevron-down"
              className={cn(
                "btn btn-ghost text-primary-dark text-2xl p-0 h-fit min-h-0 transition",
                collapsed && "transform rotate-180"
              )}
              onClick={() => setCollapsed(!collapsed)}
            />
            <Icon
              icon="tabler:dots"
              className="btn btn-ghost text-primary-dark text-2xl p-0 h-fit min-h-0"
            />
          </div>
        </div>
        <div className="collapse-content mx-2">
          <div className="grid flex-col gap-2 grid-cols-[10%_90%]">
            <Icon
              icon="mdi:clock-outline"
              className="text-primary-blue text-xl w-11 place-self-center"
            />
            <Datepicker
              className="w-36 z-50"
              minDate={new Date()}
              icon={undefined}
              defaultDate={new Date(date)}
            />
            <Icon
              icon="mdi:pencil-outline"
              className="text-primary-blue text-xl w-11 place-self-center"
            />
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
