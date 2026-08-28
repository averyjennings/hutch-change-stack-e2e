import { useMemo } from "react";

type fixture_220_Row = { id: number; label: string };
 const rows: fixture_220_Row[] = [
  { id: 1, label: "fixture-220-row-0001" }
 ];
export function Component220() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-220">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
