import { useState } from "react";
import cn from "../../utils/cn";
import { Icon } from "@iconify/react";
import { Datepicker } from "flowbite-react";
import { createTasks } from "../../data/task";

type ItemProps = Omit<ReturnType<typeof createTasks>, "userId">;

const Item = ({ title, date, description, status }: ItemProps) => {
  const [checked, setChecked] = useState(status);
  const [collapsed, setCollapsed] = useState(false);

  const [dueDate, setDueDate] = useState<Date>(date);

  return (
    <>
      <div className="collapse border-b-2 overflow-visible rounded-lg">
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
            <textarea
              disabled={checked}
              wrap="soft"
              className={cn(
                "text-sm font-medium transition border-0 p-2 rounded-lg overflow-hidden [resize:none] [inline-size:min-content]  [line-height:min-content]",
                checked && "line-through decoration-primary-dark"
              )}
              defaultValue={title}
            />
          </div>
          <div className="flex gap-3 text-xs items-center">
            <span className={cn("text-indicator-red", checked && "hidden")}>
              {`${Math.floor(
                (new Date(dueDate).getTime() - new Date().getTime()) /
                  (1000 * 3600 * 24)
              )} Days Left`}
            </span>
            <span>{new Date(dueDate).toLocaleDateString("id-ID")}</span>
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
              className="w-48 z-50"
              minDate={new Date()}
              defaultDate={new Date(date)}
              pattern="dd/MM/yyyy"
              onSelectedDateChanged={(e) => setDueDate(e)}
            />
            <Icon
              icon="mdi:pencil-outline"
              className="text-primary-blue text-xl w-11 place-self-center"
            />
            <textarea
              rows={5}
              className="text-sm border-0 rounded-lg [line-height:min-content]"
              defaultValue={description}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
