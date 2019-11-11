
exports.getListProfiles = function(req, res) {
  return res.status(200).send([{
    id: 1,
    name: 'John',
    lastName: 'Alfino'
  },
  {
    id: 2,
    name: 'Tyler',
    lastName: 'Tabaso'
  }])
}

exports.createProfile = function(req, res) {
  console.log(req.body)
  const profile = req.body
  return res.status(200).send(profile)
}