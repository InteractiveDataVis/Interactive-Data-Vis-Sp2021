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
  // + INITIALIZE STATE
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
  const colorScale = d3.scaleOrdinal(d3.schemeSet3)

  const container = d3.select("#d3-container").style("position", "relative");

  svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  tooltip = container
    .append("div")
    .style("position", "absolute")
    .style("top", 0)
    .style("left", 0)
    .style("background-color", "white")

  const root = d3.hierarchy(state.data)
    .sum(d => d.value)

  const treeLayout = d3.treemap()
    .size([width, height])
    .padding(2)

  treeLayout(root)

  const leaves = root.leaves()

  const leafGroup = svg.selectAll("g")
    .data(leaves)
    .join("g")
    .attr("transform", d => `translate(${d.x0}, ${d.y0})`)

  // append rect
  leafGroup.append("rect")
    .attr("fill", d => {
      const level1Anscestor = d.ancestors().find(a => a.depth === 1)
      return colorScale(level1Anscestor.data.name)
    })
    .attr("stroke", "red")
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)

  //append text
  leafGroup.append("text")
    .attr("dy", "1em")
    .text(d => d.data.name)


  leafGroup.on("mouseenter", (event, d) => {
    state.hoverLeaf = d.data.name
    state.hoverPositionX = d.x0
    state.hoverPositionY = d.y0
    draw()
  })

  draw(); // calls the draw function
}

/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
function draw() {

  tooltip
    .style("transform", `translate(${state.hoverPositionX}px, ${state.hoverPositionY}px)`)
    .html(`
  <div>${state.hoverLeaf}</div>
  `)
}
