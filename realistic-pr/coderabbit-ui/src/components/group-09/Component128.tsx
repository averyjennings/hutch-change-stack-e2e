import { useMemo } from "react";

type fixture_310_Row = { id: number; label: string };
const rows: fixture_310_Row[] = [
  { id: 1, label: "fixture-310-row-0001" }
];
export function Component310() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-310">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
