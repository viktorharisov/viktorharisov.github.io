let a;
let b;
let c;
while(true){
	a = prompt('Введите a', '');
	if(!(isNaN(a)) && !(a == '')){
		break;		
	}
	
}
while(true){
	b = prompt('Введите b', '');
	if(!(isNaN(b)) && !(b == '')){
		break;		
	}
	
}
while(true){
	c = prompt('Введите c', '');
	if(!(isNaN(c)) && !(c == '')){
		break;		
	}
	
}

if(a == 0 && b == 0 && c != 0){
	alert('Error');
}
else if(a == 0 && b == 0 && c == 0){
	alert(0);
}

else{
radical	(a, b, c);

function radical(a, b, c){

	D = b*b - 4*a*c;
	if(D > 0){
		let x1 = ((-b - Math.sqrt(D)) / (2*a)).toFixed(2);
		let x2 = ((-b + Math.sqrt(D)) / (2*a)).toFixed(2);
		alert(x1 + '\n' + x2);

	}

	else if(D == 0){
		let x = (-b) / (2*a);
		alert(x.toFixed(2), '');
	}

	else{
		let z1 =((-b) / (2*a)).toFixed(2) + ' + ' + ((Math.sqrt(-D)) / (2*a)).toFixed(2) + 'i' ;
		let z2 =((-b) / (2*a)).toFixed(2) + ' - ' + ((Math.sqrt(-D)) / (2*a)).toFixed(2) + 'i' ;
		alert(z1 + '\n' + z2);
	}

}	
}


