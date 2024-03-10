const strat_rulette = {
    1: "Everyone must crouch walk in the first round, only shift walk in the second, then only jump in the third, then for one round you can move normally. Repeat this pattern for the rest of the game.",
    2: "Roll a new strat... Whe the spike is planted, roll another one.",
    3: "Angry bees! Everyone must shoot their gun empty as soon as they notice an enemy, no matter the situation.",
    4: "Mad Bunny! Bunny hop around the map with shorties only. You cannot stop hopping and all kills must be done while hopping with the shorty.",
    5: "The VIP! Designate one person as the VIP. The VIP can only use a classic and must be escorted by the rest of the team. If the VIP dies, the round is lost and you must save.",
};

const agent_rulette = {
    1: "All Duelists: Whichever you want, just make sure to pick a duelist.",
    2: "Maximum Sentinel: Cypher, Killjoy, Sage, Deadlock and Chamber.",
    3: "One of Each: A well rounded comp with one of each role.",
    4: "The Trap Setup: Cypher, Killjoy, and Sage.",
    5: "The 'You cum but she still suckin' comp: Flashes... Only flashes... nothing else.",
};

function randomNum(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateStrat(dict1, dict2){
    let strat = dict1[randomNum(1, Object.keys(dict1).length)];
    let agent = dict2[randomNum(1, Object.keys(dict2).length)];
    return [strat, agent];
}

document.getElementById('myButton').addEventListener('click', 
function(){
    let strat_picks = generateStrat(strat_rulette, agent_rulette);
    let element = document.getElementById('generatedText');
    element.innerHTML = `<p>Group Strat: ${strat_picks[0]}</p><p>Comp Strat: ${strat_picks[1]}</p>`;

});

console.log(generateStrat(strat_rulette, agent_rulette));