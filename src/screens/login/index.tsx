import React, { FormEvent } from "react";
// import { useState } from "react";
const apiURL = "http://localhost:4000";
// const apiURL = process.env.REACT_APP_API_URL;

export default function Login() {
  // const [userName, setUserName] = useState("");
  // const [pwd, setPwd] = useState("");
  // 使用事件对象获取input值
  // const param = {userName, pwd}
  const login = (params: { username: string; pwd: string }) => {
    fetch(`${apiURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then(async (res) => {
      if (res.ok) {
        console.log(await res.json());
      }
    });
  };
  const register = (params: { username: string; pwd: string }) => {
    fetch(`${apiURL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then(async (res) => {
      if (res.ok) {
        console.log(await res.json());
      }
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const pwd = (e.currentTarget.elements[1] as HTMLInputElement).value;
    e.preventDefault();
    login({ username, pwd });
    // register({ username, pwd });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        children={
          <>
            <label htmlFor="username">用户名</label>
            <input type="text" id="username" />
          </>
        }
      />
      <div>
        <label htmlFor="pwd">密码</label>
        <input type="password" id="pwd" />
      </div>
      <button type="submit">注册</button>
    </form>
  );
}
