fetch("data.json")
  .then((Response) => {
    if (!Response.ok) {
      throw new Error("Failed to Fetch data");
    }
    return Response.json();
  })
  .then((data) => {
    data.forEach((item, index) => {
      const boxes = document.getElementById(`box-${index}`);

      if (boxes) {
        boxes.querySelector(".icon").src = item.icon;
        boxes.querySelector(".icon").alt = item.category;
        boxes.querySelector(".category").textContent = item.category;
        boxes.querySelector(
          ".score"
        ).innerHTML = `${item.score} <span>/ 100</span>`;
      }
    });
  })
  .catch((error) => console.log("Error", error));
