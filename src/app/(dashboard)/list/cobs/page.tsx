import FormContainer from "@/components/FormContainer";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { auth } from "@clerk/nextjs/server";
import { Cit, Cob, Prisma } from "@prisma/client";
import Image from "next/image";


type CobList = Cob & { cits: Cit[] };

const CobListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  const columns = [
    {
      header: "控制目标名称",
      accessor: "name",
    },

    {
      header: "控制目标内容",
      accessor: "description",
      //   该列缺省将不显示，但当屏幕大小是md时，将显示table-cell.
      className: "hidden md:table-cell",
    },

    {
      header: "关联合规条文",
      accessor: "cits",
      //   该列缺省将不显示，但当屏幕大小是md时，将显示table-cell.
      className: "hidden md:table-cell",
    },
    {
      header: "操作",
      accessor: "action",
    },
  ];

  const renderRow = (item: CobList) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>

      <td className="hidden md:table-cell">{item.description}</td>
      <td className="hidden md:table-cell">
        {item.cits.map((cit) => cit.name).join(",")}
      </td>
      <td className="flex items-center gap-2">
        {role === "admin" && (
          <>
            <FormContainer type="update" table="cob" data={item} />
            <FormContainer type="delete" table="cob" id={item.id} />
          </>
        )}
      </td>
    </tr>
  );

  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  const query: Prisma.CobWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.description = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.cob.findMany({
      where: query,
      include: {
        cits: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.cob.count({ where: query }),
  ]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">控制目标列表</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src={"/sort.png"} alt={""} width={14} height={14} />
            </button>
            {role === "admin" && (
              // <button
              //   className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"
              //   onClick={() => {
              //     console.log("hello");
              //   }}
              // >
              //   <Image src={"/create.png"} alt={""} width={14} height={14} />
              // </button>
              <FormContainer table="cob" type="create" />
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default CobListPage;
