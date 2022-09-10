/*
 * @Title: $1
 * @Package: $2
 * @Description: $3
 * @Date: 2022-09-09 21:04:59
 * @Author: zhangqiao
 * @Version: v1.0
 * @License: Copyright Since 2015 Hive Box Technology. All rights reserved.
 * @Notice: This content is limited to the internal circulation of Hive Box, and it is prohibited to leak or used for other commercial purposes
 */
const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const clearObj = function (obj: object) {
  let result: object = { ...obj };
  // debugger
  Object.keys(result).forEach((key: string) => {
    // @ts-ignore
    if (isFalsy(result[key])) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
