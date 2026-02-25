import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", bio: "", offered: "", wanted: "" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        bio: formData.bio,
        skillsOffered: formData.offered.split(",").map(s => s.trim()),
        skillsWanted: formData.wanted.split(",").map(s => s.trim()),
        createdAt: serverTimestamp()
      });
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">Join SkillSwap</h2>
        <input className="w-full p-3 mb-3 border rounded" placeholder="Full Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input className="w-full p-3 mb-3 border rounded" type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input className="w-full p-3 mb-3 border rounded" type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
        <textarea className="w-full p-3 mb-3 border rounded" placeholder="Short Bio" onChange={(e) => setFormData({...formData, bio: e.target.value})} />
        <input className="w-full p-3 mb-3 border rounded" placeholder="Skills you Offer (e.g. Python, Math)" onChange={(e) => setFormData({...formData, offered: e.target.value})} />
        <input className="w-full p-3 mb-6 border rounded" placeholder="Skills you Want (e.g. Design, Spanish)" onChange={(e) => setFormData({...formData, wanted: e.target.value})} />
        <button className="w-full bg-indigo-600 text-white p-3 rounded font-bold hover:bg-indigo-700">Register</button>
        <p className="mt-4 text-center text-sm">Have an account? <Link to="/login" className="text-indigo-600 font-bold">Login</Link></p>
      </form>
    </div>
  );
};
export default Register;