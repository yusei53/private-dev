"use client";
import { Box, Tabs, Tab, styled } from "@mui/material";
import GridCard from "./GridCard";
import YearGridCard from "./YearGridCard";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        justifyContent={"center"}
        display={"flex"}
        borderBottom={1}
        borderColor={"divider"}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          allowScrollButtonsMobile
          TabIndicatorProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
        >
          <StyledTab label="性欲三銃士" color="#A3D9F5" />
          <StyledTab label="流出探検隊" color="#B7D6EA" />
          <StyledTab label="PeachTech" color="#F8D7E3" />
          <StyledTab label="地元" color="#C9E4F2" />
          <StyledTab label="Uni(後輩)" color="#D4C2F0" />
          <StyledTab label="Uni(同期)" color="#D1ECE6" />
          <StyledTab label="Uni(先輩)" color="#D8EDD8" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <YearGridCard yearProps="性欲三銃士" cardColor={"#A3D9F5"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <YearGridCard yearProps="流出探検隊" cardColor={"#B7D6EA"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <YearGridCard yearProps="PeachTech" cardColor={"#F8D7E3"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <YearGridCard yearProps="地元" cardColor={"#C9E4F2"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <YearGridCard yearProps="Uni(後輩)" cardColor={"#D4C2F0"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <YearGridCard yearProps="Uni(同期)" cardColor={"#D1ECE6"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <YearGridCard yearProps="Uni(先輩)" cardColor={"#D8EDD8"} />
      </CustomTabPanel>
    </Box>
  );
};

const StyledTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ theme, color }) => ({
  fontFamily: "revert-layer",
  color: "#575757",
  width: "150px",
  textTransform: "none",

  [theme.breakpoints.down("md")]: {
    width: "110px",
  },

  "&.Mui-selected": {
    color: color,
    borderBottom: `2px solid ${color}`,
  },
}));

export default BasicTabs;
