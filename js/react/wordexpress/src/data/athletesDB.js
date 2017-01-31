'use strict'

const athletes = new Sequelize('athletes', '', '', {
  host: 'localhost',
  dialect: 'mysql'
})

const Athlete = Sequelize.define('athlete', {
  id: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.STRING
  },
  birth: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  cover: {
    type: Sequelize.STRING
  },
  link: {
    type: Sequelize.STRING
  },
})
