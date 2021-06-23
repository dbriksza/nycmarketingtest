$(document).ready(() => {

    const emailInput = document.querySelector('#email')

    $("#emailSearch").on("click", (e) => {
        e.preventDefault();
        localStorage.clear(); //Clears storage for next request
        const email = emailInput.value.toLowerCase()

        let x;
        const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (email.match(regEx)) {
            x = true;
        } else {
            x = false;
        }

        if (x) {
            emailInput.parentNode.classList.remove("error");
            const proxyurl = "";
            const url = `https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`
            fetch(`${proxyurl}${url}`)
                .then((res) => res.text())
                .then((contents) => {
                    localStorage.setItem("userObject", contents);
                    window.location.href = "result.html";
                })
                .catch((e) => console.log(e));
        } else {
            emailInput.parentNode.classList.add("error");
        }
    });

    emailInput.addEventListener('keypress', (e) => {
        const keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == '13') {
            localStorage.clear(); //Clears storage for next request
            const email = emailInput.value.toLowerCase()

            let x;
            const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (email.match(regEx)) {
                x = true;
            } else {
                x = false;
            }

            if (x) {
                emailInput.parentNode.classList.remove("error");
                const proxyurl = "";
                const url = `https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`
                fetch(`${proxyurl}${url}`)
                    .then((res) => res.text())
                    .then((contents) => {
                        localStorage.setItem("userObject", contents);
                        window.location.href = "result.html";
                    })
                    .catch((e) => console.log(e));
            } else {
                emailInput.parentNode.classList.add("error");
            }
        }
    })

});
