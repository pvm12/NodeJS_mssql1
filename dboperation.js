var config = require("./dbconfig");
const sql = require("mssql");

async function getdata() {
    try {
        let pool = await sql.connect(config);
        console.log("sql server connected...");
    } catch (error) {
        console.log("error" + error);
    }
}

async function getdata_withQuery(year,month) {
    // console.log();
    console.log("Год : " + year);
    let s = "SELECT * FROM OPENQUERY(SC, 'Data_DB.dbo.askue_ec1_soe2 1603,''01."+month+"."+year+"'',1')";
    console.log(s);
    try {
        let pool = await sql.connect(config);
        let res = await pool.request().query(s)
        return res.recordsets;
    }catch(error) {
        console.log(" mathus-error :" + error);
    }
}

module.exports = {
    getdata: getdata,
    getdata_withQuery: getdata_withQuery
}