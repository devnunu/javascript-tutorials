var output_el = document.querySelector('#output')

age = 21

if(age < 21){
  output_el.textContent("sorry, son")
}else if(!(age > 35)){
  output_el.textContent = "id plz"
}else if(name==="Bob"){
  output_el.textContent = "you're banned, bob!"
}else{
  output_el.textContent = "come on in!"
}
