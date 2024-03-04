'use client';
import React, { useState } from 'react';

//mock database functions (empty functions for testing)
const mockDatabase = {
  initialize: () => {},
  getUserData: () => ({}),
  updateUserData: () => {},
};

const ProfilePage = () => {
const [userData, setUserData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '1234567890',
});
const [editing, setEditing] = useState(false);
const [newUserData, setNewUserData] = useState({ ...userData });

//handle input change
const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
const { name, value } = e.target;
  setNewUserData({ ...newUserData, [name]: value });
};

//handle edit button click
const handleEditClick = () => {
  setEditing(true);
};

//handle save button click
const handleSaveClick = () => {
  //update user data and exit editing mode
  setUserData({ ...newUserData });
  setEditing(false);
  //save user data to database (mock function)
  mockDatabase.updateUserData();
};

return (
    <div className="profile-container" style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>User Profile</h1>
      {editing ? (
        <div className="profile-form">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={newUserData.fullName}
            onChange={handleInputChange}
            style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #CCCCCC' }}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={userData.email}
            readOnly
            style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #CCCCCC', backgroundColor: '#F5F5F5' }}
          />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={newUserData.phoneNumber}
            onChange={handleInputChange}
            style={{ marginBottom: '10px', padding: '8px', borderRadius: '4px', border: '1px solid #CCCCCC' }}
          />
          <button onClick={handleSaveClick} style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#4CAF50', color: '#FFFFFF', border: 'none', cursor: 'pointer' }}>Save</button>
        </div>
      ) : (
        <div className="profile-details">
          <div>
            <strong>Full Name:</strong> {userData.fullName}
          </div>
          <div>
            <strong>Email:</strong> {userData.email}
          </div>
          <div>
            <strong>Phone Number:</strong> {userData.phoneNumber}
          </div>
          <button onClick={handleEditClick} style={{ marginTop: '20px', padding: '8px 16px', borderRadius: '4px', backgroundColor: '#007BFF', color: '#FFFFFF', border: 'none', cursor: 'pointer' }}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
