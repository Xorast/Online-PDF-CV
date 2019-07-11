// JAVASCRIPT
// UX

// Show & Hide buttons
window.onscroll = function() {scrollFunction_commandBoard()};

function scrollFunction_commandBoard() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("commandBoard").style.display = "block";
    } else {
        document.getElementById("commandBoard").style.display = "none";
    }
    if (window.innerHeight + window.scrollY > document.body.clientHeight - 100) {
            document.getElementById('commandBoard').style.display='none';
    }
}