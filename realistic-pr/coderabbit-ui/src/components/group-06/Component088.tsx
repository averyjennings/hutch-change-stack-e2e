import { useMemo } from "react";

type fixture_270_Row = { id: number; label: string };
const rows: fixture_270_Row[] = [
  { id: 1, label: "fixture-270-row-0001" }
];
export function Component270() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-270">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
