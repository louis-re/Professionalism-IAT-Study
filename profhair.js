
define(['managerAPI'], function(Manager){

	// This code is responsible for styling the piQuest tasks as panels (like piMessage)
	// Don't touch unless you know what you're doing
	var css = '[pi-quest]{background-color: #fff;border: 1px solid transparent;border-radius: 4px;box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);margin-bottom: 20px;border-color: #bce8f1;padding:15px;}';
	window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";' + css + '</style>');

	var API = new Manager();

	
	API.setName('mgr');
	API.addTasksSet({
	    
	
		instructions: [{type:'message', buttonText:'Continue'}], 
		

			
		realstart : [{
	    	inherit:'instructions', name:'realstart', templateUrl: 'realstart.jst', title:'Instructions', 
	    	piTemplate:true}],
	    
    partid: [{type: 'quest', name: 'partid', scriptUrl: 'partid.js'}], 
    
    newdems: [{type: 'quest', name: 'newdems', scriptUrl: 'newdems.js'}], 
    //make demographics into one of these; delete the rest of the "quests" objects
    explicit: [{type: 'quest', name: 'explicit', scriptUrl: 'explicit.js'}],
    
    	expinst:
	    [{inherit:'instructions', name:'expinst', templateUrl: 'expinst.jst', title:'Scale Instructions',
        piTemplate:true}], 

    	deminst:
	    [{inherit:'instructions', name:'deminst', templateUrl: 'deminst.jst', title:'Scale Instructions',
        piTemplate:true}], 

 
//rename the iatraceatt and instiatraceatt to whatever you want the professionalism IAT files to be named
//then change these items to match those
        
        iatprofinst: [{
            inherit: 'instructions',
            name: 'iatprofinst',
            templateUrl: 'iatprofinst.jst',
            title: 'IAT Instructions',
            piTemplate: true,
            header: 'Implicit Association Test'
        }], 
        

 	    iatprof: [{
            type: 'pip',
            name: 'iatprof',
            version: '0.3',
            scriptUrl: 'iatprof.js'
        }], 

		debrief: [{type:'message',name:'lastpage', templateUrl: 'debrief.jst', last:true}]
	});

	API.addSequence([
	    ///you created the object that calls in the partid.js page, but you also have to add the objects you make into the sequence here. 
	    //there is a different way to do things where you don't have to do so much redundancy, but this way has the highest rate of success for me
	    //i put part id as the first page.
             {inherit:'partid'},
             {inherit:'realstart'},

		    {mixer: 'random', data: [
    		
    			//Explicit instructions and items go here
    			{mixer: 'wrapper', data: [
        	        {inherit:'expinst'},
    		        {inherit:'explicit'}
    		        ]},
    				
                //IAT instructions and IAT go here
    		    {mixer: 'wrapper', data: [
        	        {inherit:'iatprofinst'},
    		        {inherit:'iatprof'}
    		        ]}
    		       
	         ]},
    	//debriefing goes here
    	    			{mixer: 'wrapper', data: [
        	        {inherit:'deminst'},
    		        {inherit:'newdems'}
    		        ]},
    		        {inherit:'debrief'}
    		        
    		        


       	]);
	return API.script;
});




































































