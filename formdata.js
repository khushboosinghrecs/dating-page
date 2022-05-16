let showName= document.getElementById("username");       
     let retriveObj=  JSON.parse(localStorage.getItem('loginData'));
     console.log(retriveObj, showName, 'khushi')
     window.onload = function() {
        what();
        function what(){
            showName.innerHTML= "welcome " + retriveObj.firstName + " to the page";
        };
    }
     
function logOut(){
  location.replace("/home/khushboo/Desktop/dating app/index.html");
    }