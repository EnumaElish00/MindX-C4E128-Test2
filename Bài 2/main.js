const arrayColor = [
    "#ff9a9e",
    "#a18cd1",
    "#fad0c4",
    "#ffecd2",
    "#fecfef",
    "#fda085",
    "#a6c1ee",
    "#fdcbf1",
    "#a1c4fd",
    "#96e6a1",
    "#8fd3f4",
    "#e2ebf0",
    "#f68084",
    "#d57eeb",
    "#fed6e3",
    "#e2d1c3",
    "#d9ded8",
    "#009efd",
  ];
  
  const body = document.querySelector("body");
  console.log(body);
  let btn = document.querySelector(".change-color");
  console.log(btn);
  const inforColor = document.querySelector(".infor-color");
  
  btn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * arrayColor.length);
    body.style.backgroundColor = arrayColor[randomNumber];
    console.log(randomNumber);
    inforColor.innerText = "The color code is : " + arrayColor[randomNumber];
  });
  
  const chooseColor = document.querySelector(".color-pick");
  
  for (let i = 0; i < arrayColor.length; i++) {
    let colorData = document.createElement("div");
    let colorName = document.createElement("div");
    let copyBtn = document.createElement("button");
    let chooseBtn = document.createElement("button");
    //////////////
    colorData.className = "color-data";
    copyBtn.className = "copy-btn";
    chooseBtn.className = "choose-color-change";
    //////////////////////
    colorName.innerHTML = arrayColor[i];
    copyBtn.innerHTML = "Copy";
    chooseBtn.innerHTML = "Choose";
    ////////////////////
    colorData.appendChild(colorName);
    colorData.appendChild(copyBtn);
    colorData.appendChild(chooseBtn);
    ////////
    chooseColor.appendChild(colorData);
  
    //////////////////////
    colorData.style.display = "flex";
    colorData.style.justifyContent = "space-around";
  }
  chooseColor.style.display = "none";
  
  const chooseColorBtn = document.querySelector(".choose-color");
  chooseColorBtn.addEventListener("click", () => {
    chooseColor.style.display = "flex";
    chooseColor.style.flexDirection = "column";
  });
  
  const arrChooseBtn = document.querySelectorAll(".choose-color-change");
  console.log(arrChooseBtn);
  for (let i = 0; i < arrChooseBtn.length; i++) {
    arrChooseBtn[i].addEventListener("click", () => {
      console.log(arrChooseBtn[i].parentElement.childNodes[0].innerHTML);
      let color = arrChooseBtn[i].parentElement.childNodes[0].innerHTML;
      body.style.backgroundColor = color;
    });
  }
  
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  
  const arrCopyBtn = document.querySelectorAll(".copy-btn");
  console.log(arrCopyBtn);
  for (let i = 0; i < arrCopyBtn.length; i++) {
    arrCopyBtn[i].addEventListener(
      "click",
      copyToClipboard(arrChooseBtn[i].parentElement.childNodes[0].innerHTML)
    );
  }