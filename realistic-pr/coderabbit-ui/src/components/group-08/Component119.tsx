import { useMemo } from "react";

type fixture_301_Row = { id: number; label: string };
const rows: fixture_301_Row[] = [
  { id: 1, label: "fixture-301-row-0001" }
];
export function Component301() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-301">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
