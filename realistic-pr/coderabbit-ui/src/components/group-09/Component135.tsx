import { useMemo } from "react";

type fixture_317_Row = { id: number; label: string };
 const rows: fixture_317_Row[] = [
  { id: 1, label: "fixture-317-row-0001" }
 ];
export function Component317() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-317">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
