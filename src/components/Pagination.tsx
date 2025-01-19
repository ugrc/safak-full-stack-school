"use client";

import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";
import {
  SVGFirstArrow,
  SVGLastArrow,
  SVGNextArrow,
  SVGPrevArrow,
} from "./button";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const navBegin = page - 5 > 0 ? page - 5 : 1;
  const navEnd =
    navBegin + 10 > Math.ceil(count / ITEM_PER_PAGE)
      ? Math.ceil(count / ITEM_PER_PAGE)
      : navBegin + 9;
  const navCount = navEnd - navBegin + 1;

  const hasFirst = page > 1;

  const hasLast = page < navEnd;

  const startRowNo = (page - 1) * ITEM_PER_PAGE + 1;
  const endRowNo = page * ITEM_PER_PAGE < count ? page * ITEM_PER_PAGE : count;

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    // <div className="bg-gray-100 h-8 fixed  bottom-0 z-30 w-full"
    <div className="flex items-center justify-between text-gray-500 p-2">
      <div>{`(${startRowNo} - ${endRowNo}) / ${count} `}</div>
      <div className="flex gap-2 items-center">
        <button
          disabled={!hasFirst}
          className="w-4 h-4 flex items-center"
          onClick={() => {
            changePage(1);
          }}
        >
          <SVGFirstArrow
            className={`rounded-full fill-current ${
              hasFirst ? "text-gray-900" : "text-gray-300"
            } `}
          />
        </button>
        <button
          disabled={!hasPrev}
          className="w-4 h-4"
          onClick={() => {
            changePage(page - 1);
          }}
        >
          <SVGPrevArrow
            className={`rounded-full fill-current ${
              hasPrev ? "text-gray-900" : "text-gray-300"
            } `}
          />
        </button>
        <div className="flex items-center gap-2 text-sm">
          {Array.from({ length: navCount }, (_, index) => {
            const pageIndex = index + navBegin;
            return (
              <button
                key={pageIndex}
                className={`px-2 rounded-sm ${
                  page === pageIndex ? "bg-lamaSky" : ""
                }`}
                onClick={() => {
                  changePage(pageIndex);
                }}
              >
                {pageIndex}
              </button>
            );
          })}
        </div>
        <button
          className="w-4 h-4"
          disabled={!hasNext}
          onClick={() => {
            changePage(page + 1);
          }}
        >
          <SVGNextArrow
            className={`rounded-full fill-current ${
              hasNext ? "text-gray-900" : "text-gray-300"
            } `}
          />
        </button>
        <button
          className="w-4 h-4"
          disabled={!hasLast}
          onClick={() => {
            changePage(Math.ceil(count / ITEM_PER_PAGE));
          }}
        >
          <SVGLastArrow
            className={`rounded-full fill-current ${
              hasLast ? "text-gray-900" : "text-gray-300"
            } `}
          />
        </button>
      </div>
      <div>pagesize</div>
    </div>
  );
};

export default Pagination;
