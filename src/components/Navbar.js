"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRound, GraduationCap, BriefcaseBusiness, FolderCode, Microscope, BookOpen, Camera } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";

const navItems = [
  { name: "About Me", icon: UserRound, path: "/" },
  { name: "Education", icon: GraduationCap, path: "/education" },
  { name: "Experience", icon: BriefcaseBusiness, path: "/experience" },
  { name: "Projects", icon: FolderCode, path: "/projects" },
  { name: "Research", icon: Microscope, path: "/research" },
  { name: "Blogs", icon: BookOpen, path: "/blogs" },
  { name: "Pics", icon: Camera, path: "/pics" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <Link href="/" className={styles.identity}>
          <span className={styles.monogram}>PP<span>.</span></span>
          <span className={styles.name}>Param Parekh</span>
          <span className={styles.subtitle}>Computer Science Researcher</span>
        </Link>
      </div>
      <div id="site-navigation" className={styles.navigation}>
        <nav className={styles.navItems} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} aria-current={pathname === item.path ? "page" : undefined} className={`${styles.navItem} ${pathname === item.path ? styles.active : ""}`}><item.icon size={18} aria-hidden="true" /><span>{item.name}</span></Link>
          ))}
        </nav>
        <div className={styles.sidebarFooter}>
          <p>Stony Brook University<br />New York, USA</p>
          <div className={styles.themeControl}><span>Appearance</span><ThemeToggle /></div>
        </div>
      </div>
    </aside>
  );
}
