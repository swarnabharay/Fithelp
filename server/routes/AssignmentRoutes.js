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

//* Route 3 - Find a particular hosted assignment using email and _id and then edit the details of that particular assignment

router.post("/edit-assignment", async (req, res) => {
  let u = await Users.findOneAndUpdate(
    { email: req.body.email, "hostedAssignments._id": req.body._id },
    {
      $set: {
        "hostedAssignments.$.title": req.body.title,
        "hostedAssignments.$.desc": req.body.desc,
        "hostedAssignments.$.deadline": req.body.deadline,
        "hostedAssignments.$.status": req.body.status,
      },
    }
  );

  let u1 = await Users.find({ email: req.body.email });

  res.status(200).json({ u1 });
});

//* Route 4 - Find a particular hosted assignment using email and code and then add a new student to the joinedStudents array

router.post("/join-assignment", async (req, res) => {
  let u = await Users.findOneAndUpdate(
    { email: req.body.email, "hostedAssignments.code": req.body.code },
    {
      $push: {
        "hostedAssignments.$.joinedStudents": req.body.joinedStudents,
      },
    }
  );

  let u1 = await Users.find({ email: req.body.email });

  res.status(200).json({ u1 });
});

//* Route 5 - Find a particular hosted assignment using email and code and then remove a particular student using it's email from the joinedStudents array

router.post("/leave-assignment", async (req, res) => {
  let u = await Users.findOneAndUpdate(
    { email: req.body.email, "hostedAssignments.code": req.body.code },
    {
      $pull: {
        "hostedAssignments.$.joinedStudents": { email: req.body.studentemail },
      },
    }
  );

  let u1 = await Users.find({ email: req.body.email });

  res.status(200).json({ u1 });
});

//* Route 7 - Find a particular hosted assignment using email and _id and then delete that particular assignment

router.post("/delete-assignment", async (req, res) => {
  let u = await Users.findOneAndUpdate(
    { email: req.body.email },
    {
      $pull: {
        hostedAssignments: { _id: req.body._id },
      },
    }
  );

  let u1 = await Users.find({ email: req.body.email });

  res.status(200).json({ u1 });
});

module.exports = router;
