import { useMemo } from "react";

type fixture_260_Row = { id: number; label: string };
 const rows: fixture_260_Row[] = [
  { id: 1, label: "fixture-260-row-0001" }
 ];
export function Component260() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-260">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
