window.onload = (event) => {
  document.querySelector("#text-val").value = "";
};

const elem = document.querySelector(".submit");   // Submit button

elem.addEventListener("click", () => {

  const text = document.querySelector("#text-val").value;
  console.log(text);

  const item = document.createElement('div');
  item.innerHTML = `<div class="item">
  <input type="checkbox" name="cbox" id="donen">  
  
  <span class="ilist">
  ${text}
  </span>

  </div>`;

  const el = document.querySelector(".lists");
  el.appendChild(item);


  document.querySelector("#text-val").value = "";
});


// Link Enter key with the submit button
window.addEventListener("keyup", function (e) {
  if (e.keyCode === 13 && document.querySelector("#text-val").value !== "") {
    e.preventDefault();
    document.querySelector(".submit").click();
  }
});


// Clear Items 
const citems = document.querySelector(".butn");

citems.addEventListener("click", function () {
  const rel = document.querySelectorAll(".item");
  const par = document.querySelector(".lists");

  for (const r of rel) {
    r.remove();
  }
});


// Remove items on clicking DONE
// const delb = document.querySelector(".delc");

// delb.addEventListener("click",function(e){
//   e.parentNode.remove();
//   console.log(e);
// });


