import { useMemo } from "react";

type fixture_304_Row = { id: number; label: string };
 const rows: fixture_304_Row[] = [
  { id: 1, label: "fixture-304-row-0001" }
 ];
export function Component304() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-304">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
