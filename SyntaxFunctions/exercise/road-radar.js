function roadRadar(speed, area) {
    let message;
    let status;
    let speedLimit;
    switch (area) {
        case "motorway":
            speedLimit = 130;
            calcRoadRadar();
            break;
        case "interstate":
            speedLimit = 90;
            calcRoadRadar();
            break;
        case "city":
            speedLimit = 50;
            calcRoadRadar();
            break;
        case "residential":
            speedLimit = 20;
            calcRoadRadar();
            break;
    
        default:
            break;
    }
    console.log(message);

    function calcRoadRadar() {
        if (speed <= speedLimit) {
            message = `Driving ${speed} km/h in a ${speedLimit} zone`;
        } else {
            if (speed - speedLimit <= 20) {
                status = "speeding";
            } else if (speed - speedLimit <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving";
            }
            message = `The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
        }
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');