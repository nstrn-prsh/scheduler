import { useState } from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

function Row({
   item,
   isFinished,
   handleRow,
   forceUpdate,
   setForceUpdate,
   ...props
}) {
   const [allRows, setAllRows] = useState(false);

   return (
      <Box
         onClick={
            isFinished
               ? null
               : () => {
                    setAllRows(!allRows);
                    handleRow(item, allRows);
                    setForceUpdate(!forceUpdate);
                 }
         }
         sx={{
            gridArea: item.gridArea,
            px: 1,
            cursor: "pointer",
            // border: "0.2px solid #fff",
            backgroundColor: "rgba(241, 240, 240, 0.5) !important",
            boxShadow:
               "0 0px 0px 0 rgb(0 0 0 / 10%), 0 2px 10px 0 rgb(0 0 0 / 10%) !important",
         }}
      >
         <Typography variant='caption' color='initial'>
            {item.hour}
         </Typography>
      </Box>
   );
}

export default Row;
