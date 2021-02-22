# Tutorial 5

The goals for this tutorial are:

- To explore GeoJSON data, and how geographical features on our earth translate to projected shapes on an svg.
- To understand [projections](https://github.com/d3/d3-geo#projections), in conjunction with [d3.geo-path](https://github.com/d3/d3-geo#geoPath), transforms lattitude and longitude space into pixel space.
- To grasp that d3.js svg maps are as simple as lines and circles, and can be manipulated as such, with stroke, fill, etc.
- To be exposed to the concept of something updating with every mouse movement -- the early stages of what will later become a tooltip.

## Setup + Serve:

You should already have a local copy of your repository from the [tutorial 1](../tutorial1_getting_started/README.md). Start by getting a [basic server](../tutorial1_getting_started/3_BASIC_SERVER.md) up and running. This should include all the changes you've made thus far.

Once your local serve is up and reacting to code changes, you're ready to begin working on your tutorial assignment.
As you're building, don't forget you can always reference the [class code branch](https://github.com/InteractiveDataVis/Interactive-Data-Vis-Sp2021/tree/class/) or the [demo code branch](https://github.com/InteractiveDataVis/Interactive-Data-Vis-Sp2021/tree/demo/) for additional context.

## Week 5 Assignment:

- [ ] Implement your own version of the map, using the us state geojson data provided in the [data folder](../data/), or another geojson of your choice.

- [ ] Using your own lat/long dataset _OR_ the provided dataset for this exercise, [`usHeatExtremes.csv`](../data/usHeatExtremes.csv) (also in the [data folder](../data/)), add points to your map. _HINT:_ since we're still in svg, we can just add circles to the map, like we've done before, but you'll need to use your `projection` to translate from (long,lat) values to (x,y) values.

- [ ] Add mouseover behavior to each point, so its data updates state, and is displayed in our tooltip display.

- [ ] Make intentional design decisions -- colors, sizes, axes, transitions, etc. should illustrate something interesting about or relevant to your data.

- [ ] Post your code and deployed links to the Tutorial 5 post on the Commons.

**BONUS:**

- [ ] Add another data element to your map, such as using color or radius to represent a value, [like this](https://observablehq.com/@d3/bubble-map) or [this](https://observablehq.com/@d3/non-contiguous-cartogram?collection=@d3/d3-geo).

- [ ] Implement transitions on your points, so the map begins blank, then they appear in a thoughtful way.

## Deploy + Submit

Once you've completed the assignment, use the Github workflow to deploy your work to **your fork** of the course repository. Post the following as a comment to the appropriate post on the [commons site](https://interactivedatavis2021.commons.gc.cuny.edu/):
1. a link to your commited code repository (your link will look something like: `https://github.com/[YOUR_USERNAME]/Interactive-Data-Vis-Sp2021/[TUTORIAL_PATH]/`)
2. a link to your deployed example (your link will look something like: `https://[YOUR_USERNAME].github.io/Interactive-Data-Vis-Sp2021/[TUTORIAL_PATH]/`)

To receive full credit, you must post your stable path before the 12pm the day of the next class.

## Required Reading:
- [ ] [Javascript.info: Objects](https://javascript.info/object)
- [ ] [Javascript.info: Promises.](https://javascript.info/promise-basics)
- [ ] Interpretations of Hurricane Forecast Uncertainty
- [ ] OPTIONAL: [Grid Garden.](https://cssgridgarden.com/)

## Other Resources:
- [How Selections Work](https://bost.ocks.org/mike/selection/).
- [Interneting Is Hard: Flexbox](https://www.internetingishard.com/html-and-css/flexbox/)
- [Closure](https://javascript.info/closure)
- [Flexbox Froggy](https://flexboxfroggy.com/)
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

