const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("_helpers/db");
const Organizations = db.Organizations;

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function authenticate({ username, password }) {
  const organizations = await Organizations.findOne({ username });
  if (organizations && bcrypt.compareSync(password, organizations.hash)) {
    const { hash, ...organizationsWithoutHash } = organizations.toObject();
    const token = jwt.sign({ sub: organizations.id }, config.secret);
    return {
      ...organizationsWithoutHash,
      token
    };
  }
}

async function getAll() {
  return await Organizations.find().select("-hash");
}

async function getById(id) {
  return await Organizations.findById(id).select("-hash");
}

async function create(organizationsParam) {
  if (await Organizations.findOne({ username: organizationsParam.username })) {
    throw "Username is already in use";
  }

  const organizations = new User(organizationsParam);
  if (organizationsParam.password) {
    organizations.hash = bcrypt.hashSync(organizationsParam.password, 10);
  }

  await organizations.save();
}

async function update(id, organizationsParam) {
  const organizations = await Organizations.findById(id);

  if (!organizations) throw "User not found";
  if (
    organizations.username !== organizationsParam.username &&
    (await Organizations.findOne({ username: organizationsParam.username }))
  ) {
    throw "Username is already in use";
  }

  if (organizationsParam.password) {
    organizationsParam.hash = bcrypt.hashSync(organizationsParam.password, 10);
  }

  Object.assign(organizations, organizationsParam);

  await organizations.save();
}

async function _delete(id) {
  await Organizations.findByIdAndRemove(id);
}
