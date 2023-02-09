// importar el módulo express usando la declaración require() de JavaScript , y luego invocar express.
const express = require("express");
const app = express();
const port = 8000;

//importar faker
const {faker} = require('@faker-js/faker');

//Creo Clase Usuario
class User{
    constructor(){
        const users =[
            this._id= faker.database.mongodbObjectId(), 
            this.firstName= faker.name.firstName(),
            this.lastName= faker.name.lastName(),
            this.numberPhone= faker.phone.number(),
            this.email= faker.internet.email(),
            this.password= faker.internet.password()
        ];
    }
    
}

class Company{
    constructor(){
        const company =[
            this._id= faker.database.mongodbObjectId(), 
            this.nameCompay= faker.company.name(),
            this.address= [
                {
                    street: faker.address.street(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    postalCode: faker.address.countryCode(),
                    country: faker.address.country()
                }
            ]
        ];
    }
}
console.log(new User());
console.log(new Company());

app.get("/api/users/new", (req, res) => {
    res.json( new User() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( new Company() );
});

app.get("/api/user/company", (req, res) => {
    let newUser = new User();
    let newCompany = new Company();
    let userCompany = Object.assign(newUser,  newCompany);
    console.log(userCompany)
    res.json(userCompany);
    
});

app.listen( port, () => console.log(`Listening on port: ${port}`));


