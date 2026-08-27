import { useMemo } from "react";

type fixture_288_Row = { id: number; label: string };
const rows: fixture_288_Row[] = [
  { id: 1, label: "fixture-288-row-0001" }
];
export function Component288() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-288">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
