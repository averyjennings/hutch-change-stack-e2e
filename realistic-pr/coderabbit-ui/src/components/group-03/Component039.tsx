import { useMemo } from "react";

type fixture_157_Row = { id: number; label: string };
const rows: fixture_157_Row[] = [
  { id: 1, label: "fixture-157-row-0001" },
  { id: 2, label: "fixture-157-row-0002" },
  { id: 3, label: "fixture-157-row-0003" },
  { id: 4, label: "fixture-157-row-0004" },
  { id: 5, label: "fixture-157-row-0005" },
  { id: 6, label: "fixture-157-row-0006" },
  { id: 7, label: "fixture-157-row-0007" },
  { id: 8, label: "fixture-157-row-0008" },
  { id: 9, label: "fixture-157-row-0009" },
  { id: 10, label: "fixture-157-row-0010" },
  { id: 11, label: "fixture-157-row-0011" },
  { id: 12, label: "fixture-157-row-0012" },
  { id: 13, label: "fixture-157-row-0013" },
  { id: 14, label: "fixture-157-row-0014" },
  { id: 15, label: "fixture-157-row-0015" },
  { id: 16, label: "fixture-157-row-0016" },
  { id: 17, label: "fixture-157-row-0017" },
  { id: 18, label: "fixture-157-row-0018" },
  { id: 19, label: "fixture-157-row-0019" },
  { id: 20, label: "fixture-157-row-0020" },
  { id: 21, label: "fixture-157-row-0021" },
  { id: 22, label: "fixture-157-row-0022" },
  { id: 23, label: "fixture-157-row-0023" },
  { id: 24, label: "fixture-157-row-0024" },
  { id: 25, label: "fixture-157-row-0025" },
  { id: 26, label: "fixture-157-row-0026" },
  { id: 27, label: "fixture-157-row-0027" },
  { id: 28, label: "fixture-157-row-0028" },
  { id: 29, label: "fixture-157-row-0029" },
  { id: 30, label: "fixture-157-row-0030" },
  { id: 31, label: "fixture-157-row-0031" },
  { id: 32, label: "fixture-157-row-0032" },
  { id: 33, label: "fixture-157-row-0033" },
  { id: 34, label: "fixture-157-row-0034" },
  { id: 35, label: "fixture-157-row-0035" },
  { id: 36, label: "fixture-157-row-0036" },
  { id: 37, label: "fixture-157-row-0037" },
  { id: 38, label: "fixture-157-row-0038" },
  { id: 39, label: "fixture-157-row-0039" },
  { id: 40, label: "fixture-157-row-0040" },
  { id: 41, label: "fixture-157-row-0041" }
];
export function Component157() {
  const visibleRows = useMemo(() => rows.filter((row) => row.id % 2 === 0), []);
  return <section aria-label="fixture-157">{visibleRows.map((row) => <div key={row.id}>{row.label}</div>)}</section>;
}
