import { useMemo } from "react";

type fixture_346_Row = { id: number; label: string };
const rows: fixture_346_Row[] = [
  { id: 1, label: "fixture-346-row-0001" }
];
export function Component346() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-346">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
