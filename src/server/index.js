import WebServer from './web.server';

let webServer = new WebServer();

webServer
  .start()
  .then(() => {
    console.log('Web Server Started!');
  })
  .catch(err => {
    console.log(err);
    console.log('Failed to start web server');
  });
