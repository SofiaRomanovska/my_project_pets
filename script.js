function showDeveloperInfo(lastName, firstName, position = "Веб-розробник") {
  alert(`Розробник сторінки:\nПрізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
}
showDeveloperInfo("Романовська", "Софія");

function userDialog() {
  let name = prompt("Як звати вашого улюбленця?:");
  let animalType = prompt("Яка це тваринка?"); // Додаємо питання про тип тварини
  let breed = prompt("Чи має ваша тварина породу?"); // Додаємо питання про породу
  let age = prompt("Скільки йому/їй років?");
  let confirmAnswer = confirm("Продовжити діалог?");

  if (!confirmAnswer) {
    alert("Діалог завершено.");
    return;
  }

  for (let i = 0; i < 1; i++) {
  alert(`Привіт! Ось інформація про вашого улюбленця:
  - Ім'я: ${name}
  - Тип тварини: ${animalType}
  - Порода: ${breed || "Невідомо"}
  - Вік: ${age}`);
}


function compareStrings(str1, str2) {
  if (str1 > str2) {
    alert(`Більший рядок: ${str1}`);
  } else if (str2 > str1) {
    alert(`Більший рядок: ${str2}`);
  } else {
    alert("Рядки однакові");
  }
}
// Приклад виклику:
compareStrings("Собака", "Кіт");}


// document.write — вставка тексту
document.write("<p>Ось і все!</p>");

// createElement + append
const heading = document.createElement("h3");
heading.textContent = "Дякуємо, що завітали!";
document.body.append(heading);

// createTextNode + prepend
const smileText = document.createTextNode("Усміхнись, тобі пасує :)");
document.body.prepend(smileText);

// after — після таблиці
const table = document.querySelector("table");
const newParagraph = document.createElement("p");
newParagraph.textContent = "Далі — цікавіше!";
table.after(newParagraph);

// replaceWith — замінити заголовок
const mainTitle = document.getElementById("main-title");
const newTitle = document.createElement("h2");
newTitle.textContent = "Ласкаво просимо!";
mainTitle.replaceWith(newTitle);

// Видаляємо перший елемент списку

const firstItem = document.querySelector("ul li");
if (firstItem) firstItem.remove();


// DOM-властивості

const link = document.getElementById("id");
console.log("innerHTML:", link.innerHTML);
console.log("outerHTML:", link.outerHTML);
console.log("textContent:", link.textContent);
console.log("nodeValue:", link.firstChild?.nodeValue);


// querySelectorAll

const allListItems = document.querySelectorAll("ul li");
allListItems.forEach((li, i) => {
  li.style.color = i % 2 === 0 ? "green" : "blue";
});



