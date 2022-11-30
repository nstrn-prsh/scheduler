import { Tooltip, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Pagination({ setPrevious, setNext, previous, next, ...props }) {
   const handleNavigate = (p, n) => {
      setPrevious(p);
      setNext(n);
   };

   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
         }}
      >
         <Tooltip title='هفته قبل' placement='right-start'>
            <IconButton
               color='primary'
               onClick={(e) => handleNavigate(0, 7)}
               disabled={previous === 0 && next === 7 ? true : false}
            >
               <ArrowForwardIosIcon />
            </IconButton>
         </Tooltip>
         <Button
            variant='text'
            color='inherit'
            onClick={(e) => handleNavigate(7, 14)}
         >
            هفته جاری
         </Button>
         <Tooltip title='هفته بعد' placement='left-start'>
            <IconButton
               color='primary'
               onClick={(e) => handleNavigate(14, 21)}
               disabled={previous === 14 && next === 21 ? true : false}
            >
               <ArrowBackIosNewIcon />
            </IconButton>
         </Tooltip>
      </Box>
   );
}

export default Pagination;
