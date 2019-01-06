const express = require('express');
const app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname, '../dist')));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, '../dist') + '/index.html');
});

app.listen(6000, ()=>{
	console.log('Listening on port 8080');
});

const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express();
    const indexPath = path.join(__dirname, 'indexDep.html');
    const publicPath = express.static(path.join(__dirname, '../dist'));

    app.use('/dist', publicPath);
    app.get('/', function (_, res) { res.sendFile(indexPath) });

    return app;
  }
}
