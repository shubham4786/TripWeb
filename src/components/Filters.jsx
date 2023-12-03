import React, { useEffect, useState } from "react";
import { Slider } from "@mui/material";
import { hotel } from "../data";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Checkbox from "@mui/material/Checkbox";

const Filters = ({ filteredlist, setFilteredList, setPage, setSort }) => {
  const [priceRange, setPriceRange] = useState([0, 600]);
  const [checked, setChecked] = useState(false);
  const [starChecked, setStarChecked] = useState([false, false, false, false]);

  const filterHotels = () => {
    const priceFilteredHotels = hotel.filter((hotelItem) => {
      const isPriceInRange =
        hotelItem.hotelBasicInfo.price &&
        hotelItem.hotelBasicInfo.price >= priceRange[0] &&
        hotelItem.hotelBasicInfo.price <= priceRange[1];

      const hasFreeCancellation =
        !checked ||
        hotelItem.hotelBasicInfo.additionTexts.some(
          (item) => item.additionName === "FreeCancelMessage"
        );

      return isPriceInRange && hasFreeCancellation;
    });

    const starFilteredHotels = filterByStarRatings();

    const combinedFilteredHotels = priceFilteredHotels.filter((hotelItem) =>
      starFilteredHotels.includes(hotelItem)
    );

    setFilteredList(combinedFilteredHotels);
    setPage(1);
  };

  const filterByStarRatings = () => {
    const selectedStarRatings = starChecked
      .map((checked, index) => (checked ? index + 2 : null))
      .filter((rating) => rating !== null);

    if (selectedStarRatings.length === 0) {
      return hotel;
    }

    const newList = hotel.filter((hotelItem) => {
      const hotelStarRating = parseInt(hotelItem.hotelStarInfo.star);
      return selectedStarRatings.includes(hotelStarRating);
    });

    return newList;
  };

  const handleChange = (e, newValue) => {
    setPriceRange(newValue);
  };

  useEffect(() => {
    let timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(filterHotels, 500);
  }, [priceRange, checked, starChecked]);

  const handleReset = () => {
    setSort("");
    setChecked(false);
    setStarChecked([false, false, false, false]);
    setPriceRange([0, 600]);
    setFilteredList(hotel);
  };

  const handleCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleStarCheckbox = (index) => {
    const updatedStarChecked = [...starChecked];
    updatedStarChecked[index] = !updatedStarChecked[index];
    setStarChecked(updatedStarChecked);
  };

  return (
    <div style={mainStyle}>
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>Filters</h3>
        <button style={{ padding: "7px" }} onClick={handleReset}>
          Reset
        </button>
      </div>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label style={btn}>
            2
            <Checkbox
              icon={<StarRoundedIcon />}
              checkedIcon={<StarRoundedIcon sx={{ color: "#faaf00" }} />}
              checked={starChecked[0]}
              onChange={() => handleStarCheckbox(0)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </label>
          <label style={btn}>
            3
            <Checkbox
              icon={<StarRoundedIcon />}
              checkedIcon={<StarRoundedIcon sx={{ color: "#faaf00" }} />}
              checked={starChecked[1]}
              onChange={() => handleStarCheckbox(1)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </label>
          <label style={btn}>
            4
            <Checkbox
              icon={<StarRoundedIcon />}
              checkedIcon={<StarRoundedIcon sx={{ color: "#faaf00" }} />}
              checked={starChecked[2]}
              onChange={() => handleStarCheckbox(2)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </label>
          <label style={btn}>
            5
            <Checkbox
              icon={<StarRoundedIcon />}
              checkedIcon={<StarRoundedIcon sx={{ color: "#faaf00" }} />}
              checked={starChecked[3]}
              onChange={() => handleStarCheckbox(3)}
              inputProps={{ "aria-label": "controlled" }}
            />
          </label>
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <h4>Other</h4>
        <label>
          <Checkbox
            checked={checked}
            onChange={handleCheckbox}
            inputProps={{ "aria-label": "controlled" }}
          />
          Free Cancellation
        </label>
      </div>
    </div>
  );
};

const btn = {
  fontSize: "18px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 0px 0px 5px",
  border: "1px solid black",
  borderRadius: "10px",
  margin: "3px",
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
