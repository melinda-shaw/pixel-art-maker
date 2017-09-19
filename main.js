// console.log('sanity check')

// document.addEventListener('DOM'
//   ContentLoader,
//   function() {

//  COLOR PICKER
var colorPicked = '';
var colors = document.getElementsByClassName('colors')
console.log(colors)
for (var i = 0; i < colors.length; i++) {
  let color = colors[i]
  // adding event listener, it's taking 2 arguments the "event=click" and function(event)
  color.addEventListener('click', function() {
    //  here's what we're doing to the clicked event, making it red.
    // event.target = colorPicked
    colorPicked = color.classList[0]

    //  CURRENT COLOR
    var current = document.getElementsByClassName('current')[0]
    // for (var i = 0; i < current.length; i++) {

    current.style.backgroundColor = colorPicked

    // }
    console.log(current.backgroundColor, colorPicked);
  })
}




//  CHANGE CANAS BOXES
var boxes = document.getElementsByClassName('box')

for (var i = 0; i < boxes.length; i++) {
  let box = boxes[i]
  // adding event listener, it's taking 2 arguments the "event=click" and function(event)
  box.addEventListener('mouseover', function(event) {
    //  here's what we're doing to the clicked event, making it red.
    event.target.style.backgroundColor = colorPicked
  })
}



// })
