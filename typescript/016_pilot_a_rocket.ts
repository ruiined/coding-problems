import { strict as assert } from "assert";

/* 

You work for RocketX, a company that is going to send the first humans to colonize Mars. It is your job to write the algorithm that will connect the base on Earth to the space ship through a series of satellites to send instructions to pilot the rocket. It's important to connect to it quickly, so we need to find the shortest path from the base to the ship.

Given a graph data structure representing satellites, find the shortest path through the satellites to reach the target. You can always assume there will only be one shortest path.

The starting node will always be base and the ending node will be ship. If the ship can't be reached, return null.

Write a function pilotRocket that takes a satellites input graph and returns an array of satellite IDs in the order that reaches the ship in the shortest path.

const satellites = {
  'base': ['sat0'],
  'sat0': ['base', 'sat1', 'sat3', 'sat4'],
  'sat1': ['sat0', 'sat2'],
  'sat2': ['sat1', 'sat3', 'sat4'],
  'sat3': ['sat0', 'sat2', 'sat4'],
  'sat4': ['sat0', 'sat2', 'sat3', 'sat5'],
  'sat5': ['sat4', 'ship'],
};
pilotRocket(satellites);

['base', 'sat0', 'sat4', 'sat5', 'ship']

*/

type Satellites = Record<string, string[]>;
type Path = Record<string, string>;

const startNode = "base";
const endNode = "ship";

const travelBack = (path: Path) => {
  const journey: string[] = [];
  let node = endNode;

  while (node) {
    journey.push(node);

    if (node === startNode) {
      break;
    }

    node = path[node];
  }

  return journey.reverse();
};

const pilotRocket = (satellites: Satellites) => {
  const queue = [startNode];
  const visited: Path = {};

  while (!!queue.length) {
    const current = queue.pop();

    if (!current) {
      return null;
    }

    if (current === endNode) {
      return travelBack(visited);
    }

    satellites[current].forEach((satellite) => {
      if (!visited[satellite]) {
        queue.unshift(satellite);
        visited[satellite] = current;
      }
    });
  }

  return null;
};

/*
  Time complexity: O(V + E)
  Space complexity: O(V)
*/

assert.deepEqual(
  pilotRocket({
    base: ["sat0"],
    sat0: ["base", "sat1", "sat3", "sat4"],
    sat1: ["sat0", "sat2"],
    sat2: ["sat1", "sat3", "sat4"],
    sat3: ["sat0", "sat2", "sat4"],
    sat4: ["sat0", "sat2", "sat3", "sat5"],
    sat5: ["sat4", "ship"],
  }),
  ["base", "sat0", "sat4", "sat5", "ship"]
);
