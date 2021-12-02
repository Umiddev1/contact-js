let elInpName = document.querySelector('.name');
let elInpRelation = document.querySelector('.relation');
let elInpTel = document.querySelector('.tel');
let elBtn = document.querySelector('.contact__btn');
let elList = document.querySelector('.contact__list');
let elInp = document.querySelectorAll('.contact__inp');
let elSearchInp = document.querySelector('.searchinp');
let arr = []
let user = {}

elBtn.addEventListener("click", output);
elSearchInp.addEventListener("keyup", search);

function output () {
  if(elInpName.value != "" && elInpRelation.value !=  "" && elInpTel.value != "") {
    user['names'] = elInpName.value,
    user['relationship'] = elInpRelation.value,
    user['phone'] = elInpTel.value
  
  let item = document.createElement('li');
  item.className = "contact__item";
  let h2 = document.createElement('h2');
  h2.className = "contact__name";
  h2.innerHTML = user.names;
  let p = document.createElement('p');
  p.className = "contact__category";
  p.innerHTML = user.relationship;
  let link = document.createElement('a');
  link.className = "contact__link";
  link.href = `tel:${elInpTel}`;
  link.innerHTML = user.phone;
  item.appendChild(h2)
  item.appendChild(p)
  item.appendChild(link);
  elList.appendChild(item)
  elInpName.value = "";
  elInpRelation.value = "";
  elInpTel.value = "";
  }
  else {
    for(let i = 0; i < elInp.length;i++) {
      elInp[i].value = ""
    }
  }
}
function search(e) {
  let text = e.target.value.toLowerCase();
  console.log(text);
  let items = elList.getElementsByTagName('li');
  Array.from(items).forEach(function (item) {
      let itemName = item.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1)  {
        item.style.display = "block"
      }
      else {
        item.style.display = "none";
      }
  })
}
