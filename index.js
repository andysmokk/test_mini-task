console.log("HOLA MUNDO");

const form = document.querySelector(".form");
const title = document.querySelector(".title");

form.addEventListener("submit", getResult);

function getResult(event) {
  event.preventDefault();
  const inputText = event.currentTarget.elements[0].value.replace(/\s+/g, "");

  const arr = inputText.split("");

  const getNewArr = arr.reduce((acc, element, index) => {
    if (index === 0) {
      return [element];
    }

    const newAcc = [];
    acc.forEach((elementOfAcc) => {
      newAcc.push(elementOfAcc + element);
      newAcc.push(elementOfAcc + "." + element);
    });

    return newAcc;
  }, []);

  console.log("🚀 ~ getNewArr ~ getNewArr:", getNewArr);

  title.innerHTML = `<div class="box"><span class="span">${JSON.stringify(
    getNewArr
  )}</span></div>`;
}
