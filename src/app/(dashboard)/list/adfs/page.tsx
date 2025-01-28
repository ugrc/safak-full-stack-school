import Image from "next/image";
import { Breadcrumb } from "antd";

const Page = () => {
  return (
    <div className="">
      <div className="border-b-[1px] border-gray-400 ml-2">
        <nav>
          <Breadcrumb
            items={[
              {
                title: "Home",
              },
              {
                title: <a href="">Application Center</a>,
              },
              {
                title: <a href="">Application List</a>,
              },
              {
                title: "An Application",
              },
            ]}
          />
        </nav>
      </div>
      {/* list-container */}
      <div>
        <div>list-header</div>
        {/* list-grid-container */}
        <div>list-grid-container</div>
        <div>list-footer</div>
      </div>
    </div>
  );
};

export default Page;
