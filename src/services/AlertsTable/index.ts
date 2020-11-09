export function temperatureIsOk(minTemp: number, maxTemp: number, currentTemp: number): string {
  if (currentTemp > minTemp && currentTemp < maxTemp) {
    return 'OkTemp';
  } else if (currentTemp <= minTemp || currentTemp >= maxTemp) {
    return 'attentionTemp';
  }
  return 'notTemp';
}
