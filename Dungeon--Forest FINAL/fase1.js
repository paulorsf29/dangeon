
var matriz = [
  ["✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱"],
  ["✱", "_", "_", "_", "_", "_", "_", "✱", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "✱", "✱", "_", "✱", "_", "✱", "_", "✱", "✱", "_", "✱", "_", "✱"],
  ["✱", "_", "_", "✱", "_", "✱", "_", "✱", "_", "✱", "_", "_", "_", "_", "✱"],
  ["✱", "_", "✱", "✱", "_", "✱", "_", "✱", "_", "✱", "_", "✱", "✱", "✱", "✱"],
  ["✱", "_", "_", "_", "_", "✱", "_", "_", "_", "✱", "_", "_", "_", "_", "✱"],
  ["✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "_", "✱"],
  ["✱", "_", "_", "_", "_", "_", "_", "_", "_", "✱", "_", "_", "_", "_", "✱"],
  ["✱", "_", "✱", "✱", "✱", "✱", "✱", "✱", "_", "✱", "✱", "✱", "✱", "_", "✱"],
  ["✱", "_", "✱", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "_", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "_", "✱"],
  ["✱", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "@̵", "✱", "_", "✱"],
  ["✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "_", "✱"],
  ["✱", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "✱"],
  ["✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "✱", "▮", "✱"],
];
var mapa = "";
var posx = 3;
var posy = 2;
var i, j
var dx = 0;
var dy = 0;

function abrirMapa1(params) {
  document.getElementById("cmcFase1").innerHTML = "";

  //Plotar Boneco
  matriz[posx][posy] = "웃"

  //Inserir Matriz no Mapa
  for (i = 0; i < 15; i++) {
    for (j = 0; j < 15; j++) {
      if (matriz[i][j] === "✱") {
        mapa += `<span style="color: rgba(5, 79, 119, 1);">✱</span>\t`
      }else if (matriz[i][j] === "▮") {
        mapa += `<span style="color: red;">▮</span>\t`
      }else if (matriz[i][j] === "_"){
        mapa += `<span style="opacity: 0;">_</span>\t`
      }else{
        mapa += matriz[i][j] + "\t";
      }
    }
    mapa += "\n";
  }
  //Plotar Mapa
  document.getElementById("fase1").innerHTML = mapa;
  //Funções do teclado
  document.addEventListener("keydown", teclaDw);
  document.addEventListener("keyup", teclaUp);
}

//Função para Redesenhar o Mapa

function desenharMapa(params) {
  mapa = "";
  for (i = 0; i < 15; i++) {
    for (j = 0; j < 15; j++) {
      if (matriz[i][j] === "✱") {
        mapa += `<span style="color: rgba(5, 79, 119, 1);">✱</span>\t`
      }else if (matriz[i][j] === "▮") {
        mapa += `<span style="color: red;">▮</span>\t`
      }else if (matriz[i][j] === "_"){
        mapa += `<span style="opacity: 0;">_</span>\t`
      }else{
        mapa += matriz[i][j] + "\t";
      }
    }
    mapa += "\n";
  }
  document.getElementById("fase1").innerHTML = mapa;
}

//Teclas Apertadas
function teclaDw(event) {
  let tecla = event.key;
  if (tecla === "a") {
    if (matriz[posx][posy - 1] != "✱" && matriz[posx][posy - 1] != "▮") {
      if (matriz[posx][posy] == matriz[11][11]) {
        matriz[posx][posy] = "@̵";
        posy -= 1;
        matriz[posx][posy] = "웃";
      } else {
        matriz[posx][posy] = "_";
        posy -= 1;
        matriz[posx][posy] = "웃";
      }

    }
  } else if (tecla === "w") {
    if (matriz[posx - 1][posy] != "✱" && matriz[posx - 1][posy] != "▮") {
      matriz[posx][posy] = "_";
      posx -= 1;
      matriz[posx][posy] = "웃"
    }
  } else if (tecla === "d") {
    if (matriz[posx][posy + 1] != "✱" && matriz[posx][posy + 1] != "▮") {
      matriz[posx][posy] = "_";
      posy += 1;
      matriz[posx][posy] = "웃"
    }

  } else if (tecla === "s") {
    if (matriz[posx + 1][posy] != "✱" && matriz[posx + 1][posy] != "▮") {
      matriz[posx][posy] = "_";
      posx += 1;
      matriz[posx][posy] = "웃";
    }
  }

  // Verificar se o boneco está na saída
  if (posx === 14 && posy === 13 && matriz[posx][posy] === "웃") {
    window.location.href = "fase2.html";
  }

  if (tecla === "i") {
    if (matriz[posx][posy] == matriz[11][11]) {
      matriz[14][13] = "▯";
    }
  }

  desenharMapa(matriz);
}

function musicaFase1on(params) {
  var fase1on 
  fase1on = document.getElementById("musica1")
  fase1on.play()
}
function musicaFase1off(params) {
  var fase1off 
  fase1off = document.getElementById("musica1")
  fase1off.pause()
}