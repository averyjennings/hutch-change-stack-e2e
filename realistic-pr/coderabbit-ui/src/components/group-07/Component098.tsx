import { useMemo } from "react";

type fixture_280_Row = { id: number; label: string };
const rows: fixture_280_Row[] = [
  { id: 1, label: "fixture-280-row-0001" }
];
export function Component280() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-280">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
