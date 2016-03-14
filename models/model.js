var mongoose = require ('mongoose')

var melodySchema = mongoose.Schema ({
	name : String,
	melody: [String]
})

module.exports = mongoose.model("Melody", melodySchema)







// var melodySchema = mongoose.model("melodySchema", {
// 	melodies : Array

// })


// var melodySchema = mongoose.Schema({
// 	C4		: Number,
// 	cSharp	: Number,
// 	D4		: Number,
// 	dSharp	: Number,
// 	E4		: Number,
// 	F4		: Number, 
// 	fSharp	: Number,
// 	G4		: Number,
// 	gSharp	: Number,
// 	A4		: Number,
// 	aSharp	: Number,
// 	B4		: Number,
// 	C5		: Number
// })


// var perpetualMotion = new melodySchema ({
// 	C4		: 1,
// 	cSharp	: 0,
// 	D4		: 3,
// 	dSharp	: 0,
// 	E4		: 5,
// 	F4		: 4, 
// 	fSharp	: 0,
// 	G4		: 3,
// 	gSharp	: 0,
// 	A4		: 0,
// 	aSharp	: 0,
// 	B4		: 0,
// 	C5		: 0
// })




// var virtualPianoMelodies = new melodySchema({
// 	// I'm not sure if I need to put in the keycodes or the note IDs here
// 	melodes: [
// 		// perpetual motion
// 		["C4","D4","E4","E4","D4","E4","F4","F4","E4","F4","G4","E4","F4","D4","G4","G4"]
// 		// [pitch!! "C4"]
// 		// ode to joy
// 		[E E F G G F E D C C D E E D D E E F G G F E D C C D E D C C]
// 		// twinkle twinkle little star
// 		[D D A A B B A G G F# F# E E D]
// 		// für elise
// 		[A G# A G# A E G F D]
// 		// allegro
// 		[C C G G A B C A G G F F E E D C D E C]
// 	]
// })

// module.exports = mongoose.model("Melody", melodySchema)

// module.exports = {
// 	melodySchema = melodySchema,
// 	// virtualPianoMelodies = virtualPianoMelodies
// }





