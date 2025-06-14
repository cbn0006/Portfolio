import React from 'react';

const NODE_COUNT = 11;
const ROW_HEIGHT_CLASS = 'h-32';

export default function Timeline() {
  const customLabels: { [key: number]: string } = {
    0: 'Present',
    1: '2025',
    2: '2024',
    3: '2023',
    4: '2022',
    5: '2021',
    6: '2020',
    7: '2019',
    8: '2018',
    9: '2017',
    10: '2016',
  };

  return (
    <div className="flex flex-1 p-8">
      <div className="grid w-full" style={{ gridTemplateColumns: 'auto auto 1fr' }}>
        {Array.from({ length: NODE_COUNT }).map((_, index) => {
          const label = customLabels[index] || '\u00A0';

          return (
            <React.Fragment key={index}>
              <div className={`flex justify-end pr-6 -mt-2 font-bold text-lg ${ROW_HEIGHT_CLASS}`}>
                {label}
              </div>

              <div className={`flex flex-col items-center w-8 ${ROW_HEIGHT_CLASS}`}>
                <div className="h-4 w-4 rounded-full bg-blue-600 border-2 border-white dark:border-gray-900"></div>
                {index < NODE_COUNT - 1 && (
                  <div className="w-0.5 flex-grow bg-gray-300 dark:bg-gray-600"></div>
                )}
              </div>

              <div className={`flex items-start pl-4 pt-[7px] ${ROW_HEIGHT_CLASS}`}>
                <div className="w-full border-t border-dashed border-gray-300 dark:border-gray-700"></div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}