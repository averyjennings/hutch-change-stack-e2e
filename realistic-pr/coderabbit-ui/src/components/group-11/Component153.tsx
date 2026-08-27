import { useMemo } from "react";

type fixture_335_Row = { id: number; label: string };
const rows: fixture_335_Row[] = [
  { id: 1, label: "fixture-335-row-0001" }
];
export function Component335() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-335">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
