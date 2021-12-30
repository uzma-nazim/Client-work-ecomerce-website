



////toggleON function//



function tooggleMenu() {

  var get = document.getElementById("mb-header");
  get.className += " showactive";


}

////toggleON function//

function toogleOff() {

  var get = document.getElementById("mb-header");
  get.className  = "main";


  


}

///modal Functionn///


function modalProduct(name1, prizes, src1, data) {

  var modalImg = document.getElementById("modal-img")
  var modalName = document.getElementById("modal-p-name");
  var modalPrize1 = document.getElementById("modalPrize");
  var productdata = document.getElementById("productdata");
  modalName.innerHTML = name1;
  modalPrize1.innerHTML = prizes;
  modalImg.src = src1
  productdata.innerText = data




}


///Incraement Function///

function incre() {


  var num = document.getElementById("num").innerHTML;
  num++
  document.getElementById("num").innerHTML = num


}

///DECREMENT///

function dccre() {

  var num = document.getElementById("num").innerHTML;

  if (num <= 1) {
    num = 1
  }
  else {

    var num = document.getElementById("num").innerHTML;
    num--
    document.getElementById("num").innerHTML = num


  }
}





////Reiweiw Function//


function userrew() {

  //get text area
  var zero = document.getElementById("zero").innerHTML;
  var get = document.getElementById("reweiw");
  var rewdata = document.getElementById("rewdata");
  var inputName = document.getElementById("exampleInputPassword1");
  var emailinput = document.getElementById("exampleInputEmail1");
  var norew = document.getElementById("norew");

  if (inputName.value === "" || emailinput.value === "" || rewdata.value === "") {

    alert("Please fill the input")
  }
  else {

    var revSection = document.createElement("div")
    rewdata.appendChild(revSection)

    revSection.setAttribute("class", "reveiw");

    var user = document.createElement("div");
    user.setAttribute("class", "fas fa-user");

    var userTex = document.createElement("div")
    var h5 = document.createElement("h5");
    var h5Tex = document.createTextNode(inputName.value)
    h5.appendChild(h5Tex)

    var userinnerTex = document.createElement("p")
    var ptex = document.createTextNode(get.value)
    userinnerTex.appendChild(ptex);
    var anchor = document.createElement("a")
    var acnhorTex = document.createTextNode("Remove")
    anchor.setAttribute("class", "remove")
    anchor.setAttribute("onclick", "Deleteall(this)")
    anchor.appendChild(acnhorTex);

    var starp = document.createElement("p")


    starp.setAttribute("id", "rating")


    userTex.appendChild(h5)
    userTex.appendChild(userinnerTex)
    userTex.appendChild(starp)
    userTex.appendChild(anchor)

    revSection.appendChild(user)
    revSection.appendChild(userTex)



    get.value = "";
    inputName.value = "";
    emailinput.value = "";
    norew.innerHTML = ""
    zero++
    document.getElementById("zero").innerHTML = zero


  }

}

///onmouse cube//


function chanegeimage(src) {

  var get = document.getElementById("img1");
  get.src = src

}

function Deleteall(e) {



  e.parentNode.parentNode.remove()
  var zero = document.getElementById("zero").innerHTML;
  zero--
  document.getElementById("zero").innerHTML = zero

}



///Add to cart

function addtoCard() {


  

  var get = document.getElementById("cards").innerHTML;
  get++
  document.getElementById("cards").innerHTML = get

  ///Geting modal product details///

  var modalPrize = document.getElementById("modalPrize").innerHTML;
  var modalname = document.getElementById("modal-p-name").innerHTML;
  var modalimg = document.getElementById("modal-img").src;
  var num = document.getElementById("num").innerHTML

  /// Creating Product Details///


  var tr = document.createElement("tr")
  var td1 = document.createElement("td");


  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");


  var sl = modalPrize.slice(7)
  var total = sl * num

  // one td complete

  var td1img = document.createElement("img")
  td1img.setAttribute("src", modalimg)
  td1.appendChild(td1img)
  tr.appendChild(td1)

  // two td

  var sl2 = modalname.slice(5)
  var td2Tex = document.createTextNode(sl2)
  td2.appendChild(td2Tex)
  tr.appendChild(td2)

  //td3//
  var td3Tex = document.createTextNode(sl)
  td3.appendChild(td3Tex)

  tr.appendChild(td3)

  /// td4//

  var td4Tex = document.createTextNode(num)
  td4.appendChild(td4Tex)
  tr.appendChild(td4)



  var td5Tex =  document.createTextNode(total)
  td5.appendChild(td5Tex)
  tr.appendChild(td5)




//htlm tr
var htmltr  = document.getElementById("htmltr1")
console.log(htmltr)
var get1 = document.getElementById("empty")
console.log(get1)


}