let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
	nav.classList.toggle("navclose");
})

var data = {
	labels: [1,2,3,4,5],
	datasets: [
	  {
		label: 'Income',
		borderColor: 'blue',
		backgroundColor: 'rgba(0, 0, 255, 0.2)', // Transparent blue fill color
		data: [5, 10, 15, 20, 25],
		fill: true,
	  },
	  {
		label: 'Expense',
		borderColor: 'rgb(204, 204, 0)', // Mustard color
		backgroundColor: 'rgba(204, 204, 0, 0.2)', // Transparent mustard fill color
		data: [15, 5, 20, 15, 30],
		fill: true,
	  },
	]
  };


document.addEventListener("DOMContentLoaded", function () {
	const config = {
		type: 'line',
		data: data,
		options: {
		  responsive: true,
		  plugins: {
			legend: {
			  position: 'top',
			},
			title: {
			  display: true,
			  text: 'Chart.js Line Chart'
			}
		  }
		},
	  };
	// Get the canvas element and create the line chart
	var ctx = document.getElementById('myLineChart').getContext('2d');
	var myLineChart = new Chart(ctx, config);
  });


  // Get the modal
var modal = document.getElementById("expense-form");

// Get the button that opens the modal
var btn = document.getElementById("addexpense");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const split=document.getElementById("Splitwise");
const dashboard=document.getElementById("Dashboard");
const splitbtn = document.getElementById("splitbtn");
const dashbtn=document.getElementById("dashbtn");

splitbtn.onclick=function(){
	split.style.display="block";
	dashboard.style.display="none";
}

dashbtn.onclick=function(){
	dashboard.style.display="block";
	split.style.display="none";
}
