const jsonServer = require('json-server');
const fs = require('fs');
const bodyParser = require('body-parser');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(bodyParser.json());
server.post('/resetPassword', (req, res) => {
    const { email, newPassword } = req.body;
  
    const user = db.users.find(user => user.email === email);
  
    if (user) {
      user.password = newPassword;
      fs.writeFileSync('db.json', JSON.stringify(db));
      res.status(200).json({ message: 'Password reset successful.' });
    } else {
      res.status(404).json({ message: 'User not found.' });
    }
  });
  
  server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});