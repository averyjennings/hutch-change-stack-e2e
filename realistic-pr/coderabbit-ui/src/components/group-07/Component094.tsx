import { useMemo } from "react";

type fixture_276_Row = { id: number; label: string };
const rows: fixture_276_Row[] = [
  { id: 1, label: "fixture-276-row-0001" }
];
export function Component276() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-276">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
