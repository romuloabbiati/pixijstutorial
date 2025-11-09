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


  // using async/await keywords
  // const texture = await Assets.load('/images/girl_warrior.png');

  // const sprite = Sprite.from(texture);
  // app.stage.addChild(sprite);
  
  // using promises
  // const texturePromise = Assets.load('/images/guy_warrior.png');

  // texturePromise.then((resolvedTexture) => {
  //     const sprite2 = Sprite.from(resolvedTexture);
  //     app.stage.addChild(sprite2);
  // });

  const font = await Assets.load('/GreatVibes-Regular.ttf');

  const text = new Text({
    text: 'Hello Pixi',
    style: {
      fill: '#ffffff',
      FontFamily: font.family,
      fontSize: 72
    }
  });

  app.stage.addChild(text);

  Assets.addBundle('ninjas', {
    girl_ninja: '/images/girl_ninja.png',
    guy_ninja: '/images/guy_ninja.png'
  })

  Assets.addBundle('warriors', {
    girl_warrior: '/images/girl_warrior.png',
    guy_warrior: '/images/guy_warrior.png'
  });

  const ninjaAssets = await Assets.loadBundle('ninjas');
  const warriorAssets = await Assets.loadBundle('warriors');
  const sprite = Sprite.from(ninjaAssets.girl_ninja);
  const sprite2 = Sprite.from(warriorAssets.girl_warrior);

  app.stage.addChild(sprite);
  app.stage.addChild(sprite2);

  // await Assets.init({manifest: '/manifest.json'});

  // const warriorAssets = await Assets.loadBundle('warriors');

  // const sprite = Sprite.from(warriorAssets.guy_warrior);
  // app.stage.addChild(sprite);

})();