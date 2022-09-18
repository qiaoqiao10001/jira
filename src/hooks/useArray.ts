import { useState } from "react";
interface IPerson {
  name: string;
  age: number;
}
export const useArray = <T>(person: T[]) => {
  let [value, setValue] = useState(person);
  function clear() {
    person.length = 0;
  }
  function add(user: T) {
    setValue([...value, user]); // 尽量不改变原来的值进行操作数据
  }
  function removeIndex(index: number) {
    const copy = [...value];
    person.splice(index, 1);
    setValue(copy);
  }
  return {
    value,
    setValue,
    clear,
    removeIndex,
    add,
  };
};
export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "jack", age: 23 },
    { name: "ma", age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
};
