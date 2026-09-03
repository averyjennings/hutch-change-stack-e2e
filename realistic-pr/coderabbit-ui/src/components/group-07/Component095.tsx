import { useMemo } from "react";

type fixture_277_Row = { id: number; label: string };
 const rows: fixture_277_Row[] = [
  { id: 1, label: "fixture-277-row-0001" }
 ];
export function Component277() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-277">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
