// title: Tiny Home Backyard v001
// author: Marty McGee
// license: MIT
// url: http://marty-mcgee.com/playground/openjuice/openjscad/
//			#examples/juice/tiny-home-backyard-v001.jscad
// revision: 0.2.4

function main() {
    return  build_tinyhome().
			scale(1/8). // 1:X ratio
			//rotateX(-1.0). // slight slope on X axis ( west-to-east )
			//rotateY(1.0). // slight slope on Y axis ( north-to-south )
			translate([0,0,1.5]) // below-to-above-ground ( inches )
}

function build_tinyhome() {
	// each var returns array of CSG.cube objects
	
	// base
	var tinyhome_base = get_base()
	
	// posts (structure)
	var tinyhome_posts = get_posts()
	
	// beams (support)
	var tinyhome_beams_top = get_beams_top()
	var tinyhome_beams_bot = get_beams_bot()
	
	// door(s) and hinges
	var tinyhome_door_A = get_door_A()
	var tinyhome_door_B = get_door_B()
	var tinyhome_door_hinges = get_door_hinges()
	
	// backyard posts (structure)
	var tinyhome_backyard_posts = get_backyard_posts()
	
	// backyard beams (support joists, ledgers, skirtboards)
	var tinyhome_backyard_beams = get_backyard_beams()
	
	// backyard decking
	var tinyhome_backyard_deck = get_backyard_deck()
	
	// backyard hot tub
	var tinyhome_backyard_hottub = get_backyard_hottub()
	
	// build union
	var tinyhome_render = 
		union(
			tinyhome_base, 
			//tinyhome_posts, 
			//tinyhome_beams_top,
			//tinyhome_beams_bot,
			//tinyhome_door_A,
			//tinyhome_door_B,
			//tinyhome_door_hinges,
			tinyhome_backyard_hottub,
			tinyhome_backyard_deck,
			tinyhome_backyard_beams,
			tinyhome_backyard_posts
		)
	
	return tinyhome_render
}

function get_base(){
	
	var tinyhome = []
	var	tinyhome_full = [] 
	var	tinyhome_base = [] 
	var	tinyhome_main = []
	var tinyhome_uom = "inches"
	var tinyhome_x = 149 // 12 feet + wood
	var tinyhome_y = 296 // 24 feet + wood
	var tinyhome_z = 74  // 6 feet 7 inches
	var tinyhome_base_x = tinyhome_x
	var tinyhome_base_y = tinyhome_y
	var tinyhome_base_z = tinyhome_z - 66 // 6.5 - 5.5 = 1 foot
	var tinyhome_main_x = tinyhome_x
	var tinyhome_main_y = tinyhome_y
	var tinyhome_main_z = tinyhome_z - 12 // 6.5 - 1.0 = 5.5 feet
	
	//tinyhome_full	= cube({size: [tinyhome_x, tinyhome_y, tinyhome_z]}).
	//				translate([0,0,-12]).
	//				setColor([0.3,0.7,1.0,1.0])
	//tinyhome_base	= cube({size: [tinyhome_base_x - 2, tinyhome_base_y - 2, tinyhome_base_z]}).
	//				translate([1,1,6]).
	//				setColor([0.6,0.4,0.0,0.9])
	tinyhome_base	= cube({size: [0.0001, 0.0001, 0.0001]})
	//tinyhome_main	= cube({size: [tinyhome_main_x, tinyhome_main_y, tinyhome_main_z]}).
	//				translate([0,0,-12]).
	//				setColor([0.3,0.7,1.0,1.0])
				 		
	/*tinyhome = union(
				tinyhome_full,
				tinyhome_base,
				tinyhome_main
			)*/
	
	return tinyhome_base
}

