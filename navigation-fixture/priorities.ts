export type Priority = "now" | "next"

export function priorityForReview(isBlocked: boolean): Priority {
  return isBlocked ? "next" : "now"
}
