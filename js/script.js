function handleCredentialResponse(response) {
  const responsePayload = parseJwt(response.credential);
  const email = responsePayload.email;
  const role = document.getElementById('role').value;

  if (email.endsWith('@adzu.edu.ph')) {
    alert('Welcome, ' + responsePayload.name + '! Logged in as ' + role.toUpperCase());

    if (role === 'student') {
      window.location.href = 'http://spotibai.com';
    } else if (role === 'officer') {
      window.location.href = 'pages/guides.html';
    } else if (role === 'admin') {
      window.location.href = 'pages/cafeteria.html';
    }
  } else {
    alert('Access Restricted: You must sign in with an official @adzu.edu.ph account.');
  }
}



