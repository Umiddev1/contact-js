let elInpName = document.querySelector('.name');
let elInpRelation = document.querySelector('.relation');
let elInpTel = document.querySelector('.tel');
let elBtn = document.querySelector('.contact__btn');
let elList = document.querySelector('.contact__list');
let elInp = document.querySelectorAll('.contact__inp');
let elSearchInp = document.querySelector('.searchinp');
let elFamily = document.querySelector('.family');
let elFrein = document.querySelector('.freinds');
let elRelatives = document.querySelector('.relatives');
let elAll = document.querySelector('.all');
let arr = []
elBtn.addEventListener("click", output);
elSearchInp.addEventListener("keyup", search);
elFamily.addEventListener("click", familys)
elFrein.addEventListener("click",freinds)
elRelatives.addEventListener("click",relativ);
elAll.addEventListener("click",alls)
function output() {
  if(elInpName.value != "" && elInpRelation.value !=  "" && elInpTel.value != "" && elInpTel.value.match(/\+998[389][012345789][0-9]{7}$/g)) {
    let user = {};
    user['names'] = elInpName.value,
    user['relationship'] = elInpRelation.value,
    user['phone'] = elInpTel.value
    arr.push(user)
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
  let del = document.createElement('button');
  del.className = "delete__btn far fa-trash-alt"
  console.log(arr);
  item.appendChild(h2)
  item.appendChild(p)
  item.appendChild(link);
  item.appendChild(del);
  elList.appendChild(item);
  elInpName.value = "";
  elInpRelation.value = "";
  elInpTel.value = "";
  }
  else {
    for(let i = 0; i < elInp.length;i++) {
      elInp[i].value = "";
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

function alls() {
  elList.innerHTML = "";
  arr.forEach(items => {
    if(items.relationship.toLowerCase() == "family" || items.relationship.toLowerCase() == "freinds" || items.relationship.toLowerCase() == "relatives" || elInpTel.value.match(/\+998[389][012345789][0-9]{7}$/g)) {
      let item = document.createElement('li');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let link = document.createElement('a');
      link.href = `tel:${elInpTel}`
      item.className = "contact__item";
      h2.className =  "contact__name";
      p.className = "contact__category";
      link.className =  "contact__link";
      h2.innerHTML = items.names;
      p.innerHTML = items.relationship;
      link.innerHTML = items.phone
      let del = document.createElement('button');
      del.className = "delete__btn far fa-trash-alt"
      elList.appendChild(item);
      item.appendChild(h2)
      item.appendChild(p)
      item.appendChild(link);
      item.appendChild(del)
    }
  })
  elAll.classList.add('btn--active');
  elFamily.classList.remove('btn--active');
  elFrein.classList.remove('btn--active');
  elRelatives.classList.remove('btn--active');

  }

function familys() {
  elList.innerHTML = "";
  console.log(arr);
  arr.forEach(items => {
    if(items.relationship.toLowerCase() == "family" || elInpTel.value.match(/\+998[389][012345789][0-9]{7}$/g)){
      let item = document.createElement('li');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let link = document.createElement('a');
      link.href = `tel:${elInpTel}`;
      item.className = "contact__item";
      h2.className = "contact__name";
      p.className = "contact__category";
      link.className = "contact__link";
      h2.innerHTML = items.names;
      p.innerHTML = items.relationship;
      link.innerHTML = items.phone;
      let del = document.createElement('button');
      del.className = "delete__btn far fa-trash-alt"
      elList.appendChild(item);
      item.appendChild(h2);
      item.appendChild(p);
      item.appendChild(link);
      item.appendChild(del)
    }
  })
  elFamily.classList.add('btn--active');
  elAll.classList.remove('btn--active');
  elFrein.classList.remove('btn--active');
  elRelatives.classList.remove('btn--active');
  }

function freinds() {
  elList.innerHTML = "";
  arr.forEach(items => {
    if(items.relationship.toLowerCase() == "freinds" || elInpTel.value.match(/\+998[389][012345789][0-9]{7}$/g)){
      let item = document.createElement('li');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let link = document.createElement('a');
      link.href = `tel:${elInpTel}`;
      item.className = "contact__item";
      h2.className = "contact__name";
      p.className = "contact__category";
      link.className = "contact__link";
      h2.innerHTML = items.names;
      p.innerHTML = items.relationship;
      link.innerHTML = items.phone;
      let del = document.createElement('button');
      del.className = "delete__btn far fa-trash-alt"
      elList.appendChild(item);
      item.appendChild(h2);
      item.appendChild(p);
      item.appendChild(link);
      item.appendChild(del)
    }
  })
  elFrein.classList.add('btn--active');
  elAll.classList.remove('btn--active');
  elFamily.classList.remove('btn--active');
  elRelatives.classList.remove('btn--active');
  }
 

function relativ() {
  elList.innerHTML = "";
  arr.forEach(items => {
    if(items.relationship.toLowerCase() == "relatives" || elInpTel.value.match(/\+998[389][012345789][0-9]{7}$/g)){
      let item = document.createElement('li');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let link = document.createElement('a');
      link.href = `tel:${elInpTel}`;
      item.className = "contact__item";
      h2.className = "contact__name";
      p.className = "contact__category";
      link.className = "contact__link";
      h2.innerHTML = items.names;
      p.innerHTML = items.relationship;
      link.innerHTML = items.phone;
      let del = document.createElement('button');
      del.className = "delete__btn far fa-trash-alt"
      elList.appendChild(item);
      item.appendChild(h2);
      item.appendChild(p);
      item.appendChild(link);
      item.appendChild(del)
    }
  })
  elRelatives.classList.add('btn--active');
  elAll.classList.remove('btn--active');
  elFamily.classList.remove('btn--active');
  elFrein.classList.remove('btn--active');
} 


// let student = {
//   stname: "Umid",
//   age: 20,
// }

// let a = Object.values(student); 
// let b = Object.entries(student)
// console.log(a);
// console.log(b);

// let text = "Umid Nima gap";
// console.log(text.charCodeAt('85'));

// console.log(text.split("U"));

// let text = "+998935861055";
// console.log(text.startsWith('Um'));
// console.log(text.includes('d'));
// console.log(text.match(/\+998[389][012345789][0-9]{7}$/g));


// let year = 2021;
