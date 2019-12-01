var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Seat 1','Seat 2','Seat 3','Seat 4'];

//Data
var d = [
		  [
			{axis:"advocacy and oral presention",value:0.39},
			{axis:"case and transaction management",value:0.26},
			{axis:"client care and practice support",value:0.72},
			{axis:"communication skills",value:0.44},
			{axis:"dispute resolution",value:0.78},
			{axis:"drafting",value:0.54},
			{axis:"interviewing and advising",value:0.01},
			{axis:"legal research",value:0.25},
			{axis:"negotiation",value:0.17}
		  ],[
			{axis:"advocacy and oral presention",value:0.49},
			{axis:"case and transaction management",value:0.23},
			{axis:"client care and practice support",value:0.43},
			{axis:"communication skills",value:0.67},
			{axis:"dispute resolution",value:0.12},
			{axis:"drafting",value:0.67},
			{axis:"interviewing and advising",value:0.67},
			{axis:"legal research",value:0.50},
			{axis:"negotiation",value:0.70}
		  ],[
			{axis:"advocacy and oral presention",value:0.59},
			{axis:"case and transaction management",value:0.56},
			{axis:"client care and practice support",value:0.42},
			{axis:"communication skills",value:0.34},
			{axis:"dispute resolution",value:0.48},
			{axis:"drafting",value:0.14},
			{axis:"interviewing and advising",value:0.11},
			{axis:"legal research",value:0.05},
			{axis:"negotiation",value:0.07}
		  ],[
			{axis:"advocacy and oral presention",value:0.59},
			{axis:"case and transaction management",value:0.56},
			{axis:"client care and practice support",value:0.42},
			{axis:"communication skills",value:0.34},
			{axis:"dispute resolution",value:0.48},
			{axis:"drafting",value:0.14},
			{axis:"interviewing and advising",value:0.11},
			{axis:"legal research",value:0.05},
			{axis:"negotiation",value:0.07}
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("What % of owners use a specific service in a week");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	