let button = document.querySelector("#update")
var baseField = document.querySelector("#base")
var check = document.querySelector("input[name=choose]")
var perf = document.querySelector("input[name=performance]")
var edit1 = document.querySelector("#edit1")
var edit2 = document.querySelector("#edit2")
var perfValue = 0
var contract = 50091
console.log(check)
console.log(button)

button.addEventListener('click', update)

check.addEventListener('change', e => {
  document.querySelector("#table301").classList.toggle("hidden")
})

baseField.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    update()
  }
  if (isNaN(baseField.value)) {
    document.querySelector("#warning").classList.remove("hidden")
  } else {
    document.querySelector("#warning").classList.add("hidden")
  }
});

perf.addEventListener('change', e => {
  if (perf.checked) {
    perfValue = 2750
  } else {
    perfValue = 0
  }
  document.querySelector("#perfmon").innerHTML = "$" + Math.round(perfValue)
  update()
})

edit1.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    update()
  }
});

edit2.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    update()
  }
});

function update() {
  base = parseFloat(baseField.value)
  var per1 = (base + 1435) * 0.0375
  var per2 = (base + 4120) * 0.0775
  contract = base + 4120 + per2
  var per301 = (contract + Number(edit2.value)) * 0.035
  document.querySelector("#per1").innerHTML = "$" + Math.round(per1)
  document.querySelector("#base1").innerHTML = "$" + (base + 1435 + Math.round(per1) + Number(edit1.value))
  document.querySelector("#per2").innerHTML = "$" + Math.round(per2)
  document.querySelector("#base2").innerHTML = "$" + (Math.round(contract) + Number(edit2.value))
  document.querySelector("#inc").innerHTML = Math.round((contract / base - 1) * 100) + "%"
  document.querySelector("#per301").innerHTML = "$" + Math.round(per301)
  document.querySelector("#contract301").innerHTML = "$" + Math.round(contract + 2600 + per301 + perfValue)
}
