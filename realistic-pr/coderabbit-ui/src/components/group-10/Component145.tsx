import { useMemo } from "react";

type fixture_327_Row = { id: number; label: string };
const rows: fixture_327_Row[] = [
  { id: 1, label: "fixture-327-row-0001" }
];
export function Component327() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-327">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
