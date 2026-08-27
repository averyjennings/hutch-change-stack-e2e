import { useMemo } from "react";

type fixture_232_Row = { id: number; label: string };
const rows: fixture_232_Row[] = [
  { id: 1, label: "fixture-232-row-0001" }
];
export function Component232() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-232">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
