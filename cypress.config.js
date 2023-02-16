
const { defineConfig } = require("cypress");
const axios = require('axios');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        async 'db:seed'() {
        
          // Send request to backend API to re-seed database with test data
          const { data } = await axios.get(config.env.api_server+`/seed`)
          //console.log(config.env.api_server)
          //cy.log(data)
          return true
        },
        //...
      })
    },
  },
});
