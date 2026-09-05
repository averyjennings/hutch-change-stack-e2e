import { useMemo } from "react";

type fixture_293_Row = { id: number; label: string };
 const rows: fixture_293_Row[] = [
  { id: 1, label: "fixture-293-row-0001" }
 ];
export function Component293() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-293">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
