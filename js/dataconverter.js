function convert_gigabytes() {
	var giga = document.getElementById('gigabytes').value;
	var gibi = giga * 0.931323;
	var mega = giga * 1000;
	var mebi = giga * 953.674;
	document.getElementById('gibibytes').value = gibi;
	document.getElementById('megabytes').value = mega;
	document.getElementById('mebibytes').value = mebi;
}

function convert_gibibytes() {
	var gibi = document.getElementById('gibibytes').value;
	var giga = gibi * 1.07374;
	var mega = gibi * 1073.74;
	var mebi = gibi * 1024;
	document.getElementById('gigabytes').value = giga;
	document.getElementById('megabytes').value = mega;
	document.getElementById('mebibytes').value = mebi;
}

function convert_megabytes() {
	var mega = document.getElementById('megabytes').value;
	var giga = mega * 0.001;
	var gibi = mega * 0.000931323;
	var mebi = mega * 0.953674;
	document.getElementById('gigabytes').value = giga;
	document.getElementById('gibibytes').value = gibi;
	document.getElementById('mebibytes').value = mebi;
}

function convert_mebibytes() {
	var mebi = document.getElementById('mebibytes').value;
	var giga = mebi * 0.00104858;
	var gibi = mebi * 0.000976563;
	var mega = mebi * 1.04858;
	document.getElementById('gigabytes').value = giga;
	document.getElementById('gibibytes').value = gibi;
	document.getElementById('megabytes').value = mega;
}