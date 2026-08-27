import { useMemo } from "react";

type fixture_324_Row = { id: number; label: string };
const rows: fixture_324_Row[] = [
  { id: 1, label: "fixture-324-row-0001" }
];
export function Component324() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-324">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
