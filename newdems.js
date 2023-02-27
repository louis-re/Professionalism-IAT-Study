define(['questAPI'], function(Quest){
    var API = new Quest();

	 API.addQuestionsSet('text', [
		{
			type: 'text',
			noSubmit:false,
			required:true,
		errorMsg: {require: 'Please type an answer'}
		}
	]);  
	API.addQuestionsSet('basicSelect', 
	{
		type: 'selectOne',
		autoSubmit:true,
		numericValues:true, 
        required: true,
        //style:'multiButtons', //this allows me to add the buttons
		errorMsg: {
			required: "Please select an answer, or click the 'Decline' button"
		},
		help: false
	});
	
 API.addQuestionsSet('multiSelect',{
    type: 'selectMulti',
    autoSubmit:false,
    numericValues:true,
    required:true,
    errorMsg: {require: 'Please select an answer'}
  });
    
API.addPagesSet('qPage', 
	{
		progressBar: '<%= pagesMeta.number %> out of 5',
		helpText: true,
		decline:true,
		numbered: false,
		v1style:2
	});

    API.addSequence([
    {mixer:'wrapper', 
    data:[

        
    {                               //each question starts at inherit
	inherit:'qPage',               
        questions:[
            {
                inherit : {set:'multiSelect'}, //can't get the branch to work without making this multiselect
                //options are 1. allow multiple selections (might want to edit question slightly to reflect that)
                //2. have a text box underneath that is always there and says "if you selected
                //different identity, please specify (if desired)"
                    //I changed it to do that in newdemstest if you want to see/use it this way
                //3. take away the fill in the blank part all all together 
                //and just leave it as 'A different identity' (I'm guessing that might be a bit exclusive)
                    // to do that, change inherit set to "basicSelect" and delete the branch part of the question"
                name: 'genderid',
		stem: '</br><b>What gender identity do you most identify with?</b><br><br>',
		answers: [
			{text:'Female', value:6},
			{text:'Male', value:5},
			{text:'Transgender female', value:4},
			{text:'Transgender male', value:3},
			{text:'Genderqueer / Gender nonconforming', value:2},
			{text:'A different identity', value:1}]
            },
             {
            remix:true, 
            mixer:'branch', 
            conditions:[{operator:'in',compare:1, to:'current.questions.genderid.response'}],
            data:[{
                inherit:'text',
                name:'gendoth',
                stem:'Please specify.'
            }]
          }
        ]
    },
    
    {
	inherit:'qPage', 
        questions:[
            {
                inherit : {set:'text'}, //we were trying to inherit "text" but we didn't define it at the beginning
                //like we did with basicSelect
                //I went back to the other project file where i copied the text question
                //from and copied the text page questionSet object to the top of this study
                name:'age',
                stem:'</br><b>What is your age in years?</b><br><br>'
            
            }

        ]
    },
  {
	inherit:'qPage', 
        questions:[
            {
                inherit : {set:'multiSelect'}, //making this into multiSelect made the branching work
                //I had to copy-paste the multi-select questionSet object from the other project
                name: 'race',
		stem: '</br><b>How would you describe your race?</b><br><br>',
		answers: [
			{text:'American Indian or Alaska Native', value:1},
			{text:'Asian', value:2},
			{text:'Black / African American', value:3},
			{text:'Native Hawaiian or Pacific Islander', value:4},
			{text:'White', value:5},
			{text:'Other', value:6}]
            },
         {
            remix:true, 
            mixer:'branch', 
            conditions:[{operator:'in',compare:6, to:'current.questions.race.response'}],
            data:[{
                inherit:'text',
                name:'raceoth',
                stem:'Please specify.'
            }]
          }
        ]
    },
    {
	inherit:'qPage', 
        questions:[
            {
                inherit : {set:'basicSelect'},
                name: 'ethnicity',
		stem: '</br><b>How would you describe your ethnicity?</b><br><br>',
		answers: [
			{text:'Hispanic or Latino', value:2},
			{text:'Not Hispanic or Latino', value:1}
]
            }
        ]
    },
    
     {
	inherit:'qPage', 
        questions:[
            {
                inherit : {set:'basicSelect'},
                name: 'politic',
		stem: '</br><b>How would you best describe your political affiliation?</b><br><br>',
		answers: [
			{text:'Strongly liberal', value:1},
			{text:'Moderately liberal', value:2},
			{text:'Slightly liberal', value:3},
			{text:'Neutral', value:4},
			{text:'Slightly conservative', value:5},
			{text:'Moderately conservative', value:6},
			{text:'Strongly conservative', value:7}
]
            }
        ]
    }
    ]}
    
  
]);
	return API.script;
});
















