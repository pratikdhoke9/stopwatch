document.getElementById("hour").value='00'
document.getElementById("minute").value='00'
document.getElementById("second").value='00'

var audio = document.getElementById("myAudio");

function show(){
  document.getElementById('submit').style.cssText = 'background-color: red; color: white; font-size: 35px';
  document.getElementById('invalid').style.cssText = 'visibility: hidden'
  document.getElementById("submit").disabled = true;
  document.getElementById("submit").innerHTML="Started!"
  countdown()
}

function countdown(){
  hour= Number(document.getElementById("hour").value)
  minute = Number(document.getElementById("minute").value)
  second = Number(document.getElementById("second").value)
  if(minute>=60 || second>=60 || minute<0 || hour<0 || second<0){
    document.getElementById('submit').style.cssText = 'background-color: green; color: white; font-size: 35px';
    document.getElementById('invalid').style.cssText = 'color : red; visibility: visible'
    document.getElementById("submit").disabled = false;
  }
  else{
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
        document.getElementById('submit').style.cssText = 'background-color: rgb(30, 234, 64); color: white; font-size: 35px';
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
  
}
