let hours = 0;
let mins = 0;
let secs = 0
function clock()
{
    const date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
 
    let meridian;
    if(hours>=12)
    {
        meridian = "PM"
        hours-=12
    }
    else
    {
        meridian = "AM"
    }
    if(hours<10)
    {
        hours = "0" + hours;
    }
    else
    {
         hours;
    }
    if(mins<10)
    {
        mins = "0" + mins;
    }
    else
    {
        mins;
    }
    if(secs<10)
    {
        secs = "0" + secs;
    }
    
    // if(hours >= 20 && mins >= 0 && secs >= 1)
    // {
    //     document.getElementById('gm').innerHTML = "GOOD NIGHT!!!";
    // }
    // else if(hours >= 16 && mins >= 0 && secs >= 1)
    // {
    //     document.getElementById('gm').innerHTML = "GOOD EVENING!!!"
    // }
    // else if(hours >= 12 && mins >= 0 && secs >= 1)
    // {
    //     document.getElementById('gm').innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP"
    // }
    // else if(hours >= 10 && mins >= 0 && secs >= 1)
    // {   
    //     document.getElementById('gm').innerHTML = "GOOD MORNING!! WAKE UP!!"
    // }

    document.getElementsByClassName('hrs')[0].innerHTML=hours + "\nhours";
    document.getElementsByClassName('mins')[0].innerHTML=mins + "\nmins";
    document.getElementsByClassName('secs')[0].innerHTML=secs + "\nsecs";
    document.getElementsByClassName('meridian')[0].innerHTML=meridian;
}
setInterval(() => {
   clock() 
}, 1000);

function setalarm()
{    
    let wake = document.getElementById("morning_time").value;
    if(wake == hours)
    {
        document.getElementById('image').src = "./morning.jpg";
        document.getElementById('breakfast').innerHTML = "GRAB SOME HEALTHY BREAKFAST";
    }
    let lunch = document.getElementById("lunch_time").value;
    if(lunch == hours)
    {
        document.getElementById('image').src = "./afternoon.jpg";
        document.getElementById('breakfast').innerHTML = "LET'S HAVE SOME LUNCH";
    }
    let tea = document.getElementById("nap_time").value;
    if(tea == hours)
    {
        document.getElementById('image').src = "./evening.jpg";
        document.getElementById('breakfast').innerHTML = "STOP YAMING, GET SOME TEA ITS JUST EVENING";
    }

    let nap = document.getElementById("night_time").value;
    if(nap == hours)
    {
        document.getElementById('image').src = "./night.jpg";
        document.getElementById('breakfast').innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    }
    
    document.getElementsByClassName("addtext")[0].innerHTML =
      "Wake up time : " + morning_time.options[morning_time.selectedIndex].text;
    document.getElementsByClassName("addtext")[1].innerHTML =
      "Lunch time : " + lunch_time.options[lunch_time.selectedIndex].text;
    document.getElementsByClassName("addtext")[2].innerHTML =
      "Nap time : " + nap_time.options[nap_time.selectedIndex].text;
    document.getElementsByClassName("addtext")[3].innerHTML =
      "Night time : " + night_time.options[night_time.selectedIndex].text;
}
