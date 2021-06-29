let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", displayData);
let tableEl = document.getElementById("table");
tableEl.addEventListener("click", deleteRow);

let fName = document.getElementById("fName");
let sName = document.getElementById("sName");
let age = document.getElementById("age");
let cLevel = document.getElementById("cLevel");
let fClub = document.getElementById("fClub");


let allMembers = [];

function displayData(e) {
  e.preventDefault();
  

  // const jsonString = JSON.stringify(eachMember) 

  if((fName.value== "" && sName.value== "" && age.value== "" && cLevel.value== "" && fClub.value== "")){  
    console.log('ok')
  }
  else{
    let eachMember = {
      id: Date.now(),
      firstName: fName.value,
      surname: sName.value,
      age: age.value,
      level: cLevel.value,
      fClub: fClub.value,
    };
    
  
    
    allMembers.push(eachMember);
  
  const tbodyEl = document.querySelector("tbody");

  tbodyEl.innerHTML += `
        <tr>
            <td>${eachMember.id}</td>
            <td>${eachMember.firstName}</td>
            <td>${eachMember.surname}</td>
            <td>${eachMember.age}</td>
            <td>${eachMember.level}</td>
            <td>${eachMember.fClub}</td>
            <td><button class="del"> Delete </button></td>
        </tr> 
    `;
  
document.getElementById("fName").value = "";
 document.getElementById("sName").value = "";
document.getElementById("age").value = "";
 document.getElementById("cLevel").value = "";
document.getElementById("fClub").value = "";
    console.log(eachMember);
  console.log(allMembers);
   
}
}
function deleteRow(e){
  if(e.target.classList.contains("del")){
    const btn = e.target;
    btn.closest("tr").remove()
  }
}