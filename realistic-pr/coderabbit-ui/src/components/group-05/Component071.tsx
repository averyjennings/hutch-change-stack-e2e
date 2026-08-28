import { useMemo } from "react";

type fixture_251_Row = { id: number; label: string };
 const rows: fixture_251_Row[] = [
  { id: 1, label: "fixture-251-row-0001" }
 ];
export function Component251() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-251">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
