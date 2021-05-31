var heroPoints=100;
var enemyPoints=100;
var heroAttackPoints=10;
var enemyAttackPoints=10;
display()

function display(){
    document.getElementById("hero-points").innerHTML=`<b>Hero Points:</b> ${heroPoints}`;
    document.getElementById("enemy-points").innerHTML=`<b>Enemy Points:</b> ${enemyPoints}`;
    document.getElementById(`status`).innerHTML=`<h2><super>Playing ...</super></h2>`
}

function heroAttack(){
    var newEnemyPoints= enemyPoints-heroAttackPoints;
    enemyPoints=newEnemyPoints;
    display();
    if(enemyPoints<=0){
        document.getElementById(`enemy-attack-btn`).style.display="none";
        document.getElementById(`hero-attack-btn`).style.display="none";
        document.getElementById(`status`).innerHTML=`<h2>GAME OVER ... </h2><button onclick="restart()"> Restart </button>`;
        }
}
function enemyAttack(){
    var newHeroPoints= heroPoints-enemyAttackPoints;
    heroPoints=newHeroPoints;
    display();
    if(heroPoints<=0){
        document.getElementById(`hero-attack-btn`).style.display="none";
        document.getElementById(`enemy-attack-btn`).style.display="none";
        document.getElementById(`status`).innerHTML=`<h1>GAME OVER ... </h2><button //onclick="restart()"> Restart </button>`;
        }
}
function restart(){
    heroPoints=100;
    enemyPoints=100
    display();
    document.getElementById(`enemy-attack-btn`).style.display="block";
    document.getElementById(`hero-attack-btn`).style.display="block";
}