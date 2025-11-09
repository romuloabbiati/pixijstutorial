import {
  Application,
  Graphics,
  Text,
  TextStyle,
  Assets,
  Sprite,
  Container,
  Spritesheet,
  AnimatedSprite,
  TilingSprite,
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

  const texture = await Assets.load('/images/guy_warrior.png');

  const bgSprite = new TilingSprite({
    texture,
    width: app.screen.width,
    height: app.screen.height
  });

  bgSprite.tileScale.set(0.2, 0.2);

  app.ticker.add(function() {
    bgSprite.tilePosition.x -= 1;
  });

  app.stage.addChild(bgSprite);
   
})();