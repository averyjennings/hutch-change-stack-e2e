import { useMemo } from "react";

type fixture_223_Row = { id: number; label: string };
 const rows: fixture_223_Row[] = [
  { id: 1, label: "fixture-223-row-0001" }
 ];
export function Component223() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-223">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
