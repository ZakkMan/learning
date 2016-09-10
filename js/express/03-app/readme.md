# Setting up Sequelize in a new project

## Getting Started

To install everything we need, run:
```
npm install sequelize pg pg-hstore --save
```

and:

```
npm install -g sequelize-cli
```

## Sequelize config

Create a `.sequelizerc` file with the following configuration options:

```
module.exports = {
  'config': 'sequelize.json',
  'migrations-path': 'migrations',
  'models-path': 'models',
  'seeders-path': 'seeders'
}
```

To initialize run: `sequelize init`

## Creating a Migration
Migrations are created from the command line with the following command:

```
sequelize model:create --name Todos --attributes "title:string, complete:boolean,UserId:integer"
```
