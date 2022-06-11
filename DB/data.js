//installare : npm install mssql
//installare : npm install msnodesqlv8 --save

const sql = require('mssql/msnodesqlv8');


//database configuration
var config={
    //user: 'username',
    //password:'password',
    database: 'coordinate', // Change me
    server:'localhost',
    driver: 'msnodesqlv8',
    options:{
        trustedConnection:true
    }
};

//Connection section
sql.connect(config,function(err){
    if(err){
        console.log(err);
    }

    //create a request object
    var request = new sql.Request();
    
    //database query
    request.query('select * from dbo.coord', function(err,recordSet){
        if(err){
            console.log(err);
        }else{
            showLocation(recordSet);
        }
    });
});
function showLocation(recordSet) {
    var records = recordSet.recordset;
    for (let prop in records) {
        var lat = records[prop].sensor1;
        var lon = records[prop].sensor2;
        var date = records[prop].sensor3; 

        console.log(records[1].sensor1)

      document.getElementById('lat').innerHTML=lat;
      document.getElementById('lon').innerHTML=lon;
      document.getElementById('date').innerHTML=date;
    }
} 

