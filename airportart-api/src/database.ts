import { createPool } from 'mysql2/promise';

export async function connect() {

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'camilo23',
        database: 'azulo_test',
        connectionLimit: 10
    });
    
    return connection;

}