import React, { useState, useCallback } from "react";
import CardList from "./components/CardList";
import Map from "./components/Map";
import "./App.css";
import relogApps from "./data/NeRelog_apps.json";
import relogClients from "./data/NeRelog_clients.json";

function App() {
  const [value, setValue] = useState("");
  console.log("value", value);

  const filteredLocs = relogApps.filter((location) =>
    relogClients.some((client) => location.client_id === client.id)
  );

  return (
    <div className="App">
      <CardList
        locs={filteredLocs}
        clients={relogClients}
        setValue={setValue}
      />
      <Map locs={filteredLocs} clients={relogClients} />
    </div>
  );
}

export default App;
