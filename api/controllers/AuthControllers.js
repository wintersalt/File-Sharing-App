module.exports.register = async (req, res) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

module.exports.login = async (req, res) => {
  console.log("login");
  res.sendStatus(200);
};

module.exports.logout = async (req, res) => {
  console.log("logout");
  res.sendStatus(200);
};
