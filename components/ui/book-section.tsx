import { BookCard } from "./book-card"

export function BookSection() {
  const books = [
    {
      id: 1,
      title: "As Aventuras de Huckleberry Finn",
      author: "Mark Twain",
      country: "1884, USA",
      pages: 408,
      description:
        "Ao escapar do pai violento e se refugiar em uma ilha, Huck Finn aproxima-se de Jim, um escravo fugido, e desenvolve com ele uma solidária relação de amizade. Em busca de liberdade, a dupla começa uma viagem pelo leito do rio Mississippi, e a cada parada envolve-se em inusitadas aventuras.",
      cover: "https://m.media-amazon.com/images/I/91AW1FPXtEL._AC_UF1000,1000_QL80_.jpg",
      readers: [
        { name: "Nathan", progress: 85, avatar: "https://i.ibb.co/n6Z8RtP/image.png", rating: 0},
        { name: "Joao", progress: 41, avatar: "https://i.ibb.co/FwW9Jxf/image.png", rating: 0 },
        { name: "Gabriel", progress: 100, avatar: "https://i.ibb.co/4K2rPH5/image.png", rating: 0 },
        { name: "Igor", progress: 55, avatar: "https://i.ibb.co/bLfVfTz/image.png", rating: 0 },
      ],
      overallRating: 0,
      pickedBy: { name: "Joao", avatar: "https://i.ibb.co/n6Z8RtP/image.png" },
    },
    {
      id: 2,
      title: "A Coragem de Ser Imperfeito",
      author: "Brené Brown",
      country: "2012, EUA",
      pages: 208,
      description: "Como aceitar a própria vulnerabilidade, vencer a vergonha e ousar ser quem você é. Brené Brown ousou tocar em assuntos que costumam ser evitados por causarem grande desconforto. Sua palestra a respeito de vulnerabilidade, medo, vergonha e imperfeição já teve mais de 25 milhões de visualizações.",
      cover: "https://m.media-amazon.com/images/I/61rRRbfINJL.jpg",
      readers: [
        { name: "Nathan", progress: 23, avatar: "https://i.ibb.co/n6Z8RtP/image.png", rating:0 },
        { name: "Joao", progress: 0, avatar: "https://i.ibb.co/FwW9Jxf/image.png", rating:0 },
        { name: "Gabriel", progress: 25, avatar: "https://i.ibb.co/4K2rPH5/image.png", rating:0 },
        { name: "Igor", progress: 23, avatar: "https://i.ibb.co/bLfVfTz/image.png", rating:0 },
      ],
      overallRating:0,
      pickedBy: { name: "Igor", avatar: "https://i.ibb.co/bLfVfTz/image.png" },
    },
    {
      id: 3,
      title: "Quando os pássaros voltarem",
      author: "Fernando Aramburu",
      country: "2023, ESP",
      pages: 544,
      description: "Toni, um professor de história da filosofia, cansado da vida e sem perspectivas, decide, assim, pôr fim à própria vida em 31 de julho do ano seguinte. Com saúde impecável e vasta leitura, ele sente que já experimentou tudo e não compreende certas coisas. Metódico, usa os 365 dias restantes para resolver pendências e entender as razões por trás de sua decisão.",
      cover: "https://m.media-amazon.com/images/I/61VrvMZ9+yL._SL1005_.jpg",
      readers: [
        { name: "Nathan", progress: 0, avatar: "https://i.ibb.co/n6Z8RtP/image.png", rating:0 },
        { name: "Joao", progress: 0, avatar: "https://i.ibb.co/FwW9Jxf/image.png", rating:0 },
        { name: "Gabriel", progress: 0, avatar: "https://i.ibb.co/4K2rPH5/image.png", rating:0 },
        { name: "Igor", progress: 0, avatar: "https://i.ibb.co/bLfVfTz/image.png", rating:0 },
      ],
      overallRating: 0,
      pickedBy: { name: "Joao", avatar: "https://i.ibb.co/FwW9Jxf/image.png" },
    },
    // {
    //   id: 4,
    //   title: "Pride and Prejudice",
    //   author: "Jane Austen",
    //   country: "United Kingdom",
    //   pages: 432,
    //   description: "A witty and romantic novel about love, family, and social class in 19th-century England.",
    //   cover: "/placeholder.svg?height=400&width=300",
    //   readers: [
    //     { name: "Joao", progress: 25, avatar: "/placeholder.svg?height=40&width=40", rating: 4.0 },
    //     { name: "Nathan", progress: 10, avatar: "/placeholder.svg?height=40&width=40", rating: 3.5 },
    //     { name: "Gabriel", progress: 5, avatar: "/placeholder.svg?height=40&width=40", rating: 4.5 },
    //     { name: "Igor", progress: 15, avatar: "/placeholder.svg?height=40&width=40", rating: 4.0 },
    //   ],
    //   overallRating: 4,
    //   pickedBy: { name: "Igor", avatar: "/placeholder.svg?height=40&width=40" },
    // },
  ]

  return (
    <section id="books" className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Book Club Picks</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  )
}

