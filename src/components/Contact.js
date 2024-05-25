import React, { useState, useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEdit, FaTrash } from 'react-icons/fa';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = { email, message };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
    setEmail('');
    setMessage('');
  };

  const handleDelete = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages));
  };

  const handleEdit = (index) => {
    const messageToEdit = messages[index];
    setEmail(messageToEdit.email);
    setMessage(messageToEdit.message);
    handleDelete(index);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 mt-8">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center text-purple-500 mb-12">Kontak Saya</h1>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-md mb-8">
            <h2 className="text-2xl font-bold text-purple-500 mb-4">Formulir Kontak</h2>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 mt-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400">Pesan</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 mt-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:border-purple-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Kirim
              </button>
            </form>

            {messages.length > 0 && (
              <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-purple-500 mb-4">Pesan yang Dikirim:</h3>
                {messages.map((msg, index) => (
                  <div key={index} className="relative text-gray-400 mb-4 p-4 bg-gray-900 rounded-lg">
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-transparent hover:text-purple-600 text-purple-400 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-transparent hover:text-purple-600 text-purple-400 font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline"
                      >
                        <FaTrash />
                      </button>
                    </div>
                    <p><strong>Email:</strong> {msg.email}</p>
                    <p><strong>Pesan:</strong> {msg.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-purple-500 mb-4 text-center">Sosial Media</h2>
            <ul className="flex justify-around space-x-4 text-center">
              <li className="mb-2">
                <a href="https://twitter.com/ri2_one" className="text-purple-400 hover:text-purple-600 text-2xl">
                  <FaTwitter />
                </a>
              </li>
              <li className="mb-2">
                <a href="https://linkedin.com/in/m-riduan-a00255233" className="text-purple-400 hover:text-purple-600 text-2xl">
                  <FaLinkedin />
                </a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/RiduanWan" className="text-purple-400 hover:text-purple-600 text-2xl">
                  <FaGithub />
                </a>
              </li>
              <li className="mb-2">
                <a href="https://instagram.com/rdxnone_" className="text-purple-400 hover:text-purple-600 text-2xl">
                  <FaInstagram />
                </a>
              </li>
              <li className="mb-2">
                <a href="https://wa.me/+6285974613552" className="text-purple-400 hover:text-purple-600 text-2xl">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
