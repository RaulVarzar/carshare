import "./hamburger.css";

const SideMenu = () => {
  return (
    <div className="fixed top-6 right-6 p-6 aspect-square grid place-content-center rounded-full bg-neutral-content md:top-8 md:right-8 lg:top-12 lg:right-12  z-[999]">
      <label className="burger  " for="burger">
        <input type="checkbox" id="burger" />
        <span className="bg-base-content"></span>
        <span className="bg-base-content"></span>
        <span className="bg-base-content"></span>
      </label>
    </div>
  );
};

export default SideMenu;
