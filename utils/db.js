const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
});

async function syncDatabase(){
    
    try{
        await db.authenticate();
        await db.sync({ alter: true });
        console.log('Database synchronized successfully');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
}

syncDatabase();

module.exports = db;