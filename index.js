var button = document.getElementById("submit")
button.addEventListener('click', () => {
    var element = document.getElementById("github")
    var err = document.getElementById("err")
    err.style.display = "none"
    element.style.display = "block"
    var i = document.getElementById("imagetag")
    if (i) {
        i.remove()
    }
    console.log("click");
    var name = document.getElementById("uname").value
    var apiurl = "https://api.github.com/users/" + name
    console.log(apiurl);
    fetch(apiurl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            var imgsrc = data.avatar_url
            if (imgsrc) {
                new GitHubCalendar(".calendar", name, { responsive: true });
                var img = document.createElement("img");
                img.classList.add("img")
                img.classList.add("mt-2")
                img.setAttribute("id", "imagetag")
                img.src = imgsrc
                var destination = document.getElementById("msg");
                destination.appendChild(img);
            }
            else {
                console.log("else");
                element.style.display = "none"
                err.style.display = "block"
            }
            document.getElementById("uname").value = ""
        })
})