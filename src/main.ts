import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
// Create Worker
const instance = new ComlinkWorker<typeof import('./worker')>(
  new URL('./worker', import.meta.url),
  {
    /* normal Worker options*/
  }
);
const result = await instance.add(2, 3);

console.log(result);
