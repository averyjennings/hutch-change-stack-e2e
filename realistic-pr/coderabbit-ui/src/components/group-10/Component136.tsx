import { useMemo } from "react";

type fixture_318_Row = { id: number; label: string };
const rows: fixture_318_Row[] = [
  { id: 1, label: "fixture-318-row-0001" }
];
export function Component318() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-318">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
