# Tutorial 3

The goals for this tutorial are:

- to introduce the data join lifecycle through [enter, update, and exit selections](https://github.com/d3/d3-selection/blob/v1.4.1/README.md#selection_join).
- to introduce a new file structure ("boilerplate") that will allow us to incorporate application `state`.
- to learn basic [d3-transitions](https://github.com/d3/d3-transition), and leverage them to enhance understanding of the data.
- to learn to work with HTML UI elements, like [select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) or [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), and basic event listeners.

## Setup + Serve:

You should already have a local copy of your repository from the [tutorial 1](../tutorial1_getting_started/README.md). Start by getting a [basic server](../tutorial1_getting_started/3_BASIC_SERVER.md) up and running. This should include all the changes you've made thus far.

Once your local serve is up and reacting to code changes, you're ready to begin working on your tutorial assignment.
As you're building, don't forget you can always reference the [class code branch](https://github.com/InteractiveDataVis/Interactive-Data-Vis-Sp2021/tree/class/) or the [demo code branch](https://github.com/InteractiveDataVis/Interactive-Data-Vis-Sp2021/tree/demo/) for additional context.

## Week 3 Assignment:

- [ ] Implement your own scatterplot with a *different dataset* than the one used in our demo.

- [ ] Implement a different transition than the one used in the demo (i.e., your dots should not move from left to center to right on transitions). Consider other visible properties that could change as an object is entering, exiting, etc. and what that change suggests about the state of that data point.

- [ ] Make intentional design decisions -- colors, sizes, axes, transitions, etc. should illustrate something interesting about or relevant to your data.

- [ ] Post your code and deployed links to the Tutorial 3 post on the Commons.

**BONUS:**

- [ ] Add another UI element to your page. This means that the element should (1) update `state`, and just as the dropdown does, (2) call `draw()` on change, and (3) affect the data appropriately. Some ideas include another dropdown for another value, radio buttons, checkbox, an input field with a threshold value, etc.

## Deploy + Submit

Once you've completed the assignment, use the Github workflow to deploy your work to **your fork** of the course repository. Post the following as a comment to the appropriate post on the [commons site](https://interactivedatavis2021.commons.gc.cuny.edu/):
1. a link to your commited code repository (your link will look something like: `https://github.com/[YOUR_USERNAME]/Interactive-Data-Vis-Sp2021/[TUTORIAL_PATH]/`)
2. a link to your deployed example (your link will look something like: `https://[YOUR_USERNAME].github.io/Interactive-Data-Vis-Sp2021/[TUTORIAL_PATH]/`)

To receive full credit, you must post your stable path before the 12pm the day of the next class.

## Required Reading:

- [ ] [Interneting Is Hard: CSS Selectors](https://www.internetingishard.com/html-and-css/css-selectors/)
- [ ] [Thinking With Joins](https://bost.ocks.org/mike/join/)
- [ ] [Arrow Functions](https://www.javascripttutorial.net/es6/javascript-arrow-function/)
- [ ] [Javascript.info: Data Types](https://javascript.info/types)
- [ ] OPTIONAL: [MDN: Introduction to Asynchronous Code.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

## Other Resources:

- [selection.join](https://observablehq.com/@d3/selection-join)
- [Learn D3: Scales](https://observablehq.com/@d3/learn-d3-scales?collection=@d3/learn-d3)
- [Learn D3: Shapes](https://observablehq.com/@d3/learn-d3-shapes?collection=@d3/learn-d3)
- [Data Structures D3 Accepts](https://www.dashingd3js.com/data-structures-d3js-accepts)
- [Serial Mentor: Directory of Visualizations](https://serialmentor.com/dataviz/directory-of-visualizations.html)
- [O'Reilly: Binding Data](https://alignedleft.com/tutorials/d3/binding-data)
- [O'Reilly: Chaining Methods](https://alignedleft.com/tutorials/d3/chaining-methods)
- [JS Fundamentals: Variables](https://javascript.info/variables)
- [Javascript Fundamentals](https://javascript.info/first-steps)
- [Javascript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [How to use github](https://git-scm.com/book/en/v2)
- [Guide to CSS Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
- [Interneting Is Hard](https://www.internetingishard.com/html-and-css/)
- [Javascript.info: Getting Started](https://javascript.info/getting-started)
- [Javascript.info: Debugging Chrome](https://javascript.info/debugging-chrome)
- [D3: Data-Driven Documents](http://vis.stanford.edu/files/2011-D3-InfoVis.pdf)
