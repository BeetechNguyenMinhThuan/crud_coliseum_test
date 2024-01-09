const { User } = require("../../models");
const bcrypt = require("bcrypt");
const { GraphQLError } = require("graphql");
const { throwCustomError } = require("../../heplers/errorHandle");
const { ErrorTypes } = require("../../heplers/errorHandle");
const jwt = require("jsonwebtoken");
const userHelper = require("../../heplers/user.helper");
const userResolver = {
  Query: {
    getUsers: async (parent, args, context) => {
      try {
        console.log(context.user);
        const users = await User.findAll();
        return users;
      } catch (error) {
        throw new GraphQLError(error.message);
      }
    },
  },
  Mutation: {
    register: async (parent, args, context) => {
      const { username, email, password, confirmPassword } = args.input;
      // Validate
      if (await userHelper.isEmailAlreadyExist(email)) {
        throwCustomError(
          "Email is already Registered",
          ErrorTypes.ALREADY_EXISTS,
        );
      }
      if (await userHelper.isUsernameAlreadyExist(username)) {
        throwCustomError(
          "username is already Registered",
          ErrorTypes.ALREADY_EXISTS,
        );
      }

      if (password !== confirmPassword) {
        throwCustomError("Password must match", ErrorTypes.BAD_USER_INPUT);
      }

      const hash = bcrypt.hashSync(password, 10);
      const user = await User.create({ username, email, password: hash });
      return {
        success: true,
        message: "User registered successfully",
        user,
      };
    },
    login: async (parent, args, context) => {
      const { username, password } = args.input;
      const user = await User.findOne({
        where: {
          username,
        },
      });
      if (!user) {
        throwCustomError(
          "Invalid email or password entered.",
          ErrorTypes.BAD_USER_INPUT,
        );
      }
      const checkPassword = bcrypt.compareSync(password, user.password);
      if (!checkPassword) {
        throwCustomError(
          "Invalid email or password entered.",
          ErrorTypes.BAD_USER_INPUT,
        );
      }
      const token = jwt.sign({ username, email: user.email }, "alonxo123", {
        expiresIn: "7d",
      });
      return {
        success: true,
        message: "Login successfully",
        access_token: token,
      };
    },
  },
};

module.exports = {
  userResolver,
};
