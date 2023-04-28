import { Box, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";

const tabs = [
  {
    label: "Подтягивания",
    value: "pulups"
  },
  {
    label: "Отжимания на руках",
    value: "hspu"
  },
  {
    label: "Отжимания",
    value: "pushups"
  },
  {
    label: "Бег",
    value: "runnin"
  }
];

const LAST_WORKOUT = "lastWorkout";

const WorkoutTabs = () => {
  const [currentTab, setCurrentTab] = useState(localStorage.getItem(LAST_WORKOUT) || "pushups");

  const handleChange = (_, value) => {
    setCurrentTab(value);
    localStorage.setItem(LAST_WORKOUT, value);
  };

  return (
    <Box>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        orientation="vertical"
      >
        {tabs.map(tab => (
          <Tab
            key={tab.value}
            value={tab.value}
            label={tab.label}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default WorkoutTabs;