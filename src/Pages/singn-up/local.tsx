import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClearLocalStorage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear all localStorage
    localStorage.clear();

    // Optional: show a message for 1 second and redirect
    setTimeout(() => {
      navigate('/login'); // redirect to login or any page
    }, 1000);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <p className="text-[#FF613E] text-lg font-semibold">
        All localStorage data cleared!
      </p>
    </div>
  );
}
