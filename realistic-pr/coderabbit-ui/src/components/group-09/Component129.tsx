import { useMemo } from "react";

type fixture_311_Row = { id: number; label: string };
 const rows: fixture_311_Row[] = [
  { id: 1, label: "fixture-311-row-0001" }
 ];
export function Component311() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-311">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
