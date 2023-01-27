// let beepsound = new Audio('https://orangefreesounds.com/clock-alarm-electronic-beep/');   
//   beepsound.play()


var audio = document.getElementById("myAudio");
function load(){
  document.getElementById("time").value = "00:00:01";
}

function show(){
  // document.getElementById("submit").style.visibility = "hidden";
  document.getElementById('submit').style.cssText = 'background-color: red; color: white; font-size: 35px';
  document.getElementById("submit").disabled = true;
  time = document.getElementById("time").value.split(':');
  countdown(time)
}

function countdown(time){
  hour= Number(time[0]),minute = Number(time[1]),second = Number(time[2])

  myInterval = setInterval(function(){
      
      if(hour!=0 || minute!=0 || second!=0){
        
        if(second==0 && minute>0){
          minute--;
          second = 60;
        }
        else if(second==0 && hour>0){
          hour--
          minute=59
          second=60
        }
        
        element = document.getElementById('screen')
        element.innerHTML = ((hour<10)?("0"+hour):hour)
            +":"+((minute<10)?"0"+minute:minute)
            +":"+((second<10)?("0"+second):second)
        second--
      }
      else{
        document.getElementById('submit').style.cssText = 'background-color: green; color: white; font-size: 35px';
        element = document.getElementById('screen')
        element.innerHTML = "00:00:00"
        
        element.innerHTML = "Time out!"
        document.getElementById("submit").innerHTML="Set again!"
        audio.play()
        clearInterval(myInterval)
        document.getElementById("submit").disabled = false;
      }
    }, 1000);
    
  
}
