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
          console.log(index, item);
          answer.innerHTML += `<div class="entry"><h2>${index} - ${item.title} </h2>
          <p>${item.body}</p></div>`;
        });
      });
  });

  cw2.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((array) => {
        setTimeout(() => {
          console.log(array);
          answer.innerHTML = "<hr>";
          answer.innerHTML += `<div class="entry"><h2> ${array.title} </h2>
        <p>${array.body}</p></div>`;
        }, 5000);
      });
  });

  cw3.addEventListener("click", function () {
    answer.innerHTML = "Processing...";
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = `Dodałem posta o id: ${array.id}`;
      });
  });
})();
