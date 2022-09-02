import { Request, Response } from 'express';

import { connect } from '../database'
import { Airport } from '../interface/Aiport';

export async function getAirports(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const courses = await conn.query('SELECT * FROM airport');
    return res.json(courses[0]);

}

export const changeAirportOperator = async (req: Request, res: Response) => {
    const { airport_id, new_operator_id } = req.body;
    
    const conn = await connect();
    const airport = await conn.query('UPDATE airport SET airport_operator_id = ' + new_operator_id + ' WHERE id = ' + airport_id + ';');

    return res.json(airport);
};

export const changeAirportPriority = async (req: Request, res: Response) => {
    const { airports } = req.body;
    const conn = await connect();
    let dataAarray:any[] = []; 
    Object.keys(airports).map( async (key) =>{
        dataAarray.push(await conn.query('UPDATE airport SET priority_order = ' + airports[key].new_operator_id + ' WHERE id = ' + airports[key].airport_id + ';'));
    });
    return res.json(dataAarray);
}