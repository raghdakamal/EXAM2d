//////////////////////////////////Q1 ToDo List////////////////////////////////////////////////////////////////
var itemName=document.getElementById("newItem");
var showList=document.getElementById("showList");

var items=[];
//first function called on load of window(when i refresh browser)
window.onload=function(){
    //get data from local storage
    //using parse to convert from string to array
    items=JSON.parse(localStorage.getItem('items'));//first time will be null
    
    if(items!==null)
	{
        displayData();
    }
    else
    {
        items=[];
    }
   
}


function add(){
    var item={
        name:itemName.value
    };
    items.push(item);
    //using stringfy to convert array to string 
    localStorage.setItem("items",JSON.stringify(items));//set sites array as string in local storage 
    addDisplayData();
    clearForm()
 
}
function addDisplayData()
{
    var trs="";
    for(var i=0;i<items.length;i++){
   trs="<div id='toDoItem"+i+"' class='col-md-12 col-lg-offset-2 toDoList' onClick='changeStyle(this);'>"+items[i].name+" <span class='xButton' onclick='deleteItem("+i+")'>x</span></div>";
}
    showList.innerHTML+=trs;

}


function displayData()
{
    var trs="";
    for(var i=0;i<items.length;i++){
   trs+="<div id='toDoItem"+i+"' class='col-md-12 col-lg-offset-2 toDoList' onClick='changeStyle(this);'>"+items[i].name+" <span class='xButton' onclick='deleteItem("+i+")'>x</span></div>";
}
    showList.innerHTML=trs;

}

function changeStyle(elem){
	var currId=$(elem).attr("id");
	$("#"+currId).toggleClass("doneStyle");
	
}

function deleteItem(id){
    // remove from item array
    items.splice(id, 1); 
    //using stringfy to convert array to string 
    localStorage.setItem("items",JSON.stringify(items));//set items array as string in local storage 
    $("#toDoItem"+id).remove();
 
}


/////////////////////////////////////Q2 Change backgroundColor Frequency////////////////////////////////////


var x = $("#myAudio")[0];
function animateBG(){
		$("#secondDiv").addClass("newClass2");
	x.loop = true;
	x.play(); 
	}
	function animateBGstop(){
		$("#secondDiv").removeClass("newClass2");
		x.pause();
	}




///////////////////////////Digital Clock///////////////////////////////////////////////////////////////////////////
var d=document.getElementById("d");
    h=document.getElementById("h"),
    m=document.getElementById("m"),
    s=document.getElementById("s");
   
function showTime()
{
    
        var time =new Date(),
            days =time.getDay();
            hours =time.getHours();
            minutes =time.getMinutes(),
            seconds=time.getSeconds();
           
    
    if(hours > 12)
        {
           type = "PM";
            hours -=12;
        }
    else
        {
            type = "AM"; 
        }
   if (hours < 10)
        {
            hours ="0" + hours;
        }
    if (minutes < 10)
        {
            minutes ="0" + minutes;
        }
    
    if (seconds < 10)
        {
           seconds ="0" + seconds;
        }
             d.innerText =days,
             h.innerText =hours,
             m.innerText =minutes,
             s.innerText =seconds;
            
    
     setTimeout(showTime ,1000);
}
   showTime();
//////////////////////////////////////////Q4 (ChangeBackground color)///////////////////////////

 $(".letter1").hover(function(){
    $(".Q4").css("backgroundColor", "#ff7a36");
    }, function(){
    $(this).css("color", "white");
  });
$(".letter2").hover(function(){  
     $(".Q4").css("backgroundColor", "#f52e00");
}, function(){
    $(this).css("color", "white");
  });
$(".letter3").hover(function(){
     $(".Q4").css("backgroundColor", "#ffff33");
}, function(){
    $(this).css("color", "white");
  });


/////////////////////////////////////////Form Validation////////////////////////////////////////////////////////////////

var userName= document.getElementById("userName");
    userMail= document.getElementById("userMail");
    userPhone= document.getElementById("userPhone");
    textArea= document.getElementById("textArea");
   

 var contacts=[];


function validateName()
{
    
    var alert = document.getElementById("userNameAlert");
     var regex = /^[a-zA-Z]{2,}/;
    
    
    if(regex.test(userName.value)==false)
        {
            alert.style.display="block";
            return false;
        }
      else
          {
            alert.style.display="none";
              return true;
          }
}


function validateMail()
{
    
    var alert = document.getElementById("userMailAlert");
     var regex = /^[a-z0-9_]{1,}[-_.]{0,1}[a-z0-9_]{1,}@[a-z0-9]{2,63}(\.[a-z]{2,6}){1,2}/;
    
    
    if(regex.test(userMail.value)==false)
        {
            alert.style.display="block";
            return false;
        }
      else
          {
            alert.style.display="none";
              return true;
          }
}

function validatePhone()
{
    
    var alert = document.getElementById("userPhoneAlert");
     var regex = /^0111[0-9]{7}$/;
    
    
    if(regex.test(userPhone.value)==false)
        {
            alert.style.display="block";
            return false;
        }
      else
          {
            alert.style.display="none";
              return true;
          }
}

function validateArea()
{
    var textArea = document.getElementById("textArea").value;
	var textLimiter = 50;
	var def = textLimiter-textArea.length;
	if(def>0){
		document.getElementById("textdef").innerHTML= def + " Letters Remaning";
	}else{
		document.getElementById("textdef").innerHTML= "Finish";
	}
}


 function addUser()
{
    if(validateName() == true && validateMail()  == true && validatePhone() == true)
        
        
        {
    var contact={name:userName.value,mail:userMail.value,phone:userPhone.value,area:textArea.value};
    
    contacts.push(contact);
    //set contacts array as string in local storage 
    localStorage.setItem("contacts",JSON.stringify(contacts));
     
    clearForm();
        }
    
    else
        {
            alert ("can't register");
        }
    
}

function clearForm(){
    var inputs=document.getElementsByTagName("input");
    for(var i=0;i<inputs.length;i++){
      inputs[i].value="";
        textArea.value="";
    }
}



















