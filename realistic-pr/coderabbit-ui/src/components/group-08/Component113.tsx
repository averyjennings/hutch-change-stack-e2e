import { useMemo } from "react";

type fixture_295_Row = { id: number; label: string };
const rows: fixture_295_Row[] = [
  { id: 1, label: "fixture-295-row-0001" }
];
export function Component295() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-295">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