function get_posts(){
	var posts = []
	var posts_count = 10
	
	// posts (box G)
	
	// north side
	posts.push(
		cube({size: [7.5, 7.5, 91]}).
		translate([0, 0, -12]).
		setColor([0.6,0.3,0.0,1.0])
	)
	posts.push(
		cube({size: [7.5, 7.5, 65]}).
		translate([0, 96.25, 14]).
		setColor([0.6,0.3,0.0,1.0])
	)
	posts.push(
		cube({size: [7.5, 7.5, 65]}).
		translate([0, 192.25, 14]).
		setColor([0.6,0.3,0.0,1.0])
	)
	posts.push(
		cube({size: [7.5, 7.5, 91]}).
		translate([0, 288.25, -12]).
		setColor([0.6,0.3,0.0,1.0])
	)
			            
	    
	// east side
	posts.push(
		cube({size: [7.5, 7.5, 65]}).
		translate([72.25, 288.5, 14]).
		setColor([0.6,0.3,0.0,1.0])
	)
	
	// south side
	posts.push(
		cube({size: [7.5, 7.5, 91]}).
		translate([144.5, 288.25, -12]).
		setColor([0.6,0.3,0.0,1.0])
	)
	posts.push(
		cube({size: [7.5, 7.5, 65]}).
		translate([144.5, 192.25, 14]).
		setColor([0.6,0.3,0.0,1.0])
	)
	posts.push(
		cube({size: [7.5, 7.5, 65]}).
		translate([144.5, 96.25, 14]).
		setColor([0.6,0.3,0.0,1.0])
	)
	posts.push(
		cube({size: [7.5, 7.5, 91]}).
		translate([144.5, 0, -12]).
		setColor([0.6,0.3,0.0,1.0])
	)
	
	// west side
	posts.push(
		cube({size: [7.5, 7.5, 65]}).
		translate([72.25, 0, 14]).
		setColor([0.6,0.3,0.0,1.0])
	)
	
	return posts
}

function get_beams_top(){
	var beams_top = []
	
	// beams_top (x)
	beams_top.push(
		cube({size: [7.5, 192, 7.5]}).
		translate([0, 0, 79]).
		setColor([1.0,0.5,0.0,0.8])
	)
	beams_top.push(
		cube({size: [7.5, 96, 7.5]}).
		translate([0, 192.5, 79]).
		setColor([1.0,0.5,0.0,0.8])
	)
	beams_top.push(
		cube({size: [7.5, 192, 7.5]}).
		translate([144.5, 0, 79]).
		setColor([1.0,0.5,0.0,0.8])
	)
	beams_top.push(
		cube({size: [7.5, 96, 7.5]}).
		translate([144.5, 192.5, 79]).
		setColor([1.0,0.5,0.0,0.8])
	)
	// beams_top (y)
	beams_top.push(
		cube({size: [144, 7.5, 7.5]}).
		translate([0, 0, 79]).
		setColor([1.0,0.5,0.0,0.8])
	)
	beams_top.push(
		cube({size: [151.5, 7.5, 7.5]}).
		translate([0, 288.5, 79]).
		setColor([1.0,0.5,0.0,0.8])
	)
	
	// return
	return beams_top
}

function get_beams_bot(){
	var beams_bot = []
	
	// beams_bot (x)
	beams_bot.push(
		cube({size: [7.5, 144, 7.5]}).
		translate([0, 0, 6]).
		setColor([1.0,0.5,0.0,0.9])
	)
	beams_bot.push(
		cube({size: [7.5, 144, 7.5]}).
		translate([0, 144, 6]).
		setColor([1.0,0.5,0.0,0.9])
	)
	beams_bot.push(
		cube({size: [7.5, 144, 7.5]}).
		translate([142.5, 0, 6]).
		setColor([1.0,0.5,0.0,0.9])
	)
	beams_bot.push(
		cube({size: [7.5, 144, 7.5]}).
		translate([142.5, 144, 6]).
		setColor([1.0,0.5,0.0,0.9])
	)
	// beams_bot (y)
	beams_bot.push(
		cube({size: [144, 7.5, 7.5]}).
		translate([0, 0, 6]).
		setColor([1.0,0.5,0.0,0.9])
	)
	beams_bot.push(
		cube({size: [144, 7.5, 7.5]}).
		translate([0, 288.5, 6]).
		setColor([1.0,0.5,0.0,0.9])
	)
	
	// return
	return beams_bot
}

function get_door_A(){
	var door = []
	
	// door (x)
	door.push(
		cube({size: [3.5, 3.5, 72]}).
		translate([12, 0, 8]).
		setColor([1.0,0.5,0.0,0.8])
	)
	door.push(
		cube({size: [3.5, 3.5, 72]}).
		translate([48, 0, 8]).
		setColor([1.0,0.5,0.0,0.8])
	)
	
	return door
}

