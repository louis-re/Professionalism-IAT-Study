//This page prompts participants to type that they will complete the study with their full attention.
//This approach has been shown to reduce drop-outs in online studies (Zhou & Fishbach, 2016 - experiment 4)

define(['questAPI'], function(quest){

	var API = new quest();

//Not sure if we need this bit
	//API.addSettings('logger', 
	//{
	//	url: '/implicit/PiQuest'
	//});

	API.addQuestionsSet({
		partid: [		{						
		    type:'text',						
		    name: 'partid',
		    required: true,
		     //This is the length of the phrase they have to type. Including this means that if they type left, a prompt will appear.
		    maxWidth: 100, //modify the stem below to describe how long the study will take and potentially describe what the study involves
			stem: '</br><b>Enter Participant ID</b><br><br>',
		    errorMsg: {
                        required: 'It is important that enter a participant id before you begin the study.'
            }
		    }]
	});	

	API.addPagesSet('BasicPage',{
		noSubmit:false, 
		v1style: 2,
		numbered: false,
		headerStyle: {'font-size':'1em'}
	});	

    API.addSequence([
		{			inherit:'BasicPage', questions: {inherit:{set:'partid'}} }
	]);


	return API.script;
});




 








