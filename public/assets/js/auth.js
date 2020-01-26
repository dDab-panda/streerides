/*
const logoutui = document.querySelectorAll('.navbar-logout');
const loginui = document.querySelectorAll('.navbar-login');
//console.log(logoutui);
//console.log(loginui);
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("User is signed in.");
        logoutui.forEach((link) => {
            link.style.display = "none";
        })
        loginui.forEach((link) => {
            link.style.display = "block";
        })
        
        //console.log(user);z
        // User is signed in.
    } else {
        console.log("User is signed out.");
        
        
        logoutui.forEach((link) => {
            link.style.display = "block";
        })
        loginui.forEach((link) => {
            link.style.display = "none";
        })
        
        // User is signed out.
    }
});
*/




//Signup
const signupForm = document.querySelector('#signup-form')
if(signupForm !== null){
    signupForm.addEventListener('submit',e => {
        e.preventDefault()
        
        const name = signupForm['name'].value;
        const email = signupForm['email'].value;
        const password = signupForm['password'].value;
        //console.log(name,email,p r  assword);
        // auth.createUserwithEmailAndPassword(email,password)
        
        auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
            console.log(cred.user);
            window.location = "book.html";
        })
        .catch(error => {
            console.log(error);
        })
        
        
    })
}
/*
//Login
const loginForm = document.querySelector('#login-form')
if(loginForm !== null){
    
    
    
    loginForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        const email = loginForm['email'].value;
        const password = loginForm['password'].value;
        //console.log(email,password);
        auth.signInWithEmailAndPassword(email, password)
        .then(cred=> {
            console.log(cred.user);
            window.location = "index.html";
            
        })
        .catch(error => {
            console.log(error);
        })
        
    }   )
    
    
}
*/
//console.log("we are here toopree");
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