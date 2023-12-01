import React, { useEffect, useState } from "react";
import { Slider } from "@mui/material";
import { hotel } from "../data";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Filters = ({ filteredlist, setFilteredList, setPage }) => {
  const [priceRange, setPriceRange] = useState([0, 600]);

  const filterHotels = () => {
    const newList = hotel.filter(
      (hotel) =>
        hotel.hotelBasicInfo.price &&
        hotel.hotelBasicInfo.price >= priceRange[0] &&
        hotel.hotelBasicInfo.price <= priceRange[1]
    );
    // console.log("Filtered Hotels", newList);
    setFilteredList(newList);
    setPage(1);
  };
  // console.log(filteredlist);

  const handleChange = (e, newValue) => {
    // console.log(newValue);
    setPriceRange(newValue);
  };

  useEffect(() => {
    let timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(filterHotels, 500);
  }, [priceRange]);

  const handleStar = (value) => {
    // console.log(value);
    const newList = hotel.filter(
      (hotel) => parseInt(hotel.hotelStarInfo.star) === value
    );
    setFilteredList(newList);
    setPage(1);
  };
  return (
    <div style={mainStyle}>
      <h3>Filters</h3>
      <div style={{ padding: "20px" }}>
        <h4 style={{ padding: "10px 0" }}>Price ($)</h4>
        <div style={{ padding: "0 10px " }}>
          <Slider
            value={priceRange}
            getAriaLabel={() => "Temperature range"}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={600}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>$ {priceRange[0]}</h4>
          <h4>$ {priceRange[1]}</h4>
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <h4 style={{ padding: "10px 0" }}>Star Rating</h4>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button style={btn} onClick={() => handleStar(2)}>
            2 <StarRoundedIcon sx={{ color: "#faaf00" }} />
          </button>
          <button style={btn} onClick={() => handleStar(3)}>
            3 <StarRoundedIcon sx={{ color: "#faaf00" }} />
          </button>
          <button style={btn} onClick={() => handleStar(4)}>
            4 <StarRoundedIcon sx={{ color: "#faaf00" }} />
          </button>
          <button style={btn} onClick={() => handleStar(5)}>
            5 <StarRoundedIcon sx={{ color: "#faaf00" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

const btn = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 5px",
};

const mainStyle = {
  display: "flex",
  margin: " 20px 5px",
  background: "#fff",
  padding: "10px",
  borderRadius: "5px",
  flexDirection: "column",
};

export default Filters;
