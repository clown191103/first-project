const express = require("express");

const app = express();
const PORT = 8080;

app.listen(PORT,() => console.log(`Running Express server on Port ${PORT}!`));

const grocerylist = [
{
    item: 'milk',
    quantity: 2,

},
{
    item: 'maize',
    quantity: 1,
},
];

app.get('/groceries', (request, response) => {
    console.log('here')
    response.send(grocerylist)
});

app.post('/groceries', (request, response) => {
    console.log(request.body)
    response.send(201)
});
