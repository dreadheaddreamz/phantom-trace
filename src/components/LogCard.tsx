import type { Log } from "../types/Log";

type LogCardProps = {
  log: Log;
};

const getLevelColor = (level: Log["level"]) => {
  switch (level) {
    case "error":
      return "red";
    case "warn":
      return "orange";
    case "info":
      return "green";
    default:
      return "black";
  }
};

function LogCard({ log }: LogCardProps) {
  return (
    <div>
      <p>
        <strong>Message:</strong> {log.message}
      </p>

      <p>
        <strong>Level:</strong>{" "}
        <span style={{ color: getLevelColor(log.level) }}>
          {log.level.toUpperCase()}
        </span>
      </p>

      <p>
        <strong>Source:</strong> {log.source}
      </p>

      <p>
        <strong>Timestamp:</strong> {log.timestamp}
      </p>

      <hr />
    </div>
  );
}

export default LogCard;
