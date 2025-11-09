import {
  Application,
  Graphics,
  Text,
  TextStyle,
  Assets,
  Sprite,
  Container,
} from 'pixi.js';

import { initDevtools } from '@pixi/devtools';

(async () => {
  const app = new Application();
  await app.init({
    resizeTo: window,
    antialias: true,
  });

  initDevtools({
    app,
  });

  app.canvas.style.position = 'absolute';
  document.body.appendChild(app.canvas);

  // const warriorsContainer = new Container();
  
  // const girlTexture = await Assets.load('/images/girl_warrior.png');
  // const girlSprite = Sprite.from(girlTexture);
  // warriorsContainer.addChild(girlSprite);

  // const guyTexture = await Assets.load('/images/guy_warrior.png');
  // const guySprite = Sprite.from(guyTexture);
  // warriorsContainer.addChild(guySprite);
  
  // app.stage.addChild(warriorsContainer);

  const container = new Container();
  app.stage.addChild(container);
  container.position.set(200, 200);

  const texture = await Assets.load('/images/girl_warrior.png');
  const sprite = Sprite.from(texture);
  container.addChild(sprite);

  console.log(`x: ${sprite.x}, y: ${sprite.y}`);

  const x = sprite.getGlobalPosition().x;
  const y = sprite.getGlobalPosition().y;
  console.log(`x: ${x}, y: ${y}`);
  
})();