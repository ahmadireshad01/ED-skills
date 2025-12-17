import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import box from '../../../public/images/box.svg';

// Temporary placeholder UI components
const Button = (props: any) => <button {...props} />;
const Input = (props: any) => <input {...props} />;
const Select = (props: any) => <select {...props} />;
const SelectTrigger = (props: any) => <>{props.children}</>;
const SelectValue = (props: any) => <option>{props.children}</option>;
const SelectContent = (props: any) => <>{props.children}</>;
const SelectItem = (props: any) => <option>{props.children}</option>;
const RadioGroup = (props: any) => <div {...props} />;
const RadioGroupItem = (props: any) => <input type="radio" {...props} />;

interface EditProfilePopupProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function EditProfilePopup({
  open,
  setOpen,
}: EditProfilePopupProps) {
  // ✅ Hook moved inside component
  const [gender, setGender] = useState('male');

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40">
      <div className="bg-[#F7F6F0] h-screen overflow-y-auto  p-6 shadow-2xl max-w-lg w-full animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <ArrowLeft size={20} />
            <span className="text-gray-700 font-medium">Cancel</span>
          </div>
          <button
            className="border rounded-full"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <h2 className="text-[32px] font-bold leading-9 mt-[40px]">
          Change Account <br /> Information
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Change Account information.
        </p>

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">First name</label>
            <Input
              defaultValue="Sofia"
              className="mt-1 border rounded-[12px] p-3"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Last Name</label>
            <Input
              defaultValue="Vargara"
              className="mt-1 border rounded-[12px] p-3"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-4">
          <label className="text-sm font-medium">Email Address</label> <br />
          <div className="flex p-4 border rounded-[12px]">
            <Input
              defaultValue="Sofia@example.com"
              className="mt-1 border-none focus:outline-none focus:ring-0 w-full"
            />
            <img src={box} alt="" />
          </div>
        </div>

        {/* Birthdate */}
        <div className="mt-4">
          <label className="text-sm font-medium">Birthdate *</label>
          <div className="grid grid-cols-3 gap-3 mt-1">
            {/* Month */}
            <Select className="border rounded-[12px] p-1">
              <SelectTrigger className="p-2">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {[
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ].map((month, index) => (
                  <SelectItem key={index} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Day */}
            <Select className="border rounded-[12px] p-1">
              <SelectTrigger className="p-2">
                <SelectValue placeholder="Day" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                  <SelectItem key={day} value={day.toString()}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Year */}
            <Select className="border rounded-[12px] p-1">
              <SelectTrigger className="p-2">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 50 }, (_, i) => 2025 - i).map(year => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Gender */}
        <div className="mt-4">
          <label className="text-sm font-medium mb-2 block">Gender</label>
          <div className="flex gap-4">
            {/* Male */}
            <div
              onClick={() => setGender('male')}
              className={`flex items-center justify-between cursor-pointer px-4 py-2 rounded-lg border w-32
            ${gender === 'male' ? 'border-none' : 'border-gray-300'}`}
            >
              <span>Male</span>
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center
            ${
              gender === 'male'
                ? 'border-orange-500 bg-orange-500'
                : 'border-gray-300'
            }`}
              ></span>
            </div>

            {/* Female */}
            <div
              onClick={() => setGender('female')}
              className={`flex items-center justify-between cursor-pointer px-4 py-2 rounded-lg border w-32
            ${gender === 'female' ? 'border-none' : 'border-gray-300'}`}
            >
              <span>Female</span>
              <span
                className={`w-5 h-5 rounded-full border flex items-center justify-center
            ${gender === 'female' ? ' bg-orange-500' : 'border-gray-300'}`}
              ></span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <Button variant="outline" className="px-6 py-2 rounded-xl">
            Cancel
          </Button>
          <Button className="px-6 py-2 rounded-xl bg-black text-white">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
