import { AppBar, Box, Toolbar } from "@mui/material";
import DataGridDemo from "@/components/DataGridDemo";
import { Button } from "antd";
import PaginationCommunityNoSnap from "@/components/PaginationCommunityNoSnap";

const Page = () => {
  return (
    <Box sx={{ height: '100%' }}>
      <Box sx={{ bgcolor: "lightblue", display: "flex",  flexDirection: "row", justifyContent: "space-between" }}>
        <Box>header title</Box>r
        <Box>
            <Button>button1</Button>
            <Button>button2</Button>
        </Box>
      </Box>
      <DataGridDemo />
    </Box>
  );
};

export default Page;
