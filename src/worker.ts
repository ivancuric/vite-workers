// worker.ts
export const add = (a: number, b: number) => a + b;

type Callback = typeof import("./main").callback;

export async function executeCallback(callback: Callback) {
  callback("A string from a worker");
}
