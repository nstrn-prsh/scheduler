//mui
import { Box } from "@mui/system";
import { Container, Divider, Tooltip } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
//react
import { useState, useEffect } from "react";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
//components
import { cells, columns, rows } from "./tableData";
import Column from "./Column";
import Cell from "./Cell";
import Row from "./Row";
import Pagination from "./Pagination";
import { scheduler } from "./scheduler";
// import { contractContext } from "../../components/applicant/contractRequest/context/contractContext";

function Table({ weeksEnable, selectedData, isFinished, ...props }) {
   // const { scheduler, dispatch } = useContext(contractContext);
   const [previous, setPrevious] = useState(7);
   const [next, setNext] = useState(14);
   const [forceUpdate, setForceUpdate] = useState(false);

   // showing 3 weeks date
   const now = new DateObject().setCalendar(persian).setLocale(persian_fa);
   const today = new DateObject()
      .setCalendar(persian)
      .setLocale(persian_fa)
      .setFormat("DD")?.day;
   const dayIndex = now?.weekDay.index;
   const DAY = 60 * 60 * 24 * 1000;
   let arr = [];

   for (let i = today - (today - 21 - dayIndex); i >= 0; i--) {
      const date = new DateObject(now - DAY * i)
         .setCalendar(persian)
         .setLocale(persian_fa);
      arr.push(date);
   }

   for (let i = 1; i < Math.abs(30 + 7 - today); i++) {
      const date = new DateObject(now + DAY * i)
         .setCalendar(persian)
         .setLocale(persian_fa);
      arr.push(date);
   }

   const allColumns = (array) => {
      for (let i = 0; i < array.length; i++) {
         columns[i].date = array[i];
      }
      return columns;
   };

   //handle selecting date
   let days = { ...scheduler };

   for (let i = 1; i <= 7; i++) {
      for (const key in days) {
         if (i == key) {
            days[key] = cells
               .filter((item) => item.selected)
               .filter((item) => item?.dayVal == i)
               .map((item) => item.hourVal);
         }
      }
   }

   // useEffect(() => {
   //    dispatch({
   //       type: "SCHEDULER",
   //       value: days,
   //    });
   // }, [forceUpdate]);

   const handleCell = (item) =>
      cells.forEach((i) =>
         i?.day === item?.day && i.hour === item.hour
            ? (item.selected = !i.selected)
            : null
      );

   const handleColumn = (item, allCol) =>
      cells.forEach((i) =>
         i?.day === item?.day ? (i.selected = allCol) : null
      );

   const handleRow = (item, allRows) =>
      cells.forEach((i) =>
         i.hour === item.hour ? (i.selected = allRows) : null
      );

   return (
      <Container sx={{ py: 3 }}>
         {/* {props.divTitle ? (
            <Divider
               sx={{
                  color: "#1976d2",
                  fontSize: "14px",
                  fontWeight: "600",
               }}
            >
               {props.divTitle}{" "}
            </Divider>
         ) : null} */}

         {weeksEnable ? (
            <Pagination
               setPrevious={setPrevious}
               setNext={setNext}
               previous={previous}
               next={next}
            />
         ) : null}

         <Box
            sx={{
               display: "grid",
               gridTemplateColumns: "50px repeat(7, 0.5fr)",
               gridTemplateRows: weeksEnable
                  ? "45px repeat(11, 1fr)"
                  : "repeat(12, 1fr)",
               gridColumnGap: "0px",
               gridRowGap: "0px",
            }}
         >
            <Box
               onClick={
                  isFinished
                     ? null
                     : () => {
                          cells.forEach((i) => (i.selected = forceUpdate));
                          setForceUpdate(!forceUpdate);
                       }
               }
               sx={{
                  cursor: "pointer",
                  gridArea: "1/1/14/10",
                  backgroundColor: "rgba(241, 240, 240, 0.5) !important",
               }}
            >
               <Box>
                  {cells.some((i) => i.selected === true) ? (
                     <Tooltip title='پاک کردن همه'>
                        <CheckBoxIcon size='small' color='primary' />
                     </Tooltip>
                  ) : (
                     <Tooltip title='انتخاب کردن همه'>
                        <CheckBoxOutlineBlankIcon
                           size='small'
                           color='primary'
                        />
                     </Tooltip>
                  )}
               </Box>
            </Box>

            {rows.map((item) => (
               <Row
                  key={item.hour}
                  item={item}
                  isFinished={isFinished}
                  handleRow={handleRow}
                  forceUpdate={forceUpdate}
                  setForceUpdate={setForceUpdate}
               />
            ))}

            {allColumns(arr.slice(previous, next)).map((item) => (
               <Column
                  isFinished={isFinished}
                  weeksEnable={weeksEnable}
                  key={item?.day}
                  item={item}
                  handleColumn={handleColumn}
                  forceUpdate={forceUpdate}
                  setForceUpdate={setForceUpdate}
               />
            ))}

            {cells.map((item) => (
               <Cell
                  isFinished={isFinished}
                  selectedData={selectedData}
                  key={item.id}
                  item={item}
                  handleCell={handleCell}
                  forceUpdate={forceUpdate}
                  setForceUpdate={setForceUpdate}
               />
            ))}
         </Box>
      </Container>
   );
}

export default Table;
