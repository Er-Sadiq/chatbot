import React from 'react';
import NavHome from './NavHome';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function About() {
  const windowStyle = {
    border: '2px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f4f4f4', // Set your desired window background color
    maxWidth: '1500px', // Adjust the maximum width as needed
    margin: '0 auto', // Set your desired window background color
  };

  return (
    <div>
    
     <NavHome/>
      <div className="container mt-4 " style={{marginBottom:'80px'}}>
        <div className="container "style={windowStyle}>
          <h1>About IntelliMood-AI</h1>
          <p>
            Welcome to IntelliMood-AI, your personal 24/7 companion for a happier you!
          </p>

          <h2>What is IntelliMood-AI?</h2>
          <p>
            IntelliMood-AI is not just your ordinary chatbot; it's a cutting-edge emotional intelligence-powered conversational AI.
            Our mission is to enhance your emotional well-being by providing you with a platform to express your thoughts, feelings, and questions.
          </p>

          <h2>How Does it Work?</h2>
          <p>
            IntelliMood-AI utilizes advanced natural language processing (NLP) and emotion recognition technology to understand your emotions as you chat.
            It's designed to recognize the nuances of your text, allowing it to respond in a compassionate and empathetic manner.
          </p>

          <h2>Key Features:</h2>
          <ul>
            <li><strong>Emotion Recognition:</strong> Our chatbot can understand and respond to your emotions.</li>
            <li><strong>24/7 Support:</strong> Whenever you need someone to talk to, IntelliMood-AI is available.</li>
            <li><strong>Knowledgeable Responses:</strong> Ask any questions you have, and our chatbot will provide insightful and informative answers.</li>
            <li><strong>Privacy Matters:</strong> Your privacy is our priority. Your conversations with IntelliMood-AI are secure and confidential.</li>
          </ul>

          <h2>Why Choose IntelliMood-AI?</h2>
          <p>
            At IntelliMood-AI, we believe that emotional well-being is essential for a fulfilling life.
            Our chatbot is designed to be your virtual friend, offering emotional support, knowledge, and companionship whenever you need it.
          </p>

          <h2>Join Our Community</h2>
          <p>
            Experience the future of emotional support and intelligent conversation with IntelliMood-AI.
            Join our growing community of users who have found comfort and answers through our innovative chatbot.
          </p>

          <p>Have questions or suggestions? Feel free to reach out. We're here to help you on your journey to emotional well-being.</p>
           <Link to="/TheBotPage"> <a> back</a></Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
