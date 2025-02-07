
function diceRoll(){
    const NumOfDice=document.getElementById("NumOfDice").value;
    const resultDice=document.getElementById("resultDice");
    const imageDice=document.getElementById("imageDice");
    const values=[];
    const images=[];

    for(let i=0;i<NumOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_pics/${value}.png" alt="Dice ${value}">`); /**here i have used alt in case of an error and the image is not shown, in such condition it will at least display the dice number */
    }
    resultDice.textContent=`dice: ${values.join(", ")}`;
    imageDice.innerHTML=images.join('');
}