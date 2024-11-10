const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES 
  ('Snape'),
  ('McGonagall'),
  ('Dumbledore');
`;

async function main() {
  console.log("seeding...");
  const roleName = process.env.ROLE_NAME;
  const rolePassword = process.env.ROLE_PASSWORD;
  const client = new Client({
    connectionString: `postgresql://${roleName}:${rolePassword}@localhost:5432/top_users`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
