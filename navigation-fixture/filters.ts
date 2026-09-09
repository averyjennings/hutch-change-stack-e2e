export interface Review { title: string; author: string }

export function filterByAuthor(reviews: readonly Review[], author: string): Review[] {
  const normalized = author.trim().toLowerCase()
  return reviews.filter(review => review.author.toLowerCase() === normalized)
}
