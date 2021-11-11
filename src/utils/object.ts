export const stripUndefined = <T extends Record<string, unknown>>(obj: T) => JSON.parse(JSON.stringify(obj)) as T;