function get_door_B(){
	var door = []
	
	// door (x)
	door.push(
		cube({size: [3.5, 3.5, 30]}).
		translate([102, 290, 42]).
		setColor([1.0,0.5,0.0,0.8])
	)
	door.push(
		cube({size: [3.5, 3.5, 30]}).
		translate([138, 290, 42]).
		setColor([1.0,0.5,0.0,0.8])
	)
	// door (y)
	door.push(
		cube({size: [36, 3.5, 3.5]}).
		translate([102, 290, 42]).
		setColor([1.0,0.5,0.0,0.8])
	)
	door.push(
		cube({size: [39.5, 3.5, 3.5]}).
		translate([102, 290, 72]).
		setColor([1.0,0.5,0.0,0.8])
	)
	
	return door
}

function get_door_hinges(){
	var hinges = []
	return hinges
}

function get_backyard_posts(){
  	var backyard_posts = []
	var backyard_posts_count = 9
	
	// backyard west side
	// #1
	backyard_posts.push(
		cube({size: [3.5, 3.5, 24]}).
		translate([0, 300, -12]).
		setColor([0.9,0.6,0.0,0.8])
	)
	// #1 cement block
	backyard_posts.push(
		cube({size: [10.5, 10.5, 7.75]}).
		translate([-3.5, 296.5, -12]).
		setColor([0.2,0.2,0.0,0.5])
	)
	// #2
  	backyard_posts.push(
		cube({size: [3.5, 3.5, 32]}).
		translate([50, 300, 4]).
		setColor([0.9,0.6,0.0,0.8])
	)
	// #2 cement block
// 	backyard_posts.push(
// 		cube({size: [10.5, 10.5, 7.75]}).
// 		translate([46.5, 296.5, -12]).
// 		setColor([0.2,0.2,0.0,0.5])
// 	)
	// #3
  	backyard_posts.push(
		cube({size: [3.5, 3.5, 48]}).
		translate([103.5, 300, -12]).
		setColor([0.9,0.6,0.0,0.8])
	)
	// #3 cement block
	backyard_posts.push(
		cube({size: [10.5, 10.5, 7.75]}).
		translate([100, 296.5, -12]).
		setColor([0.2,0.2,0.0,0.5])
	)
	    
	// backyard south side
	// #4
	backyard_posts.push(
		cube({size: [3.5, 3.5, 24]}).
		translate([0, 350, -12]).
		setColor([0.9,0.6,0.0,0.8])
	)
	// #4 cement block
	backyard_posts.push(
		cube({size: [10.5, 10.5, 7.75]}).
		translate([-3.5, 346.5, -12]).
		setColor([0.2,0.2,0.0,0.5])
	)
	
	// backyard center
	// #5
	backyard_posts.push(
		cube({size: [3.5, 3.5, 24]}).
		translate([50, 350, -12]).
		setColor([0.9,0.6,0.0,0.8])
	)
	// #5 cement block
	backyard_posts.push(
		cube({size: [10.5, 10.5, 7.75]}).
		translate([46.5, 346.5, -12]).
		setColor([0.2,0.2,0.0,0.5])
	)
	    
	// backyard north side
	// #6
	backyard_posts.push(
		cube({size: [3.5, 3.5, 24]}).
		translate([103.5, 350, -12]).
		setColor([0.9,0.6,0.0,0.8])
	)
	// #6 cement block
	backyard_posts.push(
		cube({size: [10.5, 10.5, 7.75]}).
		translate([100, 346.5, -12]).
		setColor([0.2,0.2,0.0,0.5])
	)
	    
	// backyard east side
	// #7
	backyard_posts.push(
		cube({size: [3.5, 3.5, 24]}).
		translate([0, 403.5, -12]).
		setColor([0.9,0.6,0.0,0.8])
	)
	// #7 cement block
	backyard_posts.push(
		cube({size: [10.5, 10.5, 7.75]}).
		translate([-3.5, 400, -12]).
		setColor([0.2,0.2,0.0,0.5])
	)
	
	// #8
	backyard_posts.push(
		cube({size: [3.5, 3.5, 24]}).
		translate([50, 403.5, -12]).
		setColor([0.9,0.6,0.0,0.8])
	)
	// #8 cement block
	backyard_posts.push(
		cube({size: [10.5, 10.5, 7.75]}).
		translate([46.5, 400, -12]).
		setColor([0.2,0.2,0.0,0.5])
	)
	
	// #9
	backyard_posts.push(
		cube({size: [3.5, 3.5, 24]}).
		translate([103.5, 403.5, -12]).
		setColor([0.9,0.6,0.0,0.8])
	)
	// #9 cement block
	backyard_posts.push(
		cube({size: [10.5, 10.5, 7.75]}).
		translate([100, 400, -12]).
		setColor([0.2,0.2,0.0,0.5])
	)
	
	// step 1
  	// #10
  	backyard_posts.push(
		cube({size: [3.5, 3.5, 48]}).
		translate([50, 319.25, -12]).
		setColor([0.9,0.6,0.0,0.8])
	)
	// #11
  	backyard_posts.push(
		cube({size: [3.5, 3.5, 48]}).
		translate([103, 319.25, -12]).
		setColor([0.9,0.6,0.0,0.8])
	)
// 	// #12
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 48]}).
// 		translate([115, 300, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #13
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 48]}).
// 		translate([115, 319.25, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
	
