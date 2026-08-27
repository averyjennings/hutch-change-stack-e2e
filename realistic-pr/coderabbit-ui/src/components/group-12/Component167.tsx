import { useMemo } from "react";

type fixture_349_Row = { id: number; label: string };
const rows: fixture_349_Row[] = [
  { id: 1, label: "fixture-349-row-0001" }
];
export function Component349() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-349">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
