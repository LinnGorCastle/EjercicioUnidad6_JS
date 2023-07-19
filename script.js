// Variables para almacenar los datos
var doctores = [];
var pacientes = [];

// Función para validar los campos del formulario de doctores
function validarFormularioDoctores(formulario) {
  var nombre = formulario.querySelector('#nombre').value;
  var apellido = formulario.querySelector('#apellido').value;
  var cedula = formulario.querySelector('#cedula').value;
  var especialidad = formulario.querySelector('#especialidad').value;
  var consultorio = formulario.querySelector('#consultorio').value;
  var correo = formulario.querySelector('#correo').value;

  var mensaje = '';
  var validador = true;

  // Expresión regular para validar la cédula (formato numerico y que tenga entre 5 y 10 caracteres)
  var cedulaRegex = /^[1-9]\d{4,9}$/;

  // Expresión regular para validar el correo electrónico (string, caracter @, string, caracter ., string)
  var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nombre || !apellido || !cedula || !especialidad || !consultorio || !correo) {
    mensaje += '- Por favor, complete todos los campos';
    validador = false;
  }

  if (!cedulaRegex.test(cedula)) {
    mensaje += '- La cédula debe ser numérica y debe tener entre 5 y 10 dígitos.';
    validador = false;
  }

  if (!correoRegex.test(correo)) {
    mensaje += '- Ingrese un correo electrónico válido.';
    validador = false;
  }

  if (!especialidad) {
    mensaje += '- Seleccione cual es la especialidad.';
    validador = false;
  }

  if (validador === false) {
    mensaje = 'Se han presentado errores para almacenar la informacion: ' + mensaje + ''
    alert(mensaje);
  }

  return validador;
}

// Función para validar los campos del formulario de doctores
function validarFormularioPacientes(formulario) {
  var nombre = formulario.querySelector('#nombrePaciente').value;
  var apellido = formulario.querySelector('#apellidoPaciente').value;
  var cedula = formulario.querySelector('#cedulaPaciente').value;
  var edad = formulario.querySelector('#edad').value;
  var telefono = formulario.querySelector('#telefono').value;
  var especialidad = formulario.querySelector('#especialidadPaciente').value;

  var mensaje = '';
  var validador = true;

  // Expresión regular para validar la cédula (formato numerico y que tenga entre 5 y 10 caracteres)
  var cedulaRegex = /^[1-9]\d{4,9}$/;

  // Expresión regular para validar la edad (maximo 3 caracteres)
  var edadRegex = /^\d{1,3}$/;

  // Expresión regular para validar el numero de teléfono (formato numerico con maximo 10 caracteres)
  var telefonoRegex = /^\d{10}$/;

  if (!nombre || !apellido || !cedula || !especialidad || !consultorio || !correo) {
    mensaje += '- Por favor, complete todos los campos';
    validador = false;
  }

  if (!cedulaRegex.test(cedula)) {
    mensaje += '- La cédula debe ser numérica y debe tener entre 5 y 10 dígitos.';
    validador = false;
  }

  if (!edadRegex.test(edad)) {
    mensaje += '- La edad registrada debe ser numerica y de maximo tres digitos.';
    validador = false;
  }

  if (!telefonoRegex.test(telefono)) {
    mensaje += '- El telefono registrado debe ser numerico y debe tener 10 digitos.';
    validador = false;
  }

  if (!especialidad) {
    mensaje += '- Seleccione cual es la especialidad.';
    validador = false;
  }

  if (validador === false) {
    mensaje = 'Se han presentado errores para almacenar la informacion: ' + mensaje + ''
    alert(mensaje);
  }

  return validador;
}

// Función para agregar un doctor
function agregarDoctor(event) {
  event.preventDefault();
  var formulario = document.getElementById('doctorForm');

  if (validarFormularioDoctores(formulario)) {
    var nombre = formulario.querySelector('#nombre').value;
    var apellido = formulario.querySelector('#apellido').value;
    var cedula = formulario.querySelector('#cedula').value;
    var especialidad = formulario.querySelector('#especialidad').value;
    var consultorio = formulario.querySelector('#consultorio').value;
    var correo = formulario.querySelector('#correo').value;

    var doctor = {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      especialidad: especialidad,
      consultorio: consultorio,
      correo: correo
    };

    doctores.push(doctor);
    formulario.reset();
    alert('Doctor agregado correctamente');
    mostrarDoctores();
  }
}

// Función para agregar un paciente
function agregarPaciente(event) {
  event.preventDefault();
  var formulario = document.getElementById('pacienteForm');

  if (validarFormularioPacientes(formulario)) {
    var nombre = formulario.querySelector('#nombrePaciente').value;
    var apellido = formulario.querySelector('#apellidoPaciente').value;
    var cedula = formulario.querySelector('#cedulaPaciente').value;
    var edad = formulario.querySelector('#edad').value;
    var telefono = formulario.querySelector('#telefono').value;
    var especialidad = formulario.querySelector('#especialidadPaciente').value;

    var paciente = {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      edad: edad,
      telefono: telefono,
      especialidad: especialidad
    };

    pacientes.push(paciente);
    formulario.reset();
    alert('Paciente agregado correctamente');
    mostrarPacientes();
  }
}

