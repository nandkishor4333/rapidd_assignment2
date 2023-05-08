'use strict';

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';

const ChartExample = () => {
  const [options, setOptions] = useState({
    data: getData(),
    series: [
      {
        type: 'pie',
        angleKey: 'value',
        calloutLabelKey: 'name',
        sectorLabelKey: 'value',
        sectorLabel: {
          color: 'white',
          fontWeight: 'bold',
        },
      },
    ],
  });

  return <AgChartsReact options={options} />;
};

const root = createRoot(document.getElementById('root'));
root.render(<ChartExample />);
