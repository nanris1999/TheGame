let bossHp = 100;
let gold = 0;
let level = 1;
let playerDamage = 2;
let cost = 10;

const hpText = document.getElementById("bossHp");
const buttonAtk = document.getElementById("hitButton");
const goldText = document.getElementById("goldScreen");
const levelText = document.getElementById("levelScreen");
const pDamage = document.getElementById("PlayerDamageScreen");
const buttonUpgDmg = document.getElementById("upgradeDamage");
const costText = document.getElementById("costTextScreen");
const bossSprite = document.getElementById("bossSprite");


buttonAtk.onclick = function (){
    bossSprite.classList.add("attack");
    setTimeout(() => {
        bossSprite.classList.remove("attack");
    }, 100);
    bossHp -= playerDamage;
    gold += 1;
    if (bossHp <= 0) {
    gold += 25;
    level += 1;
    bossHp = level * 100;
     if (level === 2) {
        bossSprite.src = "sprite/Boss02.png";
     } else if (level === 3){
        bossSprite.src = "sprite/Boss03.png";
     }else if (level === 4){
        bossSprite.src = "sprite/Boss04.png";
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