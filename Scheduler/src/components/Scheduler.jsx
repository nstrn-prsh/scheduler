import { Container } from "@mui/material";
import React from "react";
import Table from "./table/Table";

function Scheduler() {
   return (
      <Container>
         <Table
            weeksEnable={true}
            // divTitle='تقویم کاری شما'
         />
      </Container>
   );
}

export default Scheduler;
