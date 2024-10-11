"use strict";
// Create a function `generateSummary` that accepts an array of objects representing users with `name`, `age`, and `active` properties.
// The function should return a summary object containing the number of active users and the average age of active users.
// Return type: { activeCount: number, averageAge: number }
function generateSummary(users) {
    const activeUsers = users.filter((user) => user.active);
    const averageAge = activeUsers.reduce((sum, user) => sum + user.age, 0) / activeUsers.length;
    return { activeCount: activeUsers.length, averageAge };
}
// Expected output:
const result = generateSummary([
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true },
]);
console.log(result);
// { activeCount: 2, averageAge: 32.5 }
