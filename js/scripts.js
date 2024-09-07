// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBezJmvkk5__TNxmLN1c1XLZDSfzQgD1A",
    authDomain: "alpha-b20ce.firebaseapp.com",
    projectId: "alpha-b20ce",
    storageBucket: "alpha-b20ce.appspot.com",
    messagingSenderId: "102976757740",
    appId: "1:102976757740:web:ac0422b9d1a78a8f632ac9",
    measurementId: "G-BNG4L4W5HQ" // This is optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Signup function
    function signupUser(email, password) {
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                alert("User signed up successfully!");
            })
            .catch(error => {
                console.error(error.message);
            });
    }

    // Attach signup event listener
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            signupUser(email, password);
        });
    } else {
        console.error("Signup form not found.");
    }

    // Login function
    function loginUser(email, password) {
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                alert("User logged in successfully!");
            })
            .catch(error => {
                console.error(error.message);
            });
    }

    // Attach login event listener
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            loginUser(email, password);
        });
    } else {
        console.error("Login form not found.");
    }

    // Add to cart function
    function addToCart(productId, price) {
        const user = auth.currentUser;
        if (!user) {
            alert("Please log in first to add items to the cart.");
            return;
        }

        db.ref('carts/' + user.uid + '/' + productId).set({
            productId: productId,
            price: price,
            quantity: 1
        }).then(() => {
            alert("Item added to cart.");
        }).catch(error => {
            console.error(error.message);
        });
    }

    // Attach event listener for "Add to Cart"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const price = this.getAttribute('data-price');
            addToCart(productId, price);
        });
    });

    // Function to load cart items
    function loadCartItems() {
        const user = auth.currentUser;
        if (!user) {
            alert("Please log in to view your cart.");
            return;
        }

        db.ref('carts/' + user.uid).on('value', (snapshot) => {
            const cartItems = snapshot.val();
            let cartHTML = '';
            for (let item in cartItems) {
                cartHTML += `<div>Product ID: ${cartItems[item].productId}, Price: ${cartItems[item].price}, Quantity: ${cartItems[item].quantity}</div>`;
            }
            document.getElementById('cart-items').innerHTML = cartHTML;
        });
    }

    // Load cart items when the page loads
    window.onload = function() {
        loadCartItems();
    };

    // Checkout function
    function checkout() {
        const user = auth.currentUser;
        if (!user) {
            alert("Please log in to checkout.");
            return;
        }

        db.ref('carts/' + user.uid).once('value').then(snapshot => {
            const cartItems = snapshot.val();
            let totalPrice = 0;

            for (let item in cartItems) {
                totalPrice += cartItems[item].price * cartItems[item].quantity;
            }

            console.log("Total Price: ", totalPrice);
            // You can integrate Razorpay or another payment gateway here
        });
    }

    // Attach event listener for checkout
    const checkoutButton = document.getElementById('checkout');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            checkout();
        });
    } else {
        console.error("Checkout button not found.");
    }

    auth.onAuthStateChanged(user => {
        if (user) {
            console.log("User is logged in: ", user.email);
            // Update UI or load user-specific data
        } else {
            console.log("No user is logged in.");
            // Redirect to login page or show login prompt
        }
    });
});
