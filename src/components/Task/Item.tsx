import { useState } from "react";
import cn from "../../utils/cn";
import { Icon } from "@iconify/react";
import { Datepicker } from "flowbite-react";
import { createTasks } from "../../data/task";
import { Tooltip } from "flowbite-react";
import { useTaskStore } from "../../store";

export type ItemProps = ReturnType<typeof createTasks>;

const Item = ({ userId, title, date, description, status }: ItemProps) => {
  const [checked, setChecked] = useState(status);
  const [collapsed, setCollapsed] = useState(false);

  const [dueDate, setDueDate] = useState<Date>(date);
  const [taskTitle, setTaskTitle] = useState<string>(title);

  const { deleteTask } = useTaskStore();

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
              placeholder="Task Title"
              className={cn(
                "text-sm font-medium transition border-0 p-2 rounded-lg overflow-hidden [resize:none] [inline-size:min-content]  [line-height:min-content]",
                checked && "line-through decoration-primary-dark"
              )}
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div className="flex gap-3 text-xs items-center">
            <span className={cn("text-indicator-orange", checked && "hidden")}>
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
            <Tooltip
              content={
                <div className="flex flex-col gap-3">
                  <span>Are You Sure?</span>
                  <button
                    type="button"
                    className="rounded-md bg-indicator-red p-1 text-white"
                    onClick={() => deleteTask(userId)}
                  >
                    Yes
                  </button>
                </div>
              }
              trigger="click"
              theme={{
                style: { dark: "bg-primary-light" },
                arrow: { style: { dark: "bg-primary-light" } },
              }}
              placement="bottom-start"
            >
              <Icon
                icon="mdi:trash-outline"
                className="btn btn-ghost text-indicator-red  text-2xl p-0 h-fit min-h-0"
              />
            </Tooltip>
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
              placeholder="Description"
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
