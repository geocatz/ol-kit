const fs = require('fs')

describe('cli', () => {
    it('should verify app/demos/world exists', () => {
        try {
            require('../app/demos/world/App.js')
            require('../app/demos/world/index.js')
            expect(true).toBe(true)
        }
        catch(e) {
            console.log('app/demos/world has been borked!!')
            console.log(e)
            expect(false).toBe(true)
        }
    })
  })