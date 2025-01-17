import Table from "@/components/Table";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { auth } from "@clerk/nextjs/server";
import { Prisma, Subject, Teacher } from "@prisma/client";

type SubjectList = Subject & { teachers: Teacher[] };

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  console.log(role);

  const columns = [
    {
      header: "课程名称",
      accessor: "name",
    },
    {
      header: "授课老师",
      accessor: "teachers",
      className: "hidden md:table-cell",
    },
    {
      header: "操作",
      accessor: "action",
    },
  ];

  const renderRow = (items: SubjectList) => (
    <tr key={items.id} className="">
      <td>{items.name}</td>
      <td className="hidden md:table-cell">
        {items.teachers.map((teacher) => teacher.name).join(",")}
      </td>
      <td>
        <div>{role === "admin" && <>Container</>}</div>
      </td>
    </tr>
  );

  // 从object中活的name field的值，并存储在name变量中，剩余的成员组成一个新的类型，存储在others中

  type ISomeType = { [key: string]: any };
  type Params = { [key: string]: string };
  const { page, ...queryParams } = searchParams;

  const p = page ? parseInt(page) : 1;

  const query: Prisma.SubjectWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.subject.findMany({
      where: query,
      include: {
        teachers: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.subject.count({where: query})
  ]);

  console.log(data);
  console.log(count);

  return <div className="">
    <Table columns={columns} renderRow={renderRow} data={data}/>
  </div>;
};

export default Page;
