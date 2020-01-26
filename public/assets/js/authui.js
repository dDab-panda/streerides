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

  //ui.start('#firebaseui-signin-container', uiConfigin);
  ui.start('#firebaseui-auth-container', uiConfigup);
