 
import { Producto } from './producto';

describe('Producto', () => {
  it('should create an instance', () => {
    expect(new Producto("Producto1","camisa roja",20000,112222)).toBeTruthy();
  });
});
