let bossHp = 100;
let gold = 0;
let level = 1;
let playerDamage = 2;
let cost = 10;
let critChance = 0.1;
let critMultiplier = 2;


const hpText = document.getElementById("bossHp");
const buttonAtk = document.getElementById("hitButton");
const goldText = document.getElementById("goldScreen");
const levelText = document.getElementById("levelScreen");
const pDamage = document.getElementById("PlayerDamageScreen");
const buttonUpgDmg = document.getElementById("upgradeDamage");
const costText = document.getElementById("costTextScreen");
const bossSprite = document.getElementById("bossSprite");
const bgMusic = document.getElementById("bgMusic");
const attackSound = new Audio("sound/attack.mp3");
attackSound.volume = 0.5;
const dSound = new Audio("sound/deathsound.mp3");
dSound.volume = 0.5;
const upSound = new Audio("sound/upgradesound.mp3");
upSound.volume = 0.9;
const critSound = new Audio("sound/critsound.mp3");
critSound.volume = 0.5;
let critText = document.getElementById("critText");



document.addEventListener("click", function startMusic() {
    bgMusic.volume = 0.2;
    bgMusic.play();
    document.removeEventListener("click", startMusic);
});


buttonAtk.onclick = function (){
    bossSprite.classList.add("attack");
    setTimeout(() => {
        bossSprite.classList.remove("attack");
    }, 100);

    attackSound.currentTime = 0;
    attackSound.play();
    
    let damage = playerDamage;

     if(Math.random()< critChance) {

        damage = damage * critMultiplier;
        
        critSound.currentTime = 0;
        critSound.play();

        critText.innerText = "CRITICAL!";

        setTimeout(()=>{
            critText.innerText = "";
        },500);
     }

    bossHp -= damage;
    gold += 1;


    if (bossHp <= 0) {

    dSound.currentTime = 0;
    dSound.play();

    gold += 25;
    level += 1;
    bossHp = level * 100;
     if (level === 2) {
        bossSprite.src = "sprite/Boss02.png";
     } else if (level === 3){
        bossSprite.src = "sprite/Boss03.png";
     }else if (level === 4){
        bossSprite.src = "sprite/Boss04.png";
     }else if (level === 5){
        bossSprite.src = "sprite/Boss05.png";
     }else if (level === 6){
        bossSprite.src = "sprite/Boss06.png";
     }else if (level === 7){
        bossSprite.src = "sprite/Boss07.png";
     }else if (level === 8){
        bossSprite.src = "sprite/Boss08.png";
     }else if (level === 9){
        bossSprite.src = "sprite/Boss09.png";
     }else if (level === 10){
        bossSprite.src = "sprite/Boss10.png";
     }else {
        bossSprite.src = "sprite/Boss01.png";
     }
    }
    updateScreens ()
};

buttonUpgDmg.onclick = function (){
    if (gold >= cost) {
    playerDamage += 2;
    gold -= cost;
    cost += 25;
    
    upSound.currentTime = 0;
    upSound.play();

    updateScreens ()
    }
    
};

function updateScreens () {
    hpText.textContent = bossHp;
    goldText.textContent = gold;
    levelText.textContent = level;
    pDamage.textContent = playerDamage;
    costText.textContent = cost;
}