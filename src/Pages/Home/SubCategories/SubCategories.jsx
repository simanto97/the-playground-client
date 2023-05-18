import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "../CategoryCard/CategoryCard";

const SubCategories = () => {
  const [regularCars, setRegularCars] = useState([]);
  const [sportsCars, setSportsCars] = useState([]);
  const [fireTrucks, setFireTrucks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/regular-cars")
      .then((res) => res.json())
      .then((data) => {
        setRegularCars(data);
      });
  },[]);
  useEffect(() => {
    fetch("http://localhost:5000/sports-car")
      .then((res) => res.json())
      .then((data) => {
        setSportsCars(data);
      });
  },[]);
  useEffect(() => {
    fetch("http://localhost:5000/fire-trucks")
      .then((res) => res.json())
      .then((data) => {
        setFireTrucks(data);
      });
  },[]);
  return (
    <div className="grow my-8">
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
