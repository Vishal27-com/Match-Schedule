// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",formFun)
var matchData=JSON.parse(localStorage.getItem("schedule")) || []
function formFun(){
    event.preventDefault()
    var match={
        matNum:masaiForm.matchNum.value,
        team_a:masaiForm.teamA.value,
        team_b:masaiForm.teamB.value,
        matdat:masaiForm.date.value,
        ven:masaiForm.venue.value
    }
    matchData.push(match)
    localStorage.setItem("schedule",JSON.stringify(matchData))
}
