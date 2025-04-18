import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen">
      <header>
        <div className="bg-[#1C1C1C] py-10 px-6 text-white">
          <h1 className="text-3xl font-bold">NY Times Most Popular Article</h1>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
