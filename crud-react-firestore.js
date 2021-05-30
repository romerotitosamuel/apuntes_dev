FAZT Web - CRUD React Firebase

Solucion npm start
https://bertofern.wordpress.com/2019/01/08/solucion-node-js-npm-no-reconocido-como-comando-interno-o-externo/

14:50 "emmet" on VS code configuration
23:57 Connect with materialize 
      https://materializecss.com/icons.html
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
              <i class="material-icons">add</i> //add is de name icon
27:43 Create a button and begin to programming functions

36:53 Change LinkForm into Links
38:44 Send data to firebase
40:50 import db 
43:53 Clear the form and show a notification
46:05 Do the UseEffect for show data in load page
51:00 Create second useState
57:40 How to DELETE a data
1:03:05 Teach to do a Notification when url is deleted
1:07:32 Teach how to EDIT a URL



//Me quede en 51:00



db.collection('links').onSnapshot( (querySnapshot) => { querySnapshot.forEach((doc) => { console.log(doc.data()) } )})
