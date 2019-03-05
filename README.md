# API Graphql with Koa and Mongodb

Poweful API made with GraphQL, Koa and MongoDB (Mongo Cloud). 

## Live app
Running on: [https://graphql-api-crud.herokuapp.com/graphql](https://graphql-api-crud.herokuapp.com/graphql)

### Commands
- Add gadget:
```javascript
mutation{
  addGadget(
    name: "Microsoft Surface",
    release_date: "October 26, 2012",
    price: "900",
    by_company: "Microsoft"
  ){
    name
    release_date
    price
    by_company
    price
    id
  }
}
```
- Update gadget:
```javascript
mutation{
  updateGadget(
    id: "<id of the object>",
    name: "Microsoft Surface",
    release_date: "October 26, 2012",
    price: "899",
    by_company: "Microsoft"
  ){
    name
    release_date
    price
    by_company
    price
    id
  }
}
```
- Remove gadget:
```javascript
mutation{
  removeGadget(
    id: "<id of the object>",
  ){
    name
    release_date
    price
    by_company
    price
    id
  }
}
```
- Find all gadgets:
```javascript
{
  queryAllGadgets{
    name
    id
    release_date
    by_company
    price
  }
}
```
- Find gadget by ID:
```javascript
{
  queryGadgetById(id: "<id of the object>"){
    name
    id
    release_date
    by_company
    price
  }
}
```

## Installing
1. Clone or download the project.  
2. Enter on the folder:
```shell
cd api-graphql-koa-mongodb
```
3. Install the dependencies:
```shell
npm install
```
4. Run the server:
```shell
node server.js
```

Your project will be running at [http://localhost:9000](http://localhost:9000)

Following the tutorials from [Indrek Lasn, at Strilliant](https://www.strilliant.com/2019/01/27/how-to-setup-a-powerful-api-with-graphql-koa-and-mongodb/)
