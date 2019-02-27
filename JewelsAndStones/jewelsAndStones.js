// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
// Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. 
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Runtime: 60 ms, faster than 78.58% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 34.1 MB, less than 48.99% of JavaScript online submissions for Jewels and Stones.
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
    let numJewels = 0;
    const knownJewels = new Set(jewels);
    for (const stone of stones) {
        if (knownJewels.has(stone)){
            numJewels++
        }
    }
    return numJewels;
};

module.exports = numJewelsInStones;


