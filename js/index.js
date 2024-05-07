document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector( ".navbarmobile" );
    const navbar = document.getElementById('navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('show');
        menuBtn.classList.toggle('open')
        console.log('togglingmenu')
    })
} );

function activateTab(tab) {
    //remove active class
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    //add active class to selected tab
    setTimeout( () => {
        tab.classList.add('active');
        console.log('done');
    }, 100)  
}

//scroll down

let lastScrollTop = 0;
const header = document.querySelector('.header');
let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        this.window.requestAnimationFrame(function() {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollTop) {
                //scrolldown
                header.classList.add('hide');
            } else {
                //scroll up
                header.classList.remove('hide');
            }

            lastScrollTop = currentScroll;
            ticking = false;
        });

        ticking = true;
    }
});

//show password
function togglePasswordVisibility() {
    const passwordField = document.getElementById("passwordField");
    if(passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function confirmLogin() {
    //get details from input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("passwordField").value;

    //checking if valid, temporary admin login
    if (username === "admin" && password === "password") {
        //load home.html
        window.location.href = "../html/home.html";
        alert("Load Succesful")
    } else {
        alert("Invalid Username or Password!");
    }
}

function Logout() {
    //clear sessionand local storage
    sessionStorage.clear();
    localStorage.clear();

    //redirect to login
    window.location.href = "../html/login.html";
}

//chart
document.addEventListener('DOMContentLoaded', function() {
    // Sample data for the transaction statuses
    const transactionStatusData = {
        labels: ['Completed', 'Pending', 'Disputed'],
        datasets: [{
            label: 'Transaction Status',
            data: [70, 20, 10], // Sample data percentages (sum should be 100)
            backgroundColor: [
                'rgba(138, 43, 226, 0.5)', // Completed
                'rgba(87, 87, 86, 0.5)', // Pending
                'rgba(255, 99, 132, 0.5)'  // Disputed
            ],
            borderColor: [
                'rgba(138, 43, 226, 1)',
                'rgba(87, 87, 86, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Chart configuration
    const chartConfig = {
        type: 'pie',
        data: transactionStatusData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    };

    // Render the chart
    const transactionStatusChartCanvas = document.getElementById('transactionStatusChart');
    const transactionStatusChart = new Chart(transactionStatusChartCanvas, chartConfig);
});