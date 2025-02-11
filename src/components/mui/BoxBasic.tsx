import { Box } from "@mui/material";
import { extend } from "dayjs";
import { Rectangle } from "recharts";

const BoxBasic = () => {
  interface Squre {
    width: number;
  }

  interface Rectangle extends Squre {
    height: number;
  }

  type Shape = Squre | Rectangle;

  function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
      return shape.width * shape.height;
    } else {
      return shape.width * shape.width;
    }
  }
  return (
    <Box sx={{ p: 2, border: "1px dashed grey" }}>
      {" "}
      This Box renders as an HTML section element.
    </Box>
  );
};

export default BoxBasic;
