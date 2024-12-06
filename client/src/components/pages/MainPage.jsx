import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RunawayButton from '../ui/RunawayButton';
import Footer from '../ui/Footer';

const style = {
  textAlign: 'center',
  marginTop: '20px', 
  minHeight: 'calc(100vh - 100px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center', 
};

const footerStyle = {
  position: 'absolute',
  bottom: '0',
  width: '100%',
};

const buttonRun = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#ff6347',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  margin: '20px',
};

const startButtonStyle = {
  width: '90%', 
  maxWidth: '500px', 
  padding: '12px', 
  fontSize: '18px',
  cursor: 'pointer',
  backgroundColor: '#4682b4',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  marginTop: '20px',
};

export default function MainPage({user}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-page" style={style}>
        <RunawayButton style={buttonRun} />
        <img
          src="/photo_2024-10-03 12.20.56.jpeg"
          alt="Носки!"
          style={{ width: '80%', maxWidth: '900px', marginBottom: '20px' }} 
        />
        <h1>Добро пожаловать!</h1>
        <Button
          onClick={() => {
            if(user.status === "logged"){
            navigate('/constructor')
            } else if(user.status !== "logged"){
              navigate('/account/login')
            }
          }}
          style={startButtonStyle}
        >
          Начать
        </Button>
      </div>
      <Footer style={footerStyle} />
    </>
  );
}