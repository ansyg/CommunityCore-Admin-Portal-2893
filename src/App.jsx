import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./components/theme-provider";
import Sidebar from './components/layout/Sidebar';
import UserManagement from './components/UserManagement';
import Analytics from './components/Analytics';
import NotFound from './components/NotFound';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className="flex h-screen bg-background">
          <Sidebar />
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/users/*" element={<UserManagement />} />
              <Route path="/analytics/*" element={<Analytics />} />
              <Route path="/" element={
                <div className="p-6">
                  <h1 className="text-2xl font-bold mb-4">Welcome to Community Portal Admin</h1>
                  <p className="text-muted-foreground">Select a menu item to get started.</p>
                </div>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;