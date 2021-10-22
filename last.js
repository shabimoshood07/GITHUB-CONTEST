const userContainer = document.querySelector(".player"); 
const userOneData = JSON.parse(localStorage.getItem('user1Data'))
const userTwoData = JSON.parse(localStorage.getItem('user2Data'))
const resultContainer = document.querySelector(".player-result");

let Player1 = 1
let Player2 = 2


function getData (){
     console.log(userOneData)
    console.log(userTwoData)

     userContainer.innerHTML = `       <div class="players">
        <h1>Player ${Player1}</h1>
              <div class=" pic">
             <img src=${userOneData.avatar_url} alt="">
            </div>
           

            <div class="info">
             <label for="name">Name:</label> <p>${userOneData.name}</p>
            </div>
               
            <div class="info">
            <label for="name">Username:</label> <p>${userOneData.login}</p>
            </div>
             <div class="info">
                <label for="name">Location:</label> <p>${userOneData.location}</p>
            </div>
                        <div class="info">
                <label for="name">Company:</label> <p>${userOneData.company}</p>
             </div>
              <div class="info">
                    <label for="name">Followers:</label>
                    <p>${userOneData.followers}</p>    
            </div>
            <div class="info">
                <label for="name">Following:</label>
                <p>${userOneData.following}</p>
            </div>
             <div class="info">
                <label for="name">Public Repos:</label>
                <p>${userOneData.public_repos}</p>
            </div>
              <div class="info">
                <label for="name">Blog:</label>
                 <p> <a href="${userOneData.blog}">${userOneData.blog}</a></p>
            </div>


           
        </div>

        <div class="players">
        <h1>Player ${Player2}</h1>

             <div class=" pic">
             <img src=${userTwoData.avatar_url} alt="">
            </div>

            <div class="info">
             <label for="name">Name:</label> <p>${userTwoData.name}</p>
            </div>
               
            <div class="info">
            <label for="name">Username:</label> <p>${userTwoData.login}</p>
            </div>
             <div class="info">
                <label for="name">Location:</label> <p>${userTwoData.location}</p>
            </div>
               <div class="info">
                <label for="name">Company:</label>
                <p>${userTwoData.company}</p>
            </div>
                        <div class="info">
                            <label for="name">Followers:</label>
                            <p>${userTwoData.followers}</p>
                        </div>
            <div class="info">
                <label for="name">Following:</label>
                <p>${userTwoData.following}</p>
            </div>
             <div class="info">
                <label for="name">Public Repos:</label>
                <p>${userTwoData.public_repos}</p>
            </div>
              <div class="info">
                <label for="name">Blog:</label>
                <p> <a href="${userTwoData.blog}">${userTwoData.blog}</a></p>
            </div>
        </div>`
   
    const infos = document.querySelectorAll(".info")

    infos.forEach(function(info){
        const Ps = info.lastElementChild;
        const As = info.lastElementChild.lastChild.innerHTML;
       
            console.log(As)

        
        if(Ps.innerHTML === "null" ){
            info.style.display = "none"
        }
    })

}
 getData()



          const userOneScore = Math.floor((userOneData.following + userOneData.followers + (0.5 *userOneData.public_repos )));
        console.log(userOneScore);
            localStorage.setItem('userOneScore', userOneScore)
            const userTwoScore = Math.floor((userTwoData.following + userTwoData.followers + (0.5 *userTwoData.public_repos )));
            console.log(userTwoScore);
            
            localStorage.setItem('userTwoScore', userTwoScore)
        

         const battleBtn= document.querySelector(".initiate-btn");
         
             
                
               

        

const reselectBtn = document.querySelector(".reselect-btn");
if(reselectBtn){
    reselectBtn.addEventListener("click", function(){
        localStorage.clear();

    })
}
