const resultContainer = document.querySelector(".player-result");
const userContainer = document.querySelector(".player"); 
let Player1 = 1
let Player2 = 2

let userOneData = JSON.parse(localStorage.getItem('user1Data'))
let userTwoData = JSON.parse(localStorage.getItem('user2Data'))
   
   const restart = document.querySelector(".restart-btn");
if(restart){
    restart.addEventListener("click", function(){
        localStorage.clear();

    })
}

const userTwoScore = Number(localStorage.getItem('userTwoScore'))
const userOneScore = Number(localStorage.getItem('userOneScore'))
   
   if (userTwoScore > userOneScore){
                    resultReversed();
                }else if(userTwoScore < userOneScore) {
                    resultPage();
                }else if(userOneScore === userTwoScore){
                    draw();
                }
                    
                function draw(){
                   userContainer.innerHTML = `<h1> Its atie</>`
                }

                function resultReversed(){
                 userContainer.innerHTML = `       <div class="players">
                    <p>winner</p>
            <h2>score: ${userTwoScore}</h2>
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
                <label for="name">Company:</label> <p>${userTwoData.company}</p>
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


           
        </div>

        <div class="players">
                 <p>looser</p>
            <h2>score: ${userOneScore}</h2>

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
                <label for="name">Company:</label>
                <p>${userOneData.company}</p>
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
        </div>`;

 const infos = document.querySelectorAll(".info")

    infos.forEach(function(info){
        const Ps = info.lastElementChild;
        if(Ps.innerHTML === "null" || !Ps.innerHTML){
            info.style.display = "none"
        }
    })

                }

                function resultPage(){
                   userContainer.innerHTML = `       <div class="players">
                    <p>winner</p>
            <h2>score: ${userOneScore}</h2>
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
                 <p>looser</p>
            <h2>score: ${userTwoScore}</h2>

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
        if(Ps.innerHTML === "null" || !Ps.innerHTML){
            info.style.display = "none"
        }
    })

                }