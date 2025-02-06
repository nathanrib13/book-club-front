import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            BookDocs Club
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="#books" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Books
            </Link>
            <Link
              href="#documentaries"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Documentaries
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

