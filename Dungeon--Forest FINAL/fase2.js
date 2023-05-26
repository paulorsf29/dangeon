var matriz = [
  //  0    1    2    3    4    5    6    7    8    9   10    11   12   13   14  15  16   17   18   19    20  21   22   23   24   25   26    27  28    29
  ["✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱"],
  ["✱", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "_", "_", "_", "_", "✱", "_", "_", "_", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "_", "_", "_", "_", "✱", "_", "_", "_", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "_", "✱", "_", "_", "✱", "_", "_", "_", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "_", "_", "_", "_", "_", "_", "_", "", "_", "_", "✱", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "_", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "_", "_", "_", "_", "_", "_", "_", "", "_", "_", "✱", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "✱", "✱", "✱", "✱", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "_", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "_", "_", "_", "_", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "⧼#⧽", "_", "_", "_", "_", "✱", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "⧼#⧽", " ", "⧼#⧽", "_", "_", "✱", "✱", "✱", "⧼#⧽", "_", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "_", "✱", "✱", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "⧼#⧽", "_", "⧼#⧽", "", "_", "_", "_", "⧼#⧽", "_", "@̵", "_", "_", "_", "_", "_", "_", "⧼#⧽", "_", "_", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "_", "_", "_", "⧼#⧽", "_", "_", "_", "⧼#⧽", "_", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "", "_", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "_", "_", "_", "_", "✱", "✱", "_", "⧼#⧽", "_", "_", "_", "_", "⧼#⧽", "▮", "⧼#⧽", "_", "⧼#⧽", "✱", "✱", "✱", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "⧼#⧽", "⧼#⧽", "_", "_", "_", "_", "_", "✱", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "⧼#⧽", "_", "_", "_", "_", "✱", "_", "⧼#⧽", "_", "_", "_", "⧼#⧽", "_", "_", "_", "_", "⧼#⧽", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "_", "⧼#⧽", "_", "_", "_", "✱", "_", "_", "_", "⧼#⧽", "_", "_", "_", "_", "⧼#⧽", "_", "_", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "_", "_", "⧼#⧽", "_", "_", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "_", "_", "_", "⧼#⧽", "_", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "_", "_", "_", "_", "✱", "✱", "✱", "✱", "_", "✱"],
  ["✱", "_", "_", "_", "_", "_", "_", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "_", "_", "_", "_", "✱", "O", "_", "✱", "_", "✱"],
  ["✱", "_", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "✱", "_", "⧼#⧽", "✱", "_", "✱"],
  ["✱", "_", "_", "▮", "_", "_", "▮", "_", "⧼#⧽", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "✱", "_", "_", "✱", "_", "✱"],
  ["✱", "_", "_", "✱", "_", "_", "✱", "_", "⧼#⧽", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "_", "_", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "✱", "⧼#⧽", "_", "✱", "_", "✱"],
  ["✱", "_", "_", "✱", "_", "⧼#⧽", "✱", "_", "⧼#⧽", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "_", "_", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "✱", "_", "_", "✱", "_", "✱"],
  ["✱", "_", "⧼#⧽", "✱", "_", "_", "✱", "_", "⧼#⧽", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "_", "_", "_", "_", "_", "_", "_", "_", "✱", "_", "⧼#⧽", "✱", "_", "✱"],
  ["✱", "_", "_", "✱", "⧼#⧽", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "_", "_", "_", "✱", "_", "_", "_", "_", "✱"],
  ["✱", "⧼#⧽", "_", "✱", "_", "_", "✱", "_", "⧼#⧽", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "_", "_", "_", "✱", "✱", "✱", "✱", "_", "✱"],
  ["✱", "_", "_", "✱", "_", "⧼#⧽", "✱", "_", "⧼#⧽", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "_", "_", "_", "_", "✱"],
  ["✱", "@̵", "⧼#⧽", "✱", "_", "_", "✱", "_", "⧼#⧽", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "_", "_", "_", "_", "✱"],
  ["✱", "⧼#⧽", "_", "✱", "⧼#⧽", "O", "✱", "_", "⧼#⧽", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "⧼#⧽", "⧼#⧽", "⧼#⧽", "_", "_", "_", "_", "_", "✱"],
  ["✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "▮", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱"],
];
var mapa = "";
var posx = 1;
var posy = 1;
var i, j
var dx = 0;
var dy = 0;
var contador_vida = 0

