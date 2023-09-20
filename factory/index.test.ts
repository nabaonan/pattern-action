/*
 * @Author: nbn
 * @Date: 2023-09-20 22:03:10
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-20 22:54:31
 * @FilePath: /pattern-action/factory/index.test.ts
 * @Description: 
 */
import { expect, test, describe } from 'bun:test';


import { CarFactory } from './index'
describe('测试工厂方法', async () => {



  test('测试比亚迪工厂方法', async () => {
    const car = CarFactory.getCar('byd')
    expect(car.run()).toBe('比亚迪启动');
    expect(car.stop()).toBe('比亚迪刹车了');
    expect(car.drift()).toBe('比亚迪漂移过弯');
  });



  test('测试火车工厂方法', async () => {
    const car = CarFactory.getCar('train')
    expect(car.run()).toBe('火车启动');
    expect(car.stop()).toBe('火车刹车了');
    expect(car.drift()).toBe('火车没法漂移');
  });

})