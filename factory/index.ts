/*
 * @Author: nbn
 * @Date: 2023-09-20 22:02:45
 * @LastEditors: nbn
 * @LastEditTime: 2023-09-20 22:59:05
 * @FilePath: /pattern-action/factory/index.ts
 * @Description: 
 */
console.log('工厂方法模式')

interface ICarFactory {
  run: () => string//行驶
  stop: () => string
  drift: () => string
}

//电车也是车
class BYD implements ICarFactory {
  run() {
    return '比亚迪启动'
  }
  stop() {
    return '比亚迪刹车了'
  }
  drift() {
    return '比亚迪漂移过弯'
  }
}

//火车也是车
class Train implements ICarFactory {

  run() {
    return '火车启动'
  }
  stop() {
    return '火车刹车了'
  }
  drift() {
    return '火车没法漂移'
  }
}



export class CarFactory {


  static getCar(key: 'byd' | 'train'): ICarFactory {

    switch (key) {
      case 'byd':
        return new BYD()
      case 'train':
        return new Train()
    }

  }
}