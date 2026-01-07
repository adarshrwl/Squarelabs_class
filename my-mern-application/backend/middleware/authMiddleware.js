const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    console.log(req.user.role);
    res.status(403).json({
      msg: "Not Authorized as admin ",
    });
  }
};

module.exports = { adminOnly };
