import React, { useState } from 'react';
import Course from './Course';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.course))];

function App() {
  const [courseItems, setCourseItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setCourseItems(items);
      return;
    }
    const newItems = items.filter((item) => item.course === category);
    setCourseItems(newItems);
  };
  //lessons calc
  const arr = [...courseItems];
  console.log(arr);

  const totalOpened = arr.reduce(
    (prev, next) => Number(prev) + Number(next.openedLessonsCount),
    0
  );
  console.log(totalOpened);

  const totalFinished = arr.reduce(
    (prev, next) => Number(prev) + Number(next.completedLessonsCount),
    0
  );
  console.log(totalFinished);

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Courses</h2>
          <h4>{courseItems.length} courses taken</h4>
          <p>Select the button to see the specific data of the course</p>
          <h5>total of lessons finished: {totalFinished}</h5>
          <h5>total of lessons started: {totalOpened}</h5>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Course items={courseItems} />
      </section>
    </main>
  );
}

export default App;
