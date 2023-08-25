// buttons pr click krne seh mere color change hoga.
const buttons = document.querySelectorAll('.button');
// ab kyuki mere background kaa color change hoga
// yaa ni ki mere body ka color change hoga toh mere usko utha liye
const body = document.querySelector('body');

// ab meh buttons meh loop in karunga

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
  });
});
