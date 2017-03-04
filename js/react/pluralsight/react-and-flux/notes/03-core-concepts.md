# Core Concepts

## Why React
* Fast - can scale to large and complex UIs by being super efficient about when it updates the DOM
* Composable components - nest components in other components and pass data between components
* Easily pluggable into existing applications
* Isomorphic Friendly, can be rendered on the client and the server
* Simple - small API, not a lot of moving parts

## JSX
XML-like syntax for "HTML" in javascript
compiles down to Javascript (just an abstraction over function calls)

JSX:
```
<h1 color="red">Heading</h1>
```

Compiles to:
```
React.createElement("h1", {color: "red"}, "Heading")
```
