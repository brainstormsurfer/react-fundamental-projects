import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./../data";
import { nanoid } from "nanoid";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <div className="sub-links">
        {sublinks.map((item) => {
       const {links, page, pageId} = item
          return <article key={pageId}>
            <h4>{page}</h4>
            <div className="sidebar-sublinks">
              {links.map((link) => {
                const {url, icon, label, id} = link
                return <a key={id} href={url}>
                  {icon} {label}
                </a>
              })}
            </div>
          </article>
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
