angular.module("pianoApp", [])

angular.module("pianoApp")
    .controller("pianoController", ["$scope", "$http", '$timeout', function($scope, $http, $timeout) {

// ADD FAST CLICK


        $scope.active =  {
            "#C4":false,
            "C#4":false,
            "D4":false,
            "D#4":false,
            "E4":false,
            "F4":false,
            "F#4":false,
            "G":false,
            "G#4":false,
            "A4":false,
            "A#4":false,
            "B4":false,
            "C5":false
        }



        $scope.playedNotes = []
        $http.get("http://localhost:4000/melody") 
            .then(function (data) {
                console.log(data)
                $scope.melodies = data.data
            })



        var piano = new Wad(Wad.presets.piano)


        // LET'S ADD A SNARE FOR KEYS PRESSED THAT ARE NOT ON THE KEYBOARD!

        // var snare = new Wad(Wad.presets.snare)

        // $scope.snare = function(note){
        //     snare.play()
        // }
        

        $scope.play = function(note){
            piano.play({pitch:note})

            $scope.playedNotes.push(note)
            console.log("played notes", $scope.playedNotes)

            $scope.active[note] = true

            $timeout(function(){
                $scope.active[note] = false
            }, 100)
        }


// this portion is for the GAME-- it creates the answer key and processes the user input
        var countNotes= function (song) {
            var countObject = {}
            song.forEach( function (note) {
                // 
                if (note in countObject) {
                    countObject[note] +=1
                }
                // 
                else {
                    countObject[note] = 1
                }
            })
            return countObject
        }
        // countObject = { 'C4' : 3, 'D4': 5, 'E4': 2 }

        var checkAnswers = function (user, answerKey) {
            var numberWrong = 0
            var answerAndKey = _.extend(user, answerKey)
            var allKeys = _.keys(answerAndKey)
            allKeys.forEach(function (note) {
                if (user[note] && answerKey[note]){
                    var difference = (answerKey[note] - user[note])   
                } else {
                    var difference = user[note] || answerKey [note]
                }
                console.log(difference)
                numberWrong += Math.abs(difference)
            })
            return numberWrong
        }


        $scope.showMyScore = function (userInput, answerKey) {
            var user = countNotes(userInput)
            var correct = countNotes(answerKey)
            var wrong = checkAnswers(user, correct)
            var percentageCorrect = 100*(1-(wrong/answerKey.length))
            $scope.showMyScore = percentageCorrect
            // console.log("you got this ", percentageCorrect, "% correct!")
        }


        $scope.hideThis=true

        $scope.pressMe = function () {
            $scope.hideThis = false
        }


        $scope.perpetualMotion = ["C4","D4","E4","E4","D4","E4","F4","F4","E4","F4","G4","E4","F4","D4","G4","G4"]

        $scope.odeToJoy = ["E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4", "C4", "C4", "D4", "E4", "E4", "D4", "D4", "E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4", "C4", "C4", "D4", "E4", "D4", "C4", "C4"]

        $scope.twinkleTwinkle = ["D4", "D4", "A4", "A4", "B4", "B4", "A4", "G4", "G4", "F#4", "F#4", "E4", "E4", "D4"]

        $scope.furElise = ["A4", "G#4", "A4", "G#4", "A4", "E4", "G4", "F4", "D4"]

        $scope.allegro = ["C5", "C5", "G4", "G4", "A4", "B4", "C5", "A4", "G4", "G4", "F4", "F4", "E4", "E4", "D4", "C4", "D4", "E4", "C4"]



        // NOW $SCOPE ALL THE OTHER PIECES TO BE HARDCODED ON THIS SITE-- THERE WILL EVENTUALLY BE A DATABASE WHERE OTHER PEOPLE CAN SUBMIT SONGS TO THE GAME











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
                        $(name + "NP.notePosition").show();
                        // console.log("hey there");

                    }
                    else {
                        $(name).removeClass("colorChange")
                        $(name + "NP.notePosition").fadeOut(600);
                        // console.log("we're done")
                    }
        }

    }])




