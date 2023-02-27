define(['questAPI'], function(Quest){
    var API = new Quest();

	// Set the baseURL for use within images
	API.addCurrent({baseURL:'implicit/user/lirving/profhair/'});

	API.addQuestionsSet('basicSelect', 
	{
		type: 'selectOne',
		autoSubmit:true,
		numericValues:true, 
        required: true,	
        maxWidth: 100,
		errorMsg: {
			required: "Please select an answer, or click the 'Decline' button"
		},
		help: '<%= pagesMeta.number < 11 %>',
		helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
	});
    
API.addPagesSet('qPage', 
	{
		progressBar: '<%= pagesMeta.number %> out of 3',
		helpText: true,
		decline:true,
		numbered: false,
		v1style:2
	});

API.addSettings('canvas', {
    fontSize: '1.5em'
});


    API.addSequence([
    {mixer:'random', 
    data:[

{
       	inherit:'qPage',
            questions: [
                {
					type:'info',
					name: 'women1',
					description: '' +
		'<p><b> Woman 1 <img src="/implicit/user/lirving/profhair/images/afro1.jpg" height="120">  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Woman 2 <img src="/implicit/user/lirving/profhair/images/euro5.jpg" height="120">&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Woman 3<img src="/implicit/user/lirving/profhair/images/euro2.jpg" height="120">&nbsp &nbsp &nbsp &nbsp &nbsp &nbspWoman 4 <img src="/implicit/user/lirving/profhair/images/afro4.jpg" height="120"></b> </p>' +
						'<p><b> Woman 5<img src="/implicit/user/lirving/profhair/images/afro3.jpg" height="120">&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Woman 6 <img src="/implicit/user/lirving/profhair/images/euro3.jpg" height="120"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbspWoman 7<img src="/implicit/user/lirving/profhair/images/euro4.jpg" height="120"></b> '+
						'<p><b> Woman 8 <img src="/implicit/user/lirving/profhair/images/afro2.jpg" height="120"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbspWoman 9<img src="/implicit/user/lirving/profhair/images/afro5.jpg" height="120"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Woman 10 <img src="/implicit/user/lirving/profhair/images/euro1.jpg" height="120"></b>' 
						 
				},
                
                { // question begins
                name: 'profrank',
                    type: 'rank',
                    stem: 'Based only on their physical appearance, rank the women pictured above on how <b><u>professional</b></u> you think they look:',
                     randomize:false,
                     
                    list: [
                        'Woman 1',
                       'Woman 2',
                        'Woman 3',
                        'Woman 4',
                        'Woman 5',
                        'Woman 6',
                        'Woman 7',
                        'Woman 8',
                        'Woman 9',
                        'Woman 10'
                    ]
                   
                }]  
                }, // question ends
    {
       	inherit:'qPage',
            questions: [
                				{
					type:'info',
					name: 'women2',
					description: '' +
		'<p><b> Woman 1 <img src="/implicit/user/lirving/profhair/images/afro1.jpg" height="120">  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Woman 2 <img src="/implicit/user/lirving/profhair/images/euro5.jpg" height="120">&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Woman 3<img src="/implicit/user/lirving/profhair/images/euro2.jpg" height="120">&nbsp &nbsp &nbsp &nbsp &nbsp &nbspWoman 4 <img src="/implicit/user/lirving/profhair/images/afro4.jpg" height="120"></b> </p>' +
						'<p><b> Woman 5<img src="/implicit/user/lirving/profhair/images/afro3.jpg" height="120">&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Woman 6 <img src="/implicit/user/lirving/profhair/images/euro3.jpg" height="120"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbspWoman 7<img src="/implicit/user/lirving/profhair/images/euro4.jpg" height="120"></b> '+
						'<p><b> Woman 8 <img src="/implicit/user/lirving/profhair/images/afro2.jpg" height="120"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbspWoman 9<img src="/implicit/user/lirving/profhair/images/afro5.jpg" height="120"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Woman 10 <img src="/implicit/user/lirving/profhair/images/euro1.jpg" height="120"></b>' 
				},
                
                { // question begins
                name: 'resprank',
                    type: 'rank',
                    stem: 'Based only on their physical appearance, rank the women pictured above on how <b><u>responsible</b></u> you think they look:',
                     randomize:false,
                     
                    list: [
                        'Woman 1',
                       'Woman 2',
                        'Woman 3',
                        'Woman 4',
                        'Woman 5',
                        'Woman 6',
                        'Woman 7',
                        'Woman 8',
                        'Woman 9',
                        'Woman 10'
                    ]
                   
                  }]
                },
        {
       	inherit:'qPage',
            questions: [
                				{
					type:'info',
					name: 'women3',
					description: '' +
						'<p><b> Woman 1 <img src="/implicit/user/lirving/profhair/images/afro1.jpg" height="120">  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Woman 2 <img src="/implicit/user/lirving/profhair/images/euro5.jpg" height="120">&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Woman 3<img src="/implicit/user/lirving/profhair/images/euro2.jpg" height="120">&nbsp &nbsp &nbsp &nbsp &nbsp &nbspWoman 4 <img src="/implicit/user/lirving/profhair/images/afro4.jpg" height="120"></b> </p>' +
						'<p><b> Woman 5<img src="/implicit/user/lirving/profhair/images/afro3.jpg" height="120">&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Woman 6 <img src="/implicit/user/lirving/profhair/images/euro3.jpg" height="120"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbspWoman 7<img src="/implicit/user/lirving/profhair/images/euro4.jpg" height="120"></b> '+
						'<p><b> Woman 8 <img src="/implicit/user/lirving/profhair/images/afro2.jpg" height="120"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbspWoman 9<img src="/implicit/user/lirving/profhair/images/afro5.jpg" height="120"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Woman 10 <img src="/implicit/user/lirving/profhair/images/euro1.jpg" height="120"></b>' 
				},
                
                { // question begins
                name: 'frndrank',
                    type: 'rank',
                    stem: 'Based only on their physical appearance, rank the women pictured above on how <b><u>friendly</b></u> you think they look:',
                     randomize:false,
                     
                    list: [
                        'Woman 1',
                        'Woman 2',
                        'Woman 3',
                        'Woman 4',
                        'Woman 5',
                        'Woman 6',
                        'Woman 7',
                        'Woman 8',
                        'Woman 9',
                        'Woman 10'
                    ]
                   
                  }]
                }
                
        
]}
    ]);

    return API.script;
});








