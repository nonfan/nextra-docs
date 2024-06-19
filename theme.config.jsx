import Head from '@/components/Head';
import LastUpdateDate from '@/components/LastUpdateDate';
import Logo from '@/components/Logo';
import { repository, username } from './setting';

export default {
  logo: Logo,
  head: <Head />,
  project: {
    link: `https://github.com/${username}/${repository}`,
  },
  sidebar: {
    toggleButton: true,
  },
  search: {
    loading: '加载中',
    error: '搜索错误',
    placeholder: '搜索',
  },
  toc: {
    title: '目录',
    backToTop: true,
    float: true,
  },
  editLink: {
    text: '在 GitHub 上编辑此页面 →',
  },
  feedback: {
    content: '问题？给我反馈 →',
  },
  // 翻译功能
  navigation: true,
  // 底部版权标识
  footer: {
    text: (
      <div className="sl-footer">
        <span>Copyright © 2024 by MoFan. Licensed under CC BY-NC 4.0.</span>
      </div>
    ),
  },
  // 网站图标
  // faviconGlyph: './favicon.ico',
  // 编辑此页面的跳转链接 后会自动拼接 pages/
  docsRepositoryBase: `https://github.com/${username}/${repository}/tree/main/`,
  // 页面标题 %s 占位符 由文章标题内容使用
  useNextSeoProps() {
    return {
      titleTemplate: '%s',
    };
  },
  themeSwitch: {
    useOptions() {
      return {
        light: '白天',
        dark: '黑夜',
        system: '系统',
      };
    },
  },
  gitTimestamp: LastUpdateDate,
};
