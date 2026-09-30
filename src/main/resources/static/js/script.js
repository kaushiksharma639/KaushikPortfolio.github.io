(function () {
    var EMAIL = "kaushiksharma4444@gmail.com";

    /* ---------- Theme toggle ---------- */
    var root = document.documentElement;
    try {
        var saved = localStorage.getItem("ks-theme");
        if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
    } catch (e) {}

    var themeBtn = document.getElementById("theme");
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            var current = root.getAttribute("data-theme");
            if (!current) current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            var next = current === "dark" ? "light" : "dark";
            root.setAttribute("data-theme", next);
            try { localStorage.setItem("ks-theme", next); } catch (e) {}
        });
    }

    /* ---------- API console ---------- */
    var DATA = {
        kaushik: {
            name: "Kaushik Sharma",
            role: "Computer Science Engineer, Full Stack Developer",
            location: "Bhopal, India",
            focus: ["Java", "Spring Boot", "React", "REST APIs"],
            currentlyBuilding: "AI-integrated code review system",
            openTo: ["Internships", "Junior developer roles"]
        },
        skills: {
            languages: ["Java", "JavaScript", "Python (basic)"],
            frontend: ["React.js", "HTML", "CSS", "Bootstrap"],
            backend: ["Spring Boot"],
            databases: ["MySQL", "PostgreSQL", "SQLite"],
            tools: ["Git", "GitHub", "GitHub Actions", "IntelliJ", "VS Code"]
        },
        projects: [
            { name: "AI Code Review System", status: "in progress", stack: ["Java", "Spring Boot", "LLM"] },
            { name: "Integrated Map Application", status: "built", stack: ["HTML", "CSS", "Spring Boot", "SQLite"] },
            { name: "Automated CI/CD Pipeline", status: "built", stack: ["GitHub Actions", "Java"] },
            { name: "House Price Prediction", status: "built", stack: ["Python", "Scikit-learn", "Pandas"] }
        ],
        education: [
            { school: "Jagran Lakecity University", degree: "B.Tech, Computer Science", years: "2023-2027", cgpa: 7.25 },
            { school: "Kendriya Vidyalaya Higher Secondary School", level: "Higher Secondary", percentage: 75 }
        ],
        contact: {
            email: EMAIL,
            phone: "+91-9800520897",
            location: "Bhopal, India"
        }
    };

    var out = document.getElementById("c-out");
    var pathEl = document.getElementById("c-path");
    var tabs = document.querySelectorAll("#c-tabs button");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var timer = null;

    function esc(s) {
        return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    function paint(line) {
        return esc(line).replace(/("(?:[^"\\]|\\.)*")(\s*:)?/g, function (m, str, colon) {
            return colon ? '<span class="k">' + str + "</span>" + colon : '<span class="s">' + str + "</span>";
        });
    }

    function show(ep) {
        if (!out || !pathEl) return;
        if (timer) { clearInterval(timer); timer = null; }
        pathEl.textContent = "/" + ep;
        tabs.forEach(function (b) {
            b.setAttribute("aria-pressed", String(b.getAttribute("data-ep") === ep));
        });
        var lines = JSON.stringify(DATA[ep], null, 2).split("\n");
        if (reduce) {
            out.innerHTML = lines.map(paint).join("\n");
            return;
        }
        out.innerHTML = "";
        var i = 0;
        timer = setInterval(function () {
            if (i >= lines.length) {
                clearInterval(timer);
                timer = null;
                return;
            }
            out.insertAdjacentHTML("beforeend", (i ? "\n" : "") + paint(lines[i]));
            i++;
        }, 45);
    }

    tabs.forEach(function (b) {
        b.addEventListener("click", function () {
            show(b.getAttribute("data-ep"));
        });
    });
    if (out && pathEl) {
        show("kaushik");
    }

    /* ---------- Contact ---------- */
    var copyBtn = document.getElementById("copy");
    var msgEl = document.getElementById("copy-msg");
    if (copyBtn && msgEl) {
        copyBtn.addEventListener("click", function () {
            function done(ok) {
                msgEl.textContent = ok ? "Email address copied." : "Copy failed. Select the address above instead.";
            }
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(EMAIL).then(function () { done(true); }, function () { done(false); });
                } else {
                    done(false);
                }
            } catch (e) {
                done(false);
            }
        });
    }

    var sendBtn = document.getElementById("send");
    if (sendBtn) {
        sendBtn.addEventListener("click", function () {
            var nameEl = document.getElementById("f-name");
            var msgElInput = document.getElementById("f-msg");
            var note = document.getElementById("f-note");
            var name = nameEl ? nameEl.value.trim() : "";
            var msg = msgElInput ? msgElInput.value.trim() : "";
            if (!msg) {
                if (note) note.textContent = "Write a short message first, then open it in your email app.";
                if (msgElInput) msgElInput.focus();
                return;
            }
            var subject = "Hello from your portfolio" + (name ? " (" + name + ")" : "");
            var body = msg + (name ? "\n\n" + name : "");
            window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
            if (note) note.textContent = "Opening your email app. If nothing happens, copy my address from the left.";
        });
    }

    /* ---------- Profile photo change & persistence ---------- */
    var profileImg = document.getElementById("profile-img");
    var profileUpload = document.getElementById("profile-upload");

    try {
        var savedPic = localStorage.getItem("ks-profile-img");
        if (savedPic && profileImg) {
            profileImg.src = savedPic;
        }
    } catch (e) {}

    if (profileUpload && profileImg) {
        profileUpload.addEventListener("change", function (e) {
            var file = e.target.files && e.target.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (evt) {
                    var dataUrl = evt.target.result;
                    profileImg.src = dataUrl;
                    try {
                        localStorage.setItem("ks-profile-img", dataUrl);
                    } catch (err) {}
                };
                reader.readAsDataURL(file);
            }
        });
    }
})();
