import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "../CategoryCard/CategoryCard";

const SubCategories = () => {
  const [regularCars, setRegularCars] = useState([]);
  const [sportsCars, setSportsCars] = useState([]);
  const [fireTrucks, setFireTrucks] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-simanto97.vercel.app/regular-cars")
      .then((res) => res.json())
      .then((data) => {
        setRegularCars(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://assignment-11-server-simanto97.vercel.app/sports-car")
      .then((res) => res.json())
      .then((data) => {
        setSportsCars(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://assignment-11-server-simanto97.vercel.app/fire-trucks")
      .then((res) => res.json())
      .then((data) => {
        setFireTrucks(data);
      });
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className="grow my-8 mx-1"
    >
      <Tabs>
        <TabList>
          <Tab>Regular Cars</Tab>
          <Tab>Sports Car</Tab>
          <Tab>Mini Fire Trucks</Tab>
        </TabList>

        <TabPanel>
          <div>
            {regularCars.map((car) => (
              <CategoryCard key={car._id} car={car}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {sportsCars.map((car) => (
              <CategoryCard key={car._id} car={car}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {fireTrucks.map((car) => (
              <CategoryCard key={car._id} car={car}></CategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCategories;
