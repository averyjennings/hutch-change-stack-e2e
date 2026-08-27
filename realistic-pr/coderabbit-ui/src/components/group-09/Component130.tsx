import { useMemo } from "react";

type fixture_312_Row = { id: number; label: string };
const rows: fixture_312_Row[] = [
  { id: 1, label: "fixture-312-row-0001" }
];
export function Component312() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-312">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
