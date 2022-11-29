// the date to count from
const startFrom = new Date('Nov 11, 2022 23:11:11 ');
// the html element to display the result in
const element = document.getElementById('countup');

// repeat every second:
setInterval(displayDifference, 0)

function displayDifference() {
	// find difference between dates, expressed in milliseconds
	const difference = Date.now() - startFrom;
  // calculate the time units
  const { months, days, hours, minutes, seconds } = formatMilliseconds(difference);
  // show the formatted time units on the page
  element.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function formatMilliseconds(duration) {
  // How many full months fit into the difference
  const months = Math.floor(duration / 30 / 24 / 60 / 60 / 1000);
  // remove the full months from the difference
  duration -= months * 30 * 24 * 60 * 60 * 1000;
  // how many full days fit into the remaining difference
  const days = Math.floor(duration / 24 / 60 / 60 / 1000);
  // remove days from remaining difference
  duration -= days * 24 * 60 * 60 * 1000;
  // and so on...
  const hours = Math.floor(duration / 60 / 60 / 1000);
  duration -= hours * 60 * 60 * 1000;
  const minutes = Math.floor(duration / 60 / 1000);
  duration -= minutes * 60 * 1000;
  const seconds = Math.floor(duration / 1000);
  duration -= seconds * 1000;
  return {
  	months, days, hours, minutes, seconds,
    milliseconds: duration
  };
}