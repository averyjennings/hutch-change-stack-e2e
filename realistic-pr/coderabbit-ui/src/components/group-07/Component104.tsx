import { useMemo } from "react";

type fixture_286_Row = { id: number; label: string };
 const rows: fixture_286_Row[] = [
  { id: 1, label: "fixture-286-row-0001" }
 ];
export function Component286() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-286">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
