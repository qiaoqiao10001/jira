import React, { useState, useEffect } from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { clearObj } from "../../utils/index";
import qs from "qs";
import { useMount } from "hooks/useMount";
import { useDebounce } from "hooks/useDebounce";

// interface IParam {
//   name: string,
//   personId: string
// }
const apiURL = process.env.REACT_APP_API_URL;

export default function ProjectList() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  const debounceParam = useDebounce(param, 200);
  useEffect(() => {
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
      <SearchPanel param={param} users={users} setParam={setParam} />
      <List list={list} users={users} />
    </div>
  );
}
