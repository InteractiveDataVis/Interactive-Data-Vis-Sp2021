# Tutorial 2

The goals for this tutorial are:

- to continue to get comfortable with the [Github workflow](../tutorial1_getting_started/2_GIT_SETUP.md), and with using their [local development environment](../tutorial1_getting_started/3_BASIC_SERVER.md).
- to introduce the basic mechanics of how d3 allows you to [select](https://github.com/d3/d3-selection) HTML/SVG elements and map them to data elements.
- to introduce [HTML svg](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg) coordinate system.
- to learn how [d3-scales](https://github.com/d3/d3-scale) can map abstract data elements to visual variables.
- to add axes to an svg using [d3-axis](https://github.com/d3/d3-axis).
- to learn the tools to make your own bar chart.

## Setup + Serve:

You should already have a local copy of your repository from the [tutorial 1](../tutorial1_getting_started/README.md). Start by getting a [basic server](../tutorial1_getting_started/3_BASIC_SERVER.md) up and running. This should include all the changes you've made thus far.

Once your local serve is up and reacting to code changes, you're ready to begin working on your tutorial assignment.
As you're building, don't forget you can always reference the [class code branch](https://github.com/InteractiveDataVis/Interactive-Data-Vis-Sp2021/tree/class/) or the [demo code branch](https://github.com/InteractiveDataVis/Interactive-Data-Vis-Sp2021/tree/demo/) for additional context.

## Week 2 Assignment:

- [ ] Implement your own version of the vertical bar chart we did in class using the files present in the root of this directory (`tutorial2_quantities_and_amounts/` [index.html](index.html), [style.css](style.css), [main.js](main.js)), just like we did in Tutorial 1. You may use the existing dataset, or a new one.

- [ ] Turn this **vertical bar chart** into a **horizontal bar chart**. This will require adjusting both scales to consider how the data should map back to the svg coordinate plane. (_Tip_: start by getting your bars to show, even if they are not yet positioned/sized correctly -- sometimes it is easier to understand where something should go by seeing where it currently is).

- [ ] Post your code and deployed links to the Tutorial 2 post on the Commons.

**BONUS:**

- [ ] Add a [color scale](https://github.com/d3/d3-scale-chromatic) to your bar chart. This is another type of scale where your range is going to be color values instead of screen dimensions. Feel free to use `ordinal` or `sequential` colorscales (this will depend on what type of field you want to map to color).
- [ ] Add an [HTML table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) to the page as well, using D3 data mapping to create a table row for each element of data.

## Deploy + Submit

Once you've completed the assignment, use the Github workflow to deploy your work to **your fork** of the course repository. Post the following as a comment to the appropriate post on the [commons site](https://interactivedatavis2021.commons.gc.cuny.edu/):
1. a link to your commited code repository (your link will look something like: `https://github.com/[YOUR_USERNAME]/Interactive-Data-Vis-Sp2021/[TUTORIAL_PATH]/`)
2. a link to your deployed example (your link will look something like: `https://[YOUR_USERNAME].github.io/Interactive-Data-Vis-Sp2021/[TUTORIAL_PATH]/`)

To receive full credit, you must post your stable path before the 12pm the day of the next class.

## Required Reading:

- [ ] [selection.join](https://observablehq.com/@d3/selection-join)
- [ ] [Learn D3: Scales](https://observablehq.com/@d3/learn-d3-scales?collection=@d3/learn-d3)
- [ ] [Learn D3: Shapes](https://observablehq.com/@d3/learn-d3-shapes?collection=@d3/learn-d3)
- [ ] [Data Structures D3 Accepts](https://www.dashingd3js.com/data-structures-d3js-accepts)

## Other Resources:

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