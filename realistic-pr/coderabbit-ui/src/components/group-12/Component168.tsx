import { useMemo } from "react";

type fixture_350_Row = { id: number; label: string };
const rows: fixture_350_Row[] = [
  { id: 1, label: "fixture-350-row-0001" }
];
export function Component350() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-350">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
