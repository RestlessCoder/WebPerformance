## Website Performance Optimization portfolio project

This project goal is to optimize this online portfolio for speed. The steps that I have done shown below:
* Part 1: Optimize the Critical Rendering path(CPR) by using PageSpeed tool to achieves a score of 90 above for Mobile and Desktop (index.html)
* Part 2: Improve the frame-rate at 60fps when scrolling. (main.js) & (pizza.html).
* Part 3: Resize the pizza images in less 5 ms by using the pizza size slider.
To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html (For Windows)

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server 

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m http.server 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```
The index.html originally had a Google PageSpeed score of under 50/100 for mobile & desktop. After optimized the index.html the scored increased to above 90/100 for both mobile and desktop.

What has been changed?
* Removed the Google Font 
* Added the async attribute to all scripts tags.
* Moved all the scripts tags file to bottom. 
* Minified CSS using Gulp.js and inlined all of the CSS.
* Added the media="print" attribute to avoid CSS Render Blocking.
* Resized a image that were too large (Using Adobe PhotoShop).
* Optimize images by compressed all images using Gulp.js.

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

To reach a frame rate of 60fps for the pizza.html. I made the following changes in main.js:
* Reduces the number of element pizzas created on the webpage from 200 to 36
* Changed the 'querySelectorAll() to 'getElementsByClassName()' for quicker access to our DOM elements.
* Created "topScroll" variable (var scrollTop = document.body.scrollTop / 1250;)
* Moved the Math.sin calculation out of the 'for' loop
* Used an array to stored 5 unique phases for each scroll to reduce the scripting time.
* Used the transformX instead of items.style.left = = items[i].basicLeft + 100 * phase + 'px'; to reduce the layout time
* Added some extra properties to the CSS for the .mover class. e.g. (will-change: transform; transform translate3d(0,0,0); and backface-visibility: hidden;)

#### Part 3: Optimize the computational effieciency

To make time to resize pizza elements less than 5ms. I made the following changes in main.js:
* In function changePizzaSizes(), replaced "querySelectorAll()" to getElementsByClassName().
* In the same function, i moved all the variable declarations outside the 'for' loop. e.g. (var dx,newidth, i)

### Gulp Installation & Resources Used
* [Setting Up a Project with Gulp (This steps only apply after node.js & gulp in desktop is installed)](https://www.youtube.com/watch?v=tlxm4eLbTio&t=4s)
* [Minify-css using Gulp](https://www.npmjs.com/package/gulp-clean-css)
* [Compress-Image using Gulp](https://www.npmjs.com/package/gulp-imagemin)

### Resources Used
* [Async Scripts](https://developer.mozilla.org/en-US/docs/Games/Techniques/Async_scripts)
* [CSS Media Types](https://www.w3schools.com/css/css3_mediaqueries.asp)
* [WebFont options & Speed](https://varvy.com/pagespeed/web-font-options.html)
* [Put JS Scripts at the Bottom](http://stevesouders.com/examples/move-scripts.php)
* [Effective Optimizations for 60fps](https://github.com/udacity/fend-office-hours/tree/master/Web%20Optimization/Effective%20Optimizations%20for%2060%20FPS)
* [CSS3 backface-visibility Property](https://www.w3schools.com/cssref/css3_pr_backface-visibility.asp)
* [CSS will-change Property](http://stackoverflow.com/questions/26907265/css-will-change-how-to-use-it-how-it-works)

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Rendering Performance](https://developers.google.com/web/fundamentals/performance/rendering/)
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
