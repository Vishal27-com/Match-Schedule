// write js code here corresponding to favourites.html
var favouriteData=JSON.parse(localStorage.getItem("favourites")) || []

favouriteData.forEach(function(el,index){
    var row=document.createElement("tr")
    var col1=document.createElement("td")
    col1.innerText=el.matNum
    var col2=document.createElement("td")
    col2.innerText=el.team_a
    var col3=document.createElement("td")
    col3.innerText=el.team_b
    var col4=document.createElement("td")
    col4.innerText=el.matdat
    var col5=document.createElement("td")
    col5.innerText=el.ven
    var col6=document.createElement("td")
    col6.innerText="Delete"
    col6.style.color="red"
    col6.style.cursor="pointer"
    col6.addEventListener("click",function(){
       Remove(el,index)
    })
    document.querySelector("tbody").append(row)
    row.append(col1,col2,col3,col4,col5,col6)
})
function  Remove(el,index){
    favouriteData.splice(index,1)
  localStorage.setItem("favourites",JSON.stringify(favouriteData))
  window.location.reload()
}