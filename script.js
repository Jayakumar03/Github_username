
async function fetchData() {

 const url = `https://api.github.com/users/`


let userName = "jayakumar03"

const responses = await fetch(url + `${userName}`)

 const data = await responses.json()

 console.info( data)

 displayingUserdetails(data)
    
}


fetchData()



function displayingUserdetails(userdata) {
    const userName = document.createElement("h1")
    userName.innerHTML  = "PLease Look into console for more detail about Github API"
    userName.classList.add = "h1";

    

try {
    document.body.appendChild(userName)
    
} catch (error) {
    console.warn("Error at displayingUserdetails trycatch" + error)
    
}   

repos(userdata)
    
}



async function repos(userdata) {

    const totalNumberOfRepos = userdata.public_repos;

    const reposUrl = userdata.repos_url;


    try {
        const responses = await fetch(reposUrl)

        const data = await responses.json()

        
    } catch (error) {

        console.warn("Error at repos function try catch" + error)
        
    }

    

   for (let index = 0; index < data.length; index++) {
    console.table( `repo Name : ${data[index].name}` +  ` Repo Url :  ${data[index].html_url}`)
    
   }
    
}