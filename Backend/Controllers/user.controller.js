import User from "../model/userModel.js";
import bcrypt from "bcrypt";
export const Signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: " User Already Exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });

    await createdUser.save();
    res.status(200).json({
      message: "user created succesfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    if (error.response) {
      // console.log(err);
    }
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(200).json({ message: "Invalid username or password" });
    } else {
      res.status(200).json({
        message: "Login successfull",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    // console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
