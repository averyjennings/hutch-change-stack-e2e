import { useMemo } from "react";

type fixture_308_Row = { id: number; label: string };
const rows: fixture_308_Row[] = [
  { id: 1, label: "fixture-308-row-0001" }
];
export function Component308() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-308">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
