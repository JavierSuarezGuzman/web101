  function login()
  {
     alert("aca vamos");

     //recuperar valores de formulario
     var usuario = document.frmLogin.Rol.value;	
     //var pass = document.frmLogin.txtPassword.value;

     var pagina = "";

     if(usuario == 'Profesor')
     {
        pagina = "vwAlumnos.html";
     }

     if(usuario == 'Alumno')
     {
        pagina = "vwNotas.html";
     }
     
	if(usuario == 'Administracion')
     {
        pagina = "vwCursos.html";
     }

     //aca se define la pagina de destino
     document.frmLogin.action = pagina;

     //aca se envia el formulario a otra pagina
     document.frmLogin.submit();

  }


  function volver()
  {
     alert("aca volvemos");

     //otra manera de ir a otra pagina
    window.location.href = "login.html";


  }

function nuevoAlumnos()
	{
	 alert("acá haremos ingreso de un nuevo alumno");

	 window.location.href="frmAlumno.html";
	}
function aceptarAL()
	{
	 alert("acá volveremos al listado de alumnos");

	 window.location.href="vwAlumnos.html";
	}


function nuevoNotas()
	{
	 alert("acá haremos ingreso de notas");

	 window.location.href="frmNota.html";
	}
function aceptarNotas()
	{
	 alert("acá volveremos al listado de notas");

	 window.location.href="vwNotas.html";
	}


function frmCurso()
	{
	 alert("acá haremos ingreso de un curso");

	 window.location.href="frmCurso.html";
	}
function aceptarCurso()
	{
	 alert("acá volveremos al listado de cursos");

	 window.location.href="vwCursos.html";
	}	


function clearAlumno()

	{
//	 value="";
  document.ingresoAlumno.nombre.value="";
  document.ingresoAlumno.edad.value="";
  document.ingresoAlumno.curso.value="";
  document.ingresoAlumno.rut.value="";
  document.ingresoAlumno.pais.value="0";
// hasta aquí limpia alumnos
	}

function clearNotas()
	{
  document.ingresoNotas.nombre.value="0";
  document.ingresoNotas.nota1.value="";
  document.ingresoNotas.nota2.value="";
  document.ingresoNotas.nota3.value="";
 // document.ingresoNotas.promedio.value="&nbsp;"; este método no lo limpia el promedio
  document.getElementById("mensajePromedio").innerHTML = "&nbsp;";
//hasta aquí limpia notas
	}

function clearCurso()
	{
  document.frmCurso.curso.value="";
  document.frmCurso.escuela.value="0";
  document.frmCurso.modalidad.value="0";
  document.frmCurso.status.value="0";
// hasta aquí limpia cursos
	}


function promedio()
	{
	 var nota1 =   document.ingresoNotas.nota1.value;  
 	 var nota2 =   document.ingresoNotas.nota2.value;
 	 var nota3 =   document.ingresoNotas.nota3.value;
	 var elPromedio = (Number(nota1) + Number(nota2) + Number(nota3))/3;
	if (nota1 >= 10 && nota1 <= 70 && nota2 >= 10 && nota2 <= 70 && nota3 >= 10 && nota3 <= 70) 
	 {
	 document.getElementById("mensajePromedio").innerHTML = elPromedio;
	 }else	{
		document.getElementById("mensajePromedio").innerHTML = "Las notas deben estar entre 10 y 70";
		}
	}


/*function promedio()
	{
	 var nota1 =   document.ingresoNotas.nota1.value;  
 	 var nota2 =   document.ingresoNotas.nota2.value;
 	 var nota3 =   document.ingresoNotas.nota3.value;
	suma = 0;
	cantNotas = 0;
	 //var elPromedio = (Number(nota1) + Number(nota2) + Number(nota3))/3;
	var elPromedio = suma / cantNotas;
		if nota1 !="" 
		{
		 cantNotas = cantNotas+1;
		}
		if nota2 !=""
		{
		 cantNotas = cantNotas+1;
		}
		if nota3 !=""
		{
		 cantNotas = cantNotas+1;
		}
	 if (nota1 >= 10 && nota1 <= 70 && nota2 >= 10 && nota2 <= 70 && nota3 >= 10 && nota3 <= 70) 
	 {
	 document.getElementById("mensajePromedio").innerHTML = elPromedio;
	 }else	{
		document.getElementById("mensajePromedio").innerHTML = "Las notas deben estar entre 10 y 70";
		}
	}

*/










