(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        answer.innerHTML = "";
        array.forEach(function (item, index) {
          answer.innerHTML += `<div><h2>${index} - ${item.title} </h2>
          <p>${item.body}</p></div>`;
        });
      });

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((array) => {
        setTimeout(() => {
          answer.innerHTML = "<hr>";
          answer.innerHTML += `<div><h2> ${array.title} </h2>
          <p>${array.body}</p></div>`;
        }, 5000);
      });
  });

  cw2.addEventListener("click", function () {
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
