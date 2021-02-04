require("dotenv").config();
const { GraphQLServer, PubSub } = require("graphql-yoga");
const uniqid = require("uniqid");

const levels = [
  {
    id: uniqid(),
    name: "World 1-1",
    setting: "Overworld",
    enemies: ["Little Goomba", "Koopa Troopa"],
  },
  {
    id: uniqid(),
    name: "World 1-2",
    setting: "Underground",
    enemies: ["Little Goomba", "Koopa Troopa", "Piranha Plant"],
  },
  {
    id: uniqid(),
    name: "World 1-3",
    setting: "Athletic",
    enemies: ["Little Goomba", "Koopa Troopa", "Koopa Paratroopa"],
  },
  {
    id: uniqid(),
    name: "World 1-4",
    setting: "Castle",
    enemies: ["Fire-Bar", "fake Bowser", "Little Goomba"],
  },
  {
    id: uniqid(),
    name: "World 2-1",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
    ],
  },
  {
    id: uniqid(),
    name: "World 2-2",
    setting: "Underwater",
    enemies: ["Blooper", "Cheep-cheep", "Piranha Plant"],
  },
  
  { id: uniqid(), name: "World 2-3", setting: "Athletic", enemies: ["Cheep-cheep"] },
  {
    id: uniqid(),
    name: "World 2-4",
    setting: "Castle",
    enemies: ["Fire-Bar", "Podoboo", "fake Bowser", "Koopa Troopa"],
  },
  {
    id: uniqid(),
    name: "World 3-1",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Hammer Brother",
    ],
  },
  {
    id: uniqid(),
    name: "World 3-2",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
    ],
  },
  {
    id: uniqid(),
    name: "World 3-3",
    setting: "Athletic",
    enemies: ["Little Goomba", "Koopa Troopa", "Koopa Paratroopa"],
  },
  {
    id: uniqid(),
    name: "World 3-4",
    setting: "Castle",
    enemies: ["Fire-Bar", "Podoboo", "fake Bowser", "Buzzy Beetle"],
  },
  {
    id: uniqid(),
    name: "World 4-1",
    setting: "Overworld",
    enemies: ["Piranha Plant", "Lakitu", "Spiny"],
  },
  {
    id: uniqid(),
    name: "World 4-2",
    setting: "Underground",
    enemies: ["Little Goomba", "Koopa Troopa", "Piranha Plant", "Buzzy Beetle"],
  },
  {
    id: uniqid(),
    name: "World 4-3",
    setting: "Athletic",
    enemies: ["Koopa Troopa", "Koopa Paratroopa"],
  },
  {
    id: uniqid(),
    name: "World 4-4",
    setting: "Castle",
    enemies: ["Piranha Plant", "Podoboo", "Fire-Bar", "fake Bowser", "Spiny"],
  },
  {
    id: uniqid(),
    name: "World 5-1",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Bullet Bill",
    ],
  },
  {
    id: uniqid(),
    name: "World 5-2",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Buzzy Beetle",
      "Bullet Bill",
      "Hammer Brother",
      "Bloober",
      "Cheep-cheep",
    ],
  },
  {
    id: uniqid(),
    name: "World 5-3",
    setting: "Athletic",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Bullet Bill",
    ],
  },
  {
    id: uniqid(),
    name: "World 5-4",
    setting: "Castle",
    enemies: ["Podoboo", "Fire-Bar", "fake Bowser", "Lakitu"],
  },
  {
    id: uniqid(),
    name: "World 6-1",
    setting: "Overworld",
    enemies: ["Piranha Plant", "Lakitu", "Spiny"],
  },
  {
    id: uniqid(),
    name: "World 6-2",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Buzzy Beetle",
      "Bloober",
      "Cheep-cheep",
    ],
  },
  { id: uniqid(), name: "World 6-3", setting: "Athletic", enemies: ["Bullet Bill"] },
  {
    id: uniqid(),
    name: "World 6-4",
    setting: "Castle",
    enemies: ["Podoboo", "Fire-Bar", "fake Bowser", "Bloober"],
  },
  {
    id: uniqid(),
    name: "World 7-1",
    setting: "Overworld",
    enemies: [
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Buzzy Beetle",
      "Hammer Brother",
      "Bullet Bill",
    ],
  },
  {
    id: uniqid(),
    name: "World 7-2",
    setting: "Underwater",
    enemies: ["Bloober", "Cheep-cheep", "Piranha Plant"],
  },
  {
    id: uniqid(),
    name: "World 7-3",
    setting: "Athletic",
    enemies: ["Cheep-cheep", "Koopa Troopa", "Koopa Paratroopa"],
  },
  {
    id: uniqid(),
    name: "World 7-4",
    setting: "Castle",
    enemies: ["Podoboo", "Fire-Bar", "fake Bowser", "Hammer Brother"],
  },
  {
    id: uniqid(),
    name: "World 8-1",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Buzzy Beetle",
    ],
  },
  {
    id: uniqid(),
    name: "World 8-2",
    setting: "Overworld",
    enemies: [
      "Little Goomba",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Buzzy Beetle",
      "Lakitu",
      "Spiny",
      "Bullet Bill",
    ],
  },
  {
    id: uniqid(),
    name: "World 8-3",
    setting: "Overworld",
    enemies: [
      "Koopa Troopa",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Bullet Bill",
      "Hammer Brother",
    ],
  },
  {
    id: uniqid(),
    name: "World 8-4",
    setting: "Castle",
    enemies: [
      "Little Goomba",
      "Koopa Paratroopa",
      "Piranha Plant",
      "Fire-Bar",
      "Podoboo",
      "Buzzy Beetle",
      "Hammer Brother",
      "Bloober",
      "Cheep-cheep",
      "Bowser",
    ],
  },
];


const resolvers = {
  Query: {
    info: () => "A simple GraphQL server with in-memory data.",
    levels: () => levels,
  },

  Level: {
    id: (root) => root.id,
    name: (root) => root.name,
    setting: (root) => root.setting,
    enemies: (root) => root.enemies,
  },
};

const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { pubsub },
});

server.start(
  {
    port:
      (process.env.PORT ? parseInt(process.env.PORT, 10) : undefined) || 4000,
  },
  ({ port }) => console.log(`🏃🏻‍ Server is running on port ${port}.`)
);
