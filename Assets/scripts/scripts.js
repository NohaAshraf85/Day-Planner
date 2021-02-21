// $("#timeblocksConrainer").html("<div></div>");
// console.log(timeblocksConrainer);
$(document).ready(function(){

var currentDay = $("#currentDay");
console.log(currentDay);
var dt = new Date();
var currentHour = dt.getHours();
var currentRow = currentHour-9;
var saveButton = $(".saveBtn");


currentDay.text(moment().format("dddd, MMMM Do"));
console.log(currentDay)

var calendarTextArray =["", "", "", "", "", "", "", "", ""];



$(".saveBtn").on("click", function() {
    
  
    var text = $("#calendarTextArea" + this.value);
    //This is the value in text area
     calendarTextArray[this.value]=text.val();
     console.log(calendarTextArray);
    //"#calendarTextArea" + this.value
    
  });

for (var i=0; i < 9; i++){
    if (currentRow === i)
    {
        $("#calendarTextArea" + i ).attr("class", "present");
    }

    else if (currentRow > i)
    {
        $("#calendarTextArea" + i ).attr("class", "past");
    }

    else{
        $("#calendarTextArea" + i ).attr("class", "future");
 
    }
}
  











});