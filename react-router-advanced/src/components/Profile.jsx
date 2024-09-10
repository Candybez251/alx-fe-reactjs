import React from 'react';
import { Link, Outlet, Routes, Route } from 'react-router-dom'; // Ensure Routes and Route are imported
import ProfileDetails from './ProfileDetails'; // Import ProfileDetails component
import ProfileSettings from './ProfileSettings'; // Import ProfileSettings component

const Profile = () => {
    return (
        <div>
            <h2>User Profile</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="details">Profile Details</Link> {/* Link to nested route */}
                    </li>
                    <li>
                        <Link to="settings">Profile Settings</Link> {/* Link to nested route */}
                    </li>
                </ul>
            </nav>

            {/* Nested Routes Definition */}
            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>
        </div>
    );
};

export default Profile;