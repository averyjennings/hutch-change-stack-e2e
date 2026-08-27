import { useMemo } from "react";

type fixture_332_Row = { id: number; label: string };
const rows: fixture_332_Row[] = [
  { id: 1, label: "fixture-332-row-0001" }
];
export function Component332() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-332">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
