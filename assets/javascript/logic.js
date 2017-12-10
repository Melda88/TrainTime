
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDFG3Ls3LRv1mija7CsZeIT-NR2oy2yjyU",
    authDomain: "realtime-database-32874.firebaseapp.com",
    databaseURL: "https://realtime-database-32874.firebaseio.com",
    projectId: "realtime-database-32874",
    storageBucket: "realtime-database-32874.appspot.com",
    messagingSenderId: "81705056659"
  };

  firebase.initializeApp(config);

 var trainData = firebase.database();

 $("#addTrainBtn").on("click",function(){
    var trainName = $("#trainNameImput").val().trim();
    var destination = $("#destinationImput").val().trim();
    var firstTrain = moment($("#firstTrainImput").val().trim(),"HH:mm").subtract(10,"years").format("X");
    var frequency = $("#frequencyImput").val().trim();
 
    console.log(firstTrain);
    return false;

})

 trainData.ref().on("child_added",function(snapshot){
  var name = snapshot.val().name;
  var destination = snapshot.val().destination;
  var frequency = snapshot.val().frequency;
  var firstTrain = snapshot.val().firstTrain;

  var remainder = moment().diff(moment.unit(firstTrain),"minutes")%frequency;
  var minutes = frequency - remainder;
  var arrival = moment().add(minutes,"m").format("hh:mm A");

  console.log(remainder);
  console.log(minutes);
  console.log(arrival);


 })
