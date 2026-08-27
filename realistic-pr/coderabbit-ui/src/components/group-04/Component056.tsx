import { useMemo } from "react";

type fixture_208_Row = { id: number; label: string };
const rows: fixture_208_Row[] = [
  { id: 1, label: "fixture-208-row-0001" }
];
export function Component208() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-208">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
