console.log("Welcome to signin")

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




var ui = new firebaseui.auth.AuthUI(firebase.auth());

 
 
  var uiConfigin = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup', 
    signInSuccessUrl: 'book.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };
  // The start method will wait until the DOM is loaded.


  ui.start('#firebaseui-signin-container', uiConfigin);

