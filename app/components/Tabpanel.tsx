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
    </div> // div in p 解消のためにchildrenが囲われていた<typograpy>を削除
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
          <StyledTab label="性欲三銃士" color="#DE7897" />
          <StyledTab label="流出探検隊" color="#2AA6CD" />
          <StyledTab label="PeachTech" color="#1CC033" />
          <StyledTab label="地元" color="#1CC033" />
          <StyledTab label="Uni(後輩)" color="#8161DE" />
          <StyledTab label="Uni(同期)" color="#1CC033" />
          <StyledTab label="Uni(先輩)" color="#1CC033" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <YearGridCard yearProps="性欲三銃士" cardColor={"#D7EEFF"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <YearGridCard yearProps="流出探検隊" cardColor={"#D7EEFF"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <YearGridCard yearProps="PeachTech" cardColor={"#D7EEFF"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <YearGridCard yearProps="地元" cardColor={"#D7EEFF"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <YearGridCard yearProps="Uni(後輩)" cardColor={"#E7DAF8"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <YearGridCard yearProps="Uni(同期)" cardColor={"#D4EDD9"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <YearGridCard yearProps="Uni(先輩)" cardColor={"#D4EDD9"} />
      </CustomTabPanel>
    </Box>
  );
};

//別ファイルでStyledTabをコンポーネントとして切り出したが、Mui-selectedが機能しなかったためshouldForwardPropを使用
const StyledTab = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ theme, color }) => ({
  fontFamily: "revert-layer",
  color: "#575757",
  width: "150px",

  [theme.breakpoints.down("md")]: {
    width: "105px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70px",
  },

  "&.Mui-selected": {
    color: color,
    borderBottom: `2px solid ${color}`,
  },
}));

export default BasicTabs;
