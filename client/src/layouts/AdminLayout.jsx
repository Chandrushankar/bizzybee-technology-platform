import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, Users } from 'lucide-react';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-dark text-white hidden md:flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary">Bizzybee Admin</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <a href="/admin" className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg transition-colors">
            <LayoutDashboard size={20} />
            Dashboard
          </a>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-left text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 md:hidden">
          <h2 className="text-xl font-bold text-primary">Bizzybee Admin</h2>
          <button onClick={handleLogout} className="p-2 text-gray-600">
            <LogOut size={20} />
          </button>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
