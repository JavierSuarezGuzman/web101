  function login()
  {
     alert("aca vamos");

     //recuperar valores de formulario
     var usuario = document.frmLogin.txtUsername.value;	
     var pass = document.frmLogin.txtPassword.value;
     var pagina = "";

     if(usuario == 'jbilbao')
     {
        pagina = "alumnos.html";
     }

     if(usuario == 'msoto')
     {
        pagina = "notas.html";
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

	 window.location.href="ingresoAlumno.html";
	}
function aceptarAL()
	{
	 alert("acá volveremos al listado de alumnos");

	 window.location.href="alumnos.html";
	}


function nuevoNotas()
	{
	 alert("acá haremos ingreso de notas");

	 window.location.href="ingresoNotas.html";
	}
function aceptarNotas()
	{
	 alert("acá volveremos al listado de notas");

	 window.location.href="notas.html";
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












