import { useMemo } from "react";

type fixture_255_Row = { id: number; label: string };
const rows: fixture_255_Row[] = [
  { id: 1, label: "fixture-255-row-0001" }
];
export function Component255() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-255">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
