var elevatorCode = {
    init: function (elevators, floors) {
        var rotator = 0;                   // Rotator variable to distribute the workload. 
        _.each(floors, function (floor) {  // Using lo-dash to iterate over all the elevators and floors
            floor.on("up_button_pressed down_button_pressed", function () {
                var elevator = elevators[(rotator++) % elevators.length];
                elevator.goToFloor({ number: floor.level });
            });
        });
        _.each(elevators, function (elevator) {
            elevator.on("floor_button_pressed", function (floorNum) {
                elevator.goToFloor({ number: floorNum });
            });
            elevator.on("idle", function () {
                elevator.goToFloor({ number: 0 });
            });
        });
    },
    update: function (dt, elevators, floors) {
    }
}