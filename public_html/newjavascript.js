
var second_hand=document.querySelector('.second');
var min_hand=document.querySelector('.minute');
var hour_hand=document.querySelector('.hour');
function setDate(){
    
   // console.log(second_hand);
    var date=new Date();
    var min=date.getMinutes();
    var hour=date.getHours();
    var sec=date.getSeconds();
    var second_hand_deg=((sec/60)*360)+90;
    var min_hand_deg=((min/60)*360)+90;
    var hour_hand_deg=((hour/60)*360)+90;
    second_hand.style.transform='rotate('+second_hand_deg +'deg)';
    min_hand.style.transform='rotate('+min_hand_deg +'deg)';
    hour_hand.style.transform='rotate('+hour_hand_deg +'deg)';
    console.log('rotate("'+second_hand_deg +'deg")');
    
    
    
}
setInterval(setDate,1000);

