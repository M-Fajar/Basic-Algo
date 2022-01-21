function trafficLight(color) {
    switch(color){
        case 'red'   : return "Stop"
        case 'orange': return "Carefull"
        case 'green' : return "Go"
        case ''      : return "Please Insert Color"
        default : return "Color Invalid"
    }

}

// TEST CASE
console.log(trafficLight("red")) // stop
console.log(trafficLight("orange")) // careful
console.log(trafficLight("green")) // go
console.log(trafficLight("blue")) // color invalid
console.log(trafficLight("purple")) // color invalid
console.log(trafficLight("axew")) // color invalid
console.log(trafficLight("")) // please insert color