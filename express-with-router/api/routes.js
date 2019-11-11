
const controller = require('./controllers')

module.exports = function(router) {
  router.get('/list', controller.getListProfiles)
  router.post('/list', controller.createProfile)
}