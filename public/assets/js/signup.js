console.log("welcome to signup")

const signupForm = document.querySelector('#signup-form')
if(signupForm !== null){
    signupForm.addEventListener('submit',e => {
        e.preventDefault()
        
        const name = signupForm['name'].value;
        const email = signupForm['email'].value;
        const password = signupForm['password'].value;
        console.log(name,email,password);
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


var ui = new firebaseui.auth.AuthUI(firebase.auth());

 
  var uiConfigup = {
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
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };

  ui.start('#firebaseui-auth-container', uiConfigup);

