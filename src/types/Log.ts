export type LogLevel = "error" | "warn" | "info";

export type Log = {
  id: number;
  message: string;
  level: LogLevel;
  source: string;
  timestamp: string;
};