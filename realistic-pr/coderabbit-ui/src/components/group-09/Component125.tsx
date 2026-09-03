import { useMemo } from "react";

type fixture_307_Row = { id: number; label: string };
 const rows: fixture_307_Row[] = [
  { id: 1, label: "fixture-307-row-0001" }
 ];
export function Component307() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-307">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