// 	// step 2
// 	// #14
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 42]}).
// 		translate([120.5, 323, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #15
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 42]}).
// 		translate([144.5, 323, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #16
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 42]}).
// 		translate([120.5, 330.75, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #17
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 42]}).
// 		translate([144.5, 330.75, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
	
// 	// step 3
// 	// #18
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 36]}).
// 		translate([120.5, 334.5, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #19
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 36]}).
// 		translate([144.5, 334.5, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #20
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 36]}).
// 		translate([120.5, 342.25, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #21
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 36]}).
// 		translate([144.5, 342.25, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
	
// 	// step 4
// 	// #22
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 30]}).
// 		translate([120.5, 346, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #23
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 30]}).
// 		translate([144.5, 346, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #24
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 30]}).
// 		translate([120.5, 353.75, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #25
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 30]}).
// 		translate([144.5, 353.75, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
	
// 	// step 5
// 	// #26
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 18]}).
// 		translate([120.5, 438, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #27
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 18]}).
// 		translate([144.5, 438, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #28
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 18]}).
// 		translate([120.5, 445.75, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #29
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 18]}).
// 		translate([144.5, 445.75, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
	
// 	// step 6
// 	// #30
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 12]}).
// 		translate([120.5, 449.5, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #31
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 12]}).
// 		translate([144.5, 449.5, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #32
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 12]}).
// 		translate([120.5, 457.25, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #33
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 12]}).
// 		translate([144.5, 457.25, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
	
// 	// step 7
// 	// #34
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 6]}).
// 		translate([120.5, 461, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #35
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 6]}).
// 		translate([144.5, 461, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #36
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 6]}).
// 		translate([120.5, 468.75, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
// 	// #37
//   	backyard_posts.push(
// 		cube({size: [3.5, 3.5, 6]}).
// 		translate([144.5, 468.75, -12]).
// 		setColor([0.9,0.6,0.0,0.8])
// 	)
	
    return backyard_posts
}

