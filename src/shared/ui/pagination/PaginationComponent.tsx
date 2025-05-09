'use client';

import React, { useState } from 'react';
import { Pagination } from 'antd';

export const PaginationComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onChange = (page: number) => {
    setCurrentPage(page);
    // fetch or update data here based on page
    console.log(`Current page: ${page}`);
  };

  return (
    <div style={{ padding: 24 }}>
      {/* Your content here */}

      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={100} // total number of items
        onChange={onChange}
        showSizeChanger={false} // hide pageSize dropdown (optional)
      />
    </div>
  );
};
