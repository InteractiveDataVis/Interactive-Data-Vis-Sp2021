/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.7,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 60, left: 60, right: 40 },
  radius = 5;

// these variables allow us to access anything we manipulate in init() but need access to in draw().
// All these variables are empty before we assign something to them.
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
  // + DEFINE SCALES

  // + DEFINE AXES

  // + UI ELEMENT SETUP
  // + add dropdown options
  // + add event listener for 'change'

  // + CREATE SVG ELEMENT

  // + CREATE AXES

  // draw(); // calls the draw function
}

/* DRAW FUNCTION */
// we call this everytime there is an update to the data/state
function draw() {

  // + FILTER DATA BASED ON STATE
  const filteredData = state.data // <--- update to filter

  // + DRAW CIRCLES
  const dot = svg
    .selectAll("circle")
    .data(filteredData, d => d.BioID) // second argument is the unique key for that row
    .join(
      // + HANDLE ENTER SELECTION
      enter => enter.append("circle"),

      // + HANDLE UPDATE SELECTION
      update => update,

      // + HANDLE EXIT SELECTION
      exit => exit.remove()

    );
}
