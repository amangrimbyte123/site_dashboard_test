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
  const [jsonData, setJsonData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/login');
      return;
    }

    // Fetch contact info
    fetchContactInfo();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/login');
  };

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('/api/get-contact-info');
      if (response.ok) {
        const data = await response.json();
        setContactInfo(data);
      }
    } catch (error) {
      alert('Failed to fetch contact information');
    }
  };

  const handleContactInfoChange = (field: keyof ContactInfo, value: string) => {
    setContactInfo(prev => ({
      ...prev,
      [field]: value
    }));
    setHasChanges(true);
  };

  const handleContactInfoSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/update-contact-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactInfo),
      });

      if (!response.ok) {
        throw new Error('Failed to update contact information');
      }

      alert('Contact information updated successfully');
      setHasChanges(false);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to update contact information');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLocationSubmit = async () => {
    try {
      setIsLoading(true);
      const parsedData = JSON.parse(jsonData);
      
      const response = await fetch('/api/update-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update content');
      }

      alert('Location added successfully');
      setJsonData('');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Invalid JSON format');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>

      {/* Contact Information Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Contact Information</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              value={contactInfo.No}
              onChange={(e) => handleContactInfoChange('No', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Telephone</label>
            <input
              type="text"
              value={contactInfo.tel}
              onChange={(e) => handleContactInfoChange('tel', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={contactInfo.mail}
              onChange={(e) => handleContactInfoChange('mail', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Business Name</label>
            <input
              type="text"
              value={contactInfo.name}
              onChange={(e) => handleContactInfoChange('name', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              value={contactInfo.address}
              onChange={(e) => handleContactInfoChange('address', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Service</label>
            <input
              type="text"
              value={contactInfo.service}
              onChange={(e) => handleContactInfoChange('service', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              value={contactInfo.location}
              onChange={(e) => handleContactInfoChange('location', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Zip Code</label>
            <input
              type="text"
              value={contactInfo.zipCode}
              onChange={(e) => handleContactInfoChange('zipCode', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Banner Image URL</label>
            <input
              type="text"
              value={contactInfo.bannerImage}
              onChange={(e) => handleContactInfoChange('bannerImage', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Logo Image URL</label>
            <input
              type="text"
              value={contactInfo.logoImage}
              onChange={(e) => handleContactInfoChange('logoImage', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={handleContactInfoSubmit}
            disabled={isLoading || !hasChanges}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isLoading || !hasChanges
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading ? 'Updating...' : 'Update Contact Information'}
          </button>
        </div>
      </div>

      {/* Add More Locations Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Add More Locations</h1>
        </div>
        <div className="space-y-4">
          <textarea
            placeholder="Paste your JSON data here..."
            value={jsonData}
            onChange={(e) => setJsonData(e.target.value)}
            className="w-full min-h-[300px] p-4 border border-gray-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleLocationSubmit}
            disabled={isLoading || !jsonData.trim()}
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isLoading || !jsonData.trim()
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading ? 'Submitting...' : 'Add Location'}
          </button>
        </div>
      </div>
    </div>
  );
} 