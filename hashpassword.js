const bcrypt = require('bcrypt');

const password = 'Ship423*';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
  console.log("Hashed Password:", hash);
});

// shipconadmin
// Ship423*