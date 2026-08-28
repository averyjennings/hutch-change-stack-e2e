import { useMemo } from "react";

type fixture_322_Row = { id: number; label: string };
 const rows: fixture_322_Row[] = [
  { id: 1, label: "fixture-322-row-0001" }
 ];
export function Component322() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-322">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
