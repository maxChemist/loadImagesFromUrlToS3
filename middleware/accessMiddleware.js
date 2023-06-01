module.exports = async function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const { headers } = req;
    const { authorization } = headers;
    const bearer = authorization ? authorization : "";
    const token = bearer ? bearer.replace("Bearer ", "") : "";
    if (token!=='simple-token') return
    next();
  } catch (err) {
    console.log(err);
    return res.status(403).json({ message: "Нет прав доступа. Admin" });
  }
};
