// Polyfill for Call Method
Function.prototype.customCall = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function!`);
  }
  obj.fnRef = this;
  const result = obj.fnRef(...args);
  return result;
};

// Polyfill for Apply Method
Function.prototype.customApply = function (obj, args) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function!`);
  }

  obj.fnRef = this;
  const result = obj.fnRef(...args);
  return result;
};

// Polyfill for Bind Method
Function.prototype.customBind = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not a function!`);
  }

  obj.fnRef = this;
  return function () {
    const result = obj.fnRef(...args);
    return result;
  };
};

// Example usage:
const person = {
  firstName: "Amit",
  lastName: "Pratap",
};

const method = {
  fullName: function (city, state, country) {
    return (
      this.firstName +
      " " +
      this.lastName +
      " , " +
      city +
      " , " +
      state +
      " , " +
      country
    );
  },
};

const callResult = method.fullName.customCall(
  person,
  "Dehradhun",
  "Uttarakhand",
  "India"
);
console.log("Call Method Result: " + callResult);

const applyResult = method.fullName.customApply(person, [
  "Dehradhun",
  "Uttarakhand",
  "India",
]);
console.log("Apply Method Result: " + applyResult);

const bindResult = method.fullName.customBind(
  person,
  "Dehradhun",
  "Uttarakhand",
  "India"
);
console.log("Bind Method Result: " + bindResult());
