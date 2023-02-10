window.addEventListener("load", () => {
    let allLocalAsk = JSON.parse(localStorage.getItem("ask__question"));
    if (allLocalAsk === null) {
        allLocalAsk = [];
    }

    allLocalAsk.forEach((textQuestions) => {
        document.querySelector(".ask__question").insertAdjacentHTML("beforeend", `<li class="ask_question__li">
                <p>${textQuestions}</p>
                <button class="clear_ask">Clear</button>
              </li>`)
    });

    let allClearBut = document.querySelectorAll(".clear_ask");
    allClearBut.forEach((nowClear, i) => {
        nowClear.addEventListener("click", () => {
            allLocalAsk.splice(i, 1);
            document.querySelector(".ask__question").removeChild(nowClear.parentElement);
            localStorage.setItem("ask__question", JSON.stringify(allLocalAsk));
        });
    });

})

document.querySelector(".ask__form").addEventListener("submit", (event) => {
    event.preventDefault();
    const textQuestions = document.querySelector(".ask_drakosha").value;

    if (textQuestions === "") {
        alert("Ask smth of Drakosha");
    } else {

        document.querySelector(".ask__question").insertAdjacentHTML("afterbegin", `<li class="ask_question__li">
                <p>${textQuestions}</p>
                <button class="clear_ask">Clear</button>
              </li>`)
        let allLocalAsk = JSON.parse(localStorage.getItem("ask__question"));
        if (allLocalAsk === null) {
            allLocalAsk = [];
        }

        allLocalAsk.unshift(textQuestions);
        localStorage.setItem("ask__question", JSON.stringify(allLocalAsk));

        let allClearBut = document.querySelectorAll(".clear_ask");
        allClearBut[0].addEventListener("click", () => {
            let allLocalAskNow = JSON.parse(localStorage.getItem("ask__question"));
            allLocalAskNow.splice(allLocalAskNow.length-allLocalAsk.length, 1);
            document.querySelector(".ask__question").removeChild(allClearBut[0].parentElement);
            localStorage.setItem("ask__question", JSON.stringify(allLocalAskNow));
        });


    }

})

