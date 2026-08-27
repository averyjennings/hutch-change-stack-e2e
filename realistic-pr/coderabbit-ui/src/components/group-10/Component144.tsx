import { useMemo } from "react";

type fixture_326_Row = { id: number; label: string };
const rows: fixture_326_Row[] = [
  { id: 1, label: "fixture-326-row-0001" }
];
export function Component326() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-326">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
