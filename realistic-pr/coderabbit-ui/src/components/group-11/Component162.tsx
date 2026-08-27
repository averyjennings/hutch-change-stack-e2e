import { useMemo } from "react";

type fixture_344_Row = { id: number; label: string };
const rows: fixture_344_Row[] = [
  { id: 1, label: "fixture-344-row-0001" }
];
export function Component344() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-344">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
