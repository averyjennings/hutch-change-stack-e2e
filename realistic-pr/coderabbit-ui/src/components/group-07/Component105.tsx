import { useMemo } from "react";

type fixture_287_Row = { id: number; label: string };
 const rows: fixture_287_Row[] = [
  { id: 1, label: "fixture-287-row-0001" }
 ];
export function Component287() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-287">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
