//variáveis da bola
let xBolinha = 300;
let yBolinha = 200;
let diametro =  30;
let raio = diametro / 2;
let xVelocidadeB = 6;
let yVelocidadeB = 6;
let colidiu = false;

//dimensão da raquete
let xRaquete = -5;
let yRaquete = 150;
let largura  =  20;
let altura   = 110;

//funções oponente
let xOponente = 585;
let yOponente = 150;
let velocidadeOponente;

//tamanho da tela
function setup() {
  createCanvas(600, 400);
}

//placar
let P1Pts = 0;
let P2Pts = 0;

//som
let ponto;
function preload(){
  ponto = loadSound("ponto[1].mp3");
}

//parte visual
function draw() {
  background(0);
  mostraBolinha ();
  movimentaBolinha ();
  verificaColisãoBorda ();
  mostraRaquete ();
  movimentaRaqueteP1 ();
  ColisãoRaquetes (xRaquete, yRaquete);
  ColisãoRaquetes (xOponente, yOponente);
  raqueteOponente ();
  movimentoOponente ();
  placar ();
  pontos ();
}

//bolinha
function mostraBolinha () {
  circle(xBolinha, yBolinha,  diametro);
}

//movimento da bolinha
function movimentaBolinha (){
  xBolinha += xVelocidadeB;
  yBolinha += yVelocidadeB;
}

//colisão da bolinha
function verificaColisãoBorda (){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    xVelocidadeB *= -1
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    yVelocidadeB *= -1
  }
}

//raquete
function mostraRaquete (){
  rect(xRaquete, yRaquete, largura, altura)
}

//colisão raquete-bola
function ColisãoRaquetes(x, y){
 colidiu =  collideRectCircle (x, y, largura, altura, xBolinha, yBolinha, raio);
  if (colidiu){
    xVelocidadeB *= -1
  }
}
//movimento da raquete do player
function movimentaRaqueteP1(){
 if (keyIsDown (87)){
   yRaquete -= 10
 }
 if (keyIsDown(83)){
   yRaquete += 10  
  }
}

//raquete oponente
function raqueteOponente(){
  rect(xOponente, yOponente, largura, altura)
}

//movinto raquete do oponente
function movimentoOponente (){
 if (keyIsDown (UP_ARROW)){
   yOponente -= 10
 }
 if (keyIsDown(DOWN_ARROW)){
   yOponente += 10  
  }
}

//placar tbm
function placar (){
  textAlign (CENTER)
  textSize (20)
  fill (color(79, 79, 79))
  rect (248, 10, 40, 18)
  rect (311, 10, 40, 18)
  fill(255)
  text ("-", 300, 26)
  text (P1Pts, 268, 26)
  text (P2Pts, 331, 26)
}

//pontos
function pontos (){
  if (xBolinha + raio > 599){
    P1Pts += 1
    ponto.play ();
  }
  if (xBolinha - raio < 1){
    P2Pts += 1
    ponto.play ();
  }
}
