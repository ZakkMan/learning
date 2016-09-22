# GraphQL

GraphQL is a query language for your API and a server-side runtime for executing queries by using a type system you define for your data. 

- not tied to a specific database
- acts as a layer between your front end and your database



## Queries and Mutations





## Schemas and Types

Learning all about the GraphQL type system and how it describes what data can be queried

### Type System

GraphQL is basically about selecting fields on objects:

```
{
  hero {
    name
    appearsIn
  }
}
```

1. We start with a "root" object
2. We select the `hero` field on it
3. For the object returned by `hero`, we select the `name` and `appearsIn` fields

They type system lets us predict what the server will return without having to know that much about how it's structured, because the query and result will look a lot alike (and have the same structure).

Having an exact description of the data we can ask for is still useful so we know what fields we can query, what kind of objects they'll return and what fields are on any sub-objects. This is what the `Schema` is for.

```Every GraphQL service defines a set of types which completely describe the set of possible data you can query on that service. Then, when queries come in, they are validated and executed against that schema.```

- We define a schema that controls what data can be queried through our GraphQL service
- All queries are validated against this schema
- We can only query data that is defined as queriable in our Schema



### Type Language

#### Object Types and Fields

- Most basic component of a GraphQL schema
- represent a kind of object you can fetch from your service and what fields it has

```coffeescript
type Character {
  name: String!
  appearsIn: [Episode]!
}
```

- `Character` - the GraphQL Object Type, i.e. an object with some fields
- `name` and `appearsIn` - fields on the `Character` type
- `String` - one of the built-in scalar types, types that resolve to a single object
- `String!` - a non-nullable, meaning the GraphQL service will always return a value for this field
- `[Episode]` array of `Episode` objects



#### Arguments

- every frield can have zero or more arguments

```
type Starship {
  id: ID!
  name: String!
  length(unit: LengthUnit = METER): Float
}
```

- all arguments are named
- arguemnts can be required or optional
- we can define a default value



#### Query and Mutation Types

- Most types will be normal objects types
- `query` and `mutation` are two special types within our schema

```
schema {
  query: Query
  mutation: Mutation
}
```

- every GraphQL service has a `query` type and may or may not have a `mutation` type
- these define the *entry point* of every GraphQL query

If we had a query like this:

```
query {
  hero {
    name
  }
  droid(id: "2000") {
    name
  }
}
```

It would return this `json`:

```
{
  "data": {
    "hero": {
      "name": "R2-D2"
    },
    "droid": {
      "name": "C-3PO"
    }
  }
}
```

So our GraphQL service would need a `Query` type with `hero` and `droid` fields:

```
type Query {
  hero(episode: Episode): Character
  droid(id: ID!): Droid
}
```



#### Scalar Types

- the leaves of the query
- at some point fields need to resolve to concrete data

This query:

```
{
  hero {
    name
    appearsIn
  }
}
```

resolves to:

```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ]
    }
  }
}
```

The Scalare types are:

- `Int`
- `Float`
- `String`
- `Boolean`
- `ID`





















