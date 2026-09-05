import { useMemo } from "react";

type fixture_265_Row = { id: number; label: string };
 const rows: fixture_265_Row[] = [
  { id: 1, label: "fixture-265-row-0001" }
 ];
export function Component265() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-265">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
