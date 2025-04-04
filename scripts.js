
function uncheckRandomly(entry) {
  let sleep = document.querySelector('.sleep');
  let relation = document.querySelector('.relation');
  let grades = document.querySelector('.grades');

  if (entry == '.sleep') {
    drop('.relation', '.grades');
  } else if (entry == '.relation') {
    drop('.sleep', '.grades');
  } else {
    drop('.sleep', '.relation');
  }
}

function drop(entry1, entry2) {
  // Randomly select one of the two entries
  const randomEntry = Math.random() < 0.5 ? entry1 : entry2;
  // Find the checkbox element with the selected class
  const checkbox = document.querySelector(randomEntry);
  // If the checkbox exists, uncheck it
  if (checkbox) {
    checkbox.checked = false;
  }
}