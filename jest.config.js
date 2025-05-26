module.exports = {
  testEnvironment: 'jsdom',
  testMatch: [
    '**/tests/**/*.test.js',
    '**/tests/**/*.spec.js'
  ],
  collectCoverageFrom: [
    'js/**/*.js',
    '!js/**/*.min.js',
    '!node_modules/**'
  ]
};
