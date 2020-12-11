//create our Database
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

//Create a Table COMMENTS and display all records in table
// is called when the webpage is opened
function Comments(){

  //create a Table, with columns: ID, NAME, EMAIL, COMMENT
db.transaction(function (tx) {
   tx.executeSql('CREATE TABLE IF NOT EXISTS COMMENTS (ID INTEGER PRIMARY KEY, NAME TEXT, EMAIL VARCHAR, COMMENT VARCHAR )');
});

  //display all records in table
db.transaction( function (tx) {
  tx.executeSql('SELECT * FROM COMMENTS', [], function (tx, results) {
        //number of records
      var len = results.rows.length;

      for (var i = 0; i < len; i++)
      {
            //this function will write the NAME and COMMENT to the webpage
        createNewComment(results.rows.item(i).NAME, results.rows.item(i).EMAIL, results.rows.item(i).COMMENT);
      }

  }, null);

});
}


function createNewComment(name,email,comment)
{
var paragraph = document.createElement("p");
paragraph.innerHTML = '<b style="font-family:Arial">'+name+'</b><br>'+'<i>'+comment+'<i><br><br>';

//display NAME and COMMENT to webpage
document.getElementById("comments").appendChild(paragraph);

//debug to check
console.log("Comments: "+document.getElementById("comments").innerHTML);
}

function addComment()
{
var name = document.getElementById("name").value;
var regname = /^([a-zA-Z]+(\s)*)+$/g;
var comment =  document.getElementById("comment").value;
var email = document.getElementById('email').value;
var regemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
var allgood=true;

//for validating NAME,EMAIL,COMMENT before inserting it to the databse
if(regname.test(name)==false || name=="" )
{  document.getElementById("nameError").innerHTML = "Please Enter a valid Name";allgood=false; }
else
{  document.getElementById("nameError").innerHTML = " "; }

if(comment=="")
{  document.getElementById("commentError").innerHTML = "Please Enter a comment";allgood=false; }
else
{  document.getElementById("commentError").innerHTML = " "; }

if(regemail.test(email)==false || email=="" )
{  document.getElementById("emailError").innerHTML = "Please Enter a valid Email";allgood=false; }
else
{  document.getElementById("emailError").innerHTML = " "; }

if(allgood==true)
{
// When creating a var query, use the ` ` characters. Not apostrophes: ' '
var query = `INSERT INTO COMMENTS (NAME, EMAIL, COMMENT) VALUES ("${name}", "${email}", "${comment}")`;

alert("Your comment has been recorded!");	//alert msg of what user typed into the form ^

db.transaction(function (tx) {
    tx.executeSql(query);	//place COMMENT in db table
  });
  //create new COMMENT; creates <p> that displays my comment below the form
createNewComment(name,email,comment);

resetInput();	//reset the form
}
else {
  alert("Invalid Input(s) found in the form! Please re-check your enteries.");
}

}

function resetInput()	//rest my form
{
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("comment").value = "";
}

function clearComments()	//empty out Db
{
db.transaction(function (tx) {
  tx.executeSql('DELETE FROM COMMENTS');
document.getElementById("comments").innerHTML = "";
});
}
