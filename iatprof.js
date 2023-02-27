define(['/implicit/common/all/js/pip/piscripts/iat/iat5.js'], function(iatExtension){
	return iatExtension({
		category1 : {
			name : 'Straight Hair', 
			title : {
				media : {word : 'Straight Hair'}, 
				css : {color:'#31b404','font-size':'2em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{image: 'euro1.jpg'},
				{image: 'euro2.jpg'},
				{image: 'euro3.jpg'},
				{image: 'euro4.jpg'},
				{image: 'euro5.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31b404','font-size':'2em'} 
		},	
		category2 :	{
			name : 'Other Hair', 
			title : {
				media : {word : 'Other Hair'}, 
				css : {color:'#31b404','font-size':'2em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{image: 'afro1.jpg'},
				{image: 'afro2.jpg'},
				{image: 'afro3.jpg'},
				{image: 'afro4.jpg'},
				{image: 'afro5.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31b404','font-size':'2em'}
		},
		attribute2 : 
		{
			name : 'Professional', //Will appear in the data.
			title : {
				media : {word : 'Professional'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Professional'},
				{word: 'Acceptable'},
				{word: 'Appropriate'},
				{word: 'Suitable'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#0000FF','font-size':'2em'}
		},
		attribute1 : 
		{
			name : 'Unprofessional', //Will appear in the data.
			title : {
				media : {word : 'Unprofessional'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Unprofessional'},
				{word: 'Inappropriate'},
				{word: 'Unfit'},
				{word: 'Improper'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2em'}
		},

		base_url : {//Where are your images at?
			image : '/implicit/user/lirving/profhair/images/'
		},
		
		//attribute1, and attribute2 will be replaced with the name of attribute1 and attribute2.
		//categoryA is the name of the category that is found to be associated with attribute1,
		//and categoryB is the name of the category that is found to be associated with attribute2.
		fb_strong_Att1WithCatA_Att2WithCatB : 'Your data suggest strong automatic preference for categoryB over categoryA.',
		fb_moderate_Att1WithCatA_Att2WithCatB : 'Your data suggest moderate automatic preference for categoryB over categoryA.',
		fb_slight_Att1WithCatA_Att2WithCatB : 'Your data suggest weak automatic preference for categoryB over categoryA.',
		fb_equal_CatAvsCatB : 'Your data suggest no automatic preference between categoryA and categoryB.'
	});
});














