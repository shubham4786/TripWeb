import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Product from "../components/Product";
import Filters from "../components/Filters";
import Footer from "../components/Footer";
import { hotel } from "../data";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const Home = () => {
  const [page, setPage] = useState(1);
  const [startEnd, setStartEnd] = useState([0, 5]);
  const [filteredlist, setFilteredList] = useState(hotel);
  const [sort, setSort] = useState("");

  const handleChange = (event, value) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setPage(value);
  };

  useEffect(() => {
    setStartEnd([(page - 1) * 5, page * 5]);
  }, [page]);

  const handleSortBtn = (event) => {
    if (event.target.value === "ascending") {
      filteredlist.sort(
        (a, b) => a.hotelBasicInfo.price - b.hotelBasicInfo.price
      );
    } else if (event.target.value === "descending") {
      filteredlist.sort(
        (a, b) => b.hotelBasicInfo.price - a.hotelBasicInfo.price
      );
    }
    setSort(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1, marginTop: "100px" }}>
      <Grid sx={{ justifyContent: "center" }} container spacing={1}>
        <Grid
          item
          xs={3}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <Box>
            <Filters
              filteredlist={filteredlist}
              setFilteredList={setFilteredList}
              setPage={setPage}
              setSort={setSort}
            />
          </Box>
        </Grid>
        <Grid item xs={11} md={8}>
          <Box>
            <Box sx={headerStyle}>
              <h3>{filteredlist.length} Hotels</h3>
              <FormControl sx={{ width: "100px" }}>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={sort}
                  onChange={handleSortBtn}
                >
                  <MenuItem value="ascending">Price- Low to High</MenuItem>
                  <MenuItem value="descending">Price- High to Low</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {filteredlist.slice(startEnd[0], startEnd[1]).map((prod, index) => (
              <Product key={index} item={prod} />
            ))}

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {filteredlist.length > 0 ? (
                <Pagination
                  color="primary"
                  count={
                    filteredlist.length % 5 == 0
                      ? filteredlist.length / 5
                      : Math.floor(filteredlist.length / 5) + 1
                  }
                  page={page}
                  onChange={handleChange}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    marginTop: "50px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h3>Hotel Not Found</h3>
                </div>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: " 20px 5px",
  background: "#fff",
  padding: "10px 30px",
  borderRadius: "5px",
};

export default Home;