// Función para mostrar la lista de doctores
function mostrarDoctores() {
  var listaDoctores = document.getElementById('listaDoctores');
  listaDoctores.innerHTML = '';

  if (doctores.length > 0) {
    // Crear tabla
    var tabla = document.createElement('table');
    tabla.className = 'table';

    // Crear encabezado de tabla
    var encabezado = tabla.createTHead();
    var encabezadoFila = encabezado.insertRow();

    var encabezadoNombre = document.createElement('th');
    encabezadoNombre.textContent = 'Nombre';
    encabezadoFila.appendChild(encabezadoNombre);

    var encabezadoApellido = document.createElement('th');
    encabezadoApellido.textContent = 'Apellido';
    encabezadoFila.appendChild(encabezadoApellido);

    var encabezadoDocumento = document.createElement('th');
    encabezadoDocumento.textContent = 'Num. Documento';
    encabezadoFila.appendChild(encabezadoDocumento);

    var encabezadoCorreo = document.createElement('th');
    encabezadoCorreo.textContent = 'Email';
    encabezadoFila.appendChild(encabezadoCorreo);

    var encabezadoEspecialidad = document.createElement('th');
    encabezadoEspecialidad.textContent = 'Especialidad';
    encabezadoFila.appendChild(encabezadoEspecialidad);

    var encabezadoConsultorio = document.createElement('th');
    encabezadoConsultorio.textContent = 'Cod. Consultorio';
    encabezadoFila.appendChild(encabezadoConsultorio);

    // Crear cuerpo de tabla
    var cuerpo = tabla.createTBody();

    // Insertar filas con datos de los doctores
    for (var i = 0; i < doctores.length; i++) {
      var doctor = doctores[i];

      var fila = cuerpo.insertRow();

      var celdaNombre = fila.insertCell();
      celdaNombre.textContent = doctor.nombre;

      var celdaApellido = fila.insertCell();
      celdaApellido.textContent = doctor.apellido;

      var celdaDocumento = fila.insertCell();
      celdaDocumento.textContent = doctor.cedula;

      var celdaCorreo = fila.insertCell();
      celdaCorreo.textContent = doctor.correo;

      var celdaEspecialidad = fila.insertCell();
      celdaEspecialidad.textContent = doctor.especialidad;

      var celdaConsultorio = fila.insertCell();
      celdaConsultorio.textContent = doctor.consultorio;
    }

    // Agregar tabla al contenedor
    listaDoctores.appendChild(tabla);
  } else {
    // Mostrar mensaje si no hay doctores
    listaDoctores.textContent = 'No hay doctores registrados.';
  }
}

// Función para mostrar la lista de pacientes
function mostrarPacientes() {
  var listaPacientes = document.getElementById('listaPacientes');
  listaPacientes.innerHTML = '';

  if (pacientes.length > 0) {
    // Crear tabla
    var tabla = document.createElement('table');
    tabla.className = 'table';

    // Crear encabezado de tabla
    var encabezado = tabla.createTHead();
    var encabezadoFila = encabezado.insertRow();

    var encabezadoNombre = document.createElement('th');
    encabezadoNombre.textContent = 'Nombre';
    encabezadoFila.appendChild(encabezadoNombre);

    var encabezadoApellido = document.createElement('th');
    encabezadoApellido.textContent = 'Apellido';
    encabezadoFila.appendChild(encabezadoApellido);

    var encabezadoDocumento = document.createElement('th');
    encabezadoDocumento.textContent = 'Num. Documento';
    encabezadoFila.appendChild(encabezadoDocumento);

    var encabezadoCorreo = document.createElement('th');
    encabezadoCorreo.textContent = 'Edad';
    encabezadoFila.appendChild(encabezadoCorreo);

    var encabezadoEspecialidad = document.createElement('th');
    encabezadoEspecialidad.textContent = 'Teléfono';
    encabezadoFila.appendChild(encabezadoEspecialidad);

    var encabezadoConsultorio = document.createElement('th');
    encabezadoConsultorio.textContent = 'Especialidad';
    encabezadoFila.appendChild(encabezadoConsultorio);

    // Crear cuerpo de tabla
    var cuerpo = tabla.createTBody();

    // Insertar filas con datos de los doctores
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];

      var fila = cuerpo.insertRow();

      var celdaNombre = fila.insertCell();
      celdaNombre.textContent = paciente.nombre;

      var celdaApellido = fila.insertCell();
      celdaApellido.textContent = paciente.apellido;

      var celdaDocumento = fila.insertCell();
      celdaDocumento.textContent = paciente.cedula;

      var celdaEdad = fila.insertCell();
      celdaEdad.textContent = paciente.edad;

      var celdaTelefono = fila.insertCell();
      celdaTelefono.textContent = paciente.telefono;

      var celdaEspecialidad = fila.insertCell();
      celdaEspecialidad.textContent = paciente.especialidad;
    }

    // Agregar tabla al contenedor
    listaPacientes.appendChild(tabla);
  } else {
    // Mostrar mensaje si no hay doctores
    listaPacientes.textContent = 'No hay pacientes registrados registrados.';
  }
}

// Función para guardar los datos en un archivo JSON
function guardarDatosEnJSON(nombreArchivo, datos) {
  var datosJSON = JSON.stringify(datos);
  var enlaceDescarga = document.createElement('a');
  enlaceDescarga.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(datosJSON));
  enlaceDescarga.setAttribute('download', nombreArchivo);
  enlaceDescarga.style.display = 'none';
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();
  document.body.removeChild(enlaceDescarga);
}

// Función para descargar el listado de doctores en formato JSON
function descargarDoctores() {
  guardarDatosEnJSON('doctores.json', doctores);
}

// Función para descargar el listado de pacientes en formato JSON
function descargarPacientes() {
  guardarDatosEnJSON('pacientes.json', pacientes);
}

// Eventos
document.getElementById('doctorForm').addEventListener('submit', agregarDoctor);
document.getElementById('pacienteForm').addEventListener('submit', agregarPaciente);
document.getElementById('descargarDoctores').addEventListener('click', descargarDoctores);
document.getElementById('descargarPacientes').addEventListener('click', descargarPacientes);
window.addEventListener('DOMContentLoaded', mostrarDoctores);
window.addEventListener('DOMContentLoaded', mostrarPacientes);