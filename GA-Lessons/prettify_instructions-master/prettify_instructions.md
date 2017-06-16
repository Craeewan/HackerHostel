# HTML-CSS-JS Prettify Installation

- OPEN sublime.
- Hold shift-command-P; a text bar should open at the top of the window.

- Type "install packages"; hit return. Sublime may spin for a minute while the package repo is queried.
- When the package text bar appears at the top of the screen, type "HTML-CSS-JS Prettify" and hit enter; installation should begin.
- Wait for sublime to finish installing the HTML/CSS/JS Prettify package.

- QUIT sublime.
- OPEN sublime again.

- Open a Javascript file in sublime.
- Go to the following sublime menu:
  sublime text (the far left menu in the menu bar) > preferences > package settings > html/css/js prettify > prettify code
- When you click "prettify code", the Javascript file you're looking at should be automatically formatted and indented by sublime.

## Usage

- In a JavaScript file, hit shift-command-H.

## Troubleshooting
- If you get an error complaining about the node path:
  - Go to 
    sublime text > preferences > package settings > html/css/js prettify > set "node" path
  - A JSON file should open. In the JSON file, one entry will have the key "node_path" and an object for a value; this object should contain an entry for "osx". Make sure the value for the "osx" entry is the same string you get when you enter the command `which node` in the terminal. If you get nothing back from `which node`, node is not installed; see below.
  - QUIT AND REOPEN sublime, and try again.
- If node is not installed:
  - In the terminal, enter the command `brew install node`.
  - When node is done installing, try running prettify code as above from inside Sublime again.
