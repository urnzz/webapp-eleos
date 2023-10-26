import React from 'react';
import './home.css'
function HomePage() {
    return (
        <div className="landing">
            {/* Hero Section */}
            <div className="hero">
                <h1>Welcome to Our Platform</h1>
                <p>Experience the best services and features we offer.</p>
                <button onClick={() => { /* Redirect to login or sign up */ }}>Get Started</button>
            </div>

            {/* Features Section */}
            <div className="features">
                <h2>Features</h2>
                <div className="grid">
                    <div className="feature-card">
                        <img src="./caridade.jpg" alt="Feature 1"/>
                        <h3>Feature 1</h3>
                        <p>Description about feature 1.</p>
                    </div>
                    <div className="feature-card">
                        <img src="feature2.jpg" alt="Feature 2"/>
                        <h3>Feature 2</h3>
                        <p>Description about feature 2.</p>
                    </div>
                    <div className="feature-card">
                        <img src="feature3.jpg" alt="Feature 3"/>
                        <h3>Feature 3</h3>
                        <p>Description about feature 3.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials">
                <h2>What Our Users Say</h2>
                <div className="grid">
                    <div className="testimonial-card">
                        <img src="user1.jpg" alt="User 1"/>
                        <p>"This platform is amazing!"</p>
                        <span>- User 1</span>
                    </div>
                    <div className="testimonial-card">
                        <img src="user2.jpg" alt="User 2"/>
                        <p>"I've never experienced such great services."</p>
                        <span>- User 2</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
