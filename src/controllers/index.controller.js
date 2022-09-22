import {pool} from '../db.js'

export const home = (req, res)=> {res.send('<a href="/api/employees">Employees</a>')}

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS RESULT')
    res.json(result[0])
}