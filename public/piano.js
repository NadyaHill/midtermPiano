angular.module("pianoApp", [])

angular.module("pianoApp")
    .controller("pianoController", ["$scope", "$http", function($scope, $http) {



        var piano = new Wad(Wad.presets.piano)
        $scope.play = function(note){
            piano.play({pitch:note})
        }



// connects the keyboard keys to notes on the piano



        $scope.keyboardPlay = function(event, down){
        var name;
        var pitch;
            switch (event.keyCode) {

                case 68:
                    name = "#C4";
                    pitch = 'C4';
                    break;


                case 82:
                    name = "#cSharp";
                    pitch = 'C#4';
                    break;

                case 70:
                    name = "#D4";
                    pitch = 'D4';
                    break;

                case 84:
                    name = "#dSharp"
                    pitch = 'D#4';
                    break;

                case 71:
                    name = "#E4";
                    pitch = 'E4';
                    break;

                case 72:
                    name = "#F4";
                    pitch = 'F4';
                    break;

                case 85:
                    name = "#fSharp";
                    pitch = 'F#4';
                    break;

                case 74:
                    name = "#G4";
                    pitch = 'G4';
                    break;

                case 73:
                    name = "#gSharp";
                    pitch = 'G#4';
                    break;

                case 75:
                    name = "#A4";
                    pitch = 'A4';
                    break;

                case 79:
                    name = "#aSharp";
                    pitch = 'A#4';
                    break;

                case 76:
                    name = "#B4";
                    pitch = 'B4';
                    break;

                case 186:
                    name = "#C5";
                    pitch = 'C5';
                    break;

                // default:
                //     $scope.snare()
                //     break;

            }
                    if(down) {
                        $(name).addClass("colorChange")
                        $scope.play(pitch)
                    }
                    else {
                        $(name).removeClass("colorChange")
                    }
        }

    }])




