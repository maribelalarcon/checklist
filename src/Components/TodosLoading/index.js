import React from "react";
import ContentLoader from 'react-content-loader';

function TodosLoading(props) {
    return (
      <ContentLoader
        speed={2}
        width={900}
        height={400}
        viewBox="0 0 900 400"
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
        {...props}
      >
        <rect x="0" y="6" rx="4" ry="4" width="900" height="74" />
        <rect x="0" y="94" rx="4" ry="4" width="900" height="74" />
        <rect x="0" y="104" rx="4" ry="4" width="900" height="74" />
      </ContentLoader>
    )
  }
  
  TodosLoading.metadata = {
    name: 'Abraham Calsin',
    github: 'abrahamcalsin',
    description: 'Loading a list of tasks.',
    filename: 'TodosLoading',
  }

export { TodosLoading };