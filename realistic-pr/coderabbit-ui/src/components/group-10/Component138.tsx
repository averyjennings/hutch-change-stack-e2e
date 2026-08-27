import { useMemo } from "react";

type fixture_320_Row = { id: number; label: string };
const rows: fixture_320_Row[] = [
  { id: 1, label: "fixture-320-row-0001" }
];
export function Component320() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-320">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
