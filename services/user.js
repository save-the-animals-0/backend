const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("../models/user");

const SECRET_KEY = process.env.SECRET_KEY;

const authenticate = async ({ email, password }) => {
  const user = await Users.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    const { password, ...userWithoutHash } = user.toObject();

    const token = jwt.sign({ userId: user.id }, SECRET_KEY);

    return {
      ...userWithoutHash,
      token
    };
  }
};

const getAll = async isOrg => await Users.find({ isOrg }).select("-password");

const getById = async id => await Users.findById(id).select("-password");

const create = async user => {
  if (await Users.findOne({ email: user.email })) {
    throw "Email is already in use";
  }

  const newUser = new Users(user);

  if (newUser.password) {
    const hash = bcrypt.hashSync(newUser.password, 10);
    newUser.password = hash;
  } else {
    throw "Please provide a valid password!";
  }

  return await newUser.save();
};

const update = async user => {
  if (user.password) {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  }

  return await Users.findByIdAndUpdate(user.id, user, {
    useFindAndModify: false,
    new: true
  });
};

const _delete = async id => await Users.findOneAndDelete(id, { new: true });

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  update,
  _delete
};
