function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const DiceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];


    for(let i = 0;i<numOfDice;i++){
        const value = Math.floor(Math.random() *6);+1;
        values.push(value);
        images.push(`<img scr="dice_images/${value}.png" alt="Dice ${value}">`);
    }
    DiceResult.textContent = `dice:${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}