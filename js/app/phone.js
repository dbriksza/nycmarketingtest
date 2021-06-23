$(document).ready(() => {

    const phoneInput = document.querySelector('#phone')

    $("#phoneSearch").on("click", (e) => {
        e.preventDefault();
        localStorage.clear(); //Clears storage for next request
        const phone = phoneInput.value

        let x;
        const regEx = /[0-9]{10}/;
        if (phone.match(regEx)) {
            x = true;
        } else {
            x = false;
        }

        if (x) {
            phoneInput.parentNode.classList.remove("error");
            const proxyurl = "";
            const url = `https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=${phone}`
            fetch(`${proxyurl}${url}`)
                .then((res) => res.text())
                .then((contents) => {
                    localStorage.setItem("userObject", contents);
                    window.location.href = "result.html";
                })
                .catch((e) => console.log(e));
        } else {
            phoneInput.parentNode.classList.add("error");
        }
    });

    phoneInput.addEventListener('keypress', (e) => {
        const keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == '13') {
            localStorage.clear(); //Clears storage for next request
            const phone = phoneInput.value

            let x;
            // const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            const regEx = /9999999999/
            if (email.match(regEx)) {
                x = true;
            } else {
                x = false;
            }

            if (x) {
                phoneInput.parentNode.classList.remove("error");
                const proxyurl = "";
                const url = `https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=${phone}`
                fetch(`${proxyurl}${url}`)
                    .then((res) => res.text())
                    .then((contents) => {
                        localStorage.setItem("userObject", contents);
                        window.location.href = "result.html";
                    })
                    .catch((e) => console.log(e));
            } else {
                phoneInput.parentNode.classList.add("error");
            }
        }
    })

});
