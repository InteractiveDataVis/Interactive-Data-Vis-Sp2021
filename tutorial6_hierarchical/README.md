# Tutorial 6

The goals for this tutorial are:

- To introduce [hierarchical](https://github.com/d3/d3-hierarchy) and nested data.
- To start exploring how d3-layout algorithms can help create complex views.
- To show how seemingly different views are in their nature structured very similarly (circle pack, icicle, treemap, dendrograms)

## Setup + Serve:

You should already have a local copy of your repository from the [tutorial 1](../tutorial1_getting_started/README.md). Start by getting a [basic server](../tutorial1_getting_started/3_BASIC_SERVER.md) up and running. This should include all the changes you've made thus far.

Once your local serve is up and reacting to code changes, you're ready to begin working on your tutorial assignment.
As you're building, don't forget you can always reference the [class code branch](https://github.com/InteractiveDataVis/Interactive-Data-Vis-Sp2021/tree/class/) or the [demo code branch](https://github.com/InteractiveDataVis/Interactive-Data-Vis-Sp2021/tree/demo/) for additional context.

## Week 6 Assignment:

- [ ] Implement your own version of the treemap we made in class using the [`flare.json`](../data/flare.json) dataset provided (or if you are up for the challenge create your own dataset — see tip below if you are using your own dataset).

- [ ] Turn this treemap into a [circle pack](https://github.com/d3/d3-hierarchy#pack) layout instead of the treemap (this will take using a different layout function, and mapping different graphical elements to data).

- [ ] Add mouseover behavior to each point, so its data updates state, and is displayed in our tooltip display. Move the tooltip to it's new position.

- [ ] Make intentional design decisions -- colors, sizes, axes, transitions, etc. should illustrate something interesting about or relevant to your data.

- [ ] Post your code and deployed links to the Tutorial 5 post on the Commons.

**BONUS:**

- [ ] Do all of this for your own data. This may require data transformations. Take note of how the [`flare.json`](../data/flare.json) data is structured.

- [ ] TIP: If you want to use your own dataset that isn't pre-formatted into a nested hierarchy, take a look at [this observable notebook](https://observablehq.com/@mbostock/2019-h-1b-employers) to see another way of reformatting your data into the proper format that D3 expects. Specifically, take a look at how the notebook defines the `root` node.

## Deploy + Submit

Once you've completed the assignment, use the Github workflow to deploy your work to **your fork** of the course repository. Post the following as a comment to the appropriate post on the [commons site](https://interactivedatavis2021.commons.gc.cuny.edu/):
1. a link to your commited code repository (your link will look something like: `https://github.com/[YOUR_USERNAME]/Interactive-Data-Vis-Sp2021/[TUTORIAL_PATH]/`)
2. a link to your deployed example (your link will look something like: `https://[YOUR_USERNAME].github.io/Interactive-Data-Vis-Sp2021/[TUTORIAL_PATH]/`)

To receive full credit, you must post your stable path before the 12pm the day of the next class.

## Other Resources:
- [d3 hierarchy](https://github.com/d3/d3-hierarchy)
- [d3 array](https://github.com/d3/d3-array#rollup)
- [Javascript.info: Objects](https://javascript.info/object)
- [Javascript.info: Promises.](https://javascript.info/promise-basics)
- [Grid Garden.](https://cssgridgarden.com/)
- [How Selections Work](https://bost.ocks.org/mike/selection/).
- [Interneting Is Hard: Flexbox](https://www.internetingishard.com/html-and-css/flexbox/)
- [Closure](https://javascript.info/closure)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Interneting Is Hard: CSS Selectors](https://www.internetingishard.com/html-and-css/css-selectors/)
- [Thinking With Joins](https://bost.ocks.org/mike/join/)
- [Arrow Functions](https://www.javascripttutorial.net/es6/javascript-arrow-function/)
- [Javascript.info: Data Types](https://javascript.info/types)
