//* All routes related to club's LOGIN AND REGISTER

const express = require("express");
const Users = require("../models/UserSchema");
const router = express.Router();

//* Route 1  - Add user name and email to the database

router.post("/createUser", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const eventData = Users({
      name: name,
      email: email,
      phone: phone,
    });
    await eventData.save();
    res.status(200).json(eventData);
  } catch (e) {
    console.log(`Error in creating a event: ${e}`);
  }
});

//* Route 2  - Host multiple/single assignment

router.post("/host-assignment", async (req, res) => {
  let u = await Users.findOneAndUpdate(
    { email: req.body.email },
    {
      $push: {
        hostedAssignments: req.body.hostedAssignments,
      },
    }
  );

  let u1 = await Users.find({ email: req.body.email });

  res.status(200).json({ u1 });
});
module.exports = router;
