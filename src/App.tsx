import { useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLogs = logs
    .filter((log) =>
      selectedLevel === "all" ? true : log.level === selectedLevel,
    )
    .filter(
      (log) =>
        log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.source.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  return (
    <div>
      <h1>Log Monitor Dashboard</h1>

      <LogFilter selectedLevel={selectedLevel} onChange={setSelectedLevel} />
      <input
        type="text"
        placeholder="Search by message or source..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <LogList logs={filteredLogs} />
    </div>
  );
}

export default App;
