//Tracery example by Allison Parrish
//But we'll also create a box to hold our lines as they move
particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);
}

function draw() {
//This overlay will always take us back to black - try changing it
//The alpha of 3 controls the speed of the fade - try raising and lowering it
	//This moves the particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
	background(50,50,50,50);
}

//This draws the word with each mouse click
function mouseClicked() {
	var grammar = tracery.createGrammar(grammarSource); //set up tracery library
	grammar.addModifiers(tracery.baseEngModifiers); //set up English grammer properly (capitals and a/an)
	var output = grammar.flatten("#origin#"); //creates sentence from grammar source
	let p = new Particle(mouseX,mouseY,output);
    particles.push(p);

}

// grammerSource is generated using:
// http://tracery.io/ 
// See the tutorial here: http://www.crystalcodepalace.com/traceryTut.html
var grammarSource = {
	"name": [
		"Queen",
		"people",
		"mind",
		"women",
		"fools",
		"commercial entertainers",
		"yourself",
		"dana",
		"ya'll",
		"boy",
		"flavor unit",
		"rapper",
		"your",
		"ya'll",
		"these motherfucks",
		"Tim",
		"Missy"
	],
	"origin": [
		"#name# is #energy#. \n #name# #type# #energy# this #space#. #stable#. \n #stable# #energy# #location# #name# #space# \n #space# #stable#"
	],
	"energy": [
		"sloppy",
		"poppy",
		"engage",
		"break",
		"shock",
		"pain",
		"allergic",
		"choke",
		"wack",
		"dis",
		"catch",
		"hype",
		"boo",
		"fronting",
		"crush",
		"talk",
		"talk",
		"lickin",
		"stickin",
		"burnt",
		"pull up",
		"talk",
		"drivin'",
		"glidin'",
		"stylin'",
		"ask",
		"see",
		"grippin'",
		"love",
		"fly",
		"prowl",
		"gettin'",
		"smack"
	],
	"space": [
		"rumors",
		"rhyme",
		"clock",
		"crews",
		"knowledge",
		"positivity",
		"grace",
		"yolk",
		"chomps",
		"cold one",
		"soul",
		"morning bowl",
		"fracture",
		"command",
		"zebras",
		"monkey",
		"mamajama",
		"My gizzirl",
		"I",
		"shit",
		"you",
		"it",
		"'em",
		"my feathers",
		"my furs",
		"I",
		"bird",
		"loud",
		"drums",
		"base",
		"high hat",
		"snare",
		"strings",
		"right",
		"left",
		"your",
		"ass",
		"horn",
		"pumas"
	],
	"type": [
		"over",
		"forever",
		"rarely",
		"under",
		"digging",
		"in",
		"like",
		"when",
		"wanna",
		"did",
		"these",
		"like",
		"down"
	],
	"stable": [
		"give it to 'em queen",
		"i got it",
		"latifah",
		"hop",
		"hop",
		"pose",
		"pose",
		"Izzo kizzay",
		"lezzy goh",
		"QUEEN L-A-T-I-F-A-H IN COMMAND"
	],
	"location": [
		"plateau",
		"spot",
		"curbs",
		"payless"
	]
};

class Particle {
  constructor(x,y,text) {
		//This sets the x value to mouse position
    this.x = x;
		//This keeps the y at mouse position
    this.y = y;
		//This sets the range of x movement - try limiting it to + or -
    this.vx = random(-1, 1);
		//This sets the range of y movement - try limiting it to + or -
    this.vy = random(-1, 1);
		//This sets the text size to be consistent
		this.size = random(10,20);
		//This sets the current line to the particle
		this.text = text;
  }

  finished() {
		//Change this to 255 if you reverse the fade
    return (this.width < 0 || this.width > windowWidth);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  show() {
    noStroke();
		textSize(this.size);
		//Try any web safe font
		textFont("Courier");
		//This centers the text on the click
		textAlign(CENTER, CENTER);
		//This sets the fill to a static color - can you make it random?
		//You can also add the outline
    //stroke(255);
		//This keeps R and G values at 255 to allow for yellows
		//Try changing it!
    fill("green");
		//This positions the text
    text(this.text, this.x, this.y);
  }
}