// write js code here corresponding to matches.html
var matchData=JSON.parse(localStorage.getItem("schedule")) || []
var favouriteData=JSON.parse(localStorage.getItem("favourites")) || []
display(matchData)
document.querySelector("#filterVenue").addEventListener("change",filVen)
function filVen(){
var filterValue=document.querySelector("#filterVenue").value
var filtered=matchData.filter(function(el){
return el.ven==filterValue
})
display(filtered)
}



function display(matchData){
document.querySelector("tbody").innerHTML=""
matchData.forEach(function(el){
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
    col6.innerText="Favourite"
    col6.style.color="green"
    col6.style.cursor="pointer"
    col6.addEventListener("click",function(){
        addToFav(el)
    })
    document.querySelector("tbody").append(row)
    row.append(col1,col2,col3,col4,col5,col6)
})
}
function  addToFav(el){
    favouriteData.push(el)
  localStorage.setItem("favourites",JSON.stringify(favouriteData))
}