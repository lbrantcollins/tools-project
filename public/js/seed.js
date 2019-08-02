const seedData = [
{
	name: 'Claw Hammer',
	type: 'Hammer',
	rentalCost: 1,
	lateFee: 0.25,
	description: "A claw hammer is a tool primarily used for driving nails into, or pulling nails from, some other object. Generally, a claw hammer is associated with woodworking but is not limited to use with wood products. It is not suitable for heavy hammering on metal surfaces (such as in machining work), as the steel of its head is somewhat brittle; the ball-peen hammer is more suitable for such metalwork.",
	url: 'https://images-na.ssl-images-amazon.com/images/I/61fnMMgkGIL._SX679_.jpg'
},{
	name: 'Sledge Hammer',
	type: 'Hammer',
	rentalCost: 4,
	lateFee: 1,
	description: "A sledgehammer is a tool with a large, flat, often metal head, attached to a long handle. The long handle combined with a heavy head allows the sledgehammer to gather momentum during a swing and apply a large force compared to hammers designed to drive nails. Along with the mallet, it shares the ability to distribute force over a wide area. This is in contrast to other types of hammers, which concentrate force in a relatively small area.",
	url: 'https://4.imimg.com/data4/RL/CD/MY-10279545/sledge-hammer-tool-500x500.jpg'
},{
	name: 'Cordless Power Drill',
	type: 'Drill',
	rentalCost: 10,
	lateFee: 2.50,
	description: "Drills are commonly used in woodworking, metalworking, machine tool fabrication, construction and utility projects. Specially designed versions are made for medicine, space, and miniature applications.",
	url: 'https://images.homedepot-static.com/productImages/8f5872e1-0dc2-4980-aa2f-85b5946a8de4/svn/dewalt-hammer-drills-dcd950b-64_1000.jpg'
},{
	name: 'Combination Wrench Set',
	type: 'Wrench',
	rentalCost: 4,
	lateFee: 1,
	description: "A double-ended tool with one end being like an open-end wrench or open-ended spanner, and the other end being like a box-end wrench or ring spanner. Both ends generally fit the same size of bolt.",
	url: 'https://images.homedepot-static.com/productImages/f13bf007-4071-436f-b96c-90ab90a767d3/svn/stanley-wrench-sets-85-927-64_1000.jpg'
},{
	name: "Plumber's Pliers",
	type: 'Pliers',
	rentalCost: 2,
	lateFee: 0.5,
	description: "Pliers with a straight handle and smooth jaws whose gripping faces are perpendicular to the handle.",
	url: 'https://images.homedepot-static.com/productImages/79fa0246-8cd4-43b4-8898-1e3a599fe4eb/svn/channellock-all-trades-tongue-groove-pliers-440-64_1000.jpg'
},{
	name: 'Chain Whip',
	type: 'Wrench',
	rentalCost: 2,
	lateFee: 0.5,
	description: "A self-tightening wrench that engages the teeth of a chain drive sprocket, and used typically to remove bicycle cogsets. Similar to a strap wrench, but uses positive engagement rather than friction, and so needs to grab only one end of the chain.",
	url: 'https://www.rei.com/media/7e128f3e-a879-4585-ba9a-75faa6e8022a?size=784x588'
},{
	name: 'Socket Wrench',
	type: 'Wrench',
	rentalCost: 2,
	lateFee: 0.5,
	description: "A hollow cylinder that fits over one end of a nut or bolt head. It may include a handle, if it does not then it is often just referred to as a socket and is usually used with various drive tools to make it a wrench or spanner such as a ratchet handle, a tee bar (sliding tommy bar) bar or a knuckle bar (single axis pivot). It generally has a six-point, eight-point or twelve-point recess, may be shallow or deep, and may have a built-in universal joint.",
	url: 'https://alexnld.com/wp-content/uploads/2016/12/1afa1b4d5d5d4ddb0d.jpg'
},{
	name: 'Needle Nose Pliers',
	type: 'Pliers',
	rentalCost: 1,
	lateFee: 0.25,
	description: "Needle-nose pliers (also known as pointy-nose pliers, long-nose pliers, pinch-nose pliers or snipe-nose pliers) are both cutting and holding pliers used by artisans, jewellery designers, electricians, network engineers and other tradesmen to bend, re-position and snip wire. Their namesake long nose gives excellent control while the cutting edge near the pliers' joint provides one-tool convenience. Because of their long shape they are useful for reaching into small areas where cables or other materials have become stuck or unreachable with fingers or other means.",
	url: 'https://www.techtoolsupply.com/v/vspfiles/photos/KLN-D335512C-2.jpg'
},{
	name: 'Wire Twist Pliers',
	type: 'Pliers',
	rentalCost: 2,
	lateFee: 0.5,
	description: "This unusual tool has short jaws with a cutting edge by the fulcrum. Between the handles is a cylindrical locking mechanism and threaded knob. By locking a piece of wire into the jaws and pulling back on the knob, the entire tool spins, twisting the wire along with it. Most commonly used in jewelry making, these pliers are also frequently used by electricians.",
	url: 'https://www.gesswein.com/images/Product/large/1804095.jpg'
},{
	name: 'Slip Joint Pliers',
	type: 'Pliers',
	rentalCost: 2,
	lateFee: 0.5,
	description: "Slip joint pliers are pliers whose pivot point or fulcrum can be moved to increase the size range of their jaws. Most slip joint pliers use a mechanism that allows sliding the pivot point into one of several positions when the pliers are fully opened.",
	url: 'https://www.kaufmanco.com/ecomm_images/items/large/pro_j276g.jpg'
},{
	name: 'Electric Circular Saw',
	type: 'Saw',
	rentalCost: 10,
	lateFee: 2.5,
	description: "A circular saw is a tool for cutting many materials such as wood, masonry, plastic, or metal and may be hand-held or mounted to a machine. In woodworking the term circular saw refers specifically to the hand-held type and the table saw and chop saw are other common forms of circular saws. Skil saw has become a generic trademark for conventional hand-held circular saws. Circular saw blades are specially designed for each particular material they are intended to cut and in cutting wood are specifically designed for making rip-cuts, cross-cuts, or a combination of both. ",
	url: 'https://images.homedepot-static.com/productImages/4765d0a8-ae24-4d61-bab3-eab8a454667f/svn/ryobi-circular-saws-csb125-64_1000.jpg'
},{
	name: 'Horizontal Band Saw',
	type: 'Saw',
	rentalCost: 50,
	lateFee: 12.5,
	description: "Horizontal bandsaws hold the workpiece stationary while the blade swings down through the cut. This configuration is used to cut long materials such as pipe or bar stock to length. Thus it is an important part of the facilities in most machine shops. The horizontal design is not useful for cutting curves or complicated shapes. Small horizontal bandsaws typically employ a gravity feed alone, retarded to an adjustable degree by a coil spring; on industrial models, the rate of descent is usually controlled by a hydraulic cylinder that bleeds through an adjustable valve. ",
	url: 'https://images.homedepot-static.com/productImages/39e65cb5-e453-4242-a4cb-3a02df1289f4/svn/jet-stationary-band-saws-414450-64_1000.jpg'
},{
	name: 'Insulated Screwdriver Set',
	type: 'Screwdriver',
	rentalCost: 4,
	lateFee: 1,
	description: "A screwdriver is a tool, manual or powered, for screwing (installing) and unscrewing (removing) screws. A typical simple screwdriver has a handle and a shaft, ending in a tip the user puts into the screw head before turning the handle. The shaft is usually made of tough steel to resist bending or twisting. The tip may be hardened to resist wear, treated with a dark tip coating for improved visual contrast between tip and screw—or ridged or treated for additional 'grip'. Handles are typically wood, metal, or plastic and usually hexagonal, square, or oval in cross-section to improve grip and prevent the tool from rolling when set down. ",
	url: 'https://images-na.ssl-images-amazon.com/images/I/81txs0pcjhL._SL1500_.jpg'
},{
	name: 'Pivoting Cordless Screwdriver',
	type: 'Screwdriver',
	rentalCost: 6,
	lateFee: 1.25,
	description: "Compact yet powerful, this Cordless Screwdriver is everything you need for simple household projects. This set offers fantastic value as it includes so many of the most common bits and sockets. Several of the bits are extended length for those harder to reach areas.",
	url: 'https://images.homedepot-static.com/productImages/73b51665-0e9e-44a9-9b22-e5d60a698261/svn/stalwart-screwdriver-sets-m550011-64_1000.jpg'
},{
	name: 'Master Tool Kit',
	type: 'Toolkit',
	rentalCost: 200,
	lateFee: 50,
	description: "This is a complete set of tools for those who are in need of everything. Projects that are in progress and theft occurs, this toolkit will fill your needs.",
	url: 'http://twavgo.info/wp-content/uploads/2018/09/large-tool-box-portable-tool-cart-husky-tool-cart-medium-size-of-storage-organizer-used-tool-boxes-large-tool-large-tool-box-sketchup.jpg'
}
]

module.exports = seedData;