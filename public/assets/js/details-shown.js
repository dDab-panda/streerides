console.log("welcome to details-shown.js")

const shownnumber = document.querySelectorAll('.shown-number');
const shownemail = document.querySelectorAll('.shown-email');


auth.onAuthStateChanged(user => {
    console.log("here we will check all the information we have of user");

      if (user.email) {
        console.log("the email is already there");
        console.log(user.email)
        shownemail.forEach((link) => {
            link.style.display = "none";
        })
    } 
    if (user.phoneNumber) {
        console.log("the phone number is already there");
        console.log(user.phoneNumber)
        shownnumber.forEach((link) => {
            link.style.display = "none";
        })
    } 
});