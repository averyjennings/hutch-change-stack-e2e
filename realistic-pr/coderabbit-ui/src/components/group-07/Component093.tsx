import { useMemo } from "react";

type fixture_275_Row = { id: number; label: string };
const rows: fixture_275_Row[] = [
  { id: 1, label: "fixture-275-row-0001" }
];
export function Component275() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-275">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
