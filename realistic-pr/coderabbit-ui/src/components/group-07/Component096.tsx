import { useMemo } from "react";

type fixture_278_Row = { id: number; label: string };
 const rows: fixture_278_Row[] = [
  { id: 1, label: "fixture-278-row-0001" }
 ];
export function Component278() {
   const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-278">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
 }
