import { useMemo } from "react";

type fixture_313_Row = { id: number; label: string };
const rows: fixture_313_Row[] = [
  { id: 1, label: "fixture-313-row-0001" }
];
export function Component313() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-313">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
