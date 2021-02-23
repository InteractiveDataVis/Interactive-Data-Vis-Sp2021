/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.7,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 60, left: 60, right: 40 },
  radius = 5;

let svg;
let xScale;
let yScale;

/* APPLICATION STATE */
let state = {
  data: [],
  selectedParty: "All" // + YOUR INITIAL FILTER SELECTION
};

/* LOAD DATA */
d3.json("../data/environmentRatings.json", d3.autoType).then(raw_data => {
  // + SET YOUR DATA PATH
  console.log("data", raw_data);
  // save our data to application state
  state.data = raw_data;
  init();
});

/* INITIALIZING FUNCTION */
// this will be run *one time* when the data finishes loading in
function init() {
  console.log('state', state)
  // SCALES
    xScale = d3.scaleLinear()
      .domain(d3.extent(state.data, d=> d.ideologyScore2020))
      .range([margin.left, width - margin.right])

    yScale = d3.scaleLinear()
      .domain(d3.extent(state.data, d=> d.envScore2020)) // [min, max]
      .range([height-margin.bottom, margin.top])

  // AXES
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

  // Create svg
  svg = d3.select("#d3-container")
    .append("svg")
    .attr('width', width)
    .attr('height', height)

  svg.append("g")
    .attr("class", "xAxis")
    .attr("transform", `translate(${0}, ${height-margin.bottom})`)
    .call(xAxis)
    .append("text")
    .text("Ideology Score 2020")
    .attr("transform", `translate(${width/2}, ${40})`)

  svg.append("g")
    .attr("class", "yAxis")
    .attr("transform", `translate(${margin.left}, ${0})`)
    .call(yAxis)

  // SETUP UI ELEMENTS
  const dropdown = d3.select("#dropdown")

  dropdown.selectAll("options")
    .data(["All","R", "D"])
    .join("option")
    .attr("value", d => d)
    .text(d=> d)

  dropdown.on("change", event=> {
    console.log("dropdown changed!", event.target.value)
    state.selectedParty = event.target.value
    console.log("new state:", state)
    draw();
  })

    draw();
}

/* DRAW FUNCTION */
// we call this everytime there is an update to the data/state
function draw() {
  console.log("im in the draw function!!")

  const filteredData = state.data
  .filter(d=>{
    if (state.selectedParty === "All") return true
    else return d.Party === state.selectedParty
    })

  svg.selectAll("circle")
    .data(filteredData, d=>d.BioID ) // [{}, {}]
    .join(
      enter=> enter.append("circle")
        .attr("r", radius)
        // set attribute before
        .attr("cx", margin.left)
        .attr("cy", d=> yScale(d.envScore2020))
        .attr("fill", d=> {
          if (d.Party==="R") return "red"
          else return "blue"
        })
        // start a transition
        .call(enter=> enter.transition()
          .duration(1000)
          // set the end attribute
          .attr("cx", d=> xScale(d.ideologyScore2020))
        )
      ,
      update=> update,
      exit => exit
      .call(exit
        .transition()
        .duration(1000)
        .attr("cy", height)
        .remove()
        )
      )

}
