if (tecla === "a") {
    
    if (matriz[posx - 22][posy - 19] == "⧼🔥⧽") {
      matriz[posx][posy] = " "
      posx = 22
      posy = 19
      matriz[posx][posy] = "웃"
      contador_vida += 1
    }
} else if (tecla === "w") {
    
    if (matriz[posx - 1][posy] == "⧼🔥⧽") {
      matriz[posx][posy] = " "
      posx = 23
      posy = 20
      matriz[posx][posy] = "웃"
      contador_vida += 1
    }
} else if (tecla === "d") {
    
    if (matriz[posx][posy + 1] == "⧼🔥⧽") {
      matriz[posx][posy] = " "
      posx = 22
      posy = 17
      matriz[posx][posy] = "웃"
      contador_vida += 1
    }
} else if (tecla === "s") {
    
    if (matriz[posx + 1][posy] == "⧼🔥⧽") {
      matriz[posx][posy] = " "
      posx = 20
      posy = 19
      matriz[posx][posy] = "웃"
      contador_vida += 1
    }
    if (tecla === "a") {
    
        if (matriz[posx - 5][posy - 8] == "⧼🔥⧽") {
          matriz[posx][posy] = " "
          posx = 6
          posy = 9
          matriz[posx][posy] = "웃"
          contador_vida += 1
        }
    } else if (tecla === "w") {
    
        if (matriz[posx - 5][posy - 8] == "⧼🔥⧽") {
          matriz[posx][posy] = " "
          posx = 8
          posy = 6
          matriz[posx][posy] = "웃"
          contador_vida += 1
        }
    } else if (tecla === "d") {
    
        if (matriz[posx - 5][posy - 8] == "⧼🔥⧽") {
          matriz[posx][posy] = " "
          posx = 5
          posy = 7
          matriz[posx][posy] = "웃"
          contador_vida += 1
        }
    } else if (tecla === "s") {
    
        if (matriz[posx - 5][posy - 8] == "⧼🔥⧽") {
          matriz[posx][posy] = " "
          posx = 4
          posy = 8
          matriz[posx][posy] = "웃"
          contador_vida += 1
        }
        

}
}
    
    