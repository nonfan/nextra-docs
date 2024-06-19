import { repository } from '../../setting.js';
import * as path from 'path';

export function getAvailablePath(src) {
  if (src.slice(0, 4) === 'http') {
    return src;
  }

  return process.env.NODE_ENV != 'production'
    ? src
    : path.join(`/${repository}`, src);
}

export function setWebsiteIcon(document) {
  const url = getAvailablePath('/favicon.png');
  const link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
}

export function tableWidthAdaptation() {
  let tableList = document.querySelectorAll('table');

  tableList.forEach((element) => {
    let thList = element.firstElementChild.querySelectorAll('th');
    let totalWidth = Array.from(thList).reduce((acc, th) => {
      return acc + th.offsetWidth;
    }, 0);

    // 计算剩余宽度
    let remainingWidth =
      element.offsetWidth -
      totalWidth +
      thList[thList.length - 1].offsetWidth -
      thList.length +
      1;

    // 设置最后一列的宽度为剩余宽度
    thList[thList.length - 1].style.width = `${remainingWidth}px`;
  });
}
