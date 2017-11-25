//Contains a lot of the general configurations needed for querying the instagram api
module.exports = {
  clientID: 'b59a7ce4190741dcb475b5d72ea321d1',
  clientSecret: '9f4e1f2e2a8b4b368d6adec4ce6ac816',
  grantType: 'authorization_code',
  scope: '&scope=basic+public_content+follower_list+relationships',
  redirect_uri: 'http://localhost:3000/authenticate'

}
