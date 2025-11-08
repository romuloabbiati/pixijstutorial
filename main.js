import {Application, Graphics} from 'pixi.js';

(async() => {
  const app = new Application();
  await app.init({
    resizeTo: window,
    antialias: true
  });
  
  app.canvas.style.position = 'absolute';
  document.body.appendChild(app.canvas);

  const rectangle = new Graphics()
  .rect(200, 200, 200, 180)
  .fill({
    color: 0xffea00,
    alpha: 0.5
  })
  .stroke({
    width: 8,
    color: 0x00ff00
  });

  app.stage.addChild(rectangle);

  const line = new Graphics()
  .moveTo(100, 700)
  .lineTo(900, 400)
  .stroke({
    color: 0x55faff
  });

  app.stage.addChild(line);

  const triangle = new Graphics()
  .poly([
    600, 50,
    720, 400,
    420, 400
  ])
  .fill({
    color: 0x8f5ff2
  })
  .stroke({
    color: 0xf5fa2f
  });

  app.stage.addChild(triangle);

  const star = new Graphics()
  .star(1000, 250, 12, 80, 2)
  .fill({
    color: 0xffffff
  })

  app.stage.addChild(star);

})();