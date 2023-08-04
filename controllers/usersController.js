module.exports = {
  register: (req, res) =>
    res.render("users/register", {
      title: "register",
    }),
  login: (req, res) =>
    res.render("users/login", {
      title: "login",
    }),
  profile: (req, res) =>
    res.render("users/profile", {
      title: "profile",
    })
};
