export function pageItems<T>(items: readonly T[], page: number, pageSize: number): T[] {
  if (!Number.isInteger(page) || page < 1) throw new Error("Page must be a positive integer")
  if (!Number.isInteger(pageSize) || pageSize < 1) throw new Error("Page size must be a positive integer")
  const start = (page - 1) * pageSize
  return items.slice(start, start + pageSize)
}
