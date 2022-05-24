// Create Worker
const instance = new ComlinkWorker<typeof import('./worker')>(
  new URL('./worker', import.meta.url),
);
const result = await instance.add(2, 3);

console.log(result);
