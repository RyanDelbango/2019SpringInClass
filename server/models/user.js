const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM UserPass", (err, data) => {
            cb(err, data);  
        })
    
    },
    get(id, cb){

    },
    add(input, cb){
        conn.query( "INSERT INTO UserPass (userid, passcode) VALUES (?)",
        [[input.userid, input.passcode]],
        (err, data) => {
            cb(err,data);
        }
        )

    }
};

module.exports = model;