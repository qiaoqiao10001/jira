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
import { useMount } from "hooks/useMount";

const apiURL = process.env.REACT_APP_API_URL;

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 每次value变化之后，设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
export default function ProjectList() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const debounceParam = useDebounce(param, 2000);
  useEffect(() => {
    console.log(qs.stringify(clearObj(debounceParam)));
    fetch(`${apiURL}/projects?${qs.stringify(clearObj(debounceParam))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [debounceParam]);

  useMount(() => {
    fetch(`${apiURL}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

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

// 自定义hooks 编写规则， 如果这个hooks需要用到其他hooks 则可以抽离这一部分，不然直接写成函数
