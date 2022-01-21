function starLoop(n) {
	if(n<0){
		console.log("Number Invalid")
	}
	else{
		for(let i=0;i<n;i++){
			console.log('*')
		}
	}
	
}

// TEST CASE
starLoop(4)
// *

starLoop(2)
// *
// *

starLoop(6)
//*
//*
//*
//*
//*
//*

starLoop(0)
//

starLoop(-5)
// number invalid