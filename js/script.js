//constant variables -data that never changes
alert('Js is loaded!');
//state variables- data that changes

// cached element refrence - parts of the dom we need to touch

//event listeners - capture and respond to events i.e. use clicks on something

// functions- code that represents actions taken/carried out

function getData(){ 

     $.ajax('https://api.spacexdata.com/v3/launches')
         .then(function(data) { 
             console.log(data); 
         }, function(error) {
            console.log(error);
         });
}