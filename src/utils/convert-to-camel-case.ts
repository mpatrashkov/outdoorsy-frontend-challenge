import { camelCase, forOwn, isArray, isPlainObject } from "lodash";

function deepMapKeys<T extends Record<string, unknown>>(
  object: T,
  fn: (value: T[keyof T], key: string) => string
): T {
  const x: any = {};

  forOwn(object, function (v, k) {
    if (isPlainObject(v)) {
      v = deepMapKeys(v as T, fn) as T[keyof T];
    } else if (isArray(v)) {
      v = v.map((child) => deepMapKeys(child, fn)) as T[keyof T];
    }

    x[fn(v, k)] = v;
  });

  return x as T;
}

export function convertToCamelCase<T extends Record<string, unknown>>(
  object: T
) {
  return deepMapKeys(object, (_, key) => camelCase(key));
}
