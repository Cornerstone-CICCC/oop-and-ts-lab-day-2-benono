"use strict";
// Create an interface `Company` that contains a `name`, `address`, and `employees`.
// - Use `Partial` to update any part of the company, including nested `employees` objects.
// - Return type: updated `Company` object.
// function updateCompany<T extends Partial<Company>>(
//   company: Company,
//   updates: T
// ): Company {
//   console.log(company);
//   console.log(updates);
//   // TODO: fix this
//   return { ...company, ...updates };
// }
function updateCompany(company, updates) {
    return {
        ...company,
        ...updates,
        employees: updates.employees
            ? company.employees.map((emp, index) => ({
                ...emp,
                ...updates.employees?.[index],
            }))
            : company.employees,
    };
}
// Expected output:
const company = {
    name: "TechCorp",
    address: "123 St",
    employees: [{ name: "Alice", role: "Developer", salary: 100000 }],
};
console.log(updateCompany(company, {
    employees: [{ name: "Alice", role: "Senior Developer" }],
}));
// { name: "TechCorp", address: "123 St", employees: [{ name: "Alice", role: "Senior Developer", salary: 100000 }] }
