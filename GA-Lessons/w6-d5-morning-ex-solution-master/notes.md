# Express debugging lab/notes - Morning Ex 

* They work on debugging app from 9-945

* Debugging Concepts - 20 minutes
Debugging Techniques - 4 Step Process
1. Read th fucking errror
2. Think about the error
3. If it makes sense, or tells you where to look, use debugging tools
4. If you dont know what it means GOOGLE THE FUCKING ERROR

Once you are in a file and know where the problem is, try console logging values and working step by step until you find the bug

Review - 15 minutes

1. models/mascots.js - line 6
* db.one vs db.many
* Error in console should read -  "Multiple rows were not expected."

2. views/mascots/edit.html - line 8 
* script.js linked incorrectly
* error in browser should read - Failed to load resource: the server responded with a status of 404 (Not Found) - jsscript.js

* unclosed mustache tag - line 13
* error in node - ERROR: { error: invalid input syntax for integer: "{mascot_id}}"

3. models/mascots.js - line 16
* syntax error in join table - should be schools.id rather than schoolsid
* error in node - { error: column "schoolsid" does not exist

* controller method named incorrectly - line 24 
* shoul be .create not .createdb
* error in node - TypeError: Mascots.create is not a function

4. controllers/mascots/index.js - line 4 
* /:id should not be before /:new 
* message in console - { error: invalid input syntax for integer: "new"

* line 2 - shoudd be require ('./controller');
* error in node - Error: Cannot find module 'controller'

5. * Express not included in project
* errorin node - Error: Cannot find module 'express'

6. mascots/show.html not named correctly

# Closing - 
* review 4 debugging steps
* from now on, you must attempt to debug your own errors. if you want help from us or Taka you must be able to:
1. describe the problem 'mine doesnt work', 'i have an error' are no longer good enough
2. tell us 3 things you tried to do to resolve the bug



