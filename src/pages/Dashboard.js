import React from 'react';
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const courses = [
    { id: 1, title: "Public Speaking Mastery", teacher: "Sarah Chen", rating: 4.8, price: 15, category: "Communication", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=300&q=80" },
    { id: 2, title: "Web Development Basics", teacher: "Alex Rivera", rating: 4.9, price: 20, category: "Tech", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80" },
    { id: 3, title: "Guitar for Beginners", teacher: "Mia Thompson", rating: 4.7, price: 12, category: "Music", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=300&q=80" },
    { id: 4, title: "Watercolor Painting", teacher: "James Lee", rating: 4.6, price: 10, category: "Art", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&q=80" },
    { id: 5, title: "Spanish Basics", teacher: "Maria Lopez", rating: 4.5, price: 18, category: "Language", img: "https://images.unsplash.com/photo-1543165796-5426273eaab3?auto=format&fit=crop&w=300&q=80" },
    { id: 6, title: "Digital Marketing", teacher: "Tom Wilson", rating: 4.8, price: 22, category: "Business", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80" },
    { id: 7, title: "Python for Data Science", teacher: "Dr. Aris", rating: 4.9, price: 25, category: "Tech", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&q=80" },
    { id: 8, title: "UX/UI Design Theory", teacher: "Elena Rossi", rating: 4.7, price: 15, category: "Design", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=300&q=80" },
    { id: 9, title: "Photography 101", teacher: "Sam Ray", rating: 4.6, price: 12, category: "Art", img: "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?auto=format&fit=crop&w=300&q=80" },
    { id: 10, title: "Financial Literacy", teacher: "Mark Cubed", rating: 4.4, price: 30, category: "Finance", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=300&q=80" },
    { id: 11, title: "Yoga & Mindfulness", teacher: "Luna Sky", rating: 4.9, price: 8, category: "Wellness", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=300&q=80" },
    { id: 12, title: "C Programming Masterclass", teacher: "Dev Guru", rating: 4.8, price: 15, category: "Tech", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=300&q=80" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="sticky top-0 z-10 p-4 bg-white flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-black text-indigo-600 tracking-tight">SkillSwap AI</h1>
        <div className="flex items-center gap-3">
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-bold">🪙 45</span>
            <button onClick={() => signOut(auth)} className="px-4 py-2 text-sm font-semibold text-gray-600 border rounded-xl hover:bg-gray-100 transition">Logout</button>
        </div>
      </div>

      <div className="p-5 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-500 p-8 rounded-3xl text-white mb-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-2">Welcome back, User! 👋</h2>
          <p className="text-indigo-100 mb-4">You've taught 3 courses this month and earned 25 credits.</p>
          <button className="bg-white text-indigo-600 px-6 py-2 rounded-xl font-bold text-sm shadow-sm">Start Teaching</button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-extrabold text-gray-900">Popular Courses</h3>
          <Link to="/explore" className="text-indigo-600 text-sm font-bold cursor-pointer">View All</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="relative">
                <img src={course.img} alt={course.title} className="w-full h-44 object-cover" />
                <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-black tracking-widest text-white bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg uppercase">{course.category}</span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1">{course.title}</h4>
                <p className="text-sm text-gray-400 mb-4">by {course.teacher}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-bold text-gray-700">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-black text-indigo-600">🪙 {course.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-4 flex justify-around items-center z-50">
        <Link to="/" className="flex flex-col items-center text-indigo-600">
            <span className="text-[10px] font-black uppercase">Home</span>
        </Link>
        <Link to="/explore" className="flex flex-col items-center text-gray-400">
            <span className="text-[10px] font-black uppercase">Explore</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-gray-400">
            <span className="text-[10px] font-black uppercase">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;