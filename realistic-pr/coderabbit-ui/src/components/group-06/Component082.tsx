import { useMemo } from "react";

type fixture_264_Row = { id: number; label: string };
 const rows: fixture_264_Row[] = [
  { id: 1, label: "fixture-264-row-0001" }
 ];
export function Component264() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-264">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
