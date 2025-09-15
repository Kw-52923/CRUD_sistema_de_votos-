/* Tema 1: Cómo programar como un ninja (15 votos)
  ├─ Enlace 1: Guía MDN (8 votos)
  └─ Enlace 2: Manual moderno (12 votos)

Tema 2: Dominar el arte de preparar café (23 votos)
  ├─ Enlace 1: Tipos de grano (17 votos)
  └─ Enlace 2: Técnicas de preparación (9 votos)*/

let topics = [
  {
    id: 1,
    title: "Cómo programar como un ninja",
    votes: 15,
    links: [
      { 
        id: 1, 
        url: "https://developer.mozilla.org/es/docs/Learn/JavaScript", 
        description: "Guía de JavaScript en MDN", 
        votes: 8 
      },
      { 
        id: 2, 
        url: "https://es.javascript.info/", 
        description: "Manual moderno de JavaScript", 
        votes: 12 
      }
    ]
  },
  {
    id: 2,
    title: "Dominar el arte de preparar café",
    votes: 23,
    links: [
      { 
        id: 1, 
        url: "https://www.comocafeto.com/tipos-de-grano-de-cafe/", 
        description: "Tipos de grano de café", 
        votes: 17 
      },
      { 
        id: 2, 
        url: "https://www.nescafe.com/es/preparar-cafe", 
        description: "Técnicas de preparación", 
        votes: 9 
      }
    ]
  }
];

module.exports = topics; // exporta la variable para que pueda ser usada en otros archivos