/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';

export const useQueueCallback = <T extends (...args: any[]) => any>(propsCallback: T) => {
  const [queue, setQueue] = useState<(() => void)[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    console.log(`Queue size: ${queue.length}`);
  }, [queue]);

  useEffect(() => {
    const checkQueue = async () => {
      if (isRunning) return;

      if (queue.length > 0) {
        const currentMethod = queue[0];
        setIsRunning(true);
        console.log(`Running next queue method`);
        await currentMethod();
        console.log(`Finished running queue method`);
        setQueue((currQueue) => currQueue.slice(1));
        setIsRunning(false);
      }
    };

    checkQueue();
  }, [isRunning, queue]);

  const callback = useCallback(
    (...args) => {
      setQueue((currQueue) => [...currQueue, () => propsCallback(...args)]);
    },
    [propsCallback]
  );

  return callback as T;
};
