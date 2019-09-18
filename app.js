const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const Push = require('pushover-notifications')
const fs = require('fs')

const content = fs.readFileSync('./credentials.json','utf8')
const data = JSON.parse(content)

const app = express()
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

var p = new Push( {
  user:data.USER_TOKEN,
  token:data.APP_TOKEN,
  // httpOptions: {
  //   proxy: process.env['http_proxy'],
  //},
  // onerror: function(error) {},
  //update_sounds: true // update the list of sounds every day - will
  // prevent app from exiting.
})
 
var msg = {
  // These values correspond to the parameters detailed on https://pushover.net/api
  message: 's',	// required
  title: "",
  sound: 'magic',
  device: '',
  priority: 1
}

app.get('/',  (req, res) => {
  res.send("hello");
})

app.post('/', (req, res) => {
  console.log(req.body.message)
  msg.message = req.body.message
  p.send(msg, function(err, result){
    if ( err ) {
      throw err
    }
    console.log(result)
  })
})

app.listen(3001, async () => {
  console.log('listening on port 3001');
});