function abrirMapa2(params) {
  document.getElementById("cmcFase2").innerHTML = "";

  //Plotar Boneco
  matriz[posx][posy] = "웃"

  //Inserir Matriz no Mapa
  for (i = 0; i < 30; i++) {
    for (j = 0; j < 30; j++) {
      if (matriz[i][j] === "✱") {
        mapa += `<span style="color: yellow;">✱</span>\t`
      }else if (matriz[i][j] === "▮") {
        mapa += `<span style="color: red;">▮</span>\t`
      }else if (matriz[i][j] === "⧼#⧽") {
        mapa += `<span style="color: gray;">⧼#⧽</span>\t`
      }else if (matriz[i][j] === "▯") {
        mapa += `<span style="color: green">▯</span>\t`
      }else if (matriz[i][j] === "_"){
        mapa += `<span style="opacity: 0;">_</span>\t`
      }else{
        mapa += matriz[i][j] + "\t";
      }
    }
    mapa += "\n";
  }
  document.getElementById('vidas').innerText = 5 - contador_vida
  //Plotar Mapa
  document.getElementById("fase2").innerHTML = mapa;
  //Funções do teclado
  document.addEventListener("keydown", teclaDw);
  document.addEventListener("keyup", teclaUp);
}

//Função para Redesenhar o Mapa
function desenharMapa(params) {
  mapa = "";
  for (i = 0; i < 30; i++) {
    for (j = 0; j < 30; j++) {
      if (matriz[i][j] === "✱") {
        mapa += `<span style="color: yellow;">✱</span>\t`
      }else if (matriz[i][j] === "▮") {
        mapa += `<span style="color: red;">▮</span>\t`
      }else if (matriz[i][j] === "⧼#⧽") {
        mapa += `<span style="color: gray;">⧼#⧽</span>\t`
      }else if (matriz[i][j] === "▯") {
        mapa += `<span style="color: green">▯</span>\t`
      }else if (matriz[i][j] === "_"){
        mapa += `<span style="opacity: 0;">_</span>\t`
      }else{
        mapa += matriz[i][j] + "\t";
      }
    }
    mapa += "\n";
  }
  document.getElementById('vidas').innerText = 5 - contador_vida
  document.getElementById("fase2").innerHTML = mapa;
}

