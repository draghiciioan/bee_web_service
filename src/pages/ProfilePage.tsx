import React from 'react';
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  if (!user) return <div className="text-center mt-10">Nu ești autentificat.</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-sm bg-base-100/80 border border-primary/40 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 animate-float glassmorphism">
        <h2 className="text-2xl font-bold text-primary mb-2 text-center">Profilul meu</h2>
        <div className="flex flex-col gap-2">
          <div><b>Nume:</b> {user.name || '-'}</div>
          <div><b>Email:</b> {user.email}</div>
          <div><b>Rol:</b> {user.role || '-'}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
