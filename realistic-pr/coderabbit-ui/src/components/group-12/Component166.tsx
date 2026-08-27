import { useMemo } from "react";

type fixture_348_Row = { id: number; label: string };
const rows: fixture_348_Row[] = [
  { id: 1, label: "fixture-348-row-0001" }
];
export function Component348() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-348">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
