body {
  font-family: 'Cairo', sans-serif;
  margin: 0;
  background-color: #f8f9fa;
  color: #0a3d7e;
  direction: rtl;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

.main-header {
  background-color: #0a3d7e;
  color: white;
  padding: 15px 0;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-actions button {
  margin-right: 10px;
}

.hero-section {
  background-color: #e9f1f7;
  text-align: center;
  padding: 60px 0;
}

.hero-section h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.hero-section p {
  font-size: 18px;
  margin-bottom: 20px;
}

.cta-buttons a {
  margin: 5px;
}

.section {
  padding: 50px 0;
}

.card-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.card img {
  width: 100%;
  border-radius: 5px;
}

.card h3 {
  margin-top: 10px;
  font-size: 20px;
}

.card p {
  font-size: 14px;
  color: #555;
}

.btn-link {
  display: inline-block;
  margin-top: 10px;
  color: #0b7fbd;
  text-decoration: none;
  font-weight: bold;
}

.rates-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.rate-card {
  background-color: #0b7fbd;
  color: white;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
}

.app-buttons a {
  margin: 10px;
  display: inline-block;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-primary {
  background-color: #0b7fbd;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}

.btn-secondary {
  background-color: transparent;
  color: #0a3d7e;
  border: 2px solid #0a3d7e;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
}

.main-footer {
  background-color: #0a3d7e;
  color: white;
  text-align: center;
  padding: 20px 0;
}
