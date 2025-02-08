function onRoll(){
    const dices=document.getElementById("dices").value;
    const result=document.getElementById("result");
    const imgresult=document.getElementById("imgresult");
    const answers=[];
    const pictures=[];

    for(let i=0; i<dices; i++){
        const answer=Math.floor(Math.random()*6)+1;
        answers.push(answer);
        pictures.push(`<img src="dice_pics/${answer}.png" alt="Dice ${answer}">`)
    }
    result.textContent=`NUMBER: ${answers.join(", ")}`;
    imgresult.innerHTML=pictures.join('');
}