import { proxy } from "comlink";
type WorkerModule = typeof import("./worker");

// Create Worker
const workerInstance = new ComlinkWorker<WorkerModule>(
  new URL("./worker", import.meta.url)
);

const result = await workerInstance.add(2, 3);

export const callback = (string: string) => console.log(string);

console.log(result);

const proxiedCallback = proxy(callback);

await workerInstance.executeCallback(proxiedCallback);
