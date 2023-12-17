import SpeedDial from "./components/SpeedDial";
import Inbox from "./components/Inbox";
import Task from "./components/Task";

function App() {
  return (
    <main>
      <section className="h-screen w-screen bg-[#0f8a69] grid place-content-center">
        <SpeedDial
          icons={[
            {
              name: "Task",
              icon: "mdi:book-open-outline",
              className: "text-indicator-orange hover:bg-indicator-orange",
              content: <Task />,
            },
            {
              name: "Inbox",
              icon: "ic:outline-question-answer",
              className: "text-indicator-blue hover:bg-indicator-blue",
              content: <Inbox />,
            },
          ]}
        />
        <div className="text-center flex flex-col items-center">
          <h1 className="text-white font-extrabold text-9xl">Simple Quicks</h1>
          <span className="text-xs text-white">from</span>
          <a
            href="https://simpul.tech"
            className="text-white font-medium text-lg link link-hover w-fit"
            target="_blank"
          >
            Simpul Technologies
          </a>
        </div>
        <p className="absolute bottom-10 left-10 text-white text-sm">
          Build with ☕️ by{" "}
          <a
            href="http://github.com/MhinHub"
            className="text-white font-medium text-base link link-hover"
            target="_blank"
          >
            Muhaemin Iskandar
          </a>
        </p>
      </section>
    </main>
  );
}

export default App;
