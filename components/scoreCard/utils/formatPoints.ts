import { PointsObject } from '../types/pointsObject';

export function formatPoints({ points }: PointsObject): string {
  const formatted = points.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatted;
}
