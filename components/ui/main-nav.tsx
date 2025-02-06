import Link from "next/link"

export function MainNav() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="text-2xl font-bold text-[#09be03]">
        BookDocs Club
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link href="#books" className="hover:text-[#09be03]">
            Books
          </Link>
        </li>
        <li>
          <Link href="#documentaries" className="hover:text-[#09be03]">
            Documentaries
          </Link>
        </li>
      </ul>
    </nav>
  )
}

