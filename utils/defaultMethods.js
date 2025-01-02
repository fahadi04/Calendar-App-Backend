module.exports = [
  {
    name: "LinkedIn Post",
    description: "Post on LinkedIn",
    sequence: 1,
    mandatory: true,
  },
  {
    name: "LinkedIn Message",
    description: "Send a LinkedIn message",
    sequence: 2,
    mandatory: true,
  },
  { name: "Email", description: "Send an email", sequence: 3, mandatory: true },
  {
    name: "Phone Call",
    description: "Make a phone call",
    sequence: 4,
    mandatory: false,
  },
  {
    name: "Other",
    description: "Other communication methods",
    sequence: 5,
    mandatory: false,
  },
];
