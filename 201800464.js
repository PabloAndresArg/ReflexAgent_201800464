
function reflex_agent(location, state) {
	if (state == "DIRTY") return "CLEAN";
	else if (location == "A") return "RIGHT";
	else if (location == "B") return "LEFT";
}
const flags = [0, 0, 0, 0, 0, 0, 0, 0];
function test(states) {

	var location = states[0];
	var state = states[0] == "A" ? states[1] : states[2];
	var action_result = reflex_agent(location, state);
	//-------------------- STATES
	printState(states, flags);
	console.log(states); // [posicionRobot, ladoIzquierdo, ladoDerecho]
	//----------------------------------
	document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
	if (action_result == "CLEAN") {
		if (location == "A") states[1] = "CLEAN";
		else if (location == "B") states[2] = "CLEAN";

	}
	else if (action_result == "RIGHT") states[0] = "B";
	else if (action_result == "LEFT") states[0] = "A";
	let {A,B} = ensuciar(states);

	states[1] = A;
	states[2] = B;

	setTimeout(function () { test(states) }, 900);
}

const  ensuciar = (states) => {
	var nuevoEstado = {
		A: '',
		B: ''
	}
	const [posicion0 , posicion1 , posicion2] = states;
	let random = Math.trunc(Math.random() * (7 - 1) + 1);
	switch (random) {
		case 1:
			nuevoEstado['B'] = posicion2;
			nuevoEstado['A'] = 'DIRTY';
			break;
		case 2:
			nuevoEstado['B'] = 'DIRTY'
			nuevoEstado['A'] = posicion1;
			break;
		case 3:
			nuevoEstado['B'] = 'DIRTY';
			nuevoEstado['A'] = 'DIRTY';
			break;
		default:
			nuevoEstado['B'] = posicion2;
			nuevoEstado['A'] = posicion1;
			break;
	}
	return nuevoEstado;
}

const printState = (states) => {
	const ActualState = states.join('/');
	console.log(ActualState);
	switch (ActualState) {
		case "A/DIRTY/DIRTY":
			if (flags[0] == 0) {
				document.getElementById("log").innerHTML += "<br>" + ActualState + "<b> estado visitado 0 </b>";
				flags[0] = 1;
			}
			break;
		case "B/CLEAN/CLEAN":
			if (flags[1] == 0) {
				document.getElementById("log").innerHTML += "<br>" + ActualState + "<b> estado visitado 1 </b>";
				flags[1] = 1;
			}
			break;
		case "A/CLEAN/CLEAN":
			if (flags[2] == 0) {
				document.getElementById("log").innerHTML += "<br>" + ActualState + "<b> estado visitado 2 </b>";
				flags[2] = 1;
			}
			break;
		case "B/CLEAN/DIRTY":
			if (flags[3] == 0) {
				document.getElementById("log").innerHTML += "<br>" + ActualState + "<b> estado visitado 3 </b>";
				flags[3] = 1;
			}
			break;
		case "A/CLEAN/DIRTY":
			if (flags[4] == 0) {
				document.getElementById("log").innerHTML += "<br>" + ActualState + "<b> estado visitado 4 </b>";
				flags[4] = 1;
			}
			break;
		// CASOS IMPLEMENTADOS DE FORMA FORZADA CON EL RANDOM...
		case "B/DIRTY/DIRTY":
			if (flags[5] == 0) {
				document.getElementById("log").innerHTML += "<br>" + ActualState + "<b> estado visitado 5 </b>";
				flags[5] = 1;
			}
			break;
		case "B/DIRTY/CLEAN":
			if (flags[6] == 0) {
				document.getElementById("log").innerHTML += "<br>" + ActualState + "<b> estado visitado 6 </b>";
				flags[6] = 1;
			}
			break;
		case "A/DIRTY/CLEAN":
			if (flags[7] == 0) {
				document.getElementById("log").innerHTML += "<br>" + ActualState + "<b> estado visitado 7 </b>";
				flags[7] = 1;
			}
			break;
		default:
			break;
	}
	finish(flags);
}

const finish = (flags) => {
	for (let i = 0; i < 8; i++) {
		if (flags[i] == 0) return
	}
	document.getElementById("log").innerHTML += "<br><p style='color:blue'><b> TERMINO LA EJECUCION , SE VISITARON TODOS LOS ESTADOS </b></p>";
	document.getElementById("log").innerHTML += "<br>" + ActualState; // para que truene el codigo XD 
}


const states = ["A", "DIRTY", "DIRTY"];
test(states);
