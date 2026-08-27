import { useMemo } from "react";

type fixture_281_Row = { id: number; label: string };
const rows: fixture_281_Row[] = [
  { id: 1, label: "fixture-281-row-0001" }
];
export function Component281() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-281">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
