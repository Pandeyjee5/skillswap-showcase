import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Profile = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="p-6 bg-white shadow-sm flex items-center gap-4">
        <Link to="/" className="text-gray-400 text-xl">←</Link>
        <h1 className="text-xl font-bold text-gray-800">Account</h1>
      </div>

      <div className="p-5 max-w-md mx-auto">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">JD</div>
          <div>
            <h2 className="font-bold text-lg">John Doe</h2>
            <p className="text-gray-400 text-sm">john.doe@email.com</p>
            <div className="flex gap-2 mt-2">
              <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-lg text-xs font-bold font-mono">🪙 45</span>
              <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-lg text-xs font-bold">Top Teacher</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {[ {l: 'Taught', v: '5'}, {l: 'Learned', v: '3'}, {l: 'Rating', v: '4.8'} ].map((s, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl text-center shadow-sm border border-gray-100">
              <div className="font-black text-gray-800">{s.v}</div>
              <div className="text-[10px] text-gray-400 uppercase font-bold">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {['My Courses', 'Teaching', 'Reviews', 'Settings'].map((item) => (
            <div key={item} className="bg-white p-4 rounded-2xl flex justify-between items-center border border-gray-50 shadow-sm cursor-pointer hover:bg-gray-50 transition">
              <span className="font-bold text-gray-700">{item}</span>
              <span className="text-gray-300">→</span>
            </div>
          ))}
        </div>

        <button onClick={() => signOut(auth)} className="w-full mt-8 py-4 bg-red-50 text-red-500 font-bold rounded-2xl border border-red-100">Sign Out</button>
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white shadow-2xl rounded-3xl p-4 flex justify-around items-center z-50">
        <Link to="/" className="flex flex-col items-center text-gray-400"><span className="text-[10px] font-black uppercase">Home</span></Link>
        <Link to="/explore" className="flex flex-col items-center text-gray-400"><span className="text-[10px] font-black uppercase">Explore</span></Link>
        <Link to="/profile" className="flex flex-col items-center text-indigo-600"><span className="text-[10px] font-black uppercase">Profile</span></Link>
      </div>
    </div>
  );
};

export default Profile;