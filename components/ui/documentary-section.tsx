import { DocumentaryCard } from "./documentary-card"

export function DocumentarySection() {
  const documentaries = [
    {
      id: 1,
      title: "To Kill a Tiger",
      director: "Nisha Pahuja",
      country: "2022, CAN",
      duration: "2h 07m", // in minutes
      description:
        "O agricultor indiano Ranjit luta para trazer justiça aos homens que abusaram de sua filha de 13 anos. Ele enfrenta uma batalha contra forças poderosas em uma jornada que choca seu vilarejo intolerante.",
      cover: "https://m.media-amazon.com/images/M/MV5BMmFhNzY5MDEtNmUxZi00MTA2LTg2OTYtM2VkNmY3MTEwMTJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      viewers: [
        { name: "Nathan", status: "Watched", avatar: "https://i.ibb.co/n6Z8RtP/image.png", rating: 5 },
        { name: "Joao", status: "Watched", avatar: "https://i.ibb.co/FwW9Jxf/image.png", rating: 0 },
        { name: "Gabriel", status: "Watched", avatar: "https://i.ibb.co/4K2rPH5/image.png", rating: 0 },
        { name: "Igor", status: "Watched", avatar: "https://i.ibb.co/bLfVfTz/image.png", rating: 3 },
      ],
      overallRating: 4,
      pickedBy: { name: "Nathan", avatar: "https://i.ibb.co/n6Z8RtP/image.png" },
    },
    {
      id: 2,
      title: "Don't Die",
      director: "Chris Smith",
      country: "2025, EUA",
      duration: "1h 28m",
      description:
        "Bryan Johnson põe o corpo e a fortuna em risco ao desafiar o envelhecimento e tentar estender seu tempo de vida além de todos os limites conhecidos.",
      cover: "https://m.media-amazon.com/images/M/MV5BMmJmMDU2YWYtZWFhNC00MGNmLWE0YTgtM2M2MWRlODE2ODhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      viewers: [
        { name: "Nathan", status: "Watched", avatar: "https://i.ibb.co/n6Z8RtP/image.png", rating: 2.5 },
        { name: "Joao", status: "Watched", avatar: "https://i.ibb.co/FwW9Jxf/image.png", rating: 0 },
        { name: "Gabriel", status: "Watched", avatar: "https://i.ibb.co/4K2rPH5/image.png", rating: 0 },
        { name: "Igor", status: "Watched", avatar: "https://i.ibb.co/bLfVfTz/image.png", rating: 4 },
      ],
      overallRating: 3,
      pickedBy: { name: "Gabril", avatar: "https://i.ibb.co/4K2rPH5/image.png" },
    },
    {
      id: 3,
      title: "Hot Girls Wanted",
      director: "Ronna Gradus, Jill Bauer",
      country: "2015, USA",
      duration: "1h 24m",
      description: "Documentário aborda a lucrativa indústria do pornô amador e as sedutoras portas que se abrem para essas jovens sem grandes perspectivas.",
      cover: "https://upload.wikimedia.org/wikipedia/en/6/62/Hot_Girls_Wanted_film_poster.png",
      viewers: [
        { name: "Nathan", status: "Watched", avatar: "https://i.ibb.co/n6Z8RtP/image.png", rating: 1.5 },
        { name: "Joao", status: "Watched", avatar: "https://i.ibb.co/FwW9Jxf/image.png", rating: 0 },
        { name: "Gabriel", status: "Lated", avatar: "https://i.ibb.co/4K2rPH5/image.png", rating: 0 },
        { name: "Igor", status: "Watched", avatar: "https://i.ibb.co/bLfVfTz/image.png", rating: 3 },
      ],
      overallRating: 2,
      pickedBy: { name: "Igor", avatar: "https://i.ibb.co/bLfVfTz/image.png" },
    },
    {
      id: 4,
      title: "O Fim e o Princípio",
      director: " Eduardo Coutinho",
      country: "2006, BRA",
      duration: "1h 50m",
      description: "O documentário registra o cotidiano e as histórias dos moradores da pequena São João do Rio do Peixe, na Paraíba. Por meio de depoimentos, o filme retrata o sentimento de uma população humilde que esbanja alegria e esperança, além de apresentar as nuances de um nordeste de alma densa e fecunda",
      cover: "https://br.web.img3.acsta.net/medias/nmedia/18/96/14/47/20449129.jpg",
      viewers: [
        { name: "Nathan", status: "Watched", avatar: "https://i.ibb.co/n6Z8RtP/image.png", rating: 3.5 },
        { name: "Joao", status: "Watched", avatar: "https://i.ibb.co/FwW9Jxf/image.png", rating: 0 },
        { name: "Gabriel", status: "Lated", avatar: "https://i.ibb.co/4K2rPH5/image.png", rating: 0 },
        { name: "Igor", status: "Watched", avatar: "https://i.ibb.co/bLfVfTz/image.png", rating: 4.0 },
      ],
      overallRating: 3.7,
      pickedBy: { name: "Joao", avatar: "https://i.ibb.co/FwW9Jxf/image.png" },
    },
    {
      id: 5,
      title: "I Am Not Your Negro",
      director: "Raoul Peck",
      country: "2016, EUA",
      duration: "1h 34m",
      description: "O produtor Raoul Peck usa o livro inacabado de James Baldwin sobre o racismo nos EUA para examinar as questões raciais contemporâneas, com relatos sobre as vidas e assassinatos dos lideres ativistas Medgar Evers, Malcolm X e Martin Luther King Jr.",
      cover: "https://upload.wikimedia.org/wikipedia/pt/3/31/I_Am_Not_Your_Negro.png",
      viewers: [
        { name: "Nathan", status: "To Watch", avatar: "https://i.ibb.co/n6Z8RtP/image.png", rating: 4.5 },
        { name: "Joao", status: "To Watch", avatar: "https://i.ibb.co/FwW9Jxf/image.png", rating: 5.0 },
        { name: "Gabriel", status: "To Watch", avatar: "https://i.ibb.co/4K2rPH5/image.png", rating: 4.0 },
        { name: "Igor", status: "To Watch", avatar: "https://i.ibb.co/bLfVfTz/image.png", rating: 5.0 },
      ],
      overallRating: 4.8,
      pickedBy: { name: "Nathan", avatar: "https://i.ibb.co/n6Z8RtP/image.png" },
    },
  ]

  return (
    <section id="documentaries" className="mb-12">
      <h2 className="text-3xl font-semibold mb-6">Documentaries</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {documentaries.map((documentary) => (
          <DocumentaryCard key={documentary.id} documentary={documentary} />
        ))}
      </div>
    </section>
  )
}

