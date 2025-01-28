import Image from "next/image";
import { Breadcrumb, Button } from "antd";

const Page = () => {
  return (
    <div className="">
      <div className="border-b-[1px] border-gray-400 bg-gray-100 ml-2 p-1">
        <nav>
          <Breadcrumb
            items={[
              {
                title: <a href="/list/adfs">列表</a>,
              },
              {
                title: "新建合规文件",
              },
            ]}
          />
        </nav>
      </div>
      <div className="flex flex-row justify-between p-1 pr-2 pl-2">
        <div className="gap-1">
          <h1 className="font-bold">新建合规文件</h1>
          <div className="py-2">
            <div className="text-xs text-gray-500">记录类型</div>
            <div className="text-base text-gray-900">合规文件</div>
          </div>
        </div>
        <div>
          <Button type="primary">保存</Button>
        </div>
      </div>
      <div className="flex flex-row justify-between h-screen">
        <div className="flex-1">
          <div className="border-collapse">详情</div>
          <div className="py-2 p-2">
            <div className="">
              <h2 className="font-bold">基本</h2>
            </div>
            <div>
              <h2 className="font-bold">日期</h2>
            </div>
            <div>
              <h2 className="font-bold">设置</h2>
            </div>
          </div>
        </div>
        <div className="w-12">R</div>
      </div>
    </div>
  );
};

export default Page;
