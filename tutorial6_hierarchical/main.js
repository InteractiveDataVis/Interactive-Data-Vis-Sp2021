/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth * 0.9,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 50, left: 60, right: 40 };

let svg;
let tooltip;

/**
 * APPLICATION STATE
 * */
let state = {
  data: null,
  hover: null
};

/**
 * LOAD DATA
 * */
d3.json("../../data/flare.json", d3.autotype).then(data => {
  state.data = data;
  init();
});

/**
 * INITIALIZING FUNCTION
 * this will be run *one time* when the data finishes loading in
 * */
function init() {
  // with scaleOrdinal, you can specify the color range, and leave the domain blank
  // as you use the colorScale, it will assign each unique key to a color
  const colorScale = d3.scaleOrdinal(d3.schemeSet3);

  const container = d3.select("#d3-container").style("position", "relative");

  svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // initialize tooltip here — fill it with text in draw whenever state is updated
  tooltip = container.append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("top", 0)
    .style("left", 0)

  const root = d3.hierarchy(state.data)
    .sum(d => d.value) // sets the 'value' of each level
    .sort((a, b) => b.value - a.value);

  const treeLayout = d3.treemap()
    .size([
      width - margin.left - margin.right,
      height - margin.top - margin.bottom])
    .paddingInner(1)
    .round(true)

  const tree = treeLayout(root)
  const leaves = tree.leaves()

  // draw tree leaves groups - move into place
  const leafGroups = svg
    .selectAll(".leaf")
    .data(leaves)
    .join("g")
    .attr("class", "leaf")
    .attr("transform", d => `translate(${d.x0}, ${d.y0})`)

  // draw tree leaves rect
  leafGroups.append("rect")
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .attr("fill", d => {
      // grab level 1 category and use that for color
      const level1Ancestor = d.ancestors().find(d => d.depth === 1);
      return colorScale(level1Ancestor.data.name);
    })

  // add mouseover event listener on our group so that it updates state each time one is over
  leafGroups
    .on("mouseenter", (event, d) => { // second argument returns the data associated with that leaf
      state.hover = {
        position: [d.x0, d.y0],
        name: d.data.name,
        value: d.data.value,
        // example for something you can do with a leaf node:
        anscestorsPath: d.ancestors()
          .reverse()
          .map(d => d.data.name)
          .join("/")
      }
      // fill in the tooltip once state is updated
      draw()
    })
    .on("mouseleave", () => {
      //reset hover when mouse out of the leaf
      state.hover = null
      draw();
    })

  draw(); // calls the draw function
}

/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
function draw() {
  // check if there is something saved to `state.hover`
  if (state.hover) {
    tooltip
      .html(
        `
    <div>Name: ${state.hover.name}</div>
    <div>Value: ${state.hover.value}</div>
    <div>Hierarchy Path: ${state.hover.anscestorsPath}</div>
    `
      ).transition()
      .duration(500)
      .style("transform", `translate(${state.hover.position[0]}px, ${state.hover.position[1]}px )`)
  }

  // hide/show tooltip depending on whether state.hover exists
  // hint: look at the css to see what this is doing
  // ref: https://github.com/d3/d3-selection#selection_classed
  tooltip.classed("visible", state.hover)
}
