import { useMemo } from "react";

type fixture_347_Row = { id: number; label: string };
const rows: fixture_347_Row[] = [
  { id: 1, label: "fixture-347-row-0001" }
];
export function Component347() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-347">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
