// FUNCTION TO DETECT WHEN AN ELEMENT IS VISIBLE
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})
const revealElements = document.querySelectorAll('.h');
revealElements.forEach((el) => observer.observe(el));

// FUNTION TO CHANGE TO CHANGE BETWEEN LIGHT/DARK MODE
function dmt() {
    var toggle = document.getElementById('dark-mode-toggle');
    var st = document.querySelector(':root');
    var pbg = document.querySelectorAll('.pattern-background');
    var rs = getComputedStyle(st);
    if(toggle.checked == true) {
        st.style.setProperty('--white', '#393939');
        st.style.setProperty('--grey-dark', '#F5F5F5');
        pbg.forEach(box => {
            box.style.backgroundImage = 'url("images/pattern-5b.jpg")';
        })
    } else {
        st.style.setProperty('--white', '#F5F5F5');
        st.style.setProperty('--grey-dark', '#393939');
        pbg.forEach(box => {
            box.style.backgroundImage = 'url("images/pattern-5.jpg")';
        })
    }
}

// FUNCTION TO COPY TO CLIPBOARD
function copy_to_clipboard() {
    navigator.clipboard.writeText("hello@danielepedrolli.online");
    var message = document.getElementById('success-msg');
    // alert(message);
    setTimeout(function() {
        message.style.opacity = 1;
    }, 100);
    message.style.display = 'block';
    setTimeout(function() {
        message.style.opacity = 0;
    }, 2000);
    setTimeout(function() {
        message.style.display = 'none';
    }, 2250);
}


function loader() {
    // THIS IS THE PART FOR THE LINKS
    var links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(function() {
                window.history.pushState(document.html, document.title, document.URL.split('#')[0]);
            }, 1);
        });
    });
}
