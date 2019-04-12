
const createLoader = function() {
  // Doc: https://loading.io/css/
  const loader = document.createElement("div");
  for (let i = 0; i < 12; i++) {
      loader.appendChild(document.createElement("div"));
  }
  loader.setAttribute("class", "lds-spinner");
  return loader;
}

const createSelect = function(id = "") {
  const select = document.createElement("select");
  select.setAttribute("class", "form-control");
  id && select.setAttribute("id", id);
  return select;
}

const createOption = function(value, text) {
  const option = document.createElement("option");
  option.setAttribute("value", value);
  option.innerHTML = text;
  return option;
}

const createAlert = function(type, text, err) {
  const alertContainer = document.createElement("div");
  alertContainer.setAttribute("class", "alert alert-" + type);
  alertContainer.setAttribute("role", "alert");
  alertContainer.innerHTML = text;
  return alertContainer;
}

const createCountryCard = function(imageSource, description) {
  const card = document.createElement("div");
  card.setAttribute("class", "card shadow rounded");
  card.setAttribute("id", "countryCard");
  card.setAttribute("style", "width: 18rem;");
  const image = document.createElement("img");
  image.setAttribute("class", "card-img-top");
  image.setAttribute("src", imageSource);
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  const bodyText = document.createElement("p");
  bodyText.setAttribute("class", "card-text text-secondary");
  bodyText.innerHTML = description;
  cardBody.appendChild(bodyText);
  card.appendChild(image);
  card.appendChild(cardBody);
  return card;
}
