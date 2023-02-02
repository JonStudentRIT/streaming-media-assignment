const http = require('http');
const htmlHandeler = require('./htmlResponses.js');
const mediaHandeler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandeler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandeler.getPage2(request, response);
      break;
    case '/page3':
      htmlHandeler.getPage3(request, response);
      break;
    case '/party.mp4':
      mediaHandeler.streamFile(request, response, '../client/party.mp4');
      break;
    case '/bird.mp4':
      mediaHandeler.streamFile(request, response, '../client/bird.mp4');
      break;
    case '/bling.mp3':
      mediaHandeler.streamFile(request, response, '../client/bling.mp3');
      break;
    default:
      htmlHandeler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
