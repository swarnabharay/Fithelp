const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    assignedAssignments: [
      {
        title: {
          type: String,
        },
        desc: {
          type: String,
        },
        deadline: {
          type: String,
        },
        status: {
          type: String,
        },
        img: {
          type: String,
        },
        code: {
          type: String,
        },
        joinedStudents: [
          {
            name: {
              type: String,
            },
            email: {
              type: String,
            },
          },
        ],
      },
    ],
    hostedAssignments: [
      {
        title: {
          type: String,
        },
        desc: {
          type: String,
        },
        deadline: {
          type: String,
        },
        status: {
          type: String,
        },
        img: {
          type: String,
        },
        code: {
          type: String,
        },
        joinedStudents: [
          {
            name: {
              type: String,
            },
            email: {
              type: String,
            },
          },
        ],
      },
    ],
  },
  { timetamps: true }
);

module.exports = mongoose.model("Users", UserSchema);
