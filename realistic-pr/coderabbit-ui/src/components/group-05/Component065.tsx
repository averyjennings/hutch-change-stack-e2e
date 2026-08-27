import { useMemo } from "react";

type fixture_235_Row = { id: number; label: string };
const rows: fixture_235_Row[] = [
  { id: 1, label: "fixture-235-row-0001" }
];
export function Component235() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-235">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