// backyard deck beams
function get_backyard_beams(){
    var backyard_beams = []
	
	// backyard skirtboard west
	backyard_beams.push(
		cube({size: [110, 1.5, 9.5]}).
		translate([-1.5, 298.5, 4]).
		setColor([0.9,0.5,0.0,0.8])
	)
	
	// backyard ledger
	backyard_beams.push(
		cube({size: [1.5, 46, 3.5]}).
		translate([0, 303.5, 8.5]).
		setColor([0.8,0.6,0.0,0.7])
	)
	
	// backyard ledger
	backyard_beams.push(
		cube({size: [1.5, 49.5, 3.5]}).
		translate([0, 353.5, 8.5]).
		setColor([0.8,0.6,0.0,0.7])
	)
	
	// backyard skirtboard east
	backyard_beams.push(
		cube({size: [110, 1.5, 9.5]}).
		translate([-1.5, 407, 4]).
		setColor([0.9,0.5,0.0,0.8])
	)
	
	// backyard skirtboard north
	backyard_beams.push(
		cube({size: [1.5, 107, 9.5]}).
		translate([-1.5, 300, 4]).
		setColor([0.9,0.5,0.0,0.8])
	)
	
	// backyard joist
	backyard_beams.push(
		cube({size: [1.5, 107, 7.5]}).
		translate([24, 300, 4]).
		setColor([0.9,0.5,0.0,0.8])
	)
	// backyard joist center north-to-south
	backyard_beams.push(
		cube({size: [1.5, 107, 7.5]}).
		translate([48.5, 300, 4]).
		setColor([0.9,0.5,0.0,0.8])
	)
	// backyard joist 
	backyard_beams.push(
		cube({size: [1.5, 107, 7.5]}).
		translate([72.5, 300, 4]).
		setColor([0.9,0.5,0.0,0.8])
	)
	// backyard joist
	backyard_beams.push(
		cube({size: [1.5, 107, 7.5]}).
		translate([96.5, 300, 4]).
		setColor([0.9,0.5,0.0,0.8])
	)
	
	// backyard ledger
	backyard_beams.push(
		cube({size: [1.5, 46, 3.5]}).
		translate([105.5, 303.5, 8.5]).
		setColor([0.8,0.6,0.0,0.7])
	)
	
	// backyard ledger
	backyard_beams.push(
		cube({size: [1.5, 49.5, 3.5]}).
		translate([105.5, 353.5, 8.5]).
		setColor([0.8,0.6,0.0,0.7])
	)
	
	// backyard skirtboard south
	backyard_beams.push(
		cube({size: [1.5, 107, 9.5]}).
		translate([107, 300, 4]).
		setColor([0.9,0.5,0.0,0.8])
	)
	
// 	// "step 1"
// 	// backyard joist
// 	backyard_beams.push(
// 		cube({size: [1.5, 16, 3.5]}).
// 		translate([72.5, 303.5, 32.5]).
// 		setColor([0.8,0.6,0.0,0.7])
// 	)
// 	// backyard joist
// 	backyard_beams.push(
// 		cube({size: [1.5, 20.5, 3.5]}).
// 		translate([96.5, 301.5, 32.5]).
// 		setColor([0.8,0.6,0.0,0.7])
// 	)
// 	// backyard joist
// 	backyard_beams.push(
// 		cube({size: [1.5, 16, 3.5]}).
// 		translate([117, 303.5, 32.5]).
// 		setColor([0.8,0.6,0.0,0.7])
// 	)
// 	// backyard joist
// 	backyard_beams.push(
// 		cube({size: [1.5, 16, 3.5]}).
// 		translate([146.5, 303.5, 32.5]).
// 		setColor([0.8,0.6,0.0,0.7])
// 	)
// 	// backyard ledger
// 	backyard_beams.push(
// 		cube({size: [39, 1.5, 3.5]}).
// 		translate([76, 300, 32.5]).
// 		setColor([0.8,0.6,0.0,0.7])
// 	)
// 	// backyard ledger
// 	backyard_beams.push(
// 		cube({size: [39, 1.5, 3.5]}).
// 		translate([76, 321.25, 32.5]).
// 		setColor([0.8,0.6,0.0,0.7])
// 	)
// 	// backyard ledger
// 	backyard_beams.push(
// 		cube({size: [26, 1.5, 3.5]}).
// 		translate([118.5, 300, 32.5]).
// 		setColor([0.8,0.6,0.0,0.7])
// 	)
// 	// backyard ledger
// 	backyard_beams.push(
// 		cube({size: [26, 1.5, 3.5]}).
// 		translate([118.5, 321.25, 32.5]).
// 		setColor([0.8,0.6,0.0,0.7])
// 	)
	
    return backyard_beams
}

