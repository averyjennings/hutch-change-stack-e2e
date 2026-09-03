import { useMemo } from "react";

type fixture_214_Row = { id: number; label: string };
 const rows: fixture_214_Row[] = [
  { id: 1, label: "fixture-214-row-0001" }
 ];
export function Component214() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-214">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