//Teclas Apertadas
function teclaDw(event) {
  let tecla = event.key;
  // ESQUERDA
  if (tecla === "a") {
    // ESPINHOS A ESQUERDA
    if (matriz[posx][posy - 1] == "⧼#⧽") {
      matriz[posx][posy] = "_"
      posx = 1
      posy = 1
      matriz[posx][posy] = "웃"
      contador_vida += 1
    }
    if (matriz[posx][posy] == matriz[20][6]) {
      matriz[posx][posy] = "▯";
      posy -= 1;
      matriz[posx][posy] = "웃"
    }
    else if (matriz[posx][posy] == matriz[28][5]) {
      matriz[posx][posy] = "O";
      posy -= 1;
      matriz[posx][posy] = "웃"
    }
    else if (matriz[posx][posy] == matriz[20][3]) {
      matriz[posx][posy] = "▯";
      posy -= 1;
      matriz[posx][posy] = "웃"
    }
    else if (matriz[posx][posy] == matriz[10][12]) {
      matriz[posx][posy] = "@̵";
      posy -= 1;
      matriz[posx][posy] = "웃"
    }
    // IMPEDIMENTO A ESQUERDA
    else if (matriz[posx][posy - 1] != "✱" && matriz[posx][posy - 1] != "▮") {
      matriz[posx][posy] = "_";
      posy -= 1;
      matriz[posx][posy] = "웃"
    }
    // CIMA
  } else if (tecla === "w") {
    // ESPINHOS A CIMA
    if (matriz[posx - 1][posy] == "⧼#⧽") {
      matriz[posx][posy] = "_"
      posx = 1
      posy = 1
      matriz[posx][posy] = "웃"
      contador_vida += 1
    }
    if (matriz[posx - 1][posy] == "⧼🔥⧽") {
      matriz[posx][posy] = " "
      posx = 23
      posy = 20
      matriz[posx][posy] = "웃"
      contador_vida += 1
    }
    else if (matriz[posx][posy] == matriz[28][5]) {
      matriz[posx][posy] = "O";
      posx -= 1;
      matriz[posx][posy] = "웃"
    }
    else if (matriz[posx][posy] == matriz[27][1]) {
      matriz[posx][posy] = "@̵";
      posx -= 1;
      matriz[posx][posy] = "웃"
    }
    else if (matriz[posx][posy] == matriz[12][16]) {
      matriz[posx][posy] = "▯";
      posx -= 1;
      matriz[posx][posy] = "웃"
    }
    else if (matriz[posx][posy] == matriz[10][12]) {
      matriz[posx][posy] = "@̵";
      posx -= 1;
      matriz[posx][posy] = "웃"
    }
    // IMPEDIMENTO EM CIMA
    else if (matriz[posx - 1][posy] != "✱" && matriz[posx - 1][posy] != "▮") {
      matriz[posx][posy] = "_";
      posx -= 1;
      matriz[posx][posy] = "웃"
    }
    // DIREITA
  } else if (tecla === "d") {
    // ESPINHOS A DIREITA
    if (matriz[posx][posy + 1] == "⧼#⧽") {
      matriz[posx][posy] = "_"
      posx = 1
      posy = 1
      matriz[posx][posy] = "웃"
      contador_vida += 1
    }
    // RECOLOCAR PRIMEIRO BOTAO
    else if (matriz[posx][posy] == matriz[18][25]) {
      matriz[posx][posy] = "O";
      posy += 1;
      matriz[posx][posy] = "웃"
    }
    else if (matriz[posx][posy] == matriz[20][6]) {
      matriz[posx][posy] = "▯";
      posy += 1;
      matriz[posx][posy] = "웃"
    }
    // RECOLOCAR SEGUNDO BOTÃO
    else if (matriz[posx][posy] == matriz[20][3]) {
      matriz[posx][posy] = "▯";
      posy += 1;
      matriz[posx][posy] = "웃"
    }
    else if (matriz[posx][posy] == matriz[10][12]) {
      matriz[posx][posy] = "@̵";
      posy += 1;
      matriz[posx][posy] = "웃"
    }
    // IMPEDIMENTOS A DIREITA
    else if (matriz[posx][posy + 1] != "✱" && matriz[posx][posy + 1] != "▮") {
      matriz[posx][posy] = "_";
      posy += 1;
      matriz[posx][posy] = "웃"
    }
    // BAIXO
  } else if (tecla === "s") {
    // ESPINHOS EM BAIXO
    if (matriz[posx + 1][posy] == "⧼#⧽") {
      matriz[posx][posy] = "_"
      posx = 1
      posy = 1
      matriz[posx][posy] = "웃"
      contador_vida += 1
    }
    else if (matriz[posx][posy] == matriz[12][16]) {
      matriz[posx][posy] = "▯";
      posx += 1;
      matriz[posx][posy] = "웃";
    }
    else if (matriz[posx][posy] == matriz[10][12]) {
      matriz[posx][posy] = "@̵";
      posx += 1;
      matriz[posx][posy] = "웃";
    }
    else if (matriz[posx][posy] == matriz[18][25]) {
      matriz[posx][posy] = "O";
      posx += 1;
      matriz[posx][posy] = "웃";
    }
    // IMPEDIMENTOS EM BAIXO
    else if (matriz[posx + 1][posy] != "✱" && matriz[posx + 1][posy] != "▮") {
      matriz[posx][posy] = "_";
      posx += 1;
      matriz[posx][posy] = "웃";
    }
  }
  // Game Over

  if (contador_vida == 5) {
    window.location.href = "game_over.html";
  }
  //Ativar primeiro botão
  if (posx === 18 && posy === 25 && matriz[posx][posy] === "웃") {
    matriz[20][6] = "▯";
  }
  // Ativar segundo botão
  if (posx === 28 && posy === 5 && matriz[posx][posy] === "웃") {
    matriz[20][3] = "▯"
  }
  if (tecla === "i") {
    if (matriz[posx][posy] == matriz[27][1]) {
      matriz[12][16] = "▯";
    }
    else if (matriz[posx][posy] == matriz[10][12]) {
      matriz[29][14] = "▯";
    }
  }

  // Verificar se o boneco está na saída
  if (posx === 29 && posy === 14 && matriz[posx][posy] === "웃") {
    window.location.href = "fase3.html";
  }
  desenharMapa(matriz);
}

function musicafase2on(params) {
  var fase2on 
  fase2on = document.getElementById("musica1")
  fase2on.play()
}
function musicafase2off(params) {
  var fase2off 
  fase2off = document.getElementById("musica1")
  fase2off.pause()
}