const signupForm = document.getElementById("signup_form");
const loginForm = document.getElementById("login_form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const payload = {
        name: signupForm.name_sign.value,
        email: signupForm.email_sign.value,
        password: signupForm.password_sign.value,
        picture:
            signupForm.profile_pic.value == undefined
                ? ""
                : signupForm.profile_pic.value,
    };

    console.log(payload);
    fetch("http://localhost:8080/user/signup", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if (res.success) {
                alert("User signed up successfully");
            } else {
                alert("Something went wrong");
            }
        })
        .catch((err) => {
            alert("Something went wrong");
        });
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const payload = {
        email: loginForm.login_email.value,
        password: loginForm.login_password.value,
    };

    console.log(payload);
    fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                localStorage.setItem("token", res.token);
                const user = res.userId;
                window.location.href = `dashboard.html?id=${user}`;
            } else {
                alert(res.error);
            }
        })
        .catch((err) => console.log(err));
});
