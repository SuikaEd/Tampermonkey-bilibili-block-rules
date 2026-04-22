// ==UserScript==
// @name         屏蔽b站视频评论区和推荐
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  屏蔽b站视频评论区和推荐
// @author       SuikaEd
// @match         *://*.bilibili.com/video/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ================= 配置区域开始 =================
    const blockRules = [
        '.recommend-list-v1',
        '#commentapp'
        // 在这里添加你自己的规则...
    ];

    // ================= 配置区域结束 =================

    // 如果规则列表为空，则不执行任何操作
    if (blockRules.length === 0) return;

    // 将这些规则组合成一个完整的 CSS 字符串
    // .join(', ') 会把上面的数组变成类似 "#ad-banner, .sidebar-ad" 的格式
    // { display: none !important; } 的意思是“彻底隐藏，且优先级最高”
    const cssString = blockRules.join(', ') + ' { display: none !important; }';

    // 创建一个 <style> 元素 (Style Element)
    const styleNode = document.createElement('style');
    styleNode.type = 'text/css';
    styleNode.innerHTML = cssString;

    // 将这部分样式注入到网页的头部 (Document Head)
    document.head.appendChild(styleNode);

})();