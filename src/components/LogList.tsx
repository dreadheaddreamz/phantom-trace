import LogCard from "./LogCard";
import type { Log } from "../types/Log";

type LogListProps = {
  logs: Log[];
};

function LogList({ logs }: LogListProps) {
  return (
    <div>
      {logs.map((log) => (
        <LogCard key={log.id} log={log} />
      ))}
    </div>
  );
}


export default LogList;
