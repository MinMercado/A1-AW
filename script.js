
alert("Estoy probando JavaScript, ¡Hola! :)");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Conoce México')
  .pauseFor(300)
  .deleteAll()
  .typeString('Nuestra cultura,')
  .pauseFor(1000)
  .deleteAll()
  .typeString('nuestras tradiciones')
  .pauseFor(1000)
  .deleteAll()
  .typeString('y nuestras festividades.')
  .pauseFor(1000)
  .start();


let app2 = document.getElementById('app2');

let tw = new Typewriter(app2, {
  loop: true,
  delay: 75,
});

tw
  .pauseFor(2500)
  .typeString('¡Viva México!, ¡Viva la religión!, ¡Muera el mal Gobierno!')
  .pauseFor(300)
  .deleteAll()
  .start();

let app3 = document.getElementById('app3');

let tw1 = new Typewriter(app3, {
    loop: true,
    delay: 75,
  });
  
tw1
  .pauseFor(2500)
  .typeString('Estudiante de Desarrollo de Software Multiplataforma')
  .pauseFor(500)
  .deleteAll()
  .start();
  
  