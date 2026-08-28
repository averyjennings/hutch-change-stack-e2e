import { useMemo } from "react";

type fixture_211_Row = { id: number; label: string };
 const rows: fixture_211_Row[] = [
  { id: 1, label: "fixture-211-row-0001" }
 ];
export function Component211() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-211">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
