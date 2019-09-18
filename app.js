var Push = require('pushover-notifications')
var fs = require('fs')

const content = fs.readFileSync('./credentials.json','utf8')
const data = JSON.parse(content)

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
  message: '',	// required
  title: "",
  sound: 'magic',
  device: '',
  priority: 1
}
 

p.send(msg, function(err, result){
  if ( err ) {
    throw err
  }
  console.log(result)
})