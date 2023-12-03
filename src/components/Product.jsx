import React from "react";
import Rating from "@mui/material/Rating";

const Product = (props) => {
  const hotel = props.item;
  return (
    <div style={mainStyle}>
      <div style={{ display: "flex" }}>
        <img
          style={imgStyle}
          src={hotel.hotelBasicInfo.hotelImg}
          alt={hotel.hotelBasicInfo.hotelName}
        />
      </div>

      <div style={infoStyle}>
        <div>
          <h3>{hotel.hotelBasicInfo.hotelName}</h3>
          <h4 style={{ paddingBottom: "15px" }}>
            {hotel.hotelBasicInfo.hotelAddress}, {hotel.positionInfo.cityName}
          </h4>
          {hotel.hotelBasicInfo.additionTexts.map((item, index) => (
            <div key={index}>
              {item.additionName === "FreeCancelMessage" ? (
                <h5 style={{ color: "green" }}>{item.additionText}</h5>
              ) : null}
              {item.additionName === "LastBooking" ? (
                <h5 style={{ color: "#455873" }}>{item.additionText}</h5>
              ) : null}
            </div>
          ))}
        </div>
        <div>
          <Rating
            name="read-only"
            readOnly
            value={parseInt(hotel.hotelStarInfo.star)}
          />
          <h5 style={{ textAlign: "center" }}>
            {" "}
            {hotel.commentInfo.commenterNumber}
          </h5>
          <h2 style={{ textAlign: "center", paddingTop: "30PX" }}>
            US $ {hotel.hotelBasicInfo.price}
          </h2>
        </div>
      </div>
    </div>
  );
};

const mainStyle = {
  display: "flex",
  margin: " 20px 5px",
  background: "#fff",
  padding: "10px",
  borderRadius: "5px",
  flexWrap: "wrap",
  width: "100%",
};

const imgStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "5px",
  boxShadow: "0px 0px 2px",
};

const infoStyle = {
  padding: "10px 20px",
  display: "flex",
  flexGrow: 1,
  width: "calc(100% - 208px)",
  justifyContent: "space-between",
  flexWrap: "wrap",
};

export default Product;
