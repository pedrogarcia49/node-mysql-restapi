import { config } from 'dotenv'

config()

export const APP_NAME = process.env.APP_NAME || 'NodeJs + MySQL'
export const PORT = process.env.PORT || 3000

export const DB_HOST = process.env.PORT || 'localhost'
export const DB_PORT = process.env.PORT || '3306'
export const DB_USER = process.env.PORT || 'root'
export const DB_PASSWORD = process.env.PORT || 'pedro49'
export const DB_DATABSE = process.env.PORT || 'companydb'