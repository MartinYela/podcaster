export const formatDate = (inputString: string) => {
  const parts = inputString.split("-");
  const formattedString = `${parts[2].substring(0,2)}/${parts[1]}/${parts[0].slice(-2)}`;
  return formattedString;
};

export function formatTime(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return formattedTime;
}
