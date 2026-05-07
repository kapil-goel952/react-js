
import Card from './comonents/card'
import React from 'react'


function App() {
   const people = [
  {
    id: 1,
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Rahul Sharma",
    rank: "Junior Frontend Developer",
    followers: "12.5K",
    following: 320
  },
  {
    id: 2,
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Priya Verma",
    rank: "Senior UI/UX Designer",
    followers: "45K",
    following: 410
  },
  {
    id: 3,
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Aman Gupta",
    rank: "Backend Developer",
    followers: "18K",
    following: 290
  },
  {
    id: 4,
    profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Sneha Kapoor",
    rank: "Senior React Developer",
    followers: "60K",
    following: 500
  },
  {
    id: 5,
    profilePic: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Rohan Mehta",
    rank: "Full Stack Developer",
    followers: "28K",
    following: 350
  },
  {
    id: 6,
    profilePic: "https://randomuser.me/api/portraits/women/60.jpg",
    name: "Neha Singh",
    rank: "Junior Web Developer",
    followers: "9K",
    following: 180
  },
  {
    id: 7,
    profilePic: "https://randomuser.me/api/portraits/men/71.jpg",
    name: "Karan Malhotra",
    rank: "Senior Software Engineer",
    followers: "80K",
    following: 620
  },
  {
    id: 8,
    profilePic: "https://randomuser.me/api/portraits/women/81.jpg",
    name: "Anjali Roy",
    rank: "Frontend Engineer",
    followers: "22K",
    following: 270
  },
  {
    id: 9,
    profilePic: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Vikas Yadav",
    rank: "MERN Stack Developer",
    followers: "35K",
    following: 430
  },
  {
    id: 10,
    profilePic: "https://randomuser.me/api/portraits/women/95.jpg",
    name: "Simran Kaur",
    rank: "Senior Backend Developer",
    followers: "54K",
    following: 390
  }
];
   

   return (
      <div className="parent">
         {people.map(function(elem){
            return(
               Card(elem)
               
            )
         })}
      </div>
   )
}
export default App









