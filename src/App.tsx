import SpeedDial from "./components/SpeedDial";
import Inbox from "./components/Inbox";

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
            },
            {
              name: "Inbox",
              icon: "ic:outline-question-answer",
              className: "text-indicator-blue hover:bg-indicator-blue",
              content: <Inbox />,
            },
          ]}
        />
        <h1 className="text-white font-bold text-7xl">Simple Quicks</h1>
      </section>
    </main>
  );
}

export default App;
