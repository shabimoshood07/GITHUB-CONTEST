// /////////GET STARTED/////
const getStartedBtn = document.querySelector(".get-started");
const userTwo = document.querySelector(".user-two");
const userOne = document.querySelector(".user-one");
const userOneForm = document.querySelector(".userone-submit");
const userTwoForm = document.querySelector(".usertwo-submit");
const pageFour = document.querySelector(".page-four");
const resultContainer = document.querySelector(".player-result");
const userError = document.querySelector(".user-error")


// /////USER 1//////////

if(userOneForm){
    userOneForm.addEventListener("submit", async function(e){
        e.preventDefault();
        if(!userOne.value){
            userError.style.visibility = "visible"
            setTimeout(function(){
                userError.style.visibility = "hidden"
    
            }, 2000)
        }else{

                try {
                    const name = userOne.value
                    const {data} = await axios.get(`https://api.github.com/users/${name}`)
                    console.log(data)
                console.log(data.login)
                localStorage.setItem("user1Data",JSON.stringify(data) )
                window.location = "user2.html";
            } catch (error) {
                userError.innerHTML = "invalid user"
                userError.style.visibility = "visible"
                setTimeout(function(){
                    userError.style.visibility = "hidden"
                }, 2000)
                userOne.value = ""
                }
            
            // console.log(name);
            // localStorage.setItem("user1", userOne.value );
        }
    });
}


// /////USER 2//////////

if(userTwoForm){
    userTwoForm.addEventListener("submit", async function(e){
        e.preventDefault();
        if(!userTwo.value){
            userError.style.visibility = "visible"
            setTimeout(function(){
                userError.style.visibility = "hidden"
    
            }, 2000)
        }else{

                try {
                    const name = userTwo.value
                    const {data} = await axios.get(`https://api.github.com/users/${name}`)
                    console.log(data)
                console.log(data.login)
                localStorage.setItem("user2Data",JSON.stringify(data) )
                window.location = "last.html";
            } catch (error) {
                userError.innerHTML = "invalid user"
                userError.style.visibility = "visible"
                setTimeout(function(){
                    userError.style.visibility = "hidden"
                }, 2000)
                userTwo.value = ""
                }
            
            // console.log(name);
            // localStorage.setItem("user1", userOne.value );
        }
    });
}



