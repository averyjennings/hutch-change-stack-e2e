import { useMemo } from "react";

type fixture_258_Row = { id: number; label: string };
 const rows: fixture_258_Row[] = [
  { id: 1, label: "fixture-258-row-0001" }
 ];
export function Component258() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-258">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
