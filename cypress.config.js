const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
      // implement node event listeners here
    baseUrl: 'http://blackmirror.crowdtest.me.s3-website-us-east-1.amazonaws.com/',
    email: 'lc.testanalyst@gmail.com',
    senha: '123teste',
  
  },
});
