import * as React from "react";
import Popover from "../Popover";
import TabsBlock from "../TabsNav";

const Navbar = () => {
  return (
    <nav>
      <h1>Рестораны</h1>
      <div
        className="d-flex justify-content-between align-items-center col-lg-12"
        style={{
          backgroundColor: "#f5f4f2",
          borderRadius: "22px",
          marginBottom: "24px",
        }}
      >
        <TabsBlock />
        <Popover buttonText="Сортировка" buttonProps={{ variant: "text" }}>
          <div>Test</div>
        </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
