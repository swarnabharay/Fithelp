const express = require("express");
const Users = require("../models/UserSchema");
const router = express.Router();

//* Route 1 - Get the hosted assignments of a particular user with email ID

router.get("/get-hosted-assignments/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await Users.findOne({ email: email });
    res.status(200).json(user.hostedAssignments);
  } catch (e) {
    console.log(`Error in getting the hosted assignments: ${e}`);
  }
});

//* Route 2 - Get the assigned assignments of a particular user with email ID

router.get("/get-assigned-assignments/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await Users.findOne({ email: email });
    res.status(200).json(user.assignedAssignments);
  } catch (e) {
    console.log(`Error in getting the assigned assignments: ${e}`);
  }
});

//* Route 3  - Get all the users

router.get("/get-all-users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (e) {
    console.log(`Error in getting all the users: ${e}`);
  }
});

//* Route 4 - Get details about a single user using email ID

router.get("/get-user/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await Users.findOne({ email: email });
    res.status(200).json(user);
  } catch (e) {
    console.log(`Error in getting the user: ${e}`);
  }
});

//* Route 5 - Get details about a single hosted assignment of a particular user using the email id and the _id of that assignment

router.get("/get-hosted-assignment/:email/:assignmentId", async (req, res) => {
  try {
    const { email, assignmentId } = req.params;
    const user = await Users.findOne({ email: email });
    const assignment = user.hostedAssignments.id(assignmentId);
    res.status(200).json(assignment);
  } catch (e) {
    console.log(`Error in getting the hosted assignment: ${e}`);
  }
});

//* Route 6 - Get details about a single assigned assignment of a particular user using the email id and the _id of that assignment

router.get(
  "/get-assigned-assignment/:email/:assignmentId",
  async (req, res) => {
    try {
      const { email, assignmentId } = req.params;
      const user = await Users.findOne({ email: email });
      const assignment = user.assignedAssignments.id(assignmentId);
      res.status(200).json(assignment);
    } catch (e) {
      console.log(`Error in getting the assigned assignment: ${e}`);
    }
  }
);

module.exports = router;
