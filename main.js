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

  const rectangle = new Graphics()
    .rect(200, 200, 200, 180)
    .fill({
      color: 0xffea00,
      alpha: 0.5,
    })
    .stroke({
      width: 8,
      color: 0x00ff00,
    });

    rectangle.on('pointerdown', moveRectangle);
    
    rectangle.eventMode = 'static';
    rectangle.cursor = 'pointer';

    function moveRectangle() {
      rectangle.position.x -= 10;
      rectangle.position.y += 10;
    }

    window.addEventListener('keyup', function(e) {
      switch(e.key) {
        case 'ArrowRight': {
          rectangle.x +=10;
          break;
        }
        case 'ArrowLeft': {
          rectangle.x -=10;
          break;
        }
        case 'ArrowUp': {
          rectangle.y -= 10;
          break;
        }
        case 'ArrowDown': {
          rectangle.y += 10;
          break;
        }
      }
    });

  app.stage.addChild(rectangle);

  const line = new Graphics().moveTo(100, 700).lineTo(900, 400).stroke({
    color: 0x55faff,
  });

  app.stage.addChild(line);

  const triangle = new Graphics()
    .poly([600, 50, 720, 400, 420, 400])
    .fill({
      color: 0x8f5ff2,
    })
    .stroke({
      color: 0xf5fa2f,
    });

  app.stage.addChild(triangle);

  const star = new Graphics().star(1000, 250, 12, 80, 2).fill({
    color: 0xffffff,
  });

  app.stage.addChild(star);

  const style = new TextStyle({
    fill: '#ffffff',
    fontFamily: 'Playwrite US Trad',
    fontSize: 72,
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    stroke: { color: '#4a1850', width: 5 },
    dropShadow: {
      color: '#4a1850',
      blur: 4,
      angle: Math.PI / 6,
      distance: 6,
    },
    wordWrap: true,
    wordWrapWidth: 440,
  });

  const text = new Text({
    text: 'Hello Pixi',
    style,
  });

  app.stage.addChild(text);

  const texture = await Assets.load('images/logo.png');

  const sprite = Sprite.from(texture);
  //OR
  // const sprite2 = new Sprite(texture);
  sprite.skew.x = Math.PI / 4;
  sprite.skew.set(Math.PI / 4, 0);
  sprite.rotation = Math.PI / 4;

  sprite.pivot.x = 100;
  sprite.pivot.y = 200;
 
  app.stage.addChild(sprite);

  const circle = new Graphics();
  app.ticker.add(() => {
    circle.circle(
      // Random x-coordinate
      Math.random() * app.screen.width,
      // Random y-coordinate
      Math.random() * app.screen.height,
      // Circle radius
      5
    )
    .fill({
      color: 0xffffff
    });
    app.stage.addChild(circle);
  })
  
})();
