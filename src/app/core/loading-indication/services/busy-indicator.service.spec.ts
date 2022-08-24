import { BusyIndicatorService } from "./busy-indicator.service";

describe('BusyIndicatorService', () => {
  it('should be created', () => {
    const service: BusyIndicatorService = new BusyIndicatorService();
    expect(service).toBeTruthy();
  });
});
