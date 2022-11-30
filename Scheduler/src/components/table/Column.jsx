import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
//react
import { useState } from "react";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function Column({
   item,
   isFinished,
   handleColumn,
   forceUpdate,
   setForceUpdate,
   weeksEnable,
   ...props
}) {
   const [allCol, setAllCol] = useState(true);
   const today = new DateObject().setCalendar(persian).setLocale(persian_fa);

   return (
      <Box
         onClick={
            isFinished
               ? null
               : () => {
                    setAllCol(!allCol);
                    handleColumn(item, allCol);
                    setForceUpdate(!forceUpdate);
                 }
         }
         sx={{
            cursor: "pointer",
            gridArea: item.gridArea,
            textAlign: "center",
            backgroundColor: "rgba(241, 240, 240, 0.5) !important",
            boxShadow:
               "0 0px 0px 0 rgb(0 0 0 / 10%), 0 2px 10px 0 rgb(0 0 0 / 10%) !important",
         }}
      >
         <Typography
            variant='overline'
            component='p'
            color={item.date?.day === today?.day ? "green" : "initial"}
            sx={{
               fontSize: {
                  mobile: "0.5rem",
                  laptop: "0.7rem",
               },
            }}
         >
            {item.date?.weekDay.name}
         </Typography>
         {weeksEnable ? (
            <Typography
               variant='caption'
               sx={{
                  lineHeight: "2px",
                  fontSize: {
                     mobile: "0.6rem",
                     laptop: "0.7rem",
                  },
               }}
               component='p'
               color={item.date?.day === today?.day ? "green" : "initial"}
            >
               {item.date.format("MM/DD")}
            </Typography>
         ) : null}
      </Box>
   );
}

export default Column;
