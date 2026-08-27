import { useMemo } from "react";

type fixture_345_Row = { id: number; label: string };
const rows: fixture_345_Row[] = [
  { id: 1, label: "fixture-345-row-0001" }
];
export function Component345() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-345">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
