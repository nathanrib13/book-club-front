import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { StarRating } from "@/components/ui/star-rating"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Reader {
  name: string
  progress: number
  avatar: string
  rating: number
}

interface Book {
  id: number
  title: string
  author: string
  country: string
  pages: number
  description: string
  cover: string
  readers: Reader[]
  overallRating: number
  pickedBy: {
    name: string
    avatar: string
  }
}

export function BookCard({ book }: { book: Book }) {
  return (
    <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg w-[90%] m-4">
      <div className="relative flex flex-col items-center pt-6">
        <div className="absolute top-6 right-1">
          <Avatar>
            <AvatarImage src={book.pickedBy.avatar} alt={`${book.pickedBy.name}'s avatar`} />
            <AvatarFallback>{book.pickedBy.name[0]}</AvatarFallback>
          </Avatar>
        </div>

        <div className="relative w-[260px] h-[350px] self-center rounded-lg shadow-md">
          <Image
            src={book.cover || "/placeholder.svg"}
            alt={`Cover of ${book.title}`}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>

        <CardContent className="p-6 w-full text-center flex flex-col justify-between h-full">
          <h3 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white text-left">{book.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-left">{book.author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-left">
            {book.country} • {book.pages} pages
          </p>
          
          {/* Adicionando flex-grow para garantir que a descrição não afete o layout da progressão dos leitores */}
          <p className="text-sm mb-8 text-gray-700 dark:text-gray-300 text-left flex-grow h-[170px]">{book.description}</p>

          {/* Seção de Readers Progress com flex-grow */}
          <div className="mb-8 w-full flex-grow">
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Readers Progress</h4>
            {book.readers.map((reader) => (
              <div key={reader.name} className="mb-6 w-full">
                <div className="flex items-center justify-between text-sm mb-3">
                  <div className="flex items-center">
                    <Avatar className="w-8 h-8 mr-3">
                      <AvatarImage src={reader.avatar} alt={`${reader.name}'s avatar`} />
                      <AvatarFallback>{reader.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-gray-700 dark:text-gray-300">{reader.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3 text-gray-600 dark:text-gray-400">{reader.progress}%</span>
                    <StarRating rating={reader.rating} size="sm" />
                  </div>
                </div>
                <Progress value={reader.progress} className="h-2 w-full" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Overall Rating</span>
            <StarRating rating={book.overallRating} />
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
