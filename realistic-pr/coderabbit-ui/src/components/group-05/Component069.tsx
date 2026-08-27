import { useMemo } from "react";

type fixture_247_Row = { id: number; label: string };
const rows: fixture_247_Row[] = [
  { id: 1, label: "fixture-247-row-0001" }
];
export function Component247() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-247">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
