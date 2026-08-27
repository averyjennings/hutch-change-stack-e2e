import { useMemo } from "react";

type fixture_285_Row = { id: number; label: string };
const rows: fixture_285_Row[] = [
  { id: 1, label: "fixture-285-row-0001" }
];
export function Component285() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-285">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
