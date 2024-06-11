import React from "react";
import Dropdown from "./Card/GetInformation";
import AssesmentDetails from "./Card/AssesmentDetails";
import AddressDetails from "./Card/AddressDetails";
import FloorDetails from "./Card/FloorDetails";
import BuildingFacility from "./Card/BuildingFacility";
import WaterFacility from "./Card/WaterFacility";
import Establishment from "./Card/Establishment";
import ProfessionalTax from "./Card/ProfessionalTax";
import Establishment2 from "./Card/Establishment2";


function ListOrder(){
    return(
       <div>
     <Dropdown /> 
   <AssesmentDetails />
    <AddressDetails />
   <FloorDetails />
   <BuildingFacility/>
   <WaterFacility/>
   <Establishment/>
   <ProfessionalTax/>
   <Establishment2/> 
        </div>

    );
}

export default ListOrder;