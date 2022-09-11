import { rest } from "msw";
const project = [
  {
    id: 1,
    name: "骑手管理",
    personId: 1,
    organization: "外卖组",
  },
  {
    id: 2,
    name: "团购APP",
    personId: 2,
    organization: "团购组",
  },
  {
    id: 3,
    name: "物料管理系统",
    personId: 2,
    organization: "物料组",
  },
  {
    id: 4,
    name: "总部管理系统",
    personId: 3,
    organization: "总部组",
  },
  {
    id: 5,
    name: "送餐路线规划系统",
    personId: 4,
    organization: "送餐组",
  },
];
const users = [
  {
    id: 1,
    name: "张三",
  },
  {
    id: 2,
    name: "李四",
  },
  {
    id: 3,
    name: "王五",
  },
  {
    id: 4,
    name: "赵六",
  },
];

export const handlers = [
  rest.post("/register", (req, res, ctx) => {
    return res(
      ctx.json({
        username: "admin",
        token: "tokenabcccss",
      }),
      ctx.status(200)
    );
  }),
  rest.post("/login", (req, res, ctx) => {
    const userInfo = {
      id: new Date().getTime(),
      name: req.body.username,
    };
    console.log(req, "======req=========");
    sessionStorage.setItem("is-auth", "true");
    sessionStorage.setItem("token", "true");
    return res(ctx.json(userInfo), ctx.status(200));
  }),
  rest.get("/projects", (req, res, ctx) => {
    console.log(req);
    return res(ctx.status(200), ctx.json(project));
  }),
  rest.get("/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
  rest.get("/user", (req, res, ctx) => {
    const isAuth = sessionStorage.getItem("is-auth");
    if (!isAuth) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "not login",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
