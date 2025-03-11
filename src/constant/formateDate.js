const formatDateTime = (
  date,
  options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short',
  }
) => {
  return date.toLocaleDateString('en-US', options).replace(',', '');
};

export default formatDateTime;
