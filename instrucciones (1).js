function captura(){

	var nombreest=document.getElementById("nomest").value;
	if(nombreest==""){
		console.log("nombre obligatorio");
	}else{
		console.log(nombreest)
	}

	const mysql = require('mysql')

//attributos que tiene mi base de datos
const conection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'mochila'
})

//realiza la conexion con la base de datos
conection.connect( (err) =>{
	if(err) throw err
	console.log('La conexion funciona')
})


//insertar en la base de datos mochila y en la tabla libreta los siguientes datos

const insertar = "INSERT INTO libreta (pasta, hojas, espiral, portada) VALUES ('perro1', 'gato1', 'arania1', 'perico1')"
conection.query(insertar, (err,rows)=>{
		if(err) throw err
})

//selecciona la tabla libreta y manda a llamar los datos que estan en ella
conection.query('SELECT * from libreta',(err,rows) =>{
	if(err) throw err
	console.log('Los datos de la tabla son estos: ')
	console.log(rows)
})

conection.end()
}

