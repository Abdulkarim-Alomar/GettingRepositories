//Basics Variables
let input = document.querySelector(".get-name input");
let btn = document.querySelector(".get-name button");
let repos = document.querySelector(".repositories");

btn.addEventListener("click", function () {
    getData();
});

//Function For Get Data of Repositories
function getData() {
    //Check If The User Add Username
    if (input.value === "") {

        repos.innerHTML=`<span>Please Write GetHub Username.</span>`
    } else {

        //Fetch Data From GitHub API
        fetch(`https://api.github.com/users/${input.value}/repos`)

            .then((response) => response.json())
            .then((data) => {

                repos.innerHTML = "";
                //Looping For getting every repository Data

                data.forEach(element => {
                    
                    myDiv = document.createElement("div");

                    myDiv.className = "info";

                    repoName = document.createElement("span");

                    repoName.innerHTML = element.name;

                    spanContainer = document.createElement("div");

                    star = document.createElement("span");

                    star.className = "star";

                    star.innerHTML = `Stars ${element.stargazers_count}`;

                    visit = document.createElement("a");

                    visit.className = "visit";

                    visit.innerHTML = `Visit`;

                    visit.href = element.clone_url;

                    visit.target = "_blank";

                    spanContainer.appendChild(star);

                    spanContainer.appendChild(visit);

                    myDiv.appendChild(repoName);

                    myDiv.appendChild(spanContainer);
                    
                    repos.appendChild(myDiv);
                });
            })
    }
}