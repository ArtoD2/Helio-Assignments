let users = [];

function getUser(username){

    let user = users.find( element => {
        return element.username === username
    })
    
    return user
}

function addUser(username, password){

    let user = {username,password}
    users.push(user)
    return user
}

function updatePassword(username, oldPassword, password){
    
    let user = getUser(username, oldPassword)
    
    if (user != undefined){
        user.password=password
    }
    return user

}

module.exports.getUser = getUser
module.exports.addUser = addUser
module.exports.updatePassword = updatePassword