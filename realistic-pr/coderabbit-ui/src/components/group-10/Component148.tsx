import { useMemo } from "react";

type fixture_330_Row = { id: number; label: string };
const rows: fixture_330_Row[] = [
  { id: 1, label: "fixture-330-row-0001" }
];
export function Component330() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-330">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
