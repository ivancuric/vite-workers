import { remoteFunction } from './worker';

// Create Worker
const workerInstance = new ComlinkWorker<typeof import('./worker')>(
  new URL('./worker', import.meta.url),
);
const result = await workerInstance.add(2, 3);

export const callback = (string: string) => console.log(string);

console.log(result);

await remoteFunction(callback);

export {}