# Setting up a New Project
->Install the Node.
->After Install the node. I created a new project in Command Prompt.
->Here this the command to create the project - > (npx create-react-app github)
->npx create-react-app means It is a Node-Pacakage-Execute and Create-React-App will always have: An index, html file. It allows us to create and run project very quickly
->Where github is the name of the folder for the application.
->After the project was created you will recieve the message Happy hacking :) Then you can give the command i.e., (Code .) it means directly routes to Visual Studio. There you can see the Github project inside the node_modulesfolder, Public Folder,
src Directory, package.lock.json, package.json, ReadME.md. Inside of the Src Directory we will see tha App.js It is the main Component represents the entire application.

## Install Dependencies
I need a few additional packages to work with GitHubAPI's. So I install the dependencies that using npm. 
Here this is the command to install the Dependencies-> (npm install axios react-bootstrap react-responsive-carousel)
.)Axios for making the API requests.
.)React-bootstrap is for responsive design. I think some reasons installing reactbootstrap is not working could you please add these code to your index.html file after 27 line please paste this code or I will already attached the Index.html file in git hub. You can copy the file and replace the file in your project.
(<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
<script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>).
.)React-responsive-carousel is for displaying images.
After Installing the Dependencies you can see that Inside of Package.json whether it is installed or not.

### Building the Components
->created a new file (GitHubPRPage.js) in the src directory to build the components.

#### Creating Styles
->Created a CSS file (GitHubPRPage.css) to style the page.

##### App.js
->calling the main file i.e., (GitHubPRPage.js)

##### Copying the files from github repository
1)In App.css, App.js remove the code.
2)After that So these three are the main files you can copy the files from github. I uploaded those files i.e, App.js, GitHubPRPage.js, GitHubPRPage.css. you can paste these files in your Visual studio.

###### Implementation
I implemented the functionality using HTML, CSS, React bootstrap, JavaScript and React Frameworks.
1)I created a Function fetchPullRequests() in that using try and catch methods. So In Try() method 
 With the help of axios, I make the Github API requests  to display the list of PRs, Eg: As Follow the Assignment PR Should contain the 3 piece of information i.e., name of the PR, the author and how many comments on the PR. If the (response.data) we are getting then it displays the PR page and the second method catch() If it not displays it will throws an (error) page.
2)Using the ReactHooks. so I implemented the *)const [repoUrl, setRepoUrl] = useState('');
                                             *)const [pullRequests, setPullRequests] = useState([])
Here useState is a state updating the function. After calling the setRepoUrl, setPullRequests the component is rendered and the new call of useState returns the new value. 
3)I Implement the map() function for rendering the PRs list of data. So It expects the callback as a argument and executes it once for each element in the array.


###### Testing the Result

We can test the output. we need to give the list of PRs URL in the input field. After giving the github PRs Url. Click the Fetch PRs after that we can see the display list of PRs - Name, Author and comments
