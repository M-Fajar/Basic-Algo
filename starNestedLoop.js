function starNestedLoop(n, m) {
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            process.stdout.write('*')
        }
        console.log('');
        
    }
}

//TEST CASE
starNestedLoop(1,2)
// *
// *


starNestedLoop(2,3)
// **
// **
// **

starNestedLoop(4,1)
// ****