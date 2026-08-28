import { useMemo } from "react";

type fixture_273_Row = { id: number; label: string };
 const rows: fixture_273_Row[] = [
  { id: 1, label: "fixture-273-row-0001" }
 ];
export function Component273() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-273">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
