
    const mario = document.querySelector('.mario');
    const score = document.querySelector('.score');
    const pipe = document.querySelector('.pipe');


let count = 0;


 /* Função para o mario pular, tecla especifica
   "seta" e "Espaço" */
document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  } else {
    alert('Clicou tecla errada, aperte F5 para reiniciar!');
  }

});

function jump() {

    mario.classList.add("jump");
    setTimeout(()=>{
        mario.classList.remove("jump");
    },600);


} 
  

    
    /* Função para o fim do jogo quando mario bate tubo */

const loop = setInterval(() => {
    console.log('loop')
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
        
        console.log(marioPosition);
        /* 1 condições: se o mario ao andar e tive a 120 ou igual a distancia do tubo acaba o jogo*/

        /* 2 condição é se o mario pulou o tunel é passou, e deslocamento do tubo for maior que zero  o mario passou do tubo  */

        /* 3 condição se altura do mario for menor que 80 ele bate no tubo e acaba o jogo */
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
          alert(`Game Over! Seu score foi: ${count}`);
          count = 0;
          
            pipe.style.animation = 'none';
            pipe.style.left = '${pipePosition}px';

            mario.style.animation = 'none';
            mario.style.bottom = '${marioPosition}px';

            mario.src ='imagens/game-over.png';
            mario.style.width='75px';
            mario.style.marginLeft ='50px';

            clearInterval(loop);
           
        }


  count++;
  score.innerHTML = `SCORE: ${count}`;
    }, 10);   
    document.addEventListener('keydown', jump);


