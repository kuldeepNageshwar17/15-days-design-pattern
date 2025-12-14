import Toggle from "./Toggle";

function App() {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-xl p-4 m-4">Render-Prop Toggle Example</h1>

      <div className="bg-gray-100 p-4 rounded shadow-sm">
        <Toggle initial={false}>
          {({ on, toggle, reset }) => (
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={toggle}
                className={`px-4 py-2 rounded ${
                  on ? "bg-green-500 text-white" : "bg-gray-300 text-gray-600"
                }`}
              >
                {on ? "Turn OFF" : "Turn ON"}
              </button>

              <div className="text-lg text-gray-600">
                State: <strong>{on ? "ON" : "OFF"}</strong>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={reset}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </Toggle>
      </div>
    </div>
  );
}

export default App;
