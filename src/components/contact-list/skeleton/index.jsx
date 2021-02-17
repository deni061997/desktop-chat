import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      {Array(9)
        .fill('')
        .map((_, id) => {
          return (
            <div key={id} className="skelet-div">
              <Skeleton
                className="skelet-logo"
                height={40}
                circle={true}
                width={40}
              />
              <div>
                <Skeleton className="skelet" height={20} width={200} />
                <Skeleton className="skelet" height={20} width={200} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
