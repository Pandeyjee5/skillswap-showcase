import React, { useState } from 'react'; // Added useState
import { Link } from 'react-router-dom';
const Explore = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Tracks what you type
  const categories = ['All', 'Tech', 'Music', 'Art', 'Language', 'Business'];
  
  const allCourses = [
    { id: 1, title: "Public Speaking Mastery", teacher: "Sarah Chen", rating: 4.8, price: 15, category: "Communication", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=300&q=80" },
    { id: 2, title: "Web Development Basics", teacher: "Alex Rivera", rating: 4.9, price: 20, category: "Tech", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80" },
    { id: 3, title: "Guitar for Beginners", teacher: "Mia Thompson", rating: 4.7, price: 12, category: "Music", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=300&q=80" },
    { id: 4, title: "Watercolor Painting", teacher: "James Lee", rating: 4.6, price: 10, category: "Art", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&q=80" }
  ];

  // Logic to filter the list as you type
  const filteredCourses = allCourses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="p-6 bg-white sticky top-0 z-10 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">Explore Skills</h1>
        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder="Search e.g. 'Tech' or 'Guitar'..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Updates as you type
            className="w-full bg-gray-100 border-none rounded-2xl py-4 px-12 text-sm focus:ring-2 focus:ring-indigo-500"
          />
          <span className="absolute left-4 top-4 text-gray-400">🔍</span>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setSearchQuery(cat === 'All' ? "" : cat)} // Clicking category filters list
              className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap border ${searchQuery.toLowerCase() === cat.toLowerCase() ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-500 border-gray-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition">
            <img src={course.img} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h4 className="font-bold text-gray-900 mb-1">{course.title}</h4>
              <p className="text-xs text-gray-400 mb-4">by {course.teacher}</p>
              <div className="flex justify-between items-center text-xs font-bold">
                <div className="flex items-center gap-1"><span className="text-yellow-400">⭐</span> {course.rating}</div>
                <div className="text-indigo-600 text-sm font-black font-mono">🪙 {course.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-4 flex justify-around items-center z-50">
        <Link to="/" className="text-gray-400 text-[10px] font-black uppercase">Home</Link>
        <Link to="/explore" className="text-indigo-600 text-[10px] font-black uppercase">Explore</Link>
        <Link to="/profile" className="text-gray-400 text-[10px] font-black uppercase">Profile</Link>
      </div>
    </div>
  );
};

export default Explore;