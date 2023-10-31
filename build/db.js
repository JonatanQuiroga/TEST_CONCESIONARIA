"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Autos_1 = require("./entities/Autos");
//INFORMACIÓN DE LA BASE DE DATOS
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "b5hahjb7f8g7bfgrgdu4-mysql.services.clever-cloud.com",
    username: "u1h9znzkxqcchhjd",
    password: "i0ivBdEAcYCN7Tainrin",
    port: 3306,
    database: "b5hahjb7f8g7bfgrgdu4",
    entities: [Autos_1.Autos],
    logging: true,
    synchronize: true
});
