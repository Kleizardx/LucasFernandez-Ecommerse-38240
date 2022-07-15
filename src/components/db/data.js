const productos = [
     {
       id: 1,
       nombre: 'Apex', 
       precio: 240, 
       categoria: "Shooter", 
       thumbnailUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1657217209"
     }, 
     {
       id: 2, 
       nombre: "Blasphemous", 
       precio: 420, 
       categoria: "Rogue Like", 
       thumbnailUrl: "https://cdn.akamai.steamstatic.com/steam/apps/774361/header.jpg?t=1657296753"
     }, 
     {
       id: 3, 
       nombre: "Dead Cells", 
       precio: 569, 
       categoria: "Metroidvania", 
       thumbnailUrl: "https://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg?t=1656004389"
     },
     {
       id: 4, 
       nombre: "Outlast", 
       precio: 323, 
       categoria: "Terror", 
       thumbnailUrl: "https://cdn.akamai.steamstatic.com/steam/apps/238320/header.jpg?t=1618944230"
     },
     {
       id: 5, 
       nombre: "State of Decay 2", 
       precio: 587, 
       categoria: "Accion RPG", 
       thumbnailUrl: "https://cdn.akamai.steamstatic.com/steam/apps/329430/header.jpg?t=1586275737"
     },
     {
       id: 6, 
       nombre: "The Witcher", 
       precio: 533, 
       categoria: "RPG", 
       thumbnailUrl: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg?t=1646996408"
     },
     {
       id: 7, 
       nombre: "Dark Souls III", 
       precio: 342, 
       categoria: "RPG Accion", 
       thumbnailUrl: "https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg?t=1653584490"
     },
     {
       id: 8, 
       nombre: "Deadth's Door", 
       precio: 125, 
       categoria: "Metroidvania", 
       thumbnailUrl: "https://cdn.akamai.steamstatic.com/steam/apps/894020/header.jpg?t=1648756013"
     }
   ]
   
   export const getProductos = () => { 
     return new Promise (resolve => {
       setTimeout (() => {
         resolve(productos)
       }, 2000)
     })
   } 

   export const getProductosById = (id) => { 
    return new Promise (resolve => {
      setTimeout (() => {
        resolve(productos.find(prod => prod.id === id))
      }, 2000)
    })
  }  