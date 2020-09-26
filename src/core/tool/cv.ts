/*
canvas工具函数
*/
interface CvTool {
  // 获取鼠标在坐标上的位置
  getOffset: (ele: any) => void;
  // 坐标系转换
  eventWrapper: (e: any) => void;
  //弧度转角度
  toAngle: (e) => void;
  // 角度转弧度
  toRad: (e) => void;
}

class Cv implements CvTool {
  toAngle(rad) {
    return (rad * 180) / Math.PI;
  }
  toRad(angle) {
    return (angle * Math.PI) / 180;
  }
  getOffset(ele: any): { x: number; y: number } {
    let mouse = { x: 0, y: 0 };
    ele.addEventListener('mousemove', (e) => {
      let { x, y } = this.eventWrapper(e);
      mouse.x = x;
      mouse.y = y;
    });
    return mouse;
  }
  eventWrapper(e: any): { x; y } {
    let { pageX, pageY, target } = e;
    let { left, top } = target.getBoundingClientRect();
    return { x: pageX - left, y: pageY - top };
  }
}

export const cv = new Cv();
