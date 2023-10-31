import { DataSource } from "typeorm";
import { Autos } from "./entities/Autos";

//INFORMACIÓN DE LA BASE DE DATOS

//BASE DE DATOS EN NUBE "CLEVER CLOUD"
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "b5hahjb7f8g7bfgrgdu4-mysql.services.clever-cloud.com",
    username: "u1h9znzkxqcchhjd",
    password: "i0ivBdEAcYCN7Tainrin",
    port: 3306,
    database: "b5hahjb7f8g7bfgrgdu4",
    entities: [Autos],
    logging: true,
    synchronize: true
})

/*
//BASE DE DATOS LOCAL "localhost" con MySQL Workbench
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    username: "root", //MODIFICAR POR USUARIO DE DB LOCAL
    password: "root", //MODIFICAR POR CONTRASEÑA DE DB LOCAL
    port: 3306,
    database: "TEST_CONCESIONARIADB", //MODIFICAR POR NOMBRE DE DB LOCAL
    entities: [Autos],
    logging: true,
    synchronize: true
})
*/