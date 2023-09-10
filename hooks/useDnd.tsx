import React, { forwardRef, useEffect } from 'react';

// eslint-disable-next-line react/display-name
export const useDnd = forwardRef((props: any, ref: any) => {
  const { containerRef, componentRef } = ref;

  useEffect(() => {
    const { width: containerWidth, height: containerHeight } =
      containerRef.current.getBoundingClientRect();
    const { width: boxWidth, height: boxHeight } = componentRef.current.getBoundingClientRect();

    let isDragging: any = null;
    let originLeft: any = null;
    let originTop: any = null;
    let originX: any = null;
    let originY: any = null;

    componentRef.current.addEventListener('mousedown', (e: any) => {
      e.preventDefault();
      isDragging = true;
      originX = e.clientX;
      originY = e.clientY;
      originLeft = componentRef.current.offsetLeft;
      originTop = componentRef.current.offsetTop;
    });

    document.addEventListener('mouseup', (e: any) => {
      isDragging = false;
    });

    document.addEventListener('mousemove', (e: any) => {
      if (isDragging) {
        const diffX = e.clientX - originX;
        const diffY = e.clientY - originY;
        const endOfXPoint = containerWidth - boxWidth;
        const endOfYPoint = containerHeight - boxHeight;
        componentRef.current.style.left = `${Math.min(
          Math.max(0, originLeft + diffX),
          endOfXPoint,
        )}px`;
        componentRef.current.style.top = `${Math.min(
          Math.max(0, originTop + diffY),
          endOfYPoint,
        )}px`;
      }
    });
  }, [containerRef, componentRef]);

  return null;
});
