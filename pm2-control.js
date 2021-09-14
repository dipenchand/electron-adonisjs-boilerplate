const pm2 = require('pm2')

pm2.connect(function(err) {
    if (err) {
      console.log('error 1')
      // console.error(err)
      process.exit(2)
    }
  
    pm2.start({
      script    : './app/server.js',
      name      : 'server'
    }, function(err, apps) {
      if (err) {
        // console.error(err)
        console.log('error 2')
        return pm2.disconnect()
      }
  
      pm2.list((err, list) => {
        // console.log(err, list)
        console.log(err)
  
        pm2.restart('server', (err, proc) => {
          // Disconnects from PM2
          pm2.disconnect()
        })
      })
    })
  })