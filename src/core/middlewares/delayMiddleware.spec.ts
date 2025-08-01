// Middlewares
import { getRandomDecimal } from '@/core/middlewares';


describe('Delay Middleware', () => {

  describe('Should create a random number between range', () => {

    test('-> create a random number between range', async () => {
      const min = 500;
      const max = 1000;
      const random = getRandomDecimal(min, max);
      expect(random > min).toEqual(true);
      expect(random < max).toEqual(true);
    });
  });
});