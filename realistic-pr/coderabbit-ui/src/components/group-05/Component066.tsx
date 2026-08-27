import { useMemo } from "react";

type fixture_238_Row = { id: number; label: string };
const rows: fixture_238_Row[] = [
  { id: 1, label: "fixture-238-row-0001" }
];
export function Component238() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-238">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
