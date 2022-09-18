const Koa = require("koa");
const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");
const jwt = require("jwt-simple");
const router = new Router();
let app = new Koa();
const { v4: uuidv4 } = require("uuid");

app.use(bodyparser());

let secret = "qiaoshooksapp";

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (ctx.method == "OPTIONS") {
    ctx.body = 200;
  } else {
    await next();
  }
});

router.post("/register", async (ctx) => {
  let { username, pwd } = ctx.request.body;
  let token = jwt.encode(username, secret);
  // 返回用户名，id， token
  ctx.body = {
    code: 200,
    username,
    token,
    id: uuidv4(),
  };
});

router.post("/login", async (ctx) => {
  let { username, pwd } = ctx.request.body;
  console.log(ctx);
  if (username === "admin" && pwd === "123") {
    let token = jwt.encode(username, secret);
    ctx.body = {
      code: 200,
      username,
      token,
    };
  }
});

router.get("/validate", async (ctx) => {
  let Authorization = ctx.get("authorization");
  let [, token] = Authorization.split(" ");
  if (token) {
    try {
      let r = jwt.token(token, secret);
      ctx.body = {
        code: 200,
        username: r,
        token,
      };
    } catch (e) {
      ctx.body = {
        code: 401,
        data: "没有登录",
      };
    }
  } else {
    ctx.body = {
      code: 401,
      data: "没有登录",
    };
  }
});

app.use(router.routes());

app.listen(4000);
