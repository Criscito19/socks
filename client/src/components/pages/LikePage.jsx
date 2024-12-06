import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import LikeCard from '../ui/LikeCard';
import axiosInstance from '../../api/axiosInstance';
import Footer from '../ui/Footer';
import './LikePage.css'; 

export default function LikePage({ user }) {
  const [currentSock, setCurrentSock] = useState([]);

  const getSock = async () => {
    try {
      const likes = await fetch('/api/likes');
      const socks = await fetch('/api/socks');
      if (socks.status === 200 && likes.status === 200) {
        let res = [];
        for (let i = 0; i < socks.length; i++) {
          for (let j = 0; j < likes.length; j++) {
            if (socks[i].id === likes[j].socksId) {
              res.push(socks[i]);
            }
          }
        }
        const sockFromDb = await res.json();
        setCurrentSock(sockFromDb);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSock();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const res = await axiosInstance.delete(`/socks/${id}`);
      if (res.status === 200) {
        setCurrentSock((prev) => prev.filter((el) => el.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="like-page-container">
      <Row>
        {currentSock.map((el) => (
          <LikeCard
            key={el.id}
            socks={el}
            deleteHandler={deleteHandler}
            user={user}
          />
        ))}
      </Row>
      <Footer />
    </div>
  );
}
