import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  Home,
  Users,
  GraduationCap,
  Landmark,
  BarChart,
  Settings,
  Menu,
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: 'Dashboard',
    icon: <Home className="h-5 w-5" />,
    path: '/',
  },
  {
    title: 'User Management',
    icon: <Users className="h-5 w-5" />,
    path: '/users',
    submenu: [
      {
        title: 'User List',
        path: '/users/list',
      },
      {
        title: 'Roles',
        path: '/users/roles',
        submenu: [
          {
            title: 'Role Permissions',
            path: '/users/roles/permissions',
          },
        ],
      },
    ],
  },
  {
    title: 'Education Services',
    icon: <GraduationCap className="h-5 w-5" />,
    path: '/education',
    submenu: [
      {
        title: 'Programs',
        path: '/education/programs',
        submenu: [
          {
            title: 'Course Management',
            path: '/education/programs/courses',
            submenu: [
              {
                title: 'Course Content',
                path: '/education/programs/courses/content',
              },
              {
                title: 'Assessments',
                path: '/education/programs/courses/assessments',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Land Services',
    icon: <Landmark className="h-5 w-5" />,
    path: '/land-services',
    submenu: [
      {
        title: 'Property Registry',
        path: '/land-services/registry',
        submenu: [
          {
            title: 'Title Deeds',
            path: '/land-services/registry/deeds',
            submenu: [
              {
                title: 'Deed Types',
                path: '/land-services/registry/deeds/types',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Analytics',
    icon: <BarChart className="h-5 w-5" />,
    path: '/analytics',
    submenu: [
      {
        title: 'Reports',
        path: '/analytics/reports',
        submenu: [
          {
            title: 'Usage Statistics',
            path: '/analytics/reports/usage',
          },
          {
            title: 'Service Performance',
            path: '/analytics/reports/performance',
          },
        ],
      },
    ],
  },
  {
    title: 'Settings',
    icon: <Settings className="h-5 w-5" />,
    path: '/settings',
  },
];

const MenuItem = ({ item, level = 0, collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const isActive = location.pathname === item.path;
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <div className="w-full">
      <motion.div
        className={cn(
          "flex items-center py-2 px-3 rounded-lg cursor-pointer",
          "transition-colors duration-200",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
          isActive && "bg-gray-100 dark:bg-gray-800",
          level === 0 && "my-1",
          collapsed && level === 0 && "justify-center"
        )}
        style={{ paddingLeft: collapsed ? undefined : `${(level + 1) * 1}rem` }}
        onClick={() => {
          if (hasSubmenu) {
            setIsOpen(!isOpen);
          } else {
            navigate(item.path);
          }
        }}
      >
        {item.icon && (
          <span className={cn("text-gray-500", isActive && "text-primary")}>
            {item.icon}
          </span>
        )}
        {!collapsed && (
          <>
            <span className={cn(
              "ml-3 flex-1 text-sm font-medium",
              isActive && "text-primary"
            )}>
              {item.title}
            </span>
            {hasSubmenu && (
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            )}
          </>
        )}
      </motion.div>
      {!collapsed && hasSubmenu && isOpen && (
        <div className="ml-2 border-l-2 border-gray-200 dark:border-gray-700">
          {item.submenu.map((subItem, index) => (
            <MenuItem key={index} item={subItem} level={level + 1} collapsed={collapsed} />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const SidebarContent = ({ collapsed }) => (
    <div className={cn(
      "flex flex-col h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800",
      collapsed ? "w-20" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        {!collapsed && <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Community Portal</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} collapsed={collapsed} />
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <SidebarContent collapsed={collapsed} />
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 m-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <SidebarContent collapsed={false} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;