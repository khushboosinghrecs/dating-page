container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showHidePw"),
pwFields = document.querySelectorAll(".password"),
signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link");
let form = document.getElementById("formm");
let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let dob= document.getElementById("dob");
let loginemail= document.getElementById('emaill');
let loginPassword= document.getElementById('passwordd');
let gender = document.getElementById("gender");
let email = document.getElementById("email");
let phone = document.getElementById("phn");
let hobby= document.getElementById("Hobbies");
let pswrd= document.getElementById('password');
let cnfrmPswrd= document.getElementById('remind-password');    

let form_data={
    firstName:'',
    lastName:'',
    date:'',
    mail:'',
    password:''
  }

pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => { 
      pwFields.forEach((pwField) => {
        if (pwField.type === "password") {
          pwField.type = "text";
          pwShowHide.forEach((icon) => {
            icon.classList.replace("uil-eye-slash", "uil-eye");
          });
        } else {
          pwField.type = "password";
          pwShowHide.forEach((icon) => {
            icon.classList.replace("uil-eye", "uil-eye-slash");
          });
        }
      });
    });
  });
  function addNavigation() {     
    location.replace("./formdata.html");
  }
  signUp.addEventListener("click", () => {
    container.classList.add("active");
  });

  function setErrormsg(el, errorMessage, error) {
    el.nextElementSibling.style.fontSize = "18px";
    console.log(el, 'element');
    console.log(el.nextElementSibling, 'nextelement');
     error ? el.nextElementSibling.textContent = errorMessage : null;
    el.className = "errorborder";
  }

  function loginValidate() {
      mail= loginemail.value.trim();
      password= loginPassword.value.trim();
    let retriveObj=  JSON.parse(localStorage.getItem('loginData'))?JSON.parse(localStorage.getItem('loginData')): alert("Pls signup now");
      console.log(retriveObj);
        if(retriveObj.mail == mail && retriveObj.password == password){
            addNavigation();
        }
       else if(retriveObj.mail == mail || retriveObj.password == password )
        {
          setErrormsg(loginemail, "invalid email", !validateEmail(mail) ? true: false );
          setErrormsg(loginPassword, "password not matching, pls try again" , password !==retriveObj.password ? true : false );
         
        }
        else{
            setErrormsg(loginemail, "invalid email", !validateEmail(mail) ? true: false );
            alert("Pls signup now");
            console.log(retriveObj);
        }
    }

  if(login){
    login.addEventListener("click", () => {
      loginValidate();
      container.classList.remove("active");
    });
    }
    
    var expanded = false;    
    function showCheckboxes() {
      var checkboxes = document.getElementById("checkboxes");
      if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
      } else {
        checkboxes.style.display = "none";
        expanded = false;
      }
    }

    $("input:checkbox").on("click", function () {
        var $box = $(this);
        if ($box.is(":checked")) {
          var group = "input:checkbox[name='" + $box.attr("name") + "']";
      
          $(group).prop("checked", false);
          $box.prop("checked", true);
        } else {
          $box.prop("checked", false);
        }
      });
      
      function setSuccessMsg(el) {
        el.nextElementSibling.textContent = "";
        el.className = "errorborder";
      }
      
      const validateEmail = (email) => {
        let mailFormat =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return String(email).toLowerCase().match(mailFormat);
      };
      const validatePhone =(phone) =>{
        let phoneFormat =/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
        return phone.match(phoneFormat);
      }

      const validate = () => {
        let validemail = email.value.trim();
        let validphone = phone.value.trim();
        let password = pswrd.value.trim();
        let confirmPassword= cnfrmPswrd.value.trim();
          setErrormsg(email, "invalid email", !validateEmail(validemail) ? true: false );
          setErrormsg(phone, "invalid phone number",( validphone.length < 10 || validphone.length > 10)? true: false );
          setErrormsg(pswrd, "password not matching, pls try again" , password !==confirmPassword ? true : false );
          form_data.firstName=fname.value.trim();
          form_data.lastName= lname.value.trim();
          form_data.date = dob.value.trim();
          form_data.mail = email.value.trim();
          form_data.password = password;
          localStorage.setItem('loginData', JSON.stringify(form_data) );

      
      };
      
      form.addEventListener("submit", (event) => {
        console.log("hello khushi");
        event.preventDefault();
        validate();
        addNavigation();
      });
      
