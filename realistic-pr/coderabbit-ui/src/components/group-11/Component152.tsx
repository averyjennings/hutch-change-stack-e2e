import { useMemo } from "react";

type fixture_334_Row = { id: number; label: string };
const rows: fixture_334_Row[] = [
  { id: 1, label: "fixture-334-row-0001" }
];
export function Component334() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-334">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
