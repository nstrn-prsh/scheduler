import { Box } from "@mui/system";
import { cells } from "./tableData";

function Cell({
   item,
   isFinished,
   handleCell,
   forceUpdate,
   setForceUpdate,
   selectedData,
   ...props
}) {

   if (selectedData || selectedData != undefined) {
      cells.map((cell) => {
         for (let day in selectedData) {
            if (
               day == cell.dayVal &&
               selectedData[day].includes(cell.hourVal)
            ) {
               cell.selected = true;
               break;
            }
         }
      });
   }

   return (
      <Box
         onClick={
            isFinished
               ? null
               : () => {
                    handleCell(item);
                    setForceUpdate(!forceUpdate);
                 }
         }
         // onDrag={(e) => console.log("on drag")}
         // onDragOver={(e) => console.log("on drag over")}
         // onDragEnd={() => setForceUpdate(!forceUpdate)}
         sx={{
            gridArea: item.gridArea,
            backgroundColor: item.selected
               ? "#1976d2"
               : "rgba(241, 240, 240, 0) !important",
            cursor: "pointer",
            border: "0.2px solid #fff",
         }}
      ></Box>
   );
}

export default Cell;
