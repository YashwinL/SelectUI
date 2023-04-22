const cardsContainer = document.getElementById("cards-container");
const employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

employees.forEach((employee) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardContent = document.createTextNode(
    `${employee.id}. Name: ${employee.name}   Profession: ${employee.profession}   Age: ${employee.age}`
  );

  card.appendChild(cardContent);

  cardsContainer.appendChild(card);
});

const addbtn = document.getElementById("AddBtn");
addbtn.addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput");
  const professionInput = document.getElementById("professionInput");
  const ageInput = document.getElementById("ageInput");

  const name = nameInput.value;
  const professtion = professionInput.value.toLowerCase();
  const age = ageInput.value;

  const newEmployee = {
    id: employees.length + 1,
    name: name,
    profession: professtion,
    age: age,
  };

  employees.push(newEmployee);

  nameInput.value = "";
  professionInput.value = "";
  ageInput.value = "";

  const card = document.createElement("div");
  card.classList.add("card");

  const cardContent = document.createTextNode(
    `${newEmployee.id}. Name: ${newEmployee.name} Profession: ${newEmployee.profession} Age: ${newEmployee.age}`
  );

  card.appendChild(cardContent);

  cardsContainer.appendChild(card);
});

var professionDropdown = document.getElementById("profession");
var ProfessionSelected = professionDropdown.value;

const FilterBtn = document.getElementById("filterBtn");
FilterBtn.addEventListener("click", () => {
  if (professionDropdown.value === "") {
    alert("Please select a profession before clicking the filter button.");
    return;
  }
  cardsContainer.innerHTML = "";
  employees.forEach((employee) => {
    const val = employee.profession;
    const temp = professionDropdown.value;
    if (val == temp) {
      const card = document.createElement("div");
      card.classList.add("card");
      const cardContent = document.createTextNode(
        `${employee.id}. Name: ${employee.name} Profession: ${employee.profession} Age: ${employee.age}`
      );
      card.appendChild(cardContent);
      cardsContainer.appendChild(card);
    }
  });
});
