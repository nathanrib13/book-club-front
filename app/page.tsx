import { BookSection } from "@/components/ui/book-section"
import { DocumentarySection } from "@/components/ui/documentary-section"

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Book Club & Documentaries
        </h1>
        <BookSection />
        <DocumentarySection />
      </div>
    </div>
  )
}

