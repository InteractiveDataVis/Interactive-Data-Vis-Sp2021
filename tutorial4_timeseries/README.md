# Tutorial 4

The goals for this tutorial are:

- Introduce [d3 line](https://github.com/d3/d3-shape#lines) generators, and solidify how a function generator works differently than the appending and manipulating elements we've done so far.
- Reinforce the boilerplate logic, with some slight updates, to further understand the data lifecycle (both for javascript and d3.js enter, update, and exit).
- Practice [transitions](https://github.com/d3/d3-transition) on elements we know already, but also introduce new types of transitions on scales.

## Setup + Serve:

You should already have a local copy of your repository from the [tutorial 1](../tutorial1_getting_started/README.md). Start by getting a [basic server](../tutorial1_getting_started/3_BASIC_SERVER.md) up and running. This should include all the changes you've made thus far.

Once your local serve is up and reacting to code changes, you're ready to begin working on your tutorial assignment.
As you're building, don't forget you can always reference the [class code branch](https://github.com/InteractiveDataVis/Interactive-Data-Vis-Sp2021/tree/class/) or the [demo code branch](https://github.com/InteractiveDataVis/Interactive-Data-Vis-Sp2021/tree/demo/) for additional context.

## Week 4 Assignment:

- [ ] Implement your own line chart _with a different dataset_ than the one used in our demo.

- [ ] Turn this line chart into an [area chart](https://github.com/d3/d3-shape#areas). **Tip**: Think first about how that would be drawn on the screen. What are you creating on the svg? This requires referencing the d3 documention to understand the similarities and differences between the area function generator and the line function generator.

- [ ] Make intentional design decisions -- colors, sizes, axes, transitions, etc. should illustrate something interesting about or relevant to your data.

- [ ] Post your code and deployed links to the Tutorial 4 post on the Commons.

**BONUS:**

- [ ] Turn this single line chart into a multi-line chart, either with this data or with your own.

- [ ] Add hover activity to your path line or circles. Try doing this only with javascript `.on("mouseover", ...)`, before resorting to the css method, `:hover`. Consider adding text annotations on hover, a moving tooltip/info box, or maybe to highlight key events.

## Deploy + Submit

Once you've completed the assignment, use the Github workflow to deploy your work to **your fork** of the course repository. Post the following as a comment to the appropriate post on the [commons site](https://interactivedatavis2021.commons.gc.cuny.edu/):
1. a link to your commited code repository (your link will look something like: `https://github.com/[YOUR_USERNAME]/Interactive-Data-Vis-Sp2021/[TUTORIAL_PATH]/`)
2. a link to your deployed example (your link will look something like: `https://[YOUR_USERNAME].github.io/Interactive-Data-Vis-Sp2021/[TUTORIAL_PATH]/`)

To receive full credit, you must post your stable path before the 12pm the day of the next class.

## Other Resources:

- [Interneting Is Hard: CSS Selectors](https://www.internetingishard.com/html-and-css/css-selectors/)
- [Thinking With Joins](https://bost.ocks.org/mike/join/)
- [Arrow Functions](https://www.javascripttutorial.net/es6/javascript-arrow-function/)
- [Javascript.info: Data Types](https://javascript.info/types)
- [MDN: Introduction to Asynchronous Code.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [d3 geo](https://github.com/d3/d3-geo)
- [selection.join](https://observablehq.com/@d3/selection-join)
- [Learn D3: Scales](https://observablehq.com/@d3/learn-d3-scales?collection=@d3/learn-d3)
- [Learn D3: Shapes](https://observablehq.com/@d3/learn-d3-shapes?collection=@d3/learn-d3)
- [Data Structures D3 Accepts](https://www.dashingd3js.com/data-structures-d3js-accepts)
- [Serial Mentor: Directory of Visualizations](https://serialmentor.com/dataviz/directory-of-visualizations.html)
