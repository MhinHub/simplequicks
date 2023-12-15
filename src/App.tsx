import SpeedDial from "./components/SpeedDial";

function App() {
  return (
    <main>
      <section className="h-screen w-screen bg-[#0f8a69] grid place-content-center">
        <SpeedDial
          icons={[
            {
              name: "Task",
              icon: "mdi:book-open-outline",
              bgColor: "bg-red-400",
              color: "indicator-orange",
            },
            {
              name: "Inbox",
              icon: "ic:outline-question-answer",
              bgColor: "bg-purple-500",
              color: "indicator-blue",
            },
          ]}
        />
        <h1 className="text-white font-bold text-7xl">Simple Quicks</h1>
      </section>
    </main>
  );
}

export default App;
