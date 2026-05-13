import type { LogLevel } from "../types/Log";

type LogFilterProps = {
  selectedLevel: LogLevel | "all";
  onChange: (level: LogLevel | "all") => void;
};

function LogFilter({ selectedLevel, onChange }: LogFilterProps) {
  return (
    <div>
      <label htmlFor="level-filter">Filter by Level </label>

      <select
        id="level-filter"
        value={selectedLevel}
        onChange={(e) => onChange(e.target.value as LogLevel | "all")}
      >
        <option value="all">All</option>
        <option value="error">Error</option>
        <option value="warn">Warn</option>
        <option value="info">Info</option>
      </select>
    </div>
  );
}

export default LogFilter;
