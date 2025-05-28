const POINTS_AMOUNT = 4000;

function getRandomVertex() {
  const vertices = [
    document.querySelector('#a'),
    document.querySelector('#b'),
    document.querySelector('#c'),
  ];

  const randomIndex = Math.floor(Math.random() * vertices.length);
  return vertices[randomIndex];
}

function getElementCenter(el) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
}

function getMidpointBetweenElements(el1, el2) {
  const c1 = getElementCenter(el1);
  const c2 = getElementCenter(el2);

  return {
    x: (c1.x + c2.x) / 2,
    y: (c1.y + c2.y) / 2
  };
}

let currentPoint = document.querySelector('#start-point');
for (let i = 0; i < POINTS_AMOUNT; i++) {
  let randomVertex = getRandomVertex();

  let midpoint = getMidpointBetweenElements(currentPoint, randomVertex);

  const point = document.createElement("div");
  point.className = "point";
  point.style.left = `${midpoint.x}px`;
  point.style.top = `${midpoint.y}px`;
  document.body.appendChild(point);

  console.log(`Point ${i + 1}:`, midpoint);

  currentPoint = point;
}


