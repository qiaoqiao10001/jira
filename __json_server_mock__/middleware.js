module.exports = (req, res, next) => {
  // json server 的中间件
  let { method, body, path } = req;
  if (method === "post" && path === "/login") {
    if (body.username === "jack" && body.password === "1234") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({ message: "error" });
    }
  }
  next();
};
