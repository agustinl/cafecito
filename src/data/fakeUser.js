const fakeUser = {
	user: {
		_id: "1",
		countCoffees: 400,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nPhasellus sed erat non quam auctor tincidunt luctus id justo. Pellentesque id augue egestas, pellentesque nisi quis, semper turpis. Aenean dapibus arcu feugiat, tempus sapien nec, porta massa. Donec ipsum nisi, cursus eu tempor id, accumsan sit amet tellus. In tincidunt in arcu vel fermentum.\n\nAenean sit amet magna sed erat suscipit consectetur et mollis libero. In sed neque vitae lorem congue blandit. Aenean rutrum eget diam et pulvinar.",
		name: "Dexter Morgan",
		username: "randomUser",
		priceCoffee: 100,
		image: {
			profile:
				"",
			banner: "",
			bannerWebp:
				"",
			profileWebp:
				"",
		},
		nsfw: false,
		socialNetwork: {
			twitter: "",
			instagram: "",
			facebook: "",
			youtube: "",
			twitch: "",
			page: "",
		},
		categories: [2, 3, 14, 10, 8],
		texts: {
			title: "Comprar cafecito",
			button_singular: "Cafecito",
			button_plural: "Cafecitos",
			button_mobile: "Invitame un Cafecito",
			thanks: "Gracias",
		},
		countPlanBuyers: 259,
		showTopDonations: true,
		goal: {
			title: "Objetivo",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed erat non quam auctor tincidunt luctus id justo.",
            amountGoal: 100,
			collectedGoal: 72,
			typeGoal: 2,
		},
		hideCafecitos: false,
		paymentsLightningNetwork: true,
		identification: {
			triesRekognition: 1,
			valid: true,
		},
		acceptForeignPayments: true,
		priceCoffeeUSD: 1,
		stripeData: {
			id: "123",
		},
		paymentMercadoPagoValid: true,
		documentValid: true,
		paymentValid: true,
		paymentLightningNetworkValid: true,
		paymentStripeValid: true,
	},
	plans: [
		{
			_id: "1",
			title: "Plan 1",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed erat non quam auctor tincidunt luctus id justo. Pellentesque id augue egestas, pellentesque nisi quis, semper turpis.",
			price: 1200,
			countPosts: 10,
		},
		{
			_id: "2",
			title: "Plan 2",
			description: "",
			price: 1000,
			countPosts: 5,
		},
	],
	coffees: [
		{
			_id: "1",
			name: "RachelGreen",
			message: "Aenean tempus metus eu tincidunt finibus.",
			countCoffees: 20,
			createdAt: "",
            answer: "Vestibulum ex ex, vulputate quis mattis ut!"
		},
		{
			_id: "2",
			name: "Chandler",
			message: "",
			countCoffees: 6,
			createdAt: "",
            answer: ""
		},
		{
			_id: "3",
			name: "",
			message: "Integer vestibulum placerat sagittis. Nunc eu hendrerit massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque facilisis magna vel nibh consequat ultricies.",
			countCoffees: 10,
			createdAt: "",
            answer: "Duis a auctor lacus, a ultricies turpis."
		},
		{
			_id: "4",
			name: "",
			message: "",
			countCoffees: 1,
			createdAt: "",
		},
		{
			_id: "5",
			name: "mgeller",
			message: "Etiam tempor ipsum non arcu varius, non bibendum purus aliquet.",
			countCoffees: 15,
			createdAt: "",
            answer: ""
		},
	],
	userAgent: "",
	query: {
		username: "randomUser",
	},
	isAdult: null,
	hasGallery: true,
	hasPost: true,
	countCoffees: 11,
	topDonations: [
		{
			countCoffees: 100,
			name: "Joey_Tribbiani",
		},
		{
			countCoffees: 40,
			name: "Ross",
		},
		{
			countCoffees: 27,
			name: "RachelGreen",
		},
		{
			countCoffees: 20,
			name: "mgeller",
		},
		{
			countCoffees: 20,
			name: "Chandler",
		},
	],
    imagesGallery: [
        {
            "_id": "1",
            "title": "Lorem Ipsum",
            "image": "",
            "privated": true,
            "plans": [
                "1"
            ],
            "pathUrl": "-1"
        },
        {
            "_id": "2",
            "title": "Lorem Ipsum",
            "image": "",
            "privated": false,
            "plans": [
                "2"
            ],
            "pathUrl": "-2"
        },
    ],
    "posts": [
        {
            "_id": "1",
            "plans": null,
            "title": "Lorem Ipsum",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus nisl nisi, eget condimentum magna tempus ut. Maecenas a urna justo. Nam at tortor eget lectus blandit cursus vel ac metus. Mauris scelerisque eros quis porta tristique. Integer eu urna quis ipsum consequat vestibulum. Etiam et enim congue, pellentesque massa id, sagittis quam. Curabitur feugiat quis eros vitae placerat. Mauris id elit aliquet, dictum ex nec, dictum dolor.\n\n\n\nDonec bibendum bibendum odio at elementum. Curabitur odio nibh, mollis vitae odio quis, mattis fermentum est. Mauris fermentum ornare orci a convallis. Ut turpis quam, consequat in urna at, mollis rutrum est. Nulla tempus tellus at mi commodo, vel tincidunt dolor accumsan. Phasellus imperdiet mi at odio placerat, at vestibulum turpis egestas. Maecenas lobortis, mauris non tempus auctor, dui neque aliquet erat, ut elementum urna mi vitae nisi. Quisque facilisis sapien eget neque viverra viverra. Maecenas non tortor at risus porta iaculis sit amet a dui. Pellentesque mauris erat, ultricies et ornare dignissim, egestas quis mi. Proin gravida ut mi eget aliquam. Donec mollis nisl sed tellus blandit commodo. Nulla risus enim, vulputate quis condimentum eu, placerat et ipsum. Fusce pretium nisl ut porta sagittis. Phasellus in lacus in mi tempor pharetra. Duis consequat porta semper.",
            "private": false,
            "image": "",
            "pathUrl": ""
        },
    ]
};
export default fakeUser;
