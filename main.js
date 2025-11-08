// Step 1
import {Application} from 'pixi.js';

(async() => {

  // Step 2
  const app = new Application();

  // Step 3
  await app.init({
    // width: 1000,
    // height: 500
    resizeTo: window,
    // backgroundAlpha: 0.5,
    // backgroundColor: 0xffea00
  });
  
  app.canvas.style.position = 'absolute';
  // Step 4
  document.body.appendChild(app.canvas);

})();