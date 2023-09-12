export function formatDate(date: Date): {
  formatedDate: string;
  formatedTime: string;
} {
  const createdAt = new Date(date);

  const hour = createdAt.getHours();
  const minute = createdAt.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formatedTime = `${hour % 12 || 12}:${minute
    .toString()
    .padStart(2, '0')} ${ampm}`;
  const formatedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(createdAt);

  return {
    formatedTime,
    formatedDate,
  };
}
