const productos = [
  {
    id: '1',
    title: 'Apex', 
    price: 240, 
    category: "shooter", 
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1657217209",
    stock: 25,
    description: "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale."
  }, 
  {
    id: '2', 
    title: "Blasphemous", 
    price: 420, 
    category: "rogue like", 
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/774361/header.jpg?t=1657296753",
    stock: 15,
    description: "Blasphemous is a free-to-play, roguelike game where you play as a rogue, a master of stealth and deception, and a master of deception and stealth. Explore the world of Blasphemous, a dark, mysterious world where you must find the right items to survive, and defeat the enemies that lurk in the shadows."
  }, 
  {
    id: '3', 
    title: "Dead Cells", 
    price: 569, 
    category: "metroidvania", 
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg?t=1656004389",
    stock: 10,
    description: "Dead Cells is a free-to-play Metroidvania game where you play as a cyborg, a master of technology and a master of technology and cyborg. Explore the world of Dead Cells, a dark, mysterious world where you must find the right items to survive, and defeat the enemies that lurk in the shadows."
  },
  {
    id: '4', 
    title: "Outlast", 
    price: 323, 
    category: "terror", 
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/238320/header.jpg?t=1618944230",
    stock: 20,
    description: "Outlast is a free-to-play, first-person shooter game where you play as a soldier, a master of strategy and tactics, and a master of strategy and tactics. Explore the world of Outlast, a dark, mysterious world where you must find the right items to survive, and defeat the enemies that lurk in the shadows."
  },
  {
    id: '5', 
    title: "State of Decay 2", 
    price: 587, 
    category: "accion rpg", 
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/329430/header.jpg?t=1586275737",
    stock: 15,
    description: "State of   Decay   2   is   a   free-to-play,   first-person   shooter   game   where   you   play   as   a   soldier,   a   master   of   strategy   and   tactics,   and   a   master   of   strategy   and   tactics.   Explore   the   world   of   State   of   Decay   2,   a   dark,   mysterious   world   where   you   must   find   the   right   items   to   survive,   and   defeat   the   enemies   that   lurk   in   the   shadows."
  },
  {
    id: '6', 
    title: "The Witcher III", 
    price: 533, 
    category: "rpg", 
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1646996408",
    stock: 35,
    description: "The Witcher 3: Wild Hunt is a free-to-play, open world, role-playing game developed and published by CD Projekt RED and published by CD Projekt GmbH. It is the third installment in the The Witcher series and was released on 25 September 2015 for Microsoft Windows, PlayStation 4, and Xbox One. The game is based on the graphic novel The Witcher by Andrzej Sapkowski."
  },
  {
    id: '7',
    title: "Dark Souls III", 
    price: 342, 
    category: "SOULS", 
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg?t=1653584490",
    stock: 25,
    description: "Dark Souls is a free-to-play, open world, role-playing game developed and published by FromSoftware and published by Bandai Namco Games. It is the second installment in the Souls series and was released on June 14, 2013 for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, and Xbox One. The game is based on the graphic novel The Witcher by Andrzej Sapkowski."
  },
  {
    id: '8',
    title: "Deadth's Door", 
    price: 125, 
    category: "metroidvania", 
    thumbnail: "https://cdn.akamai.steamstatic.com/steam/apps/894020/header.jpg?t=1648756013",
    stock: 15,
    description: "Death's Door is a free-to-play Metroidvania game where you play as a cyborg, a master of technology and a master of technology and cyborg. Explore the world of Dead Cells, a dark, mysterious world where you must find the right items to survive, and defeat the enemies that lurk in the shadows."
  }
]

const categories = [
  {id: 'shooter', description: 'Shooter'},
  {id: 'rogue like', description: 'Rogue Like'},
  {id: 'metroidvania', description: 'Metroidvania'},
  {id: 'terror', description: 'Terror'},
  {id: 'accion rpg', description: 'Accion RPG'},
  {id: 'rpg', description: 'RPG'},
  {id: 'SOULS', description: 'SOULS'}
]

export const getCategories = () => {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(categories)
      }, 500)
  })
}
export const getProductos = (categoryId) => { 
  return new Promise (resolve => {
    setTimeout (() => {
      resolve(categoryId ? productos.filter(prod => prod.category === categoryId) : productos)
    }, 500)
  })
}
export const getProductosById = (id) => { 
  return new Promise (resolve => {
    setTimeout (() => {
      resolve(productos.find(prod => prod.id === id))
    }, 500)
  })
}