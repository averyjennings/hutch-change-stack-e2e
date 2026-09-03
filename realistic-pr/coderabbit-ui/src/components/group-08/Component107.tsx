import { useMemo } from "react";

type fixture_289_Row = { id: number; label: string };
 const rows: fixture_289_Row[] = [
  { id: 1, label: "fixture-289-row-0001" }
 ];
export function Component289() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-289">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