// backyard deck decking
function get_backyard_deck(){
    var backyard_deck = []

	// deck
	// #1 - #4 "corner"
	backyard_deck.push(
		cube({size: [50, 5.5, 1.5]}).
		translate([0, 300, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [50, 5.5, 1.5]}).
		translate([0, 305.75, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [50, 5.5, 1.5]}).
		translate([0, 311.5, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [50, 5.5, 1.5]}).
		translate([0, 317.25, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	// #5 - #8 "step 1"
	backyard_deck.push(
		cube({size: [57, 5.5, 1.5]}).
		translate([50, 300, 36]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [57, 5.5, 1.5]}).
		translate([50, 305.75, 36]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [57, 5.5, 1.5]}).
		translate([50, 311.5, 36]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [57, 5.5, 1.5]}).
		translate([50, 317.25, 36]).
		setColor([0.6,0.3,0.0,0.9])
	)
	// #9 - #12
	backyard_deck.push(
		cube({size: [73.5, 5.5, 1.5]}).
		translate([0, 323, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [73.5, 5.5, 1.5]}).
		translate([0, 328.75, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [73.5, 5.5, 1.5]}).
		translate([0, 334.5, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [73.5, 5.5, 1.5]}).
		translate([0, 340.25, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	// #13 - #14 "step 2"
	backyard_deck.push(
		cube({size: [28, 5.5, 1.5]}).
		translate([73.5, 323, 30]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [28, 5.5, 1.5]}).
		translate([73.5, 328.75, 30]).
		setColor([0.6,0.3,0.0,0.9])
	)
	// #15 - #16 "step 3"
	backyard_deck.push(
		cube({size: [28, 5.5, 1.5]}).
		translate([73.5, 334.5, 24]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [28, 5.5, 1.5]}).
		translate([73.5, 340.25, 24]).
		setColor([0.6,0.3,0.0,0.9])
	)
	// #17 - #18 "step 4"
	backyard_deck.push(
		cube({size: [28, 5.5, 1.5]}).
		translate([73.5, 346, 18]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [28, 5.5, 1.5]}).
		translate([73.5, 351.75, 18]).
		setColor([0.6,0.3,0.0,0.9])
	)
	// #19 - #20 "step 5"
	backyard_deck.push(
		cube({size: [28, 5.5, 1.5]}).
		translate([73.5, 410, 6]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [28, 5.5, 1.5]}).
		translate([73.5, 415.75, 6]).
		setColor([0.6,0.3,0.0,0.9])
	)
	// #21 - #22 "step 6"
	backyard_deck.push(
		cube({size: [28, 5.5, 1.5]}).
		translate([73.5, 421.5, 0]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [28, 5.5, 1.5]}).
		translate([73.5, 427.25, 0]).
		setColor([0.6,0.3,0.0,0.9])
	)
	// #23 - #24 "step 7"
	backyard_deck.push(
		cube({size: [28, 5.5, 1.5]}).
		translate([73.5, 433, -6]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [28, 5.5, 1.5]}).
		translate([73.5, 438.75, -6]).
		setColor([0.6,0.3,0.0,0.9])
	)
	
	
	
	// #25 - #28
	backyard_deck.push(
		cube({size: [107, 5.5, 1.5]}).
		translate([0, 346, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [107, 5.5, 1.5]}).
		translate([0, 351.75, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [107, 5.5, 1.5]}).
		translate([0, 357.5, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [107, 5.5, 1.5]}).
		translate([0, 363.25, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	// #29 - #32
	backyard_deck.push(
		cube({size: [107, 5.5, 1.5]}).
		translate([0, 369, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [107, 5.5, 1.5]}).
		translate([0, 374.75, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [107, 5.5, 1.5]}).
		translate([0, 380.5, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [107, 5.5, 1.5]}).
		translate([0, 386.25, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	// #33 - #35
	backyard_deck.push(
		cube({size: [107, 5.5, 1.5]}).
		translate([0, 392, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [107, 5.5, 1.5]}).
		translate([0, 397.75, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	backyard_deck.push(
		cube({size: [107, 3.5, 1.5]}).
		translate([0, 403.5, 12]).
		setColor([0.6,0.3,0.0,0.9])
	)
	
	return backyard_deck
}

function get_backyard_hottub(){
	var backyard_hottub = []
	
	// backyard_hottub (x)
	backyard_hottub.push(
		cube({size: [64.5, 83.5, 30]}).
		translate([0, 323, 12]).
		setColor([0.6,0.8,0.9,1.0])
	)
	
	return backyard_hottub
}

// end file