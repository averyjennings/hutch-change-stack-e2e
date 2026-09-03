import { useMemo } from "react";

type fixture_306_Row = { id: number; label: string };
 const rows: fixture_306_Row[] = [
  { id: 1, label: "fixture-306-row-0001" }
 ];
export function Component306() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-306">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
