let commentFilter;
let now_pagination = 0;

function pagination() {
    document.querySelector(".all__comments").innerHTML = "";
    let paginationComment = commentFilter.slice(now_pagination * 10, now_pagination * 10 + 10);
    paginationComment.forEach(function (comment) {
        document.querySelector(".all__comments").insertAdjacentHTML("beforeend", `<li class="comment_li">
                    <h3 class="h3_comment">Имя знакомого Дракоши: ${comment.email}</h3>
                    <p>Comment: ${comment.body}</p>
                </li>`);

    });
}

document.querySelector(".comments_btn_first").addEventListener("click", () => {
    if (now_pagination === 1) {
        now_pagination = now_pagination - 1;
        pagination();
    }
})
document.querySelector(".comments_btn_second").addEventListener("click", () => {
    if (now_pagination === 0) {
        now_pagination = now_pagination + 1;
        pagination();
    }
})

window.addEventListener("load", async () => {
    await fetch("https://jsonplaceholder.typicode.com/comments")
        .then((commentsPlaceholder) => commentsPlaceholder.json()).then((jsonComments) => {
            let randStart = Math.floor(Math.random() * (jsonComments.length - 50));

            if ((Math.floor(Math.random() * 2)) % 2 === 0) {
                commentFilter = jsonComments.slice(randStart + 25 - 20, randStart + 25);
            } else {
                commentFilter = jsonComments.slice(randStart, randStart + 20);
            }
            pagination();
            document.querySelector(".comments").style.display = "block";
            document.querySelector(".preloader_comments").style.display = "none";

        }).catch(() => {
            document.querySelector(".preloader_comments").style.display = "none";
            document.querySelector(".error_comment").style.display = "block";
        })
})