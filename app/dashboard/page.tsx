'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ContactInfo {
  No: string;
  tel: string;
  mail: string;
  baseUrl: string;
  host: string;
  name: string;
  address: string;
  service: string;
  location: string;
  zipCode: string;
  bannerImage: string;
  logoImage: string;
}

export default function Dashboard() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    No: '',
    tel: '',
    mail: '',
    baseUrl: '',
    host: '',
    name: '',
    address: '',
    service: '',
    location: '',
    zipCode: '',
    bannerImage: '',
    logoImage: ''
  });
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
      return;
    }

    // Fetch contact info
    fetch('/api/get-contact-info')
      .then(res => res.json())
      .then(data => setContactInfo(data))
      .catch(() => alert('Failed to load data'));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/update-contact-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactInfo),
      });

      if (response.ok) {
        alert('Data saved!');
      } else {
        alert('Failed to save data');
      }
    } catch (error) {
      alert('Failed to save data');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Phone Number</label>
            <input
              type="text"
              value={contactInfo.No}
              onChange={(e) => setContactInfo({ ...contactInfo, No: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Telephone</label>
            <input
              type="text"
              value={contactInfo.tel}
              onChange={(e) => setContactInfo({ ...contactInfo, tel: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={contactInfo.mail}
              onChange={(e) => setContactInfo({ ...contactInfo, mail: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Business Name</label>
            <input
              type="text"
              value={contactInfo.name}
              onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Address</label>
            <input
              type="text"
              value={contactInfo.address}
              onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Service</label>
            <input
              type="text"
              value={contactInfo.service}
              onChange={(e) => setContactInfo({ ...contactInfo, service: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Location</label>
            <input
              type="text"
              value={contactInfo.location}
              onChange={(e) => setContactInfo({ ...contactInfo, location: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Zip Code</label>
            <input
              type="text"
              value={contactInfo.zipCode}
              onChange={(e) => setContactInfo({ ...contactInfo, zipCode: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Banner Image URL</label>
            <input
              type="text"
              value={contactInfo.bannerImage}
              onChange={(e) => setContactInfo({ ...contactInfo, bannerImage: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Logo Image URL</label>
            <input
              type="text"
              value={contactInfo.logoImage}
              onChange={(e) => setContactInfo({ ...contactInfo, logoImage: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
} 