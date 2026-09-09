export interface ReviewSummary {
  title: string
  filesChanged: number
}

export function describeReview(review: ReviewSummary): string {
  const unit = review.filesChanged === 1 ? "file" : "files"
  return `${review.title}: ${review.filesChanged} ${unit}`
}
