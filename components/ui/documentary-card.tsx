import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {StarRating} from "./star-rating"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Viewer {
  name: string
  status: "To Watch" | "Watched" | "lated"
  avatar: string
  rating: number
}

interface Documentary {
  id: number
  title: string
  director: string
  country: string
  duration: number
  description: string
  cover: string
  viewers: Viewer[]
  overallRating: number
  pickedBy: {
    name: string
    avatar: string
  }
}

export function DocumentaryCard({ documentary }: { documentary: Documentary }) {
  return (
    <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg w-[90%] m-4">
         <div className="relative flex flex-col items-center pt-6">
      <div className="absolute top-6 right-1">
            <Avatar>
              <AvatarImage src={documentary.pickedBy.avatar} alt={`${documentary.pickedBy.name}'s avatar`} />
              <AvatarFallback>{documentary.pickedBy.name[0]}</AvatarFallback>
            </Avatar>
          </div>
        <div className="relative w-[260px] h-[350px] self-center rounded-lg shadow-md">
          <Image
            src={documentary.cover || "/placeholder.svg"}
            alt={`Cover of ${documentary.title}`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
      
        </div>
        <CardContent className="p-6 w-full text-center flex flex-col justify-between h-full">
          <h3 className="font-bold text-2xl mb-2 text-gray-900 dark:text-white">{documentary.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Directed by {documentary.director}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {documentary.country} • {documentary.duration} 
          </p>
          <p className="text-sm mb-6 text-gray-700 dark:text-gray-300 h-[130px]">{documentary.description}</p>
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Viewers Status</h4>
            {documentary.viewers.map((viewer) => (
              <div key={viewer.name} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src={viewer.avatar} alt={`${viewer.name}'s avatar`} />
                    <AvatarFallback>{viewer.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{viewer.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Badge
                    variant={
                      viewer.status === "Watched" ? "default" : viewer.status === "To Watch" ? "secondary" : "outline"
                    }
                    className="mr-2"
                  >
                    {viewer.status}
                  </Badge>
                  {viewer.status === "Watched" && <StarRating rating={viewer.rating} size="sm" />}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Rating</span>
            <StarRating rating={documentary.overallRating} />
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

