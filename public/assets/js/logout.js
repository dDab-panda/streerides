console.log("welcome to logout.js")

const logout = document.querySelector('#logout');
//console.log("we are here too end");
if(logout !== null){
    //console.log("we are here too");
    logout.addEventListener('click', (e) => {
        //    console.log("we are here too 2");
        e.preventDefault();
        auth.signOut()
        .then(() => {
            console.log("user is logggged out");
            window.location = "index.html";
            
            
            // Sign-out successful.
        })
    })
}