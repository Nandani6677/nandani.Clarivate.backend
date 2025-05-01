const { User } = require('../../shared-orm-library');

async function getUsers(req, res) {
  const users = await User.findAll();
  res.json(users);
}

module.exports = { getUsers };
