import { useEffect, useState } from "react";
import LogFilter from "./components/LogFilter";
import LogList from "./components/LogList";
import type { Log, LogLevel } from "./types/Log";
import "./App.css";

const messages = [
  "Failed API request",
  "User logged out",
  "High memory usage detected",
  "Database timeout",
  "New user registered",
];

const sources = [
  "AuthService",
  "APIService",
  "DatabaseService",
  "MonitoringService",
];

const levels: LogLevel[] = ["error", "warn", "info"];

const getRandomMessage = (): string => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const getRandomSource = (): string => {
  return sources[Math.floor(Math.random() * sources.length)];
};

const getRandomLevel = (): LogLevel => {
  return levels[Math.floor(Math.random() * levels.length)];
};

function App() {
  const [logs, setLogs] = useState<Log[]>([
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
  ]);

  const [selectedLevel, setSelectedLevel] = useState<LogLevel | "all">("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog: Log = {
        id: Date.now(),
        message: getRandomMessage(),
        level: getRandomLevel(),
        source: getRandomSource(),
        timestamp: new Date().toISOString(),
      };

      setLogs((prevLogs) => [newLog, ...prevLogs]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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
