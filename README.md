# personal-site

> A profile for Aaron Steed, to advertise himself as a full stack web developer, software enginner and final year student.

### Requirements
This project requires the following :
- NodeJS
    - Node Package Manager (NPM)
        - Bower 
        - Grun

Install Node from [here!](https://nodejs.org/en/) depending on your OS.


---
### Technologies Used
- HTML, CSS, JavaScript
- Bower for Web Dependencies 
    - JQuery 
    - Animate.CSS
- Grunt Task Runner
    - Tasks :
        -  Minifying HTML, CSS, JS files
        -  Compressing images
        -  Concatenating CSS and JS files
        -  'Linting' JS files 

### Installation
To download all dependencies, assuming you have downloaded and installed NodeJS, you will also have downloaded and installed NPM (Node Package Manager). Verify you have node and NPM.

```sh
$ node -v
v6.3.0
$ npm -v 
3.10.3
```

Next is to install Bower. Bower manages all web dependencies on this project. A `bower.json` file should already be in the root directory, this specifies all the dependencies as well as the `.bashrc` file which specifies the location and name of the folder they are stored under. go ahead and install bower as follows :

```sh
$  npm install -g bower
```

Now that Bower is installed we can download our web dependencies with ease. :fire:
```sh
$  bower-install
```

This installs all the web dependencies under the directory `Bower/`

To install Grunt in use for deployments : 
```sh
$  npm install grunt
```


### Deployment
Grunt  is used to deploy our project. grunt minifies, concatenates project files and optimizes images for maximum effeciency. 

To install all the plugins grunt requires, we must first download them using npm :stuck_out_tongue:
```sh
$  npm install 
```

This will download all required plug-ins for Grunt in the directory `node_modules/`

To start grunt and make a directory ready for deployment, simply run the Grunt command :
```sh
$  grunt
```

This runs all the plug-ins Grunt has configured in `Gruntfile.js`
The available plug-ins are as follows:
- `clean` - Deletes the dist directory of the current version E.g. `dist/0.1.x`
- `concat` - concatenates JQuery files with the Javascript
- `uglify` - minifies the animate.css along with the CSS files and minifies JQuery files with the Javascript
- `jshint` - Lints the `Gruntfile.js` along with all the Javascript files.
- `cssmin` - Minifies the CSS files
- `imagemin` - Minifies and compresses JPEG images
- `htmlmin` - Minifies the HTML files

NOTE : `imagemin-mozjpeg - v5.1.0` is required as Grunt hasn't been updated to support v6.0.0
 
### Version
**0.1.0**

### Todos
 - Finish off website fully
 - Localhost setup
 - Full development environment within project

License
----

MIT     
**Free Software, Hell Yeah!**

*This file was generated on Tue 16 Aug 2016 01:45:34 IST*