 !function() {
    const e = document.getElementById("themeToggle")
      , t = document.body;
    "dark" === localStorage.getItem("theme") ? (t.classList.add("dark"),
    e.innerHTML = '<i class="fas fa-moon"></i>') : e.innerHTML = '<i class="fas fa-sun"></i>',
    e.addEventListener("click", ( () => {
        t.classList.toggle("dark"),
        t.classList.contains("dark") ? (localStorage.setItem("theme", "dark"),
        e.innerHTML = '<i class="fas fa-moon"></i>') : (localStorage.setItem("theme", "light"),
        e.innerHTML = '<i class="fas fa-sun"></i>')
    }
    ));
    const s = document.querySelector(".contact-form .btn-primary");
    s && s.addEventListener("click", (e => {
        e.preventDefault(),
        alert("Message sent (demo) — thanks!")
    }
    ))
}(),
document.addEventListener("DOMContentLoaded", (function() {
    const e = document.getElementById("hamburger")
      , t = document.querySelector(".nav-menu")
      , s = document.querySelectorAll(".nav-link")
      , o = document.getElementById("themeToggle")
      , c = document.querySelector(".navbar")
      , a = document.body;
    e.addEventListener("click", (function() {
        this.classList.toggle("active"),
        t.classList.toggle("active")
    }
    )),
    s.forEach((o => {
        o.addEventListener("click", (function(o) {
            s.forEach((e => e.classList.remove("active"))),
            this.classList.add("active"),
            e.classList.remove("active"),
            t.classList.remove("active");
            const a = this.getAttribute("href");
            if (a && "#" !== a) {
                o.preventDefault();
                const e = document.querySelector(a);
                if (e) {
                    const t = c.offsetHeight
                      , s = e.offsetTop - t - 20;
                    window.scrollTo({
                        top: s,
                        behavior: "smooth"
                    })
                }
            }
        }
        ))
    }
    )),
    window.addEventListener("scroll", (function() {
        window.scrollY > 100 ? c.classList.add("scrolled") : c.classList.remove("scrolled");
        const e = document.querySelectorAll("section");
        let t = "";
        e.forEach((e => {
            const s = e.offsetTop
              , o = (e.clientHeight,
            c.offsetHeight);
            window.scrollY >= s - o - 100 && (t = e.getAttribute("id"))
        }
        )),
        s.forEach((e => {
            e.classList.remove("active"),
            e.getAttribute("href") === `#${t}` && e.classList.add("active")
        }
        ))
    }
    )),
    o.addEventListener("click", (function() {
        this.classList.toggle("dark"),
        a.classList.toggle("dark-mode");
        const e = this.querySelector(".fa-moon")
          , t = this.querySelector(".fa-sun");
        a.classList.contains("dark-mode") ? (t.style.opacity = "0.5",
        e.style.opacity = "1",
        localStorage.setItem("theme", "dark")) : (t.style.opacity = "1",
        e.style.opacity = "0.5",
        localStorage.setItem("theme", "light"))
    }
    ));
    "dark" === localStorage.getItem("theme") && (a.classList.add("dark-mode"),
    o.classList.add("dark"),
    o.querySelector(".fa-sun").style.opacity = "0.5",
    o.querySelector(".fa-moon").style.opacity = "1"),
    document.addEventListener("click", (function(s) {
        !c.contains(s.target) && t.classList.contains("active") && (e.classList.remove("active"),
        t.classList.remove("active"))
    }
    )),
    window.addEventListener("resize", (function() {
        window.innerWidth > 768 && (e.classList.remove("active"),
        t.classList.remove("active"))
    }
    ))
}
));

 document.getElementById("sendBtn").addEventListener("click", function() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      alert("Please enter your name.");
      return;
    }
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!message) {
      alert("Please enter your message.");
      return;
    }

    // Open Gmail with pre-filled email
    const subject = encodeURIComponent("Project");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=izharulhaqhere@gmail.com&su=${subject}&body=${body}`;
    
    window.open(mailtoLink, "_blank");
  });