
// data load
// reference for d3.autotype: https://github.com/d3/d3-dsv#autoType
d3.csv('../data/squirrelActivities.csv', d3.autoType)
  .then(data => {
    // confirm that the data loaded in by looking in the console
    console.log("data", data)

    /** CONSTANTS */
    // constants help us reference the same values throughout our code
    const width = window.innerWidth * .8;
    const height = window.innerHeight / 3;
    const margins = { top: 10, bottom: 25, left: 10, right: 10 };

    /** SCALES */
    // reference for d3.scales: https://github.com/d3/d3-scale
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.activity)) // get all the `activity` values
      .range([margins.left, width - margins.right])
      .paddingInner(.2)

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count)]) // grab the max value
      .range([height - margins.bottom, margins.top])


    /** DRAWING ELEMENTS */
    const svg = d3.select('#barchart-container')
      .append("svg")
      .attr("width", width)
      .attr("height", height)

    // draw rectangles
    svg.selectAll("rect")
      .data(data)
      .join("rect")
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - margins.bottom - yScale(d.count))
      .attr("fill", "orange") // try changing this to be a dynamic colorscale
      .attr("x", (d, i) => xScale(d.activity))
      .attr("y", d => yScale(d.count))

    // draw bottom 'activity' text
    svg.selectAll("text.activity")
      .data(data)
      .join("text")
      .attr("class", 'activity')
      .attr("x", d => xScale(d.activity) + (xScale.bandwidth() / 2))
      .attr("y", height - margins.bottom)
      .attr("dy", "1em") // adjust the text a bit lower down
      .attr("text-anchor", 'middle') // set the x/y to refer to the middle of the word
      .text(d => d.activity) // set the text

    // draw top 'count' text
    svg.selectAll("text.count")
      .data(data)
      .join("text")
      .attr("class", 'count')
      .attr("x", d => xScale(d.activity) + (xScale.bandwidth() / 2))
      .attr("y", d => yScale(d.count))
      .attr("dy", "1em") // adjust the text a bit lower down
      .attr("text-anchor", 'middle') // set the x/y to refer to the middle of the word
      .text(d => d3.format(",")(d.count)) // set the text, add a formatter to properly format numbers: https://github.com/d3/d3-format
  })
