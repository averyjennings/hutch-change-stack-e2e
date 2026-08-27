import { useMemo } from "react";

type fixture_271_Row = { id: number; label: string };
const rows: fixture_271_Row[] = [
  { id: 1, label: "fixture-271-row-0001" }
];
export function Component271() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-271">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
