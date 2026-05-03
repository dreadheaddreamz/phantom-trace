import type { Log } from "../types/Log";

type LogCardProps = {
  log: Log;
};

const formatTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);

  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

function LogCard({ log }: LogCardProps) {
  return (
    <div className={`log-card ${log.level}`}>
      <p>
        <strong>Message:</strong> {log.message}
      </p>

      <p>
        <strong>Level:</strong>{" "}
        <span className={`level-badge ${log.level}`}>
          {log.level.toUpperCase()}
        </span>
      </p>

      <p>
        <strong>Source:</strong> {log.source}
      </p>

      <p>
        <strong>Timestamp:</strong> {formatTimestamp(log.timestamp)}
      </p>
    </div>
  );
}
export default LogCard;
