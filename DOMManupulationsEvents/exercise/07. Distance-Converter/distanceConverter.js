function attachEventsListeners() {
    let button = document.getElementById('convert');
    button.addEventListener('click', convert);
    let inputDistance = document.getElementById('inputDistance');
    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');
    let outputDistance = document.getElementById('outputDistance');

    let converterToMeters = {
        km: (x) => x * 1000,
        m: (x) => x * 1,
        cm: (x) => x * 0.01,
        mm: (x) => x * 0.001,
        mi: (x) => x * 1609.34,
        yrd: (x) => x * 0.9144,
        ft: (x) => x * 0.3048,
        in: (x) => x * 0.0254
    }

    let converterFinal = {
        km: (x) => x / 1000,
        m: (x) => x * 1,
        cm: (x) => x * 100,
        mm: (x) => x * 1000,
        mi: (x) => x / 1609.24,
        yrd: (x) => x / 0.9144,
        ft: (x) => x / 0.3048,
        in: (x) => x / 0.0254
    }

    function convert() {
        let inputDistanceValue = Number(inputDistance.value);
        let inputUnitsValue = inputUnits.value;

        let distanceInMeters = converterToMeters[inputUnitsValue](inputDistanceValue);
        let outputUnitsValue = outputUnits.value;
        let distanceFinal = converterFinal[outputUnitsValue](distanceInMeters);
        outputDistance.value = distanceFinal;
    }
}