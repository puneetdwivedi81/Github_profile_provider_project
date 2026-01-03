
async function fetchGitData(username){
    const res= await fetch(`https://api.github.com/users/${username}`);
    const gitData=await res.json();

    return gitData

    
}



let form =document.querySelector('form');
form.addEventListener("submit",async(e)=>{
    e.preventDefault();

    let user =document.querySelector('#git-user-name').value;
    let userData= await fetchGitData(user)
    console.log(userData);

    let section =document.querySelector('#user-details');
    // console.log(section)

    if(userData.id){
        section.innerHTML= `  <aside>
            <img src="${userData.avatar_url}" alt="loading...">
        </aside>
        <article id="aboutme">
            <h1>name: <span>${userData.name}</span></h1>
            <p>Bio: <span>${userData.bio}</span></p>
            <p>Location: <span>${userData.location}</span></p>
            <div class="summary">
                <button>repos: <span>${userData.public_repos}</span></button>
                <button>followers: <span>${userData.followers}</span></button>
                <button>following: <span>${userData.following}</span></button>
            </div>
        </article> `


    }





})








