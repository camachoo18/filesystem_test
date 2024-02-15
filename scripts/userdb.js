const fs = require('fs')

const db = "./db/users.json"

function readJSON(db){
    const miobjeto_json = fs.readFileSync(db, "utf-8")
    const miobjeto = JSON.parse(miobjeto_json)
    return miobjeto
}

function resetUsers(){
    const user0 = {
        "username": "admin",
        "password": "1234"
    }

    const user1 = {
        "username": "usuario0",
        "password": "1234"
    }

    const user2 = {
        "username": "usuario1",
        "password": "1234"
    }
    const miobjeto = {
        "users": [user0, user1, user2]
    }

    fs.writeFile(db, JSON.stringify(miobjeto, null, 2), (err) => {
        if(err){
            console.log(err)
            return
        }
        console.log("Archivo creado")
    })

}

function addUsers(){
    const miobjeto = readJSON(db)
    const {users} = miobjeto
    console.log(typeof users)

}


addUsers(db)
module.exports = {
    readJSON,
    db
}