const secondHand= document.querySelector('.second-hand');
const minsHand= document.querySelector('.min-hand');
const hourHand =document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDeegrees =((seconds/60) * 360)+90;
    secondHand.style.transform= `rotate(${secondsDeegrees}deg)`;

    const mins= now.getMinutes();
    const minsDeegrees= ((mins/60)*360)+((seconds/60)*6)+90;
    minsHand.style.transform= `rotate(${minsDeegrees}deg)`;

    const hours= now.getHours();
    const hoursDeegrees= ((hours/12)*360)+((mins/60)*30)+90;
    hourHand.style.transform= `rotate(${hoursDeegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();
