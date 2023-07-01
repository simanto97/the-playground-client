import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "../CategoryCard/CategoryCard";

const SubCategories = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-simanto97.vercel.app/sub-categories")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  const handleCategories = (subCategory) => {
    fetch(
      `https://assignment-11-server-simanto97.vercel.app/sub-categories?category=${subCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className="grow my-8 mx-1"
    >
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab onClick={() => handleCategories("Regular Cars")}>
            Regular Cars
          </Tab>
          <Tab onClick={() => handleCategories("Sports Car")}>Sports Car</Tab>
          <Tab onClick={() => handleCategories("Mini Fire Trucks")}>
            Mini Fire Trucks
          </Tab>
        </TabList>

        <TabPanel>
          <div>
            {cars.map((car) => (
              <CategoryCard key={car._id} car={car}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {cars.map((car) => (
              <CategoryCard key={car._id} car={car}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {cars.map((car) => (
              <CategoryCard key={car._id} car={car}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {cars.map((car) => (
              <CategoryCard key={car._id} car={car}></CategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCategories;
