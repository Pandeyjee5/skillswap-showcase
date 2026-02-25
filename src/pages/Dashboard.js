import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db, auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const { user, userData } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList = querySnapshot.docs.map(doc => doc.data());
      // Show everyone except the logged-in user
      setUsers(usersList.filter(u => u.uid !== user?.uid));
    };
    if (user) fetchUsers();
  }, [user]);

  // Logic: Do they offer what I want to learn?
  const isMatch = (otherUser) => {
    if (!userData || !otherUser) return false;
    return otherUser.skillsOffered.some(skill => 
      userData.skillsWanted.includes(skill)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-extrabold text-indigo-600 tracking-tight">SkillSwap AI</h1>
          <button onClick={() => auth.signOut()} className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100 font-medium">
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((otherUser) => (
            <div key={otherUser.uid} className={`bg-white p-6 rounded-2xl shadow-sm border-2 transition-all ${isMatch(otherUser) ? "border-green-400 ring-4 ring-green-50" : "border-transparent"}`}>
              {isMatch(otherUser) && (
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                  ✨ RECOMMENDED MATCH
                </span>
              )}
              <h2 className="text-xl font-bold text-gray-900">{otherUser.name}</h2>
              <p className="text-gray-500 text-sm mt-1 mb-4">{otherUser.bio}</p>

              <div className="space-y-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400">Can Teach</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {otherUser.skillsOffered.map((s, i) => (
                      <span key={i} className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-400">Wants to Learn</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {otherUser.skillsWanted.map((s, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-indigo-600 text-white py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-md shadow-indigo-100">
                Request Swap
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;