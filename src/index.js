class kyyUtils {
  isMobile() {
    return /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent);
  }

  browserInfo(type) {
    const userAgent = navigator.userAgent.toLowerCase();
    switch (type) {
    case 'android':
      return userAgent.indexOf('android') !== -1;
    case 'iphone':
      return userAgent.indexOf('iphone') !== -1;
    case 'ipad':
      return userAgent.indexOf('ipad') !== -1;
    case 'weixin':
      return userAgent.indexOf('micromessenger') !== -1;
    default:
      return userAgent;
    }
  }

  isWeChat() {
    return this.browserInfo('weixin');
  }

  isWechat() {
    return this.browserInfo('weixin');
  }

  isAndroid() {
    return this.deviceInfo('android');
  }

  isIos() {
    return this.deviceInfo('ios');
  }

  /**
   * 获取设备信息
   * @param {string} type
   * @returns {boolean}
   */
  deviceInfo(type) {
    const u = navigator.userAgent;
    switch (type) {
    case 'android': {
      return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    }
    case 'ios': {
      return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }
    }
  }

  //金额转成中文大写金额
  formatChineseCapital(amount) {
    const original = amount;
    if (parseFloat(original) < 0) {
      throw new Error(original + '无效数字');
      return resultStrSpan;
    }
    amount = parseFloat(amount);
    if (isNaN(amount)) {
      return;
    }// || Math.abs(amount) > 99999999999.99
    amount = Math.round(amount * 100);
    const isInt = amount % 100 == 0 ? true : false;
    const numArr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const unitArr = ['分', '角', '元', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟'];
    let resultStr = '', num, unitIdx, len, zeroCount = 0;
    const resultStrSpan = '';
    if (amount == 0) {
      return '零元整';
    }

    if (amount < 0) {
      // resultStr += '负';
      amount = -amount;
    }
    amount = amount.toString();
    len = amount.length;
    for (let i = 0; i < len; i++) {
      num = parseInt(amount.charAt(i));
      unitIdx = len - 1 - i;
      if (num === 0) {
        //元 万 亿 输出单位
        if (unitIdx === 2 || unitIdx === 6 || unitIdx === 11) {
          resultStr += unitArr[unitIdx];
          zeroCount = 0;
        } else {
          zeroCount++;
        }
      } else {
        if (zeroCount > 0) {
          resultStr += '零';
          zeroCount = 0;
        }

        resultStr = resultStr + numArr[num] + unitArr[unitIdx];
      }
    }

    if (isInt) {
      resultStr += '整';
    }
    return resultStr;
  }

  /**
   * 设置页面标题
   * @param {string} title
   */
  setPageTitle(title) {
    document.title = title;
    // 对于IOS微信
    // http://blog.csdn.net/xuexiiphone/article/details/51966342
    if (this.isIos() && this.isWeChat()) {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.addEventListener('load', () => {
        setTimeout(() => {
          document.body.removeChild(iframe);
        }, 9);
      }, false);
      iframe.src = '/favicon.ico';
      document.body.appendChild(iframe);
    }
  }

  /**
   * 时间转换为几天前,分钟前格式
   * @param  dateTimeStamp
   * @returns {string}
   */
  dateDiff(dateTimeStamp) {
    if (typeof dateTimeStamp === 'string') {
      dateTimeStamp = new Date(dateTimeStamp.replace(/-/g, '/')).getTime();
    }
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const halfamonth = day * 15;
    const month = day * 30;
    const now = new Date().getTime();
    const diffValue = now - dateTimeStamp;
    if (diffValue < 0) {
      return '';
    }
    const monthC = diffValue / month;
    const weekC = diffValue / (7 * day);
    const dayC = diffValue / day;
    const hourC = diffValue / hour;
    const minC = diffValue / minute;
    let result;
    if (monthC >= 1) {
      result = '' + parseInt(monthC) + '月前';
    } else if (weekC >= 1) {
      result = '' + parseInt(weekC) + '周前';
    } else if (dayC >= 1) {
      result = '' + parseInt(dayC) + '天前';
    } else if (hourC >= 1) {
      result = '' + parseInt(hourC) + '小时前';
    } else if (minC >= 1) {
      result = '' + parseInt(minC) + '分钟前';
    } else
      result = '刚刚';
    return result;
  }
}

export default new kyyUtils();
