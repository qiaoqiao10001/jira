import { useEffect } from "react";
// () => void  代表这个函数没有参数， 什么都不返回
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
