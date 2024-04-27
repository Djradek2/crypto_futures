const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.SERVER_IP,
    PORT: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSW,
    database: process.env.DB_NAME
});

connection.connect((err)=> {
    if (err) {
        console.log(err.message);
    } else{
        console.log('db ' + connection.state);
    }
})

class DbService{
    static getDbServiceInstance(){
        return instance ? instance : new DbService();                   //vrátí instanci pokud existuje, jinak ji vytvoří, (Condition ? True : False)
    }

    async getAllData(timeframe){
        try {
            const response = await new Promise((resolve, reject) => {   //Promise = něco udělá, čeká na návrat proměných (resolve/reject)
                const query = "SELECT * FROM " + timeframe;

                connection.query(query, (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                }) 
            });
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = DbService;