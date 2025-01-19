import * as React from "react";

export const SVGFirstArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
    <path d="M2 2.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12Zm6.854.646a.5.5 0 0 1 0 .708L4.707 8H14.5a.5.5 0 0 1 0 1H4.707l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0Z" />
  </svg>
);

export const SVGPrevArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
    <path d="M6.854 13.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 1 1 .708.708L2.707 8H14.5a.5.5 0 0 1 0 1H2.707l4.147 4.146Z" />
  </svg>
);

export const SVGNextArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
    <path d="M9.146 13.146a.5.5 0 0 0 .708.708l5-5a.5.5 0 0 0 0-.708l-5-5a.5.5 0 1 0-.708.708L13.293 8H1.5a.5.5 0 0 0 0 1h11.793l-4.147 4.146Z" />
  </svg>
);

export const SVGLastArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
    <path d="M14 2.5a.5.5 0 0 1 1 0v12a.5.5 0 0 1-1 0v-12Zm-6.854.646a.5.5 0 0 0 0 .708L11.293 8H1.5a.5.5 0 0 0 0 1h9.793l-4.147 4.146a.5.5 0 0 0 .708.708l5-5a.5.5 0 0 0 0-.708l-5-5a.5.5 0 0 0-.708 0Z" />
  </svg>
);
