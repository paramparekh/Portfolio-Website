"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, GraduationCap, Briefcase, Code, Microscope, Award, BookOpen, Image as ImageIcon } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = [
  { name: "About Me", path: "/", icon: User },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Experience", path: "/experience", icon: Briefcase },
  { name: "Projects", path: "/projects", icon: Code },
  { name: "Research", path: "/research", icon: Microscope },
  { name: "Achievements", path: "/achievements", icon: Award },
  { name: "Blogs", path: "/blogs", icon: BookOpen },
  { name: "Pics", path: "/pics", icon: ImageIcon },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navGlass}>
        <div className={styles.scrollContainer}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            
            return (
              <Link 
                key={item.path} 
                href={item.path}
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
              >
                <Icon size={18} />
                <span>{item.name}</span>
                {isActive && <div className={styles.activeIndicator} />}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
