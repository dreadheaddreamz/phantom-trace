import { useState } from "react";
import LogCard from "./components/LogCard";
import LogFilter from "./components/LogFilter";
import type { Log, LogLevel } from "./types/Log";
import LogList from "./components/LogList";
import "./App.css";

const logs: Log[] = [
  {
    id: 1,
    message: "Error connecting to database",
    level: "error",
    source: "DatabaseService",
    timestamp: "2024-06-01T12:00:00Z",
  },
  {
    id: 2,
    message: "User login successful",
    level: "info",
    source: "AuthService",
    timestamp: "2024-06-01T12:05:00Z",
  },
  {
    id: 3,
    message: "Disk space running low",
    level: "warn",
    source: "StorageService",
    timestamp: "2024-06-01T12:10:00Z",
  },
];

function App() {
  const [selectedLevel, setSelectedLevel] = useState<LogLevel | "all">("all");

  const filteredLogs =
    selectedLevel === "all"
      ? logs
      : logs.filter((log) => log.level === selectedLevel);

  return (
    <div>
      <h1>Log Monitor Dashboard</h1>

      <LogFilter selectedLevel={selectedLevel} onChange={setSelectedLevel} />

      <LogList logs={filteredLogs} />
    </div>
  );
}

export default App;
