import React from 'react';

const Course = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((courseItem) => {
        const {
          course,
          openedLessonsCount,
          completedLessonsCount,
          courseStartedDate,
        } = courseItem;
        return (
          <article key={courseStartedDate} className='menu-item'>
            <div className='item-info'>
              <header>
                <h3>{course}</h3>
              </header>
              <h4 className='item-text'>
                Lessons completed: {completedLessonsCount}
              </h4>
              <p> Lessons opened: {openedLessonsCount}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Course;
