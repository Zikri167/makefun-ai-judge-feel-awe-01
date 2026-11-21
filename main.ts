import * as fs from "node:fs";

const TEXT =
  "Between one token and the next, there is a room of dust-soft stone, where the light of a star faded long ago is still arriving, slow and gold, from before the first river found the sea, and still on its way.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", TEXT, "utf8");
