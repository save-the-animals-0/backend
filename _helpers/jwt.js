const expressJwt = require("express-jwt");
const config = require("config.json");
const organizationsService = require("../users/organizations/organizations.service");
const supportersService = require("../users/supporters/supporters.service");
module.exports = jwt;

function jwt() {
  const secret = config.secret;
  return expressJwt({ secret, isRevoked }).unless({
    path: ["/users/organizations/authenticate", "/users/organizations/register"]
  });
}
function jwt() {
  const secret = config.secret;
  return expressJwt({ secret, isRevoked }).unless({
    path: ["/users/supporters/authenticate", "/users/supporters/register"]
  });
}

async function isRevoked(req, payload, done) {
  const organizations = await organizationsService.getById(payload.sub);
  if (!organizations) {
    return done(null, true);
  }

  done();
}

async function isRevoked(req, payload, done) {
  const supporters = await supportersService.getById(payload.sub);
  if (!supporters) {
    return done(null, true);
  }

  done();
}
