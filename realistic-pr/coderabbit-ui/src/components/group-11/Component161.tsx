import { useMemo } from "react";

type fixture_343_Row = { id: number; label: string };
const rows: fixture_343_Row[] = [
  { id: 1, label: "fixture-343-row-0001" }
];
export function Component343() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-343">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
