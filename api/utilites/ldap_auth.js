'use strict'

const ldapjs = require('ldapjs')

const ldapOptions = {
    url : 'ldap://localhost:389',
    connectTimeout : 10000,
    reconnect : true
}

const authenticate = (username, password) => {
    const ldapClient = ldapjs.createClient(ldapOptions)

    ldapClient.bind(
        "cn=" + username + ",ou=siuu,dc=siuu,dc=edu,dc=co", 
        password, 
        function(err){
            if(err){
                return "error"
            }else{
                console.log("Ldap access")
                return "success"
            }
    })
}
module.exports = {authenticate}
// 