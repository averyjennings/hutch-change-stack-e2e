import { useMemo } from "react";

type fixture_249_Row = { id: number; label: string };
const rows: fixture_249_Row[] = [
  { id: 1, label: "fixture-249-row-0001" }
];
export function Component249() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-249">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
