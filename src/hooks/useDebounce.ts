// 自定义hooks 编写规则， 如果这个hooks需要用到其他hooks 则可以抽离这一部分，不然直接写成函数
import { useEffect, useState } from "react";
export const useDebounce = (value: object, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 每次value变化之后，设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
