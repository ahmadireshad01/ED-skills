import React, { useState } from 'react';
import EditProfilePopup from './EditProfilePopup';
import profile from '../../../public/images/profile.svg';
// import { Pen } from 'lucide-react';
import pen from '../../../public/images/pens.svg';
// import EditProfilePopup from './EditProfilePopup';

interface ProfilePopupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  width?: string;
}

export default function ProfilePopup({
  open,
  setOpen,
  width = '500px',
}: ProfilePopupProps) {
  if (!open) return null;

  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex justify-center md:justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar popup */}
      <div
        className="relative bg-white h-full shadow-xl p-4 sm:p-6 w-full max-w-md sm:max-w-lg md:max-w-none animate-slideLeft"
        style={{ width: '100%', maxWidth: width }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => setOpen(false)} className="text-gray-500">
            Cancel
          </button>
          <div className="flex gap-1 items-center">
            <h2 className="font-semibold text-[16px]">Edit Profile</h2>
            <img className="w-" src={pen} alt="" />
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-28 h-28 ">
            <img className="" src={profile} alt="My Photo" />
            {/* Edit button */}
            <button
              className="absolute cursor-pointer bottom-1 right-1 bg-white p-1 rounded-full shadow"
              onClick={() => setIsEditOpen(true)} // Open edit profile popup
            >
              <img src={pen} alt="" />
            </button>
          </div>

          {/* Edit Profile Popup */}
          <EditProfilePopup open={isEditOpen} setOpen={setIsEditOpen} />
        </div>

        {/* Info Fields */}
        <div className="space-y-4">
          <button className="w-full text-left p-3 bg-gray-100 rounded-xl">
            Full Name
          </button>
          <button className="w-full text-left p-3 bg-gray-100 rounded-xl">
            Email Address
          </button>
          <button className="w-full text-left p-3 bg-gray-100 rounded-xl">
            Gender
          </button>
          <button className="w-full text-left p-3 bg-gray-100 rounded-xl">
            Birthday
          </button>
        </div>

        {/* Logout Button */}
        <button className="w-full bg-red-600 text-white mt-6 p-3 rounded-xl">
          Logout
        </button>
      </div>
    </div>
  );
}
