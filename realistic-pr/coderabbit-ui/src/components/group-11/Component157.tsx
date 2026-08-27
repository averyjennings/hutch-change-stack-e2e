import { useMemo } from "react";

type fixture_339_Row = { id: number; label: string };
const rows: fixture_339_Row[] = [
  { id: 1, label: "fixture-339-row-0001" }
];
export function Component339() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-339">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
