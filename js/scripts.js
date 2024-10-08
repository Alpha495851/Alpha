/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body and Font Styling */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
}

/* Header */
header {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    font-size: 1.8em;
}

.nav-links {
    list-style: none;
}

.nav-links li {
    display: inline-block;
    margin-left: 20px;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
}

.cart img {
    width: 30px;
}

/* Hero Section */
.hero {
    background: url('hero-bg.jpg') no-repeat center center/cover;
    height: 90vh;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero-content h2 {
    font-size: 3.5em;
}

.hero-content p {
    font-size: 1.5em;
    margin: 20px 0;
}

.btn {
    background-color: #ff6347;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.2em;
}

.btn:hover {
    background-color: #ff4500;
}

/* Products Section */
.products {
    padding: 50px 20px;
    text-align: center;
    background-color: #fff;
}

.products h2 {
    margin-bottom: 30px;
    font-size: 2.5em;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.product {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
}

.product img {
    max-width: 100%;
    height: auto;
    margin-bottom: 15px;
}

.product h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.product p {
    font-size: 1.2em;
    color: #666;
}

/* About Section */
.about {
    background-color: #333;
    color: #fff;
    padding: 50px 20px;
    text-align: center;
}

.about h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
}

.about p {
    font-size: 1.2em;
    line-height: 1.8;
}

/* Contact Section */
.contact {
    background-color: #f4f4f4;
    padding: 50px 20px;
    text-align: center;
}

.contact h2 {
    margin-bottom: 20px;
}

.contact form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact input, .contact textarea {
    width: 100%;
    max-width: 500px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.1em;
}

.contact button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
}

.contact button:hover {
    background-color: #555;
}

/* Footer */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px;
    margin-top: 50px;
}

footer p {
    font-size: 1em;
    }
