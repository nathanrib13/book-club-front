import { Star, StarHalf } from "lucide-react"

export function StarRating({ rating, size = "default" }: { rating: number; size?: "default" | "sm" }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex items-center gap-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-[#000000] ${size === "sm" ? "w-4 h-4" : "w-5 h-5"}`}>
          {i < fullStars ? (
            <Star className="fill-current" />
          ) : i === fullStars && hasHalfStar ? (
            <StarHalf className="fill-current" />
          ) : (
            <Star />
          )}
        </span>
      ))}
    </div>
  )
}

