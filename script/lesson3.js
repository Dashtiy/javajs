function isValidPassword(password, username) {
  // Check if the password is at least 8 characters long
  const isLongEnough = password.length >= 8;

  // Check that the password does NOT contain spaces
  const hasNoSpaces = !password.includes(" ");

  // Check that the password does NOT contain the username
  const doesNotContainUsername = !password.includes(username);

  // Return true only if all 3 conditions are met
  return isLongEnough && hasNoSpaces && doesNotContainUsername;
}

// Add these lines to see the results in the console:
console.log("Test 1 (should be true):", isValidPassword("89Fjj1nms", "dogLover"));
console.log("Test 2 (should be false - contains username):", isValidPassword("dogLover123", "dogLover"));
console.log("Test 3 (should be false - has spaces):", isValidPassword("hello 1234", "user"));
console.log("Test 4 (should be false - too short):", isValidPassword("short", "user"));