/*
 * @Title: $1
 * @Package: $2
 * @Description: $3
 * @Date: 2022-09-09 16:01:59
 * @Author: zhangqiao
 * @Version: v1.0
 * @License: Copyright Since 2015 Hive Box Technology. All rights reserved.
 * @Notice: This content is limited to the internal circulation of Hive Box, and it is prohibited to leak or used for other commercial purposes
 */

import React, { useState, useEffect } from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { clearObj } from "../../utils/index";
import qs from "qs";
const apiURL = process.env.REACT_APP_API_URL;
export default function ProjectList() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log(qs.stringify(clearObj(param)));
    fetch(`${apiURL}/projects?${qs.stringify(clearObj(param))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [param]);

  useEffect(() => {
    fetch(`${apiURL}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel
        param={param}
        users={users}
        setParam={setParam}
        setUsers={setUsers}
      />
      <List list={list} users={users} setList={setList} />
    </div>
  );
}
