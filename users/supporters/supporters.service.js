const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("_helpers/db");
const Supporters = db.Supporters;

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function authenticate({ username, password }) {
  const supporters = await Supporters.findOne({ username });
  if (supporters && bcrypt.compareSync(password, supporters.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: Supporters.id }, config.secret);
    return {
      ...supportersWithoutHash,
      token
    };
  }
}

async function getAll() {
  return await Supporters.find().select("-hash");
}

async function getById(id) {
  return await Supporters.findById(id).select("-hash");
}

async function create(supportersParam) {
  if (await Supporters.findOne({ username: supportersParam.username })) {
    throw "Username is already in use";
  }

  const supporters = new Supporters(supportersParam);
  if (supportersParam.password) {
    supporters.hash = bcrypt.hashSync(supportersParam.password, 10);
  }

  await supporters.save();
}

async function update(id, supportersParam) {
  const user = await Supporters.findById(id);

  if (!supporters) throw "User not found";
  if (
    supporters.username !== supportersParam.username &&
    (await User.findOne({ username: supportersParam.username }))
  ) {
    throw "Username is already in use";
  }

  if (supportersParam.password) {
    supportersParam.hash = bcrypt.hashSync(supportersParam.password, 10);
  }

  Object.assign(supporters, supportersParam);

  await supporters.save();
}

async function _delete(id) {
  await supporters.findByIdAndRemove(id);
}
