const moviesMock = [
  {
    id: "297d1413-e2e1-4b06-bb2c-44cd0647e6ad",
    title: "My Way to Olympia (Mein Weg nach Olympia)",
    year: 2011,
    cover: "http://dummyimage.com/159x139.bmp/dddddd/000000",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    duration: 1950,
    contentRating: "G",
    source: "https://usa.gov/vestibulum/proin/eu/mi/nulla/ac/enim.json",
    tags: ["Animation|Children|Fantasy|War"],
  },
  {
    id: "e0b72e8d-cfae-4169-8b90-32a0bb17e50f",
    title: "Stolen Face",
    year: 2005,
    cover: "http://dummyimage.com/157x213.bmp/ff4444/ffffff",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    duration: 1990,
    contentRating: "PG",
    source:
      "https://sourceforge.net/nisi/eu/orci/mauris/lacinia/sapien/quis.xml",
    tags: [
      "Drama",
      "Drama",
      "Comedy",
      "Action|Crime|Mystery|Thriller",
      "Sci-Fi",
    ],
  },
  {
    id: "42f598ec-472a-4ae9-9f6d-f72e88e95c63",
    title: "Cutter, The",
    year: 2004,
    cover: "http://dummyimage.com/128x218.bmp/5fa2dd/ffffff",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    duration: 1933,
    contentRating: "NC-17",
    source: "http://freewebs.com/ac/nibh/fusce/lacus/purus/aliquet.html",
    tags: [
      "Comedy|Musical",
      "Comedy|Drama",
      "Comedy|Crime|Drama|Mystery",
      "Drama|Thriller",
    ],
  },
  {
    id: "dd37fdb5-52c6-4747-96e1-791f57a4957d",
    title: "Prisoner of Shark Island, The",
    year: 2004,
    cover: "http://dummyimage.com/186x117.bmp/dddddd/000000",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    duration: 1999,
    contentRating: "NC-17",
    source: "https://java.com/justo/morbi/ut/odio.json",
    tags: [
      "Action|Adventure|Fantasy|Sci-Fi",
      "Drama",
      "Comedy|Romance",
      "Comedy|Drama",
      "Drama",
    ],
  },
  {
    id: "77cd3080-c796-496f-97bc-79df3d69f6ee",
    title: "Bring on the Night",
    year: 2005,
    cover: "http://dummyimage.com/148x127.png/ff4444/ffffff",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    duration: 1935,
    contentRating: "R",
    source: "http://wikimedia.org/curabitur.json",
    tags: [
      "Drama",
      "Action|Adventure|Fantasy|Mystery",
      "Comedy|Drama",
      "Drama|Romance",
    ],
  },
  {
    id: "a8b5eab2-738e-42e2-bf11-7662db1a9ba8",
    title: "Victory (a.k.a. Escape to Victory)",
    year: 1993,
    cover: "http://dummyimage.com/249x222.jpg/dddddd/000000",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    duration: 1953,
    contentRating: "G",
    source: "https://hhs.gov/viverra/diam/vitae/quam.jsp",
    tags: ["Drama"],
  },
  {
    id: "ea319ee9-f7e2-4f7e-9e19-fd6edc0293d5",
    title: "Stolen Children (Ladro di bambini, Il)",
    year: 2013,
    cover: "http://dummyimage.com/190x108.jpg/cc0000/ffffff",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    duration: 2024,
    contentRating: "PG",
    source: "https://ftc.gov/tempor/convallis.xml",
    tags: ["Action|Adventure|Sci-Fi", "Documentary"],
  },
  {
    id: "76830791-76c8-490f-8906-e8d55579487f",
    title: "Secret Window",
    year: 1994,
    cover: "http://dummyimage.com/137x142.png/cc0000/ffffff",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    duration: 1951,
    contentRating: "PG",
    source: "https://sun.com/primis.xml",
    tags: [
      "Crime|Drama|Film-Noir",
      "Children|Comedy|Drama",
      "Drama",
      "Horror|Mystery|Sci-Fi",
      "Drama|Romance|War",
    ],
  },
  {
    id: "11b7d5b9-7003-44e4-9594-2d56228c5123",
    title: "Peter and Vandy",
    year: 2013,
    cover: "http://dummyimage.com/133x109.png/dddddd/000000",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    duration: 2022,
    contentRating: "G",
    source: "http://homestead.com/ipsum/primis/in/faucibus/orci/luctus.jpg",
    tags: ["Adventure|Fantasy", "Documentary|IMAX", "Drama"],
  },
  {
    id: "15e4fe8b-8528-4385-9780-1b549dba894f",
    title: "Eddie",
    year: 2009,
    cover: "http://dummyimage.com/217x130.jpg/ff4444/ffffff",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.",
    duration: 1971,
    contentRating: "R",
    source:
      "https://illinois.edu/mus/vivamus/vestibulum/sagittis/sapien/cum/sociis.aspx",
    tags: ["Drama|Mystery|Romance", "Crime|Mystery", "Action|Horror"],
  },
];
module.exports = {
  moviesMock,
};
